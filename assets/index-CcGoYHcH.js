function KE(n,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in n)){const a=Object.getOwnPropertyDescriptor(r,o);a&&Object.defineProperty(n,o,a.get?a:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();function P_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var xf={exports:{}},Oa={},_f={exports:{}},St={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G0;function ZE(){if(G0)return St;G0=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),g=Symbol.iterator;function v(B){return B===null||typeof B!="object"?null:(B=g&&B[g]||B["@@iterator"],typeof B=="function"?B:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,b={};function y(B,ee,Ue){this.props=B,this.context=ee,this.refs=b,this.updater=Ue||_}y.prototype.isReactComponent={},y.prototype.setState=function(B,ee){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,ee,"setState")},y.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function S(){}S.prototype=y.prototype;function A(B,ee,Ue){this.props=B,this.context=ee,this.refs=b,this.updater=Ue||_}var P=A.prototype=new S;P.constructor=A,M(P,y.prototype),P.isPureReactComponent=!0;var D=Array.isArray,I=Object.prototype.hasOwnProperty,L={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function E(B,ee,Ue){var Be,be={},te=null,xe=null;if(ee!=null)for(Be in ee.ref!==void 0&&(xe=ee.ref),ee.key!==void 0&&(te=""+ee.key),ee)I.call(ee,Be)&&!k.hasOwnProperty(Be)&&(be[Be]=ee[Be]);var ge=arguments.length-2;if(ge===1)be.children=Ue;else if(1<ge){for(var Ee=Array(ge),Qe=0;Qe<ge;Qe++)Ee[Qe]=arguments[Qe+2];be.children=Ee}if(B&&B.defaultProps)for(Be in ge=B.defaultProps,ge)be[Be]===void 0&&(be[Be]=ge[Be]);return{$$typeof:n,type:B,key:te,ref:xe,props:be,_owner:L.current}}function F(B,ee){return{$$typeof:n,type:B.type,key:ee,ref:B.ref,props:B.props,_owner:B._owner}}function z(B){return typeof B=="object"&&B!==null&&B.$$typeof===n}function U(B){var ee={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(Ue){return ee[Ue]})}var q=/\/+/g;function re(B,ee){return typeof B=="object"&&B!==null&&B.key!=null?U(""+B.key):ee.toString(36)}function ue(B,ee,Ue,Be,be){var te=typeof B;(te==="undefined"||te==="boolean")&&(B=null);var xe=!1;if(B===null)xe=!0;else switch(te){case"string":case"number":xe=!0;break;case"object":switch(B.$$typeof){case n:case e:xe=!0}}if(xe)return xe=B,be=be(xe),B=Be===""?"."+re(xe,0):Be,D(be)?(Ue="",B!=null&&(Ue=B.replace(q,"$&/")+"/"),ue(be,ee,Ue,"",function(Qe){return Qe})):be!=null&&(z(be)&&(be=F(be,Ue+(!be.key||xe&&xe.key===be.key?"":(""+be.key).replace(q,"$&/")+"/")+B)),ee.push(be)),1;if(xe=0,Be=Be===""?".":Be+":",D(B))for(var ge=0;ge<B.length;ge++){te=B[ge];var Ee=Be+re(te,ge);xe+=ue(te,ee,Ue,Ee,be)}else if(Ee=v(B),typeof Ee=="function")for(B=Ee.call(B),ge=0;!(te=B.next()).done;)te=te.value,Ee=Be+re(te,ge++),xe+=ue(te,ee,Ue,Ee,be);else if(te==="object")throw ee=String(B),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.");return xe}function G(B,ee,Ue){if(B==null)return B;var Be=[],be=0;return ue(B,Be,"","",function(te){return ee.call(Ue,te,be++)}),Be}function Z(B){if(B._status===-1){var ee=B._result;ee=ee(),ee.then(function(Ue){(B._status===0||B._status===-1)&&(B._status=1,B._result=Ue)},function(Ue){(B._status===0||B._status===-1)&&(B._status=2,B._result=Ue)}),B._status===-1&&(B._status=0,B._result=ee)}if(B._status===1)return B._result.default;throw B._result}var W={current:null},Y={transition:null},se={ReactCurrentDispatcher:W,ReactCurrentBatchConfig:Y,ReactCurrentOwner:L};function j(){throw Error("act(...) is not supported in production builds of React.")}return St.Children={map:G,forEach:function(B,ee,Ue){G(B,function(){ee.apply(this,arguments)},Ue)},count:function(B){var ee=0;return G(B,function(){ee++}),ee},toArray:function(B){return G(B,function(ee){return ee})||[]},only:function(B){if(!z(B))throw Error("React.Children.only expected to receive a single React element child.");return B}},St.Component=y,St.Fragment=t,St.Profiler=o,St.PureComponent=A,St.StrictMode=r,St.Suspense=f,St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=se,St.act=j,St.cloneElement=function(B,ee,Ue){if(B==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+B+".");var Be=M({},B.props),be=B.key,te=B.ref,xe=B._owner;if(ee!=null){if(ee.ref!==void 0&&(te=ee.ref,xe=L.current),ee.key!==void 0&&(be=""+ee.key),B.type&&B.type.defaultProps)var ge=B.type.defaultProps;for(Ee in ee)I.call(ee,Ee)&&!k.hasOwnProperty(Ee)&&(Be[Ee]=ee[Ee]===void 0&&ge!==void 0?ge[Ee]:ee[Ee])}var Ee=arguments.length-2;if(Ee===1)Be.children=Ue;else if(1<Ee){ge=Array(Ee);for(var Qe=0;Qe<Ee;Qe++)ge[Qe]=arguments[Qe+2];Be.children=ge}return{$$typeof:n,type:B.type,key:be,ref:te,props:Be,_owner:xe}},St.createContext=function(B){return B={$$typeof:c,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},B.Provider={$$typeof:a,_context:B},B.Consumer=B},St.createElement=E,St.createFactory=function(B){var ee=E.bind(null,B);return ee.type=B,ee},St.createRef=function(){return{current:null}},St.forwardRef=function(B){return{$$typeof:u,render:B}},St.isValidElement=z,St.lazy=function(B){return{$$typeof:p,_payload:{_status:-1,_result:B},_init:Z}},St.memo=function(B,ee){return{$$typeof:h,type:B,compare:ee===void 0?null:ee}},St.startTransition=function(B){var ee=Y.transition;Y.transition={};try{B()}finally{Y.transition=ee}},St.unstable_act=j,St.useCallback=function(B,ee){return W.current.useCallback(B,ee)},St.useContext=function(B){return W.current.useContext(B)},St.useDebugValue=function(){},St.useDeferredValue=function(B){return W.current.useDeferredValue(B)},St.useEffect=function(B,ee){return W.current.useEffect(B,ee)},St.useId=function(){return W.current.useId()},St.useImperativeHandle=function(B,ee,Ue){return W.current.useImperativeHandle(B,ee,Ue)},St.useInsertionEffect=function(B,ee){return W.current.useInsertionEffect(B,ee)},St.useLayoutEffect=function(B,ee){return W.current.useLayoutEffect(B,ee)},St.useMemo=function(B,ee){return W.current.useMemo(B,ee)},St.useReducer=function(B,ee,Ue){return W.current.useReducer(B,ee,Ue)},St.useRef=function(B){return W.current.useRef(B)},St.useState=function(B){return W.current.useState(B)},St.useSyncExternalStore=function(B,ee,Ue){return W.current.useSyncExternalStore(B,ee,Ue)},St.useTransition=function(){return W.current.useTransition()},St.version="18.3.1",St}var H0;function bp(){return H0||(H0=1,_f.exports=ZE()),_f.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W0;function QE(){if(W0)return Oa;W0=1;var n=bp(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(u,f,h){var p,g={},v=null,_=null;h!==void 0&&(v=""+h),f.key!==void 0&&(v=""+f.key),f.ref!==void 0&&(_=f.ref);for(p in f)r.call(f,p)&&!a.hasOwnProperty(p)&&(g[p]=f[p]);if(u&&u.defaultProps)for(p in f=u.defaultProps,f)g[p]===void 0&&(g[p]=f[p]);return{$$typeof:e,type:u,key:v,ref:_,props:g,_owner:o.current}}return Oa.Fragment=t,Oa.jsx=c,Oa.jsxs=c,Oa}var j0;function JE(){return j0||(j0=1,xf.exports=QE()),xf.exports}var R=JE(),ce=bp();const Gs=P_(ce),ew=KE({__proto__:null,default:Gs},[ce]);var Mc={},yf={exports:{}},Kn={},Sf={exports:{}},Mf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X0;function tw(){return X0||(X0=1,(function(n){function e(Y,se){var j=Y.length;Y.push(se);e:for(;0<j;){var B=j-1>>>1,ee=Y[B];if(0<o(ee,se))Y[B]=se,Y[j]=ee,j=B;else break e}}function t(Y){return Y.length===0?null:Y[0]}function r(Y){if(Y.length===0)return null;var se=Y[0],j=Y.pop();if(j!==se){Y[0]=j;e:for(var B=0,ee=Y.length,Ue=ee>>>1;B<Ue;){var Be=2*(B+1)-1,be=Y[Be],te=Be+1,xe=Y[te];if(0>o(be,j))te<ee&&0>o(xe,be)?(Y[B]=xe,Y[te]=j,B=te):(Y[B]=be,Y[Be]=j,B=Be);else if(te<ee&&0>o(xe,j))Y[B]=xe,Y[te]=j,B=te;else break e}}return se}function o(Y,se){var j=Y.sortIndex-se.sortIndex;return j!==0?j:Y.id-se.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var c=Date,u=c.now();n.unstable_now=function(){return c.now()-u}}var f=[],h=[],p=1,g=null,v=3,_=!1,M=!1,b=!1,y=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(Y){for(var se=t(h);se!==null;){if(se.callback===null)r(h);else if(se.startTime<=Y)r(h),se.sortIndex=se.expirationTime,e(f,se);else break;se=t(h)}}function D(Y){if(b=!1,P(Y),!M)if(t(f)!==null)M=!0,Z(I);else{var se=t(h);se!==null&&W(D,se.startTime-Y)}}function I(Y,se){M=!1,b&&(b=!1,S(E),E=-1),_=!0;var j=v;try{for(P(se),g=t(f);g!==null&&(!(g.expirationTime>se)||Y&&!U());){var B=g.callback;if(typeof B=="function"){g.callback=null,v=g.priorityLevel;var ee=B(g.expirationTime<=se);se=n.unstable_now(),typeof ee=="function"?g.callback=ee:g===t(f)&&r(f),P(se)}else r(f);g=t(f)}if(g!==null)var Ue=!0;else{var Be=t(h);Be!==null&&W(D,Be.startTime-se),Ue=!1}return Ue}finally{g=null,v=j,_=!1}}var L=!1,k=null,E=-1,F=5,z=-1;function U(){return!(n.unstable_now()-z<F)}function q(){if(k!==null){var Y=n.unstable_now();z=Y;var se=!0;try{se=k(!0,Y)}finally{se?re():(L=!1,k=null)}}else L=!1}var re;if(typeof A=="function")re=function(){A(q)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,G=ue.port2;ue.port1.onmessage=q,re=function(){G.postMessage(null)}}else re=function(){y(q,0)};function Z(Y){k=Y,L||(L=!0,re())}function W(Y,se){E=y(function(){Y(n.unstable_now())},se)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(Y){Y.callback=null},n.unstable_continueExecution=function(){M||_||(M=!0,Z(I))},n.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<Y?Math.floor(1e3/Y):5},n.unstable_getCurrentPriorityLevel=function(){return v},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function(Y){switch(v){case 1:case 2:case 3:var se=3;break;default:se=v}var j=v;v=se;try{return Y()}finally{v=j}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(Y,se){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var j=v;v=Y;try{return se()}finally{v=j}},n.unstable_scheduleCallback=function(Y,se,j){var B=n.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?B+j:B):j=B,Y){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=j+ee,Y={id:p++,callback:se,priorityLevel:Y,startTime:j,expirationTime:ee,sortIndex:-1},j>B?(Y.sortIndex=j,e(h,Y),t(f)===null&&Y===t(h)&&(b?(S(E),E=-1):b=!0,W(D,j-B))):(Y.sortIndex=ee,e(f,Y),M||_||(M=!0,Z(I))),Y},n.unstable_shouldYield=U,n.unstable_wrapCallback=function(Y){var se=v;return function(){var j=v;v=se;try{return Y.apply(this,arguments)}finally{v=j}}}})(Mf)),Mf}var $0;function nw(){return $0||($0=1,Sf.exports=tw()),Sf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q0;function iw(){if(q0)return Kn;q0=1;var n=bp(),e=nw();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function a(i,s){c(i,s),c(i+"Capture",s)}function c(i,s){for(o[i]=s,i=0;i<s.length;i++)r.add(s[i])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},g={};function v(i){return f.call(g,i)?!0:f.call(p,i)?!1:h.test(i)?g[i]=!0:(p[i]=!0,!1)}function _(i,s,l,d){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return d?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function M(i,s,l,d){if(s===null||typeof s>"u"||_(i,s,l,d))return!0;if(d)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function b(i,s,l,d,m,x,T){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=d,this.attributeNamespace=m,this.mustUseProperty=l,this.propertyName=i,this.type=s,this.sanitizeURL=x,this.removeEmptyString=T}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){y[i]=new b(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];y[s]=new b(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){y[i]=new b(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){y[i]=new b(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){y[i]=new b(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){y[i]=new b(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){y[i]=new b(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){y[i]=new b(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){y[i]=new b(i,5,!1,i.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function A(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(S,A);y[s]=new b(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(S,A);y[s]=new b(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(S,A);y[s]=new b(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){y[i]=new b(i,1,!1,i.toLowerCase(),null,!1,!1)}),y.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){y[i]=new b(i,1,!1,i.toLowerCase(),null,!0,!0)});function P(i,s,l,d){var m=y.hasOwnProperty(s)?y[s]:null;(m!==null?m.type!==0:d||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(M(s,l,m,d)&&(l=null),d||m===null?v(s)&&(l===null?i.removeAttribute(s):i.setAttribute(s,""+l)):m.mustUseProperty?i[m.propertyName]=l===null?m.type===3?!1:"":l:(s=m.attributeName,d=m.attributeNamespace,l===null?i.removeAttribute(s):(m=m.type,l=m===3||m===4&&l===!0?"":""+l,d?i.setAttributeNS(d,s,l):i.setAttribute(s,l))))}var D=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),L=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),U=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),re=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),W=Symbol.for("react.offscreen"),Y=Symbol.iterator;function se(i){return i===null||typeof i!="object"?null:(i=Y&&i[Y]||i["@@iterator"],typeof i=="function"?i:null)}var j=Object.assign,B;function ee(i){if(B===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);B=s&&s[1]||""}return`
`+B+i}var Ue=!1;function Be(i,s){if(!i||Ue)return"";Ue=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(de){var d=de}Reflect.construct(i,[],s)}else{try{s.call()}catch(de){d=de}i.call(s.prototype)}else{try{throw Error()}catch(de){d=de}i()}}catch(de){if(de&&d&&typeof de.stack=="string"){for(var m=de.stack.split(`
`),x=d.stack.split(`
`),T=m.length-1,O=x.length-1;1<=T&&0<=O&&m[T]!==x[O];)O--;for(;1<=T&&0<=O;T--,O--)if(m[T]!==x[O]){if(T!==1||O!==1)do if(T--,O--,0>O||m[T]!==x[O]){var V=`
`+m[T].replace(" at new "," at ");return i.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",i.displayName)),V}while(1<=T&&0<=O);break}}}finally{Ue=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?ee(i):""}function be(i){switch(i.tag){case 5:return ee(i.type);case 16:return ee("Lazy");case 13:return ee("Suspense");case 19:return ee("SuspenseList");case 0:case 2:case 15:return i=Be(i.type,!1),i;case 11:return i=Be(i.type.render,!1),i;case 1:return i=Be(i.type,!0),i;default:return""}}function te(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case k:return"Fragment";case L:return"Portal";case F:return"Profiler";case E:return"StrictMode";case re:return"Suspense";case ue:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case U:return(i.displayName||"Context")+".Consumer";case z:return(i._context.displayName||"Context")+".Provider";case q:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case G:return s=i.displayName||null,s!==null?s:te(i.type)||"Memo";case Z:s=i._payload,i=i._init;try{return te(i(s))}catch{}}return null}function xe(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return te(s);case 8:return s===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function ge(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ee(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Qe(i){var s=Ee(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),d=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var m=l.get,x=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return m.call(this)},set:function(T){d=""+T,x.call(this,T)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return d},setValue:function(T){d=""+T},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function tt(i){i._valueTracker||(i._valueTracker=Qe(i))}function Pt(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),d="";return i&&(d=Ee(i)?i.checked?"true":"false":i.value),i=d,i!==l?(s.setValue(i),!0):!1}function lt(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function Mt(i,s){var l=s.checked;return j({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function kt(i,s){var l=s.defaultValue==null?"":s.defaultValue,d=s.checked!=null?s.checked:s.defaultChecked;l=ge(s.value!=null?s.value:l),i._wrapperState={initialChecked:d,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function pt(i,s){s=s.checked,s!=null&&P(i,"checked",s,!1)}function Qt(i,s){pt(i,s);var l=ge(s.value),d=s.type;if(l!=null)d==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(d==="submit"||d==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?bn(i,s.type,l):s.hasOwnProperty("defaultValue")&&bn(i,s.type,ge(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function Gt(i,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var d=s.type;if(!(d!=="submit"&&d!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,l||s===i.value||(i.value=s),i.defaultValue=s}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function bn(i,s,l){(s!=="number"||lt(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var X=Array.isArray;function Ht(i,s,l,d){if(i=i.options,s){s={};for(var m=0;m<l.length;m++)s["$"+l[m]]=!0;for(l=0;l<i.length;l++)m=s.hasOwnProperty("$"+i[l].value),i[l].selected!==m&&(i[l].selected=m),m&&d&&(i[l].defaultSelected=!0)}else{for(l=""+ge(l),s=null,m=0;m<i.length;m++){if(i[m].value===l){i[m].selected=!0,d&&(i[m].defaultSelected=!0);return}s!==null||i[m].disabled||(s=i[m])}s!==null&&(s.selected=!0)}}function mt(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return j({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function Nt(i,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(X(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}i._wrapperState={initialValue:ge(l)}}function Ie(i,s){var l=ge(s.value),d=ge(s.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),s.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),d!=null&&(i.defaultValue=""+d)}function Xt(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function N(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function w(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?N(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var Q,pe=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,d,m){MSApp.execUnsafeLocalFunction(function(){return i(s,l,d,m)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(Q=Q||document.createElement("div"),Q.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Q.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function ve(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var we={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ne=["Webkit","ms","Moz","O"];Object.keys(we).forEach(function(i){Ne.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),we[s]=we[i]})});function fe(i,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||we.hasOwnProperty(i)&&we[i]?(""+s).trim():s+"px"}function me(i,s){i=i.style;for(var l in s)if(s.hasOwnProperty(l)){var d=l.indexOf("--")===0,m=fe(l,s[l],d);l==="float"&&(l="cssFloat"),d?i.setProperty(l,m):i[l]=m}}var ke=j({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ze(i,s){if(s){if(ke[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Re(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Te=null;function st(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var ct=null,vt=null,H=null;function Ce(i){if(i=Ea(i)){if(typeof ct!="function")throw Error(t(280));var s=i.stateNode;s&&(s=kl(s),ct(i.stateNode,i.type,s))}}function he(i){vt?H?H.push(i):H=[i]:vt=i}function Oe(){if(vt){var i=vt,s=H;if(H=vt=null,Ce(i),s)for(i=0;i<s.length;i++)Ce(s[i])}}function De(i,s){return i(s)}function _e(){}var qe=!1;function ut(i,s,l){if(qe)return i(s,l);qe=!0;try{return De(i,s,l)}finally{qe=!1,(vt!==null||H!==null)&&(_e(),Oe())}}function zt(i,s){var l=i.stateNode;if(l===null)return null;var d=kl(l);if(d===null)return null;l=d[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(i=i.type,d=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!d;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var Ct=!1;if(u)try{var On={};Object.defineProperty(On,"passive",{get:function(){Ct=!0}}),window.addEventListener("test",On,On),window.removeEventListener("test",On,On)}catch{Ct=!1}function li(i,s,l,d,m,x,T,O,V){var de=Array.prototype.slice.call(arguments,3);try{s.apply(l,de)}catch(Se){this.onError(Se)}}var nr=!1,Ys=null,ds=!1,Ks=null,ir={onError:function(i){nr=!0,Ys=i}};function na(i,s,l,d,m,x,T,O,V){nr=!1,Ys=null,li.apply(ir,arguments)}function yl(i,s,l,d,m,x,T,O,V){if(na.apply(this,arguments),nr){if(nr){var de=Ys;nr=!1,Ys=null}else throw Error(t(198));ds||(ds=!0,Ks=de)}}function Oi(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function fs(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function ia(i){if(Oi(i)!==i)throw Error(t(188))}function Zs(i){var s=i.alternate;if(!s){if(s=Oi(i),s===null)throw Error(t(188));return s!==i?null:i}for(var l=i,d=s;;){var m=l.return;if(m===null)break;var x=m.alternate;if(x===null){if(d=m.return,d!==null){l=d;continue}break}if(m.child===x.child){for(x=m.child;x;){if(x===l)return ia(m),i;if(x===d)return ia(m),s;x=x.sibling}throw Error(t(188))}if(l.return!==d.return)l=m,d=x;else{for(var T=!1,O=m.child;O;){if(O===l){T=!0,l=m,d=x;break}if(O===d){T=!0,d=m,l=x;break}O=O.sibling}if(!T){for(O=x.child;O;){if(O===l){T=!0,l=x,d=m;break}if(O===d){T=!0,d=x,l=m;break}O=O.sibling}if(!T)throw Error(t(189))}}if(l.alternate!==d)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:s}function ra(i){return i=Zs(i),i!==null?sa(i):null}function sa(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=sa(i);if(s!==null)return s;i=i.sibling}return null}var Sl=e.unstable_scheduleCallback,Ml=e.unstable_cancelCallback,zu=e.unstable_shouldYield,Vu=e.unstable_requestPaint,Jt=e.unstable_now,Gu=e.unstable_getCurrentPriorityLevel,oa=e.unstable_ImmediatePriority,C=e.unstable_UserBlockingPriority,K=e.unstable_NormalPriority,le=e.unstable_LowPriority,ie=e.unstable_IdlePriority,ne=null,Le=null;function He(i){if(Le&&typeof Le.onCommitFiberRoot=="function")try{Le.onCommitFiberRoot(ne,i,void 0,(i.current.flags&128)===128)}catch{}}var Pe=Math.clz32?Math.clz32:dt,Ye=Math.log,et=Math.LN2;function dt(i){return i>>>=0,i===0?32:31-(Ye(i)/et|0)|0}var ft=64,Ze=4194304;function bt(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function Wt(i,s){var l=i.pendingLanes;if(l===0)return 0;var d=0,m=i.suspendedLanes,x=i.pingedLanes,T=l&268435455;if(T!==0){var O=T&~m;O!==0?d=bt(O):(x&=T,x!==0&&(d=bt(x)))}else T=l&~m,T!==0?d=bt(T):x!==0&&(d=bt(x));if(d===0)return 0;if(s!==0&&s!==d&&(s&m)===0&&(m=d&-d,x=s&-s,m>=x||m===16&&(x&4194240)!==0))return s;if((d&4)!==0&&(d|=l&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=d;0<s;)l=31-Pe(s),m=1<<l,d|=i[l],s&=~m;return d}function Kt(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function It(i,s){for(var l=i.suspendedLanes,d=i.pingedLanes,m=i.expirationTimes,x=i.pendingLanes;0<x;){var T=31-Pe(x),O=1<<T,V=m[T];V===-1?((O&l)===0||(O&d)!==0)&&(m[T]=Kt(O,s)):V<=s&&(i.expiredLanes|=O),x&=~O}}function un(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Ve(){var i=ft;return ft<<=1,(ft&4194240)===0&&(ft=64),i}function Tn(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function xt(i,s,l){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-Pe(s),i[s]=l}function Hn(i,s){var l=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var d=i.eventTimes;for(i=i.expirationTimes;0<l;){var m=31-Pe(l),x=1<<m;s[m]=0,d[m]=-1,i[m]=-1,l&=~x}}function Wn(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var d=31-Pe(l),m=1<<d;m&s|i[d]&s&&(i[d]|=s),l&=~m}}var yt=0;function rr(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var Lt,$t,yi,Ut,Si,Bi=!1,hs=[],Dr=null,Lr=null,Nr=null,aa=new Map,la=new Map,Ir=[],xM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bm(i,s){switch(i){case"focusin":case"focusout":Dr=null;break;case"dragenter":case"dragleave":Lr=null;break;case"mouseover":case"mouseout":Nr=null;break;case"pointerover":case"pointerout":aa.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":la.delete(s.pointerId)}}function ca(i,s,l,d,m,x){return i===null||i.nativeEvent!==x?(i={blockedOn:s,domEventName:l,eventSystemFlags:d,nativeEvent:x,targetContainers:[m]},s!==null&&(s=Ea(s),s!==null&&$t(s)),i):(i.eventSystemFlags|=d,s=i.targetContainers,m!==null&&s.indexOf(m)===-1&&s.push(m),i)}function _M(i,s,l,d,m){switch(s){case"focusin":return Dr=ca(Dr,i,s,l,d,m),!0;case"dragenter":return Lr=ca(Lr,i,s,l,d,m),!0;case"mouseover":return Nr=ca(Nr,i,s,l,d,m),!0;case"pointerover":var x=m.pointerId;return aa.set(x,ca(aa.get(x)||null,i,s,l,d,m)),!0;case"gotpointercapture":return x=m.pointerId,la.set(x,ca(la.get(x)||null,i,s,l,d,m)),!0}return!1}function Tm(i){var s=ps(i.target);if(s!==null){var l=Oi(s);if(l!==null){if(s=l.tag,s===13){if(s=fs(l),s!==null){i.blockedOn=s,Si(i.priority,function(){yi(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function El(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=Wu(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var d=new l.constructor(l.type,l);Te=d,l.target.dispatchEvent(d),Te=null}else return s=Ea(l),s!==null&&$t(s),i.blockedOn=l,!1;s.shift()}return!0}function Am(i,s,l){El(i)&&l.delete(s)}function yM(){Bi=!1,Dr!==null&&El(Dr)&&(Dr=null),Lr!==null&&El(Lr)&&(Lr=null),Nr!==null&&El(Nr)&&(Nr=null),aa.forEach(Am),la.forEach(Am)}function ua(i,s){i.blockedOn===s&&(i.blockedOn=null,Bi||(Bi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,yM)))}function da(i){function s(m){return ua(m,i)}if(0<hs.length){ua(hs[0],i);for(var l=1;l<hs.length;l++){var d=hs[l];d.blockedOn===i&&(d.blockedOn=null)}}for(Dr!==null&&ua(Dr,i),Lr!==null&&ua(Lr,i),Nr!==null&&ua(Nr,i),aa.forEach(s),la.forEach(s),l=0;l<Ir.length;l++)d=Ir[l],d.blockedOn===i&&(d.blockedOn=null);for(;0<Ir.length&&(l=Ir[0],l.blockedOn===null);)Tm(l),l.blockedOn===null&&Ir.shift()}var Qs=D.ReactCurrentBatchConfig,wl=!0;function SM(i,s,l,d){var m=yt,x=Qs.transition;Qs.transition=null;try{yt=1,Hu(i,s,l,d)}finally{yt=m,Qs.transition=x}}function MM(i,s,l,d){var m=yt,x=Qs.transition;Qs.transition=null;try{yt=4,Hu(i,s,l,d)}finally{yt=m,Qs.transition=x}}function Hu(i,s,l,d){if(wl){var m=Wu(i,s,l,d);if(m===null)ad(i,s,d,bl,l),bm(i,d);else if(_M(m,i,s,l,d))d.stopPropagation();else if(bm(i,d),s&4&&-1<xM.indexOf(i)){for(;m!==null;){var x=Ea(m);if(x!==null&&Lt(x),x=Wu(i,s,l,d),x===null&&ad(i,s,d,bl,l),x===m)break;m=x}m!==null&&d.stopPropagation()}else ad(i,s,d,null,l)}}var bl=null;function Wu(i,s,l,d){if(bl=null,i=st(d),i=ps(i),i!==null)if(s=Oi(i),s===null)i=null;else if(l=s.tag,l===13){if(i=fs(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return bl=i,null}function Cm(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gu()){case oa:return 1;case C:return 4;case K:case le:return 16;case ie:return 536870912;default:return 16}default:return 16}}var Ur=null,ju=null,Tl=null;function Rm(){if(Tl)return Tl;var i,s=ju,l=s.length,d,m="value"in Ur?Ur.value:Ur.textContent,x=m.length;for(i=0;i<l&&s[i]===m[i];i++);var T=l-i;for(d=1;d<=T&&s[l-d]===m[x-d];d++);return Tl=m.slice(i,1<d?1-d:void 0)}function Al(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function Cl(){return!0}function Pm(){return!1}function Jn(i){function s(l,d,m,x,T){this._reactName=l,this._targetInst=m,this.type=d,this.nativeEvent=x,this.target=T,this.currentTarget=null;for(var O in i)i.hasOwnProperty(O)&&(l=i[O],this[O]=l?l(x):x[O]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?Cl:Pm,this.isPropagationStopped=Pm,this}return j(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Cl)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Cl)},persist:function(){},isPersistent:Cl}),s}var Js={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xu=Jn(Js),fa=j({},Js,{view:0,detail:0}),EM=Jn(fa),$u,qu,ha,Rl=j({},fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ku,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==ha&&(ha&&i.type==="mousemove"?($u=i.screenX-ha.screenX,qu=i.screenY-ha.screenY):qu=$u=0,ha=i),$u)},movementY:function(i){return"movementY"in i?i.movementY:qu}}),Dm=Jn(Rl),wM=j({},Rl,{dataTransfer:0}),bM=Jn(wM),TM=j({},fa,{relatedTarget:0}),Yu=Jn(TM),AM=j({},Js,{animationName:0,elapsedTime:0,pseudoElement:0}),CM=Jn(AM),RM=j({},Js,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),PM=Jn(RM),DM=j({},Js,{data:0}),Lm=Jn(DM),LM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},NM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},IM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function UM(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=IM[i])?!!s[i]:!1}function Ku(){return UM}var FM=j({},fa,{key:function(i){if(i.key){var s=LM[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=Al(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?NM[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ku,charCode:function(i){return i.type==="keypress"?Al(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Al(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),kM=Jn(FM),OM=j({},Rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nm=Jn(OM),BM=j({},fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ku}),zM=Jn(BM),VM=j({},Js,{propertyName:0,elapsedTime:0,pseudoElement:0}),GM=Jn(VM),HM=j({},Rl,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),WM=Jn(HM),jM=[9,13,27,32],Zu=u&&"CompositionEvent"in window,pa=null;u&&"documentMode"in document&&(pa=document.documentMode);var XM=u&&"TextEvent"in window&&!pa,Im=u&&(!Zu||pa&&8<pa&&11>=pa),Um=" ",Fm=!1;function km(i,s){switch(i){case"keyup":return jM.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Om(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var eo=!1;function $M(i,s){switch(i){case"compositionend":return Om(s);case"keypress":return s.which!==32?null:(Fm=!0,Um);case"textInput":return i=s.data,i===Um&&Fm?null:i;default:return null}}function qM(i,s){if(eo)return i==="compositionend"||!Zu&&km(i,s)?(i=Rm(),Tl=ju=Ur=null,eo=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Im&&s.locale!=="ko"?null:s.data;default:return null}}var YM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bm(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!YM[i.type]:s==="textarea"}function zm(i,s,l,d){he(d),s=Il(s,"onChange"),0<s.length&&(l=new Xu("onChange","change",null,l,d),i.push({event:l,listeners:s}))}var ma=null,ga=null;function KM(i){rg(i,0)}function Pl(i){var s=so(i);if(Pt(s))return i}function ZM(i,s){if(i==="change")return s}var Vm=!1;if(u){var Qu;if(u){var Ju="oninput"in document;if(!Ju){var Gm=document.createElement("div");Gm.setAttribute("oninput","return;"),Ju=typeof Gm.oninput=="function"}Qu=Ju}else Qu=!1;Vm=Qu&&(!document.documentMode||9<document.documentMode)}function Hm(){ma&&(ma.detachEvent("onpropertychange",Wm),ga=ma=null)}function Wm(i){if(i.propertyName==="value"&&Pl(ga)){var s=[];zm(s,ga,i,st(i)),ut(KM,s)}}function QM(i,s,l){i==="focusin"?(Hm(),ma=s,ga=l,ma.attachEvent("onpropertychange",Wm)):i==="focusout"&&Hm()}function JM(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Pl(ga)}function eE(i,s){if(i==="click")return Pl(s)}function tE(i,s){if(i==="input"||i==="change")return Pl(s)}function nE(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var Mi=typeof Object.is=="function"?Object.is:nE;function va(i,s){if(Mi(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),d=Object.keys(s);if(l.length!==d.length)return!1;for(d=0;d<l.length;d++){var m=l[d];if(!f.call(s,m)||!Mi(i[m],s[m]))return!1}return!0}function jm(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Xm(i,s){var l=jm(i);i=0;for(var d;l;){if(l.nodeType===3){if(d=i+l.textContent.length,i<=s&&d>=s)return{node:l,offset:s-i};i=d}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=jm(l)}}function $m(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?$m(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function qm(){for(var i=window,s=lt();s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=lt(i.document)}return s}function ed(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function iE(i){var s=qm(),l=i.focusedElem,d=i.selectionRange;if(s!==l&&l&&l.ownerDocument&&$m(l.ownerDocument.documentElement,l)){if(d!==null&&ed(l)){if(s=d.start,i=d.end,i===void 0&&(i=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(i,l.value.length);else if(i=(s=l.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var m=l.textContent.length,x=Math.min(d.start,m);d=d.end===void 0?x:Math.min(d.end,m),!i.extend&&x>d&&(m=d,d=x,x=m),m=Xm(l,x);var T=Xm(l,d);m&&T&&(i.rangeCount!==1||i.anchorNode!==m.node||i.anchorOffset!==m.offset||i.focusNode!==T.node||i.focusOffset!==T.offset)&&(s=s.createRange(),s.setStart(m.node,m.offset),i.removeAllRanges(),x>d?(i.addRange(s),i.extend(T.node,T.offset)):(s.setEnd(T.node,T.offset),i.addRange(s)))}}for(s=[],i=l;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)i=s[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var rE=u&&"documentMode"in document&&11>=document.documentMode,to=null,td=null,xa=null,nd=!1;function Ym(i,s,l){var d=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;nd||to==null||to!==lt(d)||(d=to,"selectionStart"in d&&ed(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),xa&&va(xa,d)||(xa=d,d=Il(td,"onSelect"),0<d.length&&(s=new Xu("onSelect","select",null,s,l),i.push({event:s,listeners:d}),s.target=to)))}function Dl(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var no={animationend:Dl("Animation","AnimationEnd"),animationiteration:Dl("Animation","AnimationIteration"),animationstart:Dl("Animation","AnimationStart"),transitionend:Dl("Transition","TransitionEnd")},id={},Km={};u&&(Km=document.createElement("div").style,"AnimationEvent"in window||(delete no.animationend.animation,delete no.animationiteration.animation,delete no.animationstart.animation),"TransitionEvent"in window||delete no.transitionend.transition);function Ll(i){if(id[i])return id[i];if(!no[i])return i;var s=no[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in Km)return id[i]=s[l];return i}var Zm=Ll("animationend"),Qm=Ll("animationiteration"),Jm=Ll("animationstart"),eg=Ll("transitionend"),tg=new Map,ng="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fr(i,s){tg.set(i,s),a(s,[i])}for(var rd=0;rd<ng.length;rd++){var sd=ng[rd],sE=sd.toLowerCase(),oE=sd[0].toUpperCase()+sd.slice(1);Fr(sE,"on"+oE)}Fr(Zm,"onAnimationEnd"),Fr(Qm,"onAnimationIteration"),Fr(Jm,"onAnimationStart"),Fr("dblclick","onDoubleClick"),Fr("focusin","onFocus"),Fr("focusout","onBlur"),Fr(eg,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _a="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aE=new Set("cancel close invalid load scroll toggle".split(" ").concat(_a));function ig(i,s,l){var d=i.type||"unknown-event";i.currentTarget=l,yl(d,s,void 0,i),i.currentTarget=null}function rg(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var d=i[l],m=d.event;d=d.listeners;e:{var x=void 0;if(s)for(var T=d.length-1;0<=T;T--){var O=d[T],V=O.instance,de=O.currentTarget;if(O=O.listener,V!==x&&m.isPropagationStopped())break e;ig(m,O,de),x=V}else for(T=0;T<d.length;T++){if(O=d[T],V=O.instance,de=O.currentTarget,O=O.listener,V!==x&&m.isPropagationStopped())break e;ig(m,O,de),x=V}}}if(ds)throw i=Ks,ds=!1,Ks=null,i}function qt(i,s){var l=s[hd];l===void 0&&(l=s[hd]=new Set);var d=i+"__bubble";l.has(d)||(sg(s,i,2,!1),l.add(d))}function od(i,s,l){var d=0;s&&(d|=4),sg(l,i,d,s)}var Nl="_reactListening"+Math.random().toString(36).slice(2);function ya(i){if(!i[Nl]){i[Nl]=!0,r.forEach(function(l){l!=="selectionchange"&&(aE.has(l)||od(l,!1,i),od(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[Nl]||(s[Nl]=!0,od("selectionchange",!1,s))}}function sg(i,s,l,d){switch(Cm(s)){case 1:var m=SM;break;case 4:m=MM;break;default:m=Hu}l=m.bind(null,s,l,i),m=void 0,!Ct||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(m=!0),d?m!==void 0?i.addEventListener(s,l,{capture:!0,passive:m}):i.addEventListener(s,l,!0):m!==void 0?i.addEventListener(s,l,{passive:m}):i.addEventListener(s,l,!1)}function ad(i,s,l,d,m){var x=d;if((s&1)===0&&(s&2)===0&&d!==null)e:for(;;){if(d===null)return;var T=d.tag;if(T===3||T===4){var O=d.stateNode.containerInfo;if(O===m||O.nodeType===8&&O.parentNode===m)break;if(T===4)for(T=d.return;T!==null;){var V=T.tag;if((V===3||V===4)&&(V=T.stateNode.containerInfo,V===m||V.nodeType===8&&V.parentNode===m))return;T=T.return}for(;O!==null;){if(T=ps(O),T===null)return;if(V=T.tag,V===5||V===6){d=x=T;continue e}O=O.parentNode}}d=d.return}ut(function(){var de=x,Se=st(l),Me=[];e:{var ye=tg.get(i);if(ye!==void 0){var Ge=Xu,je=i;switch(i){case"keypress":if(Al(l)===0)break e;case"keydown":case"keyup":Ge=kM;break;case"focusin":je="focus",Ge=Yu;break;case"focusout":je="blur",Ge=Yu;break;case"beforeblur":case"afterblur":Ge=Yu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ge=Dm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ge=bM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ge=zM;break;case Zm:case Qm:case Jm:Ge=CM;break;case eg:Ge=GM;break;case"scroll":Ge=EM;break;case"wheel":Ge=WM;break;case"copy":case"cut":case"paste":Ge=PM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ge=Nm}var Ke=(s&4)!==0,on=!Ke&&i==="scroll",J=Ke?ye!==null?ye+"Capture":null:ye;Ke=[];for(var $=de,oe;$!==null;){oe=$;var Ae=oe.stateNode;if(oe.tag===5&&Ae!==null&&(oe=Ae,J!==null&&(Ae=zt($,J),Ae!=null&&Ke.push(Sa($,Ae,oe)))),on)break;$=$.return}0<Ke.length&&(ye=new Ge(ye,je,null,l,Se),Me.push({event:ye,listeners:Ke}))}}if((s&7)===0){e:{if(ye=i==="mouseover"||i==="pointerover",Ge=i==="mouseout"||i==="pointerout",ye&&l!==Te&&(je=l.relatedTarget||l.fromElement)&&(ps(je)||je[sr]))break e;if((Ge||ye)&&(ye=Se.window===Se?Se:(ye=Se.ownerDocument)?ye.defaultView||ye.parentWindow:window,Ge?(je=l.relatedTarget||l.toElement,Ge=de,je=je?ps(je):null,je!==null&&(on=Oi(je),je!==on||je.tag!==5&&je.tag!==6)&&(je=null)):(Ge=null,je=de),Ge!==je)){if(Ke=Dm,Ae="onMouseLeave",J="onMouseEnter",$="mouse",(i==="pointerout"||i==="pointerover")&&(Ke=Nm,Ae="onPointerLeave",J="onPointerEnter",$="pointer"),on=Ge==null?ye:so(Ge),oe=je==null?ye:so(je),ye=new Ke(Ae,$+"leave",Ge,l,Se),ye.target=on,ye.relatedTarget=oe,Ae=null,ps(Se)===de&&(Ke=new Ke(J,$+"enter",je,l,Se),Ke.target=oe,Ke.relatedTarget=on,Ae=Ke),on=Ae,Ge&&je)t:{for(Ke=Ge,J=je,$=0,oe=Ke;oe;oe=io(oe))$++;for(oe=0,Ae=J;Ae;Ae=io(Ae))oe++;for(;0<$-oe;)Ke=io(Ke),$--;for(;0<oe-$;)J=io(J),oe--;for(;$--;){if(Ke===J||J!==null&&Ke===J.alternate)break t;Ke=io(Ke),J=io(J)}Ke=null}else Ke=null;Ge!==null&&og(Me,ye,Ge,Ke,!1),je!==null&&on!==null&&og(Me,on,je,Ke,!0)}}e:{if(ye=de?so(de):window,Ge=ye.nodeName&&ye.nodeName.toLowerCase(),Ge==="select"||Ge==="input"&&ye.type==="file")var Je=ZM;else if(Bm(ye))if(Vm)Je=tE;else{Je=JM;var nt=QM}else(Ge=ye.nodeName)&&Ge.toLowerCase()==="input"&&(ye.type==="checkbox"||ye.type==="radio")&&(Je=eE);if(Je&&(Je=Je(i,de))){zm(Me,Je,l,Se);break e}nt&&nt(i,ye,de),i==="focusout"&&(nt=ye._wrapperState)&&nt.controlled&&ye.type==="number"&&bn(ye,"number",ye.value)}switch(nt=de?so(de):window,i){case"focusin":(Bm(nt)||nt.contentEditable==="true")&&(to=nt,td=de,xa=null);break;case"focusout":xa=td=to=null;break;case"mousedown":nd=!0;break;case"contextmenu":case"mouseup":case"dragend":nd=!1,Ym(Me,l,Se);break;case"selectionchange":if(rE)break;case"keydown":case"keyup":Ym(Me,l,Se)}var it;if(Zu)e:{switch(i){case"compositionstart":var ot="onCompositionStart";break e;case"compositionend":ot="onCompositionEnd";break e;case"compositionupdate":ot="onCompositionUpdate";break e}ot=void 0}else eo?km(i,l)&&(ot="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(ot="onCompositionStart");ot&&(Im&&l.locale!=="ko"&&(eo||ot!=="onCompositionStart"?ot==="onCompositionEnd"&&eo&&(it=Rm()):(Ur=Se,ju="value"in Ur?Ur.value:Ur.textContent,eo=!0)),nt=Il(de,ot),0<nt.length&&(ot=new Lm(ot,i,null,l,Se),Me.push({event:ot,listeners:nt}),it?ot.data=it:(it=Om(l),it!==null&&(ot.data=it)))),(it=XM?$M(i,l):qM(i,l))&&(de=Il(de,"onBeforeInput"),0<de.length&&(Se=new Lm("onBeforeInput","beforeinput",null,l,Se),Me.push({event:Se,listeners:de}),Se.data=it))}rg(Me,s)})}function Sa(i,s,l){return{instance:i,listener:s,currentTarget:l}}function Il(i,s){for(var l=s+"Capture",d=[];i!==null;){var m=i,x=m.stateNode;m.tag===5&&x!==null&&(m=x,x=zt(i,l),x!=null&&d.unshift(Sa(i,x,m)),x=zt(i,s),x!=null&&d.push(Sa(i,x,m))),i=i.return}return d}function io(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function og(i,s,l,d,m){for(var x=s._reactName,T=[];l!==null&&l!==d;){var O=l,V=O.alternate,de=O.stateNode;if(V!==null&&V===d)break;O.tag===5&&de!==null&&(O=de,m?(V=zt(l,x),V!=null&&T.unshift(Sa(l,V,O))):m||(V=zt(l,x),V!=null&&T.push(Sa(l,V,O)))),l=l.return}T.length!==0&&i.push({event:s,listeners:T})}var lE=/\r\n?/g,cE=/\u0000|\uFFFD/g;function ag(i){return(typeof i=="string"?i:""+i).replace(lE,`
`).replace(cE,"")}function Ul(i,s,l){if(s=ag(s),ag(i)!==s&&l)throw Error(t(425))}function Fl(){}var ld=null,cd=null;function ud(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var dd=typeof setTimeout=="function"?setTimeout:void 0,uE=typeof clearTimeout=="function"?clearTimeout:void 0,lg=typeof Promise=="function"?Promise:void 0,dE=typeof queueMicrotask=="function"?queueMicrotask:typeof lg<"u"?function(i){return lg.resolve(null).then(i).catch(fE)}:dd;function fE(i){setTimeout(function(){throw i})}function fd(i,s){var l=s,d=0;do{var m=l.nextSibling;if(i.removeChild(l),m&&m.nodeType===8)if(l=m.data,l==="/$"){if(d===0){i.removeChild(m),da(s);return}d--}else l!=="$"&&l!=="$?"&&l!=="$!"||d++;l=m}while(l);da(s)}function kr(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function cg(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}var ro=Math.random().toString(36).slice(2),zi="__reactFiber$"+ro,Ma="__reactProps$"+ro,sr="__reactContainer$"+ro,hd="__reactEvents$"+ro,hE="__reactListeners$"+ro,pE="__reactHandles$"+ro;function ps(i){var s=i[zi];if(s)return s;for(var l=i.parentNode;l;){if(s=l[sr]||l[zi]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=cg(i);i!==null;){if(l=i[zi])return l;i=cg(i)}return s}i=l,l=i.parentNode}return null}function Ea(i){return i=i[zi]||i[sr],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function so(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function kl(i){return i[Ma]||null}var pd=[],oo=-1;function Or(i){return{current:i}}function Yt(i){0>oo||(i.current=pd[oo],pd[oo]=null,oo--)}function jt(i,s){oo++,pd[oo]=i.current,i.current=s}var Br={},Pn=Or(Br),jn=Or(!1),ms=Br;function ao(i,s){var l=i.type.contextTypes;if(!l)return Br;var d=i.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===s)return d.__reactInternalMemoizedMaskedChildContext;var m={},x;for(x in l)m[x]=s[x];return d&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=m),m}function Xn(i){return i=i.childContextTypes,i!=null}function Ol(){Yt(jn),Yt(Pn)}function ug(i,s,l){if(Pn.current!==Br)throw Error(t(168));jt(Pn,s),jt(jn,l)}function dg(i,s,l){var d=i.stateNode;if(s=s.childContextTypes,typeof d.getChildContext!="function")return l;d=d.getChildContext();for(var m in d)if(!(m in s))throw Error(t(108,xe(i)||"Unknown",m));return j({},l,d)}function Bl(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Br,ms=Pn.current,jt(Pn,i),jt(jn,jn.current),!0}function fg(i,s,l){var d=i.stateNode;if(!d)throw Error(t(169));l?(i=dg(i,s,ms),d.__reactInternalMemoizedMergedChildContext=i,Yt(jn),Yt(Pn),jt(Pn,i)):Yt(jn),jt(jn,l)}var or=null,zl=!1,md=!1;function hg(i){or===null?or=[i]:or.push(i)}function mE(i){zl=!0,hg(i)}function zr(){if(!md&&or!==null){md=!0;var i=0,s=yt;try{var l=or;for(yt=1;i<l.length;i++){var d=l[i];do d=d(!0);while(d!==null)}or=null,zl=!1}catch(m){throw or!==null&&(or=or.slice(i+1)),Sl(oa,zr),m}finally{yt=s,md=!1}}return null}var lo=[],co=0,Vl=null,Gl=0,ci=[],ui=0,gs=null,ar=1,lr="";function vs(i,s){lo[co++]=Gl,lo[co++]=Vl,Vl=i,Gl=s}function pg(i,s,l){ci[ui++]=ar,ci[ui++]=lr,ci[ui++]=gs,gs=i;var d=ar;i=lr;var m=32-Pe(d)-1;d&=~(1<<m),l+=1;var x=32-Pe(s)+m;if(30<x){var T=m-m%5;x=(d&(1<<T)-1).toString(32),d>>=T,m-=T,ar=1<<32-Pe(s)+m|l<<m|d,lr=x+i}else ar=1<<x|l<<m|d,lr=i}function gd(i){i.return!==null&&(vs(i,1),pg(i,1,0))}function vd(i){for(;i===Vl;)Vl=lo[--co],lo[co]=null,Gl=lo[--co],lo[co]=null;for(;i===gs;)gs=ci[--ui],ci[ui]=null,lr=ci[--ui],ci[ui]=null,ar=ci[--ui],ci[ui]=null}var ei=null,ti=null,Zt=!1,Ei=null;function mg(i,s){var l=pi(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=i,s=i.deletions,s===null?(i.deletions=[l],i.flags|=16):s.push(l)}function gg(i,s){switch(i.tag){case 5:var l=i.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,ei=i,ti=kr(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,ei=i,ti=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=gs!==null?{id:ar,overflow:lr}:null,i.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=pi(18,null,null,0),l.stateNode=s,l.return=i,i.child=l,ei=i,ti=null,!0):!1;default:return!1}}function xd(i){return(i.mode&1)!==0&&(i.flags&128)===0}function _d(i){if(Zt){var s=ti;if(s){var l=s;if(!gg(i,s)){if(xd(i))throw Error(t(418));s=kr(l.nextSibling);var d=ei;s&&gg(i,s)?mg(d,l):(i.flags=i.flags&-4097|2,Zt=!1,ei=i)}}else{if(xd(i))throw Error(t(418));i.flags=i.flags&-4097|2,Zt=!1,ei=i}}}function vg(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;ei=i}function Hl(i){if(i!==ei)return!1;if(!Zt)return vg(i),Zt=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!ud(i.type,i.memoizedProps)),s&&(s=ti)){if(xd(i))throw xg(),Error(t(418));for(;s;)mg(i,s),s=kr(s.nextSibling)}if(vg(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(s===0){ti=kr(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}i=i.nextSibling}ti=null}}else ti=ei?kr(i.stateNode.nextSibling):null;return!0}function xg(){for(var i=ti;i;)i=kr(i.nextSibling)}function uo(){ti=ei=null,Zt=!1}function yd(i){Ei===null?Ei=[i]:Ei.push(i)}var gE=D.ReactCurrentBatchConfig;function wa(i,s,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var d=l.stateNode}if(!d)throw Error(t(147,i));var m=d,x=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===x?s.ref:(s=function(T){var O=m.refs;T===null?delete O[x]:O[x]=T},s._stringRef=x,s)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function Wl(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function _g(i){var s=i._init;return s(i._payload)}function yg(i){function s(J,$){if(i){var oe=J.deletions;oe===null?(J.deletions=[$],J.flags|=16):oe.push($)}}function l(J,$){if(!i)return null;for(;$!==null;)s(J,$),$=$.sibling;return null}function d(J,$){for(J=new Map;$!==null;)$.key!==null?J.set($.key,$):J.set($.index,$),$=$.sibling;return J}function m(J,$){return J=qr(J,$),J.index=0,J.sibling=null,J}function x(J,$,oe){return J.index=oe,i?(oe=J.alternate,oe!==null?(oe=oe.index,oe<$?(J.flags|=2,$):oe):(J.flags|=2,$)):(J.flags|=1048576,$)}function T(J){return i&&J.alternate===null&&(J.flags|=2),J}function O(J,$,oe,Ae){return $===null||$.tag!==6?($=ff(oe,J.mode,Ae),$.return=J,$):($=m($,oe),$.return=J,$)}function V(J,$,oe,Ae){var Je=oe.type;return Je===k?Se(J,$,oe.props.children,Ae,oe.key):$!==null&&($.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===Z&&_g(Je)===$.type)?(Ae=m($,oe.props),Ae.ref=wa(J,$,oe),Ae.return=J,Ae):(Ae=pc(oe.type,oe.key,oe.props,null,J.mode,Ae),Ae.ref=wa(J,$,oe),Ae.return=J,Ae)}function de(J,$,oe,Ae){return $===null||$.tag!==4||$.stateNode.containerInfo!==oe.containerInfo||$.stateNode.implementation!==oe.implementation?($=hf(oe,J.mode,Ae),$.return=J,$):($=m($,oe.children||[]),$.return=J,$)}function Se(J,$,oe,Ae,Je){return $===null||$.tag!==7?($=bs(oe,J.mode,Ae,Je),$.return=J,$):($=m($,oe),$.return=J,$)}function Me(J,$,oe){if(typeof $=="string"&&$!==""||typeof $=="number")return $=ff(""+$,J.mode,oe),$.return=J,$;if(typeof $=="object"&&$!==null){switch($.$$typeof){case I:return oe=pc($.type,$.key,$.props,null,J.mode,oe),oe.ref=wa(J,null,$),oe.return=J,oe;case L:return $=hf($,J.mode,oe),$.return=J,$;case Z:var Ae=$._init;return Me(J,Ae($._payload),oe)}if(X($)||se($))return $=bs($,J.mode,oe,null),$.return=J,$;Wl(J,$)}return null}function ye(J,$,oe,Ae){var Je=$!==null?$.key:null;if(typeof oe=="string"&&oe!==""||typeof oe=="number")return Je!==null?null:O(J,$,""+oe,Ae);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case I:return oe.key===Je?V(J,$,oe,Ae):null;case L:return oe.key===Je?de(J,$,oe,Ae):null;case Z:return Je=oe._init,ye(J,$,Je(oe._payload),Ae)}if(X(oe)||se(oe))return Je!==null?null:Se(J,$,oe,Ae,null);Wl(J,oe)}return null}function Ge(J,$,oe,Ae,Je){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number")return J=J.get(oe)||null,O($,J,""+Ae,Je);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case I:return J=J.get(Ae.key===null?oe:Ae.key)||null,V($,J,Ae,Je);case L:return J=J.get(Ae.key===null?oe:Ae.key)||null,de($,J,Ae,Je);case Z:var nt=Ae._init;return Ge(J,$,oe,nt(Ae._payload),Je)}if(X(Ae)||se(Ae))return J=J.get(oe)||null,Se($,J,Ae,Je,null);Wl($,Ae)}return null}function je(J,$,oe,Ae){for(var Je=null,nt=null,it=$,ot=$=0,Sn=null;it!==null&&ot<oe.length;ot++){it.index>ot?(Sn=it,it=null):Sn=it.sibling;var Rt=ye(J,it,oe[ot],Ae);if(Rt===null){it===null&&(it=Sn);break}i&&it&&Rt.alternate===null&&s(J,it),$=x(Rt,$,ot),nt===null?Je=Rt:nt.sibling=Rt,nt=Rt,it=Sn}if(ot===oe.length)return l(J,it),Zt&&vs(J,ot),Je;if(it===null){for(;ot<oe.length;ot++)it=Me(J,oe[ot],Ae),it!==null&&($=x(it,$,ot),nt===null?Je=it:nt.sibling=it,nt=it);return Zt&&vs(J,ot),Je}for(it=d(J,it);ot<oe.length;ot++)Sn=Ge(it,J,ot,oe[ot],Ae),Sn!==null&&(i&&Sn.alternate!==null&&it.delete(Sn.key===null?ot:Sn.key),$=x(Sn,$,ot),nt===null?Je=Sn:nt.sibling=Sn,nt=Sn);return i&&it.forEach(function(Yr){return s(J,Yr)}),Zt&&vs(J,ot),Je}function Ke(J,$,oe,Ae){var Je=se(oe);if(typeof Je!="function")throw Error(t(150));if(oe=Je.call(oe),oe==null)throw Error(t(151));for(var nt=Je=null,it=$,ot=$=0,Sn=null,Rt=oe.next();it!==null&&!Rt.done;ot++,Rt=oe.next()){it.index>ot?(Sn=it,it=null):Sn=it.sibling;var Yr=ye(J,it,Rt.value,Ae);if(Yr===null){it===null&&(it=Sn);break}i&&it&&Yr.alternate===null&&s(J,it),$=x(Yr,$,ot),nt===null?Je=Yr:nt.sibling=Yr,nt=Yr,it=Sn}if(Rt.done)return l(J,it),Zt&&vs(J,ot),Je;if(it===null){for(;!Rt.done;ot++,Rt=oe.next())Rt=Me(J,Rt.value,Ae),Rt!==null&&($=x(Rt,$,ot),nt===null?Je=Rt:nt.sibling=Rt,nt=Rt);return Zt&&vs(J,ot),Je}for(it=d(J,it);!Rt.done;ot++,Rt=oe.next())Rt=Ge(it,J,ot,Rt.value,Ae),Rt!==null&&(i&&Rt.alternate!==null&&it.delete(Rt.key===null?ot:Rt.key),$=x(Rt,$,ot),nt===null?Je=Rt:nt.sibling=Rt,nt=Rt);return i&&it.forEach(function(YE){return s(J,YE)}),Zt&&vs(J,ot),Je}function on(J,$,oe,Ae){if(typeof oe=="object"&&oe!==null&&oe.type===k&&oe.key===null&&(oe=oe.props.children),typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case I:e:{for(var Je=oe.key,nt=$;nt!==null;){if(nt.key===Je){if(Je=oe.type,Je===k){if(nt.tag===7){l(J,nt.sibling),$=m(nt,oe.props.children),$.return=J,J=$;break e}}else if(nt.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===Z&&_g(Je)===nt.type){l(J,nt.sibling),$=m(nt,oe.props),$.ref=wa(J,nt,oe),$.return=J,J=$;break e}l(J,nt);break}else s(J,nt);nt=nt.sibling}oe.type===k?($=bs(oe.props.children,J.mode,Ae,oe.key),$.return=J,J=$):(Ae=pc(oe.type,oe.key,oe.props,null,J.mode,Ae),Ae.ref=wa(J,$,oe),Ae.return=J,J=Ae)}return T(J);case L:e:{for(nt=oe.key;$!==null;){if($.key===nt)if($.tag===4&&$.stateNode.containerInfo===oe.containerInfo&&$.stateNode.implementation===oe.implementation){l(J,$.sibling),$=m($,oe.children||[]),$.return=J,J=$;break e}else{l(J,$);break}else s(J,$);$=$.sibling}$=hf(oe,J.mode,Ae),$.return=J,J=$}return T(J);case Z:return nt=oe._init,on(J,$,nt(oe._payload),Ae)}if(X(oe))return je(J,$,oe,Ae);if(se(oe))return Ke(J,$,oe,Ae);Wl(J,oe)}return typeof oe=="string"&&oe!==""||typeof oe=="number"?(oe=""+oe,$!==null&&$.tag===6?(l(J,$.sibling),$=m($,oe),$.return=J,J=$):(l(J,$),$=ff(oe,J.mode,Ae),$.return=J,J=$),T(J)):l(J,$)}return on}var fo=yg(!0),Sg=yg(!1),jl=Or(null),Xl=null,ho=null,Sd=null;function Md(){Sd=ho=Xl=null}function Ed(i){var s=jl.current;Yt(jl),i._currentValue=s}function wd(i,s,l){for(;i!==null;){var d=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,d!==null&&(d.childLanes|=s)):d!==null&&(d.childLanes&s)!==s&&(d.childLanes|=s),i===l)break;i=i.return}}function po(i,s){Xl=i,Sd=ho=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&($n=!0),i.firstContext=null)}function di(i){var s=i._currentValue;if(Sd!==i)if(i={context:i,memoizedValue:s,next:null},ho===null){if(Xl===null)throw Error(t(308));ho=i,Xl.dependencies={lanes:0,firstContext:i}}else ho=ho.next=i;return s}var xs=null;function bd(i){xs===null?xs=[i]:xs.push(i)}function Mg(i,s,l,d){var m=s.interleaved;return m===null?(l.next=l,bd(s)):(l.next=m.next,m.next=l),s.interleaved=l,cr(i,d)}function cr(i,s){i.lanes|=s;var l=i.alternate;for(l!==null&&(l.lanes|=s),l=i,i=i.return;i!==null;)i.childLanes|=s,l=i.alternate,l!==null&&(l.childLanes|=s),l=i,i=i.return;return l.tag===3?l.stateNode:null}var Vr=!1;function Td(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Eg(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function ur(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function Gr(i,s,l){var d=i.updateQueue;if(d===null)return null;if(d=d.shared,(Tt&2)!==0){var m=d.pending;return m===null?s.next=s:(s.next=m.next,m.next=s),d.pending=s,cr(i,l)}return m=d.interleaved,m===null?(s.next=s,bd(d)):(s.next=m.next,m.next=s),d.interleaved=s,cr(i,l)}function $l(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var d=s.lanes;d&=i.pendingLanes,l|=d,s.lanes=l,Wn(i,l)}}function wg(i,s){var l=i.updateQueue,d=i.alternate;if(d!==null&&(d=d.updateQueue,l===d)){var m=null,x=null;if(l=l.firstBaseUpdate,l!==null){do{var T={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};x===null?m=x=T:x=x.next=T,l=l.next}while(l!==null);x===null?m=x=s:x=x.next=s}else m=x=s;l={baseState:d.baseState,firstBaseUpdate:m,lastBaseUpdate:x,shared:d.shared,effects:d.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}function ql(i,s,l,d){var m=i.updateQueue;Vr=!1;var x=m.firstBaseUpdate,T=m.lastBaseUpdate,O=m.shared.pending;if(O!==null){m.shared.pending=null;var V=O,de=V.next;V.next=null,T===null?x=de:T.next=de,T=V;var Se=i.alternate;Se!==null&&(Se=Se.updateQueue,O=Se.lastBaseUpdate,O!==T&&(O===null?Se.firstBaseUpdate=de:O.next=de,Se.lastBaseUpdate=V))}if(x!==null){var Me=m.baseState;T=0,Se=de=V=null,O=x;do{var ye=O.lane,Ge=O.eventTime;if((d&ye)===ye){Se!==null&&(Se=Se.next={eventTime:Ge,lane:0,tag:O.tag,payload:O.payload,callback:O.callback,next:null});e:{var je=i,Ke=O;switch(ye=s,Ge=l,Ke.tag){case 1:if(je=Ke.payload,typeof je=="function"){Me=je.call(Ge,Me,ye);break e}Me=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=Ke.payload,ye=typeof je=="function"?je.call(Ge,Me,ye):je,ye==null)break e;Me=j({},Me,ye);break e;case 2:Vr=!0}}O.callback!==null&&O.lane!==0&&(i.flags|=64,ye=m.effects,ye===null?m.effects=[O]:ye.push(O))}else Ge={eventTime:Ge,lane:ye,tag:O.tag,payload:O.payload,callback:O.callback,next:null},Se===null?(de=Se=Ge,V=Me):Se=Se.next=Ge,T|=ye;if(O=O.next,O===null){if(O=m.shared.pending,O===null)break;ye=O,O=ye.next,ye.next=null,m.lastBaseUpdate=ye,m.shared.pending=null}}while(!0);if(Se===null&&(V=Me),m.baseState=V,m.firstBaseUpdate=de,m.lastBaseUpdate=Se,s=m.shared.interleaved,s!==null){m=s;do T|=m.lane,m=m.next;while(m!==s)}else x===null&&(m.shared.lanes=0);Ss|=T,i.lanes=T,i.memoizedState=Me}}function bg(i,s,l){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var d=i[s],m=d.callback;if(m!==null){if(d.callback=null,d=l,typeof m!="function")throw Error(t(191,m));m.call(d)}}}var ba={},Vi=Or(ba),Ta=Or(ba),Aa=Or(ba);function _s(i){if(i===ba)throw Error(t(174));return i}function Ad(i,s){switch(jt(Aa,s),jt(Ta,i),jt(Vi,ba),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:w(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=w(s,i)}Yt(Vi),jt(Vi,s)}function mo(){Yt(Vi),Yt(Ta),Yt(Aa)}function Tg(i){_s(Aa.current);var s=_s(Vi.current),l=w(s,i.type);s!==l&&(jt(Ta,i),jt(Vi,l))}function Cd(i){Ta.current===i&&(Yt(Vi),Yt(Ta))}var en=Or(0);function Yl(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Rd=[];function Pd(){for(var i=0;i<Rd.length;i++)Rd[i]._workInProgressVersionPrimary=null;Rd.length=0}var Kl=D.ReactCurrentDispatcher,Dd=D.ReactCurrentBatchConfig,ys=0,tn=null,hn=null,_n=null,Zl=!1,Ca=!1,Ra=0,vE=0;function Dn(){throw Error(t(321))}function Ld(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!Mi(i[l],s[l]))return!1;return!0}function Nd(i,s,l,d,m,x){if(ys=x,tn=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Kl.current=i===null||i.memoizedState===null?SE:ME,i=l(d,m),Ca){x=0;do{if(Ca=!1,Ra=0,25<=x)throw Error(t(301));x+=1,_n=hn=null,s.updateQueue=null,Kl.current=EE,i=l(d,m)}while(Ca)}if(Kl.current=ec,s=hn!==null&&hn.next!==null,ys=0,_n=hn=tn=null,Zl=!1,s)throw Error(t(300));return i}function Id(){var i=Ra!==0;return Ra=0,i}function Gi(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?tn.memoizedState=_n=i:_n=_n.next=i,_n}function fi(){if(hn===null){var i=tn.alternate;i=i!==null?i.memoizedState:null}else i=hn.next;var s=_n===null?tn.memoizedState:_n.next;if(s!==null)_n=s,hn=i;else{if(i===null)throw Error(t(310));hn=i,i={memoizedState:hn.memoizedState,baseState:hn.baseState,baseQueue:hn.baseQueue,queue:hn.queue,next:null},_n===null?tn.memoizedState=_n=i:_n=_n.next=i}return _n}function Pa(i,s){return typeof s=="function"?s(i):s}function Ud(i){var s=fi(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var d=hn,m=d.baseQueue,x=l.pending;if(x!==null){if(m!==null){var T=m.next;m.next=x.next,x.next=T}d.baseQueue=m=x,l.pending=null}if(m!==null){x=m.next,d=d.baseState;var O=T=null,V=null,de=x;do{var Se=de.lane;if((ys&Se)===Se)V!==null&&(V=V.next={lane:0,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null}),d=de.hasEagerState?de.eagerState:i(d,de.action);else{var Me={lane:Se,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null};V===null?(O=V=Me,T=d):V=V.next=Me,tn.lanes|=Se,Ss|=Se}de=de.next}while(de!==null&&de!==x);V===null?T=d:V.next=O,Mi(d,s.memoizedState)||($n=!0),s.memoizedState=d,s.baseState=T,s.baseQueue=V,l.lastRenderedState=d}if(i=l.interleaved,i!==null){m=i;do x=m.lane,tn.lanes|=x,Ss|=x,m=m.next;while(m!==i)}else m===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function Fd(i){var s=fi(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var d=l.dispatch,m=l.pending,x=s.memoizedState;if(m!==null){l.pending=null;var T=m=m.next;do x=i(x,T.action),T=T.next;while(T!==m);Mi(x,s.memoizedState)||($n=!0),s.memoizedState=x,s.baseQueue===null&&(s.baseState=x),l.lastRenderedState=x}return[x,d]}function Ag(){}function Cg(i,s){var l=tn,d=fi(),m=s(),x=!Mi(d.memoizedState,m);if(x&&(d.memoizedState=m,$n=!0),d=d.queue,kd(Dg.bind(null,l,d,i),[i]),d.getSnapshot!==s||x||_n!==null&&_n.memoizedState.tag&1){if(l.flags|=2048,Da(9,Pg.bind(null,l,d,m,s),void 0,null),yn===null)throw Error(t(349));(ys&30)!==0||Rg(l,s,m)}return m}function Rg(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=tn.updateQueue,s===null?(s={lastEffect:null,stores:null},tn.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function Pg(i,s,l,d){s.value=l,s.getSnapshot=d,Lg(s)&&Ng(i)}function Dg(i,s,l){return l(function(){Lg(s)&&Ng(i)})}function Lg(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!Mi(i,l)}catch{return!0}}function Ng(i){var s=cr(i,1);s!==null&&Ai(s,i,1,-1)}function Ig(i){var s=Gi();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:i},s.queue=i,i=i.dispatch=yE.bind(null,tn,i),[s.memoizedState,i]}function Da(i,s,l,d){return i={tag:i,create:s,destroy:l,deps:d,next:null},s=tn.updateQueue,s===null?(s={lastEffect:null,stores:null},tn.updateQueue=s,s.lastEffect=i.next=i):(l=s.lastEffect,l===null?s.lastEffect=i.next=i:(d=l.next,l.next=i,i.next=d,s.lastEffect=i)),i}function Ug(){return fi().memoizedState}function Ql(i,s,l,d){var m=Gi();tn.flags|=i,m.memoizedState=Da(1|s,l,void 0,d===void 0?null:d)}function Jl(i,s,l,d){var m=fi();d=d===void 0?null:d;var x=void 0;if(hn!==null){var T=hn.memoizedState;if(x=T.destroy,d!==null&&Ld(d,T.deps)){m.memoizedState=Da(s,l,x,d);return}}tn.flags|=i,m.memoizedState=Da(1|s,l,x,d)}function Fg(i,s){return Ql(8390656,8,i,s)}function kd(i,s){return Jl(2048,8,i,s)}function kg(i,s){return Jl(4,2,i,s)}function Og(i,s){return Jl(4,4,i,s)}function Bg(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function zg(i,s,l){return l=l!=null?l.concat([i]):null,Jl(4,4,Bg.bind(null,s,i),l)}function Od(){}function Vg(i,s){var l=fi();s=s===void 0?null:s;var d=l.memoizedState;return d!==null&&s!==null&&Ld(s,d[1])?d[0]:(l.memoizedState=[i,s],i)}function Gg(i,s){var l=fi();s=s===void 0?null:s;var d=l.memoizedState;return d!==null&&s!==null&&Ld(s,d[1])?d[0]:(i=i(),l.memoizedState=[i,s],i)}function Hg(i,s,l){return(ys&21)===0?(i.baseState&&(i.baseState=!1,$n=!0),i.memoizedState=l):(Mi(l,s)||(l=Ve(),tn.lanes|=l,Ss|=l,i.baseState=!0),s)}function xE(i,s){var l=yt;yt=l!==0&&4>l?l:4,i(!0);var d=Dd.transition;Dd.transition={};try{i(!1),s()}finally{yt=l,Dd.transition=d}}function Wg(){return fi().memoizedState}function _E(i,s,l){var d=Xr(i);if(l={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null},jg(i))Xg(s,l);else if(l=Mg(i,s,l,d),l!==null){var m=zn();Ai(l,i,d,m),$g(l,s,d)}}function yE(i,s,l){var d=Xr(i),m={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null};if(jg(i))Xg(s,m);else{var x=i.alternate;if(i.lanes===0&&(x===null||x.lanes===0)&&(x=s.lastRenderedReducer,x!==null))try{var T=s.lastRenderedState,O=x(T,l);if(m.hasEagerState=!0,m.eagerState=O,Mi(O,T)){var V=s.interleaved;V===null?(m.next=m,bd(s)):(m.next=V.next,V.next=m),s.interleaved=m;return}}catch{}finally{}l=Mg(i,s,m,d),l!==null&&(m=zn(),Ai(l,i,d,m),$g(l,s,d))}}function jg(i){var s=i.alternate;return i===tn||s!==null&&s===tn}function Xg(i,s){Ca=Zl=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function $g(i,s,l){if((l&4194240)!==0){var d=s.lanes;d&=i.pendingLanes,l|=d,s.lanes=l,Wn(i,l)}}var ec={readContext:di,useCallback:Dn,useContext:Dn,useEffect:Dn,useImperativeHandle:Dn,useInsertionEffect:Dn,useLayoutEffect:Dn,useMemo:Dn,useReducer:Dn,useRef:Dn,useState:Dn,useDebugValue:Dn,useDeferredValue:Dn,useTransition:Dn,useMutableSource:Dn,useSyncExternalStore:Dn,useId:Dn,unstable_isNewReconciler:!1},SE={readContext:di,useCallback:function(i,s){return Gi().memoizedState=[i,s===void 0?null:s],i},useContext:di,useEffect:Fg,useImperativeHandle:function(i,s,l){return l=l!=null?l.concat([i]):null,Ql(4194308,4,Bg.bind(null,s,i),l)},useLayoutEffect:function(i,s){return Ql(4194308,4,i,s)},useInsertionEffect:function(i,s){return Ql(4,2,i,s)},useMemo:function(i,s){var l=Gi();return s=s===void 0?null:s,i=i(),l.memoizedState=[i,s],i},useReducer:function(i,s,l){var d=Gi();return s=l!==void 0?l(s):s,d.memoizedState=d.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},d.queue=i,i=i.dispatch=_E.bind(null,tn,i),[d.memoizedState,i]},useRef:function(i){var s=Gi();return i={current:i},s.memoizedState=i},useState:Ig,useDebugValue:Od,useDeferredValue:function(i){return Gi().memoizedState=i},useTransition:function(){var i=Ig(!1),s=i[0];return i=xE.bind(null,i[1]),Gi().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,l){var d=tn,m=Gi();if(Zt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),yn===null)throw Error(t(349));(ys&30)!==0||Rg(d,s,l)}m.memoizedState=l;var x={value:l,getSnapshot:s};return m.queue=x,Fg(Dg.bind(null,d,x,i),[i]),d.flags|=2048,Da(9,Pg.bind(null,d,x,l,s),void 0,null),l},useId:function(){var i=Gi(),s=yn.identifierPrefix;if(Zt){var l=lr,d=ar;l=(d&~(1<<32-Pe(d)-1)).toString(32)+l,s=":"+s+"R"+l,l=Ra++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=vE++,s=":"+s+"r"+l.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},ME={readContext:di,useCallback:Vg,useContext:di,useEffect:kd,useImperativeHandle:zg,useInsertionEffect:kg,useLayoutEffect:Og,useMemo:Gg,useReducer:Ud,useRef:Ug,useState:function(){return Ud(Pa)},useDebugValue:Od,useDeferredValue:function(i){var s=fi();return Hg(s,hn.memoizedState,i)},useTransition:function(){var i=Ud(Pa)[0],s=fi().memoizedState;return[i,s]},useMutableSource:Ag,useSyncExternalStore:Cg,useId:Wg,unstable_isNewReconciler:!1},EE={readContext:di,useCallback:Vg,useContext:di,useEffect:kd,useImperativeHandle:zg,useInsertionEffect:kg,useLayoutEffect:Og,useMemo:Gg,useReducer:Fd,useRef:Ug,useState:function(){return Fd(Pa)},useDebugValue:Od,useDeferredValue:function(i){var s=fi();return hn===null?s.memoizedState=i:Hg(s,hn.memoizedState,i)},useTransition:function(){var i=Fd(Pa)[0],s=fi().memoizedState;return[i,s]},useMutableSource:Ag,useSyncExternalStore:Cg,useId:Wg,unstable_isNewReconciler:!1};function wi(i,s){if(i&&i.defaultProps){s=j({},s),i=i.defaultProps;for(var l in i)s[l]===void 0&&(s[l]=i[l]);return s}return s}function Bd(i,s,l,d){s=i.memoizedState,l=l(d,s),l=l==null?s:j({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var tc={isMounted:function(i){return(i=i._reactInternals)?Oi(i)===i:!1},enqueueSetState:function(i,s,l){i=i._reactInternals;var d=zn(),m=Xr(i),x=ur(d,m);x.payload=s,l!=null&&(x.callback=l),s=Gr(i,x,m),s!==null&&(Ai(s,i,m,d),$l(s,i,m))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var d=zn(),m=Xr(i),x=ur(d,m);x.tag=1,x.payload=s,l!=null&&(x.callback=l),s=Gr(i,x,m),s!==null&&(Ai(s,i,m,d),$l(s,i,m))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=zn(),d=Xr(i),m=ur(l,d);m.tag=2,s!=null&&(m.callback=s),s=Gr(i,m,d),s!==null&&(Ai(s,i,d,l),$l(s,i,d))}};function qg(i,s,l,d,m,x,T){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(d,x,T):s.prototype&&s.prototype.isPureReactComponent?!va(l,d)||!va(m,x):!0}function Yg(i,s,l){var d=!1,m=Br,x=s.contextType;return typeof x=="object"&&x!==null?x=di(x):(m=Xn(s)?ms:Pn.current,d=s.contextTypes,x=(d=d!=null)?ao(i,m):Br),s=new s(l,x),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=tc,i.stateNode=s,s._reactInternals=i,d&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=m,i.__reactInternalMemoizedMaskedChildContext=x),s}function Kg(i,s,l,d){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,d),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,d),s.state!==i&&tc.enqueueReplaceState(s,s.state,null)}function zd(i,s,l,d){var m=i.stateNode;m.props=l,m.state=i.memoizedState,m.refs={},Td(i);var x=s.contextType;typeof x=="object"&&x!==null?m.context=di(x):(x=Xn(s)?ms:Pn.current,m.context=ao(i,x)),m.state=i.memoizedState,x=s.getDerivedStateFromProps,typeof x=="function"&&(Bd(i,s,x,l),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(s=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),s!==m.state&&tc.enqueueReplaceState(m,m.state,null),ql(i,l,m,d),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308)}function go(i,s){try{var l="",d=s;do l+=be(d),d=d.return;while(d);var m=l}catch(x){m=`
Error generating stack: `+x.message+`
`+x.stack}return{value:i,source:s,stack:m,digest:null}}function Vd(i,s,l){return{value:i,source:null,stack:l??null,digest:s??null}}function Gd(i,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var wE=typeof WeakMap=="function"?WeakMap:Map;function Zg(i,s,l){l=ur(-1,l),l.tag=3,l.payload={element:null};var d=s.value;return l.callback=function(){lc||(lc=!0,rf=d),Gd(i,s)},l}function Qg(i,s,l){l=ur(-1,l),l.tag=3;var d=i.type.getDerivedStateFromError;if(typeof d=="function"){var m=s.value;l.payload=function(){return d(m)},l.callback=function(){Gd(i,s)}}var x=i.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(l.callback=function(){Gd(i,s),typeof d!="function"&&(Wr===null?Wr=new Set([this]):Wr.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})}),l}function Jg(i,s,l){var d=i.pingCache;if(d===null){d=i.pingCache=new wE;var m=new Set;d.set(s,m)}else m=d.get(s),m===void 0&&(m=new Set,d.set(s,m));m.has(l)||(m.add(l),i=OE.bind(null,i,s,l),s.then(i,i))}function e0(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function t0(i,s,l,d,m){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=ur(-1,1),s.tag=2,Gr(l,s,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=m,i)}var bE=D.ReactCurrentOwner,$n=!1;function Bn(i,s,l,d){s.child=i===null?Sg(s,null,l,d):fo(s,i.child,l,d)}function n0(i,s,l,d,m){l=l.render;var x=s.ref;return po(s,m),d=Nd(i,s,l,d,x,m),l=Id(),i!==null&&!$n?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~m,dr(i,s,m)):(Zt&&l&&gd(s),s.flags|=1,Bn(i,s,d,m),s.child)}function i0(i,s,l,d,m){if(i===null){var x=l.type;return typeof x=="function"&&!df(x)&&x.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=x,r0(i,s,x,d,m)):(i=pc(l.type,null,d,s,s.mode,m),i.ref=s.ref,i.return=s,s.child=i)}if(x=i.child,(i.lanes&m)===0){var T=x.memoizedProps;if(l=l.compare,l=l!==null?l:va,l(T,d)&&i.ref===s.ref)return dr(i,s,m)}return s.flags|=1,i=qr(x,d),i.ref=s.ref,i.return=s,s.child=i}function r0(i,s,l,d,m){if(i!==null){var x=i.memoizedProps;if(va(x,d)&&i.ref===s.ref)if($n=!1,s.pendingProps=d=x,(i.lanes&m)!==0)(i.flags&131072)!==0&&($n=!0);else return s.lanes=i.lanes,dr(i,s,m)}return Hd(i,s,l,d,m)}function s0(i,s,l){var d=s.pendingProps,m=d.children,x=i!==null?i.memoizedState:null;if(d.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},jt(xo,ni),ni|=l;else{if((l&1073741824)===0)return i=x!==null?x.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,jt(xo,ni),ni|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=x!==null?x.baseLanes:l,jt(xo,ni),ni|=d}else x!==null?(d=x.baseLanes|l,s.memoizedState=null):d=l,jt(xo,ni),ni|=d;return Bn(i,s,m,l),s.child}function o0(i,s){var l=s.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function Hd(i,s,l,d,m){var x=Xn(l)?ms:Pn.current;return x=ao(s,x),po(s,m),l=Nd(i,s,l,d,x,m),d=Id(),i!==null&&!$n?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~m,dr(i,s,m)):(Zt&&d&&gd(s),s.flags|=1,Bn(i,s,l,m),s.child)}function a0(i,s,l,d,m){if(Xn(l)){var x=!0;Bl(s)}else x=!1;if(po(s,m),s.stateNode===null)ic(i,s),Yg(s,l,d),zd(s,l,d,m),d=!0;else if(i===null){var T=s.stateNode,O=s.memoizedProps;T.props=O;var V=T.context,de=l.contextType;typeof de=="object"&&de!==null?de=di(de):(de=Xn(l)?ms:Pn.current,de=ao(s,de));var Se=l.getDerivedStateFromProps,Me=typeof Se=="function"||typeof T.getSnapshotBeforeUpdate=="function";Me||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(O!==d||V!==de)&&Kg(s,T,d,de),Vr=!1;var ye=s.memoizedState;T.state=ye,ql(s,d,T,m),V=s.memoizedState,O!==d||ye!==V||jn.current||Vr?(typeof Se=="function"&&(Bd(s,l,Se,d),V=s.memoizedState),(O=Vr||qg(s,l,O,d,ye,V,de))?(Me||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(s.flags|=4194308)):(typeof T.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=d,s.memoizedState=V),T.props=d,T.state=V,T.context=de,d=O):(typeof T.componentDidMount=="function"&&(s.flags|=4194308),d=!1)}else{T=s.stateNode,Eg(i,s),O=s.memoizedProps,de=s.type===s.elementType?O:wi(s.type,O),T.props=de,Me=s.pendingProps,ye=T.context,V=l.contextType,typeof V=="object"&&V!==null?V=di(V):(V=Xn(l)?ms:Pn.current,V=ao(s,V));var Ge=l.getDerivedStateFromProps;(Se=typeof Ge=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(O!==Me||ye!==V)&&Kg(s,T,d,V),Vr=!1,ye=s.memoizedState,T.state=ye,ql(s,d,T,m);var je=s.memoizedState;O!==Me||ye!==je||jn.current||Vr?(typeof Ge=="function"&&(Bd(s,l,Ge,d),je=s.memoizedState),(de=Vr||qg(s,l,de,d,ye,je,V)||!1)?(Se||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(d,je,V),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(d,je,V)),typeof T.componentDidUpdate=="function"&&(s.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof T.componentDidUpdate!="function"||O===i.memoizedProps&&ye===i.memoizedState||(s.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||O===i.memoizedProps&&ye===i.memoizedState||(s.flags|=1024),s.memoizedProps=d,s.memoizedState=je),T.props=d,T.state=je,T.context=V,d=de):(typeof T.componentDidUpdate!="function"||O===i.memoizedProps&&ye===i.memoizedState||(s.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||O===i.memoizedProps&&ye===i.memoizedState||(s.flags|=1024),d=!1)}return Wd(i,s,l,d,x,m)}function Wd(i,s,l,d,m,x){o0(i,s);var T=(s.flags&128)!==0;if(!d&&!T)return m&&fg(s,l,!1),dr(i,s,x);d=s.stateNode,bE.current=s;var O=T&&typeof l.getDerivedStateFromError!="function"?null:d.render();return s.flags|=1,i!==null&&T?(s.child=fo(s,i.child,null,x),s.child=fo(s,null,O,x)):Bn(i,s,O,x),s.memoizedState=d.state,m&&fg(s,l,!0),s.child}function l0(i){var s=i.stateNode;s.pendingContext?ug(i,s.pendingContext,s.pendingContext!==s.context):s.context&&ug(i,s.context,!1),Ad(i,s.containerInfo)}function c0(i,s,l,d,m){return uo(),yd(m),s.flags|=256,Bn(i,s,l,d),s.child}var jd={dehydrated:null,treeContext:null,retryLane:0};function Xd(i){return{baseLanes:i,cachePool:null,transitions:null}}function u0(i,s,l){var d=s.pendingProps,m=en.current,x=!1,T=(s.flags&128)!==0,O;if((O=T)||(O=i!==null&&i.memoizedState===null?!1:(m&2)!==0),O?(x=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(m|=1),jt(en,m&1),i===null)return _d(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(T=d.children,i=d.fallback,x?(d=s.mode,x=s.child,T={mode:"hidden",children:T},(d&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=T):x=mc(T,d,0,null),i=bs(i,d,l,null),x.return=s,i.return=s,x.sibling=i,s.child=x,s.child.memoizedState=Xd(l),s.memoizedState=jd,i):$d(s,T));if(m=i.memoizedState,m!==null&&(O=m.dehydrated,O!==null))return TE(i,s,T,d,O,m,l);if(x){x=d.fallback,T=s.mode,m=i.child,O=m.sibling;var V={mode:"hidden",children:d.children};return(T&1)===0&&s.child!==m?(d=s.child,d.childLanes=0,d.pendingProps=V,s.deletions=null):(d=qr(m,V),d.subtreeFlags=m.subtreeFlags&14680064),O!==null?x=qr(O,x):(x=bs(x,T,l,null),x.flags|=2),x.return=s,d.return=s,d.sibling=x,s.child=d,d=x,x=s.child,T=i.child.memoizedState,T=T===null?Xd(l):{baseLanes:T.baseLanes|l,cachePool:null,transitions:T.transitions},x.memoizedState=T,x.childLanes=i.childLanes&~l,s.memoizedState=jd,d}return x=i.child,i=x.sibling,d=qr(x,{mode:"visible",children:d.children}),(s.mode&1)===0&&(d.lanes=l),d.return=s,d.sibling=null,i!==null&&(l=s.deletions,l===null?(s.deletions=[i],s.flags|=16):l.push(i)),s.child=d,s.memoizedState=null,d}function $d(i,s){return s=mc({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function nc(i,s,l,d){return d!==null&&yd(d),fo(s,i.child,null,l),i=$d(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function TE(i,s,l,d,m,x,T){if(l)return s.flags&256?(s.flags&=-257,d=Vd(Error(t(422))),nc(i,s,T,d)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(x=d.fallback,m=s.mode,d=mc({mode:"visible",children:d.children},m,0,null),x=bs(x,m,T,null),x.flags|=2,d.return=s,x.return=s,d.sibling=x,s.child=d,(s.mode&1)!==0&&fo(s,i.child,null,T),s.child.memoizedState=Xd(T),s.memoizedState=jd,x);if((s.mode&1)===0)return nc(i,s,T,null);if(m.data==="$!"){if(d=m.nextSibling&&m.nextSibling.dataset,d)var O=d.dgst;return d=O,x=Error(t(419)),d=Vd(x,d,void 0),nc(i,s,T,d)}if(O=(T&i.childLanes)!==0,$n||O){if(d=yn,d!==null){switch(T&-T){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=(m&(d.suspendedLanes|T))!==0?0:m,m!==0&&m!==x.retryLane&&(x.retryLane=m,cr(i,m),Ai(d,i,m,-1))}return uf(),d=Vd(Error(t(421))),nc(i,s,T,d)}return m.data==="$?"?(s.flags|=128,s.child=i.child,s=BE.bind(null,i),m._reactRetry=s,null):(i=x.treeContext,ti=kr(m.nextSibling),ei=s,Zt=!0,Ei=null,i!==null&&(ci[ui++]=ar,ci[ui++]=lr,ci[ui++]=gs,ar=i.id,lr=i.overflow,gs=s),s=$d(s,d.children),s.flags|=4096,s)}function d0(i,s,l){i.lanes|=s;var d=i.alternate;d!==null&&(d.lanes|=s),wd(i.return,s,l)}function qd(i,s,l,d,m){var x=i.memoizedState;x===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:d,tail:l,tailMode:m}:(x.isBackwards=s,x.rendering=null,x.renderingStartTime=0,x.last=d,x.tail=l,x.tailMode=m)}function f0(i,s,l){var d=s.pendingProps,m=d.revealOrder,x=d.tail;if(Bn(i,s,d.children,l),d=en.current,(d&2)!==0)d=d&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&d0(i,l,s);else if(i.tag===19)d0(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}d&=1}if(jt(en,d),(s.mode&1)===0)s.memoizedState=null;else switch(m){case"forwards":for(l=s.child,m=null;l!==null;)i=l.alternate,i!==null&&Yl(i)===null&&(m=l),l=l.sibling;l=m,l===null?(m=s.child,s.child=null):(m=l.sibling,l.sibling=null),qd(s,!1,m,l,x);break;case"backwards":for(l=null,m=s.child,s.child=null;m!==null;){if(i=m.alternate,i!==null&&Yl(i)===null){s.child=m;break}i=m.sibling,m.sibling=l,l=m,m=i}qd(s,!0,l,null,x);break;case"together":qd(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function ic(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function dr(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),Ss|=s.lanes,(l&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,l=qr(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=qr(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function AE(i,s,l){switch(s.tag){case 3:l0(s),uo();break;case 5:Tg(s);break;case 1:Xn(s.type)&&Bl(s);break;case 4:Ad(s,s.stateNode.containerInfo);break;case 10:var d=s.type._context,m=s.memoizedProps.value;jt(jl,d._currentValue),d._currentValue=m;break;case 13:if(d=s.memoizedState,d!==null)return d.dehydrated!==null?(jt(en,en.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?u0(i,s,l):(jt(en,en.current&1),i=dr(i,s,l),i!==null?i.sibling:null);jt(en,en.current&1);break;case 19:if(d=(l&s.childLanes)!==0,(i.flags&128)!==0){if(d)return f0(i,s,l);s.flags|=128}if(m=s.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),jt(en,en.current),d)break;return null;case 22:case 23:return s.lanes=0,s0(i,s,l)}return dr(i,s,l)}var h0,Yd,p0,m0;h0=function(i,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Yd=function(){},p0=function(i,s,l,d){var m=i.memoizedProps;if(m!==d){i=s.stateNode,_s(Vi.current);var x=null;switch(l){case"input":m=Mt(i,m),d=Mt(i,d),x=[];break;case"select":m=j({},m,{value:void 0}),d=j({},d,{value:void 0}),x=[];break;case"textarea":m=mt(i,m),d=mt(i,d),x=[];break;default:typeof m.onClick!="function"&&typeof d.onClick=="function"&&(i.onclick=Fl)}ze(l,d);var T;l=null;for(de in m)if(!d.hasOwnProperty(de)&&m.hasOwnProperty(de)&&m[de]!=null)if(de==="style"){var O=m[de];for(T in O)O.hasOwnProperty(T)&&(l||(l={}),l[T]="")}else de!=="dangerouslySetInnerHTML"&&de!=="children"&&de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&de!=="autoFocus"&&(o.hasOwnProperty(de)?x||(x=[]):(x=x||[]).push(de,null));for(de in d){var V=d[de];if(O=m!=null?m[de]:void 0,d.hasOwnProperty(de)&&V!==O&&(V!=null||O!=null))if(de==="style")if(O){for(T in O)!O.hasOwnProperty(T)||V&&V.hasOwnProperty(T)||(l||(l={}),l[T]="");for(T in V)V.hasOwnProperty(T)&&O[T]!==V[T]&&(l||(l={}),l[T]=V[T])}else l||(x||(x=[]),x.push(de,l)),l=V;else de==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,O=O?O.__html:void 0,V!=null&&O!==V&&(x=x||[]).push(de,V)):de==="children"?typeof V!="string"&&typeof V!="number"||(x=x||[]).push(de,""+V):de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&(o.hasOwnProperty(de)?(V!=null&&de==="onScroll"&&qt("scroll",i),x||O===V||(x=[])):(x=x||[]).push(de,V))}l&&(x=x||[]).push("style",l);var de=x;(s.updateQueue=de)&&(s.flags|=4)}},m0=function(i,s,l,d){l!==d&&(s.flags|=4)};function La(i,s){if(!Zt)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var d=null;l!==null;)l.alternate!==null&&(d=l),l=l.sibling;d===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:d.sibling=null}}function Ln(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,d=0;if(s)for(var m=i.child;m!==null;)l|=m.lanes|m.childLanes,d|=m.subtreeFlags&14680064,d|=m.flags&14680064,m.return=i,m=m.sibling;else for(m=i.child;m!==null;)l|=m.lanes|m.childLanes,d|=m.subtreeFlags,d|=m.flags,m.return=i,m=m.sibling;return i.subtreeFlags|=d,i.childLanes=l,s}function CE(i,s,l){var d=s.pendingProps;switch(vd(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ln(s),null;case 1:return Xn(s.type)&&Ol(),Ln(s),null;case 3:return d=s.stateNode,mo(),Yt(jn),Yt(Pn),Pd(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(i===null||i.child===null)&&(Hl(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Ei!==null&&(af(Ei),Ei=null))),Yd(i,s),Ln(s),null;case 5:Cd(s);var m=_s(Aa.current);if(l=s.type,i!==null&&s.stateNode!=null)p0(i,s,l,d,m),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!d){if(s.stateNode===null)throw Error(t(166));return Ln(s),null}if(i=_s(Vi.current),Hl(s)){d=s.stateNode,l=s.type;var x=s.memoizedProps;switch(d[zi]=s,d[Ma]=x,i=(s.mode&1)!==0,l){case"dialog":qt("cancel",d),qt("close",d);break;case"iframe":case"object":case"embed":qt("load",d);break;case"video":case"audio":for(m=0;m<_a.length;m++)qt(_a[m],d);break;case"source":qt("error",d);break;case"img":case"image":case"link":qt("error",d),qt("load",d);break;case"details":qt("toggle",d);break;case"input":kt(d,x),qt("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!x.multiple},qt("invalid",d);break;case"textarea":Nt(d,x),qt("invalid",d)}ze(l,x),m=null;for(var T in x)if(x.hasOwnProperty(T)){var O=x[T];T==="children"?typeof O=="string"?d.textContent!==O&&(x.suppressHydrationWarning!==!0&&Ul(d.textContent,O,i),m=["children",O]):typeof O=="number"&&d.textContent!==""+O&&(x.suppressHydrationWarning!==!0&&Ul(d.textContent,O,i),m=["children",""+O]):o.hasOwnProperty(T)&&O!=null&&T==="onScroll"&&qt("scroll",d)}switch(l){case"input":tt(d),Gt(d,x,!0);break;case"textarea":tt(d),Xt(d);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(d.onclick=Fl)}d=m,s.updateQueue=d,d!==null&&(s.flags|=4)}else{T=m.nodeType===9?m:m.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=N(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=T.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof d.is=="string"?i=T.createElement(l,{is:d.is}):(i=T.createElement(l),l==="select"&&(T=i,d.multiple?T.multiple=!0:d.size&&(T.size=d.size))):i=T.createElementNS(i,l),i[zi]=s,i[Ma]=d,h0(i,s,!1,!1),s.stateNode=i;e:{switch(T=Re(l,d),l){case"dialog":qt("cancel",i),qt("close",i),m=d;break;case"iframe":case"object":case"embed":qt("load",i),m=d;break;case"video":case"audio":for(m=0;m<_a.length;m++)qt(_a[m],i);m=d;break;case"source":qt("error",i),m=d;break;case"img":case"image":case"link":qt("error",i),qt("load",i),m=d;break;case"details":qt("toggle",i),m=d;break;case"input":kt(i,d),m=Mt(i,d),qt("invalid",i);break;case"option":m=d;break;case"select":i._wrapperState={wasMultiple:!!d.multiple},m=j({},d,{value:void 0}),qt("invalid",i);break;case"textarea":Nt(i,d),m=mt(i,d),qt("invalid",i);break;default:m=d}ze(l,m),O=m;for(x in O)if(O.hasOwnProperty(x)){var V=O[x];x==="style"?me(i,V):x==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&pe(i,V)):x==="children"?typeof V=="string"?(l!=="textarea"||V!=="")&&ve(i,V):typeof V=="number"&&ve(i,""+V):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(o.hasOwnProperty(x)?V!=null&&x==="onScroll"&&qt("scroll",i):V!=null&&P(i,x,V,T))}switch(l){case"input":tt(i),Gt(i,d,!1);break;case"textarea":tt(i),Xt(i);break;case"option":d.value!=null&&i.setAttribute("value",""+ge(d.value));break;case"select":i.multiple=!!d.multiple,x=d.value,x!=null?Ht(i,!!d.multiple,x,!1):d.defaultValue!=null&&Ht(i,!!d.multiple,d.defaultValue,!0);break;default:typeof m.onClick=="function"&&(i.onclick=Fl)}switch(l){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Ln(s),null;case 6:if(i&&s.stateNode!=null)m0(i,s,i.memoizedProps,d);else{if(typeof d!="string"&&s.stateNode===null)throw Error(t(166));if(l=_s(Aa.current),_s(Vi.current),Hl(s)){if(d=s.stateNode,l=s.memoizedProps,d[zi]=s,(x=d.nodeValue!==l)&&(i=ei,i!==null))switch(i.tag){case 3:Ul(d.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Ul(d.nodeValue,l,(i.mode&1)!==0)}x&&(s.flags|=4)}else d=(l.nodeType===9?l:l.ownerDocument).createTextNode(d),d[zi]=s,s.stateNode=d}return Ln(s),null;case 13:if(Yt(en),d=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Zt&&ti!==null&&(s.mode&1)!==0&&(s.flags&128)===0)xg(),uo(),s.flags|=98560,x=!1;else if(x=Hl(s),d!==null&&d.dehydrated!==null){if(i===null){if(!x)throw Error(t(318));if(x=s.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[zi]=s}else uo(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Ln(s),x=!1}else Ei!==null&&(af(Ei),Ei=null),x=!0;if(!x)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(d=d!==null,d!==(i!==null&&i.memoizedState!==null)&&d&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(en.current&1)!==0?pn===0&&(pn=3):uf())),s.updateQueue!==null&&(s.flags|=4),Ln(s),null);case 4:return mo(),Yd(i,s),i===null&&ya(s.stateNode.containerInfo),Ln(s),null;case 10:return Ed(s.type._context),Ln(s),null;case 17:return Xn(s.type)&&Ol(),Ln(s),null;case 19:if(Yt(en),x=s.memoizedState,x===null)return Ln(s),null;if(d=(s.flags&128)!==0,T=x.rendering,T===null)if(d)La(x,!1);else{if(pn!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(T=Yl(i),T!==null){for(s.flags|=128,La(x,!1),d=T.updateQueue,d!==null&&(s.updateQueue=d,s.flags|=4),s.subtreeFlags=0,d=l,l=s.child;l!==null;)x=l,i=d,x.flags&=14680066,T=x.alternate,T===null?(x.childLanes=0,x.lanes=i,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=T.childLanes,x.lanes=T.lanes,x.child=T.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=T.memoizedProps,x.memoizedState=T.memoizedState,x.updateQueue=T.updateQueue,x.type=T.type,i=T.dependencies,x.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return jt(en,en.current&1|2),s.child}i=i.sibling}x.tail!==null&&Jt()>_o&&(s.flags|=128,d=!0,La(x,!1),s.lanes=4194304)}else{if(!d)if(i=Yl(T),i!==null){if(s.flags|=128,d=!0,l=i.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),La(x,!0),x.tail===null&&x.tailMode==="hidden"&&!T.alternate&&!Zt)return Ln(s),null}else 2*Jt()-x.renderingStartTime>_o&&l!==1073741824&&(s.flags|=128,d=!0,La(x,!1),s.lanes=4194304);x.isBackwards?(T.sibling=s.child,s.child=T):(l=x.last,l!==null?l.sibling=T:s.child=T,x.last=T)}return x.tail!==null?(s=x.tail,x.rendering=s,x.tail=s.sibling,x.renderingStartTime=Jt(),s.sibling=null,l=en.current,jt(en,d?l&1|2:l&1),s):(Ln(s),null);case 22:case 23:return cf(),d=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==d&&(s.flags|=8192),d&&(s.mode&1)!==0?(ni&1073741824)!==0&&(Ln(s),s.subtreeFlags&6&&(s.flags|=8192)):Ln(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function RE(i,s){switch(vd(s),s.tag){case 1:return Xn(s.type)&&Ol(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return mo(),Yt(jn),Yt(Pn),Pd(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return Cd(s),null;case 13:if(Yt(en),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));uo()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return Yt(en),null;case 4:return mo(),null;case 10:return Ed(s.type._context),null;case 22:case 23:return cf(),null;case 24:return null;default:return null}}var rc=!1,Nn=!1,PE=typeof WeakSet=="function"?WeakSet:Set,We=null;function vo(i,s){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(d){rn(i,s,d)}else l.current=null}function Kd(i,s,l){try{l()}catch(d){rn(i,s,d)}}var g0=!1;function DE(i,s){if(ld=wl,i=qm(),ed(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var d=l.getSelection&&l.getSelection();if(d&&d.rangeCount!==0){l=d.anchorNode;var m=d.anchorOffset,x=d.focusNode;d=d.focusOffset;try{l.nodeType,x.nodeType}catch{l=null;break e}var T=0,O=-1,V=-1,de=0,Se=0,Me=i,ye=null;t:for(;;){for(var Ge;Me!==l||m!==0&&Me.nodeType!==3||(O=T+m),Me!==x||d!==0&&Me.nodeType!==3||(V=T+d),Me.nodeType===3&&(T+=Me.nodeValue.length),(Ge=Me.firstChild)!==null;)ye=Me,Me=Ge;for(;;){if(Me===i)break t;if(ye===l&&++de===m&&(O=T),ye===x&&++Se===d&&(V=T),(Ge=Me.nextSibling)!==null)break;Me=ye,ye=Me.parentNode}Me=Ge}l=O===-1||V===-1?null:{start:O,end:V}}else l=null}l=l||{start:0,end:0}}else l=null;for(cd={focusedElem:i,selectionRange:l},wl=!1,We=s;We!==null;)if(s=We,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,We=i;else for(;We!==null;){s=We;try{var je=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(je!==null){var Ke=je.memoizedProps,on=je.memoizedState,J=s.stateNode,$=J.getSnapshotBeforeUpdate(s.elementType===s.type?Ke:wi(s.type,Ke),on);J.__reactInternalSnapshotBeforeUpdate=$}break;case 3:var oe=s.stateNode.containerInfo;oe.nodeType===1?oe.textContent="":oe.nodeType===9&&oe.documentElement&&oe.removeChild(oe.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ae){rn(s,s.return,Ae)}if(i=s.sibling,i!==null){i.return=s.return,We=i;break}We=s.return}return je=g0,g0=!1,je}function Na(i,s,l){var d=s.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var m=d=d.next;do{if((m.tag&i)===i){var x=m.destroy;m.destroy=void 0,x!==void 0&&Kd(s,l,x)}m=m.next}while(m!==d)}}function sc(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&i)===i){var d=l.create;l.destroy=d()}l=l.next}while(l!==s)}}function Zd(i){var s=i.ref;if(s!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof s=="function"?s(i):s.current=i}}function v0(i){var s=i.alternate;s!==null&&(i.alternate=null,v0(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[zi],delete s[Ma],delete s[hd],delete s[hE],delete s[pE])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function x0(i){return i.tag===5||i.tag===3||i.tag===4}function _0(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||x0(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Qd(i,s,l){var d=i.tag;if(d===5||d===6)i=i.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(i,s):l.insertBefore(i,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(i,l)):(s=l,s.appendChild(i)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=Fl));else if(d!==4&&(i=i.child,i!==null))for(Qd(i,s,l),i=i.sibling;i!==null;)Qd(i,s,l),i=i.sibling}function Jd(i,s,l){var d=i.tag;if(d===5||d===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(d!==4&&(i=i.child,i!==null))for(Jd(i,s,l),i=i.sibling;i!==null;)Jd(i,s,l),i=i.sibling}var An=null,bi=!1;function Hr(i,s,l){for(l=l.child;l!==null;)y0(i,s,l),l=l.sibling}function y0(i,s,l){if(Le&&typeof Le.onCommitFiberUnmount=="function")try{Le.onCommitFiberUnmount(ne,l)}catch{}switch(l.tag){case 5:Nn||vo(l,s);case 6:var d=An,m=bi;An=null,Hr(i,s,l),An=d,bi=m,An!==null&&(bi?(i=An,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):An.removeChild(l.stateNode));break;case 18:An!==null&&(bi?(i=An,l=l.stateNode,i.nodeType===8?fd(i.parentNode,l):i.nodeType===1&&fd(i,l),da(i)):fd(An,l.stateNode));break;case 4:d=An,m=bi,An=l.stateNode.containerInfo,bi=!0,Hr(i,s,l),An=d,bi=m;break;case 0:case 11:case 14:case 15:if(!Nn&&(d=l.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){m=d=d.next;do{var x=m,T=x.destroy;x=x.tag,T!==void 0&&((x&2)!==0||(x&4)!==0)&&Kd(l,s,T),m=m.next}while(m!==d)}Hr(i,s,l);break;case 1:if(!Nn&&(vo(l,s),d=l.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=l.memoizedProps,d.state=l.memoizedState,d.componentWillUnmount()}catch(O){rn(l,s,O)}Hr(i,s,l);break;case 21:Hr(i,s,l);break;case 22:l.mode&1?(Nn=(d=Nn)||l.memoizedState!==null,Hr(i,s,l),Nn=d):Hr(i,s,l);break;default:Hr(i,s,l)}}function S0(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new PE),s.forEach(function(d){var m=zE.bind(null,i,d);l.has(d)||(l.add(d),d.then(m,m))})}}function Ti(i,s){var l=s.deletions;if(l!==null)for(var d=0;d<l.length;d++){var m=l[d];try{var x=i,T=s,O=T;e:for(;O!==null;){switch(O.tag){case 5:An=O.stateNode,bi=!1;break e;case 3:An=O.stateNode.containerInfo,bi=!0;break e;case 4:An=O.stateNode.containerInfo,bi=!0;break e}O=O.return}if(An===null)throw Error(t(160));y0(x,T,m),An=null,bi=!1;var V=m.alternate;V!==null&&(V.return=null),m.return=null}catch(de){rn(m,s,de)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)M0(s,i),s=s.sibling}function M0(i,s){var l=i.alternate,d=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Ti(s,i),Hi(i),d&4){try{Na(3,i,i.return),sc(3,i)}catch(Ke){rn(i,i.return,Ke)}try{Na(5,i,i.return)}catch(Ke){rn(i,i.return,Ke)}}break;case 1:Ti(s,i),Hi(i),d&512&&l!==null&&vo(l,l.return);break;case 5:if(Ti(s,i),Hi(i),d&512&&l!==null&&vo(l,l.return),i.flags&32){var m=i.stateNode;try{ve(m,"")}catch(Ke){rn(i,i.return,Ke)}}if(d&4&&(m=i.stateNode,m!=null)){var x=i.memoizedProps,T=l!==null?l.memoizedProps:x,O=i.type,V=i.updateQueue;if(i.updateQueue=null,V!==null)try{O==="input"&&x.type==="radio"&&x.name!=null&&pt(m,x),Re(O,T);var de=Re(O,x);for(T=0;T<V.length;T+=2){var Se=V[T],Me=V[T+1];Se==="style"?me(m,Me):Se==="dangerouslySetInnerHTML"?pe(m,Me):Se==="children"?ve(m,Me):P(m,Se,Me,de)}switch(O){case"input":Qt(m,x);break;case"textarea":Ie(m,x);break;case"select":var ye=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!x.multiple;var Ge=x.value;Ge!=null?Ht(m,!!x.multiple,Ge,!1):ye!==!!x.multiple&&(x.defaultValue!=null?Ht(m,!!x.multiple,x.defaultValue,!0):Ht(m,!!x.multiple,x.multiple?[]:"",!1))}m[Ma]=x}catch(Ke){rn(i,i.return,Ke)}}break;case 6:if(Ti(s,i),Hi(i),d&4){if(i.stateNode===null)throw Error(t(162));m=i.stateNode,x=i.memoizedProps;try{m.nodeValue=x}catch(Ke){rn(i,i.return,Ke)}}break;case 3:if(Ti(s,i),Hi(i),d&4&&l!==null&&l.memoizedState.isDehydrated)try{da(s.containerInfo)}catch(Ke){rn(i,i.return,Ke)}break;case 4:Ti(s,i),Hi(i);break;case 13:Ti(s,i),Hi(i),m=i.child,m.flags&8192&&(x=m.memoizedState!==null,m.stateNode.isHidden=x,!x||m.alternate!==null&&m.alternate.memoizedState!==null||(nf=Jt())),d&4&&S0(i);break;case 22:if(Se=l!==null&&l.memoizedState!==null,i.mode&1?(Nn=(de=Nn)||Se,Ti(s,i),Nn=de):Ti(s,i),Hi(i),d&8192){if(de=i.memoizedState!==null,(i.stateNode.isHidden=de)&&!Se&&(i.mode&1)!==0)for(We=i,Se=i.child;Se!==null;){for(Me=We=Se;We!==null;){switch(ye=We,Ge=ye.child,ye.tag){case 0:case 11:case 14:case 15:Na(4,ye,ye.return);break;case 1:vo(ye,ye.return);var je=ye.stateNode;if(typeof je.componentWillUnmount=="function"){d=ye,l=ye.return;try{s=d,je.props=s.memoizedProps,je.state=s.memoizedState,je.componentWillUnmount()}catch(Ke){rn(d,l,Ke)}}break;case 5:vo(ye,ye.return);break;case 22:if(ye.memoizedState!==null){b0(Me);continue}}Ge!==null?(Ge.return=ye,We=Ge):b0(Me)}Se=Se.sibling}e:for(Se=null,Me=i;;){if(Me.tag===5){if(Se===null){Se=Me;try{m=Me.stateNode,de?(x=m.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(O=Me.stateNode,V=Me.memoizedProps.style,T=V!=null&&V.hasOwnProperty("display")?V.display:null,O.style.display=fe("display",T))}catch(Ke){rn(i,i.return,Ke)}}}else if(Me.tag===6){if(Se===null)try{Me.stateNode.nodeValue=de?"":Me.memoizedProps}catch(Ke){rn(i,i.return,Ke)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===i)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===i)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===i)break e;Se===Me&&(Se=null),Me=Me.return}Se===Me&&(Se=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:Ti(s,i),Hi(i),d&4&&S0(i);break;case 21:break;default:Ti(s,i),Hi(i)}}function Hi(i){var s=i.flags;if(s&2){try{e:{for(var l=i.return;l!==null;){if(x0(l)){var d=l;break e}l=l.return}throw Error(t(160))}switch(d.tag){case 5:var m=d.stateNode;d.flags&32&&(ve(m,""),d.flags&=-33);var x=_0(i);Jd(i,x,m);break;case 3:case 4:var T=d.stateNode.containerInfo,O=_0(i);Qd(i,O,T);break;default:throw Error(t(161))}}catch(V){rn(i,i.return,V)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function LE(i,s,l){We=i,E0(i)}function E0(i,s,l){for(var d=(i.mode&1)!==0;We!==null;){var m=We,x=m.child;if(m.tag===22&&d){var T=m.memoizedState!==null||rc;if(!T){var O=m.alternate,V=O!==null&&O.memoizedState!==null||Nn;O=rc;var de=Nn;if(rc=T,(Nn=V)&&!de)for(We=m;We!==null;)T=We,V=T.child,T.tag===22&&T.memoizedState!==null?T0(m):V!==null?(V.return=T,We=V):T0(m);for(;x!==null;)We=x,E0(x),x=x.sibling;We=m,rc=O,Nn=de}w0(i)}else(m.subtreeFlags&8772)!==0&&x!==null?(x.return=m,We=x):w0(i)}}function w0(i){for(;We!==null;){var s=We;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Nn||sc(5,s);break;case 1:var d=s.stateNode;if(s.flags&4&&!Nn)if(l===null)d.componentDidMount();else{var m=s.elementType===s.type?l.memoizedProps:wi(s.type,l.memoizedProps);d.componentDidUpdate(m,l.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var x=s.updateQueue;x!==null&&bg(s,x,d);break;case 3:var T=s.updateQueue;if(T!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}bg(s,T,l)}break;case 5:var O=s.stateNode;if(l===null&&s.flags&4){l=O;var V=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&l.focus();break;case"img":V.src&&(l.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var de=s.alternate;if(de!==null){var Se=de.memoizedState;if(Se!==null){var Me=Se.dehydrated;Me!==null&&da(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Nn||s.flags&512&&Zd(s)}catch(ye){rn(s,s.return,ye)}}if(s===i){We=null;break}if(l=s.sibling,l!==null){l.return=s.return,We=l;break}We=s.return}}function b0(i){for(;We!==null;){var s=We;if(s===i){We=null;break}var l=s.sibling;if(l!==null){l.return=s.return,We=l;break}We=s.return}}function T0(i){for(;We!==null;){var s=We;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{sc(4,s)}catch(V){rn(s,l,V)}break;case 1:var d=s.stateNode;if(typeof d.componentDidMount=="function"){var m=s.return;try{d.componentDidMount()}catch(V){rn(s,m,V)}}var x=s.return;try{Zd(s)}catch(V){rn(s,x,V)}break;case 5:var T=s.return;try{Zd(s)}catch(V){rn(s,T,V)}}}catch(V){rn(s,s.return,V)}if(s===i){We=null;break}var O=s.sibling;if(O!==null){O.return=s.return,We=O;break}We=s.return}}var NE=Math.ceil,oc=D.ReactCurrentDispatcher,ef=D.ReactCurrentOwner,hi=D.ReactCurrentBatchConfig,Tt=0,yn=null,dn=null,Cn=0,ni=0,xo=Or(0),pn=0,Ia=null,Ss=0,ac=0,tf=0,Ua=null,qn=null,nf=0,_o=1/0,fr=null,lc=!1,rf=null,Wr=null,cc=!1,jr=null,uc=0,Fa=0,sf=null,dc=-1,fc=0;function zn(){return(Tt&6)!==0?Jt():dc!==-1?dc:dc=Jt()}function Xr(i){return(i.mode&1)===0?1:(Tt&2)!==0&&Cn!==0?Cn&-Cn:gE.transition!==null?(fc===0&&(fc=Ve()),fc):(i=yt,i!==0||(i=window.event,i=i===void 0?16:Cm(i.type)),i)}function Ai(i,s,l,d){if(50<Fa)throw Fa=0,sf=null,Error(t(185));xt(i,l,d),((Tt&2)===0||i!==yn)&&(i===yn&&((Tt&2)===0&&(ac|=l),pn===4&&$r(i,Cn)),Yn(i,d),l===1&&Tt===0&&(s.mode&1)===0&&(_o=Jt()+500,zl&&zr()))}function Yn(i,s){var l=i.callbackNode;It(i,s);var d=Wt(i,i===yn?Cn:0);if(d===0)l!==null&&Ml(l),i.callbackNode=null,i.callbackPriority=0;else if(s=d&-d,i.callbackPriority!==s){if(l!=null&&Ml(l),s===1)i.tag===0?mE(C0.bind(null,i)):hg(C0.bind(null,i)),dE(function(){(Tt&6)===0&&zr()}),l=null;else{switch(rr(d)){case 1:l=oa;break;case 4:l=C;break;case 16:l=K;break;case 536870912:l=ie;break;default:l=K}l=F0(l,A0.bind(null,i))}i.callbackPriority=s,i.callbackNode=l}}function A0(i,s){if(dc=-1,fc=0,(Tt&6)!==0)throw Error(t(327));var l=i.callbackNode;if(yo()&&i.callbackNode!==l)return null;var d=Wt(i,i===yn?Cn:0);if(d===0)return null;if((d&30)!==0||(d&i.expiredLanes)!==0||s)s=hc(i,d);else{s=d;var m=Tt;Tt|=2;var x=P0();(yn!==i||Cn!==s)&&(fr=null,_o=Jt()+500,Es(i,s));do try{FE();break}catch(O){R0(i,O)}while(!0);Md(),oc.current=x,Tt=m,dn!==null?s=0:(yn=null,Cn=0,s=pn)}if(s!==0){if(s===2&&(m=un(i),m!==0&&(d=m,s=of(i,m))),s===1)throw l=Ia,Es(i,0),$r(i,d),Yn(i,Jt()),l;if(s===6)$r(i,d);else{if(m=i.current.alternate,(d&30)===0&&!IE(m)&&(s=hc(i,d),s===2&&(x=un(i),x!==0&&(d=x,s=of(i,x))),s===1))throw l=Ia,Es(i,0),$r(i,d),Yn(i,Jt()),l;switch(i.finishedWork=m,i.finishedLanes=d,s){case 0:case 1:throw Error(t(345));case 2:ws(i,qn,fr);break;case 3:if($r(i,d),(d&130023424)===d&&(s=nf+500-Jt(),10<s)){if(Wt(i,0)!==0)break;if(m=i.suspendedLanes,(m&d)!==d){zn(),i.pingedLanes|=i.suspendedLanes&m;break}i.timeoutHandle=dd(ws.bind(null,i,qn,fr),s);break}ws(i,qn,fr);break;case 4:if($r(i,d),(d&4194240)===d)break;for(s=i.eventTimes,m=-1;0<d;){var T=31-Pe(d);x=1<<T,T=s[T],T>m&&(m=T),d&=~x}if(d=m,d=Jt()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*NE(d/1960))-d,10<d){i.timeoutHandle=dd(ws.bind(null,i,qn,fr),d);break}ws(i,qn,fr);break;case 5:ws(i,qn,fr);break;default:throw Error(t(329))}}}return Yn(i,Jt()),i.callbackNode===l?A0.bind(null,i):null}function of(i,s){var l=Ua;return i.current.memoizedState.isDehydrated&&(Es(i,s).flags|=256),i=hc(i,s),i!==2&&(s=qn,qn=l,s!==null&&af(s)),i}function af(i){qn===null?qn=i:qn.push.apply(qn,i)}function IE(i){for(var s=i;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var d=0;d<l.length;d++){var m=l[d],x=m.getSnapshot;m=m.value;try{if(!Mi(x(),m))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function $r(i,s){for(s&=~tf,s&=~ac,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var l=31-Pe(s),d=1<<l;i[l]=-1,s&=~d}}function C0(i){if((Tt&6)!==0)throw Error(t(327));yo();var s=Wt(i,0);if((s&1)===0)return Yn(i,Jt()),null;var l=hc(i,s);if(i.tag!==0&&l===2){var d=un(i);d!==0&&(s=d,l=of(i,d))}if(l===1)throw l=Ia,Es(i,0),$r(i,s),Yn(i,Jt()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,ws(i,qn,fr),Yn(i,Jt()),null}function lf(i,s){var l=Tt;Tt|=1;try{return i(s)}finally{Tt=l,Tt===0&&(_o=Jt()+500,zl&&zr())}}function Ms(i){jr!==null&&jr.tag===0&&(Tt&6)===0&&yo();var s=Tt;Tt|=1;var l=hi.transition,d=yt;try{if(hi.transition=null,yt=1,i)return i()}finally{yt=d,hi.transition=l,Tt=s,(Tt&6)===0&&zr()}}function cf(){ni=xo.current,Yt(xo)}function Es(i,s){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,uE(l)),dn!==null)for(l=dn.return;l!==null;){var d=l;switch(vd(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&Ol();break;case 3:mo(),Yt(jn),Yt(Pn),Pd();break;case 5:Cd(d);break;case 4:mo();break;case 13:Yt(en);break;case 19:Yt(en);break;case 10:Ed(d.type._context);break;case 22:case 23:cf()}l=l.return}if(yn=i,dn=i=qr(i.current,null),Cn=ni=s,pn=0,Ia=null,tf=ac=Ss=0,qn=Ua=null,xs!==null){for(s=0;s<xs.length;s++)if(l=xs[s],d=l.interleaved,d!==null){l.interleaved=null;var m=d.next,x=l.pending;if(x!==null){var T=x.next;x.next=m,d.next=T}l.pending=d}xs=null}return i}function R0(i,s){do{var l=dn;try{if(Md(),Kl.current=ec,Zl){for(var d=tn.memoizedState;d!==null;){var m=d.queue;m!==null&&(m.pending=null),d=d.next}Zl=!1}if(ys=0,_n=hn=tn=null,Ca=!1,Ra=0,ef.current=null,l===null||l.return===null){pn=1,Ia=s,dn=null;break}e:{var x=i,T=l.return,O=l,V=s;if(s=Cn,O.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var de=V,Se=O,Me=Se.tag;if((Se.mode&1)===0&&(Me===0||Me===11||Me===15)){var ye=Se.alternate;ye?(Se.updateQueue=ye.updateQueue,Se.memoizedState=ye.memoizedState,Se.lanes=ye.lanes):(Se.updateQueue=null,Se.memoizedState=null)}var Ge=e0(T);if(Ge!==null){Ge.flags&=-257,t0(Ge,T,O,x,s),Ge.mode&1&&Jg(x,de,s),s=Ge,V=de;var je=s.updateQueue;if(je===null){var Ke=new Set;Ke.add(V),s.updateQueue=Ke}else je.add(V);break e}else{if((s&1)===0){Jg(x,de,s),uf();break e}V=Error(t(426))}}else if(Zt&&O.mode&1){var on=e0(T);if(on!==null){(on.flags&65536)===0&&(on.flags|=256),t0(on,T,O,x,s),yd(go(V,O));break e}}x=V=go(V,O),pn!==4&&(pn=2),Ua===null?Ua=[x]:Ua.push(x),x=T;do{switch(x.tag){case 3:x.flags|=65536,s&=-s,x.lanes|=s;var J=Zg(x,V,s);wg(x,J);break e;case 1:O=V;var $=x.type,oe=x.stateNode;if((x.flags&128)===0&&(typeof $.getDerivedStateFromError=="function"||oe!==null&&typeof oe.componentDidCatch=="function"&&(Wr===null||!Wr.has(oe)))){x.flags|=65536,s&=-s,x.lanes|=s;var Ae=Qg(x,O,s);wg(x,Ae);break e}}x=x.return}while(x!==null)}L0(l)}catch(Je){s=Je,dn===l&&l!==null&&(dn=l=l.return);continue}break}while(!0)}function P0(){var i=oc.current;return oc.current=ec,i===null?ec:i}function uf(){(pn===0||pn===3||pn===2)&&(pn=4),yn===null||(Ss&268435455)===0&&(ac&268435455)===0||$r(yn,Cn)}function hc(i,s){var l=Tt;Tt|=2;var d=P0();(yn!==i||Cn!==s)&&(fr=null,Es(i,s));do try{UE();break}catch(m){R0(i,m)}while(!0);if(Md(),Tt=l,oc.current=d,dn!==null)throw Error(t(261));return yn=null,Cn=0,pn}function UE(){for(;dn!==null;)D0(dn)}function FE(){for(;dn!==null&&!zu();)D0(dn)}function D0(i){var s=U0(i.alternate,i,ni);i.memoizedProps=i.pendingProps,s===null?L0(i):dn=s,ef.current=null}function L0(i){var s=i;do{var l=s.alternate;if(i=s.return,(s.flags&32768)===0){if(l=CE(l,s,ni),l!==null){dn=l;return}}else{if(l=RE(l,s),l!==null){l.flags&=32767,dn=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{pn=6,dn=null;return}}if(s=s.sibling,s!==null){dn=s;return}dn=s=i}while(s!==null);pn===0&&(pn=5)}function ws(i,s,l){var d=yt,m=hi.transition;try{hi.transition=null,yt=1,kE(i,s,l,d)}finally{hi.transition=m,yt=d}return null}function kE(i,s,l,d){do yo();while(jr!==null);if((Tt&6)!==0)throw Error(t(327));l=i.finishedWork;var m=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var x=l.lanes|l.childLanes;if(Hn(i,x),i===yn&&(dn=yn=null,Cn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||cc||(cc=!0,F0(K,function(){return yo(),null})),x=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||x){x=hi.transition,hi.transition=null;var T=yt;yt=1;var O=Tt;Tt|=4,ef.current=null,DE(i,l),M0(l,i),iE(cd),wl=!!ld,cd=ld=null,i.current=l,LE(l),Vu(),Tt=O,yt=T,hi.transition=x}else i.current=l;if(cc&&(cc=!1,jr=i,uc=m),x=i.pendingLanes,x===0&&(Wr=null),He(l.stateNode),Yn(i,Jt()),s!==null)for(d=i.onRecoverableError,l=0;l<s.length;l++)m=s[l],d(m.value,{componentStack:m.stack,digest:m.digest});if(lc)throw lc=!1,i=rf,rf=null,i;return(uc&1)!==0&&i.tag!==0&&yo(),x=i.pendingLanes,(x&1)!==0?i===sf?Fa++:(Fa=0,sf=i):Fa=0,zr(),null}function yo(){if(jr!==null){var i=rr(uc),s=hi.transition,l=yt;try{if(hi.transition=null,yt=16>i?16:i,jr===null)var d=!1;else{if(i=jr,jr=null,uc=0,(Tt&6)!==0)throw Error(t(331));var m=Tt;for(Tt|=4,We=i.current;We!==null;){var x=We,T=x.child;if((We.flags&16)!==0){var O=x.deletions;if(O!==null){for(var V=0;V<O.length;V++){var de=O[V];for(We=de;We!==null;){var Se=We;switch(Se.tag){case 0:case 11:case 15:Na(8,Se,x)}var Me=Se.child;if(Me!==null)Me.return=Se,We=Me;else for(;We!==null;){Se=We;var ye=Se.sibling,Ge=Se.return;if(v0(Se),Se===de){We=null;break}if(ye!==null){ye.return=Ge,We=ye;break}We=Ge}}}var je=x.alternate;if(je!==null){var Ke=je.child;if(Ke!==null){je.child=null;do{var on=Ke.sibling;Ke.sibling=null,Ke=on}while(Ke!==null)}}We=x}}if((x.subtreeFlags&2064)!==0&&T!==null)T.return=x,We=T;else e:for(;We!==null;){if(x=We,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:Na(9,x,x.return)}var J=x.sibling;if(J!==null){J.return=x.return,We=J;break e}We=x.return}}var $=i.current;for(We=$;We!==null;){T=We;var oe=T.child;if((T.subtreeFlags&2064)!==0&&oe!==null)oe.return=T,We=oe;else e:for(T=$;We!==null;){if(O=We,(O.flags&2048)!==0)try{switch(O.tag){case 0:case 11:case 15:sc(9,O)}}catch(Je){rn(O,O.return,Je)}if(O===T){We=null;break e}var Ae=O.sibling;if(Ae!==null){Ae.return=O.return,We=Ae;break e}We=O.return}}if(Tt=m,zr(),Le&&typeof Le.onPostCommitFiberRoot=="function")try{Le.onPostCommitFiberRoot(ne,i)}catch{}d=!0}return d}finally{yt=l,hi.transition=s}}return!1}function N0(i,s,l){s=go(l,s),s=Zg(i,s,1),i=Gr(i,s,1),s=zn(),i!==null&&(xt(i,1,s),Yn(i,s))}function rn(i,s,l){if(i.tag===3)N0(i,i,l);else for(;s!==null;){if(s.tag===3){N0(s,i,l);break}else if(s.tag===1){var d=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(Wr===null||!Wr.has(d))){i=go(l,i),i=Qg(s,i,1),s=Gr(s,i,1),i=zn(),s!==null&&(xt(s,1,i),Yn(s,i));break}}s=s.return}}function OE(i,s,l){var d=i.pingCache;d!==null&&d.delete(s),s=zn(),i.pingedLanes|=i.suspendedLanes&l,yn===i&&(Cn&l)===l&&(pn===4||pn===3&&(Cn&130023424)===Cn&&500>Jt()-nf?Es(i,0):tf|=l),Yn(i,s)}function I0(i,s){s===0&&((i.mode&1)===0?s=1:(s=Ze,Ze<<=1,(Ze&130023424)===0&&(Ze=4194304)));var l=zn();i=cr(i,s),i!==null&&(xt(i,s,l),Yn(i,l))}function BE(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),I0(i,l)}function zE(i,s){var l=0;switch(i.tag){case 13:var d=i.stateNode,m=i.memoizedState;m!==null&&(l=m.retryLane);break;case 19:d=i.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(s),I0(i,l)}var U0;U0=function(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps||jn.current)$n=!0;else{if((i.lanes&l)===0&&(s.flags&128)===0)return $n=!1,AE(i,s,l);$n=(i.flags&131072)!==0}else $n=!1,Zt&&(s.flags&1048576)!==0&&pg(s,Gl,s.index);switch(s.lanes=0,s.tag){case 2:var d=s.type;ic(i,s),i=s.pendingProps;var m=ao(s,Pn.current);po(s,l),m=Nd(null,s,d,i,m,l);var x=Id();return s.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Xn(d)?(x=!0,Bl(s)):x=!1,s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,Td(s),m.updater=tc,s.stateNode=m,m._reactInternals=s,zd(s,d,i,l),s=Wd(null,s,d,!0,x,l)):(s.tag=0,Zt&&x&&gd(s),Bn(null,s,m,l),s=s.child),s;case 16:d=s.elementType;e:{switch(ic(i,s),i=s.pendingProps,m=d._init,d=m(d._payload),s.type=d,m=s.tag=GE(d),i=wi(d,i),m){case 0:s=Hd(null,s,d,i,l);break e;case 1:s=a0(null,s,d,i,l);break e;case 11:s=n0(null,s,d,i,l);break e;case 14:s=i0(null,s,d,wi(d.type,i),l);break e}throw Error(t(306,d,""))}return s;case 0:return d=s.type,m=s.pendingProps,m=s.elementType===d?m:wi(d,m),Hd(i,s,d,m,l);case 1:return d=s.type,m=s.pendingProps,m=s.elementType===d?m:wi(d,m),a0(i,s,d,m,l);case 3:e:{if(l0(s),i===null)throw Error(t(387));d=s.pendingProps,x=s.memoizedState,m=x.element,Eg(i,s),ql(s,d,null,l);var T=s.memoizedState;if(d=T.element,x.isDehydrated)if(x={element:d,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},s.updateQueue.baseState=x,s.memoizedState=x,s.flags&256){m=go(Error(t(423)),s),s=c0(i,s,d,l,m);break e}else if(d!==m){m=go(Error(t(424)),s),s=c0(i,s,d,l,m);break e}else for(ti=kr(s.stateNode.containerInfo.firstChild),ei=s,Zt=!0,Ei=null,l=Sg(s,null,d,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(uo(),d===m){s=dr(i,s,l);break e}Bn(i,s,d,l)}s=s.child}return s;case 5:return Tg(s),i===null&&_d(s),d=s.type,m=s.pendingProps,x=i!==null?i.memoizedProps:null,T=m.children,ud(d,m)?T=null:x!==null&&ud(d,x)&&(s.flags|=32),o0(i,s),Bn(i,s,T,l),s.child;case 6:return i===null&&_d(s),null;case 13:return u0(i,s,l);case 4:return Ad(s,s.stateNode.containerInfo),d=s.pendingProps,i===null?s.child=fo(s,null,d,l):Bn(i,s,d,l),s.child;case 11:return d=s.type,m=s.pendingProps,m=s.elementType===d?m:wi(d,m),n0(i,s,d,m,l);case 7:return Bn(i,s,s.pendingProps,l),s.child;case 8:return Bn(i,s,s.pendingProps.children,l),s.child;case 12:return Bn(i,s,s.pendingProps.children,l),s.child;case 10:e:{if(d=s.type._context,m=s.pendingProps,x=s.memoizedProps,T=m.value,jt(jl,d._currentValue),d._currentValue=T,x!==null)if(Mi(x.value,T)){if(x.children===m.children&&!jn.current){s=dr(i,s,l);break e}}else for(x=s.child,x!==null&&(x.return=s);x!==null;){var O=x.dependencies;if(O!==null){T=x.child;for(var V=O.firstContext;V!==null;){if(V.context===d){if(x.tag===1){V=ur(-1,l&-l),V.tag=2;var de=x.updateQueue;if(de!==null){de=de.shared;var Se=de.pending;Se===null?V.next=V:(V.next=Se.next,Se.next=V),de.pending=V}}x.lanes|=l,V=x.alternate,V!==null&&(V.lanes|=l),wd(x.return,l,s),O.lanes|=l;break}V=V.next}}else if(x.tag===10)T=x.type===s.type?null:x.child;else if(x.tag===18){if(T=x.return,T===null)throw Error(t(341));T.lanes|=l,O=T.alternate,O!==null&&(O.lanes|=l),wd(T,l,s),T=x.sibling}else T=x.child;if(T!==null)T.return=x;else for(T=x;T!==null;){if(T===s){T=null;break}if(x=T.sibling,x!==null){x.return=T.return,T=x;break}T=T.return}x=T}Bn(i,s,m.children,l),s=s.child}return s;case 9:return m=s.type,d=s.pendingProps.children,po(s,l),m=di(m),d=d(m),s.flags|=1,Bn(i,s,d,l),s.child;case 14:return d=s.type,m=wi(d,s.pendingProps),m=wi(d.type,m),i0(i,s,d,m,l);case 15:return r0(i,s,s.type,s.pendingProps,l);case 17:return d=s.type,m=s.pendingProps,m=s.elementType===d?m:wi(d,m),ic(i,s),s.tag=1,Xn(d)?(i=!0,Bl(s)):i=!1,po(s,l),Yg(s,d,m),zd(s,d,m,l),Wd(null,s,d,!0,i,l);case 19:return f0(i,s,l);case 22:return s0(i,s,l)}throw Error(t(156,s.tag))};function F0(i,s){return Sl(i,s)}function VE(i,s,l,d){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pi(i,s,l,d){return new VE(i,s,l,d)}function df(i){return i=i.prototype,!(!i||!i.isReactComponent)}function GE(i){if(typeof i=="function")return df(i)?1:0;if(i!=null){if(i=i.$$typeof,i===q)return 11;if(i===G)return 14}return 2}function qr(i,s){var l=i.alternate;return l===null?(l=pi(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function pc(i,s,l,d,m,x){var T=2;if(d=i,typeof i=="function")df(i)&&(T=1);else if(typeof i=="string")T=5;else e:switch(i){case k:return bs(l.children,m,x,s);case E:T=8,m|=8;break;case F:return i=pi(12,l,s,m|2),i.elementType=F,i.lanes=x,i;case re:return i=pi(13,l,s,m),i.elementType=re,i.lanes=x,i;case ue:return i=pi(19,l,s,m),i.elementType=ue,i.lanes=x,i;case W:return mc(l,m,x,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case z:T=10;break e;case U:T=9;break e;case q:T=11;break e;case G:T=14;break e;case Z:T=16,d=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=pi(T,l,s,m),s.elementType=i,s.type=d,s.lanes=x,s}function bs(i,s,l,d){return i=pi(7,i,d,s),i.lanes=l,i}function mc(i,s,l,d){return i=pi(22,i,d,s),i.elementType=W,i.lanes=l,i.stateNode={isHidden:!1},i}function ff(i,s,l){return i=pi(6,i,null,s),i.lanes=l,i}function hf(i,s,l){return s=pi(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function HE(i,s,l,d,m){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tn(0),this.expirationTimes=Tn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tn(0),this.identifierPrefix=d,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function pf(i,s,l,d,m,x,T,O,V){return i=new HE(i,s,l,O,V),s===1?(s=1,x===!0&&(s|=8)):s=0,x=pi(3,null,null,s),i.current=x,x.stateNode=i,x.memoizedState={element:d,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Td(x),i}function WE(i,s,l){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:d==null?null:""+d,children:i,containerInfo:s,implementation:l}}function k0(i){if(!i)return Br;i=i._reactInternals;e:{if(Oi(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Xn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(Xn(l))return dg(i,l,s)}return s}function O0(i,s,l,d,m,x,T,O,V){return i=pf(l,d,!0,i,m,x,T,O,V),i.context=k0(null),l=i.current,d=zn(),m=Xr(l),x=ur(d,m),x.callback=s??null,Gr(l,x,m),i.current.lanes=m,xt(i,m,d),Yn(i,d),i}function gc(i,s,l,d){var m=s.current,x=zn(),T=Xr(m);return l=k0(l),s.context===null?s.context=l:s.pendingContext=l,s=ur(x,T),s.payload={element:i},d=d===void 0?null:d,d!==null&&(s.callback=d),i=Gr(m,s,T),i!==null&&(Ai(i,m,T,x),$l(i,m,T)),T}function vc(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function B0(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function mf(i,s){B0(i,s),(i=i.alternate)&&B0(i,s)}function jE(){return null}var z0=typeof reportError=="function"?reportError:function(i){console.error(i)};function gf(i){this._internalRoot=i}xc.prototype.render=gf.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));gc(i,s,null,null)},xc.prototype.unmount=gf.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;Ms(function(){gc(null,i,null,null)}),s[sr]=null}};function xc(i){this._internalRoot=i}xc.prototype.unstable_scheduleHydration=function(i){if(i){var s=Ut();i={blockedOn:null,target:i,priority:s};for(var l=0;l<Ir.length&&s!==0&&s<Ir[l].priority;l++);Ir.splice(l,0,i),l===0&&Tm(i)}};function vf(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function _c(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function V0(){}function XE(i,s,l,d,m){if(m){if(typeof d=="function"){var x=d;d=function(){var de=vc(T);x.call(de)}}var T=O0(s,d,i,0,null,!1,!1,"",V0);return i._reactRootContainer=T,i[sr]=T.current,ya(i.nodeType===8?i.parentNode:i),Ms(),T}for(;m=i.lastChild;)i.removeChild(m);if(typeof d=="function"){var O=d;d=function(){var de=vc(V);O.call(de)}}var V=pf(i,0,!1,null,null,!1,!1,"",V0);return i._reactRootContainer=V,i[sr]=V.current,ya(i.nodeType===8?i.parentNode:i),Ms(function(){gc(s,V,l,d)}),V}function yc(i,s,l,d,m){var x=l._reactRootContainer;if(x){var T=x;if(typeof m=="function"){var O=m;m=function(){var V=vc(T);O.call(V)}}gc(s,T,i,m)}else T=XE(l,s,i,m,d);return vc(T)}Lt=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var l=bt(s.pendingLanes);l!==0&&(Wn(s,l|1),Yn(s,Jt()),(Tt&6)===0&&(_o=Jt()+500,zr()))}break;case 13:Ms(function(){var d=cr(i,1);if(d!==null){var m=zn();Ai(d,i,1,m)}}),mf(i,1)}},$t=function(i){if(i.tag===13){var s=cr(i,134217728);if(s!==null){var l=zn();Ai(s,i,134217728,l)}mf(i,134217728)}},yi=function(i){if(i.tag===13){var s=Xr(i),l=cr(i,s);if(l!==null){var d=zn();Ai(l,i,s,d)}mf(i,s)}},Ut=function(){return yt},Si=function(i,s){var l=yt;try{return yt=i,s()}finally{yt=l}},ct=function(i,s,l){switch(s){case"input":if(Qt(i,l),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var d=l[s];if(d!==i&&d.form===i.form){var m=kl(d);if(!m)throw Error(t(90));Pt(d),Qt(d,m)}}}break;case"textarea":Ie(i,l);break;case"select":s=l.value,s!=null&&Ht(i,!!l.multiple,s,!1)}},De=lf,_e=Ms;var $E={usingClientEntryPoint:!1,Events:[Ea,so,kl,he,Oe,lf]},ka={findFiberByHostInstance:ps,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qE={bundleType:ka.bundleType,version:ka.version,rendererPackageName:ka.rendererPackageName,rendererConfig:ka.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:D.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=ra(i),i===null?null:i.stateNode},findFiberByHostInstance:ka.findFiberByHostInstance||jE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sc.isDisabled&&Sc.supportsFiber)try{ne=Sc.inject(qE),Le=Sc}catch{}}return Kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$E,Kn.createPortal=function(i,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vf(s))throw Error(t(200));return WE(i,s,null,l)},Kn.createRoot=function(i,s){if(!vf(i))throw Error(t(299));var l=!1,d="",m=z0;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(d=s.identifierPrefix),s.onRecoverableError!==void 0&&(m=s.onRecoverableError)),s=pf(i,1,!1,null,null,l,!1,d,m),i[sr]=s.current,ya(i.nodeType===8?i.parentNode:i),new gf(s)},Kn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=ra(s),i=i===null?null:i.stateNode,i},Kn.flushSync=function(i){return Ms(i)},Kn.hydrate=function(i,s,l){if(!_c(s))throw Error(t(200));return yc(null,i,s,!0,l)},Kn.hydrateRoot=function(i,s,l){if(!vf(i))throw Error(t(405));var d=l!=null&&l.hydratedSources||null,m=!1,x="",T=z0;if(l!=null&&(l.unstable_strictMode===!0&&(m=!0),l.identifierPrefix!==void 0&&(x=l.identifierPrefix),l.onRecoverableError!==void 0&&(T=l.onRecoverableError)),s=O0(s,null,i,1,l??null,m,!1,x,T),i[sr]=s.current,ya(i),d)for(i=0;i<d.length;i++)l=d[i],m=l._getVersion,m=m(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,m]:s.mutableSourceEagerHydrationData.push(l,m);return new xc(s)},Kn.render=function(i,s,l){if(!_c(s))throw Error(t(200));return yc(null,i,s,!1,l)},Kn.unmountComponentAtNode=function(i){if(!_c(i))throw Error(t(40));return i._reactRootContainer?(Ms(function(){yc(null,null,i,!1,function(){i._reactRootContainer=null,i[sr]=null})}),!0):!1},Kn.unstable_batchedUpdates=lf,Kn.unstable_renderSubtreeIntoContainer=function(i,s,l,d){if(!_c(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return yc(i,s,l,!1,d)},Kn.version="18.3.1-next-f1338f8080-20240426",Kn}var Y0;function rw(){if(Y0)return yf.exports;Y0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),yf.exports=iw(),yf.exports}var K0;function sw(){if(K0)return Mc;K0=1;var n=rw();return Mc.createRoot=n.createRoot,Mc.hydrateRoot=n.hydrateRoot,Mc}var ow=sw();const aw=P_(ow),lw=()=>{ce.useEffect(()=>{const e=new URLSearchParams(window.location.search).get("q");e&&window.history&&window.history.replaceState&&window.history.replaceState(null,"",e+window.location.hash)},[])},D_=ce.createContext({theme:"dark",systemTheme:"dark",toggleTheme:()=>{},setTheme:()=>{},isDark:!0,isLight:!1,isSystem:!1}),cw=({children:n})=>{const[e,t]=ce.useState("dark"),r="dark",o="dark",a=!0,c=!1,u=!1;ce.useEffect(()=>{const g=document.documentElement;g.classList.remove("dark","light","theme-dark","theme-light"),g.classList.add("theme-dark","dark"),g.style.setProperty("--theme-bg","#0a1628"),g.style.setProperty("--theme-text","#ffffff"),g.style.setProperty("--theme-surface","rgba(255,255,255,0.05)"),g.style.setProperty("--theme-border","rgba(255,255,255,0.1)")},[]);const f=ce.useCallback(g=>{t(g)},[]),h=ce.useCallback(()=>{t(g=>g==="light"?"dark":"light")},[]),p=ce.useMemo(()=>({theme:e,systemTheme:r,effectiveTheme:o,toggleTheme:h,setTheme:f,isDark:a,isLight:c,isSystem:u}),[e]);return R.jsx(D_.Provider,{value:p,children:n})},tr=()=>{const n=ce.useContext(D_);if(!n)throw new Error("useTheme must be used within a ThemeProvider");return n};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Tp="184",uw=0,Z0=1,dw=2,Jc=1,fw=2,qa=3,as=0,Qn=1,_r=2,Sr=0,Vo=1,Q0=2,J0=3,ev=4,hw=5,Us=100,pw=101,mw=102,gw=103,vw=104,xw=200,_w=201,yw=202,Sw=203,vh=204,xh=205,Mw=206,Ew=207,ww=208,bw=209,Tw=210,Aw=211,Cw=212,Rw=213,Pw=214,_h=0,yh=1,Sh=2,Ho=3,Mh=4,Eh=5,wh=6,bh=7,L_=0,Dw=1,Lw=2,Yi=0,N_=1,I_=2,U_=3,F_=4,k_=5,O_=6,B_=7,z_=300,Hs=301,Wo=302,Ef=303,wf=304,Au=306,Th=1e3,yr=1001,Ah=1002,Rn=1003,Nw=1004,Ec=1005,kn=1006,bf=1007,ks=1008,_i=1009,V_=1010,G_=1011,rl=1012,Ap=1013,er=1014,$i=1015,Tr=1016,Cp=1017,Rp=1018,sl=1020,H_=35902,W_=35899,j_=1021,X_=1022,Ii=1023,Ar=1026,Os=1027,$_=1028,Pp=1029,Ws=1030,Dp=1031,Lp=1033,eu=33776,tu=33777,nu=33778,iu=33779,Ch=35840,Rh=35841,Ph=35842,Dh=35843,Lh=36196,Nh=37492,Ih=37496,Uh=37488,Fh=37489,cu=37490,kh=37491,Oh=37808,Bh=37809,zh=37810,Vh=37811,Gh=37812,Hh=37813,Wh=37814,jh=37815,Xh=37816,$h=37817,qh=37818,Yh=37819,Kh=37820,Zh=37821,Qh=36492,Jh=36494,ep=36495,tp=36283,np=36284,uu=36285,ip=36286,Iw=3200,tv=0,Uw=1,ss="",xi="srgb",du="srgb-linear",fu="linear",Ft="srgb",So=7680,nv=519,Fw=512,kw=513,Ow=514,Np=515,Bw=516,zw=517,Ip=518,Vw=519,iv=35044,rv="300 es",qi=2e3,hu=2001;function Gw(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function pu(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Hw(){const n=pu("canvas");return n.style.display="block",n}const sv={};function ov(...n){const e="THREE."+n.shift();console.log(e,...n)}function q_(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function at(...n){n=q_(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function At(...n){n=q_(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function rp(...n){const e=n.join(" ");e in sv||(sv[e]=!0,at(...n))}function Ww(n,e,t){return new Promise(function(r,o){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:r()}}setTimeout(a,t)})}const jw={[_h]:yh,[Sh]:wh,[Mh]:bh,[Ho]:Eh,[yh]:_h,[wh]:Sh,[bh]:Mh,[Eh]:Ho};class Xs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let a=0,c=o.length;a<c;a++)o[a].call(this,e);e.target=null}}}const In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tf=Math.PI/180,sp=180/Math.PI;function dl(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(In[n&255]+In[n>>8&255]+In[n>>16&255]+In[n>>24&255]+"-"+In[e&255]+In[e>>8&255]+"-"+In[e>>16&15|64]+In[e>>24&255]+"-"+In[t&63|128]+In[t>>8&255]+"-"+In[t>>16&255]+In[t>>24&255]+In[r&255]+In[r>>8&255]+In[r>>16&255]+In[r>>24&255]).toLowerCase()}function wt(n,e,t){return Math.max(e,Math.min(t,n))}function Xw(n,e){return(n%e+e)%e}function Af(n,e,t){return(1-t)*n+t*e}function Ba(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Zn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ym=class ym{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(wt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(wt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*r-c*o+e.x,this.y=a*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ym.prototype.isVector2=!0;let Dt=ym;class Zo{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,a,c,u){let f=r[o+0],h=r[o+1],p=r[o+2],g=r[o+3],v=a[c+0],_=a[c+1],M=a[c+2],b=a[c+3];if(g!==b||f!==v||h!==_||p!==M){let y=f*v+h*_+p*M+g*b;y<0&&(v=-v,_=-_,M=-M,b=-b,y=-y);let S=1-u;if(y<.9995){const A=Math.acos(y),P=Math.sin(A);S=Math.sin(S*A)/P,u=Math.sin(u*A)/P,f=f*S+v*u,h=h*S+_*u,p=p*S+M*u,g=g*S+b*u}else{f=f*S+v*u,h=h*S+_*u,p=p*S+M*u,g=g*S+b*u;const A=1/Math.sqrt(f*f+h*h+p*p+g*g);f*=A,h*=A,p*=A,g*=A}}e[t]=f,e[t+1]=h,e[t+2]=p,e[t+3]=g}static multiplyQuaternionsFlat(e,t,r,o,a,c){const u=r[o],f=r[o+1],h=r[o+2],p=r[o+3],g=a[c],v=a[c+1],_=a[c+2],M=a[c+3];return e[t]=u*M+p*g+f*_-h*v,e[t+1]=f*M+p*v+h*g-u*_,e[t+2]=h*M+p*_+u*v-f*g,e[t+3]=p*M-u*g-f*v-h*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,a=e._z,c=e._order,u=Math.cos,f=Math.sin,h=u(r/2),p=u(o/2),g=u(a/2),v=f(r/2),_=f(o/2),M=f(a/2);switch(c){case"XYZ":this._x=v*p*g+h*_*M,this._y=h*_*g-v*p*M,this._z=h*p*M+v*_*g,this._w=h*p*g-v*_*M;break;case"YXZ":this._x=v*p*g+h*_*M,this._y=h*_*g-v*p*M,this._z=h*p*M-v*_*g,this._w=h*p*g+v*_*M;break;case"ZXY":this._x=v*p*g-h*_*M,this._y=h*_*g+v*p*M,this._z=h*p*M+v*_*g,this._w=h*p*g-v*_*M;break;case"ZYX":this._x=v*p*g-h*_*M,this._y=h*_*g+v*p*M,this._z=h*p*M-v*_*g,this._w=h*p*g+v*_*M;break;case"YZX":this._x=v*p*g+h*_*M,this._y=h*_*g+v*p*M,this._z=h*p*M-v*_*g,this._w=h*p*g-v*_*M;break;case"XZY":this._x=v*p*g-h*_*M,this._y=h*_*g-v*p*M,this._z=h*p*M+v*_*g,this._w=h*p*g+v*_*M;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],a=t[8],c=t[1],u=t[5],f=t[9],h=t[2],p=t[6],g=t[10],v=r+u+g;if(v>0){const _=.5/Math.sqrt(v+1);this._w=.25/_,this._x=(p-f)*_,this._y=(a-h)*_,this._z=(c-o)*_}else if(r>u&&r>g){const _=2*Math.sqrt(1+r-u-g);this._w=(p-f)/_,this._x=.25*_,this._y=(o+c)/_,this._z=(a+h)/_}else if(u>g){const _=2*Math.sqrt(1+u-r-g);this._w=(a-h)/_,this._x=(o+c)/_,this._y=.25*_,this._z=(f+p)/_}else{const _=2*Math.sqrt(1+g-r-u);this._w=(c-o)/_,this._x=(a+h)/_,this._y=(f+p)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,a=e._z,c=e._w,u=t._x,f=t._y,h=t._z,p=t._w;return this._x=r*p+c*u+o*h-a*f,this._y=o*p+c*f+a*u-r*h,this._z=a*p+c*h+r*f-o*u,this._w=c*p-r*u-o*f-a*h,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,a=e._z,c=e._w,u=this.dot(e);u<0&&(r=-r,o=-o,a=-a,c=-c,u=-u);let f=1-t;if(u<.9995){const h=Math.acos(u),p=Math.sin(h);f=Math.sin(f*h)/p,t=Math.sin(t*h)/p,this._x=this._x*f+r*t,this._y=this._y*f+o*t,this._z=this._z*f+a*t,this._w=this._w*f+c*t,this._onChangeCallback()}else this._x=this._x*f+r*t,this._y=this._y*f+o*t,this._z=this._z*f+a*t,this._w=this._w*f+c*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),a=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Sm=class Sm{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(av.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(av.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6]*o,this.y=a[1]*t+a[4]*r+a[7]*o,this.z=a[2]*t+a[5]*r+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,a=e.elements,c=1/(a[3]*t+a[7]*r+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*r+a[8]*o+a[12])*c,this.y=(a[1]*t+a[5]*r+a[9]*o+a[13])*c,this.z=(a[2]*t+a[6]*r+a[10]*o+a[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,a=e.x,c=e.y,u=e.z,f=e.w,h=2*(c*o-u*r),p=2*(u*t-a*o),g=2*(a*r-c*t);return this.x=t+f*h+c*g-u*p,this.y=r+f*p+u*h-a*g,this.z=o+f*g+a*p-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*o,this.y=a[1]*t+a[5]*r+a[9]*o,this.z=a[2]*t+a[6]*r+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this.z=wt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this.z=wt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(wt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,a=e.z,c=t.x,u=t.y,f=t.z;return this.x=o*f-a*u,this.y=a*c-r*f,this.z=r*u-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Cf.copy(this).projectOnVector(e),this.sub(Cf)}reflect(e){return this.sub(Cf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(wt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Sm.prototype.isVector3=!0;let ae=Sm;const Cf=new ae,av=new Zo,Mm=class Mm{constructor(e,t,r,o,a,c,u,f,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,a,c,u,f,h)}set(e,t,r,o,a,c,u,f,h){const p=this.elements;return p[0]=e,p[1]=o,p[2]=u,p[3]=t,p[4]=a,p[5]=f,p[6]=r,p[7]=c,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,a=this.elements,c=r[0],u=r[3],f=r[6],h=r[1],p=r[4],g=r[7],v=r[2],_=r[5],M=r[8],b=o[0],y=o[3],S=o[6],A=o[1],P=o[4],D=o[7],I=o[2],L=o[5],k=o[8];return a[0]=c*b+u*A+f*I,a[3]=c*y+u*P+f*L,a[6]=c*S+u*D+f*k,a[1]=h*b+p*A+g*I,a[4]=h*y+p*P+g*L,a[7]=h*S+p*D+g*k,a[2]=v*b+_*A+M*I,a[5]=v*y+_*P+M*L,a[8]=v*S+_*D+M*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],c=e[4],u=e[5],f=e[6],h=e[7],p=e[8];return t*c*p-t*u*h-r*a*p+r*u*f+o*a*h-o*c*f}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],c=e[4],u=e[5],f=e[6],h=e[7],p=e[8],g=p*c-u*h,v=u*f-p*a,_=h*a-c*f,M=t*g+r*v+o*_;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/M;return e[0]=g*b,e[1]=(o*h-p*r)*b,e[2]=(u*r-o*c)*b,e[3]=v*b,e[4]=(p*t-o*f)*b,e[5]=(o*a-u*t)*b,e[6]=_*b,e[7]=(r*f-h*t)*b,e[8]=(c*t-r*a)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,a,c,u){const f=Math.cos(a),h=Math.sin(a);return this.set(r*f,r*h,-r*(f*c+h*u)+c+e,-o*h,o*f,-o*(-h*c+f*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(Rf.makeScale(e,t)),this}rotate(e){return this.premultiply(Rf.makeRotation(-e)),this}translate(e,t){return this.premultiply(Rf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Mm.prototype.isMatrix3=!0;let ht=Mm;const Rf=new ht,lv=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cv=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $w(){const n={enabled:!0,workingColorSpace:du,spaces:{},convert:function(o,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===Ft&&(o.r=Mr(o.r),o.g=Mr(o.g),o.b=Mr(o.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[a].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ft&&(o.r=Go(o.r),o.g=Go(o.g),o.b=Go(o.b))),o},workingToColorSpace:function(o,a){return this.convert(o,this.workingColorSpace,a)},colorSpaceToWorking:function(o,a){return this.convert(o,a,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===ss?fu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,a=this.workingColorSpace){return o.fromArray(this.spaces[a].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,a,c){return o.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,a){return rp("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(o,a)},toWorkingColorSpace:function(o,a){return rp("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(o,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[du]:{primaries:e,whitePoint:r,transfer:fu,toXYZ:lv,fromXYZ:cv,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xi},outputColorSpaceConfig:{drawingBufferColorSpace:xi}},[xi]:{primaries:e,whitePoint:r,transfer:Ft,toXYZ:lv,fromXYZ:cv,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xi}}}),n}const Et=$w();function Mr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Go(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Mo;class qw{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Mo===void 0&&(Mo=pu("canvas")),Mo.width=e.width,Mo.height=e.height;const o=Mo.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Mo}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=pu("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),a=o.data;for(let c=0;c<a.length;c++)a[c]=Mr(a[c]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Mr(t[r]/255)*255):t[r]=Mr(t[r]);return{data:t,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Yw=0;class Up{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yw++}),this.uuid=dl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let c=0,u=o.length;c<u;c++)o[c].isDataTexture?a.push(Pf(o[c].image)):a.push(Pf(o[c]))}else a=Pf(o);r.url=a}return t||(e.images[this.uuid]=r),r}}function Pf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?qw.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}let Kw=0;const Df=new ae;class Gn extends Xs{constructor(e=Gn.DEFAULT_IMAGE,t=Gn.DEFAULT_MAPPING,r=yr,o=yr,a=kn,c=ks,u=Ii,f=_i,h=Gn.DEFAULT_ANISOTROPY,p=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kw++}),this.uuid=dl(),this.name="",this.source=new Up(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=a,this.minFilter=c,this.anisotropy=h,this.format=u,this.internalFormat=null,this.type=f,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Df).x}get height(){return this.source.getSize(Df).y}get depth(){return this.source.getSize(Df).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){at(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){at(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==z_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Th:e.x=e.x-Math.floor(e.x);break;case yr:e.x=e.x<0?0:1;break;case Ah:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Th:e.y=e.y-Math.floor(e.y);break;case yr:e.y=e.y<0?0:1;break;case Ah:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=z_;Gn.DEFAULT_ANISOTROPY=1;const Em=class Em{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o+c[12]*a,this.y=c[1]*t+c[5]*r+c[9]*o+c[13]*a,this.z=c[2]*t+c[6]*r+c[10]*o+c[14]*a,this.w=c[3]*t+c[7]*r+c[11]*o+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,a;const f=e.elements,h=f[0],p=f[4],g=f[8],v=f[1],_=f[5],M=f[9],b=f[2],y=f[6],S=f[10];if(Math.abs(p-v)<.01&&Math.abs(g-b)<.01&&Math.abs(M-y)<.01){if(Math.abs(p+v)<.1&&Math.abs(g+b)<.1&&Math.abs(M+y)<.1&&Math.abs(h+_+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(h+1)/2,D=(_+1)/2,I=(S+1)/2,L=(p+v)/4,k=(g+b)/4,E=(M+y)/4;return P>D&&P>I?P<.01?(r=0,o=.707106781,a=.707106781):(r=Math.sqrt(P),o=L/r,a=k/r):D>I?D<.01?(r=.707106781,o=0,a=.707106781):(o=Math.sqrt(D),r=L/o,a=E/o):I<.01?(r=.707106781,o=.707106781,a=0):(a=Math.sqrt(I),r=k/a,o=E/a),this.set(r,o,a,t),this}let A=Math.sqrt((y-M)*(y-M)+(g-b)*(g-b)+(v-p)*(v-p));return Math.abs(A)<.001&&(A=1),this.x=(y-M)/A,this.y=(g-b)/A,this.z=(v-p)/A,this.w=Math.acos((h+_+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this.z=wt(this.z,e.z,t.z),this.w=wt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this.z=wt(this.z,e,t),this.w=wt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(wt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Em.prototype.isVector4=!0;let ln=Em;class Zw extends Xs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new ln(0,0,e,t),this.scissorTest=!1,this.viewport=new ln(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},a=new Gn(o),c=r.count;for(let u=0;u<c;u++)this.textures[u]=a.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:kn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Up(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ki extends Zw{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Y_ extends Gn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qw extends Gn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Tu=class Tu{constructor(e,t,r,o,a,c,u,f,h,p,g,v,_,M,b,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,a,c,u,f,h,p,g,v,_,M,b,y)}set(e,t,r,o,a,c,u,f,h,p,g,v,_,M,b,y){const S=this.elements;return S[0]=e,S[4]=t,S[8]=r,S[12]=o,S[1]=a,S[5]=c,S[9]=u,S[13]=f,S[2]=h,S[6]=p,S[10]=g,S[14]=v,S[3]=_,S[7]=M,S[11]=b,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tu().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/Eo.setFromMatrixColumn(e,0).length(),a=1/Eo.setFromMatrixColumn(e,1).length(),c=1/Eo.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*a,t[5]=r[5]*a,t[6]=r[6]*a,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,a=e.z,c=Math.cos(r),u=Math.sin(r),f=Math.cos(o),h=Math.sin(o),p=Math.cos(a),g=Math.sin(a);if(e.order==="XYZ"){const v=c*p,_=c*g,M=u*p,b=u*g;t[0]=f*p,t[4]=-f*g,t[8]=h,t[1]=_+M*h,t[5]=v-b*h,t[9]=-u*f,t[2]=b-v*h,t[6]=M+_*h,t[10]=c*f}else if(e.order==="YXZ"){const v=f*p,_=f*g,M=h*p,b=h*g;t[0]=v+b*u,t[4]=M*u-_,t[8]=c*h,t[1]=c*g,t[5]=c*p,t[9]=-u,t[2]=_*u-M,t[6]=b+v*u,t[10]=c*f}else if(e.order==="ZXY"){const v=f*p,_=f*g,M=h*p,b=h*g;t[0]=v-b*u,t[4]=-c*g,t[8]=M+_*u,t[1]=_+M*u,t[5]=c*p,t[9]=b-v*u,t[2]=-c*h,t[6]=u,t[10]=c*f}else if(e.order==="ZYX"){const v=c*p,_=c*g,M=u*p,b=u*g;t[0]=f*p,t[4]=M*h-_,t[8]=v*h+b,t[1]=f*g,t[5]=b*h+v,t[9]=_*h-M,t[2]=-h,t[6]=u*f,t[10]=c*f}else if(e.order==="YZX"){const v=c*f,_=c*h,M=u*f,b=u*h;t[0]=f*p,t[4]=b-v*g,t[8]=M*g+_,t[1]=g,t[5]=c*p,t[9]=-u*p,t[2]=-h*p,t[6]=_*g+M,t[10]=v-b*g}else if(e.order==="XZY"){const v=c*f,_=c*h,M=u*f,b=u*h;t[0]=f*p,t[4]=-g,t[8]=h*p,t[1]=v*g+b,t[5]=c*p,t[9]=_*g-M,t[2]=M*g-_,t[6]=u*p,t[10]=b*g+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jw,e,e1)}lookAt(e,t,r){const o=this.elements;return ii.subVectors(e,t),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Kr.crossVectors(r,ii),Kr.lengthSq()===0&&(Math.abs(r.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Kr.crossVectors(r,ii)),Kr.normalize(),wc.crossVectors(ii,Kr),o[0]=Kr.x,o[4]=wc.x,o[8]=ii.x,o[1]=Kr.y,o[5]=wc.y,o[9]=ii.y,o[2]=Kr.z,o[6]=wc.z,o[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,a=this.elements,c=r[0],u=r[4],f=r[8],h=r[12],p=r[1],g=r[5],v=r[9],_=r[13],M=r[2],b=r[6],y=r[10],S=r[14],A=r[3],P=r[7],D=r[11],I=r[15],L=o[0],k=o[4],E=o[8],F=o[12],z=o[1],U=o[5],q=o[9],re=o[13],ue=o[2],G=o[6],Z=o[10],W=o[14],Y=o[3],se=o[7],j=o[11],B=o[15];return a[0]=c*L+u*z+f*ue+h*Y,a[4]=c*k+u*U+f*G+h*se,a[8]=c*E+u*q+f*Z+h*j,a[12]=c*F+u*re+f*W+h*B,a[1]=p*L+g*z+v*ue+_*Y,a[5]=p*k+g*U+v*G+_*se,a[9]=p*E+g*q+v*Z+_*j,a[13]=p*F+g*re+v*W+_*B,a[2]=M*L+b*z+y*ue+S*Y,a[6]=M*k+b*U+y*G+S*se,a[10]=M*E+b*q+y*Z+S*j,a[14]=M*F+b*re+y*W+S*B,a[3]=A*L+P*z+D*ue+I*Y,a[7]=A*k+P*U+D*G+I*se,a[11]=A*E+P*q+D*Z+I*j,a[15]=A*F+P*re+D*W+I*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],a=e[12],c=e[1],u=e[5],f=e[9],h=e[13],p=e[2],g=e[6],v=e[10],_=e[14],M=e[3],b=e[7],y=e[11],S=e[15],A=f*_-h*v,P=u*_-h*g,D=u*v-f*g,I=c*_-h*p,L=c*v-f*p,k=c*g-u*p;return t*(b*A-y*P+S*D)-r*(M*A-y*I+S*L)+o*(M*P-b*I+S*k)-a*(M*D-b*L+y*k)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],c=e[4],u=e[5],f=e[6],h=e[7],p=e[8],g=e[9],v=e[10],_=e[11],M=e[12],b=e[13],y=e[14],S=e[15],A=t*u-r*c,P=t*f-o*c,D=t*h-a*c,I=r*f-o*u,L=r*h-a*u,k=o*h-a*f,E=p*b-g*M,F=p*y-v*M,z=p*S-_*M,U=g*y-v*b,q=g*S-_*b,re=v*S-_*y,ue=A*re-P*q+D*U+I*z-L*F+k*E;if(ue===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/ue;return e[0]=(u*re-f*q+h*U)*G,e[1]=(o*q-r*re-a*U)*G,e[2]=(b*k-y*L+S*I)*G,e[3]=(v*L-g*k-_*I)*G,e[4]=(f*z-c*re-h*F)*G,e[5]=(t*re-o*z+a*F)*G,e[6]=(y*D-M*k-S*P)*G,e[7]=(p*k-v*D+_*P)*G,e[8]=(c*q-u*z+h*E)*G,e[9]=(r*z-t*q-a*E)*G,e[10]=(M*L-b*D+S*A)*G,e[11]=(g*D-p*L-_*A)*G,e[12]=(u*F-c*U-f*E)*G,e[13]=(t*U-r*F+o*E)*G,e[14]=(b*P-M*I-y*A)*G,e[15]=(p*I-g*P+v*A)*G,this}scale(e){const t=this.elements,r=e.x,o=e.y,a=e.z;return t[0]*=r,t[4]*=o,t[8]*=a,t[1]*=r,t[5]*=o,t[9]*=a,t[2]*=r,t[6]*=o,t[10]*=a,t[3]*=r,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),a=1-r,c=e.x,u=e.y,f=e.z,h=a*c,p=a*u;return this.set(h*c+r,h*u-o*f,h*f+o*u,0,h*u+o*f,p*u+r,p*f-o*c,0,h*f-o*u,p*f+o*c,a*f*f+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,a,c){return this.set(1,r,a,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,a=t._x,c=t._y,u=t._z,f=t._w,h=a+a,p=c+c,g=u+u,v=a*h,_=a*p,M=a*g,b=c*p,y=c*g,S=u*g,A=f*h,P=f*p,D=f*g,I=r.x,L=r.y,k=r.z;return o[0]=(1-(b+S))*I,o[1]=(_+D)*I,o[2]=(M-P)*I,o[3]=0,o[4]=(_-D)*L,o[5]=(1-(v+S))*L,o[6]=(y+A)*L,o[7]=0,o[8]=(M+P)*k,o[9]=(y-A)*k,o[10]=(1-(v+b))*k,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const a=this.determinant();if(a===0)return r.set(1,1,1),t.identity(),this;let c=Eo.set(o[0],o[1],o[2]).length();const u=Eo.set(o[4],o[5],o[6]).length(),f=Eo.set(o[8],o[9],o[10]).length();a<0&&(c=-c),Ci.copy(this);const h=1/c,p=1/u,g=1/f;return Ci.elements[0]*=h,Ci.elements[1]*=h,Ci.elements[2]*=h,Ci.elements[4]*=p,Ci.elements[5]*=p,Ci.elements[6]*=p,Ci.elements[8]*=g,Ci.elements[9]*=g,Ci.elements[10]*=g,t.setFromRotationMatrix(Ci),r.x=c,r.y=u,r.z=f,this}makePerspective(e,t,r,o,a,c,u=qi,f=!1){const h=this.elements,p=2*a/(t-e),g=2*a/(r-o),v=(t+e)/(t-e),_=(r+o)/(r-o);let M,b;if(f)M=a/(c-a),b=c*a/(c-a);else if(u===qi)M=-(c+a)/(c-a),b=-2*c*a/(c-a);else if(u===hu)M=-c/(c-a),b=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return h[0]=p,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=g,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=b,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,o,a,c,u=qi,f=!1){const h=this.elements,p=2/(t-e),g=2/(r-o),v=-(t+e)/(t-e),_=-(r+o)/(r-o);let M,b;if(f)M=1/(c-a),b=c/(c-a);else if(u===qi)M=-2/(c-a),b=-(c+a)/(c-a);else if(u===hu)M=-1/(c-a),b=-a/(c-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return h[0]=p,h[4]=0,h[8]=0,h[12]=v,h[1]=0,h[5]=g,h[9]=0,h[13]=_,h[2]=0,h[6]=0,h[10]=M,h[14]=b,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};Tu.prototype.isMatrix4=!0;let gn=Tu;const Eo=new ae,Ci=new gn,Jw=new ae(0,0,0),e1=new ae(1,1,1),Kr=new ae,wc=new ae,ii=new ae,uv=new gn,dv=new Zo;class js{constructor(e=0,t=0,r=0,o=js.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,a=o[0],c=o[4],u=o[8],f=o[1],h=o[5],p=o[9],g=o[2],v=o[6],_=o[10];switch(t){case"XYZ":this._y=Math.asin(wt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,_),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,_),this._z=Math.atan2(f,h)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(wt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,_),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-wt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,_),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(wt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(u,_));break;case"XZY":this._z=Math.asin(-wt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-p,_),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return uv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(uv,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dv.setFromEuler(this),this.setFromQuaternion(dv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}js.DEFAULT_ORDER="XYZ";class K_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let t1=0;const fv=new ae,wo=new Zo,hr=new gn,bc=new ae,za=new ae,n1=new ae,i1=new Zo,hv=new ae(1,0,0),pv=new ae(0,1,0),mv=new ae(0,0,1),gv={type:"added"},r1={type:"removed"},bo={type:"childadded",child:null},Lf={type:"childremoved",child:null};class si extends Xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:t1++}),this.uuid=dl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=si.DEFAULT_UP.clone();const e=new ae,t=new js,r=new Zo,o=new ae(1,1,1);function a(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(a),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new gn},normalMatrix:{value:new ht}}),this.matrix=new gn,this.matrixWorld=new gn,this.matrixAutoUpdate=si.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=si.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new K_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wo.setFromAxisAngle(e,t),this.quaternion.multiply(wo),this}rotateOnWorldAxis(e,t){return wo.setFromAxisAngle(e,t),this.quaternion.premultiply(wo),this}rotateX(e){return this.rotateOnAxis(hv,e)}rotateY(e){return this.rotateOnAxis(pv,e)}rotateZ(e){return this.rotateOnAxis(mv,e)}translateOnAxis(e,t){return fv.copy(e).applyQuaternion(this.quaternion),this.position.add(fv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hv,e)}translateY(e){return this.translateOnAxis(pv,e)}translateZ(e){return this.translateOnAxis(mv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?bc.copy(e):bc.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),za.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hr.lookAt(za,bc,this.up):hr.lookAt(bc,za,this.up),this.quaternion.setFromRotationMatrix(hr),o&&(hr.extractRotation(o.matrixWorld),wo.setFromRotationMatrix(hr),this.quaternion.premultiply(wo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(At("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gv),bo.child=e,this.dispatchEvent(bo),bo.child=null):At("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(r1),Lf.child=e,this.dispatchEvent(Lf),Lf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hr.multiply(e.parent.matrixWorld)),e.applyMatrix4(hr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gv),bo.child=e,this.dispatchEvent(bo),bo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(za,e,n1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(za,i1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*r-a[8]*o,a[13]+=r-a[1]*t-a[5]*r-a[9]*o,a[14]+=o-a[2]*t-a[6]*r-a[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(u=>({...u})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function a(u,f){return u[f.uuid]===void 0&&(u[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const f=u.shapes;if(Array.isArray(f))for(let h=0,p=f.length;h<p;h++){const g=f[h];a(e.shapes,g)}else a(e.shapes,f)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let f=0,h=this.material.length;f<h;f++)u.push(a(e.materials,this.material[f]));o.material=u}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let u=0;u<this.children.length;u++)o.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let u=0;u<this.animations.length;u++){const f=this.animations[u];o.animations.push(a(e.animations,f))}}if(t){const u=c(e.geometries),f=c(e.materials),h=c(e.textures),p=c(e.images),g=c(e.shapes),v=c(e.skeletons),_=c(e.animations),M=c(e.nodes);u.length>0&&(r.geometries=u),f.length>0&&(r.materials=f),h.length>0&&(r.textures=h),p.length>0&&(r.images=p),g.length>0&&(r.shapes=g),v.length>0&&(r.skeletons=v),_.length>0&&(r.animations=_),M.length>0&&(r.nodes=M)}return r.object=o,r;function c(u){const f=[];for(const h in u){const p=u[h];delete p.metadata,f.push(p)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}si.DEFAULT_UP=new ae(0,1,0);si.DEFAULT_MATRIX_AUTO_UPDATE=!0;si.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Tc extends si{constructor(){super(),this.isGroup=!0,this.type="Group"}}const s1={type:"move"};class Nf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ae,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ae),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ae,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ae,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,a=null,c=null;const u=this._targetRay,f=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const b of e.hand.values()){const y=t.getJointPose(b,r),S=this._getHandJoint(h,b);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const p=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],v=p.position.distanceTo(g.position),_=.02,M=.005;h.inputState.pinching&&v>_+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=_-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,r),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,f.eventsEnabled&&f.dispatchEvent({type:"gripUpdated",data:e,target:this})));u!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&a!==null&&(o=a),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(s1)))}return u!==null&&(u.visible=o!==null),f!==null&&(f.visible=a!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Tc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Z_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zr={h:0,s:0,l:0},Ac={h:0,s:0,l:0};function If(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ot{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Et.workingColorSpace){return this.r=e,this.g=t,this.b=r,Et.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Et.workingColorSpace){if(e=Xw(e,1),t=wt(t,0,1),r=wt(r,0,1),t===0)this.r=this.g=this.b=r;else{const a=r<=.5?r*(1+t):r+t-r*t,c=2*r-a;this.r=If(c,a,e+1/3),this.g=If(c,a,e),this.b=If(c,a,e-1/3)}return Et.colorSpaceToWorking(this,o),this}setStyle(e,t=xi){function r(a){a!==void 0&&parseFloat(a)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=o[1],u=o[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:at("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xi){const r=Z_[e.toLowerCase()];return r!==void 0?this.setHex(r,t):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mr(e.r),this.g=Mr(e.g),this.b=Mr(e.b),this}copyLinearToSRGB(e){return this.r=Go(e.r),this.g=Go(e.g),this.b=Go(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xi){return Et.workingToColorSpace(Un.copy(this),e),Math.round(wt(Un.r*255,0,255))*65536+Math.round(wt(Un.g*255,0,255))*256+Math.round(wt(Un.b*255,0,255))}getHexString(e=xi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.workingToColorSpace(Un.copy(this),t);const r=Un.r,o=Un.g,a=Un.b,c=Math.max(r,o,a),u=Math.min(r,o,a);let f,h;const p=(u+c)/2;if(u===c)f=0,h=0;else{const g=c-u;switch(h=p<=.5?g/(c+u):g/(2-c-u),c){case r:f=(o-a)/g+(o<a?6:0);break;case o:f=(a-r)/g+2;break;case a:f=(r-o)/g+4;break}f/=6}return e.h=f,e.s=h,e.l=p,e}getRGB(e,t=Et.workingColorSpace){return Et.workingToColorSpace(Un.copy(this),t),e.r=Un.r,e.g=Un.g,e.b=Un.b,e}getStyle(e=xi){Et.workingToColorSpace(Un.copy(this),e);const t=Un.r,r=Un.g,o=Un.b;return e!==xi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Zr),this.setHSL(Zr.h+e,Zr.s+t,Zr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Zr),e.getHSL(Ac);const r=Af(Zr.h,Ac.h,t),o=Af(Zr.s,Ac.s,t),a=Af(Zr.l,Ac.l,t);return this.setHSL(r,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*r+a[6]*o,this.g=a[1]*t+a[4]*r+a[7]*o,this.b=a[2]*t+a[5]*r+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new Ot;Ot.NAMES=Z_;class Q_ extends si{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new js,this.environmentIntensity=1,this.environmentRotation=new js,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ri=new ae,pr=new ae,Uf=new ae,mr=new ae,To=new ae,Ao=new ae,vv=new ae,Ff=new ae,kf=new ae,Of=new ae,Bf=new ln,zf=new ln,Vf=new ln;class Ni{constructor(e=new ae,t=new ae,r=new ae){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Ri.subVectors(e,t),o.cross(Ri);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,r,o,a){Ri.subVectors(o,t),pr.subVectors(r,t),Uf.subVectors(e,t);const c=Ri.dot(Ri),u=Ri.dot(pr),f=Ri.dot(Uf),h=pr.dot(pr),p=pr.dot(Uf),g=c*h-u*u;if(g===0)return a.set(0,0,0),null;const v=1/g,_=(h*f-u*p)*v,M=(c*p-u*f)*v;return a.set(1-_-M,M,_)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,mr)===null?!1:mr.x>=0&&mr.y>=0&&mr.x+mr.y<=1}static getInterpolation(e,t,r,o,a,c,u,f){return this.getBarycoord(e,t,r,o,mr)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(a,mr.x),f.addScaledVector(c,mr.y),f.addScaledVector(u,mr.z),f)}static getInterpolatedAttribute(e,t,r,o,a,c){return Bf.setScalar(0),zf.setScalar(0),Vf.setScalar(0),Bf.fromBufferAttribute(e,t),zf.fromBufferAttribute(e,r),Vf.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Bf,a.x),c.addScaledVector(zf,a.y),c.addScaledVector(Vf,a.z),c}static isFrontFacing(e,t,r,o){return Ri.subVectors(r,t),pr.subVectors(e,t),Ri.cross(pr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ri.subVectors(this.c,this.b),pr.subVectors(this.a,this.b),Ri.cross(pr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ni.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,a){return Ni.getInterpolation(e,this.a,this.b,this.c,t,r,o,a)}containsPoint(e){return Ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,a=this.c;let c,u;To.subVectors(o,r),Ao.subVectors(a,r),Ff.subVectors(e,r);const f=To.dot(Ff),h=Ao.dot(Ff);if(f<=0&&h<=0)return t.copy(r);kf.subVectors(e,o);const p=To.dot(kf),g=Ao.dot(kf);if(p>=0&&g<=p)return t.copy(o);const v=f*g-p*h;if(v<=0&&f>=0&&p<=0)return c=f/(f-p),t.copy(r).addScaledVector(To,c);Of.subVectors(e,a);const _=To.dot(Of),M=Ao.dot(Of);if(M>=0&&_<=M)return t.copy(a);const b=_*h-f*M;if(b<=0&&h>=0&&M<=0)return u=h/(h-M),t.copy(r).addScaledVector(Ao,u);const y=p*M-_*g;if(y<=0&&g-p>=0&&_-M>=0)return vv.subVectors(a,o),u=(g-p)/(g-p+(_-M)),t.copy(o).addScaledVector(vv,u);const S=1/(y+b+v);return c=b*S,u=v*S,t.copy(r).addScaledVector(To,c).addScaledVector(Ao,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class fl{constructor(e=new ae(1/0,1/0,1/0),t=new ae(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Pi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Pi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const a=r.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=a.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,Pi):Pi.fromBufferAttribute(a,c),Pi.applyMatrix4(e.matrixWorld),this.expandByPoint(Pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Cc.copy(r.boundingBox)),Cc.applyMatrix4(e.matrixWorld),this.union(Cc)}const o=e.children;for(let a=0,c=o.length;a<c;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pi),Pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Va),Rc.subVectors(this.max,Va),Co.subVectors(e.a,Va),Ro.subVectors(e.b,Va),Po.subVectors(e.c,Va),Qr.subVectors(Ro,Co),Jr.subVectors(Po,Ro),Ts.subVectors(Co,Po);let t=[0,-Qr.z,Qr.y,0,-Jr.z,Jr.y,0,-Ts.z,Ts.y,Qr.z,0,-Qr.x,Jr.z,0,-Jr.x,Ts.z,0,-Ts.x,-Qr.y,Qr.x,0,-Jr.y,Jr.x,0,-Ts.y,Ts.x,0];return!Gf(t,Co,Ro,Po,Rc)||(t=[1,0,0,0,1,0,0,0,1],!Gf(t,Co,Ro,Po,Rc))?!1:(Pc.crossVectors(Qr,Jr),t=[Pc.x,Pc.y,Pc.z],Gf(t,Co,Ro,Po,Rc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const gr=[new ae,new ae,new ae,new ae,new ae,new ae,new ae,new ae],Pi=new ae,Cc=new fl,Co=new ae,Ro=new ae,Po=new ae,Qr=new ae,Jr=new ae,Ts=new ae,Va=new ae,Rc=new ae,Pc=new ae,As=new ae;function Gf(n,e,t,r,o){for(let a=0,c=n.length-3;a<=c;a+=3){As.fromArray(n,a);const u=o.x*Math.abs(As.x)+o.y*Math.abs(As.y)+o.z*Math.abs(As.z),f=e.dot(As),h=t.dot(As),p=r.dot(As);if(Math.max(-Math.max(f,h,p),Math.min(f,h,p))>u)return!1}return!0}const fn=new ae,Dc=new Dt;let o1=0;class Zi extends Xs{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:o1++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=iv,this.updateRanges=[],this.gpuType=$i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Dc.fromBufferAttribute(this,t),Dc.applyMatrix3(e),this.setXY(t,Dc.x,Dc.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix3(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix4(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)fn.fromBufferAttribute(this,t),fn.applyNormalMatrix(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)fn.fromBufferAttribute(this,t),fn.transformDirection(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Ba(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Zn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ba(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ba(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ba(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ba(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Zn(t,this.array),r=Zn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Zn(t,this.array),r=Zn(r,this.array),o=Zn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,a){return e*=this.itemSize,this.normalized&&(t=Zn(t,this.array),r=Zn(r,this.array),o=Zn(o,this.array),a=Zn(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==iv&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class J_ extends Zi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class ey extends Zi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Er extends Zi{constructor(e,t,r){super(new Float32Array(e),t,r)}}const a1=new fl,Ga=new ae,Hf=new ae;class Fp{constructor(e=new ae,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):a1.setFromPoints(e).getCenter(r);let o=0;for(let a=0,c=e.length;a<c;a++)o=Math.max(o,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ga.subVectors(e,this.center);const t=Ga.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Ga,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ga.copy(e.center).add(Hf)),this.expandByPoint(Ga.copy(e.center).sub(Hf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let l1=0;const mi=new gn,Wf=new si,Do=new ae,ri=new fl,Ha=new fl,Mn=new ae;class Pr extends Xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:l1++}),this.uuid=dl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gw(e)?ey:J_)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const a=new ht().getNormalMatrix(e);r.applyNormalMatrix(a),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mi.makeRotationFromQuaternion(e),this.applyMatrix4(mi),this}rotateX(e){return mi.makeRotationX(e),this.applyMatrix4(mi),this}rotateY(e){return mi.makeRotationY(e),this.applyMatrix4(mi),this}rotateZ(e){return mi.makeRotationZ(e),this.applyMatrix4(mi),this}translate(e,t,r){return mi.makeTranslation(e,t,r),this.applyMatrix4(mi),this}scale(e,t,r){return mi.makeScale(e,t,r),this.applyMatrix4(mi),this}lookAt(e){return Wf.lookAt(e),Wf.updateMatrix(),this.applyMatrix4(Wf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Do).negate(),this.translate(Do.x,Do.y,Do.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,a=e.length;o<a;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Er(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const a=e[o];t.setXYZ(o,a.x,a.y,a.z||0)}e.length>t.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){At("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ae(-1/0,-1/0,-1/0),new ae(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ri.setFromBufferAttribute(a),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&At('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fp);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){At("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ae,1/0);return}if(e){const r=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const u=t[a];Ha.setFromBufferAttribute(u),this.morphTargetsRelative?(Mn.addVectors(ri.min,Ha.min),ri.expandByPoint(Mn),Mn.addVectors(ri.max,Ha.max),ri.expandByPoint(Mn)):(ri.expandByPoint(Ha.min),ri.expandByPoint(Ha.max))}ri.getCenter(r);let o=0;for(let a=0,c=e.count;a<c;a++)Mn.fromBufferAttribute(e,a),o=Math.max(o,r.distanceToSquared(Mn));if(t)for(let a=0,c=t.length;a<c;a++){const u=t[a],f=this.morphTargetsRelative;for(let h=0,p=u.count;h<p;h++)Mn.fromBufferAttribute(u,h),f&&(Do.fromBufferAttribute(e,h),Mn.add(Do)),o=Math.max(o,r.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&At('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){At("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zi(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),u=[],f=[];for(let E=0;E<r.count;E++)u[E]=new ae,f[E]=new ae;const h=new ae,p=new ae,g=new ae,v=new Dt,_=new Dt,M=new Dt,b=new ae,y=new ae;function S(E,F,z){h.fromBufferAttribute(r,E),p.fromBufferAttribute(r,F),g.fromBufferAttribute(r,z),v.fromBufferAttribute(a,E),_.fromBufferAttribute(a,F),M.fromBufferAttribute(a,z),p.sub(h),g.sub(h),_.sub(v),M.sub(v);const U=1/(_.x*M.y-M.x*_.y);isFinite(U)&&(b.copy(p).multiplyScalar(M.y).addScaledVector(g,-_.y).multiplyScalar(U),y.copy(g).multiplyScalar(_.x).addScaledVector(p,-M.x).multiplyScalar(U),u[E].add(b),u[F].add(b),u[z].add(b),f[E].add(y),f[F].add(y),f[z].add(y))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let E=0,F=A.length;E<F;++E){const z=A[E],U=z.start,q=z.count;for(let re=U,ue=U+q;re<ue;re+=3)S(e.getX(re+0),e.getX(re+1),e.getX(re+2))}const P=new ae,D=new ae,I=new ae,L=new ae;function k(E){I.fromBufferAttribute(o,E),L.copy(I);const F=u[E];P.copy(F),P.sub(I.multiplyScalar(I.dot(F))).normalize(),D.crossVectors(L,F);const U=D.dot(f[E])<0?-1:1;c.setXYZW(E,P.x,P.y,P.z,U)}for(let E=0,F=A.length;E<F;++E){const z=A[E],U=z.start,q=z.count;for(let re=U,ue=U+q;re<ue;re+=3)k(e.getX(re+0)),k(e.getX(re+1)),k(e.getX(re+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Zi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let v=0,_=r.count;v<_;v++)r.setXYZ(v,0,0,0);const o=new ae,a=new ae,c=new ae,u=new ae,f=new ae,h=new ae,p=new ae,g=new ae;if(e)for(let v=0,_=e.count;v<_;v+=3){const M=e.getX(v+0),b=e.getX(v+1),y=e.getX(v+2);o.fromBufferAttribute(t,M),a.fromBufferAttribute(t,b),c.fromBufferAttribute(t,y),p.subVectors(c,a),g.subVectors(o,a),p.cross(g),u.fromBufferAttribute(r,M),f.fromBufferAttribute(r,b),h.fromBufferAttribute(r,y),u.add(p),f.add(p),h.add(p),r.setXYZ(M,u.x,u.y,u.z),r.setXYZ(b,f.x,f.y,f.z),r.setXYZ(y,h.x,h.y,h.z)}else for(let v=0,_=t.count;v<_;v+=3)o.fromBufferAttribute(t,v+0),a.fromBufferAttribute(t,v+1),c.fromBufferAttribute(t,v+2),p.subVectors(c,a),g.subVectors(o,a),p.cross(g),r.setXYZ(v+0,p.x,p.y,p.z),r.setXYZ(v+1,p.x,p.y,p.z),r.setXYZ(v+2,p.x,p.y,p.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Mn.fromBufferAttribute(e,t),Mn.normalize(),e.setXYZ(t,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(u,f){const h=u.array,p=u.itemSize,g=u.normalized,v=new h.constructor(f.length*p);let _=0,M=0;for(let b=0,y=f.length;b<y;b++){u.isInterleavedBufferAttribute?_=f[b]*u.data.stride+u.offset:_=f[b]*p;for(let S=0;S<p;S++)v[M++]=h[_++]}return new Zi(v,p,g)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pr,r=this.index.array,o=this.attributes;for(const u in o){const f=o[u],h=e(f,r);t.setAttribute(u,h)}const a=this.morphAttributes;for(const u in a){const f=[],h=a[u];for(let p=0,g=h.length;p<g;p++){const v=h[p],_=e(v,r);f.push(_)}t.morphAttributes[u]=f}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,f=c.length;u<f;u++){const h=c[u];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const h in f)f[h]!==void 0&&(e[h]=f[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const f in r){const h=r[f];e.data.attributes[f]=h.toJSON(e.data)}const o={};let a=!1;for(const f in this.morphAttributes){const h=this.morphAttributes[f],p=[];for(let g=0,v=h.length;g<v;g++){const _=h[g];p.push(_.toJSON(e.data))}p.length>0&&(o[f]=p,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere=u.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const p=o[h];this.setAttribute(h,p.clone(t))}const a=e.morphAttributes;for(const h in a){const p=[],g=a[h];for(let v=0,_=g.length;v<_;v++)p.push(g[v].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,p=c.length;h<p;h++){const g=c[h];this.addGroup(g.start,g.count,g.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let c1=0;class Cu extends Xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:c1++}),this.uuid=dl(),this.name="",this.type="Material",this.blending=Vo,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vh,this.blendDst=xh,this.blendEquation=Us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=Ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=So,this.stencilZFail=So,this.stencilZPass=So,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){at(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){at(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Vo&&(r.blending=this.blending),this.side!==as&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==vh&&(r.blendSrc=this.blendSrc),this.blendDst!==xh&&(r.blendDst=this.blendDst),this.blendEquation!==Us&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ho&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==So&&(r.stencilFail=this.stencilFail),this.stencilZFail!==So&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==So&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(a){const c=[];for(const u in a){const f=a[u];delete f.metadata,c.push(f)}return c}if(t){const a=o(e.textures),c=o(e.images);a.length>0&&(r.textures=a),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let a=0;a!==o;++a)r[a]=t[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const vr=new ae,jf=new ae,Lc=new ae,es=new ae,Xf=new ae,Nc=new ae,$f=new ae;class u1{constructor(e=new ae,t=new ae(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vr.copy(this.origin).addScaledVector(this.direction,t),vr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){jf.copy(e).add(t).multiplyScalar(.5),Lc.copy(t).sub(e).normalize(),es.copy(this.origin).sub(jf);const a=e.distanceTo(t)*.5,c=-this.direction.dot(Lc),u=es.dot(this.direction),f=-es.dot(Lc),h=es.lengthSq(),p=Math.abs(1-c*c);let g,v,_,M;if(p>0)if(g=c*f-u,v=c*u-f,M=a*p,g>=0)if(v>=-M)if(v<=M){const b=1/p;g*=b,v*=b,_=g*(g+c*v+2*u)+v*(c*g+v+2*f)+h}else v=a,g=Math.max(0,-(c*v+u)),_=-g*g+v*(v+2*f)+h;else v=-a,g=Math.max(0,-(c*v+u)),_=-g*g+v*(v+2*f)+h;else v<=-M?(g=Math.max(0,-(-c*a+u)),v=g>0?-a:Math.min(Math.max(-a,-f),a),_=-g*g+v*(v+2*f)+h):v<=M?(g=0,v=Math.min(Math.max(-a,-f),a),_=v*(v+2*f)+h):(g=Math.max(0,-(c*a+u)),v=g>0?a:Math.min(Math.max(-a,-f),a),_=-g*g+v*(v+2*f)+h);else v=c>0?-a:a,g=Math.max(0,-(c*v+u)),_=-g*g+v*(v+2*f)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(jf).addScaledVector(Lc,v),_}intersectSphere(e,t){vr.subVectors(e.center,this.origin);const r=vr.dot(this.direction),o=vr.dot(vr)-r*r,a=e.radius*e.radius;if(o>a)return null;const c=Math.sqrt(a-o),u=r-c,f=r+c;return f<0?null:u<0?this.at(f,t):this.at(u,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,a,c,u,f;const h=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,v=this.origin;return h>=0?(r=(e.min.x-v.x)*h,o=(e.max.x-v.x)*h):(r=(e.max.x-v.x)*h,o=(e.min.x-v.x)*h),p>=0?(a=(e.min.y-v.y)*p,c=(e.max.y-v.y)*p):(a=(e.max.y-v.y)*p,c=(e.min.y-v.y)*p),r>c||a>o||((a>r||isNaN(r))&&(r=a),(c<o||isNaN(o))&&(o=c),g>=0?(u=(e.min.z-v.z)*g,f=(e.max.z-v.z)*g):(u=(e.max.z-v.z)*g,f=(e.min.z-v.z)*g),r>f||u>o)||((u>r||r!==r)&&(r=u),(f<o||o!==o)&&(o=f),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,vr)!==null}intersectTriangle(e,t,r,o,a){Xf.subVectors(t,e),Nc.subVectors(r,e),$f.crossVectors(Xf,Nc);let c=this.direction.dot($f),u;if(c>0){if(o)return null;u=1}else if(c<0)u=-1,c=-c;else return null;es.subVectors(this.origin,e);const f=u*this.direction.dot(Nc.crossVectors(es,Nc));if(f<0)return null;const h=u*this.direction.dot(Xf.cross(es));if(h<0||f+h>c)return null;const p=-u*es.dot($f);return p<0?null:this.at(p/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ty extends Cu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new js,this.combine=L_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xv=new gn,Cs=new u1,Ic=new Fp,_v=new ae,Uc=new ae,Fc=new ae,kc=new ae,qf=new ae,Oc=new ae,yv=new ae,Bc=new ae;class Ui extends si{constructor(e=new Pr,t=new ty){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const u=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,a=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const u=this.morphTargetInfluences;if(a&&u){Oc.set(0,0,0);for(let f=0,h=a.length;f<h;f++){const p=u[f],g=a[f];p!==0&&(qf.fromBufferAttribute(g,e),c?Oc.addScaledVector(qf,p):Oc.addScaledVector(qf.sub(t),p))}t.add(Oc)}return t}raycast(e,t){const r=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ic.copy(r.boundingSphere),Ic.applyMatrix4(a),Cs.copy(e.ray).recast(e.near),!(Ic.containsPoint(Cs.origin)===!1&&(Cs.intersectSphere(Ic,_v)===null||Cs.origin.distanceToSquared(_v)>(e.far-e.near)**2))&&(xv.copy(a).invert(),Cs.copy(e.ray).applyMatrix4(xv),!(r.boundingBox!==null&&Cs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Cs)))}_computeIntersections(e,t,r){let o;const a=this.geometry,c=this.material,u=a.index,f=a.attributes.position,h=a.attributes.uv,p=a.attributes.uv1,g=a.attributes.normal,v=a.groups,_=a.drawRange;if(u!==null)if(Array.isArray(c))for(let M=0,b=v.length;M<b;M++){const y=v[M],S=c[y.materialIndex],A=Math.max(y.start,_.start),P=Math.min(u.count,Math.min(y.start+y.count,_.start+_.count));for(let D=A,I=P;D<I;D+=3){const L=u.getX(D),k=u.getX(D+1),E=u.getX(D+2);o=zc(this,S,e,r,h,p,g,L,k,E),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const M=Math.max(0,_.start),b=Math.min(u.count,_.start+_.count);for(let y=M,S=b;y<S;y+=3){const A=u.getX(y),P=u.getX(y+1),D=u.getX(y+2);o=zc(this,c,e,r,h,p,g,A,P,D),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(f!==void 0)if(Array.isArray(c))for(let M=0,b=v.length;M<b;M++){const y=v[M],S=c[y.materialIndex],A=Math.max(y.start,_.start),P=Math.min(f.count,Math.min(y.start+y.count,_.start+_.count));for(let D=A,I=P;D<I;D+=3){const L=D,k=D+1,E=D+2;o=zc(this,S,e,r,h,p,g,L,k,E),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const M=Math.max(0,_.start),b=Math.min(f.count,_.start+_.count);for(let y=M,S=b;y<S;y+=3){const A=y,P=y+1,D=y+2;o=zc(this,c,e,r,h,p,g,A,P,D),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function d1(n,e,t,r,o,a,c,u){let f;if(e.side===Qn?f=r.intersectTriangle(c,a,o,!0,u):f=r.intersectTriangle(o,a,c,e.side===as,u),f===null)return null;Bc.copy(u),Bc.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(Bc);return h<t.near||h>t.far?null:{distance:h,point:Bc.clone(),object:n}}function zc(n,e,t,r,o,a,c,u,f,h){n.getVertexPosition(u,Uc),n.getVertexPosition(f,Fc),n.getVertexPosition(h,kc);const p=d1(n,e,t,r,Uc,Fc,kc,yv);if(p){const g=new ae;Ni.getBarycoord(yv,Uc,Fc,kc,g),o&&(p.uv=Ni.getInterpolatedAttribute(o,u,f,h,g,new Dt)),a&&(p.uv1=Ni.getInterpolatedAttribute(a,u,f,h,g,new Dt)),c&&(p.normal=Ni.getInterpolatedAttribute(c,u,f,h,g,new ae),p.normal.dot(r.direction)>0&&p.normal.multiplyScalar(-1));const v={a:u,b:f,c:h,normal:new ae,materialIndex:0};Ni.getNormal(Uc,Fc,kc,v.normal),p.face=v,p.barycoord=g}return p}class f1 extends Gn{constructor(e=null,t=1,r=1,o,a,c,u,f,h=Rn,p=Rn,g,v){super(null,c,u,f,h,p,o,a,g,v),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yf=new ae,h1=new ae,p1=new ht;class Ls{constructor(e=new ae(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Yf.subVectors(r,t).cross(h1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(Yf),a=this.normal.dot(o);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/a;return r===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(o,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||p1.getNormalMatrix(e),o=this.coplanarPoint(Yf).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rs=new Fp,m1=new Dt(.5,.5),Vc=new ae;class ny{constructor(e=new Ls,t=new Ls,r=new Ls,o=new Ls,a=new Ls,c=new Ls){this.planes=[e,t,r,o,a,c]}set(e,t,r,o,a,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(r),u[3].copy(o),u[4].copy(a),u[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=qi,r=!1){const o=this.planes,a=e.elements,c=a[0],u=a[1],f=a[2],h=a[3],p=a[4],g=a[5],v=a[6],_=a[7],M=a[8],b=a[9],y=a[10],S=a[11],A=a[12],P=a[13],D=a[14],I=a[15];if(o[0].setComponents(h-c,_-p,S-M,I-A).normalize(),o[1].setComponents(h+c,_+p,S+M,I+A).normalize(),o[2].setComponents(h+u,_+g,S+b,I+P).normalize(),o[3].setComponents(h-u,_-g,S-b,I-P).normalize(),r)o[4].setComponents(f,v,y,D).normalize(),o[5].setComponents(h-f,_-v,S-y,I-D).normalize();else if(o[4].setComponents(h-f,_-v,S-y,I-D).normalize(),t===qi)o[5].setComponents(h+f,_+v,S+y,I+D).normalize();else if(t===hu)o[5].setComponents(f,v,y,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(e){Rs.center.set(0,0,0);const t=m1.distanceTo(e.center);return Rs.radius=.7071067811865476+t,Rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Vc.x=o.normal.x>0?e.max.x:e.min.x,Vc.y=o.normal.y>0?e.max.y:e.min.y,Vc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Vc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class iy extends Gn{constructor(e=[],t=Hs,r,o,a,c,u,f,h,p){super(e,t,r,o,a,c,u,f,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jo extends Gn{constructor(e,t,r=er,o,a,c,u=Rn,f=Rn,h,p=Ar,g=1){if(p!==Ar&&p!==Os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:t,depth:g};super(v,o,a,c,u,f,p,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Up(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class g1 extends jo{constructor(e,t=er,r=Hs,o,a,c=Rn,u=Rn,f,h=Ar){const p={width:e,height:e,depth:1},g=[p,p,p,p,p,p];super(e,e,t,r,o,a,c,u,f,h),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ry extends Gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class hl extends Pr{constructor(e=1,t=1,r=1,o=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:a,depthSegments:c};const u=this;o=Math.floor(o),a=Math.floor(a),c=Math.floor(c);const f=[],h=[],p=[],g=[];let v=0,_=0;M("z","y","x",-1,-1,r,t,e,c,a,0),M("z","y","x",1,-1,r,t,-e,c,a,1),M("x","z","y",1,1,e,r,t,o,c,2),M("x","z","y",1,-1,e,r,-t,o,c,3),M("x","y","z",1,-1,e,t,r,o,a,4),M("x","y","z",-1,-1,e,t,-r,o,a,5),this.setIndex(f),this.setAttribute("position",new Er(h,3)),this.setAttribute("normal",new Er(p,3)),this.setAttribute("uv",new Er(g,2));function M(b,y,S,A,P,D,I,L,k,E,F){const z=D/k,U=I/E,q=D/2,re=I/2,ue=L/2,G=k+1,Z=E+1;let W=0,Y=0;const se=new ae;for(let j=0;j<Z;j++){const B=j*U-re;for(let ee=0;ee<G;ee++){const Ue=ee*z-q;se[b]=Ue*A,se[y]=B*P,se[S]=ue,h.push(se.x,se.y,se.z),se[b]=0,se[y]=0,se[S]=L>0?1:-1,p.push(se.x,se.y,se.z),g.push(ee/k),g.push(1-j/E),W+=1}}for(let j=0;j<E;j++)for(let B=0;B<k;B++){const ee=v+B+G*j,Ue=v+B+G*(j+1),Be=v+(B+1)+G*(j+1),be=v+(B+1)+G*j;f.push(ee,Ue,be),f.push(Ue,Be,be),Y+=6}u.addGroup(_,Y,F),_+=Y,v+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Qo extends Pr{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const a=e/2,c=t/2,u=Math.floor(r),f=Math.floor(o),h=u+1,p=f+1,g=e/u,v=t/f,_=[],M=[],b=[],y=[];for(let S=0;S<p;S++){const A=S*v-c;for(let P=0;P<h;P++){const D=P*g-a;M.push(D,-A,0),b.push(0,0,1),y.push(P/u),y.push(1-S/f)}}for(let S=0;S<f;S++)for(let A=0;A<u;A++){const P=A+h*S,D=A+h*(S+1),I=A+1+h*(S+1),L=A+1+h*S;_.push(P,D,L),_.push(D,I,L)}this.setIndex(_),this.setAttribute("position",new Er(M,3)),this.setAttribute("normal",new Er(b,3)),this.setAttribute("uv",new Er(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qo(e.width,e.height,e.widthSegments,e.heightSegments)}}function Xo(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const o=n[t][r];if(Sv(o))o.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(Sv(o[0])){const a=[];for(let c=0,u=o.length;c<u;c++)a[c]=o[c].clone();e[t][r]=a}else e[t][r]=o.slice();else e[t][r]=o}}return e}function Vn(n){const e={};for(let t=0;t<n.length;t++){const r=Xo(n[t]);for(const o in r)e[o]=r[o]}return e}function Sv(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function v1(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function sy(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const x1={clone:Xo,merge:Vn};var _1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,y1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fi extends Cu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_1,this.fragmentShader=y1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xo(e.uniforms),this.uniformsGroups=v1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class oy extends Fi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class S1 extends Cu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Iw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class M1 extends Cu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Gc=new ae,Hc=new Zo,Wi=new ae;class ay extends si{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gn,this.projectionMatrix=new gn,this.projectionMatrixInverse=new gn,this.coordinateSystem=qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Gc,Hc,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gc,Hc,Wi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Gc,Hc,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gc,Hc,Wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ts=new ae,Mv=new Dt,Ev=new Dt;class Li extends ay{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=sp*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Tf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sp*2*Math.atan(Math.tan(Tf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ts.x,ts.y).multiplyScalar(-e/ts.z),ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ts.x,ts.y).multiplyScalar(-e/ts.z)}getViewSize(e,t){return this.getViewBounds(e,Mv,Ev),t.subVectors(Ev,Mv)}setViewOffset(e,t,r,o,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Tf*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,a=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,h=c.fullHeight;a+=c.offsetX*o/f,t-=c.offsetY*r/h,o*=c.width/f,r*=c.height/h}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Ru extends ay{constructor(e=-1,t=1,r=1,o=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=r-e,c=r+e,u=o+t,f=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,c=a+h*this.view.width,u-=p*this.view.offsetY,f=u-p*this.view.height}this.projectionMatrix.makeOrthographic(a,c,u,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Lo=-90,No=1;class E1 extends si{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Li(Lo,No,e,t);o.layers=this.layers,this.add(o);const a=new Li(Lo,No,e,t);a.layers=this.layers,this.add(a);const c=new Li(Lo,No,e,t);c.layers=this.layers,this.add(c);const u=new Li(Lo,No,e,t);u.layers=this.layers,this.add(u);const f=new Li(Lo,No,e,t);f.layers=this.layers,this.add(f);const h=new Li(Lo,No,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,a,c,u,f]=t;for(const h of t)this.remove(h);if(e===qi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===hu)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,u,f,h,p]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),r.texture.generateMipmaps=b,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(g,v,_),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class w1 extends Li{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const wm=class wm{constructor(e,t,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,o){const a=this.elements;return a[0]=e,a[2]=t,a[1]=r,a[3]=o,this}};wm.prototype.isMatrix2=!0;let wv=wm;function bv(n,e,t,r){const o=b1(r);switch(t){case j_:return n*e;case $_:return n*e/o.components*o.byteLength;case Pp:return n*e/o.components*o.byteLength;case Ws:return n*e*2/o.components*o.byteLength;case Dp:return n*e*2/o.components*o.byteLength;case X_:return n*e*3/o.components*o.byteLength;case Ii:return n*e*4/o.components*o.byteLength;case Lp:return n*e*4/o.components*o.byteLength;case eu:case tu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case nu:case iu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Rh:case Dh:return Math.max(n,16)*Math.max(e,8)/4;case Ch:case Ph:return Math.max(n,8)*Math.max(e,8)/2;case Lh:case Nh:case Uh:case Fh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ih:case cu:case kh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Oh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case zh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Vh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Hh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Wh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case jh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Xh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case $h:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case qh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Yh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Kh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Zh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Qh:case Jh:case ep:return Math.ceil(n/4)*Math.ceil(e/4)*16;case tp:case np:return Math.ceil(n/4)*Math.ceil(e/4)*8;case uu:case ip:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function b1(n){switch(n){case _i:case V_:return{byteLength:1,components:1};case rl:case G_:case Tr:return{byteLength:2,components:1};case Cp:case Rp:return{byteLength:2,components:4};case er:case Ap:case $i:return{byteLength:4,components:1};case H_:case W_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tp}}));typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ly(){let n=null,e=!1,t=null,r=null;function o(a,c){t(a,c),r=n.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(r=n.requestAnimationFrame(o),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function T1(n){const e=new WeakMap;function t(u,f){const h=u.array,p=u.usage,g=h.byteLength,v=n.createBuffer();n.bindBuffer(f,v),n.bufferData(f,h,p),u.onUploadCallback();let _;if(h instanceof Float32Array)_=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)_=n.HALF_FLOAT;else if(h instanceof Uint16Array)u.isFloat16BufferAttribute?_=n.HALF_FLOAT:_=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=n.SHORT;else if(h instanceof Uint32Array)_=n.UNSIGNED_INT;else if(h instanceof Int32Array)_=n.INT;else if(h instanceof Int8Array)_=n.BYTE;else if(h instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:g}}function r(u,f,h){const p=f.array,g=f.updateRanges;if(n.bindBuffer(h,u),g.length===0)n.bufferSubData(h,0,p);else{g.sort((_,M)=>_.start-M.start);let v=0;for(let _=1;_<g.length;_++){const M=g[v],b=g[_];b.start<=M.start+M.count+1?M.count=Math.max(M.count,b.start+b.count-M.start):(++v,g[v]=b)}g.length=v+1;for(let _=0,M=g.length;_<M;_++){const b=g[_];n.bufferSubData(h,b.start*p.BYTES_PER_ELEMENT,p,b.start,b.count)}f.clearUpdateRanges()}f.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=e.get(u);f&&(n.deleteBuffer(f.buffer),e.delete(u))}function c(u,f){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=e.get(u);(!p||p.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const h=e.get(u);if(h===void 0)e.set(u,t(u,f));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,u,f),h.version=u.version}}return{get:o,remove:a,update:c}}var A1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,C1=`#ifdef USE_ALPHAHASH
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
#endif`,R1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,P1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,D1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,L1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,N1=`#ifdef USE_AOMAP
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
#endif`,I1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,U1=`#ifdef USE_BATCHING
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
#endif`,F1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,k1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,O1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,B1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,z1=`#ifdef USE_IRIDESCENCE
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
#endif`,V1=`#ifdef USE_BUMPMAP
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
#endif`,G1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,H1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,W1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,j1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,X1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,$1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,q1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Y1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,K1=`#define PI 3.141592653589793
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
} // validated`,Z1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Q1=`vec3 transformedNormal = objectNormal;
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
#endif`,J1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ib="gl_FragColor = linearToOutputTexel( gl_FragColor );",rb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sb=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ob=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ab=`#ifdef USE_ENVMAP
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
#endif`,lb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cb=`#ifdef USE_ENVMAP
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
#endif`,ub=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,db=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pb=`#ifdef USE_GRADIENTMAP
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
}`,mb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xb=`uniform bool receiveShadow;
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
#endif
#include <lightprobes_pars_fragment>`,_b=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,yb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Eb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wb=`PhysicalMaterial material;
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
#endif`,bb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
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
}`,Tb=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ab=`#if defined( RE_IndirectDiffuse )
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
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Cb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rb=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Pb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Db=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ib=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ub=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kb=`#if defined( USE_POINTS_UV )
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
#endif`,Ob=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hb=`#ifdef USE_MORPHTARGETS
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
#endif`,Wb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$b=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kb=`#ifdef USE_NORMALMAP
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
#endif`,Zb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,eT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,iT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,oT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,aT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,uT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,fT=`float getShadowMask() {
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
}`,hT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pT=`#ifdef USE_SKINNING
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
#endif`,mT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gT=`#ifdef USE_SKINNING
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
#endif`,vT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_T=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ST=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,MT=`#ifdef USE_TRANSMISSION
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
#endif`,ET=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const AT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,CT=`uniform sampler2D t2D;
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
}`,RT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,DT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NT=`#include <common>
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
}`,IT=`#if DEPTH_PACKING == 3200
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
}`,UT=`#define DISTANCE
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
}`,FT=`#define DISTANCE
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,kT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,OT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BT=`uniform float scale;
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
}`,zT=`uniform vec3 diffuse;
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
}`,VT=`#include <common>
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
}`,GT=`uniform vec3 diffuse;
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
}`,HT=`#define LAMBERT
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
}`,WT=`#define LAMBERT
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
}`,jT=`#define MATCAP
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
}`,XT=`#define MATCAP
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
}`,$T=`#define NORMAL
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
}`,qT=`#define NORMAL
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
}`,YT=`#define PHONG
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
}`,KT=`#define PHONG
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
}`,ZT=`#define STANDARD
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
}`,QT=`#define STANDARD
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
}`,JT=`#define TOON
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
}`,eA=`#define TOON
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
}`,tA=`uniform float size;
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
}`,nA=`uniform vec3 diffuse;
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
}`,iA=`#include <common>
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
}`,rA=`uniform vec3 color;
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
}`,sA=`uniform float rotation;
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
}`,oA=`uniform vec3 diffuse;
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
}`,gt={alphahash_fragment:A1,alphahash_pars_fragment:C1,alphamap_fragment:R1,alphamap_pars_fragment:P1,alphatest_fragment:D1,alphatest_pars_fragment:L1,aomap_fragment:N1,aomap_pars_fragment:I1,batching_pars_vertex:U1,batching_vertex:F1,begin_vertex:k1,beginnormal_vertex:O1,bsdfs:B1,iridescence_fragment:z1,bumpmap_pars_fragment:V1,clipping_planes_fragment:G1,clipping_planes_pars_fragment:H1,clipping_planes_pars_vertex:W1,clipping_planes_vertex:j1,color_fragment:X1,color_pars_fragment:$1,color_pars_vertex:q1,color_vertex:Y1,common:K1,cube_uv_reflection_fragment:Z1,defaultnormal_vertex:Q1,displacementmap_pars_vertex:J1,displacementmap_vertex:eb,emissivemap_fragment:tb,emissivemap_pars_fragment:nb,colorspace_fragment:ib,colorspace_pars_fragment:rb,envmap_fragment:sb,envmap_common_pars_fragment:ob,envmap_pars_fragment:ab,envmap_pars_vertex:lb,envmap_physical_pars_fragment:_b,envmap_vertex:cb,fog_vertex:ub,fog_pars_vertex:db,fog_fragment:fb,fog_pars_fragment:hb,gradientmap_pars_fragment:pb,lightmap_pars_fragment:mb,lights_lambert_fragment:gb,lights_lambert_pars_fragment:vb,lights_pars_begin:xb,lights_toon_fragment:yb,lights_toon_pars_fragment:Sb,lights_phong_fragment:Mb,lights_phong_pars_fragment:Eb,lights_physical_fragment:wb,lights_physical_pars_fragment:bb,lights_fragment_begin:Tb,lights_fragment_maps:Ab,lights_fragment_end:Cb,lightprobes_pars_fragment:Rb,logdepthbuf_fragment:Pb,logdepthbuf_pars_fragment:Db,logdepthbuf_pars_vertex:Lb,logdepthbuf_vertex:Nb,map_fragment:Ib,map_pars_fragment:Ub,map_particle_fragment:Fb,map_particle_pars_fragment:kb,metalnessmap_fragment:Ob,metalnessmap_pars_fragment:Bb,morphinstance_vertex:zb,morphcolor_vertex:Vb,morphnormal_vertex:Gb,morphtarget_pars_vertex:Hb,morphtarget_vertex:Wb,normal_fragment_begin:jb,normal_fragment_maps:Xb,normal_pars_fragment:$b,normal_pars_vertex:qb,normal_vertex:Yb,normalmap_pars_fragment:Kb,clearcoat_normal_fragment_begin:Zb,clearcoat_normal_fragment_maps:Qb,clearcoat_pars_fragment:Jb,iridescence_pars_fragment:eT,opaque_fragment:tT,packing:nT,premultiplied_alpha_fragment:iT,project_vertex:rT,dithering_fragment:sT,dithering_pars_fragment:oT,roughnessmap_fragment:aT,roughnessmap_pars_fragment:lT,shadowmap_pars_fragment:cT,shadowmap_pars_vertex:uT,shadowmap_vertex:dT,shadowmask_pars_fragment:fT,skinbase_vertex:hT,skinning_pars_vertex:pT,skinning_vertex:mT,skinnormal_vertex:gT,specularmap_fragment:vT,specularmap_pars_fragment:xT,tonemapping_fragment:_T,tonemapping_pars_fragment:yT,transmission_fragment:ST,transmission_pars_fragment:MT,uv_pars_fragment:ET,uv_pars_vertex:wT,uv_vertex:bT,worldpos_vertex:TT,background_vert:AT,background_frag:CT,backgroundCube_vert:RT,backgroundCube_frag:PT,cube_vert:DT,cube_frag:LT,depth_vert:NT,depth_frag:IT,distance_vert:UT,distance_frag:FT,equirect_vert:kT,equirect_frag:OT,linedashed_vert:BT,linedashed_frag:zT,meshbasic_vert:VT,meshbasic_frag:GT,meshlambert_vert:HT,meshlambert_frag:WT,meshmatcap_vert:jT,meshmatcap_frag:XT,meshnormal_vert:$T,meshnormal_frag:qT,meshphong_vert:YT,meshphong_frag:KT,meshphysical_vert:ZT,meshphysical_frag:QT,meshtoon_vert:JT,meshtoon_frag:eA,points_vert:tA,points_frag:nA,shadow_vert:iA,shadow_frag:rA,sprite_vert:sA,sprite_frag:oA},Fe={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ae},probesMax:{value:new ae},probesResolution:{value:new ae}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Xi={basic:{uniforms:Vn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:Vn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Ot(0)},envMapIntensity:{value:1}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:Vn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:Vn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:Vn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new Ot(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:Vn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:Vn([Fe.points,Fe.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:Vn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:Vn([Fe.common,Fe.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:Vn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:Vn([Fe.sprite,Fe.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:Vn([Fe.common,Fe.displacementmap,{referencePosition:{value:new ae},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:Vn([Fe.lights,Fe.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};Xi.physical={uniforms:Vn([Xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const Wc={r:0,b:0,g:0},aA=new gn,cy=new ht;cy.set(-1,0,0,0,1,0,0,0,1);function lA(n,e,t,r,o,a){const c=new Ot(0);let u=o===!0?0:1,f,h,p=null,g=0,v=null;function _(A){let P=A.isScene===!0?A.background:null;if(P&&P.isTexture){const D=A.backgroundBlurriness>0;P=e.get(P,D)}return P}function M(A){let P=!1;const D=_(A);D===null?y(c,u):D&&D.isColor&&(y(D,1),P=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?t.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(n.autoClear||P)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function b(A,P){const D=_(P);D&&(D.isCubeTexture||D.mapping===Au)?(h===void 0&&(h=new Ui(new hl(1,1,1),new Fi({name:"BackgroundCubeMaterial",uniforms:Xo(Xi.backgroundCube.uniforms),vertexShader:Xi.backgroundCube.vertexShader,fragmentShader:Xi.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,L,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=D,h.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(aA.makeRotationFromEuler(P.backgroundRotation)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(cy),h.material.toneMapped=Et.getTransfer(D.colorSpace)!==Ft,(p!==D||g!==D.version||v!==n.toneMapping)&&(h.material.needsUpdate=!0,p=D,g=D.version,v=n.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):D&&D.isTexture&&(f===void 0&&(f=new Ui(new Qo(2,2),new Fi({name:"BackgroundMaterial",uniforms:Xo(Xi.background.uniforms),vertexShader:Xi.background.vertexShader,fragmentShader:Xi.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=D,f.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,f.material.toneMapped=Et.getTransfer(D.colorSpace)!==Ft,D.matrixAutoUpdate===!0&&D.updateMatrix(),f.material.uniforms.uvTransform.value.copy(D.matrix),(p!==D||g!==D.version||v!==n.toneMapping)&&(f.material.needsUpdate=!0,p=D,g=D.version,v=n.toneMapping),f.layers.enableAll(),A.unshift(f,f.geometry,f.material,0,0,null))}function y(A,P){A.getRGB(Wc,sy(n)),t.buffers.color.setClear(Wc.r,Wc.g,Wc.b,P,a)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return c},setClearColor:function(A,P=1){c.set(A),u=P,y(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(A){u=A,y(c,u)},render:M,addToRenderList:b,dispose:S}}function cA(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},o=v(null);let a=o,c=!1;function u(U,q,re,ue,G){let Z=!1;const W=g(U,ue,re,q);a!==W&&(a=W,h(a.object)),Z=_(U,ue,re,G),Z&&M(U,ue,re,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(Z||c)&&(c=!1,D(U,q,re,ue),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function f(){return n.createVertexArray()}function h(U){return n.bindVertexArray(U)}function p(U){return n.deleteVertexArray(U)}function g(U,q,re,ue){const G=ue.wireframe===!0;let Z=r[q.id];Z===void 0&&(Z={},r[q.id]=Z);const W=U.isInstancedMesh===!0?U.id:0;let Y=Z[W];Y===void 0&&(Y={},Z[W]=Y);let se=Y[re.id];se===void 0&&(se={},Y[re.id]=se);let j=se[G];return j===void 0&&(j=v(f()),se[G]=j),j}function v(U){const q=[],re=[],ue=[];for(let G=0;G<t;G++)q[G]=0,re[G]=0,ue[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:re,attributeDivisors:ue,object:U,attributes:{},index:null}}function _(U,q,re,ue){const G=a.attributes,Z=q.attributes;let W=0;const Y=re.getAttributes();for(const se in Y)if(Y[se].location>=0){const B=G[se];let ee=Z[se];if(ee===void 0&&(se==="instanceMatrix"&&U.instanceMatrix&&(ee=U.instanceMatrix),se==="instanceColor"&&U.instanceColor&&(ee=U.instanceColor)),B===void 0||B.attribute!==ee||ee&&B.data!==ee.data)return!0;W++}return a.attributesNum!==W||a.index!==ue}function M(U,q,re,ue){const G={},Z=q.attributes;let W=0;const Y=re.getAttributes();for(const se in Y)if(Y[se].location>=0){let B=Z[se];B===void 0&&(se==="instanceMatrix"&&U.instanceMatrix&&(B=U.instanceMatrix),se==="instanceColor"&&U.instanceColor&&(B=U.instanceColor));const ee={};ee.attribute=B,B&&B.data&&(ee.data=B.data),G[se]=ee,W++}a.attributes=G,a.attributesNum=W,a.index=ue}function b(){const U=a.newAttributes;for(let q=0,re=U.length;q<re;q++)U[q]=0}function y(U){S(U,0)}function S(U,q){const re=a.newAttributes,ue=a.enabledAttributes,G=a.attributeDivisors;re[U]=1,ue[U]===0&&(n.enableVertexAttribArray(U),ue[U]=1),G[U]!==q&&(n.vertexAttribDivisor(U,q),G[U]=q)}function A(){const U=a.newAttributes,q=a.enabledAttributes;for(let re=0,ue=q.length;re<ue;re++)q[re]!==U[re]&&(n.disableVertexAttribArray(re),q[re]=0)}function P(U,q,re,ue,G,Z,W){W===!0?n.vertexAttribIPointer(U,q,re,G,Z):n.vertexAttribPointer(U,q,re,ue,G,Z)}function D(U,q,re,ue){b();const G=ue.attributes,Z=re.getAttributes(),W=q.defaultAttributeValues;for(const Y in Z){const se=Z[Y];if(se.location>=0){let j=G[Y];if(j===void 0&&(Y==="instanceMatrix"&&U.instanceMatrix&&(j=U.instanceMatrix),Y==="instanceColor"&&U.instanceColor&&(j=U.instanceColor)),j!==void 0){const B=j.normalized,ee=j.itemSize,Ue=e.get(j);if(Ue===void 0)continue;const Be=Ue.buffer,be=Ue.type,te=Ue.bytesPerElement,xe=be===n.INT||be===n.UNSIGNED_INT||j.gpuType===Ap;if(j.isInterleavedBufferAttribute){const ge=j.data,Ee=ge.stride,Qe=j.offset;if(ge.isInstancedInterleavedBuffer){for(let tt=0;tt<se.locationSize;tt++)S(se.location+tt,ge.meshPerAttribute);U.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let tt=0;tt<se.locationSize;tt++)y(se.location+tt);n.bindBuffer(n.ARRAY_BUFFER,Be);for(let tt=0;tt<se.locationSize;tt++)P(se.location+tt,ee/se.locationSize,be,B,Ee*te,(Qe+ee/se.locationSize*tt)*te,xe)}else{if(j.isInstancedBufferAttribute){for(let ge=0;ge<se.locationSize;ge++)S(se.location+ge,j.meshPerAttribute);U.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ge=0;ge<se.locationSize;ge++)y(se.location+ge);n.bindBuffer(n.ARRAY_BUFFER,Be);for(let ge=0;ge<se.locationSize;ge++)P(se.location+ge,ee/se.locationSize,be,B,ee*te,ee/se.locationSize*ge*te,xe)}}else if(W!==void 0){const B=W[Y];if(B!==void 0)switch(B.length){case 2:n.vertexAttrib2fv(se.location,B);break;case 3:n.vertexAttrib3fv(se.location,B);break;case 4:n.vertexAttrib4fv(se.location,B);break;default:n.vertexAttrib1fv(se.location,B)}}}}A()}function I(){F();for(const U in r){const q=r[U];for(const re in q){const ue=q[re];for(const G in ue){const Z=ue[G];for(const W in Z)p(Z[W].object),delete Z[W];delete ue[G]}}delete r[U]}}function L(U){if(r[U.id]===void 0)return;const q=r[U.id];for(const re in q){const ue=q[re];for(const G in ue){const Z=ue[G];for(const W in Z)p(Z[W].object),delete Z[W];delete ue[G]}}delete r[U.id]}function k(U){for(const q in r){const re=r[q];for(const ue in re){const G=re[ue];if(G[U.id]===void 0)continue;const Z=G[U.id];for(const W in Z)p(Z[W].object),delete Z[W];delete G[U.id]}}}function E(U){for(const q in r){const re=r[q],ue=U.isInstancedMesh===!0?U.id:0,G=re[ue];if(G!==void 0){for(const Z in G){const W=G[Z];for(const Y in W)p(W[Y].object),delete W[Y];delete G[Z]}delete re[ue],Object.keys(re).length===0&&delete r[q]}}}function F(){z(),c=!0,a!==o&&(a=o,h(a.object))}function z(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:u,reset:F,resetDefaultState:z,dispose:I,releaseStatesOfGeometry:L,releaseStatesOfObject:E,releaseStatesOfProgram:k,initAttributes:b,enableAttribute:y,disableUnusedAttributes:A}}function uA(n,e,t){let r;function o(f){r=f}function a(f,h){n.drawArrays(r,f,h),t.update(h,r,1)}function c(f,h,p){p!==0&&(n.drawArraysInstanced(r,f,h,p),t.update(h,r,p))}function u(f,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,f,0,h,0,p);let v=0;for(let _=0;_<p;_++)v+=h[_];t.update(v,r,1)}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=u}function dA(n,e,t,r){let o;function a(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(k){return!(k!==Ii&&r.convert(k)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(k){const E=k===Tr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==_i&&r.convert(k)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==$i&&!E)}function f(k){if(k==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=f(h);p!==h&&(at("WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const g=t.logarithmicDepthBuffer===!0,v=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&v===!1&&at("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const _=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=n.getParameter(n.MAX_TEXTURE_SIZE),y=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),S=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),P=n.getParameter(n.MAX_VARYING_VECTORS),D=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=n.getParameter(n.MAX_SAMPLES),L=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:f,textureFormatReadable:c,textureTypeReadable:u,precision:h,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:_,maxVertexTextures:M,maxTextureSize:b,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:A,maxVaryings:P,maxFragmentUniforms:D,maxSamples:I,samples:L}}function fA(n){const e=this;let t=null,r=0,o=!1,a=!1;const c=new Ls,u=new ht,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const _=g.length!==0||v||r!==0||o;return o=v,r=g.length,_},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,v){t=p(g,v,0)},this.setState=function(g,v,_){const M=g.clippingPlanes,b=g.clipIntersection,y=g.clipShadows,S=n.get(g);if(!o||M===null||M.length===0||a&&!y)a?p(null):h();else{const A=a?0:r,P=A*4;let D=S.clippingState||null;f.value=D,D=p(M,v,P,_);for(let I=0;I!==P;++I)D[I]=t[I];S.clippingState=D,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=A}};function h(){f.value!==t&&(f.value=t,f.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function p(g,v,_,M){const b=g!==null?g.length:0;let y=null;if(b!==0){if(y=f.value,M!==!0||y===null){const S=_+b*4,A=v.matrixWorldInverse;u.getNormalMatrix(A),(y===null||y.length<S)&&(y=new Float32Array(S));for(let P=0,D=_;P!==b;++P,D+=4)c.copy(g[P]).applyMatrix4(A,u),c.normal.toArray(y,D),y[D+3]=c.constant}f.value=y,f.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,y}}const os=4,Tv=[.125,.215,.35,.446,.526,.582],Fs=20,hA=256,Wa=new Ru,Av=new Ot;let Kf=null,Zf=0,Qf=0,Jf=!1;const pA=new ae;class Cv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,a={}){const{size:c=256,position:u=pA}=a;Kf=this._renderer.getRenderTarget(),Zf=this._renderer.getActiveCubeFace(),Qf=this._renderer.getActiveMipmapLevel(),Jf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,r,o,f,u),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Kf,Zf,Qf),this._renderer.xr.enabled=Jf,e.scissorTest=!1,Io(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hs||e.mapping===Wo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Kf=this._renderer.getRenderTarget(),Zf=this._renderer.getActiveCubeFace(),Qf=this._renderer.getActiveMipmapLevel(),Jf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:Tr,format:Ii,colorSpace:du,depthBuffer:!1},o=Rv(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rv(e,t,r);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=mA(a)),this._blurMaterial=vA(a,e,t),this._ggxMaterial=gA(a,e,t)}return o}_compileMaterial(e){const t=new Ui(new Pr,e);this._renderer.compile(t,Wa)}_sceneToCubeUV(e,t,r,o,a){const f=new Li(90,1,t,r),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,_=g.toneMapping;g.getClearColor(Av),g.toneMapping=Yi,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(o),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ui(new hl,new ty({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,y=b.material;let S=!1;const A=e.background;A?A.isColor&&(y.color.copy(A),e.background=null,S=!0):(y.color.copy(Av),S=!0);for(let P=0;P<6;P++){const D=P%3;D===0?(f.up.set(0,h[P],0),f.position.set(a.x,a.y,a.z),f.lookAt(a.x+p[P],a.y,a.z)):D===1?(f.up.set(0,0,h[P]),f.position.set(a.x,a.y,a.z),f.lookAt(a.x,a.y+p[P],a.z)):(f.up.set(0,h[P],0),f.position.set(a.x,a.y,a.z),f.lookAt(a.x,a.y,a.z+p[P]));const I=this._cubeSize;Io(o,D*I,P>2?I:0,I,I),g.setRenderTarget(o),S&&g.render(b,f),g.render(e,f)}g.toneMapping=_,g.autoClear=v,e.background=A}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Hs||e.mapping===Wo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pv());const a=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=a;const u=a.uniforms;u.envMap.value=e;const f=this._cubeSize;Io(t,0,0,3*f,2*f),r.setRenderTarget(t),r.render(c,Wa)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let a=1;a<o;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,a=this._pingPongRenderTarget,c=this._ggxMaterial,u=this._lodMeshes[r];u.material=c;const f=c.uniforms,h=r/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),g=Math.sqrt(h*h-p*p),v=0+h*1.25,_=g*v,{_lodMax:M}=this,b=this._sizeLods[r],y=3*b*(r>M-os?r-M+os:0),S=4*(this._cubeSize-b);f.envMap.value=e.texture,f.roughness.value=_,f.mipInt.value=M-t,Io(a,y,S,3*b,2*b),o.setRenderTarget(a),o.render(u,Wa),f.envMap.value=a.texture,f.roughness.value=0,f.mipInt.value=M-r,Io(e,y,S,3*b,2*b),o.setRenderTarget(e),o.render(u,Wa)}_blur(e,t,r,o,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,o,"latitudinal",a),this._halfBlur(c,e,r,r,o,"longitudinal",a)}_halfBlur(e,t,r,o,a,c,u){const f=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&At("blur direction must be either latitudinal or longitudinal!");const p=3,g=this._lodMeshes[o];g.material=h;const v=h.uniforms,_=this._sizeLods[r]-1,M=isFinite(a)?Math.PI/(2*_):2*Math.PI/(2*Fs-1),b=a/M,y=isFinite(a)?1+Math.floor(p*b):Fs;y>Fs&&at(`sigmaRadians, ${a}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Fs}`);const S=[];let A=0;for(let k=0;k<Fs;++k){const E=k/b,F=Math.exp(-E*E/2);S.push(F),k===0?A+=F:k<y&&(A+=2*F)}for(let k=0;k<S.length;k++)S[k]=S[k]/A;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=S,v.latitudinal.value=c==="latitudinal",u&&(v.poleAxis.value=u);const{_lodMax:P}=this;v.dTheta.value=M,v.mipInt.value=P-r;const D=this._sizeLods[o],I=3*D*(o>P-os?o-P+os:0),L=4*(this._cubeSize-D);Io(t,I,L,3*D,2*D),f.setRenderTarget(t),f.render(g,Wa)}}function mA(n){const e=[],t=[],r=[];let o=n;const a=n-os+1+Tv.length;for(let c=0;c<a;c++){const u=Math.pow(2,o);e.push(u);let f=1/u;c>n-os?f=Tv[c-n+os-1]:c===0&&(f=0),t.push(f);const h=1/(u-2),p=-h,g=1+h,v=[p,p,g,p,g,g,p,p,g,g,p,g],_=6,M=6,b=3,y=2,S=1,A=new Float32Array(b*M*_),P=new Float32Array(y*M*_),D=new Float32Array(S*M*_);for(let L=0;L<_;L++){const k=L%3*2/3-1,E=L>2?0:-1,F=[k,E,0,k+2/3,E,0,k+2/3,E+1,0,k,E,0,k+2/3,E+1,0,k,E+1,0];A.set(F,b*M*L),P.set(v,y*M*L);const z=[L,L,L,L,L,L];D.set(z,S*M*L)}const I=new Pr;I.setAttribute("position",new Zi(A,b)),I.setAttribute("uv",new Zi(P,y)),I.setAttribute("faceIndex",new Zi(D,S)),r.push(new Ui(I,null)),o>os&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function Rv(n,e,t){const r=new Ki(n,e,t);return r.texture.mapping=Au,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Io(n,e,t,r,o){n.viewport.set(e,t,r,o),n.scissor.set(e,t,r,o)}function gA(n,e,t){return new Fi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:hA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pu(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function vA(n,e,t){const r=new Float32Array(Fs),o=new ae(0,1,0);return new Fi({name:"SphericalGaussianBlur",defines:{n:Fs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Pu(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Pv(){return new Fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pu(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Dv(){return new Fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Pu(){return`

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
	`}class uy extends Ki{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new iy(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new hl(5,5,5),a=new Fi({name:"CubemapFromEquirect",uniforms:Xo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Qn,blending:Sr});a.uniforms.tEquirect.value=t;const c=new Ui(o,a),u=t.minFilter;return t.minFilter===ks&&(t.minFilter=kn),new E1(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,o);e.setRenderTarget(a)}}function xA(n){let e=new WeakMap,t=new WeakMap,r=null;function o(v,_=!1){return v==null?null:_?c(v):a(v)}function a(v){if(v&&v.isTexture){const _=v.mapping;if(_===Ef||_===wf)if(e.has(v)){const M=e.get(v).texture;return u(M,v.mapping)}else{const M=v.image;if(M&&M.height>0){const b=new uy(M.height);return b.fromEquirectangularTexture(n,v),e.set(v,b),v.addEventListener("dispose",h),u(b.texture,v.mapping)}else return null}}return v}function c(v){if(v&&v.isTexture){const _=v.mapping,M=_===Ef||_===wf,b=_===Hs||_===Wo;if(M||b){let y=t.get(v);const S=y!==void 0?y.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==S)return r===null&&(r=new Cv(n)),y=M?r.fromEquirectangular(v,y):r.fromCubemap(v,y),y.texture.pmremVersion=v.pmremVersion,t.set(v,y),y.texture;if(y!==void 0)return y.texture;{const A=v.image;return M&&A&&A.height>0||b&&A&&f(A)?(r===null&&(r=new Cv(n)),y=M?r.fromEquirectangular(v):r.fromCubemap(v),y.texture.pmremVersion=v.pmremVersion,t.set(v,y),v.addEventListener("dispose",p),y.texture):null}}}return v}function u(v,_){return _===Ef?v.mapping=Hs:_===wf&&(v.mapping=Wo),v}function f(v){let _=0;const M=6;for(let b=0;b<M;b++)v[b]!==void 0&&_++;return _===M}function h(v){const _=v.target;_.removeEventListener("dispose",h);const M=e.get(_);M!==void 0&&(e.delete(_),M.dispose())}function p(v){const _=v.target;_.removeEventListener("dispose",p);const M=t.get(_);M!==void 0&&(t.delete(_),M.dispose())}function g(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:g}}function _A(n){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=n.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&rp("WebGLRenderer: "+r+" extension not supported."),o}}}function yA(n,e,t,r){const o={},a=new WeakMap;function c(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const M in v.attributes)e.remove(v.attributes[M]);v.removeEventListener("dispose",c),delete o[v.id];const _=a.get(v);_&&(e.remove(_),a.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function u(g,v){return o[v.id]===!0||(v.addEventListener("dispose",c),o[v.id]=!0,t.memory.geometries++),v}function f(g){const v=g.attributes;for(const _ in v)e.update(v[_],n.ARRAY_BUFFER)}function h(g){const v=[],_=g.index,M=g.attributes.position;let b=0;if(M===void 0)return;if(_!==null){const A=_.array;b=_.version;for(let P=0,D=A.length;P<D;P+=3){const I=A[P+0],L=A[P+1],k=A[P+2];v.push(I,L,L,k,k,I)}}else{const A=M.array;b=M.version;for(let P=0,D=A.length/3-1;P<D;P+=3){const I=P+0,L=P+1,k=P+2;v.push(I,L,L,k,k,I)}}const y=new(M.count>=65535?ey:J_)(v,1);y.version=b;const S=a.get(g);S&&e.remove(S),a.set(g,y)}function p(g){const v=a.get(g);if(v){const _=g.index;_!==null&&v.version<_.version&&h(g)}else h(g);return a.get(g)}return{get:u,update:f,getWireframeAttribute:p}}function SA(n,e,t){let r;function o(g){r=g}let a,c;function u(g){a=g.type,c=g.bytesPerElement}function f(g,v){n.drawElements(r,v,a,g*c),t.update(v,r,1)}function h(g,v,_){_!==0&&(n.drawElementsInstanced(r,v,a,g*c,_),t.update(v,r,_))}function p(g,v,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,v,0,a,g,0,_);let b=0;for(let y=0;y<_;y++)b+=v[y];t.update(b,r,1)}this.setMode=o,this.setIndex=u,this.render=f,this.renderInstances=h,this.renderMultiDraw=p}function MA(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,c,u){switch(t.calls++,c){case n.TRIANGLES:t.triangles+=u*(a/3);break;case n.LINES:t.lines+=u*(a/2);break;case n.LINE_STRIP:t.lines+=u*(a-1);break;case n.LINE_LOOP:t.lines+=u*a;break;case n.POINTS:t.points+=u*a;break;default:At("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function EA(n,e,t){const r=new WeakMap,o=new ln;function a(c,u,f){const h=c.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0;let v=r.get(u);if(v===void 0||v.count!==g){let z=function(){E.dispose(),r.delete(u),u.removeEventListener("dispose",z)};var _=z;v!==void 0&&v.texture.dispose();const M=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],P=u.morphAttributes.color||[];let D=0;M===!0&&(D=1),b===!0&&(D=2),y===!0&&(D=3);let I=u.attributes.position.count*D,L=1;I>e.maxTextureSize&&(L=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const k=new Float32Array(I*L*4*g),E=new Y_(k,I,L,g);E.type=$i,E.needsUpdate=!0;const F=D*4;for(let U=0;U<g;U++){const q=S[U],re=A[U],ue=P[U],G=I*L*4*U;for(let Z=0;Z<q.count;Z++){const W=Z*F;M===!0&&(o.fromBufferAttribute(q,Z),k[G+W+0]=o.x,k[G+W+1]=o.y,k[G+W+2]=o.z,k[G+W+3]=0),b===!0&&(o.fromBufferAttribute(re,Z),k[G+W+4]=o.x,k[G+W+5]=o.y,k[G+W+6]=o.z,k[G+W+7]=0),y===!0&&(o.fromBufferAttribute(ue,Z),k[G+W+8]=o.x,k[G+W+9]=o.y,k[G+W+10]=o.z,k[G+W+11]=ue.itemSize===4?o.w:1)}}v={count:g,texture:E,size:new Dt(I,L)},r.set(u,v),u.addEventListener("dispose",z)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(n,"morphTexture",c.morphTexture,t);else{let M=0;for(let y=0;y<h.length;y++)M+=h[y];const b=u.morphTargetsRelative?1:1-M;f.getUniforms().setValue(n,"morphTargetBaseInfluence",b),f.getUniforms().setValue(n,"morphTargetInfluences",h)}f.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}return{update:a}}function wA(n,e,t,r,o){let a=new WeakMap;function c(h){const p=o.render.frame,g=h.geometry,v=e.get(h,g);if(a.get(v)!==p&&(e.update(v),a.set(v,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),a.get(h)!==p&&(t.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,n.ARRAY_BUFFER),a.set(h,p))),h.isSkinnedMesh){const _=h.skeleton;a.get(_)!==p&&(_.update(),a.set(_,p))}return v}function u(){a=new WeakMap}function f(h){const p=h.target;p.removeEventListener("dispose",f),r.releaseStatesOfObject(p),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:c,dispose:u}}const bA={[N_]:"LINEAR_TONE_MAPPING",[I_]:"REINHARD_TONE_MAPPING",[U_]:"CINEON_TONE_MAPPING",[F_]:"ACES_FILMIC_TONE_MAPPING",[O_]:"AGX_TONE_MAPPING",[B_]:"NEUTRAL_TONE_MAPPING",[k_]:"CUSTOM_TONE_MAPPING"};function TA(n,e,t,r,o){const a=new Ki(e,t,{type:n,depthBuffer:r,stencilBuffer:o,depthTexture:r?new jo(e,t):void 0}),c=new Ki(e,t,{type:Tr,depthBuffer:!1,stencilBuffer:!1}),u=new Pr;u.setAttribute("position",new Er([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Er([0,2,0,0,2,0],2));const f=new oy({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Ui(u,f),p=new Ru(-1,1,1,-1,0,1);let g=null,v=null,_=!1,M,b=null,y=[],S=!1;this.setSize=function(A,P){a.setSize(A,P),c.setSize(A,P);for(let D=0;D<y.length;D++){const I=y[D];I.setSize&&I.setSize(A,P)}},this.setEffects=function(A){y=A,S=y.length>0&&y[0].isRenderPass===!0;const P=a.width,D=a.height;for(let I=0;I<y.length;I++){const L=y[I];L.setSize&&L.setSize(P,D)}},this.begin=function(A,P){if(_||A.toneMapping===Yi&&y.length===0)return!1;if(b=P,P!==null){const D=P.width,I=P.height;(a.width!==D||a.height!==I)&&this.setSize(D,I)}return S===!1&&A.setRenderTarget(a),M=A.toneMapping,A.toneMapping=Yi,!0},this.hasRenderPass=function(){return S},this.end=function(A,P){A.toneMapping=M,_=!0;let D=a,I=c;for(let L=0;L<y.length;L++){const k=y[L];if(k.enabled!==!1&&(k.render(A,I,D,P),k.needsSwap!==!1)){const E=D;D=I,I=E}}if(g!==A.outputColorSpace||v!==A.toneMapping){g=A.outputColorSpace,v=A.toneMapping,f.defines={},Et.getTransfer(g)===Ft&&(f.defines.SRGB_TRANSFER="");const L=bA[v];L&&(f.defines[L]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=D.texture,A.setRenderTarget(b),A.render(h,p),b=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),c.dispose(),u.dispose(),f.dispose()}}const dy=new Gn,op=new jo(1,1),fy=new Y_,hy=new Qw,py=new iy,Lv=[],Nv=[],Iv=new Float32Array(16),Uv=new Float32Array(9),Fv=new Float32Array(4);function Jo(n,e,t){const r=n[0];if(r<=0||r>0)return n;const o=e*t;let a=Lv[o];if(a===void 0&&(a=new Float32Array(o),Lv[o]=a),e!==0){r.toArray(a,0);for(let c=1,u=0;c!==e;++c)u+=t,n[c].toArray(a,u)}return a}function vn(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function xn(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function Du(n,e){let t=Nv[e];t===void 0&&(t=new Int32Array(e),Nv[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function AA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function CA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;n.uniform2fv(this.addr,e),xn(t,e)}}function RA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vn(t,e))return;n.uniform3fv(this.addr,e),xn(t,e)}}function PA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;n.uniform4fv(this.addr,e),xn(t,e)}}function DA(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(vn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),xn(t,e)}else{if(vn(t,r))return;Fv.set(r),n.uniformMatrix2fv(this.addr,!1,Fv),xn(t,r)}}function LA(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(vn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),xn(t,e)}else{if(vn(t,r))return;Uv.set(r),n.uniformMatrix3fv(this.addr,!1,Uv),xn(t,r)}}function NA(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(vn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),xn(t,e)}else{if(vn(t,r))return;Iv.set(r),n.uniformMatrix4fv(this.addr,!1,Iv),xn(t,r)}}function IA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function UA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;n.uniform2iv(this.addr,e),xn(t,e)}}function FA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;n.uniform3iv(this.addr,e),xn(t,e)}}function kA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;n.uniform4iv(this.addr,e),xn(t,e)}}function OA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function BA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;n.uniform2uiv(this.addr,e),xn(t,e)}}function zA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;n.uniform3uiv(this.addr,e),xn(t,e)}}function VA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;n.uniform4uiv(this.addr,e),xn(t,e)}}function GA(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o);let a;this.type===n.SAMPLER_2D_SHADOW?(op.compareFunction=t.isReversedDepthBuffer()?Ip:Np,a=op):a=dy,t.setTexture2D(e||a,o)}function HA(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||hy,o)}function WA(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||py,o)}function jA(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||fy,o)}function XA(n){switch(n){case 5126:return AA;case 35664:return CA;case 35665:return RA;case 35666:return PA;case 35674:return DA;case 35675:return LA;case 35676:return NA;case 5124:case 35670:return IA;case 35667:case 35671:return UA;case 35668:case 35672:return FA;case 35669:case 35673:return kA;case 5125:return OA;case 36294:return BA;case 36295:return zA;case 36296:return VA;case 35678:case 36198:case 36298:case 36306:case 35682:return GA;case 35679:case 36299:case 36307:return HA;case 35680:case 36300:case 36308:case 36293:return WA;case 36289:case 36303:case 36311:case 36292:return jA}}function $A(n,e){n.uniform1fv(this.addr,e)}function qA(n,e){const t=Jo(e,this.size,2);n.uniform2fv(this.addr,t)}function YA(n,e){const t=Jo(e,this.size,3);n.uniform3fv(this.addr,t)}function KA(n,e){const t=Jo(e,this.size,4);n.uniform4fv(this.addr,t)}function ZA(n,e){const t=Jo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function QA(n,e){const t=Jo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function JA(n,e){const t=Jo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function eC(n,e){n.uniform1iv(this.addr,e)}function tC(n,e){n.uniform2iv(this.addr,e)}function nC(n,e){n.uniform3iv(this.addr,e)}function iC(n,e){n.uniform4iv(this.addr,e)}function rC(n,e){n.uniform1uiv(this.addr,e)}function sC(n,e){n.uniform2uiv(this.addr,e)}function oC(n,e){n.uniform3uiv(this.addr,e)}function aC(n,e){n.uniform4uiv(this.addr,e)}function lC(n,e,t){const r=this.cache,o=e.length,a=Du(t,o);vn(r,a)||(n.uniform1iv(this.addr,a),xn(r,a));let c;this.type===n.SAMPLER_2D_SHADOW?c=op:c=dy;for(let u=0;u!==o;++u)t.setTexture2D(e[u]||c,a[u])}function cC(n,e,t){const r=this.cache,o=e.length,a=Du(t,o);vn(r,a)||(n.uniform1iv(this.addr,a),xn(r,a));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||hy,a[c])}function uC(n,e,t){const r=this.cache,o=e.length,a=Du(t,o);vn(r,a)||(n.uniform1iv(this.addr,a),xn(r,a));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||py,a[c])}function dC(n,e,t){const r=this.cache,o=e.length,a=Du(t,o);vn(r,a)||(n.uniform1iv(this.addr,a),xn(r,a));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||fy,a[c])}function fC(n){switch(n){case 5126:return $A;case 35664:return qA;case 35665:return YA;case 35666:return KA;case 35674:return ZA;case 35675:return QA;case 35676:return JA;case 5124:case 35670:return eC;case 35667:case 35671:return tC;case 35668:case 35672:return nC;case 35669:case 35673:return iC;case 5125:return rC;case 36294:return sC;case 36295:return oC;case 36296:return aC;case 35678:case 36198:case 36298:case 36306:case 35682:return lC;case 35679:case 36299:case 36307:return cC;case 35680:case 36300:case 36308:case 36293:return uC;case 36289:case 36303:case 36311:case 36292:return dC}}class hC{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=XA(t.type)}}class pC{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=fC(t.type)}}class mC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let a=0,c=o.length;a!==c;++a){const u=o[a];u.setValue(e,t[u.id],r)}}}const eh=/(\w+)(\])?(\[|\.)?/g;function kv(n,e){n.seq.push(e),n.map[e.id]=e}function gC(n,e,t){const r=n.name,o=r.length;for(eh.lastIndex=0;;){const a=eh.exec(r),c=eh.lastIndex;let u=a[1];const f=a[2]==="]",h=a[3];if(f&&(u=u|0),h===void 0||h==="["&&c+2===o){kv(t,h===void 0?new hC(u,n,e):new pC(u,n,e));break}else{let g=t.map[u];g===void 0&&(g=new mC(u),kv(t,g)),t=g}}}class ru{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const u=e.getActiveUniform(t,c),f=e.getUniformLocation(t,u.name);gC(u,f,this)}const o=[],a=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):a.push(c);o.length>0&&(this.seq=o.concat(a))}setValue(e,t,r,o){const a=this.map[t];a!==void 0&&a.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let a=0,c=t.length;a!==c;++a){const u=t[a],f=r[u.id];f.needsUpdate!==!1&&u.setValue(e,f.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,a=e.length;o!==a;++o){const c=e[o];c.id in t&&r.push(c)}return r}}function Ov(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const vC=37297;let xC=0;function _C(n,e){const t=n.split(`
`),r=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=o;c<a;c++){const u=c+1;r.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return r.join(`
`)}const Bv=new ht;function yC(n){Et._getMatrix(Bv,Et.workingColorSpace,n);const e=`mat3( ${Bv.elements.map(t=>t.toFixed(4))} )`;switch(Et.getTransfer(n)){case fu:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function zv(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),a=(n.getShaderInfoLog(e)||"").trim();if(r&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const u=parseInt(c[1]);return t.toUpperCase()+`

`+a+`

`+_C(n.getShaderSource(e),u)}else return a}function SC(n,e){const t=yC(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const MC={[N_]:"Linear",[I_]:"Reinhard",[U_]:"Cineon",[F_]:"ACESFilmic",[O_]:"AgX",[B_]:"Neutral",[k_]:"Custom"};function EC(n,e){const t=MC[e];return t===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const jc=new ae;function wC(){Et.getLuminanceCoefficients(jc);const n=jc.x.toFixed(4),e=jc.y.toFixed(4),t=jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bC(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ya).join(`
`)}function TC(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function AC(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const a=n.getActiveAttrib(e,o),c=a.name;let u=1;a.type===n.FLOAT_MAT2&&(u=2),a.type===n.FLOAT_MAT3&&(u=3),a.type===n.FLOAT_MAT4&&(u=4),t[c]={type:a.type,location:n.getAttribLocation(e,c),locationSize:u}}return t}function Ya(n){return n!==""}function Vv(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gv(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const CC=/^[ \t]*#include +<([\w\d./]+)>/gm;function ap(n){return n.replace(CC,PC)}const RC=new Map;function PC(n,e){let t=gt[e];if(t===void 0){const r=RC.get(e);if(r!==void 0)t=gt[r],at('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return ap(t)}const DC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hv(n){return n.replace(DC,LC)}function LC(n,e,t,r){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function Wv(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const NC={[Jc]:"SHADOWMAP_TYPE_PCF",[qa]:"SHADOWMAP_TYPE_VSM"};function IC(n){return NC[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const UC={[Hs]:"ENVMAP_TYPE_CUBE",[Wo]:"ENVMAP_TYPE_CUBE",[Au]:"ENVMAP_TYPE_CUBE_UV"};function FC(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":UC[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const kC={[Wo]:"ENVMAP_MODE_REFRACTION"};function OC(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":kC[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const BC={[L_]:"ENVMAP_BLENDING_MULTIPLY",[Dw]:"ENVMAP_BLENDING_MIX",[Lw]:"ENVMAP_BLENDING_ADD"};function zC(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":BC[n.combine]||"ENVMAP_BLENDING_NONE"}function VC(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function GC(n,e,t,r){const o=n.getContext(),a=t.defines;let c=t.vertexShader,u=t.fragmentShader;const f=IC(t),h=FC(t),p=OC(t),g=zC(t),v=VC(t),_=bC(t),M=TC(a),b=o.createProgram();let y,S,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ya).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ya).join(`
`),S.length>0&&(S+=`
`)):(y=[Wv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ya).join(`
`),S=[Wv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yi?"#define TONE_MAPPING":"",t.toneMapping!==Yi?gt.tonemapping_pars_fragment:"",t.toneMapping!==Yi?EC("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,SC("linearToOutputTexel",t.outputColorSpace),wC(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ya).join(`
`)),c=ap(c),c=Vv(c,t),c=Gv(c,t),u=ap(u),u=Vv(u,t),u=Gv(u,t),c=Hv(c),u=Hv(u),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,y=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",t.glslVersion===rv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const P=A+y+c,D=A+S+u,I=Ov(o,o.VERTEX_SHADER,P),L=Ov(o,o.FRAGMENT_SHADER,D);o.attachShader(b,I),o.attachShader(b,L),t.index0AttributeName!==void 0?o.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(b,0,"position"),o.linkProgram(b);function k(U){if(n.debug.checkShaderErrors){const q=o.getProgramInfoLog(b)||"",re=o.getShaderInfoLog(I)||"",ue=o.getShaderInfoLog(L)||"",G=q.trim(),Z=re.trim(),W=ue.trim();let Y=!0,se=!0;if(o.getProgramParameter(b,o.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,b,I,L);else{const j=zv(o,I,"vertex"),B=zv(o,L,"fragment");At("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(b,o.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+G+`
`+j+`
`+B)}else G!==""?at("WebGLProgram: Program Info Log:",G):(Z===""||W==="")&&(se=!1);se&&(U.diagnostics={runnable:Y,programLog:G,vertexShader:{log:Z,prefix:y},fragmentShader:{log:W,prefix:S}})}o.deleteShader(I),o.deleteShader(L),E=new ru(o,b),F=AC(o,b)}let E;this.getUniforms=function(){return E===void 0&&k(this),E};let F;this.getAttributes=function(){return F===void 0&&k(this),F};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=o.getProgramParameter(b,vC)),z},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xC++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=I,this.fragmentShader=L,this}let HC=0;class WC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),a=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new jC(e),t.set(e,r)),r}}class jC{constructor(e){this.id=HC++,this.code=e,this.usedTimes=0}}function XC(n){return n===Ws||n===cu||n===uu}function $C(n,e,t,r,o,a){const c=new K_,u=new WC,f=new Set,h=[],p=new Map,g=r.logarithmicDepthBuffer;let v=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(E){return f.add(E),E===0?"uv":`uv${E}`}function b(E,F,z,U,q,re){const ue=U.fog,G=q.geometry,Z=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?U.environment:null,W=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,Y=e.get(E.envMap||Z,W),se=Y&&Y.mapping===Au?Y.image.height:null,j=_[E.type];E.precision!==null&&(v=r.getMaxPrecision(E.precision),v!==E.precision&&at("WebGLProgram.getParameters:",E.precision,"not supported, using",v,"instead."));const B=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ee=B!==void 0?B.length:0;let Ue=0;G.morphAttributes.position!==void 0&&(Ue=1),G.morphAttributes.normal!==void 0&&(Ue=2),G.morphAttributes.color!==void 0&&(Ue=3);let Be,be,te,xe;if(j){const ut=Xi[j];Be=ut.vertexShader,be=ut.fragmentShader}else Be=E.vertexShader,be=E.fragmentShader,u.update(E),te=u.getVertexShaderID(E),xe=u.getFragmentShaderID(E);const ge=n.getRenderTarget(),Ee=n.state.buffers.depth.getReversed(),Qe=q.isInstancedMesh===!0,tt=q.isBatchedMesh===!0,Pt=!!E.map,lt=!!E.matcap,Mt=!!Y,kt=!!E.aoMap,pt=!!E.lightMap,Qt=!!E.bumpMap,Gt=!!E.normalMap,bn=!!E.displacementMap,X=!!E.emissiveMap,Ht=!!E.metalnessMap,mt=!!E.roughnessMap,Nt=E.anisotropy>0,Ie=E.clearcoat>0,Xt=E.dispersion>0,N=E.iridescence>0,w=E.sheen>0,Q=E.transmission>0,pe=Nt&&!!E.anisotropyMap,ve=Ie&&!!E.clearcoatMap,we=Ie&&!!E.clearcoatNormalMap,Ne=Ie&&!!E.clearcoatRoughnessMap,fe=N&&!!E.iridescenceMap,me=N&&!!E.iridescenceThicknessMap,ke=w&&!!E.sheenColorMap,ze=w&&!!E.sheenRoughnessMap,Re=!!E.specularMap,Te=!!E.specularColorMap,st=!!E.specularIntensityMap,ct=Q&&!!E.transmissionMap,vt=Q&&!!E.thicknessMap,H=!!E.gradientMap,Ce=!!E.alphaMap,he=E.alphaTest>0,Oe=!!E.alphaHash,De=!!E.extensions;let _e=Yi;E.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(_e=n.toneMapping);const qe={shaderID:j,shaderType:E.type,shaderName:E.name,vertexShader:Be,fragmentShader:be,defines:E.defines,customVertexShaderID:te,customFragmentShaderID:xe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:v,batching:tt,batchingColor:tt&&q._colorsTexture!==null,instancing:Qe,instancingColor:Qe&&q.instanceColor!==null,instancingMorph:Qe&&q.morphTexture!==null,outputColorSpace:ge===null?n.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Et.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:Pt,matcap:lt,envMap:Mt,envMapMode:Mt&&Y.mapping,envMapCubeUVHeight:se,aoMap:kt,lightMap:pt,bumpMap:Qt,normalMap:Gt,displacementMap:bn,emissiveMap:X,normalMapObjectSpace:Gt&&E.normalMapType===Uw,normalMapTangentSpace:Gt&&E.normalMapType===tv,packedNormalMap:Gt&&E.normalMapType===tv&&XC(E.normalMap.format),metalnessMap:Ht,roughnessMap:mt,anisotropy:Nt,anisotropyMap:pe,clearcoat:Ie,clearcoatMap:ve,clearcoatNormalMap:we,clearcoatRoughnessMap:Ne,dispersion:Xt,iridescence:N,iridescenceMap:fe,iridescenceThicknessMap:me,sheen:w,sheenColorMap:ke,sheenRoughnessMap:ze,specularMap:Re,specularColorMap:Te,specularIntensityMap:st,transmission:Q,transmissionMap:ct,thicknessMap:vt,gradientMap:H,opaque:E.transparent===!1&&E.blending===Vo&&E.alphaToCoverage===!1,alphaMap:Ce,alphaTest:he,alphaHash:Oe,combine:E.combine,mapUv:Pt&&M(E.map.channel),aoMapUv:kt&&M(E.aoMap.channel),lightMapUv:pt&&M(E.lightMap.channel),bumpMapUv:Qt&&M(E.bumpMap.channel),normalMapUv:Gt&&M(E.normalMap.channel),displacementMapUv:bn&&M(E.displacementMap.channel),emissiveMapUv:X&&M(E.emissiveMap.channel),metalnessMapUv:Ht&&M(E.metalnessMap.channel),roughnessMapUv:mt&&M(E.roughnessMap.channel),anisotropyMapUv:pe&&M(E.anisotropyMap.channel),clearcoatMapUv:ve&&M(E.clearcoatMap.channel),clearcoatNormalMapUv:we&&M(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&M(E.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&M(E.iridescenceMap.channel),iridescenceThicknessMapUv:me&&M(E.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&M(E.sheenColorMap.channel),sheenRoughnessMapUv:ze&&M(E.sheenRoughnessMap.channel),specularMapUv:Re&&M(E.specularMap.channel),specularColorMapUv:Te&&M(E.specularColorMap.channel),specularIntensityMapUv:st&&M(E.specularIntensityMap.channel),transmissionMapUv:ct&&M(E.transmissionMap.channel),thicknessMapUv:vt&&M(E.thicknessMap.channel),alphaMapUv:Ce&&M(E.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Gt||Nt),vertexNormals:!!G.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!G.attributes.uv&&(Pt||Ce),fog:!!ue,useFog:E.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||G.attributes.normal===void 0&&Gt===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Ee,skinning:q.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:Ue,numDirLights:F.directional.length,numPointLights:F.point.length,numSpotLights:F.spot.length,numSpotLightMaps:F.spotLightMap.length,numRectAreaLights:F.rectArea.length,numHemiLights:F.hemi.length,numDirLightShadows:F.directionalShadowMap.length,numPointLightShadows:F.pointShadowMap.length,numSpotLightShadows:F.spotShadowMap.length,numSpotLightShadowsWithMaps:F.numSpotLightShadowsWithMaps,numLightProbes:F.numLightProbes,numLightProbeGrids:re.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:_e,decodeVideoTexture:Pt&&E.map.isVideoTexture===!0&&Et.getTransfer(E.map.colorSpace)===Ft,decodeVideoTextureEmissive:X&&E.emissiveMap.isVideoTexture===!0&&Et.getTransfer(E.emissiveMap.colorSpace)===Ft,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===_r,flipSided:E.side===Qn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:De&&E.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&E.extensions.multiDraw===!0||tt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return qe.vertexUv1s=f.has(1),qe.vertexUv2s=f.has(2),qe.vertexUv3s=f.has(3),f.clear(),qe}function y(E){const F=[];if(E.shaderID?F.push(E.shaderID):(F.push(E.customVertexShaderID),F.push(E.customFragmentShaderID)),E.defines!==void 0)for(const z in E.defines)F.push(z),F.push(E.defines[z]);return E.isRawShaderMaterial===!1&&(S(F,E),A(F,E),F.push(n.outputColorSpace)),F.push(E.customProgramCacheKey),F.join()}function S(E,F){E.push(F.precision),E.push(F.outputColorSpace),E.push(F.envMapMode),E.push(F.envMapCubeUVHeight),E.push(F.mapUv),E.push(F.alphaMapUv),E.push(F.lightMapUv),E.push(F.aoMapUv),E.push(F.bumpMapUv),E.push(F.normalMapUv),E.push(F.displacementMapUv),E.push(F.emissiveMapUv),E.push(F.metalnessMapUv),E.push(F.roughnessMapUv),E.push(F.anisotropyMapUv),E.push(F.clearcoatMapUv),E.push(F.clearcoatNormalMapUv),E.push(F.clearcoatRoughnessMapUv),E.push(F.iridescenceMapUv),E.push(F.iridescenceThicknessMapUv),E.push(F.sheenColorMapUv),E.push(F.sheenRoughnessMapUv),E.push(F.specularMapUv),E.push(F.specularColorMapUv),E.push(F.specularIntensityMapUv),E.push(F.transmissionMapUv),E.push(F.thicknessMapUv),E.push(F.combine),E.push(F.fogExp2),E.push(F.sizeAttenuation),E.push(F.morphTargetsCount),E.push(F.morphAttributeCount),E.push(F.numDirLights),E.push(F.numPointLights),E.push(F.numSpotLights),E.push(F.numSpotLightMaps),E.push(F.numHemiLights),E.push(F.numRectAreaLights),E.push(F.numDirLightShadows),E.push(F.numPointLightShadows),E.push(F.numSpotLightShadows),E.push(F.numSpotLightShadowsWithMaps),E.push(F.numLightProbes),E.push(F.shadowMapType),E.push(F.toneMapping),E.push(F.numClippingPlanes),E.push(F.numClipIntersection),E.push(F.depthPacking)}function A(E,F){c.disableAll(),F.instancing&&c.enable(0),F.instancingColor&&c.enable(1),F.instancingMorph&&c.enable(2),F.matcap&&c.enable(3),F.envMap&&c.enable(4),F.normalMapObjectSpace&&c.enable(5),F.normalMapTangentSpace&&c.enable(6),F.clearcoat&&c.enable(7),F.iridescence&&c.enable(8),F.alphaTest&&c.enable(9),F.vertexColors&&c.enable(10),F.vertexAlphas&&c.enable(11),F.vertexUv1s&&c.enable(12),F.vertexUv2s&&c.enable(13),F.vertexUv3s&&c.enable(14),F.vertexTangents&&c.enable(15),F.anisotropy&&c.enable(16),F.alphaHash&&c.enable(17),F.batching&&c.enable(18),F.dispersion&&c.enable(19),F.batchingColor&&c.enable(20),F.gradientMap&&c.enable(21),F.packedNormalMap&&c.enable(22),F.vertexNormals&&c.enable(23),E.push(c.mask),c.disableAll(),F.fog&&c.enable(0),F.useFog&&c.enable(1),F.flatShading&&c.enable(2),F.logarithmicDepthBuffer&&c.enable(3),F.reversedDepthBuffer&&c.enable(4),F.skinning&&c.enable(5),F.morphTargets&&c.enable(6),F.morphNormals&&c.enable(7),F.morphColors&&c.enable(8),F.premultipliedAlpha&&c.enable(9),F.shadowMapEnabled&&c.enable(10),F.doubleSided&&c.enable(11),F.flipSided&&c.enable(12),F.useDepthPacking&&c.enable(13),F.dithering&&c.enable(14),F.transmission&&c.enable(15),F.sheen&&c.enable(16),F.opaque&&c.enable(17),F.pointsUvs&&c.enable(18),F.decodeVideoTexture&&c.enable(19),F.decodeVideoTextureEmissive&&c.enable(20),F.alphaToCoverage&&c.enable(21),F.numLightProbeGrids>0&&c.enable(22),E.push(c.mask)}function P(E){const F=_[E.type];let z;if(F){const U=Xi[F];z=x1.clone(U.uniforms)}else z=E.uniforms;return z}function D(E,F){let z=p.get(F);return z!==void 0?++z.usedTimes:(z=new GC(n,F,E,o),h.push(z),p.set(F,z)),z}function I(E){if(--E.usedTimes===0){const F=h.indexOf(E);h[F]=h[h.length-1],h.pop(),p.delete(E.cacheKey),E.destroy()}}function L(E){u.remove(E)}function k(){u.dispose()}return{getParameters:b,getProgramCacheKey:y,getUniforms:P,acquireProgram:D,releaseProgram:I,releaseShaderCache:L,programs:h,dispose:k}}function qC(){let n=new WeakMap;function e(c){return n.has(c)}function t(c){let u=n.get(c);return u===void 0&&(u={},n.set(c,u)),u}function r(c){n.delete(c)}function o(c,u,f){n.get(c)[u]=f}function a(){n=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:a}}function YC(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function jv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Xv(){const n=[];let e=0;const t=[],r=[],o=[];function a(){e=0,t.length=0,r.length=0,o.length=0}function c(v){let _=0;return v.isInstancedMesh&&(_+=2),v.isSkinnedMesh&&(_+=1),_}function u(v,_,M,b,y,S){let A=n[e];return A===void 0?(A={id:v.id,object:v,geometry:_,material:M,materialVariant:c(v),groupOrder:b,renderOrder:v.renderOrder,z:y,group:S},n[e]=A):(A.id=v.id,A.object=v,A.geometry=_,A.material=M,A.materialVariant=c(v),A.groupOrder=b,A.renderOrder=v.renderOrder,A.z=y,A.group=S),e++,A}function f(v,_,M,b,y,S){const A=u(v,_,M,b,y,S);M.transmission>0?r.push(A):M.transparent===!0?o.push(A):t.push(A)}function h(v,_,M,b,y,S){const A=u(v,_,M,b,y,S);M.transmission>0?r.unshift(A):M.transparent===!0?o.unshift(A):t.unshift(A)}function p(v,_){t.length>1&&t.sort(v||YC),r.length>1&&r.sort(_||jv),o.length>1&&o.sort(_||jv)}function g(){for(let v=e,_=n.length;v<_;v++){const M=n[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:r,transparent:o,init:a,push:f,unshift:h,finish:g,sort:p}}function KC(){let n=new WeakMap;function e(r,o){const a=n.get(r);let c;return a===void 0?(c=new Xv,n.set(r,[c])):o>=a.length?(c=new Xv,a.push(c)):c=a[o],c}function t(){n=new WeakMap}return{get:e,dispose:t}}function ZC(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ae,color:new Ot};break;case"SpotLight":t={position:new ae,direction:new ae,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ae,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ae,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":t={color:new Ot,position:new ae,halfWidth:new ae,halfHeight:new ae};break}return n[e.id]=t,t}}}function QC(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let JC=0;function eR(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function tR(n){const e=new ZC,t=QC(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new ae);const o=new ae,a=new gn,c=new gn;function u(h){let p=0,g=0,v=0;for(let F=0;F<9;F++)r.probe[F].set(0,0,0);let _=0,M=0,b=0,y=0,S=0,A=0,P=0,D=0,I=0,L=0,k=0;h.sort(eR);for(let F=0,z=h.length;F<z;F++){const U=h[F],q=U.color,re=U.intensity,ue=U.distance;let G=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Ws?G=U.shadow.map.texture:G=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)p+=q.r*re,g+=q.g*re,v+=q.b*re;else if(U.isLightProbe){for(let Z=0;Z<9;Z++)r.probe[Z].addScaledVector(U.sh.coefficients[Z],re);k++}else if(U.isDirectionalLight){const Z=e.get(U);if(Z.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const W=U.shadow,Y=t.get(U);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,r.directionalShadow[_]=Y,r.directionalShadowMap[_]=G,r.directionalShadowMatrix[_]=U.shadow.matrix,A++}r.directional[_]=Z,_++}else if(U.isSpotLight){const Z=e.get(U);Z.position.setFromMatrixPosition(U.matrixWorld),Z.color.copy(q).multiplyScalar(re),Z.distance=ue,Z.coneCos=Math.cos(U.angle),Z.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Z.decay=U.decay,r.spot[b]=Z;const W=U.shadow;if(U.map&&(r.spotLightMap[I]=U.map,I++,W.updateMatrices(U),U.castShadow&&L++),r.spotLightMatrix[b]=W.matrix,U.castShadow){const Y=t.get(U);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,r.spotShadow[b]=Y,r.spotShadowMap[b]=G,D++}b++}else if(U.isRectAreaLight){const Z=e.get(U);Z.color.copy(q).multiplyScalar(re),Z.halfWidth.set(U.width*.5,0,0),Z.halfHeight.set(0,U.height*.5,0),r.rectArea[y]=Z,y++}else if(U.isPointLight){const Z=e.get(U);if(Z.color.copy(U.color).multiplyScalar(U.intensity),Z.distance=U.distance,Z.decay=U.decay,U.castShadow){const W=U.shadow,Y=t.get(U);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,Y.shadowCameraNear=W.camera.near,Y.shadowCameraFar=W.camera.far,r.pointShadow[M]=Y,r.pointShadowMap[M]=G,r.pointShadowMatrix[M]=U.shadow.matrix,P++}r.point[M]=Z,M++}else if(U.isHemisphereLight){const Z=e.get(U);Z.skyColor.copy(U.color).multiplyScalar(re),Z.groundColor.copy(U.groundColor).multiplyScalar(re),r.hemi[S]=Z,S++}}y>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Fe.LTC_FLOAT_1,r.rectAreaLTC2=Fe.LTC_FLOAT_2):(r.rectAreaLTC1=Fe.LTC_HALF_1,r.rectAreaLTC2=Fe.LTC_HALF_2)),r.ambient[0]=p,r.ambient[1]=g,r.ambient[2]=v;const E=r.hash;(E.directionalLength!==_||E.pointLength!==M||E.spotLength!==b||E.rectAreaLength!==y||E.hemiLength!==S||E.numDirectionalShadows!==A||E.numPointShadows!==P||E.numSpotShadows!==D||E.numSpotMaps!==I||E.numLightProbes!==k)&&(r.directional.length=_,r.spot.length=b,r.rectArea.length=y,r.point.length=M,r.hemi.length=S,r.directionalShadow.length=A,r.directionalShadowMap.length=A,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=A,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=D+I-L,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=k,E.directionalLength=_,E.pointLength=M,E.spotLength=b,E.rectAreaLength=y,E.hemiLength=S,E.numDirectionalShadows=A,E.numPointShadows=P,E.numSpotShadows=D,E.numSpotMaps=I,E.numLightProbes=k,r.version=JC++)}function f(h,p){let g=0,v=0,_=0,M=0,b=0;const y=p.matrixWorldInverse;for(let S=0,A=h.length;S<A;S++){const P=h[S];if(P.isDirectionalLight){const D=r.directional[g];D.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(y),g++}else if(P.isSpotLight){const D=r.spot[_];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(y),_++}else if(P.isRectAreaLight){const D=r.rectArea[M];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(y),c.identity(),a.copy(P.matrixWorld),a.premultiply(y),c.extractRotation(a),D.halfWidth.set(P.width*.5,0,0),D.halfHeight.set(0,P.height*.5,0),D.halfWidth.applyMatrix4(c),D.halfHeight.applyMatrix4(c),M++}else if(P.isPointLight){const D=r.point[v];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(y),v++}else if(P.isHemisphereLight){const D=r.hemi[b];D.direction.setFromMatrixPosition(P.matrixWorld),D.direction.transformDirection(y),b++}}}return{setup:u,setupView:f,state:r}}function $v(n){const e=new tR(n),t=[],r=[],o=[];function a(v){g.camera=v,t.length=0,r.length=0,o.length=0}function c(v){t.push(v)}function u(v){r.push(v)}function f(v){o.push(v)}function h(){e.setup(t)}function p(v){e.setupView(t,v)}const g={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:g,setupLights:h,setupLightsView:p,pushLight:c,pushShadow:u,pushLightProbeGrid:f}}function nR(n){let e=new WeakMap;function t(o,a=0){const c=e.get(o);let u;return c===void 0?(u=new $v(n),e.set(o,[u])):a>=c.length?(u=new $v(n),c.push(u)):u=c[a],u}function r(){e=new WeakMap}return{get:t,dispose:r}}const iR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rR=`uniform sampler2D shadow_pass;
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
}`,sR=[new ae(1,0,0),new ae(-1,0,0),new ae(0,1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1)],oR=[new ae(0,-1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1),new ae(0,-1,0),new ae(0,-1,0)],qv=new gn,ja=new ae,th=new ae;function aR(n,e,t){let r=new ny;const o=new Dt,a=new Dt,c=new ln,u=new S1,f=new M1,h={},p=t.maxTextureSize,g={[as]:Qn,[Qn]:as,[_r]:_r},v=new Fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:iR,fragmentShader:rR}),_=v.clone();_.defines.HORIZONTAL_PASS=1;const M=new Pr;M.setAttribute("position",new Zi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Ui(M,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jc;let S=this.type;this.render=function(L,k,E){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;this.type===fw&&(at("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Jc);const F=n.getRenderTarget(),z=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),q=n.state;q.setBlending(Sr),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const re=S!==this.type;re&&k.traverse(function(ue){ue.material&&(Array.isArray(ue.material)?ue.material.forEach(G=>G.needsUpdate=!0):ue.material.needsUpdate=!0)});for(let ue=0,G=L.length;ue<G;ue++){const Z=L[ue],W=Z.shadow;if(W===void 0){at("WebGLShadowMap:",Z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;o.copy(W.mapSize);const Y=W.getFrameExtents();o.multiply(Y),a.copy(W.mapSize),(o.x>p||o.y>p)&&(o.x>p&&(a.x=Math.floor(p/Y.x),o.x=a.x*Y.x,W.mapSize.x=a.x),o.y>p&&(a.y=Math.floor(p/Y.y),o.y=a.y*Y.y,W.mapSize.y=a.y));const se=n.state.buffers.depth.getReversed();if(W.camera._reversedDepth=se,W.map===null||re===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===qa){if(Z.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Ki(o.x,o.y,{format:Ws,type:Tr,minFilter:kn,magFilter:kn,generateMipmaps:!1}),W.map.texture.name=Z.name+".shadowMap",W.map.depthTexture=new jo(o.x,o.y,$i),W.map.depthTexture.name=Z.name+".shadowMapDepth",W.map.depthTexture.format=Ar,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Rn,W.map.depthTexture.magFilter=Rn}else Z.isPointLight?(W.map=new uy(o.x),W.map.depthTexture=new g1(o.x,er)):(W.map=new Ki(o.x,o.y),W.map.depthTexture=new jo(o.x,o.y,er)),W.map.depthTexture.name=Z.name+".shadowMap",W.map.depthTexture.format=Ar,this.type===Jc?(W.map.depthTexture.compareFunction=se?Ip:Np,W.map.depthTexture.minFilter=kn,W.map.depthTexture.magFilter=kn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Rn,W.map.depthTexture.magFilter=Rn);W.camera.updateProjectionMatrix()}const j=W.map.isWebGLCubeRenderTarget?6:1;for(let B=0;B<j;B++){if(W.map.isWebGLCubeRenderTarget)n.setRenderTarget(W.map,B),n.clear();else{B===0&&(n.setRenderTarget(W.map),n.clear());const ee=W.getViewport(B);c.set(a.x*ee.x,a.y*ee.y,a.x*ee.z,a.y*ee.w),q.viewport(c)}if(Z.isPointLight){const ee=W.camera,Ue=W.matrix,Be=Z.distance||ee.far;Be!==ee.far&&(ee.far=Be,ee.updateProjectionMatrix()),ja.setFromMatrixPosition(Z.matrixWorld),ee.position.copy(ja),th.copy(ee.position),th.add(sR[B]),ee.up.copy(oR[B]),ee.lookAt(th),ee.updateMatrixWorld(),Ue.makeTranslation(-ja.x,-ja.y,-ja.z),qv.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),W._frustum.setFromProjectionMatrix(qv,ee.coordinateSystem,ee.reversedDepth)}else W.updateMatrices(Z);r=W.getFrustum(),D(k,E,W.camera,Z,this.type)}W.isPointLightShadow!==!0&&this.type===qa&&A(W,E),W.needsUpdate=!1}S=this.type,y.needsUpdate=!1,n.setRenderTarget(F,z,U)};function A(L,k){const E=e.update(b);v.defines.VSM_SAMPLES!==L.blurSamples&&(v.defines.VSM_SAMPLES=L.blurSamples,_.defines.VSM_SAMPLES=L.blurSamples,v.needsUpdate=!0,_.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Ki(o.x,o.y,{format:Ws,type:Tr})),v.uniforms.shadow_pass.value=L.map.depthTexture,v.uniforms.resolution.value=L.mapSize,v.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(k,null,E,v,b,null),_.uniforms.shadow_pass.value=L.mapPass.texture,_.uniforms.resolution.value=L.mapSize,_.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(k,null,E,_,b,null)}function P(L,k,E,F){let z=null;const U=E.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(U!==void 0)z=U;else if(z=E.isPointLight===!0?f:u,n.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const q=z.uuid,re=k.uuid;let ue=h[q];ue===void 0&&(ue={},h[q]=ue);let G=ue[re];G===void 0&&(G=z.clone(),ue[re]=G,k.addEventListener("dispose",I)),z=G}if(z.visible=k.visible,z.wireframe=k.wireframe,F===qa?z.side=k.shadowSide!==null?k.shadowSide:k.side:z.side=k.shadowSide!==null?k.shadowSide:g[k.side],z.alphaMap=k.alphaMap,z.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,z.map=k.map,z.clipShadows=k.clipShadows,z.clippingPlanes=k.clippingPlanes,z.clipIntersection=k.clipIntersection,z.displacementMap=k.displacementMap,z.displacementScale=k.displacementScale,z.displacementBias=k.displacementBias,z.wireframeLinewidth=k.wireframeLinewidth,z.linewidth=k.linewidth,E.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const q=n.properties.get(z);q.light=E}return z}function D(L,k,E,F,z){if(L.visible===!1)return;if(L.layers.test(k.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&z===qa)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,L.matrixWorld);const re=e.update(L),ue=L.material;if(Array.isArray(ue)){const G=re.groups;for(let Z=0,W=G.length;Z<W;Z++){const Y=G[Z],se=ue[Y.materialIndex];if(se&&se.visible){const j=P(L,se,F,z);L.onBeforeShadow(n,L,k,E,re,j,Y),n.renderBufferDirect(E,null,re,j,L,Y),L.onAfterShadow(n,L,k,E,re,j,Y)}}}else if(ue.visible){const G=P(L,ue,F,z);L.onBeforeShadow(n,L,k,E,re,G,null),n.renderBufferDirect(E,null,re,G,L,null),L.onAfterShadow(n,L,k,E,re,G,null)}}const q=L.children;for(let re=0,ue=q.length;re<ue;re++)D(q[re],k,E,F,z)}function I(L){L.target.removeEventListener("dispose",I);for(const E in h){const F=h[E],z=L.target.uuid;z in F&&(F[z].dispose(),delete F[z])}}}function lR(n,e){function t(){let H=!1;const Ce=new ln;let he=null;const Oe=new ln(0,0,0,0);return{setMask:function(De){he!==De&&!H&&(n.colorMask(De,De,De,De),he=De)},setLocked:function(De){H=De},setClear:function(De,_e,qe,ut,zt){zt===!0&&(De*=ut,_e*=ut,qe*=ut),Ce.set(De,_e,qe,ut),Oe.equals(Ce)===!1&&(n.clearColor(De,_e,qe,ut),Oe.copy(Ce))},reset:function(){H=!1,he=null,Oe.set(-1,0,0,0)}}}function r(){let H=!1,Ce=!1,he=null,Oe=null,De=null;return{setReversed:function(_e){if(Ce!==_e){const qe=e.get("EXT_clip_control");_e?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),Ce=_e;const ut=De;De=null,this.setClear(ut)}},getReversed:function(){return Ce},setTest:function(_e){_e?ge(n.DEPTH_TEST):Ee(n.DEPTH_TEST)},setMask:function(_e){he!==_e&&!H&&(n.depthMask(_e),he=_e)},setFunc:function(_e){if(Ce&&(_e=jw[_e]),Oe!==_e){switch(_e){case _h:n.depthFunc(n.NEVER);break;case yh:n.depthFunc(n.ALWAYS);break;case Sh:n.depthFunc(n.LESS);break;case Ho:n.depthFunc(n.LEQUAL);break;case Mh:n.depthFunc(n.EQUAL);break;case Eh:n.depthFunc(n.GEQUAL);break;case wh:n.depthFunc(n.GREATER);break;case bh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Oe=_e}},setLocked:function(_e){H=_e},setClear:function(_e){De!==_e&&(De=_e,Ce&&(_e=1-_e),n.clearDepth(_e))},reset:function(){H=!1,he=null,Oe=null,De=null,Ce=!1}}}function o(){let H=!1,Ce=null,he=null,Oe=null,De=null,_e=null,qe=null,ut=null,zt=null;return{setTest:function(Ct){H||(Ct?ge(n.STENCIL_TEST):Ee(n.STENCIL_TEST))},setMask:function(Ct){Ce!==Ct&&!H&&(n.stencilMask(Ct),Ce=Ct)},setFunc:function(Ct,On,li){(he!==Ct||Oe!==On||De!==li)&&(n.stencilFunc(Ct,On,li),he=Ct,Oe=On,De=li)},setOp:function(Ct,On,li){(_e!==Ct||qe!==On||ut!==li)&&(n.stencilOp(Ct,On,li),_e=Ct,qe=On,ut=li)},setLocked:function(Ct){H=Ct},setClear:function(Ct){zt!==Ct&&(n.clearStencil(Ct),zt=Ct)},reset:function(){H=!1,Ce=null,he=null,Oe=null,De=null,_e=null,qe=null,ut=null,zt=null}}}const a=new t,c=new r,u=new o,f=new WeakMap,h=new WeakMap;let p={},g={},v={},_=new WeakMap,M=[],b=null,y=!1,S=null,A=null,P=null,D=null,I=null,L=null,k=null,E=new Ot(0,0,0),F=0,z=!1,U=null,q=null,re=null,ue=null,G=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Y=0;const se=n.getParameter(n.VERSION);se.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(se)[1]),W=Y>=1):se.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),W=Y>=2);let j=null,B={};const ee=n.getParameter(n.SCISSOR_BOX),Ue=n.getParameter(n.VIEWPORT),Be=new ln().fromArray(ee),be=new ln().fromArray(Ue);function te(H,Ce,he,Oe){const De=new Uint8Array(4),_e=n.createTexture();n.bindTexture(H,_e),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qe=0;qe<he;qe++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(Ce,0,n.RGBA,1,1,Oe,0,n.RGBA,n.UNSIGNED_BYTE,De):n.texImage2D(Ce+qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,De);return _e}const xe={};xe[n.TEXTURE_2D]=te(n.TEXTURE_2D,n.TEXTURE_2D,1),xe[n.TEXTURE_CUBE_MAP]=te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[n.TEXTURE_2D_ARRAY]=te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),xe[n.TEXTURE_3D]=te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),u.setClear(0),ge(n.DEPTH_TEST),c.setFunc(Ho),Qt(!1),Gt(Z0),ge(n.CULL_FACE),kt(Sr);function ge(H){p[H]!==!0&&(n.enable(H),p[H]=!0)}function Ee(H){p[H]!==!1&&(n.disable(H),p[H]=!1)}function Qe(H,Ce){return v[H]!==Ce?(n.bindFramebuffer(H,Ce),v[H]=Ce,H===n.DRAW_FRAMEBUFFER&&(v[n.FRAMEBUFFER]=Ce),H===n.FRAMEBUFFER&&(v[n.DRAW_FRAMEBUFFER]=Ce),!0):!1}function tt(H,Ce){let he=M,Oe=!1;if(H){he=_.get(Ce),he===void 0&&(he=[],_.set(Ce,he));const De=H.textures;if(he.length!==De.length||he[0]!==n.COLOR_ATTACHMENT0){for(let _e=0,qe=De.length;_e<qe;_e++)he[_e]=n.COLOR_ATTACHMENT0+_e;he.length=De.length,Oe=!0}}else he[0]!==n.BACK&&(he[0]=n.BACK,Oe=!0);Oe&&n.drawBuffers(he)}function Pt(H){return b!==H?(n.useProgram(H),b=H,!0):!1}const lt={[Us]:n.FUNC_ADD,[pw]:n.FUNC_SUBTRACT,[mw]:n.FUNC_REVERSE_SUBTRACT};lt[gw]=n.MIN,lt[vw]=n.MAX;const Mt={[xw]:n.ZERO,[_w]:n.ONE,[yw]:n.SRC_COLOR,[vh]:n.SRC_ALPHA,[Tw]:n.SRC_ALPHA_SATURATE,[ww]:n.DST_COLOR,[Mw]:n.DST_ALPHA,[Sw]:n.ONE_MINUS_SRC_COLOR,[xh]:n.ONE_MINUS_SRC_ALPHA,[bw]:n.ONE_MINUS_DST_COLOR,[Ew]:n.ONE_MINUS_DST_ALPHA,[Aw]:n.CONSTANT_COLOR,[Cw]:n.ONE_MINUS_CONSTANT_COLOR,[Rw]:n.CONSTANT_ALPHA,[Pw]:n.ONE_MINUS_CONSTANT_ALPHA};function kt(H,Ce,he,Oe,De,_e,qe,ut,zt,Ct){if(H===Sr){y===!0&&(Ee(n.BLEND),y=!1);return}if(y===!1&&(ge(n.BLEND),y=!0),H!==hw){if(H!==S||Ct!==z){if((A!==Us||I!==Us)&&(n.blendEquation(n.FUNC_ADD),A=Us,I=Us),Ct)switch(H){case Vo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Q0:n.blendFunc(n.ONE,n.ONE);break;case J0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ev:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:At("WebGLState: Invalid blending: ",H);break}else switch(H){case Vo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Q0:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case J0:At("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ev:At("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:At("WebGLState: Invalid blending: ",H);break}P=null,D=null,L=null,k=null,E.set(0,0,0),F=0,S=H,z=Ct}return}De=De||Ce,_e=_e||he,qe=qe||Oe,(Ce!==A||De!==I)&&(n.blendEquationSeparate(lt[Ce],lt[De]),A=Ce,I=De),(he!==P||Oe!==D||_e!==L||qe!==k)&&(n.blendFuncSeparate(Mt[he],Mt[Oe],Mt[_e],Mt[qe]),P=he,D=Oe,L=_e,k=qe),(ut.equals(E)===!1||zt!==F)&&(n.blendColor(ut.r,ut.g,ut.b,zt),E.copy(ut),F=zt),S=H,z=!1}function pt(H,Ce){H.side===_r?Ee(n.CULL_FACE):ge(n.CULL_FACE);let he=H.side===Qn;Ce&&(he=!he),Qt(he),H.blending===Vo&&H.transparent===!1?kt(Sr):kt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),c.setFunc(H.depthFunc),c.setTest(H.depthTest),c.setMask(H.depthWrite),a.setMask(H.colorWrite);const Oe=H.stencilWrite;u.setTest(Oe),Oe&&(u.setMask(H.stencilWriteMask),u.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),u.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),X(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ge(n.SAMPLE_ALPHA_TO_COVERAGE):Ee(n.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(H){U!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),U=H)}function Gt(H){H!==uw?(ge(n.CULL_FACE),H!==q&&(H===Z0?n.cullFace(n.BACK):H===dw?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ee(n.CULL_FACE),q=H}function bn(H){H!==re&&(W&&n.lineWidth(H),re=H)}function X(H,Ce,he){H?(ge(n.POLYGON_OFFSET_FILL),(ue!==Ce||G!==he)&&(ue=Ce,G=he,c.getReversed()&&(Ce=-Ce),n.polygonOffset(Ce,he))):Ee(n.POLYGON_OFFSET_FILL)}function Ht(H){H?ge(n.SCISSOR_TEST):Ee(n.SCISSOR_TEST)}function mt(H){H===void 0&&(H=n.TEXTURE0+Z-1),j!==H&&(n.activeTexture(H),j=H)}function Nt(H,Ce,he){he===void 0&&(j===null?he=n.TEXTURE0+Z-1:he=j);let Oe=B[he];Oe===void 0&&(Oe={type:void 0,texture:void 0},B[he]=Oe),(Oe.type!==H||Oe.texture!==Ce)&&(j!==he&&(n.activeTexture(he),j=he),n.bindTexture(H,Ce||xe[H]),Oe.type=H,Oe.texture=Ce)}function Ie(){const H=B[j];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Xt(){try{n.compressedTexImage2D(...arguments)}catch(H){At("WebGLState:",H)}}function N(){try{n.compressedTexImage3D(...arguments)}catch(H){At("WebGLState:",H)}}function w(){try{n.texSubImage2D(...arguments)}catch(H){At("WebGLState:",H)}}function Q(){try{n.texSubImage3D(...arguments)}catch(H){At("WebGLState:",H)}}function pe(){try{n.compressedTexSubImage2D(...arguments)}catch(H){At("WebGLState:",H)}}function ve(){try{n.compressedTexSubImage3D(...arguments)}catch(H){At("WebGLState:",H)}}function we(){try{n.texStorage2D(...arguments)}catch(H){At("WebGLState:",H)}}function Ne(){try{n.texStorage3D(...arguments)}catch(H){At("WebGLState:",H)}}function fe(){try{n.texImage2D(...arguments)}catch(H){At("WebGLState:",H)}}function me(){try{n.texImage3D(...arguments)}catch(H){At("WebGLState:",H)}}function ke(H){return g[H]!==void 0?g[H]:n.getParameter(H)}function ze(H,Ce){g[H]!==Ce&&(n.pixelStorei(H,Ce),g[H]=Ce)}function Re(H){Be.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),Be.copy(H))}function Te(H){be.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),be.copy(H))}function st(H,Ce){let he=h.get(Ce);he===void 0&&(he=new WeakMap,h.set(Ce,he));let Oe=he.get(H);Oe===void 0&&(Oe=n.getUniformBlockIndex(Ce,H.name),he.set(H,Oe))}function ct(H,Ce){const Oe=h.get(Ce).get(H);f.get(Ce)!==Oe&&(n.uniformBlockBinding(Ce,Oe,H.__bindingPointIndex),f.set(Ce,Oe))}function vt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),c.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),p={},g={},j=null,B={},v={},_=new WeakMap,M=[],b=null,y=!1,S=null,A=null,P=null,D=null,I=null,L=null,k=null,E=new Ot(0,0,0),F=0,z=!1,U=null,q=null,re=null,ue=null,G=null,Be.set(0,0,n.canvas.width,n.canvas.height),be.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),u.reset()}return{buffers:{color:a,depth:c,stencil:u},enable:ge,disable:Ee,bindFramebuffer:Qe,drawBuffers:tt,useProgram:Pt,setBlending:kt,setMaterial:pt,setFlipSided:Qt,setCullFace:Gt,setLineWidth:bn,setPolygonOffset:X,setScissorTest:Ht,activeTexture:mt,bindTexture:Nt,unbindTexture:Ie,compressedTexImage2D:Xt,compressedTexImage3D:N,texImage2D:fe,texImage3D:me,pixelStorei:ze,getParameter:ke,updateUBOMapping:st,uniformBlockBinding:ct,texStorage2D:we,texStorage3D:Ne,texSubImage2D:w,texSubImage3D:Q,compressedTexSubImage2D:pe,compressedTexSubImage3D:ve,scissor:Re,viewport:Te,reset:vt}}function cR(n,e,t,r,o,a,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Dt,p=new WeakMap,g=new Set;let v;const _=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(N,w){return M?new OffscreenCanvas(N,w):pu("canvas")}function y(N,w,Q){let pe=1;const ve=Xt(N);if((ve.width>Q||ve.height>Q)&&(pe=Q/Math.max(ve.width,ve.height)),pe<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const we=Math.floor(pe*ve.width),Ne=Math.floor(pe*ve.height);v===void 0&&(v=b(we,Ne));const fe=w?b(we,Ne):v;return fe.width=we,fe.height=Ne,fe.getContext("2d").drawImage(N,0,0,we,Ne),at("WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+we+"x"+Ne+")."),fe}else return"data"in N&&at("WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),N;return N}function S(N){return N.generateMipmaps}function A(N){n.generateMipmap(N)}function P(N){return N.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?n.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function D(N,w,Q,pe,ve,we=!1){if(N!==null){if(n[N]!==void 0)return n[N];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Ne;pe&&(Ne=e.get("EXT_texture_norm16"),Ne||at("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let fe=w;if(w===n.RED&&(Q===n.FLOAT&&(fe=n.R32F),Q===n.HALF_FLOAT&&(fe=n.R16F),Q===n.UNSIGNED_BYTE&&(fe=n.R8),Q===n.UNSIGNED_SHORT&&Ne&&(fe=Ne.R16_EXT),Q===n.SHORT&&Ne&&(fe=Ne.R16_SNORM_EXT)),w===n.RED_INTEGER&&(Q===n.UNSIGNED_BYTE&&(fe=n.R8UI),Q===n.UNSIGNED_SHORT&&(fe=n.R16UI),Q===n.UNSIGNED_INT&&(fe=n.R32UI),Q===n.BYTE&&(fe=n.R8I),Q===n.SHORT&&(fe=n.R16I),Q===n.INT&&(fe=n.R32I)),w===n.RG&&(Q===n.FLOAT&&(fe=n.RG32F),Q===n.HALF_FLOAT&&(fe=n.RG16F),Q===n.UNSIGNED_BYTE&&(fe=n.RG8),Q===n.UNSIGNED_SHORT&&Ne&&(fe=Ne.RG16_EXT),Q===n.SHORT&&Ne&&(fe=Ne.RG16_SNORM_EXT)),w===n.RG_INTEGER&&(Q===n.UNSIGNED_BYTE&&(fe=n.RG8UI),Q===n.UNSIGNED_SHORT&&(fe=n.RG16UI),Q===n.UNSIGNED_INT&&(fe=n.RG32UI),Q===n.BYTE&&(fe=n.RG8I),Q===n.SHORT&&(fe=n.RG16I),Q===n.INT&&(fe=n.RG32I)),w===n.RGB_INTEGER&&(Q===n.UNSIGNED_BYTE&&(fe=n.RGB8UI),Q===n.UNSIGNED_SHORT&&(fe=n.RGB16UI),Q===n.UNSIGNED_INT&&(fe=n.RGB32UI),Q===n.BYTE&&(fe=n.RGB8I),Q===n.SHORT&&(fe=n.RGB16I),Q===n.INT&&(fe=n.RGB32I)),w===n.RGBA_INTEGER&&(Q===n.UNSIGNED_BYTE&&(fe=n.RGBA8UI),Q===n.UNSIGNED_SHORT&&(fe=n.RGBA16UI),Q===n.UNSIGNED_INT&&(fe=n.RGBA32UI),Q===n.BYTE&&(fe=n.RGBA8I),Q===n.SHORT&&(fe=n.RGBA16I),Q===n.INT&&(fe=n.RGBA32I)),w===n.RGB&&(Q===n.UNSIGNED_SHORT&&Ne&&(fe=Ne.RGB16_EXT),Q===n.SHORT&&Ne&&(fe=Ne.RGB16_SNORM_EXT),Q===n.UNSIGNED_INT_5_9_9_9_REV&&(fe=n.RGB9_E5),Q===n.UNSIGNED_INT_10F_11F_11F_REV&&(fe=n.R11F_G11F_B10F)),w===n.RGBA){const me=we?fu:Et.getTransfer(ve);Q===n.FLOAT&&(fe=n.RGBA32F),Q===n.HALF_FLOAT&&(fe=n.RGBA16F),Q===n.UNSIGNED_BYTE&&(fe=me===Ft?n.SRGB8_ALPHA8:n.RGBA8),Q===n.UNSIGNED_SHORT&&Ne&&(fe=Ne.RGBA16_EXT),Q===n.SHORT&&Ne&&(fe=Ne.RGBA16_SNORM_EXT),Q===n.UNSIGNED_SHORT_4_4_4_4&&(fe=n.RGBA4),Q===n.UNSIGNED_SHORT_5_5_5_1&&(fe=n.RGB5_A1)}return(fe===n.R16F||fe===n.R32F||fe===n.RG16F||fe===n.RG32F||fe===n.RGBA16F||fe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function I(N,w){let Q;return N?w===null||w===er||w===sl?Q=n.DEPTH24_STENCIL8:w===$i?Q=n.DEPTH32F_STENCIL8:w===rl&&(Q=n.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===er||w===sl?Q=n.DEPTH_COMPONENT24:w===$i?Q=n.DEPTH_COMPONENT32F:w===rl&&(Q=n.DEPTH_COMPONENT16),Q}function L(N,w){return S(N)===!0||N.isFramebufferTexture&&N.minFilter!==Rn&&N.minFilter!==kn?Math.log2(Math.max(w.width,w.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?w.mipmaps.length:1}function k(N){const w=N.target;w.removeEventListener("dispose",k),F(w),w.isVideoTexture&&p.delete(w),w.isHTMLTexture&&g.delete(w)}function E(N){const w=N.target;w.removeEventListener("dispose",E),U(w)}function F(N){const w=r.get(N);if(w.__webglInit===void 0)return;const Q=N.source,pe=_.get(Q);if(pe){const ve=pe[w.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&z(N),Object.keys(pe).length===0&&_.delete(Q)}r.remove(N)}function z(N){const w=r.get(N);n.deleteTexture(w.__webglTexture);const Q=N.source,pe=_.get(Q);delete pe[w.__cacheKey],c.memory.textures--}function U(N){const w=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(w.__webglFramebuffer[pe]))for(let ve=0;ve<w.__webglFramebuffer[pe].length;ve++)n.deleteFramebuffer(w.__webglFramebuffer[pe][ve]);else n.deleteFramebuffer(w.__webglFramebuffer[pe]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[pe])}else{if(Array.isArray(w.__webglFramebuffer))for(let pe=0;pe<w.__webglFramebuffer.length;pe++)n.deleteFramebuffer(w.__webglFramebuffer[pe]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let pe=0;pe<w.__webglColorRenderbuffer.length;pe++)w.__webglColorRenderbuffer[pe]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[pe]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Q=N.textures;for(let pe=0,ve=Q.length;pe<ve;pe++){const we=r.get(Q[pe]);we.__webglTexture&&(n.deleteTexture(we.__webglTexture),c.memory.textures--),r.remove(Q[pe])}r.remove(N)}let q=0;function re(){q=0}function ue(){return q}function G(N){q=N}function Z(){const N=q;return N>=o.maxTextures&&at("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+o.maxTextures),q+=1,N}function W(N){const w=[];return w.push(N.wrapS),w.push(N.wrapT),w.push(N.wrapR||0),w.push(N.magFilter),w.push(N.minFilter),w.push(N.anisotropy),w.push(N.internalFormat),w.push(N.format),w.push(N.type),w.push(N.generateMipmaps),w.push(N.premultiplyAlpha),w.push(N.flipY),w.push(N.unpackAlignment),w.push(N.colorSpace),w.join()}function Y(N,w){const Q=r.get(N);if(N.isVideoTexture&&Nt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&Q.__version!==N.version){const pe=N.image;if(pe===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(Q,N,w);return}}else N.isExternalTexture&&(Q.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Q.__webglTexture,n.TEXTURE0+w)}function se(N,w){const Q=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Q.__version!==N.version){Ee(Q,N,w);return}else N.isExternalTexture&&(Q.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,Q.__webglTexture,n.TEXTURE0+w)}function j(N,w){const Q=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Q.__version!==N.version){Ee(Q,N,w);return}t.bindTexture(n.TEXTURE_3D,Q.__webglTexture,n.TEXTURE0+w)}function B(N,w){const Q=r.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&Q.__version!==N.version){Qe(Q,N,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture,n.TEXTURE0+w)}const ee={[Th]:n.REPEAT,[yr]:n.CLAMP_TO_EDGE,[Ah]:n.MIRRORED_REPEAT},Ue={[Rn]:n.NEAREST,[Nw]:n.NEAREST_MIPMAP_NEAREST,[Ec]:n.NEAREST_MIPMAP_LINEAR,[kn]:n.LINEAR,[bf]:n.LINEAR_MIPMAP_NEAREST,[ks]:n.LINEAR_MIPMAP_LINEAR},Be={[Fw]:n.NEVER,[Vw]:n.ALWAYS,[kw]:n.LESS,[Np]:n.LEQUAL,[Ow]:n.EQUAL,[Ip]:n.GEQUAL,[Bw]:n.GREATER,[zw]:n.NOTEQUAL};function be(N,w){if(w.type===$i&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===kn||w.magFilter===bf||w.magFilter===Ec||w.magFilter===ks||w.minFilter===kn||w.minFilter===bf||w.minFilter===Ec||w.minFilter===ks)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(N,n.TEXTURE_WRAP_S,ee[w.wrapS]),n.texParameteri(N,n.TEXTURE_WRAP_T,ee[w.wrapT]),(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)&&n.texParameteri(N,n.TEXTURE_WRAP_R,ee[w.wrapR]),n.texParameteri(N,n.TEXTURE_MAG_FILTER,Ue[w.magFilter]),n.texParameteri(N,n.TEXTURE_MIN_FILTER,Ue[w.minFilter]),w.compareFunction&&(n.texParameteri(N,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(N,n.TEXTURE_COMPARE_FUNC,Be[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Rn||w.minFilter!==Ec&&w.minFilter!==ks||w.type===$i&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");n.texParameterf(N,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function te(N,w){let Q=!1;N.__webglInit===void 0&&(N.__webglInit=!0,w.addEventListener("dispose",k));const pe=w.source;let ve=_.get(pe);ve===void 0&&(ve={},_.set(pe,ve));const we=W(w);if(we!==N.__cacheKey){ve[we]===void 0&&(ve[we]={texture:n.createTexture(),usedTimes:0},c.memory.textures++,Q=!0),ve[we].usedTimes++;const Ne=ve[N.__cacheKey];Ne!==void 0&&(ve[N.__cacheKey].usedTimes--,Ne.usedTimes===0&&z(w)),N.__cacheKey=we,N.__webglTexture=ve[we].texture}return Q}function xe(N,w,Q){return Math.floor(Math.floor(N/Q)/w)}function ge(N,w,Q,pe){const we=N.updateRanges;if(we.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,Q,pe,w.data);else{we.sort((ze,Re)=>ze.start-Re.start);let Ne=0;for(let ze=1;ze<we.length;ze++){const Re=we[Ne],Te=we[ze],st=Re.start+Re.count,ct=xe(Te.start,w.width,4),vt=xe(Re.start,w.width,4);Te.start<=st+1&&ct===vt&&xe(Te.start+Te.count-1,w.width,4)===ct?Re.count=Math.max(Re.count,Te.start+Te.count-Re.start):(++Ne,we[Ne]=Te)}we.length=Ne+1;const fe=t.getParameter(n.UNPACK_ROW_LENGTH),me=t.getParameter(n.UNPACK_SKIP_PIXELS),ke=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,w.width);for(let ze=0,Re=we.length;ze<Re;ze++){const Te=we[ze],st=Math.floor(Te.start/4),ct=Math.ceil(Te.count/4),vt=st%w.width,H=Math.floor(st/w.width),Ce=ct,he=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,vt),t.pixelStorei(n.UNPACK_SKIP_ROWS,H),t.texSubImage2D(n.TEXTURE_2D,0,vt,H,Ce,he,Q,pe,w.data)}N.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,fe),t.pixelStorei(n.UNPACK_SKIP_PIXELS,me),t.pixelStorei(n.UNPACK_SKIP_ROWS,ke)}}function Ee(N,w,Q){let pe=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(pe=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(pe=n.TEXTURE_3D);const ve=te(N,w),we=w.source;t.bindTexture(pe,N.__webglTexture,n.TEXTURE0+Q);const Ne=r.get(we);if(we.version!==Ne.__version||ve===!0){if(t.activeTexture(n.TEXTURE0+Q),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const he=Et.getPrimaries(Et.workingColorSpace),Oe=w.colorSpace===ss?null:Et.getPrimaries(w.colorSpace),De=w.colorSpace===ss||he===Oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De)}t.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment);let me=y(w.image,!1,o.maxTextureSize);me=Ie(w,me);const ke=a.convert(w.format,w.colorSpace),ze=a.convert(w.type);let Re=D(w.internalFormat,ke,ze,w.normalized,w.colorSpace,w.isVideoTexture);be(pe,w);let Te;const st=w.mipmaps,ct=w.isVideoTexture!==!0,vt=Ne.__version===void 0||ve===!0,H=we.dataReady,Ce=L(w,me);if(w.isDepthTexture)Re=I(w.format===Os,w.type),vt&&(ct?t.texStorage2D(n.TEXTURE_2D,1,Re,me.width,me.height):t.texImage2D(n.TEXTURE_2D,0,Re,me.width,me.height,0,ke,ze,null));else if(w.isDataTexture)if(st.length>0){ct&&vt&&t.texStorage2D(n.TEXTURE_2D,Ce,Re,st[0].width,st[0].height);for(let he=0,Oe=st.length;he<Oe;he++)Te=st[he],ct?H&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,Te.width,Te.height,ke,ze,Te.data):t.texImage2D(n.TEXTURE_2D,he,Re,Te.width,Te.height,0,ke,ze,Te.data);w.generateMipmaps=!1}else ct?(vt&&t.texStorage2D(n.TEXTURE_2D,Ce,Re,me.width,me.height),H&&ge(w,me,ke,ze)):t.texImage2D(n.TEXTURE_2D,0,Re,me.width,me.height,0,ke,ze,me.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ct&&vt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,Re,st[0].width,st[0].height,me.depth);for(let he=0,Oe=st.length;he<Oe;he++)if(Te=st[he],w.format!==Ii)if(ke!==null)if(ct){if(H)if(w.layerUpdates.size>0){const De=bv(Te.width,Te.height,w.format,w.type);for(const _e of w.layerUpdates){const qe=Te.data.subarray(_e*De/Te.data.BYTES_PER_ELEMENT,(_e+1)*De/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,_e,Te.width,Te.height,1,ke,qe)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,Te.width,Te.height,me.depth,ke,Te.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,he,Re,Te.width,Te.height,me.depth,0,Te.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ct?H&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,Te.width,Te.height,me.depth,ke,ze,Te.data):t.texImage3D(n.TEXTURE_2D_ARRAY,he,Re,Te.width,Te.height,me.depth,0,ke,ze,Te.data)}else{ct&&vt&&t.texStorage2D(n.TEXTURE_2D,Ce,Re,st[0].width,st[0].height);for(let he=0,Oe=st.length;he<Oe;he++)Te=st[he],w.format!==Ii?ke!==null?ct?H&&t.compressedTexSubImage2D(n.TEXTURE_2D,he,0,0,Te.width,Te.height,ke,Te.data):t.compressedTexImage2D(n.TEXTURE_2D,he,Re,Te.width,Te.height,0,Te.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?H&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,Te.width,Te.height,ke,ze,Te.data):t.texImage2D(n.TEXTURE_2D,he,Re,Te.width,Te.height,0,ke,ze,Te.data)}else if(w.isDataArrayTexture)if(ct){if(vt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,Re,me.width,me.height,me.depth),H)if(w.layerUpdates.size>0){const he=bv(me.width,me.height,w.format,w.type);for(const Oe of w.layerUpdates){const De=me.data.subarray(Oe*he/me.data.BYTES_PER_ELEMENT,(Oe+1)*he/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Oe,me.width,me.height,1,ke,ze,De)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,ke,ze,me.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Re,me.width,me.height,me.depth,0,ke,ze,me.data);else if(w.isData3DTexture)ct?(vt&&t.texStorage3D(n.TEXTURE_3D,Ce,Re,me.width,me.height,me.depth),H&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,ke,ze,me.data)):t.texImage3D(n.TEXTURE_3D,0,Re,me.width,me.height,me.depth,0,ke,ze,me.data);else if(w.isFramebufferTexture){if(vt)if(ct)t.texStorage2D(n.TEXTURE_2D,Ce,Re,me.width,me.height);else{let he=me.width,Oe=me.height;for(let De=0;De<Ce;De++)t.texImage2D(n.TEXTURE_2D,De,Re,he,Oe,0,ke,ze,null),he>>=1,Oe>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in n){const he=n.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),me.parentNode!==he){he.appendChild(me),g.add(w),he.onpaint=ut=>{const zt=ut.changedElements;for(const Ct of g)zt.includes(Ct.image)&&(Ct.needsUpdate=!0)},he.requestPaint();return}const Oe=0,De=n.RGBA,_e=n.RGBA,qe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,Oe,De,_e,qe,me),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(st.length>0){if(ct&&vt){const he=Xt(st[0]);t.texStorage2D(n.TEXTURE_2D,Ce,Re,he.width,he.height)}for(let he=0,Oe=st.length;he<Oe;he++)Te=st[he],ct?H&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,ke,ze,Te):t.texImage2D(n.TEXTURE_2D,he,Re,ke,ze,Te);w.generateMipmaps=!1}else if(ct){if(vt){const he=Xt(me);t.texStorage2D(n.TEXTURE_2D,Ce,Re,he.width,he.height)}H&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ke,ze,me)}else t.texImage2D(n.TEXTURE_2D,0,Re,ke,ze,me);S(w)&&A(pe),Ne.__version=we.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function Qe(N,w,Q){if(w.image.length!==6)return;const pe=te(N,w),ve=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+Q);const we=r.get(ve);if(ve.version!==we.__version||pe===!0){t.activeTexture(n.TEXTURE0+Q);const Ne=Et.getPrimaries(Et.workingColorSpace),fe=w.colorSpace===ss?null:Et.getPrimaries(w.colorSpace),me=w.colorSpace===ss||Ne===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const ke=w.isCompressedTexture||w.image[0].isCompressedTexture,ze=w.image[0]&&w.image[0].isDataTexture,Re=[];for(let _e=0;_e<6;_e++)!ke&&!ze?Re[_e]=y(w.image[_e],!0,o.maxCubemapSize):Re[_e]=ze?w.image[_e].image:w.image[_e],Re[_e]=Ie(w,Re[_e]);const Te=Re[0],st=a.convert(w.format,w.colorSpace),ct=a.convert(w.type),vt=D(w.internalFormat,st,ct,w.normalized,w.colorSpace),H=w.isVideoTexture!==!0,Ce=we.__version===void 0||pe===!0,he=ve.dataReady;let Oe=L(w,Te);be(n.TEXTURE_CUBE_MAP,w);let De;if(ke){H&&Ce&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Oe,vt,Te.width,Te.height);for(let _e=0;_e<6;_e++){De=Re[_e].mipmaps;for(let qe=0;qe<De.length;qe++){const ut=De[qe];w.format!==Ii?st!==null?H?he&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,qe,0,0,ut.width,ut.height,st,ut.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,qe,vt,ut.width,ut.height,0,ut.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,qe,0,0,ut.width,ut.height,st,ct,ut.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,qe,vt,ut.width,ut.height,0,st,ct,ut.data)}}}else{if(De=w.mipmaps,H&&Ce){De.length>0&&Oe++;const _e=Xt(Re[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Oe,vt,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(ze){H?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Re[_e].width,Re[_e].height,st,ct,Re[_e].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,vt,Re[_e].width,Re[_e].height,0,st,ct,Re[_e].data);for(let qe=0;qe<De.length;qe++){const zt=De[qe].image[_e].image;H?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,qe+1,0,0,zt.width,zt.height,st,ct,zt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,qe+1,vt,zt.width,zt.height,0,st,ct,zt.data)}}else{H?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,st,ct,Re[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,vt,st,ct,Re[_e]);for(let qe=0;qe<De.length;qe++){const ut=De[qe];H?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,qe+1,0,0,st,ct,ut.image[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,qe+1,vt,st,ct,ut.image[_e])}}}S(w)&&A(n.TEXTURE_CUBE_MAP),we.__version=ve.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function tt(N,w,Q,pe,ve,we){const Ne=a.convert(Q.format,Q.colorSpace),fe=a.convert(Q.type),me=D(Q.internalFormat,Ne,fe,Q.normalized,Q.colorSpace),ke=r.get(w),ze=r.get(Q);if(ze.__renderTarget=w,!ke.__hasExternalTextures){const Re=Math.max(1,w.width>>we),Te=Math.max(1,w.height>>we);ve===n.TEXTURE_3D||ve===n.TEXTURE_2D_ARRAY?t.texImage3D(ve,we,me,Re,Te,w.depth,0,Ne,fe,null):t.texImage2D(ve,we,me,Re,Te,0,Ne,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,N),mt(w)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pe,ve,ze.__webglTexture,0,Ht(w)):(ve===n.TEXTURE_2D||ve>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,pe,ve,ze.__webglTexture,we),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pt(N,w,Q){if(n.bindRenderbuffer(n.RENDERBUFFER,N),w.depthBuffer){const pe=w.depthTexture,ve=pe&&pe.isDepthTexture?pe.type:null,we=I(w.stencilBuffer,ve),Ne=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;mt(w)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ht(w),we,w.width,w.height):Q?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ht(w),we,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,we,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ne,n.RENDERBUFFER,N)}else{const pe=w.textures;for(let ve=0;ve<pe.length;ve++){const we=pe[ve],Ne=a.convert(we.format,we.colorSpace),fe=a.convert(we.type),me=D(we.internalFormat,Ne,fe,we.normalized,we.colorSpace);mt(w)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ht(w),me,w.width,w.height):Q?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ht(w),me,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,me,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function lt(N,w,Q){const pe=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,N),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ve=r.get(w.depthTexture);if(ve.__renderTarget=w,(!ve.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),pe){if(ve.__webglInit===void 0&&(ve.__webglInit=!0,w.depthTexture.addEventListener("dispose",k)),ve.__webglTexture===void 0){ve.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ve.__webglTexture),be(n.TEXTURE_CUBE_MAP,w.depthTexture);const ke=a.convert(w.depthTexture.format),ze=a.convert(w.depthTexture.type);let Re;w.depthTexture.format===Ar?Re=n.DEPTH_COMPONENT24:w.depthTexture.format===Os&&(Re=n.DEPTH24_STENCIL8);for(let Te=0;Te<6;Te++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Re,w.width,w.height,0,ke,ze,null)}}else Y(w.depthTexture,0);const we=ve.__webglTexture,Ne=Ht(w),fe=pe?n.TEXTURE_CUBE_MAP_POSITIVE_X+Q:n.TEXTURE_2D,me=w.depthTexture.format===Os?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(w.depthTexture.format===Ar)mt(w)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,me,fe,we,0,Ne):n.framebufferTexture2D(n.FRAMEBUFFER,me,fe,we,0);else if(w.depthTexture.format===Os)mt(w)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,me,fe,we,0,Ne):n.framebufferTexture2D(n.FRAMEBUFFER,me,fe,we,0);else throw new Error("Unknown depthTexture format")}function Mt(N){const w=r.get(N),Q=N.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==N.depthTexture){const pe=N.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),pe){const ve=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,pe.removeEventListener("dispose",ve)};pe.addEventListener("dispose",ve),w.__depthDisposeCallback=ve}w.__boundDepthTexture=pe}if(N.depthTexture&&!w.__autoAllocateDepthBuffer)if(Q)for(let pe=0;pe<6;pe++)lt(w.__webglFramebuffer[pe],N,pe);else{const pe=N.texture.mipmaps;pe&&pe.length>0?lt(w.__webglFramebuffer[0],N,0):lt(w.__webglFramebuffer,N,0)}else if(Q){w.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[pe]),w.__webglDepthbuffer[pe]===void 0)w.__webglDepthbuffer[pe]=n.createRenderbuffer(),Pt(w.__webglDepthbuffer[pe],N,!1);else{const ve=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=w.__webglDepthbuffer[pe];n.bindRenderbuffer(n.RENDERBUFFER,we),n.framebufferRenderbuffer(n.FRAMEBUFFER,ve,n.RENDERBUFFER,we)}}else{const pe=N.texture.mipmaps;if(pe&&pe.length>0?t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),Pt(w.__webglDepthbuffer,N,!1);else{const ve=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,we),n.framebufferRenderbuffer(n.FRAMEBUFFER,ve,n.RENDERBUFFER,we)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function kt(N,w,Q){const pe=r.get(N);w!==void 0&&tt(pe.__webglFramebuffer,N,N.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Q!==void 0&&Mt(N)}function pt(N){const w=N.texture,Q=r.get(N),pe=r.get(w);N.addEventListener("dispose",E);const ve=N.textures,we=N.isWebGLCubeRenderTarget===!0,Ne=ve.length>1;if(Ne||(pe.__webglTexture===void 0&&(pe.__webglTexture=n.createTexture()),pe.__version=w.version,c.memory.textures++),we){Q.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(w.mipmaps&&w.mipmaps.length>0){Q.__webglFramebuffer[fe]=[];for(let me=0;me<w.mipmaps.length;me++)Q.__webglFramebuffer[fe][me]=n.createFramebuffer()}else Q.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Q.__webglFramebuffer=[];for(let fe=0;fe<w.mipmaps.length;fe++)Q.__webglFramebuffer[fe]=n.createFramebuffer()}else Q.__webglFramebuffer=n.createFramebuffer();if(Ne)for(let fe=0,me=ve.length;fe<me;fe++){const ke=r.get(ve[fe]);ke.__webglTexture===void 0&&(ke.__webglTexture=n.createTexture(),c.memory.textures++)}if(N.samples>0&&mt(N)===!1){Q.__webglMultisampledFramebuffer=n.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let fe=0;fe<ve.length;fe++){const me=ve[fe];Q.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Q.__webglColorRenderbuffer[fe]);const ke=a.convert(me.format,me.colorSpace),ze=a.convert(me.type),Re=D(me.internalFormat,ke,ze,me.normalized,me.colorSpace,N.isXRRenderTarget===!0),Te=Ht(N);n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,Re,N.width,N.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,Q.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),N.depthBuffer&&(Q.__webglDepthRenderbuffer=n.createRenderbuffer(),Pt(Q.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(we){t.bindTexture(n.TEXTURE_CUBE_MAP,pe.__webglTexture),be(n.TEXTURE_CUBE_MAP,w);for(let fe=0;fe<6;fe++)if(w.mipmaps&&w.mipmaps.length>0)for(let me=0;me<w.mipmaps.length;me++)tt(Q.__webglFramebuffer[fe][me],N,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,me);else tt(Q.__webglFramebuffer[fe],N,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);S(w)&&A(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ne){for(let fe=0,me=ve.length;fe<me;fe++){const ke=ve[fe],ze=r.get(ke);let Re=n.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Re=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Re,ze.__webglTexture),be(Re,ke),tt(Q.__webglFramebuffer,N,ke,n.COLOR_ATTACHMENT0+fe,Re,0),S(ke)&&A(Re)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(fe=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,pe.__webglTexture),be(fe,w),w.mipmaps&&w.mipmaps.length>0)for(let me=0;me<w.mipmaps.length;me++)tt(Q.__webglFramebuffer[me],N,w,n.COLOR_ATTACHMENT0,fe,me);else tt(Q.__webglFramebuffer,N,w,n.COLOR_ATTACHMENT0,fe,0);S(w)&&A(fe),t.unbindTexture()}N.depthBuffer&&Mt(N)}function Qt(N){const w=N.textures;for(let Q=0,pe=w.length;Q<pe;Q++){const ve=w[Q];if(S(ve)){const we=P(N),Ne=r.get(ve).__webglTexture;t.bindTexture(we,Ne),A(we),t.unbindTexture()}}}const Gt=[],bn=[];function X(N){if(N.samples>0){if(mt(N)===!1){const w=N.textures,Q=N.width,pe=N.height;let ve=n.COLOR_BUFFER_BIT;const we=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ne=r.get(N),fe=w.length>1;if(fe)for(let ke=0;ke<w.length;ke++)t.bindFramebuffer(n.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ne.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer);const me=N.texture.mipmaps;me&&me.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let ke=0;ke<w.length;ke++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ve|=n.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ve|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ne.__webglColorRenderbuffer[ke]);const ze=r.get(w[ke]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ze,0)}n.blitFramebuffer(0,0,Q,pe,0,0,Q,pe,ve,n.NEAREST),f===!0&&(Gt.length=0,bn.length=0,Gt.push(n.COLOR_ATTACHMENT0+ke),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Gt.push(we),bn.push(we),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,bn)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Gt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let ke=0;ke<w.length;ke++){t.bindFramebuffer(n.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.RENDERBUFFER,Ne.__webglColorRenderbuffer[ke]);const ze=r.get(w[ke]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ne.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.TEXTURE_2D,ze,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&f){const w=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function Ht(N){return Math.min(o.maxSamples,N.samples)}function mt(N){const w=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Nt(N){const w=c.render.frame;p.get(N)!==w&&(p.set(N,w),N.update())}function Ie(N,w){const Q=N.colorSpace,pe=N.format,ve=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||Q!==du&&Q!==ss&&(Et.getTransfer(Q)===Ft?(pe!==Ii||ve!==_i)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):At("WebGLTextures: Unsupported texture color space:",Q)),w}function Xt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(h.width=N.naturalWidth||N.width,h.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(h.width=N.displayWidth,h.height=N.displayHeight):(h.width=N.width,h.height=N.height),h}this.allocateTextureUnit=Z,this.resetTextureUnits=re,this.getTextureUnits=ue,this.setTextureUnits=G,this.setTexture2D=Y,this.setTexture2DArray=se,this.setTexture3D=j,this.setTextureCube=B,this.rebindTextures=kt,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=mt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function uR(n,e){function t(r,o=ss){let a;const c=Et.getTransfer(o);if(r===_i)return n.UNSIGNED_BYTE;if(r===Cp)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Rp)return n.UNSIGNED_SHORT_5_5_5_1;if(r===H_)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===W_)return n.UNSIGNED_INT_10F_11F_11F_REV;if(r===V_)return n.BYTE;if(r===G_)return n.SHORT;if(r===rl)return n.UNSIGNED_SHORT;if(r===Ap)return n.INT;if(r===er)return n.UNSIGNED_INT;if(r===$i)return n.FLOAT;if(r===Tr)return n.HALF_FLOAT;if(r===j_)return n.ALPHA;if(r===X_)return n.RGB;if(r===Ii)return n.RGBA;if(r===Ar)return n.DEPTH_COMPONENT;if(r===Os)return n.DEPTH_STENCIL;if(r===$_)return n.RED;if(r===Pp)return n.RED_INTEGER;if(r===Ws)return n.RG;if(r===Dp)return n.RG_INTEGER;if(r===Lp)return n.RGBA_INTEGER;if(r===eu||r===tu||r===nu||r===iu)if(c===Ft)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===eu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===tu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===nu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===iu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===eu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===tu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===nu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===iu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ch||r===Rh||r===Ph||r===Dh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Ch)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Rh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ph)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Dh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Lh||r===Nh||r===Ih||r===Uh||r===Fh||r===cu||r===kh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Lh||r===Nh)return c===Ft?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Ih)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(r===Uh)return a.COMPRESSED_R11_EAC;if(r===Fh)return a.COMPRESSED_SIGNED_R11_EAC;if(r===cu)return a.COMPRESSED_RG11_EAC;if(r===kh)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Oh||r===Bh||r===zh||r===Vh||r===Gh||r===Hh||r===Wh||r===jh||r===Xh||r===$h||r===qh||r===Yh||r===Kh||r===Zh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Oh)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Bh)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===zh)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Vh)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Gh)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Hh)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Wh)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===jh)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Xh)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===$h)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===qh)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Yh)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Kh)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Zh)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Qh||r===Jh||r===ep)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Qh)return c===Ft?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Jh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ep)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===tp||r===np||r===uu||r===ip)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===tp)return a.COMPRESSED_RED_RGTC1_EXT;if(r===np)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===uu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ip)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===sl?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}const dR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fR=`
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

}`;class hR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new ry(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Fi({vertexShader:dR,fragmentShader:fR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ui(new Qo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pR extends Xs{constructor(e,t){super();const r=this;let o=null,a=1,c=null,u="local-floor",f=1,h=null,p=null,g=null,v=null,_=null,M=null;const b=typeof XRWebGLBinding<"u",y=new hR,S={},A=t.getContextAttributes();let P=null,D=null;const I=[],L=[],k=new Dt;let E=null;const F=new Li;F.viewport=new ln;const z=new Li;z.viewport=new ln;const U=[F,z],q=new w1;let re=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let xe=I[te];return xe===void 0&&(xe=new Nf,I[te]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(te){let xe=I[te];return xe===void 0&&(xe=new Nf,I[te]=xe),xe.getGripSpace()},this.getHand=function(te){let xe=I[te];return xe===void 0&&(xe=new Nf,I[te]=xe),xe.getHandSpace()};function G(te){const xe=L.indexOf(te.inputSource);if(xe===-1)return;const ge=I[xe];ge!==void 0&&(ge.update(te.inputSource,te.frame,h||c),ge.dispatchEvent({type:te.type,data:te.inputSource}))}function Z(){o.removeEventListener("select",G),o.removeEventListener("selectstart",G),o.removeEventListener("selectend",G),o.removeEventListener("squeeze",G),o.removeEventListener("squeezestart",G),o.removeEventListener("squeezeend",G),o.removeEventListener("end",Z),o.removeEventListener("inputsourceschange",W);for(let te=0;te<I.length;te++){const xe=L[te];xe!==null&&(L[te]=null,I[te].disconnect(xe))}re=null,ue=null,y.reset();for(const te in S)delete S[te];e.setRenderTarget(P),_=null,v=null,g=null,o=null,D=null,be.stop(),r.isPresenting=!1,e.setPixelRatio(E),e.setSize(k.width,k.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){a=te,r.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){u=te,r.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(te){h=te},this.getBaseLayer=function(){return v!==null?v:_},this.getBinding=function(){return g===null&&b&&(g=new XRWebGLBinding(o,t)),g},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(te){if(o=te,o!==null){if(P=e.getRenderTarget(),o.addEventListener("select",G),o.addEventListener("selectstart",G),o.addEventListener("selectend",G),o.addEventListener("squeeze",G),o.addEventListener("squeezestart",G),o.addEventListener("squeezeend",G),o.addEventListener("end",Z),o.addEventListener("inputsourceschange",W),A.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(k),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,Ee=null,Qe=null;A.depth&&(Qe=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=A.stencil?Os:Ar,Ee=A.stencil?sl:er);const tt={colorFormat:t.RGBA8,depthFormat:Qe,scaleFactor:a};g=this.getBinding(),v=g.createProjectionLayer(tt),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),D=new Ki(v.textureWidth,v.textureHeight,{format:Ii,type:_i,depthTexture:new jo(v.textureWidth,v.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const ge={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:a};_=new XRWebGLLayer(o,t,ge),o.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),D=new Ki(_.framebufferWidth,_.framebufferHeight,{format:Ii,type:_i,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(f),h=null,c=await o.requestReferenceSpace(u),be.setContext(o),be.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function W(te){for(let xe=0;xe<te.removed.length;xe++){const ge=te.removed[xe],Ee=L.indexOf(ge);Ee>=0&&(L[Ee]=null,I[Ee].disconnect(ge))}for(let xe=0;xe<te.added.length;xe++){const ge=te.added[xe];let Ee=L.indexOf(ge);if(Ee===-1){for(let tt=0;tt<I.length;tt++)if(tt>=L.length){L.push(ge),Ee=tt;break}else if(L[tt]===null){L[tt]=ge,Ee=tt;break}if(Ee===-1)break}const Qe=I[Ee];Qe&&Qe.connect(ge)}}const Y=new ae,se=new ae;function j(te,xe,ge){Y.setFromMatrixPosition(xe.matrixWorld),se.setFromMatrixPosition(ge.matrixWorld);const Ee=Y.distanceTo(se),Qe=xe.projectionMatrix.elements,tt=ge.projectionMatrix.elements,Pt=Qe[14]/(Qe[10]-1),lt=Qe[14]/(Qe[10]+1),Mt=(Qe[9]+1)/Qe[5],kt=(Qe[9]-1)/Qe[5],pt=(Qe[8]-1)/Qe[0],Qt=(tt[8]+1)/tt[0],Gt=Pt*pt,bn=Pt*Qt,X=Ee/(-pt+Qt),Ht=X*-pt;if(xe.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Ht),te.translateZ(X),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Qe[10]===-1)te.projectionMatrix.copy(xe.projectionMatrix),te.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const mt=Pt+X,Nt=lt+X,Ie=Gt-Ht,Xt=bn+(Ee-Ht),N=Mt*lt/Nt*mt,w=kt*lt/Nt*mt;te.projectionMatrix.makePerspective(Ie,Xt,N,w,mt,Nt),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function B(te,xe){xe===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(xe.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(o===null)return;let xe=te.near,ge=te.far;y.texture!==null&&(y.depthNear>0&&(xe=y.depthNear),y.depthFar>0&&(ge=y.depthFar)),q.near=z.near=F.near=xe,q.far=z.far=F.far=ge,(re!==q.near||ue!==q.far)&&(o.updateRenderState({depthNear:q.near,depthFar:q.far}),re=q.near,ue=q.far),q.layers.mask=te.layers.mask|6,F.layers.mask=q.layers.mask&-5,z.layers.mask=q.layers.mask&-3;const Ee=te.parent,Qe=q.cameras;B(q,Ee);for(let tt=0;tt<Qe.length;tt++)B(Qe[tt],Ee);Qe.length===2?j(q,F,z):q.projectionMatrix.copy(F.projectionMatrix),ee(te,q,Ee)};function ee(te,xe,ge){ge===null?te.matrix.copy(xe.matrixWorld):(te.matrix.copy(ge.matrixWorld),te.matrix.invert(),te.matrix.multiply(xe.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(xe.projectionMatrix),te.projectionMatrixInverse.copy(xe.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=sp*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(v===null&&_===null))return f},this.setFoveation=function(te){f=te,v!==null&&(v.fixedFoveation=te),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=te)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(q)},this.getCameraTexture=function(te){return S[te]};let Ue=null;function Be(te,xe){if(p=xe.getViewerPose(h||c),M=xe,p!==null){const ge=p.views;_!==null&&(e.setRenderTargetFramebuffer(D,_.framebuffer),e.setRenderTarget(D));let Ee=!1;ge.length!==q.cameras.length&&(q.cameras.length=0,Ee=!0);for(let lt=0;lt<ge.length;lt++){const Mt=ge[lt];let kt=null;if(_!==null)kt=_.getViewport(Mt);else{const Qt=g.getViewSubImage(v,Mt);kt=Qt.viewport,lt===0&&(e.setRenderTargetTextures(D,Qt.colorTexture,Qt.depthStencilTexture),e.setRenderTarget(D))}let pt=U[lt];pt===void 0&&(pt=new Li,pt.layers.enable(lt),pt.viewport=new ln,U[lt]=pt),pt.matrix.fromArray(Mt.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(Mt.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(kt.x,kt.y,kt.width,kt.height),lt===0&&(q.matrix.copy(pt.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Ee===!0&&q.cameras.push(pt)}const Qe=o.enabledFeatures;if(Qe&&Qe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&b){g=r.getBinding();const lt=g.getDepthInformation(ge[0]);lt&&lt.isValid&&lt.texture&&y.init(lt,o.renderState)}if(Qe&&Qe.includes("camera-access")&&b){e.state.unbindTexture(),g=r.getBinding();for(let lt=0;lt<ge.length;lt++){const Mt=ge[lt].camera;if(Mt){let kt=S[Mt];kt||(kt=new ry,S[Mt]=kt);const pt=g.getCameraImage(Mt);kt.sourceTexture=pt}}}}for(let ge=0;ge<I.length;ge++){const Ee=L[ge],Qe=I[ge];Ee!==null&&Qe!==void 0&&Qe.update(Ee,xe,h||c)}Ue&&Ue(te,xe),xe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:xe}),M=null}const be=new ly;be.setAnimationLoop(Be),this.setAnimationLoop=function(te){Ue=te},this.dispose=function(){}}}const mR=new gn,my=new ht;my.set(-1,0,0,0,1,0,0,0,1);function gR(n,e){function t(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function r(y,S){S.color.getRGB(y.fogColor.value,sy(n)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function o(y,S,A,P,D){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?a(y,S):S.isMeshLambertMaterial?(a(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(a(y,S),g(y,S)):S.isMeshPhongMaterial?(a(y,S),p(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(a(y,S),v(y,S),S.isMeshPhysicalMaterial&&_(y,S,D)):S.isMeshMatcapMaterial?(a(y,S),M(y,S)):S.isMeshDepthMaterial?a(y,S):S.isMeshDistanceMaterial?(a(y,S),b(y,S)):S.isMeshNormalMaterial?a(y,S):S.isLineBasicMaterial?(c(y,S),S.isLineDashedMaterial&&u(y,S)):S.isPointsMaterial?f(y,S,A,P):S.isSpriteMaterial?h(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function a(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,t(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===Qn&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,t(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===Qn&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,t(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,t(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const A=e.get(S),P=A.envMap,D=A.envMapRotation;P&&(y.envMap.value=P,y.envMapRotation.value.setFromMatrix4(mR.makeRotationFromEuler(D)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(my),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,y.aoMapTransform))}function c(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform))}function u(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function f(y,S,A,P){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*A,y.scale.value=P*.5,S.map&&(y.map.value=S.map,t(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function h(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function p(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function g(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function v(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function _(y,S,A){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Qn&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=A.texture,y.transmissionSamplerSize.value.set(A.width,A.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,S){S.matcap&&(y.matcap.value=S.matcap)}function b(y,S){const A=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(A.matrixWorld),y.nearDistance.value=A.shadow.camera.near,y.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function vR(n,e,t,r){let o={},a={},c=[];const u=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function f(A,P){const D=P.program;r.uniformBlockBinding(A,D)}function h(A,P){let D=o[A.id];D===void 0&&(M(A),D=p(A),o[A.id]=D,A.addEventListener("dispose",y));const I=P.program;r.updateUBOMapping(A,I);const L=e.render.frame;a[A.id]!==L&&(v(A),a[A.id]=L)}function p(A){const P=g();A.__bindingPointIndex=P;const D=n.createBuffer(),I=A.__size,L=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,D),n.bufferData(n.UNIFORM_BUFFER,I,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,P,D),D}function g(){for(let A=0;A<u;A++)if(c.indexOf(A)===-1)return c.push(A),A;return At("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(A){const P=o[A.id],D=A.uniforms,I=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,P);for(let L=0,k=D.length;L<k;L++){const E=Array.isArray(D[L])?D[L]:[D[L]];for(let F=0,z=E.length;F<z;F++){const U=E[F];if(_(U,L,F,I)===!0){const q=U.__offset,re=Array.isArray(U.value)?U.value:[U.value];let ue=0;for(let G=0;G<re.length;G++){const Z=re[G],W=b(Z);typeof Z=="number"||typeof Z=="boolean"?(U.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,q+ue,U.__data)):Z.isMatrix3?(U.__data[0]=Z.elements[0],U.__data[1]=Z.elements[1],U.__data[2]=Z.elements[2],U.__data[3]=0,U.__data[4]=Z.elements[3],U.__data[5]=Z.elements[4],U.__data[6]=Z.elements[5],U.__data[7]=0,U.__data[8]=Z.elements[6],U.__data[9]=Z.elements[7],U.__data[10]=Z.elements[8],U.__data[11]=0):ArrayBuffer.isView(Z)?U.__data.set(new Z.constructor(Z.buffer,Z.byteOffset,U.__data.length)):(Z.toArray(U.__data,ue),ue+=W.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,q,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function _(A,P,D,I){const L=A.value,k=P+"_"+D;if(I[k]===void 0)return typeof L=="number"||typeof L=="boolean"?I[k]=L:ArrayBuffer.isView(L)?I[k]=L.slice():I[k]=L.clone(),!0;{const E=I[k];if(typeof L=="number"||typeof L=="boolean"){if(E!==L)return I[k]=L,!0}else{if(ArrayBuffer.isView(L))return!0;if(E.equals(L)===!1)return E.copy(L),!0}}return!1}function M(A){const P=A.uniforms;let D=0;const I=16;for(let k=0,E=P.length;k<E;k++){const F=Array.isArray(P[k])?P[k]:[P[k]];for(let z=0,U=F.length;z<U;z++){const q=F[z],re=Array.isArray(q.value)?q.value:[q.value];for(let ue=0,G=re.length;ue<G;ue++){const Z=re[ue],W=b(Z),Y=D%I,se=Y%W.boundary,j=Y+se;D+=se,j!==0&&I-j<W.storage&&(D+=I-j),q.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=D,D+=W.storage}}}const L=D%I;return L>0&&(D+=I-L),A.__size=D,A.__cache={},this}function b(A){const P={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(P.boundary=4,P.storage=4):A.isVector2?(P.boundary=8,P.storage=8):A.isVector3||A.isColor?(P.boundary=16,P.storage=12):A.isVector4?(P.boundary=16,P.storage=16):A.isMatrix3?(P.boundary=48,P.storage=48):A.isMatrix4?(P.boundary=64,P.storage=64):A.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(A)?(P.boundary=16,P.storage=A.byteLength):at("WebGLRenderer: Unsupported uniform value type.",A),P}function y(A){const P=A.target;P.removeEventListener("dispose",y);const D=c.indexOf(P.__bindingPointIndex);c.splice(D,1),n.deleteBuffer(o[P.id]),delete o[P.id],delete a[P.id]}function S(){for(const A in o)n.deleteBuffer(o[A]);c=[],o={},a={}}return{bind:f,update:h,dispose:S}}const xR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ji=null;function _R(){return ji===null&&(ji=new f1(xR,16,16,Ws,Tr),ji.name="DFG_LUT",ji.minFilter=kn,ji.magFilter=kn,ji.wrapS=yr,ji.wrapT=yr,ji.generateMipmaps=!1,ji.needsUpdate=!0),ji}class gy{constructor(e={}){const{canvas:t=Hw(),context:r=null,depth:o=!0,stencil:a=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1,outputBufferType:_=_i}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=c;const b=_,y=new Set([Lp,Dp,Pp]),S=new Set([_i,er,rl,sl,Cp,Rp]),A=new Uint32Array(4),P=new Int32Array(4),D=new ae;let I=null,L=null;const k=[],E=[];let F=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const z=this;let U=!1,q=null;this._outputColorSpace=xi;let re=0,ue=0,G=null,Z=-1,W=null;const Y=new ln,se=new ln;let j=null;const B=new Ot(0);let ee=0,Ue=t.width,Be=t.height,be=1,te=null,xe=null;const ge=new ln(0,0,Ue,Be),Ee=new ln(0,0,Ue,Be);let Qe=!1;const tt=new ny;let Pt=!1,lt=!1;const Mt=new gn,kt=new ae,pt=new ln,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function bn(){return G===null?be:1}let X=r;function Ht(C,K){return t.getContext(C,K)}try{const C={alpha:!0,depth:o,stencil:a,antialias:u,premultipliedAlpha:f,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Tp}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",qe,!1),t.addEventListener("webglcontextcreationerror",ut,!1),X===null){const K="webgl2";if(X=Ht(K,C),X===null)throw Ht(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw At("WebGLRenderer: "+C.message),C}let mt,Nt,Ie,Xt,N,w,Q,pe,ve,we,Ne,fe,me,ke,ze,Re,Te,st,ct,vt,H,Ce,he;function Oe(){mt=new _A(X),mt.init(),H=new uR(X,mt),Nt=new dA(X,mt,e,H),Ie=new lR(X,mt),Nt.reversedDepthBuffer&&v&&Ie.buffers.depth.setReversed(!0),Xt=new MA(X),N=new qC,w=new cR(X,mt,Ie,N,Nt,H,Xt),Q=new xA(z),pe=new T1(X),Ce=new cA(X,pe),ve=new yA(X,pe,Xt,Ce),we=new wA(X,ve,pe,Ce,Xt),st=new EA(X,Nt,w),ze=new fA(N),Ne=new $C(z,Q,mt,Nt,Ce,ze),fe=new gR(z,N),me=new KC,ke=new nR(mt),Te=new lA(z,Q,Ie,we,M,f),Re=new aR(z,we,Nt),he=new vR(X,Xt,Nt,Ie),ct=new uA(X,mt,Xt),vt=new SA(X,mt,Xt),Xt.programs=Ne.programs,z.capabilities=Nt,z.extensions=mt,z.properties=N,z.renderLists=me,z.shadowMap=Re,z.state=Ie,z.info=Xt}Oe(),b!==_i&&(F=new TA(b,t.width,t.height,o,a));const De=new pR(z,X);this.xr=De,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const C=mt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=mt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return be},this.setPixelRatio=function(C){C!==void 0&&(be=C,this.setSize(Ue,Be,!1))},this.getSize=function(C){return C.set(Ue,Be)},this.setSize=function(C,K,le=!0){if(De.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}Ue=C,Be=K,t.width=Math.floor(C*be),t.height=Math.floor(K*be),le===!0&&(t.style.width=C+"px",t.style.height=K+"px"),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,C,K)},this.getDrawingBufferSize=function(C){return C.set(Ue*be,Be*be).floor()},this.setDrawingBufferSize=function(C,K,le){Ue=C,Be=K,be=le,t.width=Math.floor(C*le),t.height=Math.floor(K*le),this.setViewport(0,0,C,K)},this.setEffects=function(C){if(b===_i){At("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let K=0;K<C.length;K++)if(C[K].isOutputPass===!0){at("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(Y)},this.getViewport=function(C){return C.copy(ge)},this.setViewport=function(C,K,le,ie){C.isVector4?ge.set(C.x,C.y,C.z,C.w):ge.set(C,K,le,ie),Ie.viewport(Y.copy(ge).multiplyScalar(be).round())},this.getScissor=function(C){return C.copy(Ee)},this.setScissor=function(C,K,le,ie){C.isVector4?Ee.set(C.x,C.y,C.z,C.w):Ee.set(C,K,le,ie),Ie.scissor(se.copy(Ee).multiplyScalar(be).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(C){Ie.setScissorTest(Qe=C)},this.setOpaqueSort=function(C){te=C},this.setTransparentSort=function(C){xe=C},this.getClearColor=function(C){return C.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(C=!0,K=!0,le=!0){let ie=0;if(C){let ne=!1;if(G!==null){const Le=G.texture.format;ne=y.has(Le)}if(ne){const Le=G.texture.type,He=S.has(Le),Pe=Te.getClearColor(),Ye=Te.getClearAlpha(),et=Pe.r,dt=Pe.g,ft=Pe.b;He?(A[0]=et,A[1]=dt,A[2]=ft,A[3]=Ye,X.clearBufferuiv(X.COLOR,0,A)):(P[0]=et,P[1]=dt,P[2]=ft,P[3]=Ye,X.clearBufferiv(X.COLOR,0,P))}else ie|=X.COLOR_BUFFER_BIT}K&&(ie|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),le&&(ie|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&X.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),q=C},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",qe,!1),t.removeEventListener("webglcontextcreationerror",ut,!1),Te.dispose(),me.dispose(),ke.dispose(),N.dispose(),Q.dispose(),we.dispose(),Ce.dispose(),he.dispose(),Ne.dispose(),De.dispose(),De.removeEventListener("sessionstart",ds),De.removeEventListener("sessionend",Ks),ir.stop()};function _e(C){C.preventDefault(),ov("WebGLRenderer: Context Lost."),U=!0}function qe(){ov("WebGLRenderer: Context Restored."),U=!1;const C=Xt.autoReset,K=Re.enabled,le=Re.autoUpdate,ie=Re.needsUpdate,ne=Re.type;Oe(),Xt.autoReset=C,Re.enabled=K,Re.autoUpdate=le,Re.needsUpdate=ie,Re.type=ne}function ut(C){At("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function zt(C){const K=C.target;K.removeEventListener("dispose",zt),Ct(K)}function Ct(C){On(C),N.remove(C)}function On(C){const K=N.get(C).programs;K!==void 0&&(K.forEach(function(le){Ne.releaseProgram(le)}),C.isShaderMaterial&&Ne.releaseShaderCache(C))}this.renderBufferDirect=function(C,K,le,ie,ne,Le){K===null&&(K=Qt);const He=ne.isMesh&&ne.matrixWorld.determinant()<0,Pe=Ml(C,K,le,ie,ne);Ie.setMaterial(ie,He);let Ye=le.index,et=1;if(ie.wireframe===!0){if(Ye=ve.getWireframeAttribute(le),Ye===void 0)return;et=2}const dt=le.drawRange,ft=le.attributes.position;let Ze=dt.start*et,bt=(dt.start+dt.count)*et;Le!==null&&(Ze=Math.max(Ze,Le.start*et),bt=Math.min(bt,(Le.start+Le.count)*et)),Ye!==null?(Ze=Math.max(Ze,0),bt=Math.min(bt,Ye.count)):ft!=null&&(Ze=Math.max(Ze,0),bt=Math.min(bt,ft.count));const Wt=bt-Ze;if(Wt<0||Wt===1/0)return;Ce.setup(ne,ie,Pe,le,Ye);let Kt,It=ct;if(Ye!==null&&(Kt=pe.get(Ye),It=vt,It.setIndex(Kt)),ne.isMesh)ie.wireframe===!0?(Ie.setLineWidth(ie.wireframeLinewidth*bn()),It.setMode(X.LINES)):It.setMode(X.TRIANGLES);else if(ne.isLine){let un=ie.linewidth;un===void 0&&(un=1),Ie.setLineWidth(un*bn()),ne.isLineSegments?It.setMode(X.LINES):ne.isLineLoop?It.setMode(X.LINE_LOOP):It.setMode(X.LINE_STRIP)}else ne.isPoints?It.setMode(X.POINTS):ne.isSprite&&It.setMode(X.TRIANGLES);if(ne.isBatchedMesh)if(mt.get("WEBGL_multi_draw"))It.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const un=ne._multiDrawStarts,Ve=ne._multiDrawCounts,Tn=ne._multiDrawCount,xt=Ye?pe.get(Ye).bytesPerElement:1,Hn=N.get(ie).currentProgram.getUniforms();for(let Wn=0;Wn<Tn;Wn++)Hn.setValue(X,"_gl_DrawID",Wn),It.render(un[Wn]/xt,Ve[Wn])}else if(ne.isInstancedMesh)It.renderInstances(Ze,Wt,ne.count);else if(le.isInstancedBufferGeometry){const un=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Ve=Math.min(le.instanceCount,un);It.renderInstances(Ze,Wt,Ve)}else It.render(Ze,Wt)};function li(C,K,le){C.transparent===!0&&C.side===_r&&C.forceSinglePass===!1?(C.side=Qn,C.needsUpdate=!0,Zs(C,K,le),C.side=as,C.needsUpdate=!0,Zs(C,K,le),C.side=_r):Zs(C,K,le)}this.compile=function(C,K,le=null){le===null&&(le=C),L=ke.get(le),L.init(K),E.push(L),le.traverseVisible(function(ne){ne.isLight&&ne.layers.test(K.layers)&&(L.pushLight(ne),ne.castShadow&&L.pushShadow(ne))}),C!==le&&C.traverseVisible(function(ne){ne.isLight&&ne.layers.test(K.layers)&&(L.pushLight(ne),ne.castShadow&&L.pushShadow(ne))}),L.setupLights();const ie=new Set;return C.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const Le=ne.material;if(Le)if(Array.isArray(Le))for(let He=0;He<Le.length;He++){const Pe=Le[He];li(Pe,le,ne),ie.add(Pe)}else li(Le,le,ne),ie.add(Le)}),L=E.pop(),ie},this.compileAsync=function(C,K,le=null){const ie=this.compile(C,K,le);return new Promise(ne=>{function Le(){if(ie.forEach(function(He){N.get(He).currentProgram.isReady()&&ie.delete(He)}),ie.size===0){ne(C);return}setTimeout(Le,10)}mt.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let nr=null;function Ys(C){nr&&nr(C)}function ds(){ir.stop()}function Ks(){ir.start()}const ir=new ly;ir.setAnimationLoop(Ys),typeof self<"u"&&ir.setContext(self),this.setAnimationLoop=function(C){nr=C,De.setAnimationLoop(C),C===null?ir.stop():ir.start()},De.addEventListener("sessionstart",ds),De.addEventListener("sessionend",Ks),this.render=function(C,K){if(K!==void 0&&K.isCamera!==!0){At("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;q!==null&&q.renderStart(C,K);const le=De.enabled===!0&&De.isPresenting===!0,ie=F!==null&&(G===null||le)&&F.begin(z,G);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(De.cameraAutoUpdate===!0&&De.updateCamera(K),K=De.getCamera()),C.isScene===!0&&C.onBeforeRender(z,C,K,G),L=ke.get(C,E.length),L.init(K),L.state.textureUnits=w.getTextureUnits(),E.push(L),Mt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),tt.setFromProjectionMatrix(Mt,qi,K.reversedDepth),lt=this.localClippingEnabled,Pt=ze.init(this.clippingPlanes,lt),I=me.get(C,k.length),I.init(),k.push(I),De.enabled===!0&&De.isPresenting===!0){const He=z.xr.getDepthSensingMesh();He!==null&&na(He,K,-1/0,z.sortObjects)}na(C,K,0,z.sortObjects),I.finish(),z.sortObjects===!0&&I.sort(te,xe),Gt=De.enabled===!1||De.isPresenting===!1||De.hasDepthSensing()===!1,Gt&&Te.addToRenderList(I,C),this.info.render.frame++,Pt===!0&&ze.beginShadows();const ne=L.state.shadowsArray;if(Re.render(ne,C,K),Pt===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ie&&F.hasRenderPass())===!1){const He=I.opaque,Pe=I.transmissive;if(L.setupLights(),K.isArrayCamera){const Ye=K.cameras;if(Pe.length>0)for(let et=0,dt=Ye.length;et<dt;et++){const ft=Ye[et];Oi(He,Pe,C,ft)}Gt&&Te.render(C);for(let et=0,dt=Ye.length;et<dt;et++){const ft=Ye[et];yl(I,C,ft,ft.viewport)}}else Pe.length>0&&Oi(He,Pe,C,K),Gt&&Te.render(C),yl(I,C,K)}G!==null&&ue===0&&(w.updateMultisampleRenderTarget(G),w.updateRenderTargetMipmap(G)),ie&&F.end(z),C.isScene===!0&&C.onAfterRender(z,C,K),Ce.resetDefaultState(),Z=-1,W=null,E.pop(),E.length>0?(L=E[E.length-1],w.setTextureUnits(L.state.textureUnits),Pt===!0&&ze.setGlobalState(z.clippingPlanes,L.state.camera)):L=null,k.pop(),k.length>0?I=k[k.length-1]:I=null,q!==null&&q.renderEnd()};function na(C,K,le,ie){if(C.visible===!1)return;if(C.layers.test(K.layers)){if(C.isGroup)le=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(K);else if(C.isLightProbeGrid)L.pushLightProbeGrid(C);else if(C.isLight)L.pushLight(C),C.castShadow&&L.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||tt.intersectsSprite(C)){ie&&pt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Mt);const He=we.update(C),Pe=C.material;Pe.visible&&I.push(C,He,Pe,le,pt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||tt.intersectsObject(C))){const He=we.update(C),Pe=C.material;if(ie&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),pt.copy(C.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),pt.copy(He.boundingSphere.center)),pt.applyMatrix4(C.matrixWorld).applyMatrix4(Mt)),Array.isArray(Pe)){const Ye=He.groups;for(let et=0,dt=Ye.length;et<dt;et++){const ft=Ye[et],Ze=Pe[ft.materialIndex];Ze&&Ze.visible&&I.push(C,He,Ze,le,pt.z,ft)}}else Pe.visible&&I.push(C,He,Pe,le,pt.z,null)}}const Le=C.children;for(let He=0,Pe=Le.length;He<Pe;He++)na(Le[He],K,le,ie)}function yl(C,K,le,ie){const{opaque:ne,transmissive:Le,transparent:He}=C;L.setupLightsView(le),Pt===!0&&ze.setGlobalState(z.clippingPlanes,le),ie&&Ie.viewport(Y.copy(ie)),ne.length>0&&fs(ne,K,le),Le.length>0&&fs(Le,K,le),He.length>0&&fs(He,K,le),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function Oi(C,K,le,ie){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[ie.id]===void 0){const Ze=mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[ie.id]=new Ki(1,1,{generateMipmaps:!0,type:Ze?Tr:_i,minFilter:ks,samples:Math.max(4,Nt.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace})}const Le=L.state.transmissionRenderTarget[ie.id],He=ie.viewport||Y;Le.setSize(He.z*z.transmissionResolutionScale,He.w*z.transmissionResolutionScale);const Pe=z.getRenderTarget(),Ye=z.getActiveCubeFace(),et=z.getActiveMipmapLevel();z.setRenderTarget(Le),z.getClearColor(B),ee=z.getClearAlpha(),ee<1&&z.setClearColor(16777215,.5),z.clear(),Gt&&Te.render(le);const dt=z.toneMapping;z.toneMapping=Yi;const ft=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),L.setupLightsView(ie),Pt===!0&&ze.setGlobalState(z.clippingPlanes,ie),fs(C,le,ie),w.updateMultisampleRenderTarget(Le),w.updateRenderTargetMipmap(Le),mt.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let bt=0,Wt=K.length;bt<Wt;bt++){const Kt=K[bt],{object:It,geometry:un,material:Ve,group:Tn}=Kt;if(Ve.side===_r&&It.layers.test(ie.layers)){const xt=Ve.side;Ve.side=Qn,Ve.needsUpdate=!0,ia(It,le,ie,un,Ve,Tn),Ve.side=xt,Ve.needsUpdate=!0,Ze=!0}}Ze===!0&&(w.updateMultisampleRenderTarget(Le),w.updateRenderTargetMipmap(Le))}z.setRenderTarget(Pe,Ye,et),z.setClearColor(B,ee),ft!==void 0&&(ie.viewport=ft),z.toneMapping=dt}function fs(C,K,le){const ie=K.isScene===!0?K.overrideMaterial:null;for(let ne=0,Le=C.length;ne<Le;ne++){const He=C[ne],{object:Pe,geometry:Ye,group:et}=He;let dt=He.material;dt.allowOverride===!0&&ie!==null&&(dt=ie),Pe.layers.test(le.layers)&&ia(Pe,K,le,Ye,dt,et)}}function ia(C,K,le,ie,ne,Le){C.onBeforeRender(z,K,le,ie,ne,Le),C.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ne.onBeforeRender(z,K,le,ie,C,Le),ne.transparent===!0&&ne.side===_r&&ne.forceSinglePass===!1?(ne.side=Qn,ne.needsUpdate=!0,z.renderBufferDirect(le,K,ie,ne,C,Le),ne.side=as,ne.needsUpdate=!0,z.renderBufferDirect(le,K,ie,ne,C,Le),ne.side=_r):z.renderBufferDirect(le,K,ie,ne,C,Le),C.onAfterRender(z,K,le,ie,ne,Le)}function Zs(C,K,le){K.isScene!==!0&&(K=Qt);const ie=N.get(C),ne=L.state.lights,Le=L.state.shadowsArray,He=ne.state.version,Pe=Ne.getParameters(C,ne.state,Le,K,le,L.state.lightProbeGridArray),Ye=Ne.getProgramCacheKey(Pe);let et=ie.programs;ie.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?K.environment:null,ie.fog=K.fog;const dt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;ie.envMap=Q.get(C.envMap||ie.environment,dt),ie.envMapRotation=ie.environment!==null&&C.envMap===null?K.environmentRotation:C.envMapRotation,et===void 0&&(C.addEventListener("dispose",zt),et=new Map,ie.programs=et);let ft=et.get(Ye);if(ft!==void 0){if(ie.currentProgram===ft&&ie.lightsStateVersion===He)return sa(C,Pe),ft}else Pe.uniforms=Ne.getUniforms(C),q!==null&&C.isNodeMaterial&&q.build(C,le,Pe),C.onBeforeCompile(Pe,z),ft=Ne.acquireProgram(Pe,Ye),et.set(Ye,ft),ie.uniforms=Pe.uniforms;const Ze=ie.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ze.clippingPlanes=ze.uniform),sa(C,Pe),ie.needsLights=Vu(C),ie.lightsStateVersion=He,ie.needsLights&&(Ze.ambientLightColor.value=ne.state.ambient,Ze.lightProbe.value=ne.state.probe,Ze.directionalLights.value=ne.state.directional,Ze.directionalLightShadows.value=ne.state.directionalShadow,Ze.spotLights.value=ne.state.spot,Ze.spotLightShadows.value=ne.state.spotShadow,Ze.rectAreaLights.value=ne.state.rectArea,Ze.ltc_1.value=ne.state.rectAreaLTC1,Ze.ltc_2.value=ne.state.rectAreaLTC2,Ze.pointLights.value=ne.state.point,Ze.pointLightShadows.value=ne.state.pointShadow,Ze.hemisphereLights.value=ne.state.hemi,Ze.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Ze.spotLightMatrix.value=ne.state.spotLightMatrix,Ze.spotLightMap.value=ne.state.spotLightMap,Ze.pointShadowMatrix.value=ne.state.pointShadowMatrix),ie.lightProbeGrid=L.state.lightProbeGridArray.length>0,ie.currentProgram=ft,ie.uniformsList=null,ft}function ra(C){if(C.uniformsList===null){const K=C.currentProgram.getUniforms();C.uniformsList=ru.seqWithValue(K.seq,C.uniforms)}return C.uniformsList}function sa(C,K){const le=N.get(C);le.outputColorSpace=K.outputColorSpace,le.batching=K.batching,le.batchingColor=K.batchingColor,le.instancing=K.instancing,le.instancingColor=K.instancingColor,le.instancingMorph=K.instancingMorph,le.skinning=K.skinning,le.morphTargets=K.morphTargets,le.morphNormals=K.morphNormals,le.morphColors=K.morphColors,le.morphTargetsCount=K.morphTargetsCount,le.numClippingPlanes=K.numClippingPlanes,le.numIntersection=K.numClipIntersection,le.vertexAlphas=K.vertexAlphas,le.vertexTangents=K.vertexTangents,le.toneMapping=K.toneMapping}function Sl(C,K){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;D.setFromMatrixPosition(K.matrixWorld);for(let le=0,ie=C.length;le<ie;le++){const ne=C[le];if(ne.texture!==null&&ne.boundingBox.containsPoint(D))return ne}return null}function Ml(C,K,le,ie,ne){K.isScene!==!0&&(K=Qt),w.resetTextureUnits();const Le=K.fog,He=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?K.environment:null,Pe=G===null?z.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Et.workingColorSpace,Ye=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,et=Q.get(ie.envMap||He,Ye),dt=ie.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,ft=!!le.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Ze=!!le.morphAttributes.position,bt=!!le.morphAttributes.normal,Wt=!!le.morphAttributes.color;let Kt=Yi;ie.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Kt=z.toneMapping);const It=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,un=It!==void 0?It.length:0,Ve=N.get(ie),Tn=L.state.lights;if(Pt===!0&&(lt===!0||C!==W)){const Ut=C===W&&ie.id===Z;ze.setState(ie,C,Ut)}let xt=!1;ie.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Tn.state.version||Ve.outputColorSpace!==Pe||ne.isBatchedMesh&&Ve.batching===!1||!ne.isBatchedMesh&&Ve.batching===!0||ne.isBatchedMesh&&Ve.batchingColor===!0&&ne.colorTexture===null||ne.isBatchedMesh&&Ve.batchingColor===!1&&ne.colorTexture!==null||ne.isInstancedMesh&&Ve.instancing===!1||!ne.isInstancedMesh&&Ve.instancing===!0||ne.isSkinnedMesh&&Ve.skinning===!1||!ne.isSkinnedMesh&&Ve.skinning===!0||ne.isInstancedMesh&&Ve.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&Ve.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&Ve.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&Ve.instancingMorph===!1&&ne.morphTexture!==null||Ve.envMap!==et||ie.fog===!0&&Ve.fog!==Le||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==ze.numPlanes||Ve.numIntersection!==ze.numIntersection)||Ve.vertexAlphas!==dt||Ve.vertexTangents!==ft||Ve.morphTargets!==Ze||Ve.morphNormals!==bt||Ve.morphColors!==Wt||Ve.toneMapping!==Kt||Ve.morphTargetsCount!==un||!!Ve.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(xt=!0):(xt=!0,Ve.__version=ie.version);let Hn=Ve.currentProgram;xt===!0&&(Hn=Zs(ie,K,ne),q&&ie.isNodeMaterial&&q.onUpdateProgram(ie,Hn,Ve));let Wn=!1,yt=!1,rr=!1;const Lt=Hn.getUniforms(),$t=Ve.uniforms;if(Ie.useProgram(Hn.program)&&(Wn=!0,yt=!0,rr=!0),ie.id!==Z&&(Z=ie.id,yt=!0),Ve.needsLights){const Ut=Sl(L.state.lightProbeGridArray,ne);Ve.lightProbeGrid!==Ut&&(Ve.lightProbeGrid=Ut,yt=!0)}if(Wn||W!==C){Ie.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Lt.setValue(X,"projectionMatrix",C.projectionMatrix),Lt.setValue(X,"viewMatrix",C.matrixWorldInverse);const Si=Lt.map.cameraPosition;Si!==void 0&&Si.setValue(X,kt.setFromMatrixPosition(C.matrixWorld)),Nt.logarithmicDepthBuffer&&Lt.setValue(X,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Lt.setValue(X,"isOrthographic",C.isOrthographicCamera===!0),W!==C&&(W=C,yt=!0,rr=!0)}if(Ve.needsLights&&(Tn.state.directionalShadowMap.length>0&&Lt.setValue(X,"directionalShadowMap",Tn.state.directionalShadowMap,w),Tn.state.spotShadowMap.length>0&&Lt.setValue(X,"spotShadowMap",Tn.state.spotShadowMap,w),Tn.state.pointShadowMap.length>0&&Lt.setValue(X,"pointShadowMap",Tn.state.pointShadowMap,w)),ne.isSkinnedMesh){Lt.setOptional(X,ne,"bindMatrix"),Lt.setOptional(X,ne,"bindMatrixInverse");const Ut=ne.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),Lt.setValue(X,"boneTexture",Ut.boneTexture,w))}ne.isBatchedMesh&&(Lt.setOptional(X,ne,"batchingTexture"),Lt.setValue(X,"batchingTexture",ne._matricesTexture,w),Lt.setOptional(X,ne,"batchingIdTexture"),Lt.setValue(X,"batchingIdTexture",ne._indirectTexture,w),Lt.setOptional(X,ne,"batchingColorTexture"),ne._colorsTexture!==null&&Lt.setValue(X,"batchingColorTexture",ne._colorsTexture,w));const yi=le.morphAttributes;if((yi.position!==void 0||yi.normal!==void 0||yi.color!==void 0)&&st.update(ne,le,Hn),(yt||Ve.receiveShadow!==ne.receiveShadow)&&(Ve.receiveShadow=ne.receiveShadow,Lt.setValue(X,"receiveShadow",ne.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&K.environment!==null&&($t.envMapIntensity.value=K.environmentIntensity),$t.dfgLUT!==void 0&&($t.dfgLUT.value=_R()),yt){if(Lt.setValue(X,"toneMappingExposure",z.toneMappingExposure),Ve.needsLights&&zu($t,rr),Le&&ie.fog===!0&&fe.refreshFogUniforms($t,Le),fe.refreshMaterialUniforms($t,ie,be,Be,L.state.transmissionRenderTarget[C.id]),Ve.needsLights&&Ve.lightProbeGrid){const Ut=Ve.lightProbeGrid;$t.probesSH.value=Ut.texture,$t.probesMin.value.copy(Ut.boundingBox.min),$t.probesMax.value.copy(Ut.boundingBox.max),$t.probesResolution.value.copy(Ut.resolution)}ru.upload(X,ra(Ve),$t,w)}if(ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(ru.upload(X,ra(Ve),$t,w),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Lt.setValue(X,"center",ne.center),Lt.setValue(X,"modelViewMatrix",ne.modelViewMatrix),Lt.setValue(X,"normalMatrix",ne.normalMatrix),Lt.setValue(X,"modelMatrix",ne.matrixWorld),ie.uniformsGroups!==void 0){const Ut=ie.uniformsGroups;for(let Si=0,Bi=Ut.length;Si<Bi;Si++){const hs=Ut[Si];he.update(hs,Hn),he.bind(hs,Hn)}}return Hn}function zu(C,K){C.ambientLightColor.needsUpdate=K,C.lightProbe.needsUpdate=K,C.directionalLights.needsUpdate=K,C.directionalLightShadows.needsUpdate=K,C.pointLights.needsUpdate=K,C.pointLightShadows.needsUpdate=K,C.spotLights.needsUpdate=K,C.spotLightShadows.needsUpdate=K,C.rectAreaLights.needsUpdate=K,C.hemisphereLights.needsUpdate=K}function Vu(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return re},this.getActiveMipmapLevel=function(){return ue},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(C,K,le){const ie=N.get(C);ie.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),N.get(C.texture).__webglTexture=K,N.get(C.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:le,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,K){const le=N.get(C);le.__webglFramebuffer=K,le.__useDefaultFramebuffer=K===void 0};const Jt=X.createFramebuffer();this.setRenderTarget=function(C,K=0,le=0){G=C,re=K,ue=le;let ie=null,ne=!1,Le=!1;if(C){const Pe=N.get(C);if(Pe.__useDefaultFramebuffer!==void 0){Ie.bindFramebuffer(X.FRAMEBUFFER,Pe.__webglFramebuffer),Y.copy(C.viewport),se.copy(C.scissor),j=C.scissorTest,Ie.viewport(Y),Ie.scissor(se),Ie.setScissorTest(j),Z=-1;return}else if(Pe.__webglFramebuffer===void 0)w.setupRenderTarget(C);else if(Pe.__hasExternalTextures)w.rebindTextures(C,N.get(C.texture).__webglTexture,N.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const dt=C.depthTexture;if(Pe.__boundDepthTexture!==dt){if(dt!==null&&N.has(dt)&&(C.width!==dt.image.width||C.height!==dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(C)}}const Ye=C.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Le=!0);const et=N.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(et[K])?ie=et[K][le]:ie=et[K],ne=!0):C.samples>0&&w.useMultisampledRTT(C)===!1?ie=N.get(C).__webglMultisampledFramebuffer:Array.isArray(et)?ie=et[le]:ie=et,Y.copy(C.viewport),se.copy(C.scissor),j=C.scissorTest}else Y.copy(ge).multiplyScalar(be).floor(),se.copy(Ee).multiplyScalar(be).floor(),j=Qe;if(le!==0&&(ie=Jt),Ie.bindFramebuffer(X.FRAMEBUFFER,ie)&&Ie.drawBuffers(C,ie),Ie.viewport(Y),Ie.scissor(se),Ie.setScissorTest(j),ne){const Pe=N.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+K,Pe.__webglTexture,le)}else if(Le){const Pe=K;for(let Ye=0;Ye<C.textures.length;Ye++){const et=N.get(C.textures[Ye]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Ye,et.__webglTexture,le,Pe)}}else if(C!==null&&le!==0){const Pe=N.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Pe.__webglTexture,le)}Z=-1},this.readRenderTargetPixels=function(C,K,le,ie,ne,Le,He,Pe=0){if(!(C&&C.isWebGLRenderTarget)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=N.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&He!==void 0&&(Ye=Ye[He]),Ye){Ie.bindFramebuffer(X.FRAMEBUFFER,Ye);try{const et=C.textures[Pe],dt=et.format,ft=et.type;if(C.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Pe),!Nt.textureFormatReadable(dt)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Nt.textureTypeReadable(ft)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=C.width-ie&&le>=0&&le<=C.height-ne&&X.readPixels(K,le,ie,ne,H.convert(dt),H.convert(ft),Le)}finally{const et=G!==null?N.get(G).__webglFramebuffer:null;Ie.bindFramebuffer(X.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(C,K,le,ie,ne,Le,He,Pe=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=N.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&He!==void 0&&(Ye=Ye[He]),Ye)if(K>=0&&K<=C.width-ie&&le>=0&&le<=C.height-ne){Ie.bindFramebuffer(X.FRAMEBUFFER,Ye);const et=C.textures[Pe],dt=et.format,ft=et.type;if(C.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Pe),!Nt.textureFormatReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Nt.textureTypeReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,Ze),X.bufferData(X.PIXEL_PACK_BUFFER,Le.byteLength,X.STREAM_READ),X.readPixels(K,le,ie,ne,H.convert(dt),H.convert(ft),0);const bt=G!==null?N.get(G).__webglFramebuffer:null;Ie.bindFramebuffer(X.FRAMEBUFFER,bt);const Wt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await Ww(X,Wt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,Ze),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Le),X.deleteBuffer(Ze),X.deleteSync(Wt),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,K=null,le=0){const ie=Math.pow(2,-le),ne=Math.floor(C.image.width*ie),Le=Math.floor(C.image.height*ie),He=K!==null?K.x:0,Pe=K!==null?K.y:0;w.setTexture2D(C,0),X.copyTexSubImage2D(X.TEXTURE_2D,le,0,0,He,Pe,ne,Le),Ie.unbindTexture()};const Gu=X.createFramebuffer(),oa=X.createFramebuffer();this.copyTextureToTexture=function(C,K,le=null,ie=null,ne=0,Le=0){let He,Pe,Ye,et,dt,ft,Ze,bt,Wt;const Kt=C.isCompressedTexture?C.mipmaps[Le]:C.image;if(le!==null)He=le.max.x-le.min.x,Pe=le.max.y-le.min.y,Ye=le.isBox3?le.max.z-le.min.z:1,et=le.min.x,dt=le.min.y,ft=le.isBox3?le.min.z:0;else{const $t=Math.pow(2,-ne);He=Math.floor(Kt.width*$t),Pe=Math.floor(Kt.height*$t),C.isDataArrayTexture?Ye=Kt.depth:C.isData3DTexture?Ye=Math.floor(Kt.depth*$t):Ye=1,et=0,dt=0,ft=0}ie!==null?(Ze=ie.x,bt=ie.y,Wt=ie.z):(Ze=0,bt=0,Wt=0);const It=H.convert(K.format),un=H.convert(K.type);let Ve;K.isData3DTexture?(w.setTexture3D(K,0),Ve=X.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(w.setTexture2DArray(K,0),Ve=X.TEXTURE_2D_ARRAY):(w.setTexture2D(K,0),Ve=X.TEXTURE_2D),Ie.activeTexture(X.TEXTURE0),Ie.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,K.flipY),Ie.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),Ie.pixelStorei(X.UNPACK_ALIGNMENT,K.unpackAlignment);const Tn=Ie.getParameter(X.UNPACK_ROW_LENGTH),xt=Ie.getParameter(X.UNPACK_IMAGE_HEIGHT),Hn=Ie.getParameter(X.UNPACK_SKIP_PIXELS),Wn=Ie.getParameter(X.UNPACK_SKIP_ROWS),yt=Ie.getParameter(X.UNPACK_SKIP_IMAGES);Ie.pixelStorei(X.UNPACK_ROW_LENGTH,Kt.width),Ie.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Kt.height),Ie.pixelStorei(X.UNPACK_SKIP_PIXELS,et),Ie.pixelStorei(X.UNPACK_SKIP_ROWS,dt),Ie.pixelStorei(X.UNPACK_SKIP_IMAGES,ft);const rr=C.isDataArrayTexture||C.isData3DTexture,Lt=K.isDataArrayTexture||K.isData3DTexture;if(C.isDepthTexture){const $t=N.get(C),yi=N.get(K),Ut=N.get($t.__renderTarget),Si=N.get(yi.__renderTarget);Ie.bindFramebuffer(X.READ_FRAMEBUFFER,Ut.__webglFramebuffer),Ie.bindFramebuffer(X.DRAW_FRAMEBUFFER,Si.__webglFramebuffer);for(let Bi=0;Bi<Ye;Bi++)rr&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,N.get(C).__webglTexture,ne,ft+Bi),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,N.get(K).__webglTexture,Le,Wt+Bi)),X.blitFramebuffer(et,dt,He,Pe,Ze,bt,He,Pe,X.DEPTH_BUFFER_BIT,X.NEAREST);Ie.bindFramebuffer(X.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(ne!==0||C.isRenderTargetTexture||N.has(C)){const $t=N.get(C),yi=N.get(K);Ie.bindFramebuffer(X.READ_FRAMEBUFFER,Gu),Ie.bindFramebuffer(X.DRAW_FRAMEBUFFER,oa);for(let Ut=0;Ut<Ye;Ut++)rr?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,$t.__webglTexture,ne,ft+Ut):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,$t.__webglTexture,ne),Lt?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,yi.__webglTexture,Le,Wt+Ut):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,yi.__webglTexture,Le),ne!==0?X.blitFramebuffer(et,dt,He,Pe,Ze,bt,He,Pe,X.COLOR_BUFFER_BIT,X.NEAREST):Lt?X.copyTexSubImage3D(Ve,Le,Ze,bt,Wt+Ut,et,dt,He,Pe):X.copyTexSubImage2D(Ve,Le,Ze,bt,et,dt,He,Pe);Ie.bindFramebuffer(X.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Lt?C.isDataTexture||C.isData3DTexture?X.texSubImage3D(Ve,Le,Ze,bt,Wt,He,Pe,Ye,It,un,Kt.data):K.isCompressedArrayTexture?X.compressedTexSubImage3D(Ve,Le,Ze,bt,Wt,He,Pe,Ye,It,Kt.data):X.texSubImage3D(Ve,Le,Ze,bt,Wt,He,Pe,Ye,It,un,Kt):C.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Le,Ze,bt,He,Pe,It,un,Kt.data):C.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Le,Ze,bt,Kt.width,Kt.height,It,Kt.data):X.texSubImage2D(X.TEXTURE_2D,Le,Ze,bt,He,Pe,It,un,Kt);Ie.pixelStorei(X.UNPACK_ROW_LENGTH,Tn),Ie.pixelStorei(X.UNPACK_IMAGE_HEIGHT,xt),Ie.pixelStorei(X.UNPACK_SKIP_PIXELS,Hn),Ie.pixelStorei(X.UNPACK_SKIP_ROWS,Wn),Ie.pixelStorei(X.UNPACK_SKIP_IMAGES,yt),Le===0&&K.generateMipmaps&&X.generateMipmap(Ve),Ie.unbindTexture()},this.initRenderTarget=function(C){N.get(C).__webglFramebuffer===void 0&&w.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?w.setTextureCube(C,0):C.isData3DTexture?w.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?w.setTexture2DArray(C,0):w.setTexture2D(C,0),Ie.unbindTexture()},this.resetState=function(){re=0,ue=0,G=null,Ie.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(e),t.unpackColorSpace=Et._getUnpackColorSpace()}}function yR(){const n=ce.useRef(null),e=ce.useRef({scene:null,camera:null,renderer:null,mesh:null,uniforms:null,animationId:null,startTime:performance.now()}),[t,r]=ce.useState(!1);return ce.useEffect(()=>{const o=()=>{r(window.innerWidth<768||"ontouchstart"in window||navigator.maxTouchPoints>0)};if(o(),window.addEventListener("resize",o),t)return()=>window.removeEventListener("resize",o);if(!n.current)return;const a=n.current,{current:c}=e,u=`
      attribute vec3 position;
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `,f=`
      precision highp float;
      uniform vec2 resolution;
      uniform float time;
      uniform float xScale;
      uniform float yScale;
      uniform float distortion;

      void main() {
        vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
        float d = length(p) * distortion;
        float rx = p.x * (1.0 + d);
        float gx = p.x;
        float bx = p.x * (1.0 - d);

        float r = 0.05 / abs(p.y + sin((rx + time) * xScale) * yScale);
        float g = 0.05 / abs(p.y + sin((gx + time) * xScale) * yScale);
        float b = 0.05 / abs(p.y + sin((bx + time) * xScale) * yScale);
        
        gl_FragColor = vec4(r, g, b, 1.0);
      }
    `;let h=!0;const p=()=>{c.scene=new Q_,c.renderer=new gy({canvas:a,antialias:!1,powerPreference:"high-performance",alpha:!1}),c.renderer.setPixelRatio(1),c.renderer.setClearColor(0,1),c.camera=new Ru(-1,1,1,-1,0,-1),c.uniforms={resolution:{value:new Dt(window.innerWidth,window.innerHeight)},time:{value:0},xScale:{value:1},yScale:{value:.5},distortion:{value:.05}};const M=new Qo(2,2),b=new oy({vertexShader:u,fragmentShader:f,uniforms:c.uniforms});c.mesh=new Ui(M,b),c.scene.add(c.mesh),v()},g=M=>{h&&c.uniforms&&c.renderer&&(c.uniforms.time.value=(M-c.startTime)*.001,c.renderer.render(c.scene,c.camera)),c.animationId=requestAnimationFrame(g)},v=()=>{if(!c.renderer||!c.uniforms)return;const M=window.innerWidth,b=window.innerHeight;c.renderer.setSize(M,b,!1),c.uniforms.resolution.value.set(M,b)},_=()=>{h=!document.hidden};return p(),c.animationId=requestAnimationFrame(g),document.addEventListener("visibilitychange",_),()=>{var M;c.animationId&&cancelAnimationFrame(c.animationId),window.removeEventListener("resize",o),document.removeEventListener("visibilitychange",_),c.mesh&&(c.mesh.geometry.dispose(),c.mesh.material.dispose()),(M=c.renderer)==null||M.dispose()}},[t]),t?R.jsx("div",{className:"fixed inset-0 bg-[#020208] -z-10"}):R.jsx("canvas",{ref:n,className:"fixed top-0 left-0 w-full h-full block",style:{background:"#000"}})}const SR=()=>{const n=ce.useRef(null),[e,t]=ce.useState(!1);return ce.useEffect(()=>{const r=()=>{t(window.innerWidth<768||"ontouchstart"in window||navigator.maxTouchPoints>0)};if(r(),window.addEventListener("resize",r),e)return()=>window.removeEventListener("resize",r);const o=n.current;if(!o)return;const a=new gy({antialias:!1,alpha:!0,powerPreference:"high-performance"});a.setPixelRatio(Math.min(window.devicePixelRatio,1)),o.appendChild(a.domElement);const c=new Q_,u=new Ru(-1,1,1,-1,0,1),f=performance.now(),h="void main() { gl_Position = vec4(position, 1.0); }",p=`
      precision highp float;
      uniform vec2 iResolution;
      uniform float iTime;
      uniform vec2 iMouse;

      float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
      }

      void main() {
        vec2 uv = (gl_FragCoord.xy - 0.5 * iResolution.xy) / iResolution.y;
        vec2 mouse = (iMouse - 0.5 * iResolution.xy) / iResolution.y;
        float t = iTime * 0.2;
        float mouseDist = length(uv - mouse);

        float warp = sin(mouseDist * 20.0 - t * 4.0) * 0.1;
        warp *= smoothstep(0.4, 0.0, mouseDist);
        uv += warp;

        vec2 gridUv = abs(fract(uv * 10.0) - 0.5);
        float line = pow(1.0 - min(gridUv.x, gridUv.y), 50.0);

        vec3 gridColor = vec3(0.1, 0.5, 1.0);
        vec3 color = gridColor * line * (0.5 + sin(t * 2.0) * 0.2);

        float energy = sin(uv.x * 20.0 + t * 5.0) * sin(uv.y * 20.0 + t * 3.0);
        energy = smoothstep(0.8, 1.0, energy);
        color += vec3(1.0, 0.2, 0.8) * energy * line;

        float glow = smoothstep(0.1, 0.0, mouseDist);
        color += vec3(1.0) * glow * 0.5;

        color += random(uv + t * 0.1) * 0.05;

        gl_FragColor = vec4(color, 0.85);
      }
    `,g={iTime:{value:0},iResolution:{value:new Dt},iMouse:{value:new Dt(window.innerWidth/2,window.innerHeight/2)}},v=new Fi({vertexShader:h,fragmentShader:p,uniforms:g,transparent:!0,depthTest:!1,depthWrite:!1}),_=new Qo(2,2),M=new Ui(_,v);c.add(M);let b=!1;const y=new IntersectionObserver(([D])=>{b=D.isIntersecting},{threshold:.1});y.observe(o);const S=()=>{const D=o.clientWidth||window.innerWidth,I=o.clientHeight||window.innerHeight;a.setSize(D,I,!1),g.iResolution.value.set(D,I)};window.addEventListener("resize",S),S();const A=D=>{if(!b)return;const I=o.getBoundingClientRect();g.iMouse.value.set(D.clientX-I.left,I.bottom-D.clientY)};window.addEventListener("mousemove",A);const P=()=>{b&&(g.iTime.value=(performance.now()-f)*.001,a.render(c,u))};return a.setAnimationLoop(P),()=>{window.removeEventListener("resize",S),window.removeEventListener("mousemove",A),y.disconnect(),a.setAnimationLoop(null),a.domElement.parentNode&&a.domElement.parentNode.removeChild(a.domElement),v.dispose(),_.dispose(),a.dispose()}},[e]),e?null:R.jsx("div",{ref:n,style:{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:0},"aria-hidden":"true"})},kp=ce.createContext({});function pl(n){const e=ce.useRef(null);return e.current===null&&(e.current=n()),e.current}const Lu=ce.createContext(null),ml=ce.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});class MR extends ce.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=t.offsetHeight||0,r.width=t.offsetWidth||0,r.top=t.offsetTop,r.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function ER({children:n,isPresent:e}){const t=ce.useId(),r=ce.useRef(null),o=ce.useRef({width:0,height:0,top:0,left:0}),{nonce:a}=ce.useContext(ml);return ce.useInsertionEffect(()=>{const{width:c,height:u,top:f,left:h}=o.current;if(e||!r.current||!c||!u)return;r.current.dataset.motionPopId=t;const p=document.createElement("style");return a&&(p.nonce=a),document.head.appendChild(p),p.sheet&&p.sheet.insertRule(`
          [data-motion-pop-id="${t}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${u}px !important;
            top: ${f}px !important;
            left: ${h}px !important;
          }
        `),()=>{document.head.removeChild(p)}},[e]),R.jsx(MR,{isPresent:e,childRef:r,sizeRef:o,children:ce.cloneElement(n,{ref:r})})}const wR=({children:n,initial:e,isPresent:t,onExitComplete:r,custom:o,presenceAffectsLayout:a,mode:c})=>{const u=pl(bR),f=ce.useId(),h=ce.useCallback(g=>{u.set(g,!0);for(const v of u.values())if(!v)return;r&&r()},[u,r]),p=ce.useMemo(()=>({id:f,initial:e,isPresent:t,custom:o,onExitComplete:h,register:g=>(u.set(g,!1),()=>u.delete(g))}),a?[Math.random(),h]:[t,h]);return ce.useMemo(()=>{u.forEach((g,v)=>u.set(v,!1))},[t]),ce.useEffect(()=>{!t&&!u.size&&r&&r()},[t]),c==="popLayout"&&(n=R.jsx(ER,{isPresent:t,children:n})),R.jsx(Lu.Provider,{value:p,children:n})};function bR(){return new Map}function vy(n=!0){const e=ce.useContext(Lu);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:r,register:o}=e,a=ce.useId();ce.useEffect(()=>{n&&o(a)},[n]);const c=ce.useCallback(()=>n&&r&&r(a),[a,r,n]);return!t&&r?[!1,c]:[!0]}const Xc=n=>n.key||"";function Yv(n){const e=[];return ce.Children.forEach(n,t=>{ce.isValidElement(t)&&e.push(t)}),e}const Op=typeof window<"u",Nu=Op?ce.useLayoutEffect:ce.useEffect,Kv=({children:n,custom:e,initial:t=!0,onExitComplete:r,presenceAffectsLayout:o=!0,mode:a="sync",propagate:c=!1})=>{const[u,f]=vy(c),h=ce.useMemo(()=>Yv(n),[n]),p=c&&!u?[]:h.map(Xc),g=ce.useRef(!0),v=ce.useRef(h),_=pl(()=>new Map),[M,b]=ce.useState(h),[y,S]=ce.useState(h);Nu(()=>{g.current=!1,v.current=h;for(let D=0;D<y.length;D++){const I=Xc(y[D]);p.includes(I)?_.delete(I):_.get(I)!==!0&&_.set(I,!1)}},[y,p.length,p.join("-")]);const A=[];if(h!==M){let D=[...h];for(let I=0;I<y.length;I++){const L=y[I],k=Xc(L);p.includes(k)||(D.splice(I,0,L),A.push(L))}a==="wait"&&A.length&&(D=A),S(Yv(D)),b(h);return}const{forceRender:P}=ce.useContext(kp);return R.jsx(R.Fragment,{children:y.map(D=>{const I=Xc(D),L=c&&!u?!1:h===y||p.includes(I),k=()=>{if(_.has(I))_.set(I,!0);else return;let E=!0;_.forEach(F=>{F||(E=!1)}),E&&(P==null||P(),S(v.current),c&&(f==null||f()),r&&r())};return R.jsx(wR,{isPresent:L,initial:!g.current||t?void 0:!1,custom:L?void 0:e,presenceAffectsLayout:o,mode:a,onExitComplete:L?void 0:k,children:D},I)})})},oi=n=>n;let xy=oi;function Bp(n){let e;return()=>(e===void 0&&(e=n()),e)}const $o=(n,e,t)=>{const r=e-n;return r===0?1:(t-n)/r},wr=n=>n*1e3,br=n=>n/1e3,TR={useManualTiming:!1};function AR(n){let e=new Set,t=new Set,r=!1,o=!1;const a=new WeakSet;let c={delta:0,timestamp:0,isProcessing:!1};function u(h){a.has(h)&&(f.schedule(h),n()),h(c)}const f={schedule:(h,p=!1,g=!1)=>{const _=g&&r?e:t;return p&&a.add(h),_.has(h)||_.add(h),h},cancel:h=>{t.delete(h),a.delete(h)},process:h=>{if(c=h,r){o=!0;return}r=!0,[e,t]=[t,e],e.forEach(u),e.clear(),r=!1,o&&(o=!1,f.process(h))}};return f}const $c=["read","resolveKeyframes","update","preRender","render","postRender"],CR=40;function _y(n,e){let t=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},a=()=>t=!0,c=$c.reduce((S,A)=>(S[A]=AR(a),S),{}),{read:u,resolveKeyframes:f,update:h,preRender:p,render:g,postRender:v}=c,_=()=>{const S=performance.now();t=!1,o.delta=r?1e3/60:Math.max(Math.min(S-o.timestamp,CR),1),o.timestamp=S,o.isProcessing=!0,u.process(o),f.process(o),h.process(o),p.process(o),g.process(o),v.process(o),o.isProcessing=!1,t&&e&&(r=!1,n(_))},M=()=>{t=!0,r=!0,o.isProcessing||n(_)};return{schedule:$c.reduce((S,A)=>{const P=c[A];return S[A]=(D,I=!1,L=!1)=>(t||M(),P.schedule(D,I,L)),S},{}),cancel:S=>{for(let A=0;A<$c.length;A++)c[$c[A]].cancel(S)},state:o,steps:c}}const{schedule:Vt,cancel:Cr,state:En,steps:nh}=_y(typeof requestAnimationFrame<"u"?requestAnimationFrame:oi,!0),yy=ce.createContext({strict:!1}),Zv={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},qo={};for(const n in Zv)qo[n]={isEnabled:e=>Zv[n].some(t=>!!e[t])};function RR(n){for(const e in n)qo[e]={...qo[e],...n[e]}}const PR=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function mu(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||PR.has(n)}let Sy=n=>!mu(n);function DR(n){n&&(Sy=e=>e.startsWith("on")?!mu(e):n(e))}try{DR(require("@emotion/is-prop-valid").default)}catch{}function LR(n,e,t){const r={};for(const o in n)o==="values"&&typeof n.values=="object"||(Sy(o)||t===!0&&mu(o)||!e&&!mu(o)||n.draggable&&o.startsWith("onDrag"))&&(r[o]=n[o]);return r}function NR(n){if(typeof Proxy>"u")return n;const e=new Map,t=(...r)=>n(...r);return new Proxy(t,{get:(r,o)=>o==="create"?n:(e.has(o)||e.set(o,n(o)),e.get(o))})}const Iu=ce.createContext({});function ol(n){return typeof n=="string"||Array.isArray(n)}function Uu(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}const zp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Vp=["initial",...zp];function Fu(n){return Uu(n.animate)||Vp.some(e=>ol(n[e]))}function My(n){return!!(Fu(n)||n.variants)}function IR(n,e){if(Fu(n)){const{initial:t,animate:r}=n;return{initial:t===!1||ol(t)?t:void 0,animate:ol(r)?r:void 0}}return n.inherit!==!1?e:{}}function UR(n){const{initial:e,animate:t}=IR(n,ce.useContext(Iu));return ce.useMemo(()=>({initial:e,animate:t}),[Qv(e),Qv(t)])}function Qv(n){return Array.isArray(n)?n.join(" "):n}const FR=Symbol.for("motionComponentSymbol");function Fo(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function kR(n,e,t){return ce.useCallback(r=>{r&&n.onMount&&n.onMount(r),e&&(r?e.mount(r):e.unmount()),t&&(typeof t=="function"?t(r):Fo(t)&&(t.current=r))},[e])}const Gp=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),OR="framerAppearId",Ey="data-"+Gp(OR),{schedule:Hp}=_y(queueMicrotask,!1),wy=ce.createContext({});function BR(n,e,t,r,o){var a,c;const{visualElement:u}=ce.useContext(Iu),f=ce.useContext(yy),h=ce.useContext(Lu),p=ce.useContext(ml).reducedMotion,g=ce.useRef(null);r=r||f.renderer,!g.current&&r&&(g.current=r(n,{visualState:e,parent:u,props:t,presenceContext:h,blockInitialAnimation:h?h.initial===!1:!1,reducedMotionConfig:p}));const v=g.current,_=ce.useContext(wy);v&&!v.projection&&o&&(v.type==="html"||v.type==="svg")&&zR(g.current,t,o,_);const M=ce.useRef(!1);ce.useInsertionEffect(()=>{v&&M.current&&v.update(t,h)});const b=t[Ey],y=ce.useRef(!!b&&!(!((a=window.MotionHandoffIsComplete)===null||a===void 0)&&a.call(window,b))&&((c=window.MotionHasOptimisedAnimation)===null||c===void 0?void 0:c.call(window,b)));return Nu(()=>{v&&(M.current=!0,window.MotionIsMounted=!0,v.updateFeatures(),Hp.render(v.render),y.current&&v.animationState&&v.animationState.animateChanges())}),ce.useEffect(()=>{v&&(!y.current&&v.animationState&&v.animationState.animateChanges(),y.current&&(queueMicrotask(()=>{var S;(S=window.MotionHandoffMarkAsComplete)===null||S===void 0||S.call(window,b)}),y.current=!1))}),v}function zR(n,e,t,r){const{layoutId:o,layout:a,drag:c,dragConstraints:u,layoutScroll:f,layoutRoot:h}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:by(n.parent)),n.projection.setOptions({layoutId:o,layout:a,alwaysMeasureLayout:!!c||u&&Fo(u),visualElement:n,animationType:typeof a=="string"?a:"both",initialPromotionConfig:r,layoutScroll:f,layoutRoot:h})}function by(n){if(n)return n.options.allowProjection!==!1?n.projection:by(n.parent)}function VR({preloadedFeatures:n,createVisualElement:e,useRender:t,useVisualState:r,Component:o}){var a,c;n&&RR(n);function u(h,p){let g;const v={...ce.useContext(ml),...h,layoutId:GR(h)},{isStatic:_}=v,M=UR(h),b=r(h,_);if(!_&&Op){HR();const y=WR(v);g=y.MeasureLayout,M.visualElement=BR(o,b,v,e,y.ProjectionNode)}return R.jsxs(Iu.Provider,{value:M,children:[g&&M.visualElement?R.jsx(g,{visualElement:M.visualElement,...v}):null,t(o,h,kR(b,M.visualElement,p),b,_,M.visualElement)]})}u.displayName=`motion.${typeof o=="string"?o:`create(${(c=(a=o.displayName)!==null&&a!==void 0?a:o.name)!==null&&c!==void 0?c:""})`}`;const f=ce.forwardRef(u);return f[FR]=o,f}function GR({layoutId:n}){const e=ce.useContext(kp).id;return e&&n!==void 0?e+"-"+n:n}function HR(n,e){ce.useContext(yy).strict}function WR(n){const{drag:e,layout:t}=qo;if(!e&&!t)return{};const r={...e,...t};return{MeasureLayout:e!=null&&e.isEnabled(n)||t!=null&&t.isEnabled(n)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const jR=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Wp(n){return typeof n!="string"||n.includes("-")?!1:!!(jR.indexOf(n)>-1||/[A-Z]/u.test(n))}function Jv(n){const e=[{},{}];return n==null||n.values.forEach((t,r)=>{e[0][r]=t.get(),e[1][r]=t.getVelocity()}),e}function jp(n,e,t,r){if(typeof e=="function"){const[o,a]=Jv(r);e=e(t!==void 0?t:n.custom,o,a)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[o,a]=Jv(r);e=e(t!==void 0?t:n.custom,o,a)}return e}const lp=n=>Array.isArray(n),XR=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),$R=n=>lp(n)?n[n.length-1]||0:n,wn=n=>!!(n&&n.getVelocity);function su(n){const e=wn(n)?n.get():n;return XR(e)?e.toValue():e}function qR({scrapeMotionValuesFromProps:n,createRenderState:e,onUpdate:t},r,o,a){const c={latestValues:YR(r,o,a,n),renderState:e()};return t&&(c.onMount=u=>t({props:r,current:u,...c}),c.onUpdate=u=>t(u)),c}const Ty=n=>(e,t)=>{const r=ce.useContext(Iu),o=ce.useContext(Lu),a=()=>qR(n,e,r,o);return t?a():pl(a)};function YR(n,e,t,r){const o={},a=r(n,{});for(const v in a)o[v]=su(a[v]);let{initial:c,animate:u}=n;const f=Fu(n),h=My(n);e&&h&&!f&&n.inherit!==!1&&(c===void 0&&(c=e.initial),u===void 0&&(u=e.animate));let p=t?t.initial===!1:!1;p=p||c===!1;const g=p?u:c;if(g&&typeof g!="boolean"&&!Uu(g)){const v=Array.isArray(g)?g:[g];for(let _=0;_<v.length;_++){const M=jp(n,v[_]);if(M){const{transitionEnd:b,transition:y,...S}=M;for(const A in S){let P=S[A];if(Array.isArray(P)){const D=p?P.length-1:0;P=P[D]}P!==null&&(o[A]=P)}for(const A in b)o[A]=b[A]}}}return o}const ea=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],$s=new Set(ea),Ay=n=>e=>typeof e=="string"&&e.startsWith(n),Cy=Ay("--"),KR=Ay("var(--"),Xp=n=>KR(n)?ZR.test(n.split("/*")[0].trim()):!1,ZR=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Ry=(n,e)=>e&&typeof n=="number"?e.transform(n):n,Rr=(n,e,t)=>t>e?e:t<n?n:t,ta={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},al={...ta,transform:n=>Rr(0,1,n)},qc={...ta,default:1},gl=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),rs=gl("deg"),Qi=gl("%"),rt=gl("px"),QR=gl("vh"),JR=gl("vw"),ex={...Qi,parse:n=>Qi.parse(n)/100,transform:n=>Qi.transform(n*100)},eP={borderWidth:rt,borderTopWidth:rt,borderRightWidth:rt,borderBottomWidth:rt,borderLeftWidth:rt,borderRadius:rt,radius:rt,borderTopLeftRadius:rt,borderTopRightRadius:rt,borderBottomRightRadius:rt,borderBottomLeftRadius:rt,width:rt,maxWidth:rt,height:rt,maxHeight:rt,top:rt,right:rt,bottom:rt,left:rt,padding:rt,paddingTop:rt,paddingRight:rt,paddingBottom:rt,paddingLeft:rt,margin:rt,marginTop:rt,marginRight:rt,marginBottom:rt,marginLeft:rt,backgroundPositionX:rt,backgroundPositionY:rt},tP={rotate:rs,rotateX:rs,rotateY:rs,rotateZ:rs,scale:qc,scaleX:qc,scaleY:qc,scaleZ:qc,skew:rs,skewX:rs,skewY:rs,distance:rt,translateX:rt,translateY:rt,translateZ:rt,x:rt,y:rt,z:rt,perspective:rt,transformPerspective:rt,opacity:al,originX:ex,originY:ex,originZ:rt},tx={...ta,transform:Math.round},$p={...eP,...tP,zIndex:tx,size:rt,fillOpacity:al,strokeOpacity:al,numOctaves:tx},nP={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},iP=ea.length;function rP(n,e,t){let r="",o=!0;for(let a=0;a<iP;a++){const c=ea[a],u=n[c];if(u===void 0)continue;let f=!0;if(typeof u=="number"?f=u===(c.startsWith("scale")?1:0):f=parseFloat(u)===0,!f||t){const h=Ry(u,$p[c]);if(!f){o=!1;const p=nP[c]||c;r+=`${p}(${h}) `}t&&(e[c]=h)}}return r=r.trim(),t?r=t(e,o?"":r):o&&(r="none"),r}function qp(n,e,t){const{style:r,vars:o,transformOrigin:a}=n;let c=!1,u=!1;for(const f in e){const h=e[f];if($s.has(f)){c=!0;continue}else if(Cy(f)){o[f]=h;continue}else{const p=Ry(h,$p[f]);f.startsWith("origin")?(u=!0,a[f]=p):r[f]=p}}if(e.transform||(c||t?r.transform=rP(e,n.transform,t):r.transform&&(r.transform="none")),u){const{originX:f="50%",originY:h="50%",originZ:p=0}=a;r.transformOrigin=`${f} ${h} ${p}`}}const sP={offset:"stroke-dashoffset",array:"stroke-dasharray"},oP={offset:"strokeDashoffset",array:"strokeDasharray"};function aP(n,e,t=1,r=0,o=!0){n.pathLength=1;const a=o?sP:oP;n[a.offset]=rt.transform(-r);const c=rt.transform(e),u=rt.transform(t);n[a.array]=`${c} ${u}`}function nx(n,e,t){return typeof n=="string"?n:rt.transform(e+t*n)}function lP(n,e,t){const r=nx(e,n.x,n.width),o=nx(t,n.y,n.height);return`${r} ${o}`}function Yp(n,{attrX:e,attrY:t,attrScale:r,originX:o,originY:a,pathLength:c,pathSpacing:u=1,pathOffset:f=0,...h},p,g){if(qp(n,h,g),p){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:v,style:_,dimensions:M}=n;v.transform&&(M&&(_.transform=v.transform),delete v.transform),M&&(o!==void 0||a!==void 0||_.transform)&&(_.transformOrigin=lP(M,o!==void 0?o:.5,a!==void 0?a:.5)),e!==void 0&&(v.x=e),t!==void 0&&(v.y=t),r!==void 0&&(v.scale=r),c!==void 0&&aP(v,c,u,f,!1)}const Kp=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Py=()=>({...Kp(),attrs:{}}),Zp=n=>typeof n=="string"&&n.toLowerCase()==="svg";function Dy(n,{style:e,vars:t},r,o){Object.assign(n.style,e,o&&o.getProjectionStyles(r));for(const a in t)n.style.setProperty(a,t[a])}const Ly=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Ny(n,e,t,r){Dy(n,e,void 0,r);for(const o in e.attrs)n.setAttribute(Ly.has(o)?o:Gp(o),e.attrs[o])}const gu={};function cP(n){Object.assign(gu,n)}function Iy(n,{layout:e,layoutId:t}){return $s.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!gu[n]||n==="opacity")}function Qp(n,e,t){var r;const{style:o}=n,a={};for(const c in o)(wn(o[c])||e.style&&wn(e.style[c])||Iy(c,n)||((r=t==null?void 0:t.getValue(c))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(a[c]=o[c]);return a}function Uy(n,e,t){const r=Qp(n,e,t);for(const o in n)if(wn(n[o])||wn(e[o])){const a=ea.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;r[a]=n[o]}return r}function uP(n,e){try{e.dimensions=typeof n.getBBox=="function"?n.getBBox():n.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}const ix=["x","y","width","height","cx","cy","r"],dP={useVisualState:Ty({scrapeMotionValuesFromProps:Uy,createRenderState:Py,onUpdate:({props:n,prevProps:e,current:t,renderState:r,latestValues:o})=>{if(!t)return;let a=!!n.drag;if(!a){for(const u in o)if($s.has(u)){a=!0;break}}if(!a)return;let c=!e;if(e)for(let u=0;u<ix.length;u++){const f=ix[u];n[f]!==e[f]&&(c=!0)}c&&Vt.read(()=>{uP(t,r),Vt.render(()=>{Yp(r,o,Zp(t.tagName),n.transformTemplate),Ny(t,r)})})}})},fP={useVisualState:Ty({scrapeMotionValuesFromProps:Qp,createRenderState:Kp})};function Fy(n,e,t){for(const r in e)!wn(e[r])&&!Iy(r,t)&&(n[r]=e[r])}function hP({transformTemplate:n},e){return ce.useMemo(()=>{const t=Kp();return qp(t,e,n),Object.assign({},t.vars,t.style)},[e])}function pP(n,e){const t=n.style||{},r={};return Fy(r,t,n),Object.assign(r,hP(n,e)),r}function mP(n,e){const t={},r=pP(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=r,t}function gP(n,e,t,r){const o=ce.useMemo(()=>{const a=Py();return Yp(a,e,Zp(r),n.transformTemplate),{...a.attrs,style:{...a.style}}},[e]);if(n.style){const a={};Fy(a,n.style,n),o.style={...a,...o.style}}return o}function vP(n=!1){return(t,r,o,{latestValues:a},c)=>{const f=(Wp(t)?gP:mP)(r,a,c,t),h=LR(r,typeof t=="string",n),p=t!==ce.Fragment?{...h,...f,ref:o}:{},{children:g}=r,v=ce.useMemo(()=>wn(g)?g.get():g,[g]);return ce.createElement(t,{...p,children:v})}}function xP(n,e){return function(r,{forwardMotionProps:o}={forwardMotionProps:!1}){const c={...Wp(r)?dP:fP,preloadedFeatures:n,useRender:vP(o),createVisualElement:e,Component:r};return VR(c)}}function ky(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let r=0;r<t;r++)if(e[r]!==n[r])return!1;return!0}function ku(n,e,t){const r=n.getProps();return jp(r,e,t!==void 0?t:r.custom,n)}const _P=Bp(()=>window.ScrollTimeline!==void 0);class yP{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,t){for(let r=0;r<this.animations.length;r++)this.animations[r][e]=t}attachTimeline(e,t){const r=this.animations.map(o=>{if(_P()&&o.attachTimeline)return o.attachTimeline(e);if(typeof t=="function")return t(o)});return()=>{r.forEach((o,a)=>{o&&o(),this.animations[a].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let t=0;t<this.animations.length;t++)e=Math.max(e,this.animations[t].duration);return e}runAll(e){this.animations.forEach(t=>t[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class SP extends yP{then(e,t){return Promise.all(this.animations).then(e).catch(t)}}function Jp(n,e){return n?n[e]||n.default||n:void 0}const cp=2e4;function Oy(n){let e=0;const t=50;let r=n.next(e);for(;!r.done&&e<cp;)e+=t,r=n.next(e);return e>=cp?1/0:e}function em(n){return typeof n=="function"}function rx(n,e){n.timeline=e,n.onfinish=null}const tm=n=>Array.isArray(n)&&typeof n[0]=="number",MP={linearEasing:void 0};function EP(n,e){const t=Bp(n);return()=>{var r;return(r=MP[e])!==null&&r!==void 0?r:t()}}const vu=EP(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),By=(n,e,t=10)=>{let r="";const o=Math.max(Math.round(e/t),2);for(let a=0;a<o;a++)r+=n($o(0,o-1,a))+", ";return`linear(${r.substring(0,r.length-2)})`};function zy(n){return!!(typeof n=="function"&&vu()||!n||typeof n=="string"&&(n in up||vu())||tm(n)||Array.isArray(n)&&n.every(zy))}const Ka=([n,e,t,r])=>`cubic-bezier(${n}, ${e}, ${t}, ${r})`,up={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ka([0,.65,.55,1]),circOut:Ka([.55,0,1,.45]),backIn:Ka([.31,.01,.66,-.59]),backOut:Ka([.33,1.53,.69,.99])};function Vy(n,e){if(n)return typeof n=="function"&&vu()?By(n,e):tm(n)?Ka(n):Array.isArray(n)?n.map(t=>Vy(t,e)||up.easeOut):up[n]}const Di={x:!1,y:!1};function Gy(){return Di.x||Di.y}function wP(n,e,t){var r;if(n instanceof Element)return[n];if(typeof n=="string"){let o=document;const a=(r=void 0)!==null&&r!==void 0?r:o.querySelectorAll(n);return a?Array.from(a):[]}return Array.from(n)}function Hy(n,e){const t=wP(n),r=new AbortController,o={passive:!0,...e,signal:r.signal};return[t,o,()=>r.abort()]}function sx(n){return e=>{e.pointerType==="touch"||Gy()||n(e)}}function bP(n,e,t={}){const[r,o,a]=Hy(n,t),c=sx(u=>{const{target:f}=u,h=e(u);if(typeof h!="function"||!f)return;const p=sx(g=>{h(g),f.removeEventListener("pointerleave",p)});f.addEventListener("pointerleave",p,o)});return r.forEach(u=>{u.addEventListener("pointerenter",c,o)}),a}const Wy=(n,e)=>e?n===e?!0:Wy(n,e.parentElement):!1,nm=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,TP=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function AP(n){return TP.has(n.tagName)||n.tabIndex!==-1}const Za=new WeakSet;function ox(n){return e=>{e.key==="Enter"&&n(e)}}function ih(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const CP=(n,e)=>{const t=n.currentTarget;if(!t)return;const r=ox(()=>{if(Za.has(t))return;ih(t,"down");const o=ox(()=>{ih(t,"up")}),a=()=>ih(t,"cancel");t.addEventListener("keyup",o,e),t.addEventListener("blur",a,e)});t.addEventListener("keydown",r,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",r),e)};function ax(n){return nm(n)&&!Gy()}function RP(n,e,t={}){const[r,o,a]=Hy(n,t),c=u=>{const f=u.currentTarget;if(!ax(u)||Za.has(f))return;Za.add(f);const h=e(u),p=(_,M)=>{window.removeEventListener("pointerup",g),window.removeEventListener("pointercancel",v),!(!ax(_)||!Za.has(f))&&(Za.delete(f),typeof h=="function"&&h(_,{success:M}))},g=_=>{p(_,t.useGlobalTarget||Wy(f,_.target))},v=_=>{p(_,!1)};window.addEventListener("pointerup",g,o),window.addEventListener("pointercancel",v,o)};return r.forEach(u=>{!AP(u)&&u.getAttribute("tabindex")===null&&(u.tabIndex=0),(t.useGlobalTarget?window:u).addEventListener("pointerdown",c,o),u.addEventListener("focus",h=>CP(h,o),o)}),a}function PP(n){return n==="x"||n==="y"?Di[n]?null:(Di[n]=!0,()=>{Di[n]=!1}):Di.x||Di.y?null:(Di.x=Di.y=!0,()=>{Di.x=Di.y=!1})}const jy=new Set(["width","height","top","left","right","bottom",...ea]);let ou;function DP(){ou=void 0}const Ji={now:()=>(ou===void 0&&Ji.set(En.isProcessing||TR.useManualTiming?En.timestamp:performance.now()),ou),set:n=>{ou=n,queueMicrotask(DP)}};function im(n,e){n.indexOf(e)===-1&&n.push(e)}function rm(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}class sm{constructor(){this.subscriptions=[]}add(e){return im(this.subscriptions,e),()=>rm(this.subscriptions,e)}notify(e,t,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,t,r);else for(let a=0;a<o;a++){const c=this.subscriptions[a];c&&c(e,t,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function Xy(n,e){return e?n*(1e3/e):0}const lx=30,LP=n=>!isNaN(parseFloat(n)),Ja={current:void 0};class NP{constructor(e,t={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,o=!0)=>{const a=Ji.now();this.updatedAt!==a&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),o&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=Ji.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=LP(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new sm);const r=this.events[e].add(t);return e==="change"?()=>{r(),Vt.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e,t=!0){!t||!this.passiveEffect?this.updateAndNotify(e,t):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,t,r){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return Ja.current&&Ja.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=Ji.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>lx)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,lx);return Xy(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Yo(n,e){return new NP(n,e)}function IP(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,Yo(t))}function UP(n,e){const t=ku(n,e);let{transitionEnd:r={},transition:o={},...a}=t||{};a={...a,...r};for(const c in a){const u=$R(a[c]);IP(n,c,u)}}function FP(n){return!!(wn(n)&&n.add)}function dp(n,e){const t=n.getValue("willChange");if(FP(t))return t.add(e)}function $y(n){return n.props[Ey]}const qy=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,kP=1e-7,OP=12;function BP(n,e,t,r,o){let a,c,u=0;do c=e+(t-e)/2,a=qy(c,r,o)-n,a>0?t=c:e=c;while(Math.abs(a)>kP&&++u<OP);return c}function vl(n,e,t,r){if(n===e&&t===r)return oi;const o=a=>BP(a,0,1,n,t);return a=>a===0||a===1?a:qy(o(a),e,r)}const Yy=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,Ky=n=>e=>1-n(1-e),Zy=vl(.33,1.53,.69,.99),om=Ky(Zy),Qy=Yy(om),Jy=n=>(n*=2)<1?.5*om(n):.5*(2-Math.pow(2,-10*(n-1))),am=n=>1-Math.sin(Math.acos(n)),eS=Ky(am),tS=Yy(am),nS=n=>/^0[^.\s]+$/u.test(n);function zP(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||nS(n):!0}const el=n=>Math.round(n*1e5)/1e5,lm=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function VP(n){return n==null}const GP=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,cm=(n,e)=>t=>!!(typeof t=="string"&&GP.test(t)&&t.startsWith(n)||e&&!VP(t)&&Object.prototype.hasOwnProperty.call(t,e)),iS=(n,e,t)=>r=>{if(typeof r!="string")return r;const[o,a,c,u]=r.match(lm);return{[n]:parseFloat(o),[e]:parseFloat(a),[t]:parseFloat(c),alpha:u!==void 0?parseFloat(u):1}},HP=n=>Rr(0,255,n),rh={...ta,transform:n=>Math.round(HP(n))},Bs={test:cm("rgb","red"),parse:iS("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:r=1})=>"rgba("+rh.transform(n)+", "+rh.transform(e)+", "+rh.transform(t)+", "+el(al.transform(r))+")"};function WP(n){let e="",t="",r="",o="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),r=n.substring(5,7),o=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),r=n.substring(3,4),o=n.substring(4,5),e+=e,t+=t,r+=r,o+=o),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const fp={test:cm("#"),parse:WP,transform:Bs.transform},ko={test:cm("hsl","hue"),parse:iS("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:r=1})=>"hsla("+Math.round(n)+", "+Qi.transform(el(e))+", "+Qi.transform(el(t))+", "+el(al.transform(r))+")"},Fn={test:n=>Bs.test(n)||fp.test(n)||ko.test(n),parse:n=>Bs.test(n)?Bs.parse(n):ko.test(n)?ko.parse(n):fp.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Bs.transform(n):ko.transform(n)},jP=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function XP(n){var e,t;return isNaN(n)&&typeof n=="string"&&(((e=n.match(lm))===null||e===void 0?void 0:e.length)||0)+(((t=n.match(jP))===null||t===void 0?void 0:t.length)||0)>0}const rS="number",sS="color",$P="var",qP="var(",cx="${}",YP=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ll(n){const e=n.toString(),t=[],r={color:[],number:[],var:[]},o=[];let a=0;const u=e.replace(YP,f=>(Fn.test(f)?(r.color.push(a),o.push(sS),t.push(Fn.parse(f))):f.startsWith(qP)?(r.var.push(a),o.push($P),t.push(f)):(r.number.push(a),o.push(rS),t.push(parseFloat(f))),++a,cx)).split(cx);return{values:t,split:u,indexes:r,types:o}}function oS(n){return ll(n).values}function aS(n){const{split:e,types:t}=ll(n),r=e.length;return o=>{let a="";for(let c=0;c<r;c++)if(a+=e[c],o[c]!==void 0){const u=t[c];u===rS?a+=el(o[c]):u===sS?a+=Fn.transform(o[c]):a+=o[c]}return a}}const KP=n=>typeof n=="number"?0:n;function ZP(n){const e=oS(n);return aS(n)(e.map(KP))}const ls={test:XP,parse:oS,createTransformer:aS,getAnimatableNone:ZP},QP=new Set(["brightness","contrast","saturate","opacity"]);function JP(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[r]=t.match(lm)||[];if(!r)return n;const o=t.replace(r,"");let a=QP.has(e)?1:0;return r!==t&&(a*=100),e+"("+a+o+")"}const e2=/\b([a-z-]*)\(.*?\)/gu,hp={...ls,getAnimatableNone:n=>{const e=n.match(e2);return e?e.map(JP).join(" "):n}},t2={...$p,color:Fn,backgroundColor:Fn,outlineColor:Fn,fill:Fn,stroke:Fn,borderColor:Fn,borderTopColor:Fn,borderRightColor:Fn,borderBottomColor:Fn,borderLeftColor:Fn,filter:hp,WebkitFilter:hp},um=n=>t2[n];function lS(n,e){let t=um(n);return t!==hp&&(t=ls),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const n2=new Set(["auto","none","0"]);function i2(n,e,t){let r=0,o;for(;r<n.length&&!o;){const a=n[r];typeof a=="string"&&!n2.has(a)&&ll(a).values.length&&(o=n[r]),r++}if(o&&t)for(const a of e)n[a]=lS(t,o)}const ux=n=>n===ta||n===rt,dx=(n,e)=>parseFloat(n.split(", ")[e]),fx=(n,e)=>(t,{transform:r})=>{if(r==="none"||!r)return 0;const o=r.match(/^matrix3d\((.+)\)$/u);if(o)return dx(o[1],e);{const a=r.match(/^matrix\((.+)\)$/u);return a?dx(a[1],n):0}},r2=new Set(["x","y","z"]),s2=ea.filter(n=>!r2.has(n));function o2(n){const e=[];return s2.forEach(t=>{const r=n.getValue(t);r!==void 0&&(e.push([t,r.get()]),r.set(t.startsWith("scale")?1:0))}),e}const Ko={width:({x:n},{paddingLeft:e="0",paddingRight:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),height:({y:n},{paddingTop:e="0",paddingBottom:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:fx(4,13),y:fx(5,14)};Ko.translateX=Ko.x;Ko.translateY=Ko.y;const Vs=new Set;let pp=!1,mp=!1;function cS(){if(mp){const n=Array.from(Vs).filter(r=>r.needsMeasurement),e=new Set(n.map(r=>r.element)),t=new Map;e.forEach(r=>{const o=o2(r);o.length&&(t.set(r,o),r.render())}),n.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const o=t.get(r);o&&o.forEach(([a,c])=>{var u;(u=r.getValue(a))===null||u===void 0||u.set(c)})}),n.forEach(r=>r.measureEndState()),n.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}mp=!1,pp=!1,Vs.forEach(n=>n.complete()),Vs.clear()}function uS(){Vs.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(mp=!0)})}function a2(){uS(),cS()}class dm{constructor(e,t,r,o,a,c=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=r,this.motionValue=o,this.element=a,this.isAsync=c}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Vs.add(this),pp||(pp=!0,Vt.read(uS),Vt.resolveKeyframes(cS))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:r,motionValue:o}=this;for(let a=0;a<e.length;a++)if(e[a]===null)if(a===0){const c=o==null?void 0:o.get(),u=e[e.length-1];if(c!==void 0)e[0]=c;else if(r&&t){const f=r.readValue(t,u);f!=null&&(e[0]=f)}e[0]===void 0&&(e[0]=u),o&&c===void 0&&o.set(e[0])}else e[a]=e[a-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Vs.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Vs.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const dS=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),l2=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function c2(n){const e=l2.exec(n);if(!e)return[,];const[,t,r,o]=e;return[`--${t??r}`,o]}function fS(n,e,t=1){const[r,o]=c2(n);if(!r)return;const a=window.getComputedStyle(e).getPropertyValue(r);if(a){const c=a.trim();return dS(c)?parseFloat(c):c}return Xp(o)?fS(o,e,t+1):o}const hS=n=>e=>e.test(n),u2={test:n=>n==="auto",parse:n=>n},pS=[ta,rt,Qi,rs,JR,QR,u2],hx=n=>pS.find(hS(n));class mS extends dm{constructor(e,t,r,o,a){super(e,t,r,o,a,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:r}=this;if(!t||!t.current)return;super.readKeyframes();for(let f=0;f<e.length;f++){let h=e[f];if(typeof h=="string"&&(h=h.trim(),Xp(h))){const p=fS(h,t.current);p!==void 0&&(e[f]=p),f===e.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!jy.has(r)||e.length!==2)return;const[o,a]=e,c=hx(o),u=hx(a);if(c!==u)if(ux(c)&&ux(u))for(let f=0;f<e.length;f++){const h=e[f];typeof h=="string"&&(e[f]=parseFloat(h))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,r=[];for(let o=0;o<e.length;o++)zP(e[o])&&r.push(o);r.length&&i2(e,r,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ko[r](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const o=t[t.length-1];o!==void 0&&e.getValue(r,o).jump(o,!1)}measureEndState(){var e;const{element:t,name:r,unresolvedKeyframes:o}=this;if(!t||!t.current)return;const a=t.getValue(r);a&&a.jump(this.measuredOrigin,!1);const c=o.length-1,u=o[c];o[c]=Ko[r](t.measureViewportBox(),window.getComputedStyle(t.current)),u!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=u),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([f,h])=>{t.getValue(f).set(h)}),this.resolveNoneKeyframes()}}const px=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(ls.test(n)||n==="0")&&!n.startsWith("url("));function d2(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function f2(n,e,t,r){const o=n[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const a=n[n.length-1],c=px(o,e),u=px(a,e);return!c||!u?!1:d2(n)||(t==="spring"||em(t))&&r}const h2=n=>n!==null;function Ou(n,{repeat:e,repeatType:t="loop"},r){const o=n.filter(h2),a=e&&t!=="loop"&&e%2===1?0:o.length-1;return!a||r===void 0?o[a]:r}const p2=40;class gS{constructor({autoplay:e=!0,delay:t=0,type:r="keyframes",repeat:o=0,repeatDelay:a=0,repeatType:c="loop",...u}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Ji.now(),this.options={autoplay:e,delay:t,type:r,repeat:o,repeatDelay:a,repeatType:c,...u},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>p2?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&a2(),this._resolved}onKeyframesResolved(e,t){this.resolvedAt=Ji.now(),this.hasAttemptedResolve=!0;const{name:r,type:o,velocity:a,delay:c,onComplete:u,onUpdate:f,isGenerator:h}=this.options;if(!h&&!f2(e,r,o,a))if(c)this.options.duration=0;else{f&&f(Ou(e,this.options,t)),u&&u(),this.resolveFinishedPromise();return}const p=this.initPlayback(e,t);p!==!1&&(this._resolved={keyframes:e,finalKeyframe:t,...p},this.onPostResolved())}onPostResolved(){}then(e,t){return this.currentFinishedPromise.then(e,t)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const nn=(n,e,t)=>n+(e-n)*t;function sh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function m2({hue:n,saturation:e,lightness:t,alpha:r}){n/=360,e/=100,t/=100;let o=0,a=0,c=0;if(!e)o=a=c=t;else{const u=t<.5?t*(1+e):t+e-t*e,f=2*t-u;o=sh(f,u,n+1/3),a=sh(f,u,n),c=sh(f,u,n-1/3)}return{red:Math.round(o*255),green:Math.round(a*255),blue:Math.round(c*255),alpha:r}}function xu(n,e){return t=>t>0?e:n}const oh=(n,e,t)=>{const r=n*n,o=t*(e*e-r)+r;return o<0?0:Math.sqrt(o)},g2=[fp,Bs,ko],v2=n=>g2.find(e=>e.test(n));function mx(n){const e=v2(n);if(!e)return!1;let t=e.parse(n);return e===ko&&(t=m2(t)),t}const gx=(n,e)=>{const t=mx(n),r=mx(e);if(!t||!r)return xu(n,e);const o={...t};return a=>(o.red=oh(t.red,r.red,a),o.green=oh(t.green,r.green,a),o.blue=oh(t.blue,r.blue,a),o.alpha=nn(t.alpha,r.alpha,a),Bs.transform(o))},x2=(n,e)=>t=>e(n(t)),xl=(...n)=>n.reduce(x2),gp=new Set(["none","hidden"]);function _2(n,e){return gp.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function y2(n,e){return t=>nn(n,e,t)}function fm(n){return typeof n=="number"?y2:typeof n=="string"?Xp(n)?xu:Fn.test(n)?gx:E2:Array.isArray(n)?vS:typeof n=="object"?Fn.test(n)?gx:S2:xu}function vS(n,e){const t=[...n],r=t.length,o=n.map((a,c)=>fm(a)(a,e[c]));return a=>{for(let c=0;c<r;c++)t[c]=o[c](a);return t}}function S2(n,e){const t={...n,...e},r={};for(const o in t)n[o]!==void 0&&e[o]!==void 0&&(r[o]=fm(n[o])(n[o],e[o]));return o=>{for(const a in r)t[a]=r[a](o);return t}}function M2(n,e){var t;const r=[],o={color:0,var:0,number:0};for(let a=0;a<e.values.length;a++){const c=e.types[a],u=n.indexes[c][o[c]],f=(t=n.values[u])!==null&&t!==void 0?t:0;r[a]=f,o[c]++}return r}const E2=(n,e)=>{const t=ls.createTransformer(e),r=ll(n),o=ll(e);return r.indexes.var.length===o.indexes.var.length&&r.indexes.color.length===o.indexes.color.length&&r.indexes.number.length>=o.indexes.number.length?gp.has(n)&&!o.values.length||gp.has(e)&&!r.values.length?_2(n,e):xl(vS(M2(r,o),o.values),t):xu(n,e)};function xS(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?nn(n,e,t):fm(n)(n,e)}const w2=5;function _S(n,e,t){const r=Math.max(e-w2,0);return Xy(t-n(r),e-r)}const sn={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},ah=.001;function b2({duration:n=sn.duration,bounce:e=sn.bounce,velocity:t=sn.velocity,mass:r=sn.mass}){let o,a,c=1-e;c=Rr(sn.minDamping,sn.maxDamping,c),n=Rr(sn.minDuration,sn.maxDuration,br(n)),c<1?(o=h=>{const p=h*c,g=p*n,v=p-t,_=vp(h,c),M=Math.exp(-g);return ah-v/_*M},a=h=>{const g=h*c*n,v=g*t+t,_=Math.pow(c,2)*Math.pow(h,2)*n,M=Math.exp(-g),b=vp(Math.pow(h,2),c);return(-o(h)+ah>0?-1:1)*((v-_)*M)/b}):(o=h=>{const p=Math.exp(-h*n),g=(h-t)*n+1;return-ah+p*g},a=h=>{const p=Math.exp(-h*n),g=(t-h)*(n*n);return p*g});const u=5/n,f=A2(o,a,u);if(n=wr(n),isNaN(f))return{stiffness:sn.stiffness,damping:sn.damping,duration:n};{const h=Math.pow(f,2)*r;return{stiffness:h,damping:c*2*Math.sqrt(r*h),duration:n}}}const T2=12;function A2(n,e,t){let r=t;for(let o=1;o<T2;o++)r=r-n(r)/e(r);return r}function vp(n,e){return n*Math.sqrt(1-e*e)}const C2=["duration","bounce"],R2=["stiffness","damping","mass"];function vx(n,e){return e.some(t=>n[t]!==void 0)}function P2(n){let e={velocity:sn.velocity,stiffness:sn.stiffness,damping:sn.damping,mass:sn.mass,isResolvedFromDuration:!1,...n};if(!vx(n,R2)&&vx(n,C2))if(n.visualDuration){const t=n.visualDuration,r=2*Math.PI/(t*1.2),o=r*r,a=2*Rr(.05,1,1-(n.bounce||0))*Math.sqrt(o);e={...e,mass:sn.mass,stiffness:o,damping:a}}else{const t=b2(n);e={...e,...t,mass:sn.mass},e.isResolvedFromDuration=!0}return e}function yS(n=sn.visualDuration,e=sn.bounce){const t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:r,restDelta:o}=t;const a=t.keyframes[0],c=t.keyframes[t.keyframes.length-1],u={done:!1,value:a},{stiffness:f,damping:h,mass:p,duration:g,velocity:v,isResolvedFromDuration:_}=P2({...t,velocity:-br(t.velocity||0)}),M=v||0,b=h/(2*Math.sqrt(f*p)),y=c-a,S=br(Math.sqrt(f/p)),A=Math.abs(y)<5;r||(r=A?sn.restSpeed.granular:sn.restSpeed.default),o||(o=A?sn.restDelta.granular:sn.restDelta.default);let P;if(b<1){const I=vp(S,b);P=L=>{const k=Math.exp(-b*S*L);return c-k*((M+b*S*y)/I*Math.sin(I*L)+y*Math.cos(I*L))}}else if(b===1)P=I=>c-Math.exp(-S*I)*(y+(M+S*y)*I);else{const I=S*Math.sqrt(b*b-1);P=L=>{const k=Math.exp(-b*S*L),E=Math.min(I*L,300);return c-k*((M+b*S*y)*Math.sinh(E)+I*y*Math.cosh(E))/I}}const D={calculatedDuration:_&&g||null,next:I=>{const L=P(I);if(_)u.done=I>=g;else{let k=0;b<1&&(k=I===0?wr(M):_S(P,I,L));const E=Math.abs(k)<=r,F=Math.abs(c-L)<=o;u.done=E&&F}return u.value=u.done?c:L,u},toString:()=>{const I=Math.min(Oy(D),cp),L=By(k=>D.next(I*k).value,I,30);return I+"ms "+L}};return D}function xx({keyframes:n,velocity:e=0,power:t=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:a=500,modifyTarget:c,min:u,max:f,restDelta:h=.5,restSpeed:p}){const g=n[0],v={done:!1,value:g},_=E=>u!==void 0&&E<u||f!==void 0&&E>f,M=E=>u===void 0?f:f===void 0||Math.abs(u-E)<Math.abs(f-E)?u:f;let b=t*e;const y=g+b,S=c===void 0?y:c(y);S!==y&&(b=S-g);const A=E=>-b*Math.exp(-E/r),P=E=>S+A(E),D=E=>{const F=A(E),z=P(E);v.done=Math.abs(F)<=h,v.value=v.done?S:z};let I,L;const k=E=>{_(v.value)&&(I=E,L=yS({keyframes:[v.value,M(v.value)],velocity:_S(P,E,v.value),damping:o,stiffness:a,restDelta:h,restSpeed:p}))};return k(0),{calculatedDuration:null,next:E=>{let F=!1;return!L&&I===void 0&&(F=!0,D(E),k(E)),I!==void 0&&E>=I?L.next(E-I):(!F&&D(E),v)}}}const D2=vl(.42,0,1,1),L2=vl(0,0,.58,1),SS=vl(.42,0,.58,1),N2=n=>Array.isArray(n)&&typeof n[0]!="number",I2={linear:oi,easeIn:D2,easeInOut:SS,easeOut:L2,circIn:am,circInOut:tS,circOut:eS,backIn:om,backInOut:Qy,backOut:Zy,anticipate:Jy},_x=n=>{if(tm(n)){xy(n.length===4);const[e,t,r,o]=n;return vl(e,t,r,o)}else if(typeof n=="string")return I2[n];return n};function U2(n,e,t){const r=[],o=t||xS,a=n.length-1;for(let c=0;c<a;c++){let u=o(n[c],n[c+1]);if(e){const f=Array.isArray(e)?e[c]||oi:e;u=xl(f,u)}r.push(u)}return r}function MS(n,e,{clamp:t=!0,ease:r,mixer:o}={}){const a=n.length;if(xy(a===e.length),a===1)return()=>e[0];if(a===2&&e[0]===e[1])return()=>e[1];const c=n[0]===n[1];n[0]>n[a-1]&&(n=[...n].reverse(),e=[...e].reverse());const u=U2(e,r,o),f=u.length,h=p=>{if(c&&p<n[0])return e[0];let g=0;if(f>1)for(;g<n.length-2&&!(p<n[g+1]);g++);const v=$o(n[g],n[g+1],p);return u[g](v)};return t?p=>h(Rr(n[0],n[a-1],p)):h}function F2(n,e){const t=n[n.length-1];for(let r=1;r<=e;r++){const o=$o(0,e,r);n.push(nn(t,1,o))}}function k2(n){const e=[0];return F2(e,n.length-1),e}function O2(n,e){return n.map(t=>t*e)}function B2(n,e){return n.map(()=>e||SS).splice(0,n.length-1)}function _u({duration:n=300,keyframes:e,times:t,ease:r="easeInOut"}){const o=N2(r)?r.map(_x):_x(r),a={done:!1,value:e[0]},c=O2(t&&t.length===e.length?t:k2(e),n),u=MS(c,e,{ease:Array.isArray(o)?o:B2(e,o)});return{calculatedDuration:n,next:f=>(a.value=u(f),a.done=f>=n,a)}}const z2=n=>{const e=({timestamp:t})=>n(t);return{start:()=>Vt.update(e,!0),stop:()=>Cr(e),now:()=>En.isProcessing?En.timestamp:Ji.now()}},V2={decay:xx,inertia:xx,tween:_u,keyframes:_u,spring:yS},G2=n=>n/100;class Bu extends gS{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:f}=this.options;f&&f()};const{name:t,motionValue:r,element:o,keyframes:a}=this.options,c=(o==null?void 0:o.KeyframeResolver)||dm,u=(f,h)=>this.onKeyframesResolved(f,h);this.resolver=new c(a,u,t,r,o),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:t="keyframes",repeat:r=0,repeatDelay:o=0,repeatType:a,velocity:c=0}=this.options,u=em(t)?t:V2[t]||_u;let f,h;u!==_u&&typeof e[0]!="number"&&(f=xl(G2,xS(e[0],e[1])),e=[0,100]);const p=u({...this.options,keyframes:e});a==="mirror"&&(h=u({...this.options,keyframes:[...e].reverse(),velocity:-c})),p.calculatedDuration===null&&(p.calculatedDuration=Oy(p));const{calculatedDuration:g}=p,v=g+o,_=v*(r+1)-o;return{generator:p,mirroredGenerator:h,mapPercentToKeyframes:f,calculatedDuration:g,resolvedDuration:v,totalDuration:_}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,t=!1){const{resolved:r}=this;if(!r){const{keyframes:E}=this.options;return{done:!0,value:E[E.length-1]}}const{finalKeyframe:o,generator:a,mirroredGenerator:c,mapPercentToKeyframes:u,keyframes:f,calculatedDuration:h,totalDuration:p,resolvedDuration:g}=r;if(this.startTime===null)return a.next(0);const{delay:v,repeat:_,repeatType:M,repeatDelay:b,onUpdate:y}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-p/this.speed,this.startTime)),t?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const S=this.currentTime-v*(this.speed>=0?1:-1),A=this.speed>=0?S<0:S>p;this.currentTime=Math.max(S,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=p);let P=this.currentTime,D=a;if(_){const E=Math.min(this.currentTime,p)/g;let F=Math.floor(E),z=E%1;!z&&E>=1&&(z=1),z===1&&F--,F=Math.min(F,_+1),!!(F%2)&&(M==="reverse"?(z=1-z,b&&(z-=b/g)):M==="mirror"&&(D=c)),P=Rr(0,1,z)*g}const I=A?{done:!1,value:f[0]}:D.next(P);u&&(I.value=u(I.value));let{done:L}=I;!A&&h!==null&&(L=this.speed>=0?this.currentTime>=p:this.currentTime<=0);const k=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&L);return k&&o!==void 0&&(I.value=Ou(f,this.options,o)),y&&y(I.value),k&&this.finish(),I}get duration(){const{resolved:e}=this;return e?br(e.calculatedDuration):0}get time(){return br(this.currentTime)}set time(e){e=wr(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=br(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=z2,onPlay:t,startTime:r}=this.options;this.driver||(this.driver=e(a=>this.tick(a))),t&&t();const o=this.driver.now();this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=o):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}function H2(n){return new Bu(n)}const W2=new Set(["opacity","clipPath","filter","transform"]);function j2(n,e,t,{delay:r=0,duration:o=300,repeat:a=0,repeatType:c="loop",ease:u="easeInOut",times:f}={}){const h={[e]:t};f&&(h.offset=f);const p=Vy(u,o);return Array.isArray(p)&&(h.easing=p),n.animate(h,{delay:r,duration:o,easing:Array.isArray(p)?"linear":p,fill:"both",iterations:a+1,direction:c==="reverse"?"alternate":"normal"})}const X2=Bp(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),yu=10,$2=2e4;function q2(n){return em(n.type)||n.type==="spring"||!zy(n.ease)}function Y2(n,e){const t=new Bu({...e,keyframes:n,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:n[0]};const o=[];let a=0;for(;!r.done&&a<$2;)r=t.sample(a),o.push(r.value),a+=yu;return{times:void 0,keyframes:o,duration:a-yu,ease:"linear"}}const ES={anticipate:Jy,backInOut:Qy,circInOut:tS};function K2(n){return n in ES}class yx extends gS{constructor(e){super(e);const{name:t,motionValue:r,element:o,keyframes:a}=this.options;this.resolver=new mS(a,(c,u)=>this.onKeyframesResolved(c,u),t,r,o),this.resolver.scheduleResolve()}initPlayback(e,t){let{duration:r=300,times:o,ease:a,type:c,motionValue:u,name:f,startTime:h}=this.options;if(!u.owner||!u.owner.current)return!1;if(typeof a=="string"&&vu()&&K2(a)&&(a=ES[a]),q2(this.options)){const{onComplete:g,onUpdate:v,motionValue:_,element:M,...b}=this.options,y=Y2(e,b);e=y.keyframes,e.length===1&&(e[1]=e[0]),r=y.duration,o=y.times,a=y.ease,c="keyframes"}const p=j2(u.owner.current,f,e,{...this.options,duration:r,times:o,ease:a});return p.startTime=h??this.calcStartTime(),this.pendingTimeline?(rx(p,this.pendingTimeline),this.pendingTimeline=void 0):p.onfinish=()=>{const{onComplete:g}=this.options;u.set(Ou(e,this.options,t)),g&&g(),this.cancel(),this.resolveFinishedPromise()},{animation:p,duration:r,times:o,type:c,ease:a,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:t}=e;return br(t)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:t}=e;return br(t.currentTime||0)}set time(e){const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.currentTime=wr(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:t}=e;return t.playbackRate}set speed(e){const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:t}=e;return t.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:t}=e;return t.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:t}=this;if(!t)return oi;const{animation:r}=t;rx(r,e)}return oi}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.playState==="finished"&&this.updateFinishedPromise(),t.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:t,keyframes:r,duration:o,type:a,ease:c,times:u}=e;if(t.playState==="idle"||t.playState==="finished")return;if(this.time){const{motionValue:h,onUpdate:p,onComplete:g,element:v,..._}=this.options,M=new Bu({..._,keyframes:r,duration:o,type:a,ease:c,times:u,isGenerator:!0}),b=wr(this.time);h.setWithVelocity(M.sample(b-yu).value,M.sample(b).value,yu)}const{onStop:f}=this.options;f&&f(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:t,name:r,repeatDelay:o,repeatType:a,damping:c,type:u}=e;if(!t||!t.owner||!(t.owner.current instanceof HTMLElement))return!1;const{onUpdate:f,transformTemplate:h}=t.owner.getProps();return X2()&&r&&W2.has(r)&&!f&&!h&&!o&&a!=="mirror"&&c!==0&&u!=="inertia"}}const Z2={type:"spring",stiffness:500,damping:25,restSpeed:10},Q2=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),J2={type:"keyframes",duration:.8},e3={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},t3=(n,{keyframes:e})=>e.length>2?J2:$s.has(n)?n.startsWith("scale")?Q2(e[1]):Z2:e3;function n3({when:n,delay:e,delayChildren:t,staggerChildren:r,staggerDirection:o,repeat:a,repeatType:c,repeatDelay:u,from:f,elapsed:h,...p}){return!!Object.keys(p).length}const hm=(n,e,t,r={},o,a)=>c=>{const u=Jp(r,n)||{},f=u.delay||r.delay||0;let{elapsed:h=0}=r;h=h-wr(f);let p={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...u,delay:-h,onUpdate:v=>{e.set(v),u.onUpdate&&u.onUpdate(v)},onComplete:()=>{c(),u.onComplete&&u.onComplete()},name:n,motionValue:e,element:a?void 0:o};n3(u)||(p={...p,...t3(n,p)}),p.duration&&(p.duration=wr(p.duration)),p.repeatDelay&&(p.repeatDelay=wr(p.repeatDelay)),p.from!==void 0&&(p.keyframes[0]=p.from);let g=!1;if((p.type===!1||p.duration===0&&!p.repeatDelay)&&(p.duration=0,p.delay===0&&(g=!0)),g&&!a&&e.get()!==void 0){const v=Ou(p.keyframes,u);if(v!==void 0)return Vt.update(()=>{p.onUpdate(v),p.onComplete()}),new SP([])}return!a&&yx.supports(p)?new yx(p):new Bu(p)};function i3({protectedKeys:n,needsAnimating:e},t){const r=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,r}function wS(n,e,{delay:t=0,transitionOverride:r,type:o}={}){var a;let{transition:c=n.getDefaultTransition(),transitionEnd:u,...f}=e;r&&(c=r);const h=[],p=o&&n.animationState&&n.animationState.getState()[o];for(const g in f){const v=n.getValue(g,(a=n.latestValues[g])!==null&&a!==void 0?a:null),_=f[g];if(_===void 0||p&&i3(p,g))continue;const M={delay:t,...Jp(c||{},g)};let b=!1;if(window.MotionHandoffAnimation){const S=$y(n);if(S){const A=window.MotionHandoffAnimation(S,g,Vt);A!==null&&(M.startTime=A,b=!0)}}dp(n,g),v.start(hm(g,v,_,n.shouldReduceMotion&&jy.has(g)?{type:!1}:M,n,b));const y=v.animation;y&&h.push(y)}return u&&Promise.all(h).then(()=>{Vt.update(()=>{u&&UP(n,u)})}),h}function xp(n,e,t={}){var r;const o=ku(n,e,t.type==="exit"?(r=n.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:a=n.getDefaultTransition()||{}}=o||{};t.transitionOverride&&(a=t.transitionOverride);const c=o?()=>Promise.all(wS(n,o,t)):()=>Promise.resolve(),u=n.variantChildren&&n.variantChildren.size?(h=0)=>{const{delayChildren:p=0,staggerChildren:g,staggerDirection:v}=a;return r3(n,e,p+h,g,v,t)}:()=>Promise.resolve(),{when:f}=a;if(f){const[h,p]=f==="beforeChildren"?[c,u]:[u,c];return h().then(()=>p())}else return Promise.all([c(),u(t.delay)])}function r3(n,e,t=0,r=0,o=1,a){const c=[],u=(n.variantChildren.size-1)*r,f=o===1?(h=0)=>h*r:(h=0)=>u-h*r;return Array.from(n.variantChildren).sort(s3).forEach((h,p)=>{h.notify("AnimationStart",e),c.push(xp(h,e,{...a,delay:t+f(p)}).then(()=>h.notify("AnimationComplete",e)))}),Promise.all(c)}function s3(n,e){return n.sortNodePosition(e)}function o3(n,e,t={}){n.notify("AnimationStart",e);let r;if(Array.isArray(e)){const o=e.map(a=>xp(n,a,t));r=Promise.all(o)}else if(typeof e=="string")r=xp(n,e,t);else{const o=typeof e=="function"?ku(n,e,t.custom):e;r=Promise.all(wS(n,o,t))}return r.then(()=>{n.notify("AnimationComplete",e)})}const a3=Vp.length;function bS(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?bS(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<a3;t++){const r=Vp[t],o=n.props[r];(ol(o)||o===!1)&&(e[r]=o)}return e}const l3=[...zp].reverse(),c3=zp.length;function u3(n){return e=>Promise.all(e.map(({animation:t,options:r})=>o3(n,t,r)))}function d3(n){let e=u3(n),t=Sx(),r=!0;const o=f=>(h,p)=>{var g;const v=ku(n,p,f==="exit"?(g=n.presenceContext)===null||g===void 0?void 0:g.custom:void 0);if(v){const{transition:_,transitionEnd:M,...b}=v;h={...h,...b,...M}}return h};function a(f){e=f(n)}function c(f){const{props:h}=n,p=bS(n.parent)||{},g=[],v=new Set;let _={},M=1/0;for(let y=0;y<c3;y++){const S=l3[y],A=t[S],P=h[S]!==void 0?h[S]:p[S],D=ol(P),I=S===f?A.isActive:null;I===!1&&(M=y);let L=P===p[S]&&P!==h[S]&&D;if(L&&r&&n.manuallyAnimateOnMount&&(L=!1),A.protectedKeys={..._},!A.isActive&&I===null||!P&&!A.prevProp||Uu(P)||typeof P=="boolean")continue;const k=f3(A.prevProp,P);let E=k||S===f&&A.isActive&&!L&&D||y>M&&D,F=!1;const z=Array.isArray(P)?P:[P];let U=z.reduce(o(S),{});I===!1&&(U={});const{prevResolvedValues:q={}}=A,re={...q,...U},ue=W=>{E=!0,v.has(W)&&(F=!0,v.delete(W)),A.needsAnimating[W]=!0;const Y=n.getValue(W);Y&&(Y.liveStyle=!1)};for(const W in re){const Y=U[W],se=q[W];if(_.hasOwnProperty(W))continue;let j=!1;lp(Y)&&lp(se)?j=!ky(Y,se):j=Y!==se,j?Y!=null?ue(W):v.add(W):Y!==void 0&&v.has(W)?ue(W):A.protectedKeys[W]=!0}A.prevProp=P,A.prevResolvedValues=U,A.isActive&&(_={..._,...U}),r&&n.blockInitialAnimation&&(E=!1),E&&(!(L&&k)||F)&&g.push(...z.map(W=>({animation:W,options:{type:S}})))}if(v.size){const y={};v.forEach(S=>{const A=n.getBaseTarget(S),P=n.getValue(S);P&&(P.liveStyle=!0),y[S]=A??null}),g.push({animation:y})}let b=!!g.length;return r&&(h.initial===!1||h.initial===h.animate)&&!n.manuallyAnimateOnMount&&(b=!1),r=!1,b?e(g):Promise.resolve()}function u(f,h){var p;if(t[f].isActive===h)return Promise.resolve();(p=n.variantChildren)===null||p===void 0||p.forEach(v=>{var _;return(_=v.animationState)===null||_===void 0?void 0:_.setActive(f,h)}),t[f].isActive=h;const g=c(f);for(const v in t)t[v].protectedKeys={};return g}return{animateChanges:c,setActive:u,setAnimateFunction:a,getState:()=>t,reset:()=>{t=Sx(),r=!0}}}function f3(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!ky(e,n):!1}function Ps(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Sx(){return{animate:Ps(!0),whileInView:Ps(),whileHover:Ps(),whileTap:Ps(),whileDrag:Ps(),whileFocus:Ps(),exit:Ps()}}class cs{constructor(e){this.isMounted=!1,this.node=e}update(){}}class h3 extends cs{constructor(e){super(e),e.animationState||(e.animationState=d3(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Uu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let p3=0;class m3 extends cs{constructor(){super(...arguments),this.id=p3++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const o=this.node.animationState.setActive("exit",!e);t&&!e&&o.then(()=>t(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const g3={animation:{Feature:h3},exit:{Feature:m3}};function cl(n,e,t,r={passive:!0}){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t)}function _l(n){return{point:{x:n.pageX,y:n.pageY}}}const v3=n=>e=>nm(e)&&n(e,_l(e));function tl(n,e,t,r){return cl(n,e,v3(t),r)}const Mx=(n,e)=>Math.abs(n-e);function x3(n,e){const t=Mx(n.x,e.x),r=Mx(n.y,e.y);return Math.sqrt(t**2+r**2)}class TS{constructor(e,t,{transformPagePoint:r,contextWindow:o,dragSnapToOrigin:a=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const g=ch(this.lastMoveEventInfo,this.history),v=this.startEvent!==null,_=x3(g.offset,{x:0,y:0})>=3;if(!v&&!_)return;const{point:M}=g,{timestamp:b}=En;this.history.push({...M,timestamp:b});const{onStart:y,onMove:S}=this.handlers;v||(y&&y(this.lastMoveEvent,g),this.startEvent=this.lastMoveEvent),S&&S(this.lastMoveEvent,g)},this.handlePointerMove=(g,v)=>{this.lastMoveEvent=g,this.lastMoveEventInfo=lh(v,this.transformPagePoint),Vt.update(this.updatePoint,!0)},this.handlePointerUp=(g,v)=>{this.end();const{onEnd:_,onSessionEnd:M,resumeAnimation:b}=this.handlers;if(this.dragSnapToOrigin&&b&&b(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const y=ch(g.type==="pointercancel"?this.lastMoveEventInfo:lh(v,this.transformPagePoint),this.history);this.startEvent&&_&&_(g,y),M&&M(g,y)},!nm(e))return;this.dragSnapToOrigin=a,this.handlers=t,this.transformPagePoint=r,this.contextWindow=o||window;const c=_l(e),u=lh(c,this.transformPagePoint),{point:f}=u,{timestamp:h}=En;this.history=[{...f,timestamp:h}];const{onSessionStart:p}=t;p&&p(e,ch(u,this.history)),this.removeListeners=xl(tl(this.contextWindow,"pointermove",this.handlePointerMove),tl(this.contextWindow,"pointerup",this.handlePointerUp),tl(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Cr(this.updatePoint)}}function lh(n,e){return e?{point:e(n.point)}:n}function Ex(n,e){return{x:n.x-e.x,y:n.y-e.y}}function ch({point:n},e){return{point:n,delta:Ex(n,AS(e)),offset:Ex(n,_3(e)),velocity:y3(e,.1)}}function _3(n){return n[0]}function AS(n){return n[n.length-1]}function y3(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,r=null;const o=AS(n);for(;t>=0&&(r=n[t],!(o.timestamp-r.timestamp>wr(e)));)t--;if(!r)return{x:0,y:0};const a=br(o.timestamp-r.timestamp);if(a===0)return{x:0,y:0};const c={x:(o.x-r.x)/a,y:(o.y-r.y)/a};return c.x===1/0&&(c.x=0),c.y===1/0&&(c.y=0),c}const CS=1e-4,S3=1-CS,M3=1+CS,RS=.01,E3=0-RS,w3=0+RS;function ai(n){return n.max-n.min}function b3(n,e,t){return Math.abs(n-e)<=t}function wx(n,e,t,r=.5){n.origin=r,n.originPoint=nn(e.min,e.max,n.origin),n.scale=ai(t)/ai(e),n.translate=nn(t.min,t.max,n.origin)-n.originPoint,(n.scale>=S3&&n.scale<=M3||isNaN(n.scale))&&(n.scale=1),(n.translate>=E3&&n.translate<=w3||isNaN(n.translate))&&(n.translate=0)}function nl(n,e,t,r){wx(n.x,e.x,t.x,r?r.originX:void 0),wx(n.y,e.y,t.y,r?r.originY:void 0)}function bx(n,e,t){n.min=t.min+e.min,n.max=n.min+ai(e)}function T3(n,e,t){bx(n.x,e.x,t.x),bx(n.y,e.y,t.y)}function Tx(n,e,t){n.min=e.min-t.min,n.max=n.min+ai(e)}function il(n,e,t){Tx(n.x,e.x,t.x),Tx(n.y,e.y,t.y)}function A3(n,{min:e,max:t},r){return e!==void 0&&n<e?n=r?nn(e,n,r.min):Math.max(n,e):t!==void 0&&n>t&&(n=r?nn(t,n,r.max):Math.min(n,t)),n}function Ax(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function C3(n,{top:e,left:t,bottom:r,right:o}){return{x:Ax(n.x,t,o),y:Ax(n.y,e,r)}}function Cx(n,e){let t=e.min-n.min,r=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,r]=[r,t]),{min:t,max:r}}function R3(n,e){return{x:Cx(n.x,e.x),y:Cx(n.y,e.y)}}function P3(n,e){let t=.5;const r=ai(n),o=ai(e);return o>r?t=$o(e.min,e.max-r,n.min):r>o&&(t=$o(n.min,n.max-o,e.min)),Rr(0,1,t)}function D3(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const _p=.35;function L3(n=_p){return n===!1?n=0:n===!0&&(n=_p),{x:Rx(n,"left","right"),y:Rx(n,"top","bottom")}}function Rx(n,e,t){return{min:Px(n,e),max:Px(n,t)}}function Px(n,e){return typeof n=="number"?n:n[e]||0}const Dx=()=>({translate:0,scale:1,origin:0,originPoint:0}),Oo=()=>({x:Dx(),y:Dx()}),Lx=()=>({min:0,max:0}),an=()=>({x:Lx(),y:Lx()});function vi(n){return[n("x"),n("y")]}function PS({top:n,left:e,right:t,bottom:r}){return{x:{min:e,max:t},y:{min:n,max:r}}}function N3({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function I3(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),r=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:r.y,right:r.x}}function uh(n){return n===void 0||n===1}function yp({scale:n,scaleX:e,scaleY:t}){return!uh(n)||!uh(e)||!uh(t)}function Ns(n){return yp(n)||DS(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function DS(n){return Nx(n.x)||Nx(n.y)}function Nx(n){return n&&n!=="0%"}function Su(n,e,t){const r=n-t,o=e*r;return t+o}function Ix(n,e,t,r,o){return o!==void 0&&(n=Su(n,o,r)),Su(n,t,r)+e}function Sp(n,e=0,t=1,r,o){n.min=Ix(n.min,e,t,r,o),n.max=Ix(n.max,e,t,r,o)}function LS(n,{x:e,y:t}){Sp(n.x,e.translate,e.scale,e.originPoint),Sp(n.y,t.translate,t.scale,t.originPoint)}const Ux=.999999999999,Fx=1.0000000000001;function U3(n,e,t,r=!1){const o=t.length;if(!o)return;e.x=e.y=1;let a,c;for(let u=0;u<o;u++){a=t[u],c=a.projectionDelta;const{visualElement:f}=a.options;f&&f.props.style&&f.props.style.display==="contents"||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&zo(n,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),c&&(e.x*=c.x.scale,e.y*=c.y.scale,LS(n,c)),r&&Ns(a.latestValues)&&zo(n,a.latestValues))}e.x<Fx&&e.x>Ux&&(e.x=1),e.y<Fx&&e.y>Ux&&(e.y=1)}function Bo(n,e){n.min=n.min+e,n.max=n.max+e}function kx(n,e,t,r,o=.5){const a=nn(n.min,n.max,o);Sp(n,e,t,a,r)}function zo(n,e){kx(n.x,e.x,e.scaleX,e.scale,e.originX),kx(n.y,e.y,e.scaleY,e.scale,e.originY)}function NS(n,e){return PS(I3(n.getBoundingClientRect(),e))}function F3(n,e,t){const r=NS(n,t),{scroll:o}=e;return o&&(Bo(r.x,o.offset.x),Bo(r.y,o.offset.y)),r}const IS=({current:n})=>n?n.ownerDocument.defaultView:null,k3=new WeakMap;class O3{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=an(),this.visualElement=e}start(e,{snapToCursor:t=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const o=p=>{const{dragSnapToOrigin:g}=this.getProps();g?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(_l(p).point)},a=(p,g)=>{const{drag:v,dragPropagation:_,onDragStart:M}=this.getProps();if(v&&!_&&(this.openDragLock&&this.openDragLock(),this.openDragLock=PP(v),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),vi(y=>{let S=this.getAxisMotionValue(y).get()||0;if(Qi.test(S)){const{projection:A}=this.visualElement;if(A&&A.layout){const P=A.layout.layoutBox[y];P&&(S=ai(P)*(parseFloat(S)/100))}}this.originPoint[y]=S}),M&&Vt.postRender(()=>M(p,g)),dp(this.visualElement,"transform");const{animationState:b}=this.visualElement;b&&b.setActive("whileDrag",!0)},c=(p,g)=>{const{dragPropagation:v,dragDirectionLock:_,onDirectionLock:M,onDrag:b}=this.getProps();if(!v&&!this.openDragLock)return;const{offset:y}=g;if(_&&this.currentDirection===null){this.currentDirection=B3(y),this.currentDirection!==null&&M&&M(this.currentDirection);return}this.updateAxis("x",g.point,y),this.updateAxis("y",g.point,y),this.visualElement.render(),b&&b(p,g)},u=(p,g)=>this.stop(p,g),f=()=>vi(p=>{var g;return this.getAnimationState(p)==="paused"&&((g=this.getAxisMotionValue(p).animation)===null||g===void 0?void 0:g.play())}),{dragSnapToOrigin:h}=this.getProps();this.panSession=new TS(e,{onSessionStart:o,onStart:a,onMove:c,onSessionEnd:u,resumeAnimation:f},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:h,contextWindow:IS(this.visualElement)})}stop(e,t){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:o}=t;this.startAnimation(o);const{onDragEnd:a}=this.getProps();a&&Vt.postRender(()=>a(e,t))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,r){const{drag:o}=this.getProps();if(!r||!Yc(e,o,this.currentDirection))return;const a=this.getAxisMotionValue(e);let c=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(c=A3(c,this.constraints[e],this.elastic[e])),a.set(c)}resolveConstraints(){var e;const{dragConstraints:t,dragElastic:r}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,a=this.constraints;t&&Fo(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&o?this.constraints=C3(o.layoutBox,t):this.constraints=!1,this.elastic=L3(r),a!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&vi(c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=D3(o.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Fo(e))return!1;const r=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const a=F3(r,o.root,this.visualElement.getTransformPagePoint());let c=R3(o.layout.layoutBox,a);if(t){const u=t(N3(c));this.hasMutatedConstraints=!!u,u&&(c=PS(u))}return c}startAnimation(e){const{drag:t,dragMomentum:r,dragElastic:o,dragTransition:a,dragSnapToOrigin:c,onDragTransitionEnd:u}=this.getProps(),f=this.constraints||{},h=vi(p=>{if(!Yc(p,t,this.currentDirection))return;let g=f&&f[p]||{};c&&(g={min:0,max:0});const v=o?200:1e6,_=o?40:1e7,M={type:"inertia",velocity:r?e[p]:0,bounceStiffness:v,bounceDamping:_,timeConstant:750,restDelta:1,restSpeed:10,...a,...g};return this.startAxisValueAnimation(p,M)});return Promise.all(h).then(u)}startAxisValueAnimation(e,t){const r=this.getAxisMotionValue(e);return dp(this.visualElement,e),r.start(hm(e,r,0,t,this.visualElement,!1))}stopAnimation(){vi(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){vi(e=>{var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.pause()})}getAnimationState(e){var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps(),o=r[t];return o||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){vi(t=>{const{drag:r}=this.getProps();if(!Yc(t,r,this.currentDirection))return;const{projection:o}=this.visualElement,a=this.getAxisMotionValue(t);if(o&&o.layout){const{min:c,max:u}=o.layout.layoutBox[t];a.set(e[t]-nn(c,u,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:r}=this.visualElement;if(!Fo(t)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};vi(c=>{const u=this.getAxisMotionValue(c);if(u&&this.constraints!==!1){const f=u.get();o[c]=P3({min:f,max:f},this.constraints[c])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),vi(c=>{if(!Yc(c,e,null))return;const u=this.getAxisMotionValue(c),{min:f,max:h}=this.constraints[c];u.set(nn(f,h,o[c]))})}addListeners(){if(!this.visualElement.current)return;k3.set(this.visualElement,this);const e=this.visualElement.current,t=tl(e,"pointerdown",f=>{const{drag:h,dragListener:p=!0}=this.getProps();h&&p&&this.start(f)}),r=()=>{const{dragConstraints:f}=this.getProps();Fo(f)&&f.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,a=o.addEventListener("measure",r);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),Vt.read(r);const c=cl(window,"resize",()=>this.scalePositionWithinConstraints()),u=o.addEventListener("didUpdate",(({delta:f,hasLayoutChanged:h})=>{this.isDragging&&h&&(vi(p=>{const g=this.getAxisMotionValue(p);g&&(this.originPoint[p]+=f[p].translate,g.set(g.get()+f[p].translate))}),this.visualElement.render())}));return()=>{c(),t(),a(),u&&u()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:a=!1,dragElastic:c=_p,dragMomentum:u=!0}=e;return{...e,drag:t,dragDirectionLock:r,dragPropagation:o,dragConstraints:a,dragElastic:c,dragMomentum:u}}}function Yc(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function B3(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class z3 extends cs{constructor(e){super(e),this.removeGroupControls=oi,this.removeListeners=oi,this.controls=new O3(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||oi}unmount(){this.removeGroupControls(),this.removeListeners()}}const Ox=n=>(e,t)=>{n&&Vt.postRender(()=>n(e,t))};class V3 extends cs{constructor(){super(...arguments),this.removePointerDownListener=oi}onPointerDown(e){this.session=new TS(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:IS(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:Ox(e),onStart:Ox(t),onMove:r,onEnd:(a,c)=>{delete this.session,o&&Vt.postRender(()=>o(a,c))}}}mount(){this.removePointerDownListener=tl(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const au={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Bx(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const Xa={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(rt.test(n))n=parseFloat(n);else return n;const t=Bx(n,e.target.x),r=Bx(n,e.target.y);return`${t}% ${r}%`}},G3={correct:(n,{treeScale:e,projectionDelta:t})=>{const r=n,o=ls.parse(n);if(o.length>5)return r;const a=ls.createTransformer(n),c=typeof o[0]!="number"?1:0,u=t.x.scale*e.x,f=t.y.scale*e.y;o[0+c]/=u,o[1+c]/=f;const h=nn(u,f,.5);return typeof o[2+c]=="number"&&(o[2+c]/=h),typeof o[3+c]=="number"&&(o[3+c]/=h),a(o)}};class H3 extends ce.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r,layoutId:o}=this.props,{projection:a}=e;cP(W3),a&&(t.group&&t.group.add(a),r&&r.register&&o&&r.register(a),a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,onExitComplete:()=>this.safeToRemove()})),au.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:r,drag:o,isPresent:a}=this.props,c=r.projection;return c&&(c.isPresent=a,o||e.layoutDependency!==t||t===void 0?c.willUpdate():this.safeToRemove(),e.isPresent!==a&&(a?c.promote():c.relegate()||Vt.postRender(()=>{const u=c.getStack();(!u||!u.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Hp.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r}=this.props,{projection:o}=e;o&&(o.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function US(n){const[e,t]=vy(),r=ce.useContext(kp);return R.jsx(H3,{...n,layoutGroup:r,switchLayoutGroup:ce.useContext(wy),isPresent:e,safeToRemove:t})}const W3={borderRadius:{...Xa,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Xa,borderTopRightRadius:Xa,borderBottomLeftRadius:Xa,borderBottomRightRadius:Xa,boxShadow:G3};function j3(n,e,t){const r=wn(n)?n:Yo(n);return r.start(hm("",r,e,t)),r.animation}function X3(n){return n instanceof SVGElement&&n.tagName!=="svg"}const $3=(n,e)=>n.depth-e.depth;class q3{constructor(){this.children=[],this.isDirty=!1}add(e){im(this.children,e),this.isDirty=!0}remove(e){rm(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort($3),this.isDirty=!1,this.children.forEach(e)}}function Y3(n,e){const t=Ji.now(),r=({timestamp:o})=>{const a=o-t;a>=e&&(Cr(r),n(a-e))};return Vt.read(r,!0),()=>Cr(r)}const FS=["TopLeft","TopRight","BottomLeft","BottomRight"],K3=FS.length,zx=n=>typeof n=="string"?parseFloat(n):n,Vx=n=>typeof n=="number"||rt.test(n);function Z3(n,e,t,r,o,a){o?(n.opacity=nn(0,t.opacity!==void 0?t.opacity:1,Q3(r)),n.opacityExit=nn(e.opacity!==void 0?e.opacity:1,0,J3(r))):a&&(n.opacity=nn(e.opacity!==void 0?e.opacity:1,t.opacity!==void 0?t.opacity:1,r));for(let c=0;c<K3;c++){const u=`border${FS[c]}Radius`;let f=Gx(e,u),h=Gx(t,u);if(f===void 0&&h===void 0)continue;f||(f=0),h||(h=0),f===0||h===0||Vx(f)===Vx(h)?(n[u]=Math.max(nn(zx(f),zx(h),r),0),(Qi.test(h)||Qi.test(f))&&(n[u]+="%")):n[u]=h}(e.rotate||t.rotate)&&(n.rotate=nn(e.rotate||0,t.rotate||0,r))}function Gx(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const Q3=kS(0,.5,eS),J3=kS(.5,.95,oi);function kS(n,e,t){return r=>r<n?0:r>e?1:t($o(n,e,r))}function Hx(n,e){n.min=e.min,n.max=e.max}function gi(n,e){Hx(n.x,e.x),Hx(n.y,e.y)}function Wx(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}function jx(n,e,t,r,o){return n-=e,n=Su(n,1/t,r),o!==void 0&&(n=Su(n,1/o,r)),n}function eD(n,e=0,t=1,r=.5,o,a=n,c=n){if(Qi.test(e)&&(e=parseFloat(e),e=nn(c.min,c.max,e/100)-c.min),typeof e!="number")return;let u=nn(a.min,a.max,r);n===a&&(u-=e),n.min=jx(n.min,e,t,u,o),n.max=jx(n.max,e,t,u,o)}function Xx(n,e,[t,r,o],a,c){eD(n,e[t],e[r],e[o],e.scale,a,c)}const tD=["x","scaleX","originX"],nD=["y","scaleY","originY"];function $x(n,e,t,r){Xx(n.x,e,tD,t?t.x:void 0,r?r.x:void 0),Xx(n.y,e,nD,t?t.y:void 0,r?r.y:void 0)}function qx(n){return n.translate===0&&n.scale===1}function OS(n){return qx(n.x)&&qx(n.y)}function Yx(n,e){return n.min===e.min&&n.max===e.max}function iD(n,e){return Yx(n.x,e.x)&&Yx(n.y,e.y)}function Kx(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function BS(n,e){return Kx(n.x,e.x)&&Kx(n.y,e.y)}function Zx(n){return ai(n.x)/ai(n.y)}function Qx(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}class rD{constructor(){this.members=[]}add(e){im(this.members,e),e.scheduleRender()}remove(e){if(rm(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){const t=this.members.findIndex(o=>e===o);if(t===0)return!1;let r;for(let o=t;o>=0;o--){const a=this.members[o];if(a.isPresent!==!1){r=a;break}}return r?(this.promote(r),!0):!1}promote(e,t){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,t&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:o}=e.options;o===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:t,resumingFrom:r}=e;t.onExitComplete&&t.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function sD(n,e,t){let r="";const o=n.x.translate/e.x,a=n.y.translate/e.y,c=(t==null?void 0:t.z)||0;if((o||a||c)&&(r=`translate3d(${o}px, ${a}px, ${c}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:h,rotate:p,rotateX:g,rotateY:v,skewX:_,skewY:M}=t;h&&(r=`perspective(${h}px) ${r}`),p&&(r+=`rotate(${p}deg) `),g&&(r+=`rotateX(${g}deg) `),v&&(r+=`rotateY(${v}deg) `),_&&(r+=`skewX(${_}deg) `),M&&(r+=`skewY(${M}deg) `)}const u=n.x.scale*e.x,f=n.y.scale*e.y;return(u!==1||f!==1)&&(r+=`scale(${u}, ${f})`),r||"none"}const Is={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Qa=typeof window<"u"&&window.MotionDebug!==void 0,dh=["","X","Y","Z"],oD={visibility:"hidden"},Jx=1e3;let aD=0;function fh(n,e,t,r){const{latestValues:o}=e;o[n]&&(t[n]=o[n],e.setStaticValue(n,0),r&&(r[n]=0))}function zS(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=$y(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:o,layoutId:a}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",Vt,!(o||a))}const{parent:r}=n;r&&!r.hasCheckedOptimisedAppear&&zS(r)}function VS({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(c={},u=e==null?void 0:e()){this.id=aD++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Qa&&(Is.totalNodes=Is.resolvedTargetDeltas=Is.recalculatedProjection=0),this.nodes.forEach(uD),this.nodes.forEach(mD),this.nodes.forEach(gD),this.nodes.forEach(dD),Qa&&window.MotionDebug.record(Is)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=c,this.root=u?u.root||u:this,this.path=u?[...u.path,u]:[],this.parent=u,this.depth=u?u.depth+1:0;for(let f=0;f<this.path.length;f++)this.path[f].shouldResetTransform=!0;this.root===this&&(this.nodes=new q3)}addEventListener(c,u){return this.eventHandlers.has(c)||this.eventHandlers.set(c,new sm),this.eventHandlers.get(c).add(u)}notifyListeners(c,...u){const f=this.eventHandlers.get(c);f&&f.notify(...u)}hasListeners(c){return this.eventHandlers.has(c)}mount(c,u=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=X3(c),this.instance=c;const{layoutId:f,layout:h,visualElement:p}=this.options;if(p&&!p.current&&p.mount(c),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),u&&(h||f)&&(this.isLayoutDirty=!0),n){let g;const v=()=>this.root.updateBlockedByResize=!1;n(c,()=>{this.root.updateBlockedByResize=!0,g&&g(),g=Y3(v,250),au.hasAnimatedSinceResize&&(au.hasAnimatedSinceResize=!1,this.nodes.forEach(t_))})}f&&this.root.registerSharedNode(f,this),this.options.animate!==!1&&p&&(f||h)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:v,hasRelativeTargetChanged:_,layout:M})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const b=this.options.transition||p.getDefaultTransition()||SD,{onLayoutAnimationStart:y,onLayoutAnimationComplete:S}=p.getProps(),A=!this.targetLayout||!BS(this.targetLayout,M)||_,P=!v&&_;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||P||v&&(A||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(g,P);const D={...Jp(b,"layout"),onPlay:y,onComplete:S};(p.shouldReduceMotion||this.options.layoutRoot)&&(D.delay=0,D.type=!1),this.startAnimation(D)}else v||t_(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=M})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const c=this.getStack();c&&c.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Cr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(vD),this.animationId++)}getTransformTemplate(){const{visualElement:c}=this.options;return c&&c.getProps().transformTemplate}willUpdate(c=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&zS(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let p=0;p<this.path.length;p++){const g=this.path[p];g.shouldResetTransform=!0,g.updateScroll("snapshot"),g.options.layoutRoot&&g.willUpdate(!1)}const{layoutId:u,layout:f}=this.options;if(u===void 0&&!f)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),c&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(e_);return}this.isUpdating||this.nodes.forEach(hD),this.isUpdating=!1,this.nodes.forEach(pD),this.nodes.forEach(lD),this.nodes.forEach(cD),this.clearAllSnapshots();const u=Ji.now();En.delta=Rr(0,1e3/60,u-En.timestamp),En.timestamp=u,En.isProcessing=!0,nh.update.process(En),nh.preRender.process(En),nh.render.process(En),En.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Hp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(fD),this.sharedNodes.forEach(xD)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Vt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Vt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let f=0;f<this.path.length;f++)this.path[f].updateScroll();const c=this.layout;this.layout=this.measure(!1),this.layoutCorrected=an(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:u}=this.options;u&&u.notify("LayoutMeasure",this.layout.layoutBox,c?c.layoutBox:void 0)}updateScroll(c="measure"){let u=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===c&&(u=!1),u){const f=r(this.instance);this.scroll={animationId:this.root.animationId,phase:c,isRoot:f,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:f}}}resetTransform(){if(!o)return;const c=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,u=this.projectionDelta&&!OS(this.projectionDelta),f=this.getTransformTemplate(),h=f?f(this.latestValues,""):void 0,p=h!==this.prevTransformTemplateValue;c&&(u||Ns(this.latestValues)||p)&&(o(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(c=!0){const u=this.measurePageBox();let f=this.removeElementScroll(u);return c&&(f=this.removeTransform(f)),MD(f),{animationId:this.root.animationId,measuredBox:u,layoutBox:f,latestValues:{},source:this.id}}measurePageBox(){var c;const{visualElement:u}=this.options;if(!u)return an();const f=u.measureViewportBox();if(!(((c=this.scroll)===null||c===void 0?void 0:c.wasRoot)||this.path.some(ED))){const{scroll:p}=this.root;p&&(Bo(f.x,p.offset.x),Bo(f.y,p.offset.y))}return f}removeElementScroll(c){var u;const f=an();if(gi(f,c),!((u=this.scroll)===null||u===void 0)&&u.wasRoot)return f;for(let h=0;h<this.path.length;h++){const p=this.path[h],{scroll:g,options:v}=p;p!==this.root&&g&&v.layoutScroll&&(g.wasRoot&&gi(f,c),Bo(f.x,g.offset.x),Bo(f.y,g.offset.y))}return f}applyTransform(c,u=!1){const f=an();gi(f,c);for(let h=0;h<this.path.length;h++){const p=this.path[h];!u&&p.options.layoutScroll&&p.scroll&&p!==p.root&&zo(f,{x:-p.scroll.offset.x,y:-p.scroll.offset.y}),Ns(p.latestValues)&&zo(f,p.latestValues)}return Ns(this.latestValues)&&zo(f,this.latestValues),f}removeTransform(c){const u=an();gi(u,c);for(let f=0;f<this.path.length;f++){const h=this.path[f];if(!h.instance||!Ns(h.latestValues))continue;yp(h.latestValues)&&h.updateSnapshot();const p=an(),g=h.measurePageBox();gi(p,g),$x(u,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,p)}return Ns(this.latestValues)&&$x(u,this.latestValues),u}setTargetDelta(c){this.targetDelta=c,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(c){this.options={...this.options,...c,crossfade:c.crossfade!==void 0?c.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==En.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(c=!1){var u;const f=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=f.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=f.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=f.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==f;if(!(c||h&&this.isSharedProjectionDirty||this.isProjectionDirty||!((u=this.parent)===null||u===void 0)&&u.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:v}=this.options;if(!(!this.layout||!(g||v))){if(this.resolvedRelativeTargetAt=En.timestamp,!this.targetDelta&&!this.relativeTarget){const _=this.getClosestProjectingParent();_&&_.layout&&this.animationProgress!==1?(this.relativeParent=_,this.forceRelativeParentToResolveTarget(),this.relativeTarget=an(),this.relativeTargetOrigin=an(),il(this.relativeTargetOrigin,this.layout.layoutBox,_.layout.layoutBox),gi(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=an(),this.targetWithTransforms=an()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),T3(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):gi(this.target,this.layout.layoutBox),LS(this.target,this.targetDelta)):gi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const _=this.getClosestProjectingParent();_&&!!_.resumingFrom==!!this.resumingFrom&&!_.options.layoutScroll&&_.target&&this.animationProgress!==1?(this.relativeParent=_,this.forceRelativeParentToResolveTarget(),this.relativeTarget=an(),this.relativeTargetOrigin=an(),il(this.relativeTargetOrigin,this.target,_.target),gi(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Qa&&Is.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||yp(this.parent.latestValues)||DS(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var c;const u=this.getLead(),f=!!this.resumingFrom||this!==u;let h=!0;if((this.isProjectionDirty||!((c=this.parent)===null||c===void 0)&&c.isProjectionDirty)&&(h=!1),f&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===En.timestamp&&(h=!1),h)return;const{layout:p,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(p||g))return;gi(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,_=this.treeScale.y;U3(this.layoutCorrected,this.treeScale,this.path,f),u.layout&&!u.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(u.target=u.layout.layoutBox,u.targetWithTransforms=an());const{target:M}=u;if(!M){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Wx(this.prevProjectionDelta.x,this.projectionDelta.x),Wx(this.prevProjectionDelta.y,this.projectionDelta.y)),nl(this.projectionDelta,this.layoutCorrected,M,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==_||!Qx(this.projectionDelta.x,this.prevProjectionDelta.x)||!Qx(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",M)),Qa&&Is.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(c=!0){var u;if((u=this.options.visualElement)===null||u===void 0||u.scheduleRender(),c){const f=this.getStack();f&&f.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Oo(),this.projectionDelta=Oo(),this.projectionDeltaWithTransform=Oo()}setAnimationOrigin(c,u=!1){const f=this.snapshot,h=f?f.latestValues:{},p={...this.latestValues},g=Oo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!u;const v=an(),_=f?f.source:void 0,M=this.layout?this.layout.source:void 0,b=_!==M,y=this.getStack(),S=!y||y.members.length<=1,A=!!(b&&!S&&this.options.crossfade===!0&&!this.path.some(yD));this.animationProgress=0;let P;this.mixTargetDelta=D=>{const I=D/1e3;n_(g.x,c.x,I),n_(g.y,c.y,I),this.setTargetDelta(g),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(il(v,this.layout.layoutBox,this.relativeParent.layout.layoutBox),_D(this.relativeTarget,this.relativeTargetOrigin,v,I),P&&iD(this.relativeTarget,P)&&(this.isProjectionDirty=!1),P||(P=an()),gi(P,this.relativeTarget)),b&&(this.animationValues=p,Z3(p,h,this.latestValues,I,A,S)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=I},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(c){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Cr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Vt.update(()=>{au.hasAnimatedSinceResize=!0,this.currentAnimation=j3(0,Jx,{...c,onUpdate:u=>{this.mixTargetDelta(u),c.onUpdate&&c.onUpdate(u)},onComplete:()=>{c.onComplete&&c.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const c=this.getStack();c&&c.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Jx),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const c=this.getLead();let{targetWithTransforms:u,target:f,layout:h,latestValues:p}=c;if(!(!u||!f||!h)){if(this!==c&&this.layout&&h&&GS(this.options.animationType,this.layout.layoutBox,h.layoutBox)){f=this.target||an();const g=ai(this.layout.layoutBox.x);f.x.min=c.target.x.min,f.x.max=f.x.min+g;const v=ai(this.layout.layoutBox.y);f.y.min=c.target.y.min,f.y.max=f.y.min+v}gi(u,f),zo(u,p),nl(this.projectionDeltaWithTransform,this.layoutCorrected,u,p)}}registerSharedNode(c,u){this.sharedNodes.has(c)||this.sharedNodes.set(c,new rD),this.sharedNodes.get(c).add(u);const h=u.options.initialPromotionConfig;u.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(u):void 0})}isLead(){const c=this.getStack();return c?c.lead===this:!0}getLead(){var c;const{layoutId:u}=this.options;return u?((c=this.getStack())===null||c===void 0?void 0:c.lead)||this:this}getPrevLead(){var c;const{layoutId:u}=this.options;return u?(c=this.getStack())===null||c===void 0?void 0:c.prevLead:void 0}getStack(){const{layoutId:c}=this.options;if(c)return this.root.sharedNodes.get(c)}promote({needsReset:c,transition:u,preserveFollowOpacity:f}={}){const h=this.getStack();h&&h.promote(this,f),c&&(this.projectionDelta=void 0,this.needsReset=!0),u&&this.setOptions({transition:u})}relegate(){const c=this.getStack();return c?c.relegate(this):!1}resetSkewAndRotation(){const{visualElement:c}=this.options;if(!c)return;let u=!1;const{latestValues:f}=c;if((f.z||f.rotate||f.rotateX||f.rotateY||f.rotateZ||f.skewX||f.skewY)&&(u=!0),!u)return;const h={};f.z&&fh("z",c,h,this.animationValues);for(let p=0;p<dh.length;p++)fh(`rotate${dh[p]}`,c,h,this.animationValues),fh(`skew${dh[p]}`,c,h,this.animationValues);c.render();for(const p in h)c.setStaticValue(p,h[p]),this.animationValues&&(this.animationValues[p]=h[p]);c.scheduleRender()}getProjectionStyles(c){var u,f;if(!this.instance||this.isSVG)return;if(!this.isVisible)return oD;const h={visibility:""},p=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,h.opacity="",h.pointerEvents=su(c==null?void 0:c.pointerEvents)||"",h.transform=p?p(this.latestValues,""):"none",h;const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){const b={};return this.options.layoutId&&(b.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,b.pointerEvents=su(c==null?void 0:c.pointerEvents)||""),this.hasProjected&&!Ns(this.latestValues)&&(b.transform=p?p({},""):"none",this.hasProjected=!1),b}const v=g.animationValues||g.latestValues;this.applyTransformsToTarget(),h.transform=sD(this.projectionDeltaWithTransform,this.treeScale,v),p&&(h.transform=p(v,h.transform));const{x:_,y:M}=this.projectionDelta;h.transformOrigin=`${_.origin*100}% ${M.origin*100}% 0`,g.animationValues?h.opacity=g===this?(f=(u=v.opacity)!==null&&u!==void 0?u:this.latestValues.opacity)!==null&&f!==void 0?f:1:this.preserveOpacity?this.latestValues.opacity:v.opacityExit:h.opacity=g===this?v.opacity!==void 0?v.opacity:"":v.opacityExit!==void 0?v.opacityExit:0;for(const b in gu){if(v[b]===void 0)continue;const{correct:y,applyTo:S}=gu[b],A=h.transform==="none"?v[b]:y(v[b],g);if(S){const P=S.length;for(let D=0;D<P;D++)h[S[D]]=A}else h[b]=A}return this.options.layoutId&&(h.pointerEvents=g===this?su(c==null?void 0:c.pointerEvents)||"":"none"),h}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(c=>{var u;return(u=c.currentAnimation)===null||u===void 0?void 0:u.stop()}),this.root.nodes.forEach(e_),this.root.sharedNodes.clear()}}}function lD(n){n.updateLayout()}function cD(n){var e;const t=((e=n.resumeFrom)===null||e===void 0?void 0:e.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&t&&n.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=n.layout,{animationType:a}=n.options,c=t.source!==n.layout.source;a==="size"?vi(g=>{const v=c?t.measuredBox[g]:t.layoutBox[g],_=ai(v);v.min=r[g].min,v.max=v.min+_}):GS(a,t.layoutBox,r)&&vi(g=>{const v=c?t.measuredBox[g]:t.layoutBox[g],_=ai(r[g]);v.max=v.min+_,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[g].max=n.relativeTarget[g].min+_)});const u=Oo();nl(u,r,t.layoutBox);const f=Oo();c?nl(f,n.applyTransform(o,!0),t.measuredBox):nl(f,r,t.layoutBox);const h=!OS(u);let p=!1;if(!n.resumeFrom){const g=n.getClosestProjectingParent();if(g&&!g.resumeFrom){const{snapshot:v,layout:_}=g;if(v&&_){const M=an();il(M,t.layoutBox,v.layoutBox);const b=an();il(b,r,_.layoutBox),BS(M,b)||(p=!0),g.options.layoutRoot&&(n.relativeTarget=b,n.relativeTargetOrigin=M,n.relativeParent=g)}}}n.notifyListeners("didUpdate",{layout:r,snapshot:t,delta:f,layoutDelta:u,hasLayoutChanged:h,hasRelativeTargetChanged:p})}else if(n.isLead()){const{onExitComplete:r}=n.options;r&&r()}n.options.transition=void 0}function uD(n){Qa&&Is.totalNodes++,n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function dD(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function fD(n){n.clearSnapshot()}function e_(n){n.clearMeasurements()}function hD(n){n.isLayoutDirty=!1}function pD(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function t_(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function mD(n){n.resolveTargetDelta()}function gD(n){n.calcProjection()}function vD(n){n.resetSkewAndRotation()}function xD(n){n.removeLeadSnapshot()}function n_(n,e,t){n.translate=nn(e.translate,0,t),n.scale=nn(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function i_(n,e,t,r){n.min=nn(e.min,t.min,r),n.max=nn(e.max,t.max,r)}function _D(n,e,t,r){i_(n.x,e.x,t.x,r),i_(n.y,e.y,t.y,r)}function yD(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const SD={duration:.45,ease:[.4,0,.1,1]},r_=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),s_=r_("applewebkit/")&&!r_("chrome/")?Math.round:oi;function o_(n){n.min=s_(n.min),n.max=s_(n.max)}function MD(n){o_(n.x),o_(n.y)}function GS(n,e,t){return n==="position"||n==="preserve-aspect"&&!b3(Zx(e),Zx(t),.2)}function ED(n){var e;return n!==n.root&&((e=n.scroll)===null||e===void 0?void 0:e.wasRoot)}const wD=VS({attachResizeListener:(n,e)=>cl(n,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),hh={current:void 0},HS=VS({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!hh.current){const n=new wD({});n.mount(window),n.setOptions({layoutScroll:!0}),hh.current=n}return hh.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),bD={pan:{Feature:V3},drag:{Feature:z3,ProjectionNode:HS,MeasureLayout:US}};function a_(n,e,t){const{props:r}=n;n.animationState&&r.whileHover&&n.animationState.setActive("whileHover",t==="Start");const o="onHover"+t,a=r[o];a&&Vt.postRender(()=>a(e,_l(e)))}class TD extends cs{mount(){const{current:e}=this.node;e&&(this.unmount=bP(e,t=>(a_(this.node,t,"Start"),r=>a_(this.node,r,"End"))))}unmount(){}}class AD extends cs{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=xl(cl(this.node.current,"focus",()=>this.onFocus()),cl(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function l_(n,e,t){const{props:r}=n;n.animationState&&r.whileTap&&n.animationState.setActive("whileTap",t==="Start");const o="onTap"+(t==="End"?"":t),a=r[o];a&&Vt.postRender(()=>a(e,_l(e)))}class CD extends cs{mount(){const{current:e}=this.node;e&&(this.unmount=RP(e,t=>(l_(this.node,t,"Start"),(r,{success:o})=>l_(this.node,r,o?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Mp=new WeakMap,ph=new WeakMap,RD=n=>{const e=Mp.get(n.target);e&&e(n)},PD=n=>{n.forEach(RD)};function DD({root:n,...e}){const t=n||document;ph.has(t)||ph.set(t,{});const r=ph.get(t),o=JSON.stringify(e);return r[o]||(r[o]=new IntersectionObserver(PD,{root:n,...e})),r[o]}function LD(n,e,t){const r=DD(e);return Mp.set(n,t),r.observe(n),()=>{Mp.delete(n),r.unobserve(n)}}const ND={some:0,all:1};class ID extends cs{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:r,amount:o="some",once:a}=e,c={root:t?t.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:ND[o]},u=f=>{const{isIntersecting:h}=f;if(this.isInView===h||(this.isInView=h,a&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:p,onViewportLeave:g}=this.node.getProps(),v=h?p:g;v&&v(f)};return LD(this.node.current,c,u)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(UD(e,t))&&this.startObserver()}unmount(){}}function UD({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const FD={inView:{Feature:ID},tap:{Feature:CD},focus:{Feature:AD},hover:{Feature:TD}},kD={layout:{ProjectionNode:HS,MeasureLayout:US}},Ep={current:null},WS={current:!1};function OD(){if(WS.current=!0,!!Op)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>Ep.current=n.matches;n.addListener(e),e()}else Ep.current=!1}const BD=[...pS,Fn,ls],zD=n=>BD.find(hS(n)),c_=new WeakMap;function VD(n,e,t){for(const r in e){const o=e[r],a=t[r];if(wn(o))n.addValue(r,o);else if(wn(a))n.addValue(r,Yo(o,{owner:n}));else if(a!==o)if(n.hasValue(r)){const c=n.getValue(r);c.liveStyle===!0?c.jump(o):c.hasAnimated||c.set(o)}else{const c=n.getStaticValue(r);n.addValue(r,Yo(c!==void 0?c:o,{owner:n}))}}for(const r in t)e[r]===void 0&&n.removeValue(r);return e}const u_=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class GD{scrapeMotionValuesFromProps(e,t,r){return{}}constructor({parent:e,props:t,presenceContext:r,reducedMotionConfig:o,blockInitialAnimation:a,visualState:c},u={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=dm,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const _=Ji.now();this.renderScheduledAt<_&&(this.renderScheduledAt=_,Vt.render(this.render,!1,!0))};const{latestValues:f,renderState:h,onUpdate:p}=c;this.onUpdate=p,this.latestValues=f,this.baseTarget={...f},this.initialValues=t.initial?{...f}:{},this.renderState=h,this.parent=e,this.props=t,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.options=u,this.blockInitialAnimation=!!a,this.isControllingVariants=Fu(t),this.isVariantNode=My(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:g,...v}=this.scrapeMotionValuesFromProps(t,{},this);for(const _ in v){const M=v[_];f[_]!==void 0&&wn(M)&&M.set(f[_],!1)}}mount(e){this.current=e,c_.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,r)=>this.bindToMotionValue(r,t)),WS.current||OD(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Ep.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){c_.delete(this.current),this.projection&&this.projection.unmount(),Cr(this.notifyUpdate),Cr(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const r=$s.has(e),o=t.on("change",u=>{this.latestValues[e]=u,this.props.onUpdate&&Vt.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),a=t.on("renderRequest",this.scheduleRender);let c;window.MotionCheckAppearSync&&(c=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{o(),a(),c&&c(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in qo){const t=qo[e];if(!t)continue;const{isEnabled:r,Feature:o}=t;if(!this.features[e]&&o&&r(this.props)&&(this.features[e]=new o(this)),this.features[e]){const a=this.features[e];a.isMounted?a.update():(a.mount(),a.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):an()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let r=0;r<u_.length;r++){const o=u_[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const a="on"+o,c=e[a];c&&(this.propEventSubscriptions[o]=this.on(o,c))}this.prevMotionValues=VD(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const r=this.values.get(e);t!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&t!==void 0&&(r=Yo(t===null?void 0:t,{owner:this}),this.addValue(e,r)),r}readValue(e,t){var r;let o=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(r=this.getBaseTargetFromProps(this.props,e))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,e,this.options);return o!=null&&(typeof o=="string"&&(dS(o)||nS(o))?o=parseFloat(o):!zD(o)&&ls.test(t)&&(o=lS(e,t)),this.setBaseTarget(e,wn(o)?o.get():o)),wn(o)?o.get():o}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;const{initial:r}=this.props;let o;if(typeof r=="string"||typeof r=="object"){const c=jp(this.props,r,(t=this.presenceContext)===null||t===void 0?void 0:t.custom);c&&(o=c[e])}if(r&&o!==void 0)return o;const a=this.getBaseTargetFromProps(this.props,e);return a!==void 0&&!wn(a)?a:this.initialValues[e]!==void 0&&o===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new sm),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}}class jS extends GD{constructor(){super(...arguments),this.KeyframeResolver=mS}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,{vars:t,style:r}){delete t[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;wn(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}function HD(n){return window.getComputedStyle(n)}class WD extends jS{constructor(){super(...arguments),this.type="html",this.renderInstance=Dy}readValueFromInstance(e,t){if($s.has(t)){const r=um(t);return r&&r.default||0}else{const r=HD(e),o=(Cy(t)?r.getPropertyValue(t):r[t])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(e,{transformPagePoint:t}){return NS(e,t)}build(e,t,r){qp(e,t,r.transformTemplate)}scrapeMotionValuesFromProps(e,t,r){return Qp(e,t,r)}}class jD extends jS{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=an}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if($s.has(t)){const r=um(t);return r&&r.default||0}return t=Ly.has(t)?t:Gp(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,r){return Uy(e,t,r)}build(e,t,r){Yp(e,t,this.isSVGTag,r.transformTemplate)}renderInstance(e,t,r,o){Ny(e,t,r,o)}mount(e){this.isSVGTag=Zp(e.tagName),super.mount(e)}}const XD=(n,e)=>Wp(n)?new jD(e):new WD(e,{allowProjection:n!==ce.Fragment}),$D=xP({...g3,...FD,...bD,...kD},XD),Bt=NR($D);function Mu(n){const e=pl(()=>Yo(n)),{isStatic:t}=ce.useContext(ml);if(t){const[,r]=ce.useState(n);ce.useEffect(()=>e.on("change",r),[])}return e}function XS(n,e){const t=Mu(e()),r=()=>t.set(e());return r(),Nu(()=>{const o=()=>Vt.preRender(r,!1,!0),a=n.map(c=>c.on("change",o));return()=>{a.forEach(c=>c()),Cr(r)}}),t}function d_(n){return typeof n=="number"?n:parseFloat(n)}function f_(n,e={}){const{isStatic:t}=ce.useContext(ml),r=ce.useRef(null),o=Mu(wn(n)?d_(n.get()):n),a=ce.useRef(o.get()),c=ce.useRef(()=>{}),u=()=>{const h=r.current;h&&h.time===0&&h.sample(En.delta),f(),r.current=H2({keyframes:[o.get(),a.current],velocity:o.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...e,onUpdate:c.current})},f=()=>{r.current&&r.current.stop()};return ce.useInsertionEffect(()=>o.attach((h,p)=>t?p(h):(a.current=h,c.current=p,Vt.update(u),o.get()),f),[JSON.stringify(e)]),Nu(()=>{if(wn(n))return n.on("change",h=>o.set(d_(h)))},[o]),o}const qD=n=>n&&typeof n=="object"&&n.mix,YD=n=>qD(n)?n.mix:void 0;function KD(...n){const e=!Array.isArray(n[0]),t=e?0:-1,r=n[0+t],o=n[1+t],a=n[2+t],c=n[3+t],u=MS(o,a,{mixer:YD(a[0]),...c});return e?u(r):u}function ZD(n){Ja.current=[],n();const e=XS(Ja.current,n);return Ja.current=void 0,e}function h_(n,e,t,r){if(typeof n=="function")return ZD(n);const o=typeof e=="function"?e:KD(e,t,r);return Array.isArray(n)?p_(n,o):p_([n],([a])=>o(a))}function p_(n,e){const t=pl(()=>[]);return XS(n,()=>{t.length=0;const r=n.length;for(let o=0;o<r;o++)t[o]=n[o].get();return e(t)})}const QD=({width:n=1440,height:e=2,baseColor:t="rgba(139,92,246,0.2)",gradientColors:r=["#2EB9DF","#a78bfa","#9E00FF"],animationDuration:o=2,strokeWidth:a=2,path:c})=>{const[u,f]=Gs.useState(!1);Gs.useEffect(()=>{const b=()=>f(window.innerWidth<768);return b(),window.addEventListener("resize",b),()=>window.removeEventListener("resize",b)},[]);const h=Number(n)||1440,p=Number(e)||2,g=`M0,${p/2} L${h},${p/2}`,v=c||g,_=`pulse-${Math.random().toString(36).substr(2,9)}`,M=`${o}s`;return R.jsx("div",{className:"relative",style:{width:h,height:p},children:R.jsxs("svg",{width:h,height:p,viewBox:`0 0 ${h} ${p}`,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[R.jsx("path",{d:v,stroke:t,strokeOpacity:"0.3",strokeWidth:a}),R.jsx("path",{d:v,stroke:`url(#${_})`,strokeLinecap:"round",strokeWidth:a}),R.jsx("defs",{children:R.jsxs("linearGradient",{id:_,gradientUnits:"userSpaceOnUse",x1:"0",y1:"0",x2:u?h:0,y2:"0",children:[!u&&R.jsxs(R.Fragment,{children:[R.jsx("animate",{attributeName:"x1",from:"0",to:h*2,dur:M,repeatCount:"indefinite"}),R.jsx("animate",{attributeName:"x2",from:"0",to:h,dur:M,repeatCount:"indefinite"})]}),R.jsx("stop",{stopColor:r[0],stopOpacity:"0"}),R.jsx("stop",{stopColor:r[1]}),R.jsx("stop",{offset:"1",stopColor:r[2],stopOpacity:"0"})]})})]})})},Uo=({gradientColors:n=["#2EB9DF","#a78bfa","#9E00FF"],animationDuration:e=2.5,strokeWidth:t=1.5,className:r=""})=>R.jsx("div",{className:`w-full overflow-hidden ${r}`,style:{height:2},children:R.jsx(QD,{width:1440,height:2,gradientColors:n,animationDuration:e,strokeWidth:t,baseColor:"rgba(139,92,246,0.15)"})});/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JD=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),$S=(...n)=>n.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var eL={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tL=ce.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:a,iconNode:c,...u},f)=>ce.createElement("svg",{ref:f,...eL,width:e,height:e,stroke:n,strokeWidth:r?Number(t)*24/Number(e):t,className:$S("lucide",o),...u},[...c.map(([h,p])=>ce.createElement(h,p)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cn=(n,e)=>{const t=ce.forwardRef(({className:r,...o},a)=>ce.createElement(tL,{ref:a,iconNode:e,className:$S(`lucide-${JD(n)}`,r),...o}));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nL=cn("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iL=cn("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rL=cn("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sL=cn("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oL=cn("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aL=cn("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lL=cn("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cL=cn("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uL=cn("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dL=cn("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ul=cn("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fL=cn("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hL=cn("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pL=cn("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=cn("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=cn("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mL=cn("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gL=cn("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vL=cn("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xL=cn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _L=cn("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Kc=[{id:"home",title:"Home"},{id:"projects",title:"Projects"},{id:"skills",title:"Skills"},{id:"experience",title:"Experience"},{id:"contact",title:"Let's Connect"}],m_={title:"D Venkata Durga Prasad",description:"I am a passionate Data Science student and AI Web Developer with a strong interest in solving real-world problems using data and intelligent systems. I enjoy transforming raw data into meaningful insights and building smart applications that enhance user experiences."},zs="dasaripandu2321",yL=[{category:"Languages",items:["C++","Java","Python","JavaScript","Bootstrap"]},{category:"Frontend",items:["React","HTML","CSS","Tailwind CSS","Bootstrap"]},{category:"Backend & DB",items:["Node.js","Express","REST API","MySQL","MongoDB","SQL"]},{category:"AI & Data Science",items:["Machine Learning","NLP","TF-IDF","Power BI","Apache Hadoop"]},{category:"Tools & Deployment",items:["Git","GitHub","Docker","Jupyter Notebook","Render","Vercel"]}],SL=[{year:"08/2025 – 11/2025",role:"Data Science Intern",company:"Corizo, Bengaluru",description:"Completed a Data Science internship focusing on data analysis, machine learning concepts, and practical data-driven problem solving."},{year:"02/2026 – 03/2026",role:"Google Advanced Data Analytics",company:"Certification",description:"Covered translating data into meaningful insights, applying statistical techniques, and performing regression analysis."},{year:"08/2023 – 03/2026",role:"B.Tech CSE (Data Science)",company:"Kalasalingam Academy of Research and Education, Krishnan Kovil",description:"CGPA: 7.27. Core focus on Data Science, Artificial Intelligence, Machine Learning, and Software Engineering."},{year:"2021 – 2023",role:"Intermediate (MPC)",company:"Sarada Educational Institutions, Vijayawada",description:"Marks obtained: 869/1000 (86.9%)."}],ML=SL.map((n,e)=>{const t=c=>c.toLowerCase().includes("intern")?oL:c.toLowerCase().includes("google")||c.toLowerCase().includes("cert")?sL:fL,r=(c,u)=>{const f=new Date().getFullYear(),h=new Date().getMonth()+1;return c.toLowerCase().includes("b.tech")&&u.includes("2026")?f<=2026?"in-progress":"completed":c.toLowerCase().includes("intern")&&u.includes("2025")?f>2025||f===2025&&h>11?"completed":"in-progress":c.toLowerCase().includes("google")&&u.includes("2026")?f>2026||f===2026&&h>=3?"completed":"pending":"completed"},o=c=>c.toLowerCase().includes("b.tech")?85:c.toLowerCase().includes("intern")?75:c.toLowerCase().includes("google")?90:70,a=c=>{const u=[];return c===0&&u.push(2),c===1&&u.push(2),c===2&&u.push(0,1),c===3&&u.push(2),u};return{id:e+1,title:n.role,date:n.year,content:n.description,category:n.role.toLowerCase().includes("intern")?"Experience":n.role.toLowerCase().includes("cert")?"Certification":"Education",icon:t(n.role),relatedIds:a(e),status:r(n.role,n.year),energy:o(n.role)}}),mh={github:"https://github.com/dasaripandu2321",linkedin:"https://www.linkedin.com/in/dasari-venkata-durga-prasad-694ba7289",email:"mailto:dasaripandu1979@gmail.com"},EL="/resume.pdf",Eu={"crop-companion":"Built an AI-powered crop recommendation system using machine learning. Takes soil nutrients (N, P, K), temperature, humidity, pH, and rainfall as input to suggest the most suitable crop using a trained classification model.","fake-news-detector":"Developed a machine learning model to classify news articles as real or fake using Natural Language Processing. Applied TF-IDF vectorization and trained a Passive Aggressive Classifier on a labeled news dataset.","darsanam-tkts":"Full-stack temple ticket booking web app for Darshanam. Features user authentication, seat selection, booking management, and payment flow. Built with React, Node.js, Express, and MongoDB.","bvr-transport":"Transport management web application for BVR Transport. Includes route management, vehicle tracking, and booking features. Built with React frontend and Node.js backend deployed on Vercel.",aura_fit_app:"A comprehensive fitness application designed to track workouts, monitor health metrics, and guide users toward their fitness goals. Features a dynamic UI and personalized tracking capabilities."},wL=()=>{const[n,e]=ce.useState(!1),[t,r]=ce.useState(!1),[o,a]=ce.useState("home"),{theme:c}=tr(),u=c==="dark";return ce.useEffect(()=>{const f=()=>{r(window.scrollY>60);const p=Kc.map(g=>document.getElementById(g.id)).findIndex(g=>{if(!g)return!1;const v=g.getBoundingClientRect();return v.top<=120&&v.bottom>=120});p!==-1&&a(Kc[p].id)};return window.addEventListener("scroll",f,{passive:!0}),()=>window.removeEventListener("scroll",f)},[]),R.jsx(Bt.nav,{initial:{y:-80,opacity:0},animate:{y:0,opacity:1},transition:{duration:.7,ease:[.23,1,.32,1]},className:"fixed w-full z-50 flex justify-center pt-4 px-4",children:R.jsxs("div",{className:`w-full max-w-3xl transition-all duration-500 ${t?"backdrop-blur-2xl theme-bg-surface theme-border-primary shadow-[0_8px_40px_var(--theme-shadow)] rounded-2xl":"backdrop-blur-md theme-bg-surface theme-border-primary rounded-2xl"}`,children:[R.jsxs("div",{className:"flex items-center justify-between px-5 py-3",children:[R.jsx("a",{href:"#home",className:"relative group flex items-center",children:R.jsx("span",{className:"font-black tracking-tight leading-none text-2xl sm:text-3xl md:text-[1.9rem] text-white",style:{fontFamily:"'Nunito', sans-serif",...u?{}:{WebkitTextStroke:"1px rgba(26, 16, 64, 0.28)"}},children:"DP"})}),R.jsx("div",{className:"hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2",children:Kc.map(f=>R.jsxs("a",{href:`#${f.id}`,onClick:()=>a(f.id),className:`relative px-3.5 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 ${o===f.id?"text-white":u?"text-gray-400 hover:text-white":"text-[#4a3d80] hover:text-[#1a1040]"}`,children:[o===f.id&&R.jsx(Bt.span,{layoutId:"nav-active",className:"absolute inset-0 rounded-xl bg-gradient-to-r from-primary-600/70 to-cyan-600/70",style:{boxShadow:"0 0 12px rgba(139,92,246,0.4)"},transition:{type:"spring",stiffness:500,damping:35}}),R.jsx("span",{className:"relative z-10",children:f.title})]},f.id))}),R.jsx("div",{className:"hidden md:block w-8"}),R.jsx("div",{className:"md:hidden flex items-center",children:R.jsx("button",{className:`w-8 h-8 rounded-lg glass-panel flex items-center justify-center ${u?"text-white":"text-[#1a1040]"}`,onClick:()=>e(!n),children:R.jsx(Kv,{mode:"wait",children:n?R.jsx(Bt.div,{initial:{rotate:-90,opacity:0},animate:{rotate:0,opacity:1},exit:{rotate:90,opacity:0},transition:{duration:.15},children:R.jsx(xL,{size:16})},"x"):R.jsx(Bt.div,{initial:{rotate:90,opacity:0},animate:{rotate:0,opacity:1},exit:{rotate:-90,opacity:0},transition:{duration:.15},children:R.jsx(mL,{size:16})},"m")})})})]}),R.jsx(Kv,{children:n&&R.jsx(Bt.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.25,ease:"easeInOut"},className:"overflow-hidden border-t border-white/5",children:R.jsx("div",{className:"flex flex-col p-3 gap-1",children:Kc.map((f,h)=>R.jsx(Bt.a,{href:`#${f.id}`,initial:{x:-20,opacity:0},animate:{x:0,opacity:1},transition:{delay:h*.05},onClick:()=>{e(!1),a(f.id)},className:`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${o===f.id?"bg-primary-600/20 text-primary-300 border border-primary-500/30":u?"text-gray-400 hover:text-white hover:bg-white/5":"text-slate-700 hover:text-slate-900 hover:bg-slate-100"}`,children:f.title},f.id))})})})]})})};function g_(n,e){if(typeof n=="function")return n(e);n!=null&&(n.current=e)}function bL(...n){return e=>{let t=!1;const r=n.map(o=>{const a=g_(o,e);return!t&&typeof a=="function"&&(t=!0),a});if(t)return()=>{for(let o=0;o<r.length;o++){const a=r[o];typeof a=="function"?a():g_(n[o],null)}}}}var TL=Symbol.for("react.lazy"),wu=ew[" use ".trim().toString()];function AL(n){return typeof n=="object"&&n!==null&&"then"in n}function qS(n){return n!=null&&typeof n=="object"&&"$$typeof"in n&&n.$$typeof===TL&&"_payload"in n&&AL(n._payload)}function CL(n){const e=RL(n),t=ce.forwardRef((r,o)=>{let{children:a,...c}=r;qS(a)&&typeof wu=="function"&&(a=wu(a._payload));const u=ce.Children.toArray(a),f=u.find(DL);if(f){const h=f.props.children,p=u.map(g=>g===f?ce.Children.count(h)>1?ce.Children.only(null):ce.isValidElement(h)?h.props.children:null:g);return R.jsx(e,{...c,ref:o,children:ce.isValidElement(h)?ce.cloneElement(h,void 0,p):null})}return R.jsx(e,{...c,ref:o,children:a})});return t.displayName=`${n}.Slot`,t}var gm=CL("Slot");function RL(n){const e=ce.forwardRef((t,r)=>{let{children:o,...a}=t;if(qS(o)&&typeof wu=="function"&&(o=wu(o._payload)),ce.isValidElement(o)){const c=NL(o),u=LL(a,o.props);return o.type!==ce.Fragment&&(u.ref=r?bL(r,c):c),ce.cloneElement(o,u)}return ce.Children.count(o)>1?ce.Children.only(null):null});return e.displayName=`${n}.SlotClone`,e}var PL=Symbol("radix.slottable");function DL(n){return ce.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===PL}function LL(n,e){const t={...e};for(const r in e){const o=n[r],a=e[r];/^on[A-Z]/.test(r)?o&&a?t[r]=(...u)=>{const f=a(...u);return o(...u),f}:o&&(t[r]=o):r==="style"?t[r]={...o,...a}:r==="className"&&(t[r]=[o,a].filter(Boolean).join(" "))}return{...n,...t}}function NL(n){var r,o;let e=(r=Object.getOwnPropertyDescriptor(n.props,"ref"))==null?void 0:r.get,t=e&&"isReactWarning"in e&&e.isReactWarning;return t?n.ref:(e=(o=Object.getOwnPropertyDescriptor(n,"ref"))==null?void 0:o.get,t=e&&"isReactWarning"in e&&e.isReactWarning,t?n.props.ref:n.props.ref||n.ref)}function YS(n){var e,t,r="";if(typeof n=="string"||typeof n=="number")r+=n;else if(typeof n=="object")if(Array.isArray(n)){var o=n.length;for(e=0;e<o;e++)n[e]&&(t=YS(n[e]))&&(r&&(r+=" "),r+=t)}else for(t in n)n[t]&&(r&&(r+=" "),r+=t);return r}function KS(){for(var n,e,t=0,r="",o=arguments.length;t<o;t++)(n=arguments[t])&&(e=YS(n))&&(r&&(r+=" "),r+=e);return r}const v_=n=>typeof n=="boolean"?`${n}`:n===0?"0":n,x_=KS,vm=(n,e)=>t=>{var r;if((e==null?void 0:e.variants)==null)return x_(n,t==null?void 0:t.class,t==null?void 0:t.className);const{variants:o,defaultVariants:a}=e,c=Object.keys(o).map(h=>{const p=t==null?void 0:t[h],g=a==null?void 0:a[h];if(p===null)return null;const v=v_(p)||v_(g);return o[h][v]}),u=t&&Object.entries(t).reduce((h,p)=>{let[g,v]=p;return v===void 0||(h[g]=v),h},{}),f=e==null||(r=e.compoundVariants)===null||r===void 0?void 0:r.reduce((h,p)=>{let{class:g,className:v,..._}=p;return Object.entries(_).every(M=>{let[b,y]=M;return Array.isArray(y)?y.includes({...a,...u}[b]):{...a,...u}[b]===y})?[...h,g,v]:h},[]);return x_(n,c,f,t==null?void 0:t.class,t==null?void 0:t.className)},IL=(n,e)=>{const t=new Array(n.length+e.length);for(let r=0;r<n.length;r++)t[r]=n[r];for(let r=0;r<e.length;r++)t[n.length+r]=e[r];return t},UL=(n,e)=>({classGroupId:n,validator:e}),ZS=(n=new Map,e=null,t)=>({nextPart:n,validators:e,classGroupId:t}),bu="-",__=[],FL="arbitrary..",kL=n=>{const e=BL(n),{conflictingClassGroups:t,conflictingClassGroupModifiers:r}=n;return{getClassGroupId:c=>{if(c.startsWith("[")&&c.endsWith("]"))return OL(c);const u=c.split(bu),f=u[0]===""&&u.length>1?1:0;return QS(u,f,e)},getConflictingClassGroupIds:(c,u)=>{if(u){const f=r[c],h=t[c];return f?h?IL(h,f):f:h||__}return t[c]||__}}},QS=(n,e,t)=>{if(n.length-e===0)return t.classGroupId;const o=n[e],a=t.nextPart.get(o);if(a){const h=QS(n,e+1,a);if(h)return h}const c=t.validators;if(c===null)return;const u=e===0?n.join(bu):n.slice(e).join(bu),f=c.length;for(let h=0;h<f;h++){const p=c[h];if(p.validator(u))return p.classGroupId}},OL=n=>n.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const e=n.slice(1,-1),t=e.indexOf(":"),r=e.slice(0,t);return r?FL+r:void 0})(),BL=n=>{const{theme:e,classGroups:t}=n;return zL(t,e)},zL=(n,e)=>{const t=ZS();for(const r in n){const o=n[r];xm(o,t,r,e)}return t},xm=(n,e,t,r)=>{const o=n.length;for(let a=0;a<o;a++){const c=n[a];VL(c,e,t,r)}},VL=(n,e,t,r)=>{if(typeof n=="string"){GL(n,e,t);return}if(typeof n=="function"){HL(n,e,t,r);return}WL(n,e,t,r)},GL=(n,e,t)=>{const r=n===""?e:JS(e,n);r.classGroupId=t},HL=(n,e,t,r)=>{if(jL(n)){xm(n(r),e,t,r);return}e.validators===null&&(e.validators=[]),e.validators.push(UL(t,n))},WL=(n,e,t,r)=>{const o=Object.entries(n),a=o.length;for(let c=0;c<a;c++){const[u,f]=o[c];xm(f,JS(e,u),t,r)}},JS=(n,e)=>{let t=n;const r=e.split(bu),o=r.length;for(let a=0;a<o;a++){const c=r[a];let u=t.nextPart.get(c);u||(u=ZS(),t.nextPart.set(c,u)),t=u}return t},jL=n=>"isThemeGetter"in n&&n.isThemeGetter===!0,XL=n=>{if(n<1)return{get:()=>{},set:()=>{}};let e=0,t=Object.create(null),r=Object.create(null);const o=(a,c)=>{t[a]=c,e++,e>n&&(e=0,r=t,t=Object.create(null))};return{get(a){let c=t[a];if(c!==void 0)return c;if((c=r[a])!==void 0)return o(a,c),c},set(a,c){a in t?t[a]=c:o(a,c)}}},wp="!",y_=":",$L=[],S_=(n,e,t,r,o)=>({modifiers:n,hasImportantModifier:e,baseClassName:t,maybePostfixModifierPosition:r,isExternal:o}),qL=n=>{const{prefix:e,experimentalParseClassName:t}=n;let r=o=>{const a=[];let c=0,u=0,f=0,h;const p=o.length;for(let b=0;b<p;b++){const y=o[b];if(c===0&&u===0){if(y===y_){a.push(o.slice(f,b)),f=b+1;continue}if(y==="/"){h=b;continue}}y==="["?c++:y==="]"?c--:y==="("?u++:y===")"&&u--}const g=a.length===0?o:o.slice(f);let v=g,_=!1;g.endsWith(wp)?(v=g.slice(0,-1),_=!0):g.startsWith(wp)&&(v=g.slice(1),_=!0);const M=h&&h>f?h-f:void 0;return S_(a,_,v,M)};if(e){const o=e+y_,a=r;r=c=>c.startsWith(o)?a(c.slice(o.length)):S_($L,!1,c,void 0,!0)}if(t){const o=r;r=a=>t({className:a,parseClassName:o})}return r},YL=n=>{const e=new Map;return n.orderSensitiveModifiers.forEach((t,r)=>{e.set(t,1e6+r)}),t=>{const r=[];let o=[];for(let a=0;a<t.length;a++){const c=t[a],u=c[0]==="[",f=e.has(c);u||f?(o.length>0&&(o.sort(),r.push(...o),o=[]),r.push(c)):o.push(c)}return o.length>0&&(o.sort(),r.push(...o)),r}},KL=n=>({cache:XL(n.cacheSize),parseClassName:qL(n),sortModifiers:YL(n),...kL(n)}),ZL=/\s+/,QL=(n,e)=>{const{parseClassName:t,getClassGroupId:r,getConflictingClassGroupIds:o,sortModifiers:a}=e,c=[],u=n.trim().split(ZL);let f="";for(let h=u.length-1;h>=0;h-=1){const p=u[h],{isExternal:g,modifiers:v,hasImportantModifier:_,baseClassName:M,maybePostfixModifierPosition:b}=t(p);if(g){f=p+(f.length>0?" "+f:f);continue}let y=!!b,S=r(y?M.substring(0,b):M);if(!S){if(!y){f=p+(f.length>0?" "+f:f);continue}if(S=r(M),!S){f=p+(f.length>0?" "+f:f);continue}y=!1}const A=v.length===0?"":v.length===1?v[0]:a(v).join(":"),P=_?A+wp:A,D=P+S;if(c.indexOf(D)>-1)continue;c.push(D);const I=o(S,y);for(let L=0;L<I.length;++L){const k=I[L];c.push(P+k)}f=p+(f.length>0?" "+f:f)}return f},JL=(...n)=>{let e=0,t,r,o="";for(;e<n.length;)(t=n[e++])&&(r=eM(t))&&(o&&(o+=" "),o+=r);return o},eM=n=>{if(typeof n=="string")return n;let e,t="";for(let r=0;r<n.length;r++)n[r]&&(e=eM(n[r]))&&(t&&(t+=" "),t+=e);return t},eN=(n,...e)=>{let t,r,o,a;const c=f=>{const h=e.reduce((p,g)=>g(p),n());return t=KL(h),r=t.cache.get,o=t.cache.set,a=u,u(f)},u=f=>{const h=r(f);if(h)return h;const p=QL(f,t);return o(f,p),p};return a=c,(...f)=>a(JL(...f))},tN=[],mn=n=>{const e=t=>t[n]||tN;return e.isThemeGetter=!0,e},tM=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,nM=/^\((?:(\w[\w-]*):)?(.+)\)$/i,nN=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,iN=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,rN=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,sN=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,oN=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,aN=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,ns=n=>nN.test(n),_t=n=>!!n&&!Number.isNaN(Number(n)),is=n=>!!n&&Number.isInteger(Number(n)),gh=n=>n.endsWith("%")&&_t(n.slice(0,-1)),xr=n=>iN.test(n),iM=()=>!0,lN=n=>rN.test(n)&&!sN.test(n),_m=()=>!1,cN=n=>oN.test(n),uN=n=>aN.test(n),dN=n=>!Xe(n)&&!$e(n),fN=n=>us(n,oM,_m),Xe=n=>tM.test(n),Ds=n=>us(n,aM,lN),M_=n=>us(n,yN,_t),hN=n=>us(n,cM,iM),pN=n=>us(n,lM,_m),E_=n=>us(n,rM,_m),mN=n=>us(n,sM,uN),Zc=n=>us(n,uM,cN),$e=n=>nM.test(n),$a=n=>qs(n,aM),gN=n=>qs(n,lM),w_=n=>qs(n,rM),vN=n=>qs(n,oM),xN=n=>qs(n,sM),Qc=n=>qs(n,uM,!0),_N=n=>qs(n,cM,!0),us=(n,e,t)=>{const r=tM.exec(n);return r?r[1]?e(r[1]):t(r[2]):!1},qs=(n,e,t=!1)=>{const r=nM.exec(n);return r?r[1]?e(r[1]):t:!1},rM=n=>n==="position"||n==="percentage",sM=n=>n==="image"||n==="url",oM=n=>n==="length"||n==="size"||n==="bg-size",aM=n=>n==="length",yN=n=>n==="number",lM=n=>n==="family-name",cM=n=>n==="number"||n==="weight",uM=n=>n==="shadow",SN=()=>{const n=mn("color"),e=mn("font"),t=mn("text"),r=mn("font-weight"),o=mn("tracking"),a=mn("leading"),c=mn("breakpoint"),u=mn("container"),f=mn("spacing"),h=mn("radius"),p=mn("shadow"),g=mn("inset-shadow"),v=mn("text-shadow"),_=mn("drop-shadow"),M=mn("blur"),b=mn("perspective"),y=mn("aspect"),S=mn("ease"),A=mn("animate"),P=()=>["auto","avoid","all","avoid-page","page","left","right","column"],D=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],I=()=>[...D(),$e,Xe],L=()=>["auto","hidden","clip","visible","scroll"],k=()=>["auto","contain","none"],E=()=>[$e,Xe,f],F=()=>[ns,"full","auto",...E()],z=()=>[is,"none","subgrid",$e,Xe],U=()=>["auto",{span:["full",is,$e,Xe]},is,$e,Xe],q=()=>[is,"auto",$e,Xe],re=()=>["auto","min","max","fr",$e,Xe],ue=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],G=()=>["start","end","center","stretch","center-safe","end-safe"],Z=()=>["auto",...E()],W=()=>[ns,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...E()],Y=()=>[ns,"screen","full","dvw","lvw","svw","min","max","fit",...E()],se=()=>[ns,"screen","full","lh","dvh","lvh","svh","min","max","fit",...E()],j=()=>[n,$e,Xe],B=()=>[...D(),w_,E_,{position:[$e,Xe]}],ee=()=>["no-repeat",{repeat:["","x","y","space","round"]}],Ue=()=>["auto","cover","contain",vN,fN,{size:[$e,Xe]}],Be=()=>[gh,$a,Ds],be=()=>["","none","full",h,$e,Xe],te=()=>["",_t,$a,Ds],xe=()=>["solid","dashed","dotted","double"],ge=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],Ee=()=>[_t,gh,w_,E_],Qe=()=>["","none",M,$e,Xe],tt=()=>["none",_t,$e,Xe],Pt=()=>["none",_t,$e,Xe],lt=()=>[_t,$e,Xe],Mt=()=>[ns,"full",...E()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[xr],breakpoint:[xr],color:[iM],container:[xr],"drop-shadow":[xr],ease:["in","out","in-out"],font:[dN],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[xr],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[xr],shadow:[xr],spacing:["px",_t],text:[xr],"text-shadow":[xr],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",ns,Xe,$e,y]}],container:["container"],columns:[{columns:[_t,Xe,$e,u]}],"break-after":[{"break-after":P()}],"break-before":[{"break-before":P()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:I()}],overflow:[{overflow:L()}],"overflow-x":[{"overflow-x":L()}],"overflow-y":[{"overflow-y":L()}],overscroll:[{overscroll:k()}],"overscroll-x":[{"overscroll-x":k()}],"overscroll-y":[{"overscroll-y":k()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:F()}],"inset-x":[{"inset-x":F()}],"inset-y":[{"inset-y":F()}],start:[{"inset-s":F(),start:F()}],end:[{"inset-e":F(),end:F()}],"inset-bs":[{"inset-bs":F()}],"inset-be":[{"inset-be":F()}],top:[{top:F()}],right:[{right:F()}],bottom:[{bottom:F()}],left:[{left:F()}],visibility:["visible","invisible","collapse"],z:[{z:[is,"auto",$e,Xe]}],basis:[{basis:[ns,"full","auto",u,...E()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[_t,ns,"auto","initial","none",Xe]}],grow:[{grow:["",_t,$e,Xe]}],shrink:[{shrink:["",_t,$e,Xe]}],order:[{order:[is,"first","last","none",$e,Xe]}],"grid-cols":[{"grid-cols":z()}],"col-start-end":[{col:U()}],"col-start":[{"col-start":q()}],"col-end":[{"col-end":q()}],"grid-rows":[{"grid-rows":z()}],"row-start-end":[{row:U()}],"row-start":[{"row-start":q()}],"row-end":[{"row-end":q()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":re()}],"auto-rows":[{"auto-rows":re()}],gap:[{gap:E()}],"gap-x":[{"gap-x":E()}],"gap-y":[{"gap-y":E()}],"justify-content":[{justify:[...ue(),"normal"]}],"justify-items":[{"justify-items":[...G(),"normal"]}],"justify-self":[{"justify-self":["auto",...G()]}],"align-content":[{content:["normal",...ue()]}],"align-items":[{items:[...G(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...G(),{baseline:["","last"]}]}],"place-content":[{"place-content":ue()}],"place-items":[{"place-items":[...G(),"baseline"]}],"place-self":[{"place-self":["auto",...G()]}],p:[{p:E()}],px:[{px:E()}],py:[{py:E()}],ps:[{ps:E()}],pe:[{pe:E()}],pbs:[{pbs:E()}],pbe:[{pbe:E()}],pt:[{pt:E()}],pr:[{pr:E()}],pb:[{pb:E()}],pl:[{pl:E()}],m:[{m:Z()}],mx:[{mx:Z()}],my:[{my:Z()}],ms:[{ms:Z()}],me:[{me:Z()}],mbs:[{mbs:Z()}],mbe:[{mbe:Z()}],mt:[{mt:Z()}],mr:[{mr:Z()}],mb:[{mb:Z()}],ml:[{ml:Z()}],"space-x":[{"space-x":E()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":E()}],"space-y-reverse":["space-y-reverse"],size:[{size:W()}],"inline-size":[{inline:["auto",...Y()]}],"min-inline-size":[{"min-inline":["auto",...Y()]}],"max-inline-size":[{"max-inline":["none",...Y()]}],"block-size":[{block:["auto",...se()]}],"min-block-size":[{"min-block":["auto",...se()]}],"max-block-size":[{"max-block":["none",...se()]}],w:[{w:[u,"screen",...W()]}],"min-w":[{"min-w":[u,"screen","none",...W()]}],"max-w":[{"max-w":[u,"screen","none","prose",{screen:[c]},...W()]}],h:[{h:["screen","lh",...W()]}],"min-h":[{"min-h":["screen","lh","none",...W()]}],"max-h":[{"max-h":["screen","lh",...W()]}],"font-size":[{text:["base",t,$a,Ds]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,_N,hN]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",gh,Xe]}],"font-family":[{font:[gN,pN,e]}],"font-features":[{"font-features":[Xe]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[o,$e,Xe]}],"line-clamp":[{"line-clamp":[_t,"none",$e,M_]}],leading:[{leading:[a,...E()]}],"list-image":[{"list-image":["none",$e,Xe]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",$e,Xe]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:j()}],"text-color":[{text:j()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...xe(),"wavy"]}],"text-decoration-thickness":[{decoration:[_t,"from-font","auto",$e,Ds]}],"text-decoration-color":[{decoration:j()}],"underline-offset":[{"underline-offset":[_t,"auto",$e,Xe]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:E()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",$e,Xe]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",$e,Xe]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:B()}],"bg-repeat":[{bg:ee()}],"bg-size":[{bg:Ue()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},is,$e,Xe],radial:["",$e,Xe],conic:[is,$e,Xe]},xN,mN]}],"bg-color":[{bg:j()}],"gradient-from-pos":[{from:Be()}],"gradient-via-pos":[{via:Be()}],"gradient-to-pos":[{to:Be()}],"gradient-from":[{from:j()}],"gradient-via":[{via:j()}],"gradient-to":[{to:j()}],rounded:[{rounded:be()}],"rounded-s":[{"rounded-s":be()}],"rounded-e":[{"rounded-e":be()}],"rounded-t":[{"rounded-t":be()}],"rounded-r":[{"rounded-r":be()}],"rounded-b":[{"rounded-b":be()}],"rounded-l":[{"rounded-l":be()}],"rounded-ss":[{"rounded-ss":be()}],"rounded-se":[{"rounded-se":be()}],"rounded-ee":[{"rounded-ee":be()}],"rounded-es":[{"rounded-es":be()}],"rounded-tl":[{"rounded-tl":be()}],"rounded-tr":[{"rounded-tr":be()}],"rounded-br":[{"rounded-br":be()}],"rounded-bl":[{"rounded-bl":be()}],"border-w":[{border:te()}],"border-w-x":[{"border-x":te()}],"border-w-y":[{"border-y":te()}],"border-w-s":[{"border-s":te()}],"border-w-e":[{"border-e":te()}],"border-w-bs":[{"border-bs":te()}],"border-w-be":[{"border-be":te()}],"border-w-t":[{"border-t":te()}],"border-w-r":[{"border-r":te()}],"border-w-b":[{"border-b":te()}],"border-w-l":[{"border-l":te()}],"divide-x":[{"divide-x":te()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":te()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...xe(),"hidden","none"]}],"divide-style":[{divide:[...xe(),"hidden","none"]}],"border-color":[{border:j()}],"border-color-x":[{"border-x":j()}],"border-color-y":[{"border-y":j()}],"border-color-s":[{"border-s":j()}],"border-color-e":[{"border-e":j()}],"border-color-bs":[{"border-bs":j()}],"border-color-be":[{"border-be":j()}],"border-color-t":[{"border-t":j()}],"border-color-r":[{"border-r":j()}],"border-color-b":[{"border-b":j()}],"border-color-l":[{"border-l":j()}],"divide-color":[{divide:j()}],"outline-style":[{outline:[...xe(),"none","hidden"]}],"outline-offset":[{"outline-offset":[_t,$e,Xe]}],"outline-w":[{outline:["",_t,$a,Ds]}],"outline-color":[{outline:j()}],shadow:[{shadow:["","none",p,Qc,Zc]}],"shadow-color":[{shadow:j()}],"inset-shadow":[{"inset-shadow":["none",g,Qc,Zc]}],"inset-shadow-color":[{"inset-shadow":j()}],"ring-w":[{ring:te()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:j()}],"ring-offset-w":[{"ring-offset":[_t,Ds]}],"ring-offset-color":[{"ring-offset":j()}],"inset-ring-w":[{"inset-ring":te()}],"inset-ring-color":[{"inset-ring":j()}],"text-shadow":[{"text-shadow":["none",v,Qc,Zc]}],"text-shadow-color":[{"text-shadow":j()}],opacity:[{opacity:[_t,$e,Xe]}],"mix-blend":[{"mix-blend":[...ge(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":ge()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[_t]}],"mask-image-linear-from-pos":[{"mask-linear-from":Ee()}],"mask-image-linear-to-pos":[{"mask-linear-to":Ee()}],"mask-image-linear-from-color":[{"mask-linear-from":j()}],"mask-image-linear-to-color":[{"mask-linear-to":j()}],"mask-image-t-from-pos":[{"mask-t-from":Ee()}],"mask-image-t-to-pos":[{"mask-t-to":Ee()}],"mask-image-t-from-color":[{"mask-t-from":j()}],"mask-image-t-to-color":[{"mask-t-to":j()}],"mask-image-r-from-pos":[{"mask-r-from":Ee()}],"mask-image-r-to-pos":[{"mask-r-to":Ee()}],"mask-image-r-from-color":[{"mask-r-from":j()}],"mask-image-r-to-color":[{"mask-r-to":j()}],"mask-image-b-from-pos":[{"mask-b-from":Ee()}],"mask-image-b-to-pos":[{"mask-b-to":Ee()}],"mask-image-b-from-color":[{"mask-b-from":j()}],"mask-image-b-to-color":[{"mask-b-to":j()}],"mask-image-l-from-pos":[{"mask-l-from":Ee()}],"mask-image-l-to-pos":[{"mask-l-to":Ee()}],"mask-image-l-from-color":[{"mask-l-from":j()}],"mask-image-l-to-color":[{"mask-l-to":j()}],"mask-image-x-from-pos":[{"mask-x-from":Ee()}],"mask-image-x-to-pos":[{"mask-x-to":Ee()}],"mask-image-x-from-color":[{"mask-x-from":j()}],"mask-image-x-to-color":[{"mask-x-to":j()}],"mask-image-y-from-pos":[{"mask-y-from":Ee()}],"mask-image-y-to-pos":[{"mask-y-to":Ee()}],"mask-image-y-from-color":[{"mask-y-from":j()}],"mask-image-y-to-color":[{"mask-y-to":j()}],"mask-image-radial":[{"mask-radial":[$e,Xe]}],"mask-image-radial-from-pos":[{"mask-radial-from":Ee()}],"mask-image-radial-to-pos":[{"mask-radial-to":Ee()}],"mask-image-radial-from-color":[{"mask-radial-from":j()}],"mask-image-radial-to-color":[{"mask-radial-to":j()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":D()}],"mask-image-conic-pos":[{"mask-conic":[_t]}],"mask-image-conic-from-pos":[{"mask-conic-from":Ee()}],"mask-image-conic-to-pos":[{"mask-conic-to":Ee()}],"mask-image-conic-from-color":[{"mask-conic-from":j()}],"mask-image-conic-to-color":[{"mask-conic-to":j()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:B()}],"mask-repeat":[{mask:ee()}],"mask-size":[{mask:Ue()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",$e,Xe]}],filter:[{filter:["","none",$e,Xe]}],blur:[{blur:Qe()}],brightness:[{brightness:[_t,$e,Xe]}],contrast:[{contrast:[_t,$e,Xe]}],"drop-shadow":[{"drop-shadow":["","none",_,Qc,Zc]}],"drop-shadow-color":[{"drop-shadow":j()}],grayscale:[{grayscale:["",_t,$e,Xe]}],"hue-rotate":[{"hue-rotate":[_t,$e,Xe]}],invert:[{invert:["",_t,$e,Xe]}],saturate:[{saturate:[_t,$e,Xe]}],sepia:[{sepia:["",_t,$e,Xe]}],"backdrop-filter":[{"backdrop-filter":["","none",$e,Xe]}],"backdrop-blur":[{"backdrop-blur":Qe()}],"backdrop-brightness":[{"backdrop-brightness":[_t,$e,Xe]}],"backdrop-contrast":[{"backdrop-contrast":[_t,$e,Xe]}],"backdrop-grayscale":[{"backdrop-grayscale":["",_t,$e,Xe]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[_t,$e,Xe]}],"backdrop-invert":[{"backdrop-invert":["",_t,$e,Xe]}],"backdrop-opacity":[{"backdrop-opacity":[_t,$e,Xe]}],"backdrop-saturate":[{"backdrop-saturate":[_t,$e,Xe]}],"backdrop-sepia":[{"backdrop-sepia":["",_t,$e,Xe]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":E()}],"border-spacing-x":[{"border-spacing-x":E()}],"border-spacing-y":[{"border-spacing-y":E()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",$e,Xe]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[_t,"initial",$e,Xe]}],ease:[{ease:["linear","initial",S,$e,Xe]}],delay:[{delay:[_t,$e,Xe]}],animate:[{animate:["none",A,$e,Xe]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[b,$e,Xe]}],"perspective-origin":[{"perspective-origin":I()}],rotate:[{rotate:tt()}],"rotate-x":[{"rotate-x":tt()}],"rotate-y":[{"rotate-y":tt()}],"rotate-z":[{"rotate-z":tt()}],scale:[{scale:Pt()}],"scale-x":[{"scale-x":Pt()}],"scale-y":[{"scale-y":Pt()}],"scale-z":[{"scale-z":Pt()}],"scale-3d":["scale-3d"],skew:[{skew:lt()}],"skew-x":[{"skew-x":lt()}],"skew-y":[{"skew-y":lt()}],transform:[{transform:[$e,Xe,"","none","gpu","cpu"]}],"transform-origin":[{origin:I()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Mt()}],"translate-x":[{"translate-x":Mt()}],"translate-y":[{"translate-y":Mt()}],"translate-z":[{"translate-z":Mt()}],"translate-none":["translate-none"],accent:[{accent:j()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:j()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",$e,Xe]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":E()}],"scroll-mx":[{"scroll-mx":E()}],"scroll-my":[{"scroll-my":E()}],"scroll-ms":[{"scroll-ms":E()}],"scroll-me":[{"scroll-me":E()}],"scroll-mbs":[{"scroll-mbs":E()}],"scroll-mbe":[{"scroll-mbe":E()}],"scroll-mt":[{"scroll-mt":E()}],"scroll-mr":[{"scroll-mr":E()}],"scroll-mb":[{"scroll-mb":E()}],"scroll-ml":[{"scroll-ml":E()}],"scroll-p":[{"scroll-p":E()}],"scroll-px":[{"scroll-px":E()}],"scroll-py":[{"scroll-py":E()}],"scroll-ps":[{"scroll-ps":E()}],"scroll-pe":[{"scroll-pe":E()}],"scroll-pbs":[{"scroll-pbs":E()}],"scroll-pbe":[{"scroll-pbe":E()}],"scroll-pt":[{"scroll-pt":E()}],"scroll-pr":[{"scroll-pr":E()}],"scroll-pb":[{"scroll-pb":E()}],"scroll-pl":[{"scroll-pl":E()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",$e,Xe]}],fill:[{fill:["none",...j()]}],"stroke-w":[{stroke:[_t,$a,Ds,M_]}],stroke:[{stroke:["none",...j()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},MN=eN(SN);function ki(...n){return MN(KS(n))}function EN(){return R.jsx("svg",{className:"hidden","aria-hidden":"true",children:R.jsx("defs",{children:R.jsxs("filter",{id:"container-glass",x:"0%",y:"0%",width:"100%",height:"100%",colorInterpolationFilters:"sRGB",children:[R.jsx("feTurbulence",{type:"fractalNoise",baseFrequency:"0.05 0.05",numOctaves:"1",seed:"1",result:"turbulence"}),R.jsx("feGaussianBlur",{in:"turbulence",stdDeviation:"2",result:"blurredNoise"}),R.jsx("feDisplacementMap",{in:"SourceGraphic",in2:"blurredNoise",scale:"70",xChannelSelector:"R",yChannelSelector:"B",result:"displaced"}),R.jsx("feGaussianBlur",{in:"displaced",stdDeviation:"4",result:"finalBlur"}),R.jsx("feComposite",{in:"finalBlur",in2:"finalBlur",operator:"over"})]})})})}const wN=vm("inline-flex items-center justify-center cursor-pointer gap-2 whitespace-nowrap rounded-full font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-purple-400",{variants:{variant:{default:"liquid-btn-default hover:scale-105",primary:"liquid-btn-primary hover:scale-105",cyan:"liquid-btn-cyan hover:scale-105",ghost:"liquid-btn-ghost hover:scale-105"},size:{sm:"h-8  px-4  text-xs",default:"h-10 px-6  text-sm",lg:"h-12 px-8  text-base",xl:"h-14 px-10 text-lg",icon:"size-10"}},defaultVariants:{variant:"default",size:"lg"}});function lu({className:n,variant:e,size:t,asChild:r=!1,children:o,...a}){const c=r?gm:"button";return R.jsxs(R.Fragment,{children:[R.jsxs(c,{className:ki("relative",wN({variant:e,size:t,className:n})),...a,children:[R.jsx("div",{className:ki("liquid-btn-shell absolute inset-0 rounded-full border backdrop-blur-md transition-all duration-300",e==="primary"&&"liquid-btn-shell-primary",e==="cyan"&&"liquid-btn-shell-cyan")}),R.jsx("div",{className:"absolute inset-0 -z-10 rounded-full overflow-hidden",style:{backdropFilter:'url("#container-glass") blur(2px)'}}),R.jsx("span",{className:"relative z-10 flex items-center gap-2",children:o})]}),R.jsx(EN,{})]})}const bN=ce.forwardRef(({className:n,variant:e,size:t,asChild:r=!1,...o},a)=>{const c=r?gm:"button";return R.jsx(c,{className:ki("inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-purple-600 text-white hover:bg-purple-500 h-9 px-4 py-2",n),ref:a,...o})});bN.displayName="Button";const TN=()=>R.jsx("div",{className:"absolute inset-0 overflow-hidden pointer-events-none","aria-hidden":"true"}),AN=({children:n})=>{const e=ce.useRef(null),[t,r]=ce.useState(!1);ce.useEffect(()=>{const c=()=>r(window.innerWidth<768);return c(),window.addEventListener("resize",c),()=>window.removeEventListener("resize",c)},[]);const o=c=>{if(t||!e.current)return;const u=e.current,f=u.getBoundingClientRect(),h=c.clientX-f.left,p=c.clientY-f.top,g=f.width/2,v=f.height/2,_=(p-v)/12,M=(g-h)/12;u.style.setProperty("--x",`${h}px`),u.style.setProperty("--y",`${p}px`),u.style.setProperty("--bg-x",`${h/f.width*100}%`),u.style.setProperty("--bg-y",`${p/f.height*100}%`),u.style.transform=`perspective(1000px) rotateX(${_}deg) rotateY(${M}deg) scale3d(1.01,1.01,1.01)`},a=()=>{if(t||!e.current)return;const c=e.current;c.style.transform="perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)",c.style.setProperty("--x","50%"),c.style.setProperty("--y","50%"),c.style.setProperty("--bg-x","50%"),c.style.setProperty("--bg-y","50%")};return R.jsxs("div",{ref:e,className:"holographic-card w-full max-w-full",onMouseMove:o,onMouseLeave:a,children:[!t&&R.jsx("div",{className:"holo-scanline"}),!t&&R.jsx("div",{className:"holo-glow"}),R.jsx("div",{className:"holo-content",children:n})]})};function CN(n,e=100,t=60,r=1800){const[o,a]=ce.useState(""),[c,u]=ce.useState(0),[f,h]=ce.useState(!1);return ce.useEffect(()=>{const p=n[c%n.length],g=setTimeout(()=>{f?(a(p.slice(0,o.length-1)),o.length-1===0&&(h(!1),u(v=>v+1))):(a(p.slice(0,o.length+1)),o.length+1===p.length&&setTimeout(()=>h(!0),r))},f?t:e);return()=>clearTimeout(g)},[o,f,c,n,e,t,r]),o}const RN=()=>{const n=CN(["Data Science","Machine Learning","Full-Stack Dev","AI & ML"]),{theme:e}=tr(),t=e==="dark";return R.jsxs("section",{id:"home",className:"relative min-h-[calc(100vh-5rem)] flex flex-col justify-start sm:justify-center items-center overflow-hidden pt-24 sm:pt-20",children:[R.jsx("div",{className:"absolute inset-0 z-[1] pointer-events-none",style:{background:t?"linear-gradient(to bottom, rgba(2,2,8,0.5) 0%, rgba(2,2,8,0.35) 50%, rgba(2,2,8,0.65) 100%)":"linear-gradient(to bottom, rgba(248,247,255,0.65) 0%, rgba(248,247,255,0.5) 50%, rgba(248,247,255,0.75) 100%)"}}),R.jsx(TN,{}),R.jsxs("div",{className:"relative z-40 text-center px-4 sm:px-6 max-w-4xl mx-auto w-full",children:[R.jsxs(Bt.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.6},className:"inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border glass-panel border-white/10 bg-slate-900/70 shadow-[0_0_30px_rgba(165,235,255,0.08)]",children:[R.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-300 animate-pulse shadow-[0_0_15px_rgba(56,189,248,0.6)]"}),R.jsx("span",{className:"text-sm font-medium text-slate-200",children:"Available for opportunities"})]}),R.jsx(Bt.div,{initial:{opacity:0,y:40},animate:{opacity:1,y:0},transition:{duration:.9,delay:.1},className:"mb-10",children:R.jsx(AN,{children:R.jsxs("div",{className:"px-8 py-10 md:px-12 md:py-12",children:[R.jsx("div",{className:"absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/70 to-transparent"}),R.jsx("div",{className:"absolute top-4 left-4 w-7 h-7 border-t-2 border-l-2 border-primary-500/60 rounded-tl-lg"}),R.jsx("div",{className:"absolute top-4 right-4 w-7 h-7 border-t-2 border-r-2 border-cyan-500/60 rounded-tr-lg"}),R.jsx("div",{className:"absolute bottom-4 left-4 w-7 h-7 border-b-2 border-l-2 border-cyan-500/60 rounded-bl-lg"}),R.jsx("div",{className:"absolute bottom-4 right-4 w-7 h-7 border-b-2 border-r-2 border-primary-500/60 rounded-br-lg"}),R.jsx("h1",{className:"text-4xl md:text-6xl lg:text-7xl font-space font-bold tracking-tight leading-tight mb-4 hero-title text-white",children:R.jsx("span",{className:"gradient-text",children:m_.title})}),R.jsx("div",{className:"h-px w-24 bg-gradient-to-r from-white/30 via-cyan-300/30 to-white/30 mx-auto mb-5 rounded-full"}),R.jsxs("div",{className:"text-lg md:text-2xl font-space font-medium mb-6 flex items-center justify-center gap-2 flex-wrap",children:[R.jsx("span",{className:"text-slate-300",children:"Passionate about"}),R.jsxs("span",{className:"min-w-[160px] text-left inline-block text-cyan-200",children:[n,R.jsx("span",{className:"animate-pulse text-white/70",children:"|"})]})]}),R.jsx("p",{className:"text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-8 text-slate-300",children:m_.description}),R.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4 mb-8",children:[R.jsx(lu,{variant:"primary",size:"lg",className:"w-full sm:w-auto",onClick:()=>{var r;return(r=document.getElementById("projects"))==null?void 0:r.scrollIntoView({behavior:"smooth"})},children:"View My Work"}),R.jsxs(lu,{variant:"cyan",size:"lg",className:"w-full sm:w-auto",onClick:()=>{const r=document.createElement("a");r.href=EL,r.download="D_Venkata_Durga_Prasad_Resume.pdf",r.click()},children:[R.jsx(cL,{size:16}),"Download Resume"]}),R.jsx(lu,{variant:"default",size:"lg",className:"w-full sm:w-auto",onClick:()=>{var r;return(r=document.getElementById("contact"))==null?void 0:r.scrollIntoView({behavior:"smooth"})},children:"Contact Me"})]}),R.jsx("div",{className:"flex items-center justify-center gap-6",children:[{href:"https://github.com/dasaripandu2321",icon:ul,label:"GitHub"},{href:"https://www.linkedin.com/in/dasari-venkata-durga-prasad-694ba7289",icon:pm,label:"LinkedIn"},{href:"mailto:dasaripandu1979@gmail.com",icon:mm,label:"Email"}].map(({href:r,icon:o,label:a})=>R.jsxs("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"group flex items-center gap-2 transition-all duration-300 hover:text-cyan-200 text-slate-400",children:[R.jsx("span",{className:"w-10 h-10 rounded-full flex items-center justify-center group-hover:shadow-[0_0_30px_rgba(96,165,250,0.18)] transition-all glass-panel bg-slate-900/70 border border-white/10",children:R.jsx(o,{size:18})}),R.jsx("span",{className:"text-sm hidden sm:block",children:a})]},a))})]})})})]}),R.jsx("div",{className:"absolute bottom-0 left-0 right-0 z-10 w-full",children:R.jsx(Uo,{gradientColors:["#a78bfa","#06b6d4","#f472b6"],animationDuration:1.8})}),R.jsxs(Bt.div,{animate:{y:[0,10,0]},transition:{repeat:1/0,duration:2},className:"absolute bottom-10 z-10 flex flex-col items-center gap-2 text-slate-500",children:[R.jsx("span",{className:"text-xs tracking-widest uppercase text-slate-400",children:"Scroll"}),R.jsx(aL,{size:20,className:"text-slate-300"})]})]})};class PN{constructor(){this.pos={x:0,y:0},this.vel={x:0,y:0},this.acc={x:0,y:0},this.target={x:0,y:0},this.closeEnoughTarget=100,this.maxSpeed=1,this.maxForce=.1,this.particleSize=10,this.isKilled=!1,this.startColor={r:0,g:0,b:0},this.targetColor={r:0,g:0,b:0},this.colorWeight=0,this.colorBlendRate=.01}move(){const e=Math.sqrt(Math.pow(this.pos.x-this.target.x,2)+Math.pow(this.pos.y-this.target.y,2)),t=e<this.closeEnoughTarget?e/this.closeEnoughTarget:1,r={x:this.target.x-this.pos.x,y:this.target.y-this.pos.y},o=Math.sqrt(r.x*r.x+r.y*r.y);o>0&&(r.x=r.x/o*this.maxSpeed*t,r.y=r.y/o*this.maxSpeed*t);const a={x:r.x-this.vel.x,y:r.y-this.vel.y},c=Math.sqrt(a.x*a.x+a.y*a.y);c>0&&(a.x=a.x/c*this.maxForce,a.y=a.y/c*this.maxForce),this.acc.x+=a.x,this.acc.y+=a.y,this.vel.x+=this.acc.x,this.vel.y+=this.acc.y,this.pos.x+=this.vel.x,this.pos.y+=this.vel.y,this.acc.x=0,this.acc.y=0}draw(e,t){this.colorWeight<1&&(this.colorWeight=Math.min(this.colorWeight+this.colorBlendRate,1));const r=Math.round(this.startColor.r+(this.targetColor.r-this.startColor.r)*this.colorWeight),o=Math.round(this.startColor.g+(this.targetColor.g-this.startColor.g)*this.colorWeight),a=Math.round(this.startColor.b+(this.targetColor.b-this.startColor.b)*this.colorWeight);e.fillStyle=`rgb(${r},${o},${a})`,t?e.fillRect(this.pos.x,this.pos.y,2,2):(e.beginPath(),e.arc(this.pos.x,this.pos.y,this.particleSize/2,0,Math.PI*2),e.fill())}kill(e,t){if(!this.isKilled){const r=dM(e/2,t/2,(e+t)/2);this.target.x=r.x,this.target.y=r.y,this.startColor={r:this.startColor.r+(this.targetColor.r-this.startColor.r)*this.colorWeight,g:this.startColor.g+(this.targetColor.g-this.startColor.g)*this.colorWeight,b:this.startColor.b+(this.targetColor.b-this.startColor.b)*this.colorWeight},this.targetColor={r:0,g:0,b:0},this.colorWeight=0,this.isKilled=!0}}}function dM(n,e,t){const r=Math.random()*1e3,o=Math.random()*300,a={x:r-n,y:o-e},c=Math.sqrt(a.x*a.x+a.y*a.y);return c>0&&(a.x=a.x/c*t,a.y=a.y/c*t),{x:n+a.x,y:e+a.y}}const b_=[{r:167,g:139,b:250},{r:34,g:211,b:238},{r:244,g:114,b:182},{r:96,g:165,b:250},{r:52,g:211,b:153}];let T_=0;const DN=()=>{const n=b_[T_%b_.length];return T_++,n};function fM({words:n=["HELLO"],height:e=120,fontSize:t=80}){const r=ce.useRef(null),o=ce.useRef(null),a=ce.useRef([]),c=ce.useRef(0),u=ce.useRef(0),f=8,h=!0,p=(g,v)=>{const _=v.width,M=v.height,b=document.createElement("canvas");b.width=_,b.height=M;const y=b.getContext("2d");y.clearRect(0,0,_,M),y.fillStyle="white",y.font=`bold ${t}px 'Space Grotesk', Arial`,y.textAlign="center",y.textBaseline="middle",y.fillText(g,_/2,M/2);const A=y.getImageData(0,0,_,M).data,P=DN(),D=a.current;let I=0;const L=[];for(let k=0;k<A.length;k+=f*4)L.push(k);for(let k=L.length-1;k>0;k--){const E=Math.floor(Math.random()*(k+1));[L[k],L[E]]=[L[E],L[k]]}for(const k of L)if(A[k+3]>0){const E=k/4%_,F=Math.floor(k/4/_);let z;if(I<D.length)z=D[I],z.isKilled=!1,I++;else{z=new PN;const U=dM(_/2,M/2,(_+M)/2);z.pos.x=U.x,z.pos.y=U.y,z.maxSpeed=Math.random()*6+4,z.maxForce=z.maxSpeed*.05,z.particleSize=Math.random()*4+3,z.colorBlendRate=Math.random()*.03+.005,D.push(z)}z.startColor={r:z.startColor.r+(z.targetColor.r-z.startColor.r)*z.colorWeight,g:z.startColor.g+(z.targetColor.g-z.startColor.g)*z.colorWeight,b:z.startColor.b+(z.targetColor.b-z.startColor.b)*z.colorWeight},z.targetColor=P,z.colorWeight=0,z.target.x=E,z.target.y=F}for(let k=I;k<D.length;k++)D[k].kill(_,M)};return ce.useEffect(()=>{const g=r.current;if(!g)return;let v=!1;const _=new IntersectionObserver(([y])=>{v=y.isIntersecting},{threshold:.1});_.observe(g);const M=()=>{g.width=g.offsetWidth||800,g.height=e,p(n[u.current],g)};M();const b=()=>{if(v){const y=g.getContext("2d");y.clearRect(0,0,g.width,g.height);const S=a.current;for(let A=S.length-1;A>=0;A--){const P=S[A];P.move(),P.draw(y,h),P.isKilled&&(P.pos.x<-50||P.pos.x>g.width+50||P.pos.y<-50||P.pos.y>g.height+50)&&S.splice(A,1)}c.current++,c.current%220===0&&(u.current=(u.current+1)%n.length,p(n[u.current],g))}o.current=requestAnimationFrame(b)};return b(),window.addEventListener("resize",M),()=>{cancelAnimationFrame(o.current),window.removeEventListener("resize",M),_.disconnect()}},[n,e,t]),R.jsx("canvas",{ref:r,className:"particle-canvas",style:{width:"100%",height:`${e}px`,display:"block"}})}const LN={Languages:"⌨️",Frontend:"🎨","Backend & DB":"🗄️","AI & Data Science":"🤖","Tools & Deployment":"🚀"},NN=({children:n,className:e=""})=>{const t=ce.useRef(null),[r,o]=Gs.useState(!1);Gs.useEffect(()=>{const h=()=>o(window.innerWidth<768);return h(),window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)},[]);const a=Mu(0),c=Mu(0),u=f_(h_(c,[-.5,.5],[10,-10]),{stiffness:300,damping:30}),f=f_(h_(a,[-.5,.5],[-10,10]),{stiffness:300,damping:30});return r?R.jsx("div",{className:e,children:n}):R.jsx(Bt.div,{ref:t,onMouseMove:h=>{const p=t.current.getBoundingClientRect();a.set((h.clientX-p.left)/p.width-.5),c.set((h.clientY-p.top)/p.height-.5)},onMouseLeave:()=>{a.set(0),c.set(0)},style:{rotateX:u,rotateY:f,transformStyle:"preserve-3d",perspective:800},className:`relative group ${e}`,children:n})},IN=()=>{const{theme:n}=tr(),e=n==="dark";return R.jsx("section",{id:"skills",className:"py-24 relative overflow-hidden bg-slate-950 text-slate-100",children:R.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-8 relative z-10",children:[R.jsxs(Bt.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"mb-16 text-center",children:[R.jsx("p",{className:`text-sm font-semibold tracking-widest uppercase mb-3 ${e?"text-primary-400":"text-primary-600"}`,children:"What I work with"}),R.jsx("div",{className:"w-full max-w-2xl mx-auto mb-2",children:R.jsx(fM,{words:["LANGUAGES","FRONTEND","BACKEND","AI & DATA","TOOLS"],height:100,fontSize:72})}),R.jsxs("h2",{className:`text-2xl md:text-3xl font-space font-bold mb-4 ${e?"":"text-[#1a1040]"}`,children:["Technical ",R.jsx("span",{className:"gradient-text",children:"Arsenal"})]}),R.jsx("div",{className:"h-px w-32 bg-gradient-to-r from-transparent via-primary-500 to-transparent mx-auto"})]}),R.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:yL.map((t,r)=>R.jsx(Bt.div,{initial:{opacity:0,y:30,rotateX:-10},whileInView:{opacity:1,y:0,rotateX:0},viewport:{once:!0},transition:{duration:.6,delay:r*.1},className:"h-full",children:R.jsx(NN,{children:R.jsxs("div",{className:"holo-card rounded-2xl p-6 h-full depth-shadow scanline bg-slate-900/90 border border-white/10",children:[R.jsxs("div",{className:"flex items-center gap-3 mb-5",children:[R.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600/30 to-cyan-600/30 border border-primary-500/20 flex items-center justify-center text-xl",children:LN[t.category]||"💡"}),R.jsx("h3",{className:`card-title text-lg font-bold font-space ${e?"text-white":"text-slate-900"}`,children:t.category})]}),R.jsx("div",{className:"h-px w-full bg-gradient-to-r from-primary-500/50 to-transparent mb-5"}),R.jsx("div",{className:"flex flex-wrap gap-2",children:t.items.map((o,a)=>R.jsx(Bt.span,{initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{delay:r*.1+a*.05},className:`skill-tag px-3 py-1 text-xs font-semibold rounded-full transition-all cursor-default ${e?"border border-gray-700/50 text-gray-300 bg-dark-800/50":"border border-slate-200 text-slate-700 bg-slate-100"}`,children:o},o))})]})})},t.category))})]})})},UN=({project:n})=>{if(!n)return null;const e=String(n.title||"").toLowerCase(),t=String(n.github||n.link||"").toLowerCase();if(e.includes(`${zs}.github.io`)||t.includes(`${zs}.github.io`))return null;const{theme:r}=tr(),o=r==="dark";return R.jsx("div",{className:"relative group h-full",children:R.jsxs("div",{className:`relative rounded-2xl p-6 h-full flex flex-col overflow-hidden ${o?"bg-slate-900 text-slate-100 border border-white/10":"bg-white text-slate-900 border border-slate-200"} shadow-lg`,children:[R.jsx("div",{className:"absolute top-0 left-0 right-0 h-px",style:{background:"linear-gradient(90deg, transparent, rgba(139,92,246,0.5), transparent)"}}),R.jsx("div",{className:"absolute top-3 right-3 w-6 h-6 border-t border-r border-primary-500/20 rounded-tr-lg"}),R.jsx("div",{className:"absolute bottom-3 left-3 w-6 h-6 border-b border-l border-cyan-500/20 rounded-bl-lg"}),R.jsxs("div",{className:"flex-1",children:[R.jsxs("div",{className:"flex items-start justify-between mb-4",children:[R.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600/20 to-cyan-600/20 border border-primary-500/20 flex items-center justify-center",children:R.jsx(lL,{size:16,className:"text-primary-400"})}),R.jsxs("div",{className:"flex gap-2",children:[R.jsx("a",{href:n.github,target:"_blank",rel:"noopener noreferrer",className:`w-7 h-7 rounded-lg ${o?"bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-primary-500/40":"bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-950 hover:border-primary-500/40"} flex items-center justify-center transition-all`,children:R.jsx(ul,{size:12})}),n.link&&n.link!=="#"&&n.link!==n.github&&R.jsx("a",{href:n.link,target:"_blank",rel:"noopener noreferrer",className:`w-7 h-7 rounded-lg ${o?"bg-white/5 border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40":"bg-slate-100 border border-slate-200 text-slate-600 hover:text-cyan-600 hover:border-cyan-500/40"} flex items-center justify-center transition-all`,children:R.jsx(uL,{size:12})})]})]}),R.jsx("h3",{className:`card-title text-base font-bold mb-2 font-space leading-tight ${o?"text-white":"text-slate-900"}`,children:n.title}),R.jsx("p",{className:`card-body text-xs leading-relaxed line-clamp-4 mb-4 ${o?"text-gray-400":"text-slate-600"}`,children:n.description})]}),R.jsxs("div",{children:[R.jsx("div",{className:"flex flex-wrap gap-1.5 mb-4",children:n.tags.map(a=>R.jsx("span",{className:`px-2 py-0.5 text-xs font-semibold rounded-full ${o?"bg-primary-500/10 border border-primary-500/20 text-primary-300":"bg-slate-100 border border-slate-200 text-slate-700"}`,children:a},a))}),R.jsxs("div",{className:`flex items-center justify-between pt-3 border-t ${o?"border-white/5":"border-slate-200"}`,children:[R.jsxs("a",{href:n.github,target:"_blank",rel:"noopener noreferrer",className:`flex items-center gap-1.5 text-xs font-semibold transition-colors ${o?"text-gray-400 hover:text-white":"text-slate-600 hover:text-slate-900"}`,children:[R.jsx(ul,{size:12})," Source"]}),n.link&&n.link!=="#"&&n.link!==n.github&&R.jsxs("a",{href:n.link,target:"_blank",rel:"noopener noreferrer",className:`flex items-center gap-1.5 text-xs font-semibold transition-colors ${o?"text-gray-400 hover:text-cyan-400":"text-slate-600 hover:text-cyan-600"}`,children:[R.jsx(dL,{size:12})," Live Demo"]})]})]})]})})},FN=new Set(["durgaprasad.me","durgaprasad-me","durgaprasad_me",`${zs}.github.io`]),kN=n=>{const e=String(n).toLowerCase(),t=e.replace(/_/g,"-");return e==="aura_fit_app"||t==="aura-fit-app"||t==="aura-fit"||t==="aurafit"},A_=n=>kN(n.title)||/aura_fit_app|aura-fit-app/i.test(n.github||""),ON=n=>{const e=n.toLowerCase(),t=Object.keys(Eu).find(r=>e.includes(r));return t?Eu[t]:null},C_=n=>{const e=n.filter(A_),r=[...n.filter(o=>!A_(o)),...e];return r.filter((o,a)=>r.findIndex(c=>c.title===o.title&&c.github===o.github)===a)},BN=()=>{const[n,e]=ce.useState([]),[t,r]=ce.useState(!0),{theme:o}=tr(),a=o==="dark";return ce.useEffect(()=>{(async()=>{try{const u=await fetch(`https://api.github.com/users/${zs}/repos?sort=updated&per_page=100`);if(!u.ok)throw new Error("Failed to fetch repos");const h=(await u.json()).filter(g=>!g.fork&&!g.name.toLowerCase().includes("code_alpha")&&!g.name.toLowerCase().includes("codealpha")&&!FN.has(g.name.toLowerCase())&&!String(g.html_url||"").toLowerCase().includes(`${zs}.github.io`)&&!(g.homepage&&String(g.homepage).toLowerCase().includes(`${zs}.github.io`))).map(g=>{let v=g.homepage||g.html_url;return g.name.toLowerCase().includes("darshanam")||g.name.toLowerCase().includes("darsanam")?v="https://darsanam-tkts.vercel.app/login":g.name.toLowerCase().includes("fake")&&g.name.toLowerCase().includes("news")?v="https://fake-news-detector-six-ashen.vercel.app/":g.name.toLowerCase().includes("bvr")?v="https://bvr-transport.vercel.app/":g.name.toLowerCase().includes("crop")&&g.name.toLowerCase().includes("companion")&&(v="https://crop-companion-iota.vercel.app/signin"),{title:g.name,description:ON(g.name)||g.description||"No description provided for this repository.",tags:[g.language].filter(Boolean),github:g.html_url,link:v}}),p=C_(h);if(p.length>0)e(p);else throw new Error("No public repos found")}catch(u){console.error("Error fetching GitHub projects:",u);const f=Object.keys(Eu),h=[...f.filter(g=>g!=="aura_fit_app"),...f.filter(g=>g==="aura_fit_app")],p=C_(h.map(g=>{let v="#";const _=g.toLowerCase();return _.includes("darshanam")||_.includes("darsanam")?v="https://darsanam-tkts.vercel.app/login":_.includes("fake")&&_.includes("news")?v="https://fake-news-detector-six-ashen.vercel.app/":_.includes("bvr")?v="https://bvr-transport.vercel.app/":_.includes("crop")&&_.includes("companion")&&(v="https://crop-companion-iota.vercel.app/signin"),{title:g.split(/[-_]/).map(b=>b.charAt(0).toUpperCase()+b.slice(1).toLowerCase()).join(" "),description:Eu[g],tags:["React","JavaScript","Python"],github:`https://github.com/${zs}/${g}`,link:v}}));e(p)}finally{r(!1)}})()},[]),R.jsx("section",{id:"projects",className:"py-24 relative overflow-hidden bg-slate-950 text-slate-100",children:R.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-8 relative z-10",children:[R.jsxs(Bt.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},className:"mb-16 text-center",children:[R.jsx("p",{className:`text-sm font-semibold tracking-widest uppercase mb-3 ${a?"text-pink-400":"text-pink-600"}`,children:"What I've built"}),R.jsx("div",{className:"w-full max-w-2xl mx-auto mb-2",children:R.jsx(fM,{words:["PROJECTS","ML MODELS","WEB APPS","DASHBOARDS","AI TOOLS"],height:100,fontSize:72})}),R.jsxs("h2",{className:`text-2xl md:text-3xl font-space font-bold mb-4 ${a?"":"text-[#1a1040]"}`,children:["Featured ",R.jsx("span",{className:"gradient-text",children:"Projects"})]}),R.jsx("div",{className:"h-px w-32 bg-gradient-to-r from-transparent via-pink-500 to-transparent mx-auto"})]}),t?R.jsx("div",{className:`text-center font-space text-xl animate-pulse ${a?"text-primary-400":"text-primary-600"}`,children:"Loading GitHub Projects..."}):R.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:n.length>0?n.map((c,u)=>R.jsx(Bt.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:u%6*.1},className:"h-full",children:R.jsx(UN,{project:c})},c.title)):R.jsx("div",{className:`text-center col-span-full ${a?"text-gray-400":"text-[#5a4d8a]"}`,children:"No projects found. Check your GITHUB_USERNAME in constants/index.js!"})})]})})},zN=vm("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function VN({className:n,variant:e,...t}){return R.jsx("div",{className:ki(zN({variant:e}),n),...t})}const GN=vm("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),hM=ce.forwardRef(({className:n,variant:e,size:t,asChild:r=!1,...o},a)=>{const c=r?gm:"button";return R.jsx(c,{className:ki(GN({variant:e,size:t,className:n})),ref:a,...o})});hM.displayName="Button";const pM=ce.forwardRef(({className:n,...e},t)=>R.jsx("div",{ref:t,className:ki("rounded-lg border bg-card text-card-foreground shadow-sm",n),...e}));pM.displayName="Card";const mM=ce.forwardRef(({className:n,...e},t)=>R.jsx("div",{ref:t,className:ki("flex flex-col space-y-1.5 p-6",n),...e}));mM.displayName="CardHeader";const gM=ce.forwardRef(({className:n,...e},t)=>R.jsx("h3",{ref:t,className:ki("text-2xl font-semibold leading-none tracking-tight",n),...e}));gM.displayName="CardTitle";const HN=ce.forwardRef(({className:n,...e},t)=>R.jsx("p",{ref:t,className:ki("text-sm text-muted-foreground",n),...e}));HN.displayName="CardDescription";const vM=ce.forwardRef(({className:n,...e},t)=>R.jsx("div",{ref:t,className:ki("p-6 pt-0",n),...e}));vM.displayName="CardContent";const WN=ce.forwardRef(({className:n,...e},t)=>R.jsx("div",{ref:t,className:ki("flex items-center p-6 pt-0",n),...e}));WN.displayName="CardFooter";function jN({timelineData:n}){const{theme:e}=tr(),t=e==="dark",[r,o]=ce.useState({}),[a,c]=ce.useState("orbital"),[u,f]=ce.useState(0),[h,p]=ce.useState(!0),[g,v]=ce.useState({}),[_,M]=ce.useState({x:0,y:0}),[b,y]=ce.useState(null),S=ce.useRef(null),A=ce.useRef(null),P=ce.useRef({}),D=U=>{(U.target===S.current||U.target===A.current)&&(o({}),y(null),v({}),p(!0))},I=U=>{o(q=>{const re={...q};if(Object.keys(re).forEach(ue=>{parseInt(ue)!==U&&(re[parseInt(ue)]=!1)}),re[U]=!q[U],q[U])y(null),p(!0),v({});else{y(U),p(!1);const ue=E(U),G={};ue.forEach(Z=>{G[Z]=!0}),v(G),L(U)}return re})};ce.useEffect(()=>{let U;return h&&a==="orbital"&&(U=setInterval(()=>{f(q=>{const re=(q+.3)%360;return Number(re.toFixed(3))})},50)),()=>{U&&clearInterval(U)}},[h,a]);const L=U=>{if(a!=="orbital"||!P.current[U])return;const q=n.findIndex(G=>G.id===U),re=n.length,ue=q/re*360;f(270-ue)},k=(U,q)=>{const re=(U/q*360+u)%360,ue=200,G=re*Math.PI/180,Z=ue*Math.cos(G)+_.x,W=ue*Math.sin(G)+_.y,Y=Math.round(100+50*Math.cos(G)),se=Math.max(.4,Math.min(1,.4+.6*((1+Math.sin(G))/2)));return{x:Z,y:W,angle:re,zIndex:Y,opacity:se}},E=U=>{const q=n.find(re=>re.id===U);return q?q.relatedIds:[]},F=U=>b?E(b).includes(U):!1,z=U=>{const q=t?{completed:"text-white bg-black border-white",inProgress:"text-black bg-white border-white/10",pending:"text-white bg-black/40 border-white/50"}:{completed:"text-slate-900 bg-purple-100 border-purple-200",inProgress:"text-slate-900 bg-cyan-100 border-cyan-200",pending:"text-slate-900 bg-slate-200 border-slate-300"};switch(U){case"completed":return q.completed;case"in-progress":return q.inProgress;case"pending":return q.pending;default:return q.pending}};return R.jsx("div",{className:"w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent",ref:S,onClick:D,children:R.jsx("div",{className:"relative w-full max-w-4xl h-full flex items-center justify-center",children:R.jsxs("div",{className:"absolute w-full h-full flex items-center justify-center",ref:A,style:{perspective:"1000px",transform:`translate(${_.x}px, ${_.y}px)`},children:[R.jsxs("div",{className:"absolute w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-teal-500 animate-pulse flex items-center justify-center z-10",children:[R.jsx("div",{className:"absolute w-20 h-20 rounded-full border border-white/20 animate-ping opacity-70"}),R.jsx("div",{className:"absolute w-24 h-24 rounded-full border border-white/10 animate-ping opacity-50",style:{animationDelay:"0.5s"}}),R.jsx("div",{className:"w-8 h-8 rounded-full bg-white/80 backdrop-blur-md"})]}),R.jsx("div",{className:"absolute w-96 h-96 rounded-full border border-white/10"}),n.map((U,q)=>{const re=k(q,n.length),ue=r[U.id],G=F(U.id),Z=g[U.id],W=U.icon,Y={transform:`translate(${re.x}px, ${re.y}px)`,zIndex:ue?200:re.zIndex,opacity:ue?1:re.opacity};return R.jsxs("div",{ref:se=>P.current[U.id]=se,className:"absolute transition-all duration-700 cursor-pointer",style:Y,onClick:se=>{se.stopPropagation(),I(U.id)},children:[R.jsx("div",{className:`absolute rounded-full -inset-1 ${Z?"animate-pulse duration-1000":""}`,style:{background:"radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)",width:`${U.energy*.5+40}px`,height:`${U.energy*.5+40}px`,left:`-${(U.energy*.5+40-40)/2}px`,top:`-${(U.energy*.5+40-40)/2}px`}}),R.jsx("div",{className:`
                  w-10 h-10 rounded-full flex items-center justify-center
                  ${ue?t?"bg-white text-black":"bg-slate-200 text-slate-900":G?t?"bg-white/50 text-black":"bg-slate-100 text-slate-800":t?"bg-dark-800/80 text-white":"bg-white text-slate-900"}
                  border-2
                  ${ue?t?"border-white shadow-lg shadow-white/30":"border-slate-300 shadow-lg shadow-slate-300/20":G?"border-white animate-pulse":t?"border-white/40":"border-slate-200"}
                  transition-all duration-300 transform
                  ${ue?"scale-150":""}
                `,children:R.jsx(W,{size:16})}),R.jsx("div",{className:`
                  absolute top-12  whitespace-nowrap
                  text-xs font-semibold tracking-wider
                  transition-all duration-300
                  ${ue?t?"text-white":"text-slate-900":t?"text-white/70":"text-slate-600"}
                `,children:U.title}),ue&&R.jsxs(pM,{className:`absolute top-20 left-1/2 -translate-x-1/2 w-64 overflow-visible ${t?"bg-dark-900/90 backdrop-blur-xl border-white/20 shadow-xl shadow-black/40":"bg-white/95 backdrop-blur-xl border-slate-200 shadow-xl shadow-slate-300/20"}`,children:[R.jsx("div",{className:`absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 ${t?"bg-white/50":"bg-slate-300/80"}`}),R.jsxs(mM,{className:"pb-2",children:[R.jsxs("div",{className:"flex justify-between items-center",children:[R.jsx(VN,{className:`px-2 text-xs ${z(U.status)}`,children:U.status==="completed"?"COMPLETE":U.status==="in-progress"?"IN PROGRESS":"PENDING"}),R.jsx("span",{className:`text-xs font-mono ${t?"text-white/50":"text-slate-500"}`,children:U.date})]}),R.jsx(gM,{className:"text-sm mt-2",children:U.title})]}),R.jsxs(vM,{className:`text-xs ${t?"text-white/80":"text-slate-700"}`,children:[R.jsx("p",{children:U.content}),R.jsxs("div",{className:`mt-4 pt-3 border-t ${t?"border-white/10":"border-slate-200"}`,children:[R.jsxs("div",{className:"flex justify-between items-center text-xs mb-1",children:[R.jsxs("span",{className:"flex items-center",children:[R.jsx(_L,{size:10,className:"mr-1"}),"Energy Level"]}),R.jsxs("span",{className:"font-mono",children:[U.energy,"%"]})]}),R.jsx("div",{className:"w-full h-1 bg-white/10 rounded-full overflow-hidden",children:R.jsx("div",{className:"h-full bg-gradient-to-r from-blue-500 to-purple-500",style:{width:`${U.energy}%`}})})]}),U.relatedIds.length>0&&R.jsxs("div",{className:`mt-4 pt-3 border-t ${t?"border-white/10":"border-slate-200"}`,children:[R.jsxs("div",{className:"flex items-center mb-2",children:[R.jsx(pL,{size:10,className:`${t?"text-white/70":"text-slate-500"} mr-1`}),R.jsx("h4",{className:`text-xs uppercase tracking-wider font-medium ${t?"text-white/70":"text-slate-500"}`,children:"Connected Nodes"})]}),R.jsx("div",{className:"flex flex-wrap gap-1",children:U.relatedIds.map(se=>{const j=n.find(B=>B.id===se);return R.jsxs(hM,{variant:"outline",size:"sm",className:`flex items-center h-6 px-2 py-0 text-xs rounded-none transition-all ${t?"border-white/20 bg-transparent hover:bg-white/10 text-white/80 hover:text-white":"border-slate-300 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"}`,onClick:B=>{B.stopPropagation(),I(se)},children:[j==null?void 0:j.title,R.jsx(nL,{size:8,className:`ml-1 ${t?"text-white/60":"text-slate-500"}`})]},se)})})]})]})]})]},U.id)})]})})})}function R_({position:n}){const e=Array.from({length:36},(t,r)=>({id:r,d:`M-${380-r*5*n} -${189+r*6}C-${380-r*5*n} -${189+r*6} -${312-r*5*n} ${216-r*6} ${152-r*5*n} ${343-r*6}C${616-r*5*n} ${470-r*6} ${684-r*5*n} ${875-r*6} ${684-r*5*n} ${875-r*6}`,color:`rgba(15,23,42,${.1+r*.03})`,width:.5+r*.03}));return R.jsx("div",{className:"absolute inset-0 pointer-events-none",children:R.jsxs("svg",{className:"w-full h-full text-slate-950 dark:text-white",viewBox:"0 0 696 316",fill:"none",children:[R.jsx("title",{children:"Background Paths"}),e.map(t=>R.jsx(Bt.path,{d:t.d,stroke:"currentColor",strokeWidth:t.width,strokeOpacity:.1+t.id*.03,initial:{pathLength:.3,opacity:.6},animate:{pathLength:1,opacity:[.3,.6,.3],pathOffset:[0,1,0]},transition:{duration:20+Math.random()*10,repeat:Number.POSITIVE_INFINITY,ease:"linear"}},t.id))]})})}const XN=()=>{const{theme:n}=tr(),e=n==="dark";return R.jsxs("section",{id:"experience",className:"py-28 relative overflow-hidden",children:[R.jsx("div",{className:`absolute inset-0 ${e?"bg-dark-900/60":"bg-white/70"}`}),R.jsx("div",{className:`orb-cyan absolute w-[500px] h-[500px] -bottom-32 -left-32 opacity-20\r
      <FloatingPaths position={1} />\r
      <FloatingPaths position={-1} />`}),R.jsx("div",{className:"orb-purple absolute w-[400px] h-[400px] top-0 right-0 opacity-15"}),R.jsxs("div",{className:"max-w-5xl mx-auto px-6 lg:px-8 relative z-10",children:[R.jsxs(Bt.div,{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"mb-20 text-center",children:[R.jsx(Bt.span,{initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{delay:.1},className:`inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 border ${e?"border-cyan-500/30 text-cyan-400 bg-cyan-500/5":"border-cyan-600/30 text-cyan-700 bg-cyan-500/8"}`,children:"My Journey"}),R.jsxs("h2",{className:`text-4xl md:text-5xl font-space font-bold mb-4 ${e?"":"text-[#1a1040]"}`,children:["Experience & ",R.jsx("span",{className:"gradient-text",children:"Education"})]}),R.jsx("div",{className:"h-px w-32 mx-auto",style:{background:"linear-gradient(90deg,transparent,#06b6d4,transparent)"}}),R.jsx("div",{className:"mt-6 flex justify-center",children:R.jsx("a",{href:"#about",className:`inline-flex items-center justify-center rounded-full border px-5 py-2 text-sm font-semibold transition ${e?"border-cyan-500/30 bg-cyan-500/10 text-cyan-200 hover:bg-cyan-500/15":"border-cyan-600/30 bg-cyan-500/8 text-cyan-700 hover:bg-cyan-500/15"}`,children:"About Me"})})]}),R.jsxs(Bt.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.2},className:"max-w-3xl mx-auto mb-16 text-center",id:"about",children:[R.jsx("p",{className:`text-sm uppercase tracking-[0.28em] mb-4 ${e?"text-cyan-400":"text-cyan-700"}`,children:"About Me"}),R.jsx("h3",{className:`text-3xl md:text-4xl font-bold mb-4 ${e?"text-white":"text-slate-900"}`,children:"A data-driven developer with a passion for AI and modern web apps."}),R.jsx("p",{className:`leading-relaxed ${e?"text-gray-300":"text-slate-700"}`,children:"I am D Venkata Durga Prasad, a B.Tech CSE (Data Science) student who blends machine learning, analytics, and full-stack development to build useful projects and solve real problems."}),R.jsx("p",{className:`leading-relaxed mt-4 ${e?"text-gray-300":"text-slate-700"}`,children:"My experience includes a Data Science internship at Corizo, Google Advanced Data Analytics certification, and several projects in predictive modeling, dashboards, and intelligent web interfaces."})]}),R.jsx(Bt.div,{initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{duration:.8,delay:.2},className:"relative",children:R.jsx(jN,{timelineData:ML})})]})]})},$N=[{label:"Gmail",handle:"dasaripandu1979@gmail.com",href:"mailto:dasaripandu1979@gmail.com",icon:mm,grad:["#ef4444","#f97316"],shadow:"rgba(239,68,68,0.4)"},{label:"GitHub",handle:"github.com/dasaripandu2321",href:"https://github.com/dasaripandu2321",icon:ul,grad:["#6b7280","#9ca3af"],shadow:"rgba(156,163,175,0.3)"},{label:"LinkedIn",handle:"linkedin.com/in/dasari-venkata-durga-prasad",href:"https://www.linkedin.com/in/dasari-venkata-durga-prasad-694ba7289",icon:pm,grad:["#2563eb","#3b82f6"],shadow:"rgba(59,130,246,0.4)"}],qN=()=>{const{theme:n}=tr(),e=n==="dark",[t,r]=ce.useState({name:"",email:"",message:""}),[o,a]=ce.useState(!1),c=u=>{u.preventDefault();const f=encodeURIComponent(`Message from ${t.name}`),h=encodeURIComponent(`${t.message}

From: ${t.name}
Email: ${t.email}`);window.location.href=`mailto:dasaripandu1979@gmail.com?subject=${f}&body=${h}`,a(!0),setTimeout(()=>a(!1),3e3)};return R.jsxs("section",{id:"contact",className:"py-28 relative overflow-hidden",children:[R.jsx("div",{className:`absolute inset-0 ${e?"bg-dark-950/55":"bg-white/80"}`}),R.jsx("div",{className:"orb-purple absolute w-[500px] h-[500px] -bottom-40 -right-40 opacity-25"}),R.jsx("div",{className:"orb-cyan    absolute w-[400px] h-[400px] -top-20 -left-20 opacity-20"}),R.jsx(R_,{position:1}),R.jsx(R_,{position:-1}),R.jsxs("div",{className:"max-w-6xl mx-auto px-6 lg:px-8 relative z-10",children:[R.jsxs(Bt.div,{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"mb-20 text-center",children:[R.jsxs(Bt.span,{initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{delay:.1},className:"inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 border border-primary-500/30 text-primary-400 bg-primary-500/5 section-badge",children:[R.jsx(vL,{size:12})," Get in touch"]}),R.jsxs("h2",{className:"text-4xl md:text-5xl font-space font-bold mb-4",children:["Let's ",R.jsx("span",{className:"gradient-text",children:"Connect"})]}),R.jsx("div",{className:"h-px w-32 mx-auto mb-6",style:{background:"linear-gradient(90deg,transparent,#8b5cf6,transparent)"}}),R.jsx("p",{className:`section-sub max-w-lg mx-auto ${e?"text-gray-400":"text-slate-600"}`,children:"Have a project in mind, want to collaborate, or just want to say hi? I'd love to hear from you."})]}),R.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-5 gap-10 items-start",children:[R.jsxs(Bt.div,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.6},className:"lg:col-span-2 space-y-4",children:[R.jsx("p",{className:`text-xs font-bold tracking-widest uppercase mb-6 ${e?"text-gray-400":"text-slate-600"}`,children:"Find me on"}),$N.map(({label:u,handle:f,href:h,icon:p,grad:[g,v],shadow:_},M)=>R.jsxs(Bt.a,{href:h,target:u!=="Gmail"?"_blank":void 0,rel:"noopener noreferrer",initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{delay:M*.1},whileHover:{x:6,scale:1.01},className:`flex items-center gap-4 p-4 rounded-2xl ${e?"border border-white/6 holo-card":"border border-slate-200 bg-white/80 shadow-sm"} group cursor-pointer`,children:[R.jsx("div",{className:"w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300",style:{background:`linear-gradient(135deg,${g}25,${v}15)`,border:`1px solid ${g}30`},children:R.jsx(p,{size:20,style:{color:g}})}),R.jsxs("div",{className:"flex-1 min-w-0",children:[R.jsx("p",{className:`social-label font-semibold text-sm ${e?"text-white":"text-slate-900"}`,children:u}),R.jsx("p",{className:`social-handle text-xs truncate mt-0.5 ${e?"text-gray-500":"text-slate-500"}`,children:f})]}),R.jsx(iL,{size:14,className:`social-arrow transition-all flex-shrink-0 ${e?"text-gray-600 group-hover:text-white":"text-slate-500 group-hover:text-slate-900"} group-hover:-translate-y-0.5 group-hover:translate-x-0.5`})]},u)),R.jsxs(Bt.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{delay:.4},className:`mt-6 p-5 rounded-2xl relative overflow-hidden ${e?"border border-primary-500/10 bg-primary-500/5":"border border-slate-200 bg-slate-50"}`,children:[R.jsx("div",{className:"absolute top-0 left-0 right-0 h-px",style:{background:"linear-gradient(90deg,transparent,rgba(139,92,246,0.5),transparent)"}}),R.jsx("p",{className:`quote-text text-sm italic leading-relaxed ${e?"text-gray-400":"text-slate-600"}`,children:`"I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing."`}),R.jsx("p",{className:"quote-author text-primary-400 text-xs font-bold mt-3",children:"— D Venkata Durga Prasad"})]})]}),R.jsx(Bt.div,{initial:{opacity:0,x:30},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.6},className:"lg:col-span-3",children:R.jsxs("div",{className:"holo-card rounded-2xl p-8 depth-shadow relative overflow-hidden",children:[R.jsx("div",{className:"absolute top-0 left-0 right-0 h-px",style:{background:"linear-gradient(90deg,transparent,rgba(139,92,246,0.6),rgba(6,182,212,0.6),transparent)"}}),R.jsx("p",{className:"form-label text-xs font-bold tracking-widest uppercase text-gray-500 mb-6",children:"Send a message"}),R.jsxs("form",{onSubmit:c,className:"space-y-5",children:[R.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-5",children:[R.jsxs("div",{children:[R.jsx("label",{className:`form-label block text-xs font-semibold uppercase tracking-wider mb-2 ${e?"text-gray-400":"text-slate-600"}`,children:"Name"}),R.jsx("input",{type:"text",name:"name",value:t.name,onChange:u=>r({...t,name:u.target.value}),required:!0,placeholder:"John Doe",className:"input-field w-full px-4 py-3 text-sm"})]}),R.jsxs("div",{children:[R.jsx("label",{className:`form-label block text-xs font-semibold uppercase tracking-wider mb-2 ${e?"text-gray-400":"text-slate-600"}`,children:"Email"}),R.jsx("input",{type:"email",name:"email",value:t.email,onChange:u=>r({...t,email:u.target.value}),required:!0,placeholder:"john@example.com",className:"input-field w-full px-4 py-3 text-sm"})]})]}),R.jsxs("div",{children:[R.jsx("label",{className:`form-label block text-xs font-semibold uppercase tracking-wider mb-2 ${e?"text-gray-400":"text-slate-600"}`,children:"Message"}),R.jsx("textarea",{name:"message",rows:"5",value:t.message,onChange:u=>r({...t,message:u.target.value}),required:!0,placeholder:"Tell me about your project or just say hi...",className:"input-field w-full px-4 py-3 text-sm resize-none"})]}),R.jsx(lu,{type:"submit",variant:"primary",size:"lg",className:"w-full",children:o?"✓ Opening mail app...":R.jsxs(R.Fragment,{children:[R.jsx(gL,{size:15}),"Send Message"]})}),R.jsx("p",{className:`form-hint text-center text-xs ${e?"text-gray-600":"text-slate-500"}`,children:"Opens your default mail app with the message pre-filled."})]})]})})]})]})]})},YN=()=>{const{theme:n}=tr(),e=n==="dark";return R.jsxs("footer",{className:`relative border-t py-10 overflow-hidden backdrop-blur-xl ${e?"border-white/5 bg-dark-950/90":"border-primary-500/10 bg-white/80"}`,children:[R.jsx("div",{className:"absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-24 orb-purple opacity-20"}),R.jsx("div",{className:"absolute top-0 left-0 right-0 h-px",style:{background:"linear-gradient(90deg,transparent,rgba(139,92,246,0.3),rgba(6,182,212,0.3),transparent)"}}),R.jsx("div",{className:"max-w-7xl mx-auto px-6 lg:px-8 relative z-10",children:R.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-6",children:[R.jsxs("div",{className:"text-center md:text-left",children:[R.jsx("a",{href:"#home",className:"inline-flex items-center mb-2",children:R.jsx("span",{style:{fontFamily:"'Nunito', sans-serif",fontWeight:900,fontSize:"1.6rem",letterSpacing:"-0.02em",lineHeight:1,background:"linear-gradient(135deg, #ffffff 0%, #e0d7ff 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",filter:"drop-shadow(0 0 6px rgba(167,139,250,0.4))"},children:"DP"})}),R.jsxs("p",{className:`text-xs flex items-center gap-1 justify-center md:justify-start ${e?"text-gray-600":"text-[#9d90cc]"}`,children:["© ",new Date().getFullYear()," D Venkata Durga Prasad",R.jsxs("span",{className:"flex items-center gap-1",children:["· Made with ",R.jsx(hL,{size:10,className:"text-pink-500 fill-pink-500"})]})]})]}),R.jsx("div",{className:"flex items-center gap-3",children:[{href:mh.github,icon:ul,label:"GitHub"},{href:mh.linkedin,icon:pm,label:"LinkedIn"},{href:mh.email,icon:mm,label:"Email"}].map(({href:t,icon:r,label:o},a)=>R.jsx(Bt.a,{href:t,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.15,y:-3},whileTap:{scale:.95},title:o,className:`w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:shadow-neon ${e?"glass-panel text-gray-400 hover:text-primary-400 border border-white/5 hover:border-primary-500/30":"bg-white border border-primary-500/15 text-[#7c6faa] hover:text-primary-600 hover:border-primary-500/40 shadow-sm"}`,children:R.jsx(r,{size:15})},a))}),R.jsx(Bt.button,{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),whileHover:{scale:1.1,y:-3},whileTap:{scale:.95},className:`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${e?"text-primary-400 border border-primary-500/30 bg-primary-500/10 hover:bg-primary-500/20 hover:shadow-neon":"text-primary-600 border border-primary-500/30 bg-primary-500/8 hover:bg-primary-500/15 shadow-sm"}`,"aria-label":"Back to top",children:R.jsx(rL,{size:15})})]})})]})};class KN extends Gs.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}render(){var e,t;return this.state.hasError?R.jsxs("div",{style:{background:"#020208",color:"#fff",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"2rem",fontFamily:"monospace"},children:[R.jsx("h1",{style:{color:"#f472b6",fontSize:"1.5rem",marginBottom:"1rem"},children:"⚠ Runtime Error"}),R.jsxs("pre",{style:{color:"#a78bfa",background:"#0d0d1a",padding:"1.5rem",borderRadius:"0.5rem",maxWidth:"800px",overflow:"auto",fontSize:"0.85rem"},children:[(e=this.state.error)==null?void 0:e.toString(),`

`,(t=this.state.error)==null?void 0:t.stack]})]}):this.props.children}}function ZN(){lw();const{theme:n}=tr(),e=n==="dark";return R.jsx(KN,{children:R.jsxs("div",{className:`min-h-screen overflow-x-hidden selection:bg-primary-500 selection:text-white ${e?"bg-dark-950 text-white":"bg-light-50 text-[#1a1040]"}`,children:[R.jsx("div",{className:"fixed top-0 left-0 w-full h-full -z-10",children:R.jsx(yR,{})}),R.jsxs("div",{className:"relative z-[10]",children:[R.jsx(wL,{}),R.jsxs("main",{children:[R.jsx(RN,{}),R.jsxs("div",{className:"relative overflow-hidden",children:[R.jsx("div",{className:"absolute inset-0 pointer-events-none z-0",style:{opacity:e?.45:.2},children:R.jsx(SR,{})}),R.jsx(Uo,{gradientColors:["#a78bfa","#06b6d4","#f472b6"],animationDuration:2}),R.jsx(IN,{}),R.jsx(Uo,{gradientColors:["#06b6d4","#a78bfa","#f472b6"],animationDuration:2.5}),R.jsx(BN,{}),R.jsx(Uo,{gradientColors:["#f472b6","#a78bfa","#06b6d4"],animationDuration:3}),R.jsx(XN,{}),R.jsx(Uo,{gradientColors:["#06b6d4","#f472b6","#a78bfa"],animationDuration:2.8}),R.jsx(qN,{}),R.jsx(Uo,{gradientColors:["#06b6d4","#f472b6","#a78bfa"],animationDuration:2.8})]})]}),R.jsx(YN,{})]})]})})}aw.createRoot(document.getElementById("root")).render(R.jsx(Gs.StrictMode,{children:R.jsx(cw,{children:R.jsx(ZN,{})})}));

var tf=Object.defineProperty;var nf=(r,e,t)=>e in r?tf(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var It=(r,e,t)=>nf(r,typeof e!="symbol"?e+"":e,t);import{r as Z,d as rf,g as Er,e as wr,b as sf}from"./react-vendor-CdT9wAkA.js";import{r as rc}from"./utils-vendor-Colr42qF.js";import{w as of,_ as af,a as sc,D as uf,c as lf,T as cf,L as hf}from"./mui-vendor-ycx5XT1Y.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var ic={exports:{}},Oo={};/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var r=Z,e=Symbol.for("react.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),f=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),A=Symbol.for("react.offscreen"),x=Symbol.iterator,O="@@iterator";function S(E){if(E===null||typeof E!="object")return null;var V=x&&E[x]||E[O];return typeof V=="function"?V:null}var L=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function M(E){{for(var V=arguments.length,F=new Array(V>1?V-1:0),W=1;W<V;W++)F[W-1]=arguments[W];q("error",E,F)}}function q(E,V,F){{var W=L.ReactDebugCurrentFrame,ee=W.getStackAddendum();ee!==""&&(V+="%s",F=F.concat([ee]));var ue=F.map(function(X){return String(X)});ue.unshift("Warning: "+V),Function.prototype.apply.call(console[E],console,ue)}}var K=!1,fe=!1,re=!1,b=!1,g=!1,v;v=Symbol.for("react.module.reference");function T(E){return!!(typeof E=="string"||typeof E=="function"||E===n||E===i||g||E===s||E===d||E===f||b||E===A||K||fe||re||typeof E=="object"&&E!==null&&(E.$$typeof===w||E.$$typeof===p||E.$$typeof===a||E.$$typeof===u||E.$$typeof===l||E.$$typeof===v||E.getModuleId!==void 0))}function I(E,V,F){var W=E.displayName;if(W)return W;var ee=V.displayName||V.name||"";return ee!==""?F+"("+ee+")":F}function N(E){return E.displayName||"Context"}function _(E){if(E==null)return null;if(typeof E.tag=="number"&&M("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof E=="function")return E.displayName||E.name||null;if(typeof E=="string")return E;switch(E){case n:return"Fragment";case t:return"Portal";case i:return"Profiler";case s:return"StrictMode";case d:return"Suspense";case f:return"SuspenseList"}if(typeof E=="object")switch(E.$$typeof){case u:var V=E;return N(V)+".Consumer";case a:var F=E;return N(F._context)+".Provider";case l:return I(E,E.render,"ForwardRef");case p:var W=E.displayName||null;return W!==null?W:_(E.type)||"Memo";case w:{var ee=E,ue=ee._payload,X=ee._init;try{return _(X(ue))}catch{return null}}}return null}var he=Object.assign,ie=0,be,Ve,Xe,tt,gt,Oe,Ze;function ge(){}ge.__reactDisabledLog=!0;function kr(){{if(ie===0){be=console.log,Ve=console.info,Xe=console.warn,tt=console.error,gt=console.group,Oe=console.groupCollapsed,Ze=console.groupEnd;var E={configurable:!0,enumerable:!0,value:ge,writable:!0};Object.defineProperties(console,{info:E,log:E,warn:E,error:E,group:E,groupCollapsed:E,groupEnd:E})}ie++}}function Vt(){{if(ie--,ie===0){var E={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:he({},E,{value:be}),info:he({},E,{value:Ve}),warn:he({},E,{value:Xe}),error:he({},E,{value:tt}),group:he({},E,{value:gt}),groupCollapsed:he({},E,{value:Oe}),groupEnd:he({},E,{value:Ze})})}ie<0&&M("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var Nn=L.ReactCurrentDispatcher,_t;function Xt(E,V,F){{if(_t===void 0)try{throw Error()}catch(ee){var W=ee.stack.trim().match(/\n( *(at )?)/);_t=W&&W[1]||""}return`
`+_t+E}}var Zt=!1,ut;{var vt=typeof WeakMap=="function"?WeakMap:Map;ut=new vt}function yt(E,V){if(!E||Zt)return"";{var F=ut.get(E);if(F!==void 0)return F}var W;Zt=!0;var ee=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var ue;ue=Nn.current,Nn.current=null,kr();try{if(V){var X=function(){throw Error()};if(Object.defineProperty(X.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(X,[])}catch(Le){W=Le}Reflect.construct(E,[],X)}else{try{X.call()}catch(Le){W=Le}E.call(X.prototype)}}else{try{throw Error()}catch(Le){W=Le}E()}}catch(Le){if(Le&&W&&typeof Le.stack=="string"){for(var J=Le.stack.split(`
`),_e=W.stack.split(`
`),ve=J.length-1,Ee=_e.length-1;ve>=1&&Ee>=0&&J[ve]!==_e[Ee];)Ee--;for(;ve>=1&&Ee>=0;ve--,Ee--)if(J[ve]!==_e[Ee]){if(ve!==1||Ee!==1)do if(ve--,Ee--,Ee<0||J[ve]!==_e[Ee]){var ze=`
`+J[ve].replace(" at new "," at ");return E.displayName&&ze.includes("<anonymous>")&&(ze=ze.replace("<anonymous>",E.displayName)),typeof E=="function"&&ut.set(E,ze),ze}while(ve>=1&&Ee>=0);break}}}finally{Zt=!1,Nn.current=ue,Vt(),Error.prepareStackTrace=ee}var Tt=E?E.displayName||E.name:"",bt=Tt?Xt(Tt):"";return typeof E=="function"&&ut.set(E,bt),bt}function Mt(E,V,F){return yt(E,!1)}function Et(E){var V=E.prototype;return!!(V&&V.isReactComponent)}function st(E,V,F){if(E==null)return"";if(typeof E=="function")return yt(E,Et(E));if(typeof E=="string")return Xt(E);switch(E){case d:return Xt("Suspense");case f:return Xt("SuspenseList")}if(typeof E=="object")switch(E.$$typeof){case l:return Mt(E.render);case p:return st(E.type,V,F);case w:{var W=E,ee=W._payload,ue=W._init;try{return st(ue(ee),V,F)}catch{}}}return""}var lt=Object.prototype.hasOwnProperty,en={},tn=L.ReactDebugCurrentFrame;function ht(E){if(E){var V=E._owner,F=st(E.type,E._source,V?V.type:null);tn.setExtraStackFrame(F)}else tn.setExtraStackFrame(null)}function Hn(E,V,F,W,ee){{var ue=Function.call.bind(lt);for(var X in E)if(ue(E,X)){var J=void 0;try{if(typeof E[X]!="function"){var _e=Error((W||"React class")+": "+F+" type `"+X+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof E[X]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw _e.name="Invariant Violation",_e}J=E[X](V,X,W,F,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(ve){J=ve}J&&!(J instanceof Error)&&(ht(ee),M("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",W||"React class",F,X,typeof J),ht(null)),J instanceof Error&&!(J.message in en)&&(en[J.message]=!0,ht(ee),M("Failed %s type: %s",F,J.message),ht(null))}}}var Cs=Array.isArray;function Rr(E){return Cs(E)}function Pr(E){{var V=typeof Symbol=="function"&&Symbol.toStringTag,F=V&&E[Symbol.toStringTag]||E.constructor.name||"Object";return F}}function Cr(E){try{return xr(E),!1}catch{return!0}}function xr(E){return""+E}function ke(E){if(Cr(E))return M("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Pr(E)),xr(E)}var Ie=L.ReactCurrentOwner,Gn={key:!0,ref:!0,__self:!0,__source:!0},Vr,Mr,Or;Or={};function Dn(E){if(lt.call(E,"ref")){var V=Object.getOwnPropertyDescriptor(E,"ref").get;if(V&&V.isReactWarning)return!1}return E.ref!==void 0}function xs(E){if(lt.call(E,"key")){var V=Object.getOwnPropertyDescriptor(E,"key").get;if(V&&V.isReactWarning)return!1}return E.key!==void 0}function Vs(E,V){if(typeof E.ref=="string"&&Ie.current&&V&&Ie.current.stateNode!==V){var F=_(Ie.current.type);Or[F]||(M('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',_(Ie.current.type),E.ref),Or[F]=!0)}}function Ur(E,V){{var F=function(){Vr||(Vr=!0,M("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",V))};F.isReactWarning=!0,Object.defineProperty(E,"key",{get:F,configurable:!0})}}function so(E,V){{var F=function(){Mr||(Mr=!0,M("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",V))};F.isReactWarning=!0,Object.defineProperty(E,"ref",{get:F,configurable:!0})}}var io=function(E,V,F,W,ee,ue,X){var J={$$typeof:e,type:E,key:V,ref:F,props:X,_owner:ue};return J._store={},Object.defineProperty(J._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(J,"_self",{configurable:!1,enumerable:!1,writable:!1,value:W}),Object.defineProperty(J,"_source",{configurable:!1,enumerable:!1,writable:!1,value:ee}),Object.freeze&&(Object.freeze(J.props),Object.freeze(J)),J};function Lr(E,V,F,W,ee){{var ue,X={},J=null,_e=null;F!==void 0&&(ke(F),J=""+F),xs(V)&&(ke(V.key),J=""+V.key),Dn(V)&&(_e=V.ref,Vs(V,ee));for(ue in V)lt.call(V,ue)&&!Gn.hasOwnProperty(ue)&&(X[ue]=V[ue]);if(E&&E.defaultProps){var ve=E.defaultProps;for(ue in ve)X[ue]===void 0&&(X[ue]=ve[ue])}if(J||_e){var Ee=typeof E=="function"?E.displayName||E.name||"Unknown":E;J&&Ur(X,Ee),_e&&so(X,Ee)}return io(E,J,_e,ee,W,Ie.current,X)}}var Kn=L.ReactCurrentOwner,Fr=L.ReactDebugCurrentFrame;function ct(E){if(E){var V=E._owner,F=st(E.type,E._source,V?V.type:null);Fr.setExtraStackFrame(F)}else Fr.setExtraStackFrame(null)}var Sn;Sn=!1;function kn(E){return typeof E=="object"&&E!==null&&E.$$typeof===e}function wt(){{if(Kn.current){var E=_(Kn.current.type);if(E)return`

Check the render method of \``+E+"`."}return""}}function Ms(E){{if(E!==void 0){var V=E.fileName.replace(/^.*[\\\/]/,""),F=E.lineNumber;return`

Check your code at `+V+":"+F+"."}return""}}var Rn={};function Os(E){{var V=wt();if(!V){var F=typeof E=="string"?E:E.displayName||E.name;F&&(V=`

Check the top-level render call using <`+F+">.")}return V}}function nn(E,V){{if(!E._store||E._store.validated||E.key!=null)return;E._store.validated=!0;var F=Os(V);if(Rn[F])return;Rn[F]=!0;var W="";E&&E._owner&&E._owner!==Kn.current&&(W=" It was passed a child from "+_(E._owner.type)+"."),ct(E),M('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',F,W),ct(null)}}function jr(E,V){{if(typeof E!="object")return;if(Rr(E))for(var F=0;F<E.length;F++){var W=E[F];kn(W)&&nn(W,V)}else if(kn(E))E._store&&(E._store.validated=!0);else if(E){var ee=S(E);if(typeof ee=="function"&&ee!==E.entries)for(var ue=ee.call(E),X;!(X=ue.next()).done;)kn(X.value)&&nn(X.value,V)}}}function Ue(E){{var V=E.type;if(V==null||typeof V=="string")return;var F;if(typeof V=="function")F=V.propTypes;else if(typeof V=="object"&&(V.$$typeof===l||V.$$typeof===p))F=V.propTypes;else return;if(F){var W=_(V);Hn(F,E.props,"prop",W,E)}else if(V.PropTypes!==void 0&&!Sn){Sn=!0;var ee=_(V);M("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",ee||"Unknown")}typeof V.getDefaultProps=="function"&&!V.getDefaultProps.isReactClassApproved&&M("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Us(E){{for(var V=Object.keys(E.props),F=0;F<V.length;F++){var W=V[F];if(W!=="children"&&W!=="key"){ct(E),M("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",W),ct(null);break}}E.ref!==null&&(ct(E),M("Invalid attribute `ref` supplied to `React.Fragment`."),ct(null))}}var rn={};function Pn(E,V,F,W,ee,ue){{var X=T(E);if(!X){var J="";(E===void 0||typeof E=="object"&&E!==null&&Object.keys(E).length===0)&&(J+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var _e=Ms(ee);_e?J+=_e:J+=wt();var ve;E===null?ve="null":Rr(E)?ve="array":E!==void 0&&E.$$typeof===e?(ve="<"+(_(E.type)||"Unknown")+" />",J=" Did you accidentally export a JSX literal instead of a component?"):ve=typeof E,M("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",ve,J)}var Ee=Lr(E,V,F,ee,ue);if(Ee==null)return Ee;if(X){var ze=V.children;if(ze!==void 0)if(W)if(Rr(ze)){for(var Tt=0;Tt<ze.length;Tt++)jr(ze[Tt],E);Object.freeze&&Object.freeze(ze)}else M("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else jr(ze,E)}if(lt.call(V,"key")){var bt=_(E),Le=Object.keys(V).filter(function(Ls){return Ls!=="key"}),qr=Le.length>0?"{key: someKey, "+Le.join(": ..., ")+": ...}":"{key: someKey}";if(!rn[bt+qr]){var Qn=Le.length>0?"{"+Le.join(": ..., ")+": ...}":"{}";M(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,qr,bt,Qn,bt),rn[bt+qr]=!0}}return E===n?Us(Ee):Ue(Ee),Ee}}var oo=Pn;Oo.Fragment=n,Oo.jsxDEV=oo})();ic.exports=Oo;var y=ic.exports,Uo={},_o=rf;{var Qs=_o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Uo.createRoot=function(r,e){Qs.usingClientEntryPoint=!0;try{return _o.createRoot(r,e)}finally{Qs.usingClientEntryPoint=!1}},Uo.hydrateRoot=function(r,e,t){Qs.usingClientEntryPoint=!0;try{return _o.hydrateRoot(r,e,t)}finally{Qs.usingClientEntryPoint=!1}}}var df=rc();const Re=Er(df);var oc={exports:{}};(function(r,e){(function(t,n){r.exports=n()})(wr,function(){var t="week",n="year";return function(s,i,a){var u=i.prototype;u.week=function(l){if(l===void 0&&(l=null),l!==null)return this.add(7*(l-this.week()),"day");var d=this.$locale().yearStart||1;if(this.month()===11&&this.date()>25){var f=a(this).startOf(n).add(1,n).date(d),p=a(this).endOf(t);if(f.isBefore(p))return 1}var w=a(this).startOf(n).date(d).startOf(t).subtract(1,"millisecond"),A=this.diff(w,t,!0);return A<0?a(this).startOf("week").week():Math.ceil(A)},u.weeks=function(l){return l===void 0&&(l=null),this.week(l)}}})})(oc);var ff=oc.exports;const mf=Er(ff);var ac={exports:{}};(function(r,e){(function(t,n){r.exports=n()})(wr,function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},n=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,s=/\d/,i=/\d\d/,a=/\d\d?/,u=/\d*[^-_:/,()\s\d]+/,l={},d=function(S){return(S=+S)+(S>68?1900:2e3)},f=function(S){return function(L){this[S]=+L}},p=[/[+-]\d\d:?(\d\d)?|Z/,function(S){(this.zone||(this.zone={})).offset=function(L){if(!L||L==="Z")return 0;var M=L.match(/([+-]|\d\d)/g),q=60*M[1]+(+M[2]||0);return q===0?0:M[0]==="+"?-q:q}(S)}],w=function(S){var L=l[S];return L&&(L.indexOf?L:L.s.concat(L.f))},A=function(S,L){var M,q=l.meridiem;if(q){for(var K=1;K<=24;K+=1)if(S.indexOf(q(K,0,L))>-1){M=K>12;break}}else M=S===(L?"pm":"PM");return M},x={A:[u,function(S){this.afternoon=A(S,!1)}],a:[u,function(S){this.afternoon=A(S,!0)}],Q:[s,function(S){this.month=3*(S-1)+1}],S:[s,function(S){this.milliseconds=100*+S}],SS:[i,function(S){this.milliseconds=10*+S}],SSS:[/\d{3}/,function(S){this.milliseconds=+S}],s:[a,f("seconds")],ss:[a,f("seconds")],m:[a,f("minutes")],mm:[a,f("minutes")],H:[a,f("hours")],h:[a,f("hours")],HH:[a,f("hours")],hh:[a,f("hours")],D:[a,f("day")],DD:[i,f("day")],Do:[u,function(S){var L=l.ordinal,M=S.match(/\d+/);if(this.day=M[0],L)for(var q=1;q<=31;q+=1)L(q).replace(/\[|\]/g,"")===S&&(this.day=q)}],w:[a,f("week")],ww:[i,f("week")],M:[a,f("month")],MM:[i,f("month")],MMM:[u,function(S){var L=w("months"),M=(w("monthsShort")||L.map(function(q){return q.slice(0,3)})).indexOf(S)+1;if(M<1)throw new Error;this.month=M%12||M}],MMMM:[u,function(S){var L=w("months").indexOf(S)+1;if(L<1)throw new Error;this.month=L%12||L}],Y:[/[+-]?\d+/,f("year")],YY:[i,function(S){this.year=d(S)}],YYYY:[/\d{4}/,f("year")],Z:p,ZZ:p};function O(S){var L,M;L=S,M=l&&l.formats;for(var q=(S=L.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(T,I,N){var _=N&&N.toUpperCase();return I||M[N]||t[N]||M[_].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(he,ie,be){return ie||be.slice(1)})})).match(n),K=q.length,fe=0;fe<K;fe+=1){var re=q[fe],b=x[re],g=b&&b[0],v=b&&b[1];q[fe]=v?{regex:g,parser:v}:re.replace(/^\[|\]$/g,"")}return function(T){for(var I={},N=0,_=0;N<K;N+=1){var he=q[N];if(typeof he=="string")_+=he.length;else{var ie=he.regex,be=he.parser,Ve=T.slice(_),Xe=ie.exec(Ve)[0];be.call(I,Xe),T=T.replace(Xe,"")}}return function(tt){var gt=tt.afternoon;if(gt!==void 0){var Oe=tt.hours;gt?Oe<12&&(tt.hours+=12):Oe===12&&(tt.hours=0),delete tt.afternoon}}(I),I}}return function(S,L,M){M.p.customParseFormat=!0,S&&S.parseTwoDigitYear&&(d=S.parseTwoDigitYear);var q=L.prototype,K=q.parse;q.parse=function(fe){var re=fe.date,b=fe.utc,g=fe.args;this.$u=b;var v=g[1];if(typeof v=="string"){var T=g[2]===!0,I=g[3]===!0,N=T||I,_=g[2];I&&(_=g[2]),l=this.$locale(),!T&&_&&(l=M.Ls[_]),this.$d=function(Ve,Xe,tt,gt){try{if(["x","X"].indexOf(Xe)>-1)return new Date((Xe==="X"?1e3:1)*Ve);var Oe=O(Xe)(Ve),Ze=Oe.year,ge=Oe.month,kr=Oe.day,Vt=Oe.hours,Nn=Oe.minutes,_t=Oe.seconds,Xt=Oe.milliseconds,Zt=Oe.zone,ut=Oe.week,vt=new Date,yt=kr||(Ze||ge?1:vt.getDate()),Mt=Ze||vt.getFullYear(),Et=0;Ze&&!ge||(Et=ge>0?ge-1:vt.getMonth());var st,lt=Vt||0,en=Nn||0,tn=_t||0,ht=Xt||0;return Zt?new Date(Date.UTC(Mt,Et,yt,lt,en,tn,ht+60*Zt.offset*1e3)):tt?new Date(Date.UTC(Mt,Et,yt,lt,en,tn,ht)):(st=new Date(Mt,Et,yt,lt,en,tn,ht),ut&&(st=gt(st).week(ut).toDate()),st)}catch{return new Date("")}}(re,v,b,M),this.init(),_&&_!==!0&&(this.$L=this.locale(_).$L),N&&re!=this.format(v)&&(this.$d=new Date("")),l={}}else if(v instanceof Array)for(var he=v.length,ie=1;ie<=he;ie+=1){g[1]=v[ie-1];var be=M.apply(this,g);if(be.isValid()){this.$d=be.$d,this.$L=be.$L,this.init();break}ie===he&&(this.$d=new Date(""))}else K.call(this,fe)}}})})(ac);var pf=ac.exports;const gf=Er(pf);var uc={exports:{}};(function(r,e){(function(t,n){r.exports=n()})(wr,function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(n,s,i){var a=s.prototype,u=a.format;i.en.formats=t,a.format=function(l){l===void 0&&(l="YYYY-MM-DDTHH:mm:ssZ");var d=this.$locale().formats,f=function(p,w){return p.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(A,x,O){var S=O&&O.toUpperCase();return x||w[O]||t[O]||w[S].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(L,M,q){return M||q.slice(1)})})}(l,d===void 0?{}:d);return u.call(this,f)}}})})(uc);var _f=uc.exports;const vf=Er(_f);var lc={exports:{}};(function(r,e){(function(t,n){r.exports=n()})(wr,function(){return function(t,n,s){n.prototype.isBetween=function(i,a,u,l){var d=s(i),f=s(a),p=(l=l||"()")[0]==="(",w=l[1]===")";return(p?this.isAfter(d,u):!this.isBefore(d,u))&&(w?this.isBefore(f,u):!this.isAfter(f,u))||(p?this.isBefore(d,u):!this.isAfter(d,u))&&(w?this.isAfter(f,u):!this.isBefore(f,u))}}})})(lc);var yf=lc.exports;const Ef=Er(yf);var cc={exports:{}};(function(r,e){(function(t,n){r.exports=n()})(wr,function(){return function(t,n){var s=n.prototype,i=s.format;s.format=function(a){var u=this,l=this.$locale();if(!this.isValid())return i.bind(this)(a);var d=this.$utils(),f=(a||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(p){switch(p){case"Q":return Math.ceil((u.$M+1)/3);case"Do":return l.ordinal(u.$D);case"gggg":return u.weekYear();case"GGGG":return u.isoWeekYear();case"wo":return l.ordinal(u.week(),"W");case"w":case"ww":return d.s(u.week(),p==="w"?1:2,"0");case"W":case"WW":return d.s(u.isoWeek(),p==="W"?1:2,"0");case"k":case"kk":return d.s(String(u.$H===0?24:u.$H),p==="k"?1:2,"0");case"X":return Math.floor(u.$d.getTime()/1e3);case"x":return u.$d.getTime();case"z":return"["+u.offsetName()+"]";case"zzz":return"["+u.offsetName("long")+"]";default:return p}});return i.bind(this)(f)}}})})(cc);var wf=cc.exports;const Tf=Er(wf);Re.extend(vf);Re.extend(mf);Re.extend(Ef);Re.extend(Tf);const bf={YY:"year",YYYY:{sectionType:"year",contentType:"digit",maxLength:4},M:{sectionType:"month",contentType:"digit",maxLength:2},MM:"month",MMM:{sectionType:"month",contentType:"letter"},MMMM:{sectionType:"month",contentType:"letter"},D:{sectionType:"day",contentType:"digit",maxLength:2},DD:"day",Do:{sectionType:"day",contentType:"digit-with-letter"},d:{sectionType:"weekDay",contentType:"digit",maxLength:2},dd:{sectionType:"weekDay",contentType:"letter"},ddd:{sectionType:"weekDay",contentType:"letter"},dddd:{sectionType:"weekDay",contentType:"letter"},A:"meridiem",a:"meridiem",H:{sectionType:"hours",contentType:"digit",maxLength:2},HH:"hours",h:{sectionType:"hours",contentType:"digit",maxLength:2},hh:"hours",m:{sectionType:"minutes",contentType:"digit",maxLength:2},mm:"minutes",s:{sectionType:"seconds",contentType:"digit",maxLength:2},ss:"seconds"},If={year:"YYYY",month:"MMMM",monthShort:"MMM",dayOfMonth:"D",dayOfMonthFull:"Do",weekday:"dddd",weekdayShort:"dd",hours24h:"HH",hours12h:"hh",meridiem:"A",minutes:"mm",seconds:"ss",fullDate:"ll",keyboardDate:"L",shortDate:"MMM D",normalDate:"D MMMM",normalDateWithWeekday:"ddd, MMM D",fullTime:"LT",fullTime12h:"hh:mm A",fullTime24h:"HH:mm",keyboardDateTime:"L LT",keyboardDateTime12h:"L hh:mm A",keyboardDateTime24h:"L HH:mm"},vo=["Missing UTC plugin","To be able to use UTC or timezones, you have to enable the `utc` plugin","Find more information on https://mui.com/x/react-date-pickers/timezone/#day-js-and-utc"].join(`
`),Cu=["Missing timezone plugin","To be able to use timezones, you have to enable both the `utc` and the `timezone` plugin","Find more information on https://mui.com/x/react-date-pickers/timezone/#day-js-and-timezone"].join(`
`),Af=(r,e)=>e?(...t)=>r(...t).locale(e):r;class Nf{constructor({locale:e,formats:t}={}){this.isMUIAdapter=!0,this.isTimezoneCompatible=!0,this.lib="dayjs",this.dayjs=void 0,this.locale=void 0,this.formats=void 0,this.escapedCharacters={start:"[",end:"]"},this.formatTokenMap=bf,this.setLocaleToValue=n=>{const s=this.getCurrentLocaleCode();return s===n.locale()?n:n.locale(s)},this.hasUTCPlugin=()=>typeof Re.utc<"u",this.hasTimezonePlugin=()=>typeof Re.tz<"u",this.isSame=(n,s,i)=>{const a=this.setTimezone(s,this.getTimezone(n));return n.format(i)===a.format(i)},this.cleanTimezone=n=>{switch(n){case"default":return;case"system":return Re.tz.guess();default:return n}},this.createSystemDate=n=>{if(this.hasUTCPlugin()&&this.hasTimezonePlugin()){const s=Re.tz.guess();return s!=="UTC"?Re.tz(n,s):Re(n)}return Re(n)},this.createUTCDate=n=>{if(!this.hasUTCPlugin())throw new Error(vo);return Re.utc(n)},this.createTZDate=(n,s)=>{if(!this.hasUTCPlugin())throw new Error(vo);if(!this.hasTimezonePlugin())throw new Error(Cu);const i=n!==void 0&&!n.endsWith("Z");return Re(n).tz(this.cleanTimezone(s),i)},this.getLocaleFormats=()=>{const n=Re.Ls,s=this.locale||"en";let i=n[s];return i===void 0&&(of(["MUI X: Your locale has not been found.","Either the locale key is not a supported one. Locales supported by dayjs are available here: https://github.com/iamkun/dayjs/tree/dev/src/locale.","Or you forget to import the locale from 'dayjs/locale/{localeUsed}'","fallback on English locale."]),i=n.en),i.formats},this.adjustOffset=n=>{if(!this.hasTimezonePlugin())return n;const s=this.getTimezone(n);if(s!=="UTC"){const i=n.tz(this.cleanTimezone(s),!0);if(i.$offset===(n.$offset??0))return n;n.$offset=i.$offset}return n},this.date=(n,s="default")=>{if(n===null)return null;let i;return s==="UTC"?i=this.createUTCDate(n):s==="system"||s==="default"&&!this.hasTimezonePlugin()?i=this.createSystemDate(n):i=this.createTZDate(n,s),this.locale===void 0?i:i.locale(this.locale)},this.getInvalidDate=()=>Re(new Date("Invalid date")),this.getTimezone=n=>{var s;if(this.hasTimezonePlugin()){const i=(s=n.$x)==null?void 0:s.$timezone;if(i)return i}return this.hasUTCPlugin()&&n.isUTC()?"UTC":"system"},this.setTimezone=(n,s)=>{if(this.getTimezone(n)===s)return n;if(s==="UTC"){if(!this.hasUTCPlugin())throw new Error(vo);return n.utc()}if(s==="system")return n.local();if(!this.hasTimezonePlugin()){if(s==="default")return n;throw new Error(Cu)}return Re.tz(n,this.cleanTimezone(s))},this.toJsDate=n=>n.toDate(),this.parse=(n,s)=>n===""?null:this.dayjs(n,s,this.locale,!0),this.getCurrentLocaleCode=()=>this.locale||"en",this.is12HourCycleInCurrentLocale=()=>/A|a/.test(this.getLocaleFormats().LT||""),this.expandFormat=n=>{const s=this.getLocaleFormats(),i=a=>a.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(u,l,d)=>l||d.slice(1));return n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(a,u,l)=>{const d=l&&l.toUpperCase();return u||s[l]||i(s[d])})},this.isValid=n=>n==null?!1:n.isValid(),this.format=(n,s)=>this.formatByString(n,this.formats[s]),this.formatByString=(n,s)=>this.dayjs(n).format(s),this.formatNumber=n=>n,this.isEqual=(n,s)=>n===null&&s===null?!0:n===null||s===null?!1:n.toDate().getTime()===s.toDate().getTime(),this.isSameYear=(n,s)=>this.isSame(n,s,"YYYY"),this.isSameMonth=(n,s)=>this.isSame(n,s,"YYYY-MM"),this.isSameDay=(n,s)=>this.isSame(n,s,"YYYY-MM-DD"),this.isSameHour=(n,s)=>n.isSame(s,"hour"),this.isAfter=(n,s)=>n>s,this.isAfterYear=(n,s)=>this.hasUTCPlugin()?!this.isSameYear(n,s)&&n.utc()>s.utc():n.isAfter(s,"year"),this.isAfterDay=(n,s)=>this.hasUTCPlugin()?!this.isSameDay(n,s)&&n.utc()>s.utc():n.isAfter(s,"day"),this.isBefore=(n,s)=>n<s,this.isBeforeYear=(n,s)=>this.hasUTCPlugin()?!this.isSameYear(n,s)&&n.utc()<s.utc():n.isBefore(s,"year"),this.isBeforeDay=(n,s)=>this.hasUTCPlugin()?!this.isSameDay(n,s)&&n.utc()<s.utc():n.isBefore(s,"day"),this.isWithinRange=(n,[s,i])=>n>=s&&n<=i,this.startOfYear=n=>this.adjustOffset(n.startOf("year")),this.startOfMonth=n=>this.adjustOffset(n.startOf("month")),this.startOfWeek=n=>this.adjustOffset(this.setLocaleToValue(n).startOf("week")),this.startOfDay=n=>this.adjustOffset(n.startOf("day")),this.endOfYear=n=>this.adjustOffset(n.endOf("year")),this.endOfMonth=n=>this.adjustOffset(n.endOf("month")),this.endOfWeek=n=>this.adjustOffset(this.setLocaleToValue(n).endOf("week")),this.endOfDay=n=>this.adjustOffset(n.endOf("day")),this.addYears=(n,s)=>this.adjustOffset(s<0?n.subtract(Math.abs(s),"year"):n.add(s,"year")),this.addMonths=(n,s)=>this.adjustOffset(s<0?n.subtract(Math.abs(s),"month"):n.add(s,"month")),this.addWeeks=(n,s)=>this.adjustOffset(s<0?n.subtract(Math.abs(s),"week"):n.add(s,"week")),this.addDays=(n,s)=>this.adjustOffset(s<0?n.subtract(Math.abs(s),"day"):n.add(s,"day")),this.addHours=(n,s)=>this.adjustOffset(s<0?n.subtract(Math.abs(s),"hour"):n.add(s,"hour")),this.addMinutes=(n,s)=>this.adjustOffset(s<0?n.subtract(Math.abs(s),"minute"):n.add(s,"minute")),this.addSeconds=(n,s)=>this.adjustOffset(s<0?n.subtract(Math.abs(s),"second"):n.add(s,"second")),this.getYear=n=>n.year(),this.getMonth=n=>n.month(),this.getDate=n=>n.date(),this.getHours=n=>n.hour(),this.getMinutes=n=>n.minute(),this.getSeconds=n=>n.second(),this.getMilliseconds=n=>n.millisecond(),this.setYear=(n,s)=>this.adjustOffset(n.set("year",s)),this.setMonth=(n,s)=>this.adjustOffset(n.set("month",s)),this.setDate=(n,s)=>this.adjustOffset(n.set("date",s)),this.setHours=(n,s)=>this.adjustOffset(n.set("hour",s)),this.setMinutes=(n,s)=>this.adjustOffset(n.set("minute",s)),this.setSeconds=(n,s)=>this.adjustOffset(n.set("second",s)),this.setMilliseconds=(n,s)=>this.adjustOffset(n.set("millisecond",s)),this.getDaysInMonth=n=>n.daysInMonth(),this.getWeekArray=n=>{const s=this.startOfWeek(this.startOfMonth(n)),i=this.endOfWeek(this.endOfMonth(n));let a=0,u=s;const l=[];for(;u<i;){const d=Math.floor(a/7);l[d]=l[d]||[],l[d].push(u),u=this.addDays(u,1),a+=1}return l},this.getWeekNumber=n=>n.week(),this.getYearRange=([n,s])=>{const i=this.startOfYear(n),a=this.endOfYear(s),u=[];let l=i;for(;this.isBefore(l,a);)u.push(l),l=this.addYears(l,1);return u},this.dayjs=Af(Re,e),this.locale=e,this.formats=af({},If,t),Re.extend(gf)}getDayOfWeek(e){return e.day()+1}}const Df={components:{MuiBreadcrumbs:{defaultProps:{expandText:"Montrer le chemin"}},MuiTablePagination:{defaultProps:{getItemAriaLabel:r=>r==="first"?"Aller à la première page":r==="last"?"Aller à la dernière page":r==="next"?"Aller à la page suivante":"Aller à la page précédente",labelRowsPerPage:"Lignes par page :",labelDisplayedRows:({from:r,to:e,count:t})=>`${r}–${e} sur ${t!==-1?t:`plus que ${e}`}`}},MuiRating:{defaultProps:{getLabelText:r=>`${r} Etoile${r!==1?"s":""}`,emptyLabelText:"Vide"}},MuiAutocomplete:{defaultProps:{clearText:"Vider",closeText:"Fermer",loadingText:"Chargement…",noOptionsText:"Pas de résultats",openText:"Ouvrir"}},MuiAlert:{defaultProps:{closeText:"Fermer"}},MuiPagination:{defaultProps:{"aria-label":"navigation de pagination",getItemAriaLabel:(r,e,t)=>r==="page"?`${t?"":"Aller à la "}page ${e}`:r==="first"?"Aller à la première page":r==="last"?"Aller à la dernière page":r==="next"?"Aller à la page suivante":"Aller à la page précédente"}}}};var Sf={exports:{}};(function(r,e){(function(t,n){r.exports=n(rc())})(wr,function(t){function n(a){return a&&typeof a=="object"&&"default"in a?a:{default:a}}var s=n(t),i={name:"fr",weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"di_lu_ma_me_je_ve_sa".split("_"),months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},ordinal:function(a){return""+a+(a===1?"er":"")}};return s.default.locale(i,null,!0),i})})(Sf);function ft(r){if(r===null||r===!0||r===!1)return NaN;var e=Number(r);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function ye(r,e){if(e.length<r)throw new TypeError(r+" argument"+(r>1?"s":"")+" required, but only "+e.length+" present")}function Pe(r){ye(1,arguments);var e=Object.prototype.toString.call(r);return r instanceof Date||sc(r)==="object"&&e==="[object Date]"?new Date(r.getTime()):typeof r=="number"||e==="[object Number]"?new Date(r):((typeof r=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function hc(r,e){ye(2,arguments);var t=Pe(r),n=ft(e);return isNaN(n)?new Date(NaN):(n&&t.setDate(t.getDate()+n),t)}function xu(r){ye(1,arguments);var e=Pe(r),t=e.getDay();return t===0||t===6}function kf(r){return ye(1,arguments),Pe(r).getDay()===0}function yo(r){return ye(1,arguments),Pe(r).getDay()===6}function Rf(r,e){ye(2,arguments);var t=Pe(r).getTime(),n=ft(e);return new Date(t+n)}var Pf={};function vs(){return Pf}function Eo(r,e){var t,n,s,i,a,u,l,d;ye(1,arguments);var f=vs(),p=ft((t=(n=(s=(i=e==null?void 0:e.weekStartsOn)!==null&&i!==void 0?i:e==null||(a=e.locale)===null||a===void 0||(u=a.options)===null||u===void 0?void 0:u.weekStartsOn)!==null&&s!==void 0?s:f.weekStartsOn)!==null&&n!==void 0?n:(l=f.locale)===null||l===void 0||(d=l.options)===null||d===void 0?void 0:d.weekStartsOn)!==null&&t!==void 0?t:0);if(!(p>=0&&p<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var w=Pe(r),A=w.getDay(),x=(A<p?7:0)+A-p;return w.setDate(w.getDate()-x),w.setHours(0,0,0,0),w}function Cf(r){var e=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()));return e.setUTCFullYear(r.getFullYear()),r.getTime()-e.getTime()}function Lo(r,e){ye(2,arguments);var t=ft(e),n=t*7;return hc(r,n)}function xf(r){return ye(1,arguments),r instanceof Date||sc(r)==="object"&&Object.prototype.toString.call(r)==="[object Date]"}function Vf(r){if(ye(1,arguments),!xf(r)&&typeof r!="number")return!1;var e=Pe(r);return!isNaN(Number(e))}function Mf(r,e){ye(2,arguments);var t=ft(e);return Rf(r,-t)}var Of=864e5;function Uf(r){ye(1,arguments);var e=Pe(r),t=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var n=e.getTime(),s=t-n;return Math.floor(s/Of)+1}function gi(r){ye(1,arguments);var e=1,t=Pe(r),n=t.getUTCDay(),s=(n<e?7:0)+n-e;return t.setUTCDate(t.getUTCDate()-s),t.setUTCHours(0,0,0,0),t}function dc(r){ye(1,arguments);var e=Pe(r),t=e.getUTCFullYear(),n=new Date(0);n.setUTCFullYear(t+1,0,4),n.setUTCHours(0,0,0,0);var s=gi(n),i=new Date(0);i.setUTCFullYear(t,0,4),i.setUTCHours(0,0,0,0);var a=gi(i);return e.getTime()>=s.getTime()?t+1:e.getTime()>=a.getTime()?t:t-1}function Lf(r){ye(1,arguments);var e=dc(r),t=new Date(0);t.setUTCFullYear(e,0,4),t.setUTCHours(0,0,0,0);var n=gi(t);return n}var Ff=6048e5;function jf(r){ye(1,arguments);var e=Pe(r),t=gi(e).getTime()-Lf(e).getTime();return Math.round(t/Ff)+1}function _i(r,e){var t,n,s,i,a,u,l,d;ye(1,arguments);var f=vs(),p=ft((t=(n=(s=(i=e==null?void 0:e.weekStartsOn)!==null&&i!==void 0?i:e==null||(a=e.locale)===null||a===void 0||(u=a.options)===null||u===void 0?void 0:u.weekStartsOn)!==null&&s!==void 0?s:f.weekStartsOn)!==null&&n!==void 0?n:(l=f.locale)===null||l===void 0||(d=l.options)===null||d===void 0?void 0:d.weekStartsOn)!==null&&t!==void 0?t:0);if(!(p>=0&&p<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var w=Pe(r),A=w.getUTCDay(),x=(A<p?7:0)+A-p;return w.setUTCDate(w.getUTCDate()-x),w.setUTCHours(0,0,0,0),w}function fc(r,e){var t,n,s,i,a,u,l,d;ye(1,arguments);var f=Pe(r),p=f.getUTCFullYear(),w=vs(),A=ft((t=(n=(s=(i=e==null?void 0:e.firstWeekContainsDate)!==null&&i!==void 0?i:e==null||(a=e.locale)===null||a===void 0||(u=a.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&s!==void 0?s:w.firstWeekContainsDate)!==null&&n!==void 0?n:(l=w.locale)===null||l===void 0||(d=l.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&t!==void 0?t:1);if(!(A>=1&&A<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var x=new Date(0);x.setUTCFullYear(p+1,0,A),x.setUTCHours(0,0,0,0);var O=_i(x,e),S=new Date(0);S.setUTCFullYear(p,0,A),S.setUTCHours(0,0,0,0);var L=_i(S,e);return f.getTime()>=O.getTime()?p+1:f.getTime()>=L.getTime()?p:p-1}function qf(r,e){var t,n,s,i,a,u,l,d;ye(1,arguments);var f=vs(),p=ft((t=(n=(s=(i=e==null?void 0:e.firstWeekContainsDate)!==null&&i!==void 0?i:e==null||(a=e.locale)===null||a===void 0||(u=a.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&s!==void 0?s:f.firstWeekContainsDate)!==null&&n!==void 0?n:(l=f.locale)===null||l===void 0||(d=l.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&t!==void 0?t:1),w=fc(r,e),A=new Date(0);A.setUTCFullYear(w,0,p),A.setUTCHours(0,0,0,0);var x=_i(A,e);return x}var Bf=6048e5;function $f(r,e){ye(1,arguments);var t=Pe(r),n=_i(t,e).getTime()-qf(t,e).getTime();return Math.round(n/Bf)+1}function ce(r,e){for(var t=r<0?"-":"",n=Math.abs(r).toString();n.length<e;)n="0"+n;return t+n}var an={y:function(e,t){var n=e.getUTCFullYear(),s=n>0?n:1-n;return ce(t==="yy"?s%100:s,t.length)},M:function(e,t){var n=e.getUTCMonth();return t==="M"?String(n+1):ce(n+1,2)},d:function(e,t){return ce(e.getUTCDate(),t.length)},a:function(e,t){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h:function(e,t){return ce(e.getUTCHours()%12||12,t.length)},H:function(e,t){return ce(e.getUTCHours(),t.length)},m:function(e,t){return ce(e.getUTCMinutes(),t.length)},s:function(e,t){return ce(e.getUTCSeconds(),t.length)},S:function(e,t){var n=t.length,s=e.getUTCMilliseconds(),i=Math.floor(s*Math.pow(10,n-3));return ce(i,t.length)}},er={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Wf={G:function(e,t,n){var s=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(s,{width:"abbreviated"});case"GGGGG":return n.era(s,{width:"narrow"});case"GGGG":default:return n.era(s,{width:"wide"})}},y:function(e,t,n){if(t==="yo"){var s=e.getUTCFullYear(),i=s>0?s:1-s;return n.ordinalNumber(i,{unit:"year"})}return an.y(e,t)},Y:function(e,t,n,s){var i=fc(e,s),a=i>0?i:1-i;if(t==="YY"){var u=a%100;return ce(u,2)}return t==="Yo"?n.ordinalNumber(a,{unit:"year"}):ce(a,t.length)},R:function(e,t){var n=dc(e);return ce(n,t.length)},u:function(e,t){var n=e.getUTCFullYear();return ce(n,t.length)},Q:function(e,t,n){var s=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(s);case"QQ":return ce(s,2);case"Qo":return n.ordinalNumber(s,{unit:"quarter"});case"QQQ":return n.quarter(s,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(s,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(s,{width:"wide",context:"formatting"})}},q:function(e,t,n){var s=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(s);case"qq":return ce(s,2);case"qo":return n.ordinalNumber(s,{unit:"quarter"});case"qqq":return n.quarter(s,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(s,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(s,{width:"wide",context:"standalone"})}},M:function(e,t,n){var s=e.getUTCMonth();switch(t){case"M":case"MM":return an.M(e,t);case"Mo":return n.ordinalNumber(s+1,{unit:"month"});case"MMM":return n.month(s,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(s,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(s,{width:"wide",context:"formatting"})}},L:function(e,t,n){var s=e.getUTCMonth();switch(t){case"L":return String(s+1);case"LL":return ce(s+1,2);case"Lo":return n.ordinalNumber(s+1,{unit:"month"});case"LLL":return n.month(s,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(s,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(s,{width:"wide",context:"standalone"})}},w:function(e,t,n,s){var i=$f(e,s);return t==="wo"?n.ordinalNumber(i,{unit:"week"}):ce(i,t.length)},I:function(e,t,n){var s=jf(e);return t==="Io"?n.ordinalNumber(s,{unit:"week"}):ce(s,t.length)},d:function(e,t,n){return t==="do"?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):an.d(e,t)},D:function(e,t,n){var s=Uf(e);return t==="Do"?n.ordinalNumber(s,{unit:"dayOfYear"}):ce(s,t.length)},E:function(e,t,n){var s=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(s,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(s,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(s,{width:"short",context:"formatting"});case"EEEE":default:return n.day(s,{width:"wide",context:"formatting"})}},e:function(e,t,n,s){var i=e.getUTCDay(),a=(i-s.weekStartsOn+8)%7||7;switch(t){case"e":return String(a);case"ee":return ce(a,2);case"eo":return n.ordinalNumber(a,{unit:"day"});case"eee":return n.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(i,{width:"short",context:"formatting"});case"eeee":default:return n.day(i,{width:"wide",context:"formatting"})}},c:function(e,t,n,s){var i=e.getUTCDay(),a=(i-s.weekStartsOn+8)%7||7;switch(t){case"c":return String(a);case"cc":return ce(a,t.length);case"co":return n.ordinalNumber(a,{unit:"day"});case"ccc":return n.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(i,{width:"narrow",context:"standalone"});case"cccccc":return n.day(i,{width:"short",context:"standalone"});case"cccc":default:return n.day(i,{width:"wide",context:"standalone"})}},i:function(e,t,n){var s=e.getUTCDay(),i=s===0?7:s;switch(t){case"i":return String(i);case"ii":return ce(i,t.length);case"io":return n.ordinalNumber(i,{unit:"day"});case"iii":return n.day(s,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(s,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(s,{width:"short",context:"formatting"});case"iiii":default:return n.day(s,{width:"wide",context:"formatting"})}},a:function(e,t,n){var s=e.getUTCHours(),i=s/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(e,t,n){var s=e.getUTCHours(),i;switch(s===12?i=er.noon:s===0?i=er.midnight:i=s/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(e,t,n){var s=e.getUTCHours(),i;switch(s>=17?i=er.evening:s>=12?i=er.afternoon:s>=4?i=er.morning:i=er.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(e,t,n){if(t==="ho"){var s=e.getUTCHours()%12;return s===0&&(s=12),n.ordinalNumber(s,{unit:"hour"})}return an.h(e,t)},H:function(e,t,n){return t==="Ho"?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):an.H(e,t)},K:function(e,t,n){var s=e.getUTCHours()%12;return t==="Ko"?n.ordinalNumber(s,{unit:"hour"}):ce(s,t.length)},k:function(e,t,n){var s=e.getUTCHours();return s===0&&(s=24),t==="ko"?n.ordinalNumber(s,{unit:"hour"}):ce(s,t.length)},m:function(e,t,n){return t==="mo"?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):an.m(e,t)},s:function(e,t,n){return t==="so"?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):an.s(e,t)},S:function(e,t){return an.S(e,t)},X:function(e,t,n,s){var i=s._originalDate||e,a=i.getTimezoneOffset();if(a===0)return"Z";switch(t){case"X":return Mu(a);case"XXXX":case"XX":return On(a);case"XXXXX":case"XXX":default:return On(a,":")}},x:function(e,t,n,s){var i=s._originalDate||e,a=i.getTimezoneOffset();switch(t){case"x":return Mu(a);case"xxxx":case"xx":return On(a);case"xxxxx":case"xxx":default:return On(a,":")}},O:function(e,t,n,s){var i=s._originalDate||e,a=i.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+Vu(a,":");case"OOOO":default:return"GMT"+On(a,":")}},z:function(e,t,n,s){var i=s._originalDate||e,a=i.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+Vu(a,":");case"zzzz":default:return"GMT"+On(a,":")}},t:function(e,t,n,s){var i=s._originalDate||e,a=Math.floor(i.getTime()/1e3);return ce(a,t.length)},T:function(e,t,n,s){var i=s._originalDate||e,a=i.getTime();return ce(a,t.length)}};function Vu(r,e){var t=r>0?"-":"+",n=Math.abs(r),s=Math.floor(n/60),i=n%60;if(i===0)return t+String(s);var a=e;return t+String(s)+a+ce(i,2)}function Mu(r,e){if(r%60===0){var t=r>0?"-":"+";return t+ce(Math.abs(r)/60,2)}return On(r,e)}function On(r,e){var t=e||"",n=r>0?"-":"+",s=Math.abs(r),i=ce(Math.floor(s/60),2),a=ce(s%60,2);return n+i+t+a}var Ou=function(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},mc=function(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},zf=function(e,t){var n=e.match(/(P+)(p+)?/)||[],s=n[1],i=n[2];if(!i)return Ou(e,t);var a;switch(s){case"P":a=t.dateTime({width:"short"});break;case"PP":a=t.dateTime({width:"medium"});break;case"PPP":a=t.dateTime({width:"long"});break;case"PPPP":default:a=t.dateTime({width:"full"});break}return a.replace("{{date}}",Ou(s,t)).replace("{{time}}",mc(i,t))},Yf={p:mc,P:zf},Hf=["D","DD"],Gf=["YY","YYYY"];function Kf(r){return Hf.indexOf(r)!==-1}function Qf(r){return Gf.indexOf(r)!==-1}function Uu(r,e,t){if(r==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(t,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(t,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(t,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(t,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var Jf={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Xf=function(e,t,n){var s,i=Jf[e];return typeof i=="string"?s=i:t===1?s=i.one:s=i.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+s:s+" ago":s};function ar(r){return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.width?String(e.width):r.defaultWidth,n=r.formats[t]||r.formats[r.defaultWidth];return n}}var Zf={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},em={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},tm={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},nm={date:ar({formats:Zf,defaultWidth:"full"}),time:ar({formats:em,defaultWidth:"full"}),dateTime:ar({formats:tm,defaultWidth:"full"})},rm={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},sm=function(e,t,n,s){return rm[e]};function At(r){return function(e,t){var n=t!=null&&t.context?String(t.context):"standalone",s;if(n==="formatting"&&r.formattingValues){var i=r.defaultFormattingWidth||r.defaultWidth,a=t!=null&&t.width?String(t.width):i;s=r.formattingValues[a]||r.formattingValues[i]}else{var u=r.defaultWidth,l=t!=null&&t.width?String(t.width):r.defaultWidth;s=r.values[l]||r.values[u]}var d=r.argumentCallback?r.argumentCallback(e):e;return s[d]}}var im={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},om={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},am={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},um={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},lm={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},cm={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},hm=function(e,t){var n=Number(e),s=n%100;if(s>20||s<10)switch(s%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},dm={ordinalNumber:hm,era:At({values:im,defaultWidth:"wide"}),quarter:At({values:om,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:At({values:am,defaultWidth:"wide"}),day:At({values:um,defaultWidth:"wide"}),dayPeriod:At({values:lm,defaultWidth:"wide",formattingValues:cm,defaultFormattingWidth:"wide"})};function Nt(r){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.width,s=n&&r.matchPatterns[n]||r.matchPatterns[r.defaultMatchWidth],i=e.match(s);if(!i)return null;var a=i[0],u=n&&r.parsePatterns[n]||r.parsePatterns[r.defaultParseWidth],l=Array.isArray(u)?mm(u,function(p){return p.test(a)}):fm(u,function(p){return p.test(a)}),d;d=r.valueCallback?r.valueCallback(l):l,d=t.valueCallback?t.valueCallback(d):d;var f=e.slice(a.length);return{value:d,rest:f}}}function fm(r,e){for(var t in r)if(r.hasOwnProperty(t)&&e(r[t]))return t}function mm(r,e){for(var t=0;t<r.length;t++)if(e(r[t]))return t}function pc(r){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.match(r.matchPattern);if(!n)return null;var s=n[0],i=e.match(r.parsePattern);if(!i)return null;var a=r.valueCallback?r.valueCallback(i[0]):i[0];a=t.valueCallback?t.valueCallback(a):a;var u=e.slice(s.length);return{value:a,rest:u}}}var pm=/^(\d+)(th|st|nd|rd)?/i,gm=/\d+/i,_m={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},vm={any:[/^b/i,/^(a|c)/i]},ym={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Em={any:[/1/i,/2/i,/3/i,/4/i]},wm={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Tm={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},bm={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Im={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Am={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Nm={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Dm={ordinalNumber:pc({matchPattern:pm,parsePattern:gm,valueCallback:function(e){return parseInt(e,10)}}),era:Nt({matchPatterns:_m,defaultMatchWidth:"wide",parsePatterns:vm,defaultParseWidth:"any"}),quarter:Nt({matchPatterns:ym,defaultMatchWidth:"wide",parsePatterns:Em,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Nt({matchPatterns:wm,defaultMatchWidth:"wide",parsePatterns:Tm,defaultParseWidth:"any"}),day:Nt({matchPatterns:bm,defaultMatchWidth:"wide",parsePatterns:Im,defaultParseWidth:"any"}),dayPeriod:Nt({matchPatterns:Am,defaultMatchWidth:"any",parsePatterns:Nm,defaultParseWidth:"any"})},Sm={code:"en-US",formatDistance:Xf,formatLong:nm,formatRelative:sm,localize:dm,match:Dm,options:{weekStartsOn:0,firstWeekContainsDate:1}},km=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Rm=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Pm=/^'([^]*?)'?$/,Cm=/''/g,xm=/[a-zA-Z]/;function qt(r,e,t){var n,s,i,a,u,l,d,f,p,w,A,x,O,S,L,M,q,K;ye(2,arguments);var fe=String(e),re=vs(),b=(n=(s=t==null?void 0:t.locale)!==null&&s!==void 0?s:re.locale)!==null&&n!==void 0?n:Sm,g=ft((i=(a=(u=(l=t==null?void 0:t.firstWeekContainsDate)!==null&&l!==void 0?l:t==null||(d=t.locale)===null||d===void 0||(f=d.options)===null||f===void 0?void 0:f.firstWeekContainsDate)!==null&&u!==void 0?u:re.firstWeekContainsDate)!==null&&a!==void 0?a:(p=re.locale)===null||p===void 0||(w=p.options)===null||w===void 0?void 0:w.firstWeekContainsDate)!==null&&i!==void 0?i:1);if(!(g>=1&&g<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var v=ft((A=(x=(O=(S=t==null?void 0:t.weekStartsOn)!==null&&S!==void 0?S:t==null||(L=t.locale)===null||L===void 0||(M=L.options)===null||M===void 0?void 0:M.weekStartsOn)!==null&&O!==void 0?O:re.weekStartsOn)!==null&&x!==void 0?x:(q=re.locale)===null||q===void 0||(K=q.options)===null||K===void 0?void 0:K.weekStartsOn)!==null&&A!==void 0?A:0);if(!(v>=0&&v<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!b.localize)throw new RangeError("locale must contain localize property");if(!b.formatLong)throw new RangeError("locale must contain formatLong property");var T=Pe(r);if(!Vf(T))throw new RangeError("Invalid time value");var I=Cf(T),N=Mf(T,I),_={firstWeekContainsDate:g,weekStartsOn:v,locale:b,_originalDate:T},he=fe.match(Rm).map(function(ie){var be=ie[0];if(be==="p"||be==="P"){var Ve=Yf[be];return Ve(ie,b.formatLong)}return ie}).join("").match(km).map(function(ie){if(ie==="''")return"'";var be=ie[0];if(be==="'")return Vm(ie);var Ve=Wf[be];if(Ve)return!(t!=null&&t.useAdditionalWeekYearTokens)&&Qf(ie)&&Uu(ie,e,String(r)),!(t!=null&&t.useAdditionalDayOfYearTokens)&&Kf(ie)&&Uu(ie,e,String(r)),Ve(N,ie,b.localize,_);if(be.match(xm))throw new RangeError("Format string contains an unescaped latin alphabet character `"+be+"`");return ie}).join("");return he}function Vm(r){var e=r.match(Pm);return e?e[1].replace(Cm,"'"):r}function wo(r){return ye(1,arguments),Pe(r).getDay()===1}function Mm(r,e){ye(2,arguments);var t=Pe(r).getTime(),n=Pe(e.start).getTime(),s=Pe(e.end).getTime();if(!(n<=s))throw new RangeError("Invalid interval");return t>=n&&t<=s}function Om(r,e){ye(2,arguments);var t=ft(e);return Lo(r,-t)}var Um={lessThanXSeconds:{one:"moins d’une seconde",other:"moins de {{count}} secondes"},xSeconds:{one:"1 seconde",other:"{{count}} secondes"},halfAMinute:"30 secondes",lessThanXMinutes:{one:"moins d’une minute",other:"moins de {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"environ 1 heure",other:"environ {{count}} heures"},xHours:{one:"1 heure",other:"{{count}} heures"},xDays:{one:"1 jour",other:"{{count}} jours"},aboutXWeeks:{one:"environ 1 semaine",other:"environ {{count}} semaines"},xWeeks:{one:"1 semaine",other:"{{count}} semaines"},aboutXMonths:{one:"environ 1 mois",other:"environ {{count}} mois"},xMonths:{one:"1 mois",other:"{{count}} mois"},aboutXYears:{one:"environ 1 an",other:"environ {{count}} ans"},xYears:{one:"1 an",other:"{{count}} ans"},overXYears:{one:"plus d’un an",other:"plus de {{count}} ans"},almostXYears:{one:"presqu’un an",other:"presque {{count}} ans"}},Lm=function(e,t,n){var s,i=Um[e];return typeof i=="string"?s=i:t===1?s=i.one:s=i.other.replace("{{count}}",String(t)),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"dans "+s:"il y a "+s:s},Fm={full:"EEEE d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"dd/MM/y"},jm={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},qm={full:"{{date}} 'à' {{time}}",long:"{{date}} 'à' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Bm={date:ar({formats:Fm,defaultWidth:"full"}),time:ar({formats:jm,defaultWidth:"full"}),dateTime:ar({formats:qm,defaultWidth:"full"})},$m={lastWeek:"eeee 'dernier à' p",yesterday:"'hier à' p",today:"'aujourd’hui à' p",tomorrow:"'demain à' p'",nextWeek:"eeee 'prochain à' p",other:"P"},Wm=function(e,t,n,s){return $m[e]},zm={narrow:["av. J.-C","ap. J.-C"],abbreviated:["av. J.-C","ap. J.-C"],wide:["avant Jésus-Christ","après Jésus-Christ"]},Ym={narrow:["T1","T2","T3","T4"],abbreviated:["1er trim.","2ème trim.","3ème trim.","4ème trim."],wide:["1er trimestre","2ème trimestre","3ème trimestre","4ème trimestre"]},Hm={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc."],wide:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"]},Gm={narrow:["D","L","M","M","J","V","S"],short:["di","lu","ma","me","je","ve","sa"],abbreviated:["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],wide:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"]},Km={narrow:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"mat.",afternoon:"ap.m.",evening:"soir",night:"mat."},abbreviated:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"matin",afternoon:"après-midi",evening:"soir",night:"matin"},wide:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"du matin",afternoon:"de l’après-midi",evening:"du soir",night:"du matin"}},Qm=function(e,t){var n=Number(e),s=t==null?void 0:t.unit;if(n===0)return"0";var i=["year","week","hour","minute","second"],a;return n===1?a=s&&i.includes(s)?"ère":"er":a="ème",n+a},Jm={ordinalNumber:Qm,era:At({values:zm,defaultWidth:"wide"}),quarter:At({values:Ym,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:At({values:Hm,defaultWidth:"wide"}),day:At({values:Gm,defaultWidth:"wide"}),dayPeriod:At({values:Km,defaultWidth:"wide"})},Xm=/^(\d+)(ième|ère|ème|er|e)?/i,Zm=/\d+/i,ep={narrow:/^(av\.J\.C|ap\.J\.C|ap\.J\.-C)/i,abbreviated:/^(av\.J\.-C|av\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i,wide:/^(avant Jésus-Christ|après Jésus-Christ)/i},tp={any:[/^av/i,/^ap/i]},np={narrow:/^T?[1234]/i,abbreviated:/^[1234](er|ème|e)? trim\.?/i,wide:/^[1234](er|ème|e)? trimestre/i},rp={any:[/1/i,/2/i,/3/i,/4/i]},sp={narrow:/^[jfmasond]/i,abbreviated:/^(janv|févr|mars|avr|mai|juin|juill|juil|août|sept|oct|nov|déc)\.?/i,wide:/^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i},ip={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^av/i,/^ma/i,/^juin/i,/^juil/i,/^ao/i,/^s/i,/^o/i,/^n/i,/^d/i]},op={narrow:/^[lmjvsd]/i,short:/^(di|lu|ma|me|je|ve|sa)/i,abbreviated:/^(dim|lun|mar|mer|jeu|ven|sam)\.?/i,wide:/^(dimanche|lundi|mardi|mercredi|jeudi|vendredi|samedi)/i},ap={narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^j/i,/^v/i,/^s/i],any:[/^di/i,/^lu/i,/^ma/i,/^me/i,/^je/i,/^ve/i,/^sa/i]},up={narrow:/^(a|p|minuit|midi|mat\.?|ap\.?m\.?|soir|nuit)/i,any:/^([ap]\.?\s?m\.?|du matin|de l'après[-\s]midi|du soir|de la nuit)/i},lp={any:{am:/^a/i,pm:/^p/i,midnight:/^min/i,noon:/^mid/i,morning:/mat/i,afternoon:/ap/i,evening:/soir/i,night:/nuit/i}},cp={ordinalNumber:pc({matchPattern:Xm,parsePattern:Zm,valueCallback:function(e){return parseInt(e)}}),era:Nt({matchPatterns:ep,defaultMatchWidth:"wide",parsePatterns:tp,defaultParseWidth:"any"}),quarter:Nt({matchPatterns:np,defaultMatchWidth:"wide",parsePatterns:rp,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Nt({matchPatterns:sp,defaultMatchWidth:"wide",parsePatterns:ip,defaultParseWidth:"any"}),day:Nt({matchPatterns:op,defaultMatchWidth:"wide",parsePatterns:ap,defaultParseWidth:"any"}),dayPeriod:Nt({matchPatterns:up,defaultMatchWidth:"any",parsePatterns:lp,defaultParseWidth:"any"})},us={code:"fr",formatDistance:Lm,formatLong:Bm,formatRelative:Wm,localize:Jm,match:cp,options:{weekStartsOn:1,firstWeekContainsDate:4}};const hp=["Lionel","Eugène","Stephane","Philippe","Nassim"],R={MAT1:"MAT1",MAT2:"MAT2",AM1:"AM1",AM2:"AM2",REMPLACANT:"REMPLACANT"},Js=20,To=new Date("2024-10-14"),dp=({weekSchedule:r})=>{const e=n=>{if(n.isAbsent)return"schedule-conge";if(n.isRecuperation)return"schedule-recuperation";switch(n.poste){case R.MAT1:return"schedule-mat1";case R.MAT2:return"schedule-mat2";case R.AM1:return"schedule-am1";case R.AM2:return"schedule-am2";case R.REMPLACANT:return"schedule-remplacant";default:return""}},t=n=>{const s=e(n);let i=n.chef;return n.isRecuperation?i+=" - Récupération":n.isReplacing?i+=` - ${n.poste}`:n.isAbsent||(i+=` - ${n.poste}`),y.jsxDEV("div",{className:`schedule-cell ${s} neon-text`,children:i},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Schedule.tsx",lineNumber:46,columnNumber:7},void 0)};return y.jsxDEV("div",{className:"space-y-6",children:[y.jsxDEV("div",{className:"mb-4",children:[y.jsxDEV("h2",{className:"neon-text text-xl font-bold mb-2",children:["Cycle ",r.cycleNumber," - Semaine ",r.weekInCycle]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Schedule.tsx",lineNumber:55,columnNumber:9},void 0),y.jsxDEV("div",{className:"neon-text text-sm opacity-80",children:["Du ",qt(r.startDate,"dd/MM/yyyy")," au"," ",qt(hc(r.startDate,6),"dd/MM/yyyy")]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Schedule.tsx",lineNumber:58,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Schedule.tsx",lineNumber:54,columnNumber:7},void 0),y.jsxDEV("div",{className:"space-y-4",children:Object.entries(r.schedule).map(([n,s])=>{const i=new Date(n),a=[R.MAT1,R.REMPLACANT,R.MAT2,R.AM1,R.AM2],u=[...s].sort((l,d)=>{const f=l.poste,p=d.poste;return a.indexOf(f)-a.indexOf(p)});return y.jsxDEV("div",{className:"neon-card p-4 rounded-lg",children:[y.jsxDEV("div",{className:"neon-text font-medium mb-3",children:qt(i,"EEEE dd/MM",{locale:us})},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Schedule.tsx",lineNumber:77,columnNumber:15},void 0),y.jsxDEV("div",{className:"schedule-grid",children:u.map((l,d)=>y.jsxDEV("div",{className:"schedule-day",children:t(l)},d,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Schedule.tsx",lineNumber:82,columnNumber:19},void 0))},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Schedule.tsx",lineNumber:80,columnNumber:15},void 0)]},n,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Schedule.tsx",lineNumber:76,columnNumber:13},void 0)})},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Schedule.tsx",lineNumber:64,columnNumber:7},void 0),y.jsxDEV("div",{className:"neon-card p-4 rounded-lg",children:[y.jsxDEV("div",{className:"neon-text font-medium mb-3",children:"Légende"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Schedule.tsx",lineNumber:93,columnNumber:9},void 0),y.jsxDEV("div",{className:"schedule-grid",children:[y.jsxDEV("div",{className:"schedule-cell schedule-mat1 neon-text",children:"MAT1"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Schedule.tsx",lineNumber:95,columnNumber:11},void 0),y.jsxDEV("div",{className:"schedule-cell schedule-mat2 neon-text",children:"MAT2"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Schedule.tsx",lineNumber:96,columnNumber:11},void 0),y.jsxDEV("div",{className:"schedule-cell schedule-am1 neon-text",children:"AM1"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Schedule.tsx",lineNumber:97,columnNumber:11},void 0),y.jsxDEV("div",{className:"schedule-cell schedule-am2 neon-text",children:"AM2"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Schedule.tsx",lineNumber:98,columnNumber:11},void 0),y.jsxDEV("div",{className:"schedule-cell schedule-remplacant neon-text",children:"Remplaçant"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Schedule.tsx",lineNumber:99,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Schedule.tsx",lineNumber:94,columnNumber:9},void 0),y.jsxDEV("div",{className:"schedule-grid mt-3",style:{gridTemplateColumns:"repeat(2, 1fr)"},children:[y.jsxDEV("div",{className:"schedule-cell schedule-conge neon-text",children:"En congé"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Schedule.tsx",lineNumber:102,columnNumber:11},void 0),y.jsxDEV("div",{className:"schedule-cell schedule-recuperation neon-text",children:"Récupération"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Schedule.tsx",lineNumber:103,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Schedule.tsx",lineNumber:101,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Schedule.tsx",lineNumber:92,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Schedule.tsx",lineNumber:53,columnNumber:5},void 0)},fp=["Lionel","Eugène","Stephane","Philippe","Nassim"],mp=({onSubmit:r,onCancel:e})=>{const[t,n]=Z.useState(new Date),[s,i]=Z.useState(new Date),[a,u]=Z.useState("Congé"),[l,d]=Z.useState("Lionel"),f=p=>{p.preventDefault(),r({chef:l,startDate:t,endDate:s,type:a}),n(new Date),i(new Date),u("Congé"),d("Lionel")};return y.jsxDEV("form",{onSubmit:f,className:"space-y-4",children:[y.jsxDEV("div",{children:[y.jsxDEV("label",{className:"block text-sm font-medium mb-1 neon-text",children:"Chef"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/VacationForm.tsx",lineNumber:34,columnNumber:9},void 0),y.jsxDEV("select",{value:l,onChange:p=>d(p.target.value),className:"neon-input w-full p-2 rounded",children:fp.map(p=>y.jsxDEV("option",{value:p,children:p},p,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/VacationForm.tsx",lineNumber:41,columnNumber:13},void 0))},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/VacationForm.tsx",lineNumber:35,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/VacationForm.tsx",lineNumber:33,columnNumber:7},void 0),y.jsxDEV("div",{children:[y.jsxDEV("label",{className:"block text-sm font-medium mb-1 neon-text",children:"Type de congé"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/VacationForm.tsx",lineNumber:49,columnNumber:9},void 0),y.jsxDEV("select",{value:a,onChange:p=>u(p.target.value),className:"neon-input w-full p-2 rounded",children:[y.jsxDEV("option",{value:"CP",children:"Congés payés"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/VacationForm.tsx",lineNumber:55,columnNumber:11},void 0),y.jsxDEV("option",{value:"RTT",children:"RTT"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/VacationForm.tsx",lineNumber:56,columnNumber:11},void 0),y.jsxDEV("option",{value:"Maladie",children:"Maladie"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/VacationForm.tsx",lineNumber:57,columnNumber:11},void 0),y.jsxDEV("option",{value:"Formation",children:"Formation"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/VacationForm.tsx",lineNumber:58,columnNumber:11},void 0),y.jsxDEV("option",{value:"Congé",children:"Congé"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/VacationForm.tsx",lineNumber:59,columnNumber:11},void 0),y.jsxDEV("option",{value:"Récupération",children:"Récupération"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/VacationForm.tsx",lineNumber:60,columnNumber:11},void 0),y.jsxDEV("option",{value:"Autre",children:"Autre"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/VacationForm.tsx",lineNumber:61,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/VacationForm.tsx",lineNumber:50,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/VacationForm.tsx",lineNumber:48,columnNumber:7},void 0),y.jsxDEV("div",{children:[y.jsxDEV("label",{className:"block text-sm font-medium mb-1 neon-text",children:"Date de début"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/VacationForm.tsx",lineNumber:66,columnNumber:9},void 0),y.jsxDEV("input",{type:"date",value:t.toISOString().split("T")[0],onChange:p=>n(new Date(p.target.value)),className:"neon-input w-full p-2 rounded"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/VacationForm.tsx",lineNumber:67,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/VacationForm.tsx",lineNumber:65,columnNumber:7},void 0),y.jsxDEV("div",{children:[y.jsxDEV("label",{className:"block text-sm font-medium mb-1 neon-text",children:"Date de fin"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/VacationForm.tsx",lineNumber:76,columnNumber:9},void 0),y.jsxDEV("input",{type:"date",value:s.toISOString().split("T")[0],onChange:p=>i(new Date(p.target.value)),className:"neon-input w-full p-2 rounded"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/VacationForm.tsx",lineNumber:77,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/VacationForm.tsx",lineNumber:75,columnNumber:7},void 0),y.jsxDEV("div",{className:"flex justify-end space-x-4",children:[y.jsxDEV("button",{type:"button",onClick:e,className:"neon-button-secondary px-4 py-2 rounded",children:"Annuler"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/VacationForm.tsx",lineNumber:86,columnNumber:9},void 0),y.jsxDEV("button",{type:"submit",className:"neon-button px-4 py-2 rounded",children:"Ajouter"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/VacationForm.tsx",lineNumber:93,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/VacationForm.tsx",lineNumber:85,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/VacationForm.tsx",lineNumber:32,columnNumber:5},void 0)},je=[];for(let r=0;r<256;++r)je.push((r+256).toString(16).slice(1));function pp(r,e=0){return(je[r[e+0]]+je[r[e+1]]+je[r[e+2]]+je[r[e+3]]+"-"+je[r[e+4]]+je[r[e+5]]+"-"+je[r[e+6]]+je[r[e+7]]+"-"+je[r[e+8]]+je[r[e+9]]+"-"+je[r[e+10]]+je[r[e+11]]+je[r[e+12]]+je[r[e+13]]+je[r[e+14]]+je[r[e+15]]).toLowerCase()}let bo;const gp=new Uint8Array(16);function _p(){if(!bo){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");bo=crypto.getRandomValues.bind(crypto)}return bo(gp)}const vp=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Lu={randomUUID:vp};function yp(r,e,t){if(Lu.randomUUID&&!e&&!r)return Lu.randomUUID();r=r||{};const n=r.random||(r.rng||_p)();return n[6]=n[6]&15|64,n[8]=n[8]&63|128,pp(n)}const Ep=({vacations:r,onVacationChange:e})=>{const[t,n]=Z.useState(!1),s=u=>{const l={...u,id:yp()};e([...r,l]),n(!1)},i=u=>{e(r.filter(l=>l.id!==u))},a=u=>{switch(u){case"CP":return"Congés payés";case"RTT":return"RTT";case"Maladie":return"Maladie";case"Formation":return"Formation";case"Congé":return"Congé";case"Récupération":return"Récupération";default:return"Autre"}};return y.jsxDEV("div",{className:"space-y-4",children:[y.jsxDEV("div",{className:"flex justify-between items-center",children:[y.jsxDEV("h2",{className:"text-xl font-bold neon-text",children:"Gestion des absences"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/VacationManager.tsx",lineNumber:54,columnNumber:9},void 0),y.jsxDEV("button",{onClick:()=>n(!0),className:"neon-button px-4 py-2 rounded",children:"Ajouter une absence"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/VacationManager.tsx",lineNumber:55,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/VacationManager.tsx",lineNumber:53,columnNumber:7},void 0),t&&y.jsxDEV("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",children:y.jsxDEV("div",{className:"neon-card p-6 max-w-md w-full",children:[y.jsxDEV("h3",{className:"text-lg font-bold mb-4 neon-text",children:"Nouvelle absence"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/VacationManager.tsx",lineNumber:66,columnNumber:13},void 0),y.jsxDEV(mp,{onSubmit:s,onCancel:()=>n(!1)},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/VacationManager.tsx",lineNumber:67,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/VacationManager.tsx",lineNumber:65,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/VacationManager.tsx",lineNumber:64,columnNumber:9},void 0),y.jsxDEV("div",{className:"grid gap-4",children:r.map(u=>y.jsxDEV("div",{className:"neon-card p-4 rounded-lg flex justify-between items-center",children:[y.jsxDEV("div",{children:[y.jsxDEV("div",{className:"font-medium neon-text",children:[u.chef," - ",a(u.type)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/VacationManager.tsx",lineNumber:82,columnNumber:15},void 0),y.jsxDEV("div",{className:"text-sm text-cyan-300",children:[qt(new Date(u.startDate),"dd/MM/yyyy",{locale:us})," → ",qt(new Date(u.endDate),"dd/MM/yyyy",{locale:us})]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/VacationManager.tsx",lineNumber:85,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/VacationManager.tsx",lineNumber:81,columnNumber:13},void 0),y.jsxDEV("button",{onClick:()=>i(u.id),className:"neon-button-danger px-3 py-1 rounded",children:"Supprimer"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/VacationManager.tsx",lineNumber:91,columnNumber:13},void 0)]},u.id,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/VacationManager.tsx",lineNumber:77,columnNumber:11},void 0))},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/VacationManager.tsx",lineNumber:75,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/VacationManager.tsx",lineNumber:52,columnNumber:5},void 0)},wp=({currentDate:r,onDateChange:e})=>{const t=()=>{e(Om(r,1))},n=()=>{e(Lo(r,1))},s=qt(r,"dd/MM/yyyy",{locale:us}),i=qt(Lo(r,1),"dd/MM/yyyy",{locale:us});return y.jsxDEV("div",{className:"flex items-center justify-between p-2",children:[y.jsxDEV("button",{onClick:t,className:"neon-button px-4 py-2 rounded-md text-sm",children:"← Semaine précédente"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/WeekNavigation.tsx",lineNumber:30,columnNumber:7},void 0),y.jsxDEV("div",{className:"flex items-center space-x-4",children:[y.jsxDEV("div",{className:"neon-text text-lg font-medium",children:[s," - ",i]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/WeekNavigation.tsx",lineNumber:38,columnNumber:9},void 0),y.jsxDEV("div",{className:"neon-card p-1 rounded-md",children:y.jsxDEV(uf,{value:Re(r),onChange:a=>a&&e(a.toDate()),format:"DD/MM/YYYY",className:"date-picker-field",slotProps:{textField:{size:"small",className:"date-picker-field",inputProps:{"aria-label":"Sélectionner une date"}},openPickerButton:{className:"neon-button p-1 rounded-md"}}},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/WeekNavigation.tsx",lineNumber:43,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/WeekNavigation.tsx",lineNumber:42,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/WeekNavigation.tsx",lineNumber:37,columnNumber:7},void 0),y.jsxDEV("button",{onClick:n,className:"neon-button px-4 py-2 rounded-md text-sm",children:"Semaine suivante →"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/WeekNavigation.tsx",lineNumber:64,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/WeekNavigation.tsx",lineNumber:29,columnNumber:5},void 0)},tr={EUGENE_WORKED_SATURDAY:"eugeneWorkedSaturday",VACATIONS:"vacations"},Tp=r=>{try{return btoa(JSON.stringify(r))}catch(e){return console.error("Erreur lors de l'encodage des données:",e),""}},bp=r=>{if(!r)return null;try{const e=atob(r);return JSON.parse(e)}catch(e){return console.error("Erreur lors du décodage des données:",e),null}},vi=r=>r instanceof Date&&!isNaN(r.getTime()),Fu=r=>r&&typeof r.chef=="string"&&vi(new Date(r.startDate))&&vi(new Date(r.endDate))&&typeof r.type=="string",Q={setItem(r,e){try{const t=Tp(e);localStorage.setItem(r,t)}catch(t){console.error("Erreur lors du stockage des données:",t)}},getItem(r){try{const e=localStorage.getItem(r);return bp(e)}catch(e){return console.error("Erreur lors de la récupération des données:",e),null}},removeItem(r){try{localStorage.removeItem(r)}catch(e){console.error("Erreur lors de la suppression des données:",e)}},setEugeneWorkedSaturday:r=>{if(!vi(r)){console.error("Date invalide");return}Q.setItem(tr.EUGENE_WORKED_SATURDAY,r.toISOString())},getEugeneWorkedSaturday:()=>{const r=Q.getItem(tr.EUGENE_WORKED_SATURDAY);if(!r)return null;const e=new Date(r);return vi(e)?e:null},removeEugeneWorkedSaturday:()=>{Q.removeItem(tr.EUGENE_WORKED_SATURDAY)},setVacations:r=>{if(!Array.isArray(r)||!r.every(Fu)){console.error("Données de vacances invalides");return}const e=r.map(t=>({chef:t.chef,startDate:t.startDate,endDate:t.endDate,type:t.type}));Q.setItem(tr.VACATIONS,e)},getVacations:()=>{const r=Q.getItem(tr.VACATIONS);return Array.isArray(r)&&r.every(Fu)?r:[]},clearAll:()=>{Object.values(tr).forEach(r=>{Q.removeItem(r)})}},Ip=({vacations:r,onVacationsImport:e})=>{const t=()=>{try{const s={version:"1.0",timestamp:new Date().toISOString(),data:{vacations:r,eugeneWorkedSaturday:Q.getEugeneWorkedSaturday()}},i=new Blob([JSON.stringify(s,null,2)],{type:"application/json"}),a=URL.createObjectURL(i),u=document.createElement("a");u.href=a,u.download=`planning-equipe-backup-${new Date().toISOString().split("T")[0]}.json`,document.body.appendChild(u),u.click(),document.body.removeChild(u),URL.revokeObjectURL(a)}catch(s){console.error("Erreur lors de l'export:",s),alert("Erreur lors de l'export des données")}},n=s=>{var u;const i=(u=s.target.files)==null?void 0:u[0];if(!i)return;const a=new FileReader;a.onload=l=>{var d;try{const f=(d=l.target)==null?void 0:d.result,p=JSON.parse(f);if(!p.version||!p.data)throw new Error("Format de fichier invalide");if(Array.isArray(p.data.vacations)){const w=p.data.vacations.filter(A=>A&&typeof A.chef=="string"&&A.startDate&&A.endDate&&typeof A.type=="string").map(A=>({...A,startDate:new Date(A.startDate),endDate:new Date(A.endDate)}));e(w)}if(p.data.eugeneWorkedSaturday){const w=new Date(p.data.eugeneWorkedSaturday);isNaN(w.getTime())||Q.setEugeneWorkedSaturday(w)}alert("Import réussi !")}catch(f){console.error("Erreur lors de l'import:",f),alert("Erreur lors de l'import des données")}},a.readAsText(i),s.target.value=""};return y.jsxDEV("div",{className:"bg-white rounded-lg p-4 shadow",children:[y.jsxDEV("h3",{className:"text-lg font-semibold mb-4",children:"Gestion des données"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/DataManager.tsx",lineNumber:104,columnNumber:7},void 0),y.jsxDEV("div",{className:"space-y-4",children:[y.jsxDEV("div",{children:[y.jsxDEV("button",{onClick:t,className:"w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors",children:"Exporter les données"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/DataManager.tsx",lineNumber:108,columnNumber:11},void 0),y.jsxDEV("p",{className:"text-sm text-gray-500 mt-1",children:"Téléchargez une sauvegarde de toutes vos données"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/DataManager.tsx",lineNumber:114,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/DataManager.tsx",lineNumber:107,columnNumber:9},void 0),y.jsxDEV("div",{children:[y.jsxDEV("label",{className:"block",children:[y.jsxDEV("span",{className:"sr-only",children:"Importer des données"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/DataManager.tsx",lineNumber:121,columnNumber:13},void 0),y.jsxDEV("div",{className:"relative",children:[y.jsxDEV("button",{onClick:()=>{var s;return(s=document.getElementById("file-import"))==null?void 0:s.click()},className:"w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors",children:"Importer des données"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/DataManager.tsx",lineNumber:123,columnNumber:15},void 0),y.jsxDEV("input",{id:"file-import",type:"file",accept:".json",onChange:n,className:"hidden"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/DataManager.tsx",lineNumber:129,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/DataManager.tsx",lineNumber:122,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/DataManager.tsx",lineNumber:120,columnNumber:11},void 0),y.jsxDEV("p",{className:"text-sm text-gray-500 mt-1",children:"Restaurez vos données à partir d'une sauvegarde"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/DataManager.tsx",lineNumber:138,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/DataManager.tsx",lineNumber:119,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/DataManager.tsx",lineNumber:106,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/DataManager.tsx",lineNumber:103,columnNumber:5},void 0)};class ot{static initSession(){const e={lastActivity:Date.now(),loginAttempts:0,lastAttempt:0,isLocked:!1,lockUntil:0};Q.setItem(this.SESSION_KEY,JSON.stringify(e))}static updateActivity(){const e=this.getSession();e&&(e.lastActivity=Date.now(),Q.setItem(this.SESSION_KEY,JSON.stringify(e)))}static isSessionExpired(){const e=this.getSession();return e?Date.now()-e.lastActivity>this.INACTIVITY_TIMEOUT:!0}static recordLoginAttempt(e){const t=this.getSession()||{lastActivity:Date.now(),loginAttempts:0,lastAttempt:0,isLocked:!1,lockUntil:0};e?(t.loginAttempts=0,t.isLocked=!1):(t.loginAttempts++,t.lastAttempt=Date.now(),t.loginAttempts>=this.MAX_LOGIN_ATTEMPTS&&(t.isLocked=!0,t.lockUntil=Date.now()+this.LOCK_DURATION)),Q.setItem(this.SESSION_KEY,JSON.stringify(t))}static isAccountLocked(){const e=this.getSession();if(!e)return!1;const t=Date.now();return e.isLocked&&t<e.lockUntil?!0:(e.isLocked&&t>=e.lockUntil&&(e.isLocked=!1,e.loginAttempts=0,Q.setItem(this.SESSION_KEY,JSON.stringify(e))),!1)}static getRemainingLockTime(){const e=this.getSession();if(!e||!e.isLocked)return 0;const t=e.lockUntil-Date.now();return t>0?t:0}static getSession(){const e=Q.getItem(this.SESSION_KEY);return e?JSON.parse(e):null}static clearSession(){Q.removeItem(this.SESSION_KEY)}}It(ot,"SESSION_KEY","planning_session"),It(ot,"INACTIVITY_TIMEOUT",30*60*1e3),It(ot,"MAX_LOGIN_ATTEMPTS",3),It(ot,"LOCK_DURATION",15*60*1e3);var ju={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ap=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const s=r[t++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=r[t++];e[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=r[t++],a=r[t++],u=r[t++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|u&63)-65536;e[n++]=String.fromCharCode(55296+(l>>10)),e[n++]=String.fromCharCode(56320+(l&1023))}else{const i=r[t++],a=r[t++];e[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},_c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const i=r[s],a=s+1<r.length,u=a?r[s+1]:0,l=s+2<r.length,d=l?r[s+2]:0,f=i>>2,p=(i&3)<<4|u>>4;let w=(u&15)<<2|d>>6,A=d&63;l||(A=64,a||(w=64)),n.push(t[f],t[p],t[w],t[A])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(gc(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Ap(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const i=t[r.charAt(s++)],u=s<r.length?t[r.charAt(s)]:0;++s;const d=s<r.length?t[r.charAt(s)]:64;++s;const p=s<r.length?t[r.charAt(s)]:64;if(++s,i==null||u==null||d==null||p==null)throw new Np;const w=i<<2|u>>4;if(n.push(w),d!==64){const A=u<<4&240|d>>2;if(n.push(A),p!==64){const x=d<<6&192|p;n.push(x)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Np extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Dp=function(r){const e=gc(r);return _c.encodeByteArray(e,!0)},yi=function(r){return Dp(r).replace(/\./g,"")},vc=function(r){try{return _c.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp=()=>Sp().__FIREBASE_DEFAULTS__,Rp=()=>{if(typeof process>"u"||typeof ju>"u")return;const r=ju.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Pp=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&vc(r[1]);return e&&JSON.parse(e)},Li=()=>{try{return kp()||Rp()||Pp()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},yc=r=>{var e,t;return(t=(e=Li())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},Cp=r=>{const e=yc(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},Ec=()=>{var r;return(r=Li())===null||r===void 0?void 0:r.config},wc=r=>{var e;return(e=Li())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vp(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",s=r.iat||0,i=r.sub||r.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},r);return[yi(JSON.stringify(t)),yi(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Mp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Je())}function Op(){var r;const e=(r=Li())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Up(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Lp(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Fp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jp(){const r=Je();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function qp(){return!Op()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Bp(){try{return typeof indexedDB=="object"}catch{return!1}}function $p(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wp="FirebaseError";class Kt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=Wp,Object.setPrototypeOf(this,Kt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ys.prototype.create)}}class ys{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?zp(i,n):"Error",u=`${this.serviceName}: ${a} (${s}).`;return new Kt(s,u,n)}}function zp(r,e){return r.replace(Yp,(t,n)=>{const s=e[n];return s!=null?String(s):`<${n}?>`})}const Yp=/\{\$([^}]+)}/g;function Hp(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Ei(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const s of t){if(!n.includes(s))return!1;const i=r[s],a=e[s];if(qu(i)&&qu(a)){if(!Ei(i,a))return!1}else if(i!==a)return!1}for(const s of n)if(!t.includes(s))return!1;return!0}function qu(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function Qr(r){const e={};return r.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[s,i]=n.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Jr(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function Gp(r,e){const t=new Kp(r,e);return t.subscribe.bind(t)}class Kp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let s;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");Qp(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:n},s.next===void 0&&(s.next=Io),s.error===void 0&&(s.error=Io),s.complete===void 0&&(s.complete=Io);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Qp(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Io(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(r){return r&&r._delegate?r._delegate:r}class qn{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new xp;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Zp(e))try{this.getOrInitializeService({instanceIdentifier:Un})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(e=Un){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Un){return this.instances.has(e)}getOptions(e=Un){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(i);n===u&&a.resolve(s)}return s}onInit(e,t){var n;const s=this.normalizeInstanceIdentifier(t),i=(n=this.onInitCallbacks.get(s))!==null&&n!==void 0?n:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Xp(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Un){return this.component?this.component.multipleInstances?e:Un:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Xp(r){return r===Un?void 0:r}function Zp(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Jp(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(te||(te={}));const tg={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},ng=te.INFO,rg={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},sg=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),s=rg[e];if(s)console[s](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class la{constructor(e){this.name=e,this._logLevel=ng,this._logHandler=sg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const ig=(r,e)=>e.some(t=>r instanceof t);let Bu,$u;function og(){return Bu||(Bu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ag(){return $u||($u=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Tc=new WeakMap,Fo=new WeakMap,bc=new WeakMap,Ao=new WeakMap,ca=new WeakMap;function ug(r){const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("success",i),r.removeEventListener("error",a)},i=()=>{t(mn(r.result)),s()},a=()=>{n(r.error),s()};r.addEventListener("success",i),r.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Tc.set(t,r)}).catch(()=>{}),ca.set(e,r),e}function lg(r){if(Fo.has(r))return;const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",a),r.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",i),r.addEventListener("error",a),r.addEventListener("abort",a)});Fo.set(r,e)}let jo={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Fo.get(r);if(e==="objectStoreNames")return r.objectStoreNames||bc.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return mn(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function cg(r){jo=r(jo)}function hg(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(No(this),e,...t);return bc.set(n,e.sort?e.sort():[e]),mn(n)}:ag().includes(r)?function(...e){return r.apply(No(this),e),mn(Tc.get(this))}:function(...e){return mn(r.apply(No(this),e))}}function dg(r){return typeof r=="function"?hg(r):(r instanceof IDBTransaction&&lg(r),ig(r,og())?new Proxy(r,jo):r)}function mn(r){if(r instanceof IDBRequest)return ug(r);if(Ao.has(r))return Ao.get(r);const e=dg(r);return e!==r&&(Ao.set(r,e),ca.set(e,r)),e}const No=r=>ca.get(r);function fg(r,e,{blocked:t,upgrade:n,blocking:s,terminated:i}={}){const a=indexedDB.open(r,e),u=mn(a);return n&&a.addEventListener("upgradeneeded",l=>{n(mn(a.result),l.oldVersion,l.newVersion,mn(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),u.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const mg=["get","getKey","getAll","getAllKeys","count"],pg=["put","add","delete","clear"],Do=new Map;function Wu(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Do.get(e))return Do.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,s=pg.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(s||mg.includes(t)))return;const i=async function(a,...u){const l=this.transaction(a,s?"readwrite":"readonly");let d=l.store;return n&&(d=d.index(u.shift())),(await Promise.all([d[t](...u),s&&l.done]))[0]};return Do.set(e,i),i}cg(r=>({...r,get:(e,t,n)=>Wu(e,t)||r.get(e,t,n),has:(e,t)=>!!Wu(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(_g(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function _g(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qo="@firebase/app",zu="0.10.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt=new la("@firebase/app"),vg="@firebase/app-compat",yg="@firebase/analytics-compat",Eg="@firebase/analytics",wg="@firebase/app-check-compat",Tg="@firebase/app-check",bg="@firebase/auth",Ig="@firebase/auth-compat",Ag="@firebase/database",Ng="@firebase/data-connect",Dg="@firebase/database-compat",Sg="@firebase/functions",kg="@firebase/functions-compat",Rg="@firebase/installations",Pg="@firebase/installations-compat",Cg="@firebase/messaging",xg="@firebase/messaging-compat",Vg="@firebase/performance",Mg="@firebase/performance-compat",Og="@firebase/remote-config",Ug="@firebase/remote-config-compat",Lg="@firebase/storage",Fg="@firebase/storage-compat",jg="@firebase/firestore",qg="@firebase/vertexai",Bg="@firebase/firestore-compat",$g="firebase",Wg="11.0.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo="[DEFAULT]",zg={[qo]:"fire-core",[vg]:"fire-core-compat",[Eg]:"fire-analytics",[yg]:"fire-analytics-compat",[Tg]:"fire-app-check",[wg]:"fire-app-check-compat",[bg]:"fire-auth",[Ig]:"fire-auth-compat",[Ag]:"fire-rtdb",[Ng]:"fire-data-connect",[Dg]:"fire-rtdb-compat",[Sg]:"fire-fn",[kg]:"fire-fn-compat",[Rg]:"fire-iid",[Pg]:"fire-iid-compat",[Cg]:"fire-fcm",[xg]:"fire-fcm-compat",[Vg]:"fire-perf",[Mg]:"fire-perf-compat",[Og]:"fire-rc",[Ug]:"fire-rc-compat",[Lg]:"fire-gcs",[Fg]:"fire-gcs-compat",[jg]:"fire-fst",[Bg]:"fire-fst-compat",[qg]:"fire-vertex","fire-js":"fire-js",[$g]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=new Map,Yg=new Map,$o=new Map;function Yu(r,e){try{r.container.addComponent(e)}catch(t){Wt.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function dr(r){const e=r.name;if($o.has(e))return Wt.debug(`There were multiple attempts to register component ${e}.`),!1;$o.set(e,r);for(const t of wi.values())Yu(t,r);for(const t of Yg.values())Yu(t,r);return!0}function ha(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Dt(r){return r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},pn=new ys("app","Firebase",Hg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new qn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=Wg;function Ic(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n=Object.assign({name:Bo,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw pn.create("bad-app-name",{appName:String(s)});if(t||(t=Ec()),!t)throw pn.create("no-options");const i=wi.get(s);if(i){if(Ei(t,i.options)&&Ei(n,i.config))return i;throw pn.create("duplicate-app",{appName:s})}const a=new eg(s);for(const l of $o.values())a.addComponent(l);const u=new Gg(t,n,a);return wi.set(s,u),u}function Ac(r=Bo){const e=wi.get(r);if(!e&&r===Bo&&Ec())return Ic();if(!e)throw pn.create("no-app",{appName:r});return e}function gn(r,e,t){var n;let s=(n=zg[r])!==null&&n!==void 0?n:r;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const u=[`Unable to register library "${s}" with version "${e}":`];i&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&u.push("and"),a&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Wt.warn(u.join(" "));return}dr(new qn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg="firebase-heartbeat-database",Qg=1,ls="firebase-heartbeat-store";let So=null;function Nc(){return So||(So=fg(Kg,Qg,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(ls)}catch(t){console.warn(t)}}}}).catch(r=>{throw pn.create("idb-open",{originalErrorMessage:r.message})})),So}async function Jg(r){try{const t=(await Nc()).transaction(ls),n=await t.objectStore(ls).get(Dc(r));return await t.done,n}catch(e){if(e instanceof Kt)Wt.warn(e.message);else{const t=pn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Wt.warn(t.message)}}}async function Hu(r,e){try{const n=(await Nc()).transaction(ls,"readwrite");await n.objectStore(ls).put(e,Dc(r)),await n.done}catch(t){if(t instanceof Kt)Wt.warn(t.message);else{const n=pn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Wt.warn(n.message)}}}function Dc(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg=1024,Zg=30*24*60*60*1e3;class e_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new n_(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Gu();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const u=new Date(a.date).valueOf();return Date.now()-u<=Zg}),this._storage.overwrite(this._heartbeatsCache))}catch(n){Wt.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Gu(),{heartbeatsToSend:n,unsentEntries:s}=t_(this._heartbeatsCache.heartbeats),i=yi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Wt.warn(t),""}}}function Gu(){return new Date().toISOString().substring(0,10)}function t_(r,e=Xg){const t=[];let n=r.slice();for(const s of r){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Ku(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Ku(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class n_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bp()?$p().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Jg(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Hu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Hu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ku(r){return yi(JSON.stringify({version:2,heartbeats:r})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r_(r){dr(new qn("platform-logger",e=>new gg(e),"PRIVATE")),dr(new qn("heartbeat",e=>new e_(e),"PRIVATE")),gn(qo,zu,r),gn(qo,zu,"esm2017"),gn("fire-js","")}r_("");function da(r,e){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(r);s<n.length;s++)e.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(r,n[s])&&(t[n[s]]=r[n[s]]);return t}function Sc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const s_=Sc,kc=new ys("auth","Firebase",Sc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti=new la("@firebase/auth");function i_(r,...e){Ti.logLevel<=te.WARN&&Ti.warn(`Auth (${Tr}): ${r}`,...e)}function oi(r,...e){Ti.logLevel<=te.ERROR&&Ti.error(`Auth (${Tr}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(r,...e){throw fa(r,...e)}function St(r,...e){return fa(r,...e)}function Rc(r,e,t){const n=Object.assign(Object.assign({},s_()),{[e]:t});return new ys("auth","Firebase",n).create(e,{appName:r.name})}function Bt(r){return Rc(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function fa(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return kc.create(r,...e)}function z(r,e,...t){if(!r)throw fa(e,...t)}function Lt(r){const e="INTERNAL ASSERTION FAILED: "+r;throw oi(e),new Error(e)}function zt(r,e){r||Lt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wo(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function o_(){return Qu()==="http:"||Qu()==="https:"}function Qu(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(o_()||Lp()||"connection"in navigator)?navigator.onLine:!0}function u_(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,t){this.shortDelay=e,this.longDelay=t,zt(t>e,"Short delay should be less than long delay!"),this.isMobile=Mp()||Fp()}get(){return a_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(r,e){zt(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Lt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Lt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Lt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_=new ws(3e4,6e4);function Qt(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Jt(r,e,t,n,s={}){return Cc(r,s,async()=>{let i={},a={};n&&(e==="GET"?a=n:i={body:JSON.stringify(n)});const u=Es(Object.assign({key:r.config.apiKey},a)).slice(1),l=await r._getAdditionalHeaders();l["Content-Type"]="application/json",r.languageCode&&(l["X-Firebase-Locale"]=r.languageCode);const d=Object.assign({method:e,headers:l},i);return Up()||(d.referrerPolicy="no-referrer"),Pc.fetch()(xc(r,r.config.apiHost,t,u),d)})}async function Cc(r,e,t){r._canInitEmulator=!1;const n=Object.assign(Object.assign({},l_),e);try{const s=new d_(r),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Xs(r,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const u=i.ok?a.errorMessage:a.error.message,[l,d]=u.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xs(r,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Xs(r,"email-already-in-use",a);if(l==="USER_DISABLED")throw Xs(r,"user-disabled",a);const f=n[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Rc(r,f,d);mt(r,f)}}catch(s){if(s instanceof Kt)throw s;mt(r,"network-request-failed",{message:String(s)})}}async function Ts(r,e,t,n,s={}){const i=await Jt(r,e,t,n,s);return"mfaPendingCredential"in i&&mt(r,"multi-factor-auth-required",{_serverResponse:i}),i}function xc(r,e,t,n){const s=`${e}${t}?${n}`;return r.config.emulator?ma(r.config,s):`${r.config.apiScheme}://${s}`}function h_(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class d_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(St(this.auth,"network-request-failed")),c_.get())})}}function Xs(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const s=St(r,e,n);return s.customData._tokenResponse=t,s}function Ju(r){return r!==void 0&&r.enterprise!==void 0}class f_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return h_(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function m_(r,e){return Jt(r,"GET","/v2/recaptchaConfig",Qt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p_(r,e){return Jt(r,"POST","/v1/accounts:delete",e)}async function Vc(r,e){return Jt(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function g_(r,e=!1){const t=$e(r),n=await t.getIdToken(e),s=pa(n);z(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:n,authTime:rs(ko(s.auth_time)),issuedAtTime:rs(ko(s.iat)),expirationTime:rs(ko(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ko(r){return Number(r)*1e3}function pa(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return oi("JWT malformed, contained fewer than 3 sections"),null;try{const s=vc(t);return s?JSON.parse(s):(oi("Failed to decode base64 JWT payload"),null)}catch(s){return oi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Xu(r){const e=pa(r);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cs(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof Kt&&__(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function __({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=rs(this.lastLoginAt),this.creationTime=rs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bi(r){var e;const t=r.auth,n=await r.getIdToken(),s=await cs(r,Vc(t,{idToken:n}));z(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];r._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Mc(i.providerUserInfo):[],u=E_(r.providerData,a),l=r.isAnonymous,d=!(r.email&&i.passwordHash)&&!(u!=null&&u.length),f=l?d:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:u,metadata:new zo(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(r,p)}async function y_(r){const e=$e(r);await bi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function E_(r,e){return[...r.filter(n=>!e.some(s=>s.providerId===n.providerId)),...e]}function Mc(r){return r.map(e=>{var{providerId:t}=e,n=da(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w_(r,e){const t=await Cc(r,{},async()=>{const n=Es({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=r.config,a=xc(r,s,"/v1/token",`key=${i}`),u=await r._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",Pc.fetch()(a,{method:"POST",headers:u,body:n})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function T_(r,e){return Jt(r,"POST","/v2/accounts:revokeToken",Qt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Xu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){z(e.length!==0,"internal-error");const t=Xu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:i}=await w_(e,t);this.updateTokensAndExpiration(n,s,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:s,expirationTime:i}=t,a=new ur;return n&&(z(typeof n=="string","internal-error",{appName:e}),a.refreshToken=n),s&&(z(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(z(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ur,this.toJSON())}_performRefresh(){return Lt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(r,e){z(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Ft{constructor(e){var{uid:t,auth:n,stsTokenManager:s}=e,i=da(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new v_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new zo(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await cs(this,this.stsTokenManager.getToken(this.auth,e));return z(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return g_(this,e)}reload(){return y_(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ft(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await bi(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Dt(this.auth.app))return Promise.reject(Bt(this.auth));const e=await this.getIdToken();return await cs(this,p_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,s,i,a,u,l,d,f;const p=(n=t.displayName)!==null&&n!==void 0?n:void 0,w=(s=t.email)!==null&&s!==void 0?s:void 0,A=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,x=(a=t.photoURL)!==null&&a!==void 0?a:void 0,O=(u=t.tenantId)!==null&&u!==void 0?u:void 0,S=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,L=(d=t.createdAt)!==null&&d!==void 0?d:void 0,M=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:q,emailVerified:K,isAnonymous:fe,providerData:re,stsTokenManager:b}=t;z(q&&b,e,"internal-error");const g=ur.fromJSON(this.name,b);z(typeof q=="string",e,"internal-error"),un(p,e.name),un(w,e.name),z(typeof K=="boolean",e,"internal-error"),z(typeof fe=="boolean",e,"internal-error"),un(A,e.name),un(x,e.name),un(O,e.name),un(S,e.name),un(L,e.name),un(M,e.name);const v=new Ft({uid:q,auth:e,email:w,emailVerified:K,displayName:p,isAnonymous:fe,photoURL:x,phoneNumber:A,tenantId:O,stsTokenManager:g,createdAt:L,lastLoginAt:M});return re&&Array.isArray(re)&&(v.providerData=re.map(T=>Object.assign({},T))),S&&(v._redirectEventId=S),v}static async _fromIdTokenResponse(e,t,n=!1){const s=new ur;s.updateFromServerResponse(t);const i=new Ft({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await bi(i),i}static async _fromGetAccountInfoResponse(e,t,n){const s=t.users[0];z(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Mc(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),u=new ur;u.updateFromIdToken(n);const l=new Ft({uid:s.localId,auth:e,stsTokenManager:u,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new zo(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,d),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu=new Map;function jt(r){zt(r instanceof Function,"Expected a class definition");let e=Zu.get(r);return e?(zt(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Zu.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Oc.type="NONE";const el=Oc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(r,e,t){return`firebase:${r}:${e}:${t}`}class lr{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:s,name:i}=this.auth;this.fullUserKey=ai(this.userKey,s.apiKey,i),this.fullPersistenceKey=ai("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ft._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new lr(jt(el),e,n);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||jt(el);const a=ai(n,e.config.apiKey,e.name);let u=null;for(const d of t)try{const f=await d._get(a);if(f){const p=Ft._fromJSON(e,f);d!==i&&(u=p),i=d;break}}catch{}const l=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new lr(i,e,n):(i=l[0],u&&await i._set(a,u.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new lr(i,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(jc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Uc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Bc(e))return"Blackberry";if($c(e))return"Webos";if(Lc(e))return"Safari";if((e.includes("chrome/")||Fc(e))&&!e.includes("edge/"))return"Chrome";if(qc(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function Uc(r=Je()){return/firefox\//i.test(r)}function Lc(r=Je()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Fc(r=Je()){return/crios\//i.test(r)}function jc(r=Je()){return/iemobile/i.test(r)}function qc(r=Je()){return/android/i.test(r)}function Bc(r=Je()){return/blackberry/i.test(r)}function $c(r=Je()){return/webos/i.test(r)}function ga(r=Je()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function b_(r=Je()){var e;return ga(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function I_(){return jp()&&document.documentMode===10}function Wc(r=Je()){return ga(r)||qc(r)||$c(r)||Bc(r)||/windows phone/i.test(r)||jc(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(r,e=[]){let t;switch(r){case"Browser":t=tl(Je());break;case"Worker":t=`${tl(Je())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Tr}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=i=>new Promise((a,u)=>{try{const l=e(i);a(l)}catch(l){u(l)}});n.onAbort=t,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N_(r,e={}){return Jt(r,"GET","/v2/passwordPolicy",Qt(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_=6;class S_{constructor(e){var t,n,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:D_,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,s,i,a,u;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(n=l.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(u=l.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),l}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let s=0;s<e.length;s++)n=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(e,t,n,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new nl(this),this.idTokenSubscription=new nl(this),this.beforeStateQueue=new A_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=kc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=jt(t)),this._initializationPromise=this.queue(async()=>{var n,s;if(!this._deleted&&(this.persistenceManager=await lr.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Vc(this,{idToken:e}),n=await Ft._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Dt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(u,u))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,u=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===u)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await bi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=u_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Dt(this.app))return Promise.reject(Bt(this));const t=e?$e(e):null;return t&&z(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Dt(this.app)?Promise.reject(Bt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Dt(this.app)?Promise.reject(Bt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(jt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await N_(this),t=new S_(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ys("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await T_(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&jt(e)||this._popupRedirectResolver;z(t,this,"argument-error"),this.redirectPersistenceManager=await lr.create(this,[jt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(u,this,"internal-error"),u.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,n,s);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=zc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&i_(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function bn(r){return $e(r)}class nl{constructor(e){this.auth=e,this.observer=null,this.addObserver=Gp(t=>this.observer=t)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function R_(r){Fi=r}function Yc(r){return Fi.loadJS(r)}function P_(){return Fi.recaptchaEnterpriseScript}function C_(){return Fi.gapiScript}function x_(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class V_{constructor(){this.enterprise=new M_}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class M_{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const O_="recaptcha-enterprise",Hc="NO_RECAPTCHA";class U_{constructor(e){this.type=O_,this.auth=bn(e)}async verify(e="verify",t=!1){async function n(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,u)=>{m_(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{const d=new f_(l);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,a(d.siteKey)}}).catch(l=>{u(l)})})}function s(i,a,u){const l=window.grecaptcha;Ju(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(d=>{a(d)}).catch(()=>{a(Hc)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new V_().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{n(this.auth).then(u=>{if(!t&&Ju(window.grecaptcha))s(u,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=P_();l.length!==0&&(l+=u),Yc(l).then(()=>{s(u,i,a)}).catch(d=>{a(d)})}}).catch(u=>{a(u)})})}}async function rl(r,e,t,n=!1,s=!1){const i=new U_(r);let a;if(s)a=Hc;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const u=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in u){const l=u.phoneEnrollmentInfo.phoneNumber,d=u.phoneEnrollmentInfo.recaptchaToken;Object.assign(u,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in u){const l=u.phoneSignInInfo.recaptchaToken;Object.assign(u,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return u}return n?Object.assign(u,{captchaResp:a}):Object.assign(u,{captchaResponse:a}),Object.assign(u,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(u,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),u}async function Ii(r,e,t,n,s){var i;if(!((i=r._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await rl(r,e,t,t==="getOobCode");return n(r,a)}else return n(r,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const u=await rl(r,e,t,t==="getOobCode");return n(r,u)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L_(r,e){const t=ha(r,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Ei(i,e??{}))return s;mt(s,"already-initialized")}return t.initialize({options:e})}function F_(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(jt);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function j_(r,e,t){const n=bn(r);z(n._canInitEmulator,n,"emulator-config-failed"),z(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const s=!1,i=Gc(e),{host:a,port:u}=q_(e),l=u===null?"":`:${u}`;n.config.emulator={url:`${i}//${a}${l}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:a,port:u,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),B_()}function Gc(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function q_(r){const e=Gc(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(n);if(s){const i=s[1];return{host:i,port:sl(n.substr(i.length+1))}}else{const[i,a]=n.split(":");return{host:i,port:sl(a)}}}function sl(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function B_(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Lt("not implemented")}_getIdTokenResponse(e){return Lt("not implemented")}_linkToIdToken(e,t){return Lt("not implemented")}_getReauthenticationResolver(e){return Lt("not implemented")}}async function $_(r,e){return Jt(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W_(r,e){return Ts(r,"POST","/v1/accounts:signInWithPassword",Qt(r,e))}async function z_(r,e){return Jt(r,"POST","/v1/accounts:sendOobCode",Qt(r,e))}async function Y_(r,e){return z_(r,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H_(r,e){return Ts(r,"POST","/v1/accounts:signInWithEmailLink",Qt(r,e))}async function G_(r,e){return Ts(r,"POST","/v1/accounts:signInWithEmailLink",Qt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs extends _a{constructor(e,t,n,s=null){super("password",n),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new hs(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new hs(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ii(e,t,"signInWithPassword",W_);case"emailLink":return H_(e,{email:this._email,oobCode:this._password});default:mt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ii(e,n,"signUpPassword",$_);case"emailLink":return G_(e,{idToken:t,email:this._email,oobCode:this._password});default:mt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cr(r,e){return Ts(r,"POST","/v1/accounts:signInWithIdp",Qt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K_="http://localhost";class Bn extends _a{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Bn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):mt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:s}=t,i=da(t,["providerId","signInMethod"]);if(!n||!s)return null;const a=new Bn(n,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return cr(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,cr(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,cr(e,t)}buildRequest(){const e={requestUri:K_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Es(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q_(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function J_(r){const e=Qr(Jr(r)).link,t=e?Qr(Jr(e)).deep_link_id:null,n=Qr(Jr(r)).deep_link_id;return(n?Qr(Jr(n)).link:null)||n||t||e||r}class va{constructor(e){var t,n,s,i,a,u;const l=Qr(Jr(e)),d=(t=l.apiKey)!==null&&t!==void 0?t:null,f=(n=l.oobCode)!==null&&n!==void 0?n:null,p=Q_((s=l.mode)!==null&&s!==void 0?s:null);z(d&&f&&p,"argument-error"),this.apiKey=d,this.operation=p,this.code=f,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=l.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(u=l.tenantId)!==null&&u!==void 0?u:null}static parseLink(e){const t=J_(e);try{return new va(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(){this.providerId=br.PROVIDER_ID}static credential(e,t){return hs._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=va.parseLink(t);return z(n,"argument-error"),hs._fromEmailAndCode(e,n.code,n.tenantId)}}br.PROVIDER_ID="password";br.EMAIL_PASSWORD_SIGN_IN_METHOD="password";br.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs extends Kc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends bs{constructor(){super("facebook.com")}static credential(e){return Bn._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ln.credential(e.oauthAccessToken)}catch{return null}}}ln.FACEBOOK_SIGN_IN_METHOD="facebook.com";ln.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn extends bs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Bn._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return cn.credentialFromTaggedObject(e)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return cn.credential(t,n)}catch{return null}}}cn.GOOGLE_SIGN_IN_METHOD="google.com";cn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn extends bs{constructor(){super("github.com")}static credential(e){return Bn._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hn.credential(e.oauthAccessToken)}catch{return null}}}hn.GITHUB_SIGN_IN_METHOD="github.com";hn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends bs{constructor(){super("twitter.com")}static credential(e,t){return Bn._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return dn.credential(t,n)}catch{return null}}}dn.TWITTER_SIGN_IN_METHOD="twitter.com";dn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X_(r,e){return Ts(r,"POST","/v1/accounts:signUp",Qt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,s=!1){const i=await Ft._fromIdTokenResponse(e,n,s),a=il(n);return new $n({user:i,providerId:a,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const s=il(n);return new $n({user:e,providerId:s,_tokenResponse:n,operationType:t})}}function il(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai extends Kt{constructor(e,t,n,s){var i;super(t.code,t.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,Ai.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,s){return new Ai(e,t,n,s)}}function Qc(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ai._fromErrorAndOperation(r,i,e,n):i})}async function Z_(r,e,t=!1){const n=await cs(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return $n._forOperation(r,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ev(r,e,t=!1){const{auth:n}=r;if(Dt(n.app))return Promise.reject(Bt(n));const s="reauthenticate";try{const i=await cs(r,Qc(n,s,e,r),t);z(i.idToken,n,"internal-error");const a=pa(i.idToken);z(a,n,"internal-error");const{sub:u}=a;return z(r.uid===u,n,"user-mismatch"),$n._forOperation(r,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&mt(n,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jc(r,e,t=!1){if(Dt(r.app))return Promise.reject(Bt(r));const n="signIn",s=await Qc(r,n,e),i=await $n._fromIdTokenResponse(r,n,s);return t||await r._updateCurrentUser(i.user),i}async function tv(r,e){return Jc(bn(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xc(r){const e=bn(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function nv(r,e,t){const n=bn(r);await Ii(n,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Y_)}async function Zs(r,e,t){if(Dt(r.app))return Promise.reject(Bt(r));const n=bn(r),a=await Ii(n,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",X_).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Xc(r),l}),u=await $n._fromIdTokenResponse(n,"signIn",a);return await n._updateCurrentUser(u.user),u}function rv(r,e,t){return Dt(r.app)?Promise.reject(Bt(r)):tv($e(r),br.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&Xc(r),n})}function sv(r,e,t,n){return $e(r).onIdTokenChanged(e,t,n)}function iv(r,e,t){return $e(r).beforeAuthStateChanged(e,t)}function ov(r){return $e(r).signOut()}const Ni="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ni,"1"),this.storage.removeItem(Ni),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av=1e3,uv=10;class eh extends Zc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Wc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),s=this.localCache[t];n!==s&&e(t,s,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,u,l)=>{this.notifyListeners(a,l)});return}const n=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(n);!t&&this.localCache[n]===a||this.notifyListeners(n,a)},i=this.storage.getItem(n);I_()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,uv):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},av)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}eh.type="LOCAL";const lv=eh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th extends Zc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}th.type="SESSION";const nh=th;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cv(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const n=new ji(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const u=Array.from(a).map(async d=>d(t.origin,i)),l=await cv(u);t.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ji.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((u,l)=>{const d=ya("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},n);a={messageChannel:s,onMessage(p){const w=p;if(w.data.eventId===d)switch(w.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),u(w.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(){return window}function dv(r){kt().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(){return typeof kt().WorkerGlobalScope<"u"&&typeof kt().importScripts=="function"}async function fv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mv(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function pv(){return rh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh="firebaseLocalStorageDb",gv=1,Di="firebaseLocalStorage",ih="fbase_key";class Is{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function qi(r,e){return r.transaction([Di],e?"readwrite":"readonly").objectStore(Di)}function _v(){const r=indexedDB.deleteDatabase(sh);return new Is(r).toPromise()}function Yo(){const r=indexedDB.open(sh,gv);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(Di,{keyPath:ih})}catch(s){t(s)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(Di)?e(n):(n.close(),await _v(),e(await Yo()))})})}async function ol(r,e,t){const n=qi(r,!0).put({[ih]:e,value:t});return new Is(n).toPromise()}async function vv(r,e){const t=qi(r,!1).get(e),n=await new Is(t).toPromise();return n===void 0?null:n.value}function al(r,e){const t=qi(r,!0).delete(e);return new Is(t).toPromise()}const yv=800,Ev=3;class oh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>Ev)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ji._getInstance(pv()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await fv(),!this.activeServiceWorker)return;this.sender=new hv(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((t=n[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||mv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Yo();return await ol(e,Ni,"1"),await al(e,Ni),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>ol(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>vv(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>al(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=qi(s,!1).getAll();return new Is(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}oh.type="LOCAL";const wv=oh;new ws(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tv(r,e){return e?jt(e):(z(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea extends _a{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return cr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return cr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return cr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function bv(r){return Jc(r.auth,new Ea(r),r.bypassAuthState)}function Iv(r){const{auth:e,user:t}=r;return z(t,e,"internal-error"),ev(t,new Ea(r),r.bypassAuthState)}async function Av(r){const{auth:e,user:t}=r;return z(t,e,"internal-error"),Z_(t,new Ea(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e,t,n,s,i=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:s,tenantId:i,error:a,type:u}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bv;case"linkViaPopup":case"linkViaRedirect":return Av;case"reauthViaPopup":case"reauthViaRedirect":return Iv;default:mt(this.auth,"internal-error")}}resolve(e){zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv=new ws(2e3,1e4);class or extends ah{constructor(e,t,n,s,i){super(e,t,s,i),this.provider=n,this.authWindow=null,this.pollId=null,or.currentPopupAction&&or.currentPopupAction.cancel(),or.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){zt(this.filter.length===1,"Popup operations only handle one event");const e=ya();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(St(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(St(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,or.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(St(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Nv.get())};e()}}or.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dv="pendingRedirect",ui=new Map;class Sv extends ah{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=ui.get(this.auth._key());if(!e){try{const n=await kv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}ui.set(this.auth._key(),e)}return this.bypassAuthState||ui.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kv(r,e){const t=Cv(e),n=Pv(r);if(!await n._isAvailable())return!1;const s=await n._get(t)==="true";return await n._remove(t),s}function Rv(r,e){ui.set(r._key(),e)}function Pv(r){return jt(r._redirectPersistence)}function Cv(r){return ai(Dv,r.config.apiKey,r.name)}async function xv(r,e,t=!1){if(Dt(r.app))return Promise.reject(Bt(r));const n=bn(r),s=Tv(n,e),a=await new Sv(n,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vv=10*60*1e3;class Mv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ov(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!uh(e)){const s=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(St(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Vv&&this.cachedEventUids.clear(),this.cachedEventUids.has(ul(e))}saveEventToCache(e){this.cachedEventUids.add(ul(e)),this.lastProcessedEventTime=Date.now()}}function ul(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function uh({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ov(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return uh(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uv(r,e={}){return Jt(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Fv=/^https?/;async function jv(r){if(r.config.emulator)return;const{authorizedDomains:e}=await Uv(r);for(const t of e)try{if(qv(t))return}catch{}mt(r,"unauthorized-domain")}function qv(r){const e=Wo(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const a=new URL(r);return a.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===n}if(!Fv.test(t))return!1;if(Lv.test(r))return n===r;const s=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv=new ws(3e4,6e4);function ll(){const r=kt().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function $v(r){return new Promise((e,t)=>{var n,s,i;function a(){ll(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ll(),t(St(r,"network-request-failed"))},timeout:Bv.get()})}if(!((s=(n=kt().gapi)===null||n===void 0?void 0:n.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=kt().gapi)===null||i===void 0)&&i.load)a();else{const u=x_("iframefcb");return kt()[u]=()=>{gapi.load?a():t(St(r,"network-request-failed"))},Yc(`${C_()}?onload=${u}`).catch(l=>t(l))}}).catch(e=>{throw li=null,e})}let li=null;function Wv(r){return li=li||$v(r),li}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zv=new ws(5e3,15e3),Yv="__/auth/iframe",Hv="emulator/auth/iframe",Gv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Kv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Qv(r){const e=r.config;z(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?ma(e,Hv):`https://${r.config.authDomain}/${Yv}`,n={apiKey:e.apiKey,appName:r.name,v:Tr},s=Kv.get(r.config.apiHost);s&&(n.eid=s);const i=r._getFrameworks();return i.length&&(n.fw=i.join(",")),`${t}?${Es(n).slice(1)}`}async function Jv(r){const e=await Wv(r),t=kt().gapi;return z(t,r,"internal-error"),e.open({where:document.body,url:Qv(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Gv,dontclear:!0},n=>new Promise(async(s,i)=>{await n.restyle({setHideOnLeave:!1});const a=St(r,"network-request-failed"),u=kt().setTimeout(()=>{i(a)},zv.get());function l(){kt().clearTimeout(u),s(n)}n.ping(l).then(l,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Zv=500,ey=600,ty="_blank",ny="http://localhost";class cl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ry(r,e,t,n=Zv,s=ey){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString();let u="";const l=Object.assign(Object.assign({},Xv),{width:n.toString(),height:s.toString(),top:i,left:a}),d=Je().toLowerCase();t&&(u=Fc(d)?ty:t),Uc(d)&&(e=e||ny,l.scrollbars="yes");const f=Object.entries(l).reduce((w,[A,x])=>`${w}${A}=${x},`,"");if(b_(d)&&u!=="_self")return sy(e||"",u),new cl(null);const p=window.open(e||"",u,f);z(p,r,"popup-blocked");try{p.focus()}catch{}return new cl(p)}function sy(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy="__/auth/handler",oy="emulator/auth/handler",ay=encodeURIComponent("fac");async function hl(r,e,t,n,s,i){z(r.config.authDomain,r,"auth-domain-config-required"),z(r.config.apiKey,r,"invalid-api-key");const a={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:Tr,eventId:s};if(e instanceof Kc){e.setDefaultLanguage(r.languageCode),a.providerId=e.providerId||"",Hp(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))a[f]=p}if(e instanceof bs){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(a.scopes=f.join(","))}r.tenantId&&(a.tid=r.tenantId);const u=a;for(const f of Object.keys(u))u[f]===void 0&&delete u[f];const l=await r._getAppCheckToken(),d=l?`#${ay}=${encodeURIComponent(l)}`:"";return`${uy(r)}?${Es(u).slice(1)}${d}`}function uy({config:r}){return r.emulator?ma(r,oy):`https://${r.authDomain}/${iy}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro="webStorageSupport";class ly{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nh,this._completeRedirectFn=xv,this._overrideRedirectResult=Rv}async _openPopup(e,t,n,s){var i;zt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await hl(e,t,n,Wo(),s);return ry(e,a,ya())}async _openRedirect(e,t,n,s){await this._originValidation(e);const i=await hl(e,t,n,Wo(),s);return dv(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(zt(i,"If manager is not set, promise should be"),i)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Jv(e),n=new Mv(e);return t.register("authEvent",s=>(z(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:n.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ro,{type:Ro},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ro];a!==void 0&&t(!!a),mt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=jv(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Wc()||Lc()||ga()}}const cy=ly;var dl="@firebase/auth",fl="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dy(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fy(r){dr(new qn("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:u}=n.options;z(a&&!a.includes(":"),"invalid-api-key",{appName:n.name});const l={apiKey:a,authDomain:u,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zc(r)},d=new k_(n,s,i,l);return F_(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),dr(new qn("auth-internal",e=>{const t=bn(e.getProvider("auth").getImmediate());return(n=>new hy(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),gn(dl,fl,dy(r)),gn(dl,fl,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const my=5*60,py=wc("authIdTokenMaxAge")||my;let ml=null;const gy=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>py)return;const s=t==null?void 0:t.token;ml!==s&&(ml=s,await fetch(r,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function _y(r=Ac()){const e=ha(r,"auth");if(e.isInitialized())return e.getImmediate();const t=L_(r,{popupRedirectResolver:cy,persistence:[wv,lv,nh]}),n=wc("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(n,location.origin);if(location.origin===i.origin){const a=gy(i.toString());iv(t,a,()=>a(t.currentUser)),sv(t,u=>a(u))}}const s=yc("auth");return s&&j_(t,`http://${s}`),t}function vy(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}R_({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=s=>{const i=St("internal-error");i.customData=s,t(i)},n.type="text/javascript",n.charset="UTF-8",vy().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fy("Browser");var yy="firebase",Ey="11.0.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gn(yy,Ey,"app");var pl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jn,lh;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,g){function v(){}v.prototype=g.prototype,b.D=g.prototype,b.prototype=new v,b.prototype.constructor=b,b.C=function(T,I,N){for(var _=Array(arguments.length-2),he=2;he<arguments.length;he++)_[he-2]=arguments[he];return g.prototype[I].apply(T,_)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,g,v){v||(v=0);var T=Array(16);if(typeof g=="string")for(var I=0;16>I;++I)T[I]=g.charCodeAt(v++)|g.charCodeAt(v++)<<8|g.charCodeAt(v++)<<16|g.charCodeAt(v++)<<24;else for(I=0;16>I;++I)T[I]=g[v++]|g[v++]<<8|g[v++]<<16|g[v++]<<24;g=b.g[0],v=b.g[1],I=b.g[2];var N=b.g[3],_=g+(N^v&(I^N))+T[0]+3614090360&4294967295;g=v+(_<<7&4294967295|_>>>25),_=N+(I^g&(v^I))+T[1]+3905402710&4294967295,N=g+(_<<12&4294967295|_>>>20),_=I+(v^N&(g^v))+T[2]+606105819&4294967295,I=N+(_<<17&4294967295|_>>>15),_=v+(g^I&(N^g))+T[3]+3250441966&4294967295,v=I+(_<<22&4294967295|_>>>10),_=g+(N^v&(I^N))+T[4]+4118548399&4294967295,g=v+(_<<7&4294967295|_>>>25),_=N+(I^g&(v^I))+T[5]+1200080426&4294967295,N=g+(_<<12&4294967295|_>>>20),_=I+(v^N&(g^v))+T[6]+2821735955&4294967295,I=N+(_<<17&4294967295|_>>>15),_=v+(g^I&(N^g))+T[7]+4249261313&4294967295,v=I+(_<<22&4294967295|_>>>10),_=g+(N^v&(I^N))+T[8]+1770035416&4294967295,g=v+(_<<7&4294967295|_>>>25),_=N+(I^g&(v^I))+T[9]+2336552879&4294967295,N=g+(_<<12&4294967295|_>>>20),_=I+(v^N&(g^v))+T[10]+4294925233&4294967295,I=N+(_<<17&4294967295|_>>>15),_=v+(g^I&(N^g))+T[11]+2304563134&4294967295,v=I+(_<<22&4294967295|_>>>10),_=g+(N^v&(I^N))+T[12]+1804603682&4294967295,g=v+(_<<7&4294967295|_>>>25),_=N+(I^g&(v^I))+T[13]+4254626195&4294967295,N=g+(_<<12&4294967295|_>>>20),_=I+(v^N&(g^v))+T[14]+2792965006&4294967295,I=N+(_<<17&4294967295|_>>>15),_=v+(g^I&(N^g))+T[15]+1236535329&4294967295,v=I+(_<<22&4294967295|_>>>10),_=g+(I^N&(v^I))+T[1]+4129170786&4294967295,g=v+(_<<5&4294967295|_>>>27),_=N+(v^I&(g^v))+T[6]+3225465664&4294967295,N=g+(_<<9&4294967295|_>>>23),_=I+(g^v&(N^g))+T[11]+643717713&4294967295,I=N+(_<<14&4294967295|_>>>18),_=v+(N^g&(I^N))+T[0]+3921069994&4294967295,v=I+(_<<20&4294967295|_>>>12),_=g+(I^N&(v^I))+T[5]+3593408605&4294967295,g=v+(_<<5&4294967295|_>>>27),_=N+(v^I&(g^v))+T[10]+38016083&4294967295,N=g+(_<<9&4294967295|_>>>23),_=I+(g^v&(N^g))+T[15]+3634488961&4294967295,I=N+(_<<14&4294967295|_>>>18),_=v+(N^g&(I^N))+T[4]+3889429448&4294967295,v=I+(_<<20&4294967295|_>>>12),_=g+(I^N&(v^I))+T[9]+568446438&4294967295,g=v+(_<<5&4294967295|_>>>27),_=N+(v^I&(g^v))+T[14]+3275163606&4294967295,N=g+(_<<9&4294967295|_>>>23),_=I+(g^v&(N^g))+T[3]+4107603335&4294967295,I=N+(_<<14&4294967295|_>>>18),_=v+(N^g&(I^N))+T[8]+1163531501&4294967295,v=I+(_<<20&4294967295|_>>>12),_=g+(I^N&(v^I))+T[13]+2850285829&4294967295,g=v+(_<<5&4294967295|_>>>27),_=N+(v^I&(g^v))+T[2]+4243563512&4294967295,N=g+(_<<9&4294967295|_>>>23),_=I+(g^v&(N^g))+T[7]+1735328473&4294967295,I=N+(_<<14&4294967295|_>>>18),_=v+(N^g&(I^N))+T[12]+2368359562&4294967295,v=I+(_<<20&4294967295|_>>>12),_=g+(v^I^N)+T[5]+4294588738&4294967295,g=v+(_<<4&4294967295|_>>>28),_=N+(g^v^I)+T[8]+2272392833&4294967295,N=g+(_<<11&4294967295|_>>>21),_=I+(N^g^v)+T[11]+1839030562&4294967295,I=N+(_<<16&4294967295|_>>>16),_=v+(I^N^g)+T[14]+4259657740&4294967295,v=I+(_<<23&4294967295|_>>>9),_=g+(v^I^N)+T[1]+2763975236&4294967295,g=v+(_<<4&4294967295|_>>>28),_=N+(g^v^I)+T[4]+1272893353&4294967295,N=g+(_<<11&4294967295|_>>>21),_=I+(N^g^v)+T[7]+4139469664&4294967295,I=N+(_<<16&4294967295|_>>>16),_=v+(I^N^g)+T[10]+3200236656&4294967295,v=I+(_<<23&4294967295|_>>>9),_=g+(v^I^N)+T[13]+681279174&4294967295,g=v+(_<<4&4294967295|_>>>28),_=N+(g^v^I)+T[0]+3936430074&4294967295,N=g+(_<<11&4294967295|_>>>21),_=I+(N^g^v)+T[3]+3572445317&4294967295,I=N+(_<<16&4294967295|_>>>16),_=v+(I^N^g)+T[6]+76029189&4294967295,v=I+(_<<23&4294967295|_>>>9),_=g+(v^I^N)+T[9]+3654602809&4294967295,g=v+(_<<4&4294967295|_>>>28),_=N+(g^v^I)+T[12]+3873151461&4294967295,N=g+(_<<11&4294967295|_>>>21),_=I+(N^g^v)+T[15]+530742520&4294967295,I=N+(_<<16&4294967295|_>>>16),_=v+(I^N^g)+T[2]+3299628645&4294967295,v=I+(_<<23&4294967295|_>>>9),_=g+(I^(v|~N))+T[0]+4096336452&4294967295,g=v+(_<<6&4294967295|_>>>26),_=N+(v^(g|~I))+T[7]+1126891415&4294967295,N=g+(_<<10&4294967295|_>>>22),_=I+(g^(N|~v))+T[14]+2878612391&4294967295,I=N+(_<<15&4294967295|_>>>17),_=v+(N^(I|~g))+T[5]+4237533241&4294967295,v=I+(_<<21&4294967295|_>>>11),_=g+(I^(v|~N))+T[12]+1700485571&4294967295,g=v+(_<<6&4294967295|_>>>26),_=N+(v^(g|~I))+T[3]+2399980690&4294967295,N=g+(_<<10&4294967295|_>>>22),_=I+(g^(N|~v))+T[10]+4293915773&4294967295,I=N+(_<<15&4294967295|_>>>17),_=v+(N^(I|~g))+T[1]+2240044497&4294967295,v=I+(_<<21&4294967295|_>>>11),_=g+(I^(v|~N))+T[8]+1873313359&4294967295,g=v+(_<<6&4294967295|_>>>26),_=N+(v^(g|~I))+T[15]+4264355552&4294967295,N=g+(_<<10&4294967295|_>>>22),_=I+(g^(N|~v))+T[6]+2734768916&4294967295,I=N+(_<<15&4294967295|_>>>17),_=v+(N^(I|~g))+T[13]+1309151649&4294967295,v=I+(_<<21&4294967295|_>>>11),_=g+(I^(v|~N))+T[4]+4149444226&4294967295,g=v+(_<<6&4294967295|_>>>26),_=N+(v^(g|~I))+T[11]+3174756917&4294967295,N=g+(_<<10&4294967295|_>>>22),_=I+(g^(N|~v))+T[2]+718787259&4294967295,I=N+(_<<15&4294967295|_>>>17),_=v+(N^(I|~g))+T[9]+3951481745&4294967295,b.g[0]=b.g[0]+g&4294967295,b.g[1]=b.g[1]+(I+(_<<21&4294967295|_>>>11))&4294967295,b.g[2]=b.g[2]+I&4294967295,b.g[3]=b.g[3]+N&4294967295}n.prototype.u=function(b,g){g===void 0&&(g=b.length);for(var v=g-this.blockSize,T=this.B,I=this.h,N=0;N<g;){if(I==0)for(;N<=v;)s(this,b,N),N+=this.blockSize;if(typeof b=="string"){for(;N<g;)if(T[I++]=b.charCodeAt(N++),I==this.blockSize){s(this,T),I=0;break}}else for(;N<g;)if(T[I++]=b[N++],I==this.blockSize){s(this,T),I=0;break}}this.h=I,this.o+=g},n.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var g=1;g<b.length-8;++g)b[g]=0;var v=8*this.o;for(g=b.length-8;g<b.length;++g)b[g]=v&255,v/=256;for(this.u(b),b=Array(16),g=v=0;4>g;++g)for(var T=0;32>T;T+=8)b[v++]=this.g[g]>>>T&255;return b};function i(b,g){var v=u;return Object.prototype.hasOwnProperty.call(v,b)?v[b]:v[b]=g(b)}function a(b,g){this.h=g;for(var v=[],T=!0,I=b.length-1;0<=I;I--){var N=b[I]|0;T&&N==g||(v[I]=N,T=!1)}this.g=v}var u={};function l(b){return-128<=b&&128>b?i(b,function(g){return new a([g|0],0>g?-1:0)}):new a([b|0],0>b?-1:0)}function d(b){if(isNaN(b)||!isFinite(b))return p;if(0>b)return S(d(-b));for(var g=[],v=1,T=0;b>=v;T++)g[T]=b/v|0,v*=4294967296;return new a(g,0)}function f(b,g){if(b.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(b.charAt(0)=="-")return S(f(b.substring(1),g));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=d(Math.pow(g,8)),T=p,I=0;I<b.length;I+=8){var N=Math.min(8,b.length-I),_=parseInt(b.substring(I,I+N),g);8>N?(N=d(Math.pow(g,N)),T=T.j(N).add(d(_))):(T=T.j(v),T=T.add(d(_)))}return T}var p=l(0),w=l(1),A=l(16777216);r=a.prototype,r.m=function(){if(O(this))return-S(this).m();for(var b=0,g=1,v=0;v<this.g.length;v++){var T=this.i(v);b+=(0<=T?T:4294967296+T)*g,g*=4294967296}return b},r.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(x(this))return"0";if(O(this))return"-"+S(this).toString(b);for(var g=d(Math.pow(b,6)),v=this,T="";;){var I=K(v,g).g;v=L(v,I.j(g));var N=((0<v.g.length?v.g[0]:v.h)>>>0).toString(b);if(v=I,x(v))return N+T;for(;6>N.length;)N="0"+N;T=N+T}},r.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function x(b){if(b.h!=0)return!1;for(var g=0;g<b.g.length;g++)if(b.g[g]!=0)return!1;return!0}function O(b){return b.h==-1}r.l=function(b){return b=L(this,b),O(b)?-1:x(b)?0:1};function S(b){for(var g=b.g.length,v=[],T=0;T<g;T++)v[T]=~b.g[T];return new a(v,~b.h).add(w)}r.abs=function(){return O(this)?S(this):this},r.add=function(b){for(var g=Math.max(this.g.length,b.g.length),v=[],T=0,I=0;I<=g;I++){var N=T+(this.i(I)&65535)+(b.i(I)&65535),_=(N>>>16)+(this.i(I)>>>16)+(b.i(I)>>>16);T=_>>>16,N&=65535,_&=65535,v[I]=_<<16|N}return new a(v,v[v.length-1]&-2147483648?-1:0)};function L(b,g){return b.add(S(g))}r.j=function(b){if(x(this)||x(b))return p;if(O(this))return O(b)?S(this).j(S(b)):S(S(this).j(b));if(O(b))return S(this.j(S(b)));if(0>this.l(A)&&0>b.l(A))return d(this.m()*b.m());for(var g=this.g.length+b.g.length,v=[],T=0;T<2*g;T++)v[T]=0;for(T=0;T<this.g.length;T++)for(var I=0;I<b.g.length;I++){var N=this.i(T)>>>16,_=this.i(T)&65535,he=b.i(I)>>>16,ie=b.i(I)&65535;v[2*T+2*I]+=_*ie,M(v,2*T+2*I),v[2*T+2*I+1]+=N*ie,M(v,2*T+2*I+1),v[2*T+2*I+1]+=_*he,M(v,2*T+2*I+1),v[2*T+2*I+2]+=N*he,M(v,2*T+2*I+2)}for(T=0;T<g;T++)v[T]=v[2*T+1]<<16|v[2*T];for(T=g;T<2*g;T++)v[T]=0;return new a(v,0)};function M(b,g){for(;(b[g]&65535)!=b[g];)b[g+1]+=b[g]>>>16,b[g]&=65535,g++}function q(b,g){this.g=b,this.h=g}function K(b,g){if(x(g))throw Error("division by zero");if(x(b))return new q(p,p);if(O(b))return g=K(S(b),g),new q(S(g.g),S(g.h));if(O(g))return g=K(b,S(g)),new q(S(g.g),g.h);if(30<b.g.length){if(O(b)||O(g))throw Error("slowDivide_ only works with positive integers.");for(var v=w,T=g;0>=T.l(b);)v=fe(v),T=fe(T);var I=re(v,1),N=re(T,1);for(T=re(T,2),v=re(v,2);!x(T);){var _=N.add(T);0>=_.l(b)&&(I=I.add(v),N=_),T=re(T,1),v=re(v,1)}return g=L(b,I.j(g)),new q(I,g)}for(I=p;0<=b.l(g);){for(v=Math.max(1,Math.floor(b.m()/g.m())),T=Math.ceil(Math.log(v)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),N=d(v),_=N.j(g);O(_)||0<_.l(b);)v-=T,N=d(v),_=N.j(g);x(N)&&(N=w),I=I.add(N),b=L(b,_)}return new q(I,b)}r.A=function(b){return K(this,b).h},r.and=function(b){for(var g=Math.max(this.g.length,b.g.length),v=[],T=0;T<g;T++)v[T]=this.i(T)&b.i(T);return new a(v,this.h&b.h)},r.or=function(b){for(var g=Math.max(this.g.length,b.g.length),v=[],T=0;T<g;T++)v[T]=this.i(T)|b.i(T);return new a(v,this.h|b.h)},r.xor=function(b){for(var g=Math.max(this.g.length,b.g.length),v=[],T=0;T<g;T++)v[T]=this.i(T)^b.i(T);return new a(v,this.h^b.h)};function fe(b){for(var g=b.g.length+1,v=[],T=0;T<g;T++)v[T]=b.i(T)<<1|b.i(T-1)>>>31;return new a(v,b.h)}function re(b,g){var v=g>>5;g%=32;for(var T=b.g.length-v,I=[],N=0;N<T;N++)I[N]=0<g?b.i(N+v)>>>g|b.i(N+v+1)<<32-g:b.i(N+v);return new a(I,b.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,lh=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,jn=a}).apply(typeof pl<"u"?pl:typeof self<"u"?self:typeof window<"u"?window:{});var ei=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ch,Xr,hh,ci,Ho,dh,fh,mh;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,h){return o==Array.prototype||o==Object.prototype||(o[c]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ei=="object"&&ei];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var n=t(this);function s(o,c){if(c)e:{var h=n;o=o.split(".");for(var m=0;m<o.length-1;m++){var D=o[m];if(!(D in h))break e;h=h[D]}o=o[o.length-1],m=h[o],c=c(m),c!=m&&c!=null&&e(h,o,{configurable:!0,writable:!0,value:c})}}function i(o,c){o instanceof String&&(o+="");var h=0,m=!1,D={next:function(){if(!m&&h<o.length){var k=h++;return{value:c(k,o[k]),done:!1}}return m=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}s("Array.prototype.values",function(o){return o||function(){return i(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function l(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function d(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function f(o,c,h){return o.call.apply(o.bind,arguments)}function p(o,c,h){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,m),o.apply(c,D)}}return function(){return o.apply(c,arguments)}}function w(o,c,h){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,w.apply(null,arguments)}function A(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var m=h.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function x(o,c){function h(){}h.prototype=c.prototype,o.aa=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(m,D,k){for(var U=Array(arguments.length-2),de=2;de<arguments.length;de++)U[de-2]=arguments[de];return c.prototype[D].apply(m,U)}}function O(o){const c=o.length;if(0<c){const h=Array(c);for(let m=0;m<c;m++)h[m]=o[m];return h}return[]}function S(o,c){for(let h=1;h<arguments.length;h++){const m=arguments[h];if(l(m)){const D=o.length||0,k=m.length||0;o.length=D+k;for(let U=0;U<k;U++)o[D+U]=m[U]}else o.push(m)}}class L{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function M(o){return/^[\s\xa0]*$/.test(o)}function q(){var o=u.navigator;return o&&(o=o.userAgent)?o:""}function K(o){return K[" "](o),o}K[" "]=function(){};var fe=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function re(o,c,h){for(const m in o)c.call(h,o[m],m,o)}function b(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function g(o){const c={};for(const h in o)c[h]=o[h];return c}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,c){let h,m;for(let D=1;D<arguments.length;D++){m=arguments[D];for(h in m)o[h]=m[h];for(let k=0;k<v.length;k++)h=v[k],Object.prototype.hasOwnProperty.call(m,h)&&(o[h]=m[h])}}function I(o){var c=1;o=o.split(":");const h=[];for(;0<c&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function N(o){u.setTimeout(()=>{throw o},0)}function _(){var o=tt;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class he{constructor(){this.h=this.g=null}add(c,h){const m=ie.get();m.set(c,h),this.h?this.h.next=m:this.g=m,this.h=m}}var ie=new L(()=>new be,o=>o.reset());class be{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Ve,Xe=!1,tt=new he,gt=()=>{const o=u.Promise.resolve(void 0);Ve=()=>{o.then(Oe)}};var Oe=()=>{for(var o;o=_();){try{o.h.call(o.g)}catch(h){N(h)}var c=ie;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}Xe=!1};function Ze(){this.s=this.s,this.C=this.C}Ze.prototype.s=!1,Ze.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ze.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ge(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}ge.prototype.h=function(){this.defaultPrevented=!0};var kr=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};u.addEventListener("test",h,c),u.removeEventListener("test",h,c)}catch{}return o}();function Vt(o,c){if(ge.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(fe){e:{try{K(c.nodeName);var D=!0;break e}catch{}D=!1}D||(c=null)}}else h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement);this.relatedTarget=c,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Nn[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Vt.aa.h.call(this)}}x(Vt,ge);var Nn={2:"touch",3:"pen",4:"mouse"};Vt.prototype.h=function(){Vt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var _t="closure_listenable_"+(1e6*Math.random()|0),Xt=0;function Zt(o,c,h,m,D){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!m,this.ha=D,this.key=++Xt,this.da=this.fa=!1}function ut(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function vt(o){this.src=o,this.g={},this.h=0}vt.prototype.add=function(o,c,h,m,D){var k=o.toString();o=this.g[k],o||(o=this.g[k]=[],this.h++);var U=Mt(o,c,m,D);return-1<U?(c=o[U],h||(c.fa=!1)):(c=new Zt(c,this.src,k,!!m,D),c.fa=h,o.push(c)),c};function yt(o,c){var h=c.type;if(h in o.g){var m=o.g[h],D=Array.prototype.indexOf.call(m,c,void 0),k;(k=0<=D)&&Array.prototype.splice.call(m,D,1),k&&(ut(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Mt(o,c,h,m){for(var D=0;D<o.length;++D){var k=o[D];if(!k.da&&k.listener==c&&k.capture==!!h&&k.ha==m)return D}return-1}var Et="closure_lm_"+(1e6*Math.random()|0),st={};function lt(o,c,h,m,D){if(Array.isArray(c)){for(var k=0;k<c.length;k++)lt(o,c[k],h,m,D);return null}return h=xr(h),o&&o[_t]?o.K(c,h,d(m)?!!m.capture:!!m,D):en(o,c,h,!1,m,D)}function en(o,c,h,m,D,k){if(!c)throw Error("Invalid event type");var U=d(D)?!!D.capture:!!D,de=Pr(o);if(de||(o[Et]=de=new vt(o)),h=de.add(c,h,m,U,k),h.proxy)return h;if(m=tn(),h.proxy=m,m.src=o,m.listener=h,o.addEventListener)kr||(D=U),D===void 0&&(D=!1),o.addEventListener(c.toString(),m,D);else if(o.attachEvent)o.attachEvent(Cs(c.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return h}function tn(){function o(h){return c.call(o.src,o.listener,h)}const c=Rr;return o}function ht(o,c,h,m,D){if(Array.isArray(c))for(var k=0;k<c.length;k++)ht(o,c[k],h,m,D);else m=d(m)?!!m.capture:!!m,h=xr(h),o&&o[_t]?(o=o.i,c=String(c).toString(),c in o.g&&(k=o.g[c],h=Mt(k,h,m,D),-1<h&&(ut(k[h]),Array.prototype.splice.call(k,h,1),k.length==0&&(delete o.g[c],o.h--)))):o&&(o=Pr(o))&&(c=o.g[c.toString()],o=-1,c&&(o=Mt(c,h,m,D)),(h=-1<o?c[o]:null)&&Hn(h))}function Hn(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[_t])yt(c.i,o);else{var h=o.type,m=o.proxy;c.removeEventListener?c.removeEventListener(h,m,o.capture):c.detachEvent?c.detachEvent(Cs(h),m):c.addListener&&c.removeListener&&c.removeListener(m),(h=Pr(c))?(yt(h,o),h.h==0&&(h.src=null,c[Et]=null)):ut(o)}}}function Cs(o){return o in st?st[o]:st[o]="on"+o}function Rr(o,c){if(o.da)o=!0;else{c=new Vt(c,this);var h=o.listener,m=o.ha||o.src;o.fa&&Hn(o),o=h.call(m,c)}return o}function Pr(o){return o=o[Et],o instanceof vt?o:null}var Cr="__closure_events_fn_"+(1e9*Math.random()>>>0);function xr(o){return typeof o=="function"?o:(o[Cr]||(o[Cr]=function(c){return o.handleEvent(c)}),o[Cr])}function ke(){Ze.call(this),this.i=new vt(this),this.M=this,this.F=null}x(ke,Ze),ke.prototype[_t]=!0,ke.prototype.removeEventListener=function(o,c,h,m){ht(this,o,c,h,m)};function Ie(o,c){var h,m=o.F;if(m)for(h=[];m;m=m.F)h.push(m);if(o=o.M,m=c.type||c,typeof c=="string")c=new ge(c,o);else if(c instanceof ge)c.target=c.target||o;else{var D=c;c=new ge(m,o),T(c,D)}if(D=!0,h)for(var k=h.length-1;0<=k;k--){var U=c.g=h[k];D=Gn(U,m,!0,c)&&D}if(U=c.g=o,D=Gn(U,m,!0,c)&&D,D=Gn(U,m,!1,c)&&D,h)for(k=0;k<h.length;k++)U=c.g=h[k],D=Gn(U,m,!1,c)&&D}ke.prototype.N=function(){if(ke.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var h=o.g[c],m=0;m<h.length;m++)ut(h[m]);delete o.g[c],o.h--}}this.F=null},ke.prototype.K=function(o,c,h,m){return this.i.add(String(o),c,!1,h,m)},ke.prototype.L=function(o,c,h,m){return this.i.add(String(o),c,!0,h,m)};function Gn(o,c,h,m){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var D=!0,k=0;k<c.length;++k){var U=c[k];if(U&&!U.da&&U.capture==h){var de=U.listener,Fe=U.ha||U.src;U.fa&&yt(o.i,U),D=de.call(Fe,m)!==!1&&D}}return D&&!m.defaultPrevented}function Vr(o,c,h){if(typeof o=="function")h&&(o=w(o,h));else if(o&&typeof o.handleEvent=="function")o=w(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:u.setTimeout(o,c||0)}function Mr(o){o.g=Vr(()=>{o.g=null,o.i&&(o.i=!1,Mr(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class Or extends Ze{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Mr(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Dn(o){Ze.call(this),this.h=o,this.g={}}x(Dn,Ze);var xs=[];function Vs(o){re(o.g,function(c,h){this.g.hasOwnProperty(h)&&Hn(c)},o),o.g={}}Dn.prototype.N=function(){Dn.aa.N.call(this),Vs(this)},Dn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ur=u.JSON.stringify,so=u.JSON.parse,io=class{stringify(o){return u.JSON.stringify(o,void 0)}parse(o){return u.JSON.parse(o,void 0)}};function Lr(){}Lr.prototype.h=null;function Kn(o){return o.h||(o.h=o.i())}function Fr(){}var ct={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Sn(){ge.call(this,"d")}x(Sn,ge);function kn(){ge.call(this,"c")}x(kn,ge);var wt={},Ms=null;function Rn(){return Ms=Ms||new ke}wt.La="serverreachability";function Os(o){ge.call(this,wt.La,o)}x(Os,ge);function nn(o){const c=Rn();Ie(c,new Os(c))}wt.STAT_EVENT="statevent";function jr(o,c){ge.call(this,wt.STAT_EVENT,o),this.stat=c}x(jr,ge);function Ue(o){const c=Rn();Ie(c,new jr(c,o))}wt.Ma="timingevent";function Us(o,c){ge.call(this,wt.Ma,o),this.size=c}x(Us,ge);function rn(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){o()},c)}function Pn(){this.g=!0}Pn.prototype.xa=function(){this.g=!1};function oo(o,c,h,m,D,k){o.info(function(){if(o.g)if(k)for(var U="",de=k.split("&"),Fe=0;Fe<de.length;Fe++){var ae=de[Fe].split("=");if(1<ae.length){var Ye=ae[0];ae=ae[1];var He=Ye.split("_");U=2<=He.length&&He[1]=="type"?U+(Ye+"="+ae+"&"):U+(Ye+"=redacted&")}}else U=null;else U=k;return"XMLHTTP REQ ("+m+") [attempt "+D+"]: "+c+`
`+h+`
`+U})}function E(o,c,h,m,D,k,U){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+D+"]: "+c+`
`+h+`
`+k+" "+U})}function V(o,c,h,m){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+W(o,h)+(m?" "+m:"")})}function F(o,c){o.info(function(){return"TIMEOUT: "+c})}Pn.prototype.info=function(){};function W(o,c){if(!o.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var m=h[o];if(!(2>m.length)){var D=m[1];if(Array.isArray(D)&&!(1>D.length)){var k=D[0];if(k!="noop"&&k!="stop"&&k!="close")for(var U=1;U<D.length;U++)D[U]=""}}}}return Ur(h)}catch{return c}}var ee={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ue={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},X;function J(){}x(J,Lr),J.prototype.g=function(){return new XMLHttpRequest},J.prototype.i=function(){return{}},X=new J;function _e(o,c,h,m){this.j=o,this.i=c,this.l=h,this.R=m||1,this.U=new Dn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ve}function ve(){this.i=null,this.g="",this.h=!1}var Ee={},ze={};function Tt(o,c,h){o.L=1,o.v=qs(Ot(c)),o.m=h,o.P=!0,bt(o,null)}function bt(o,c){o.F=Date.now(),Qn(o),o.A=Ot(o.v);var h=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),cu(h.i,"t",m),o.C=0,h=o.j.J,o.h=new ve,o.g=Su(o.j,h?c:null,!o.m),0<o.O&&(o.M=new Or(w(o.Y,o,o.g),o.O)),c=o.U,h=o.g,m=o.ca;var D="readystatechange";Array.isArray(D)||(D&&(xs[0]=D.toString()),D=xs);for(var k=0;k<D.length;k++){var U=lt(h,D[k],m||c.handleEvent,!1,c.h||c);if(!U)break;c.g[U.key]=U}c=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),nn(),oo(o.i,o.u,o.A,o.l,o.R,o.m)}_e.prototype.ca=function(o){o=o.target;const c=this.M;c&&Ut(o)==3?c.j():this.Y(o)},_e.prototype.Y=function(o){try{if(o==this.g)e:{const He=Ut(this.g);var c=this.g.Ba();const Zn=this.g.Z();if(!(3>He)&&(He!=3||this.g&&(this.h.h||this.g.oa()||_u(this.g)))){this.J||He!=4||c==7||(c==8||0>=Zn?nn(3):nn(2)),ao(this);var h=this.g.Z();this.X=h;t:if(Le(this)){var m=_u(this.g);o="";var D=m.length,k=Ut(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Cn(this),Br(this);var U="";break t}this.h.i=new u.TextDecoder}for(c=0;c<D;c++)this.h.h=!0,o+=this.h.i.decode(m[c],{stream:!(k&&c==D-1)});m.length=0,this.h.g+=o,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=h==200,E(this.i,this.u,this.A,this.l,this.R,He,h),this.o){if(this.T&&!this.K){t:{if(this.g){var de,Fe=this.g;if((de=Fe.g?Fe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(de)){var ae=de;break t}}ae=null}if(h=ae)V(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,uo(this,h);else{this.o=!1,this.s=3,Ue(12),Cn(this),Br(this);break e}}if(this.P){h=!0;let dt;for(;!this.J&&this.C<U.length;)if(dt=qr(this,U),dt==ze){He==4&&(this.s=4,Ue(14),h=!1),V(this.i,this.l,null,"[Incomplete Response]");break}else if(dt==Ee){this.s=4,Ue(15),V(this.i,this.l,U,"[Invalid Chunk]"),h=!1;break}else V(this.i,this.l,dt,null),uo(this,dt);if(Le(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),He!=4||U.length!=0||this.h.h||(this.s=1,Ue(16),h=!1),this.o=this.o&&h,!h)V(this.i,this.l,U,"[Invalid Chunked Response]"),Cn(this),Br(this);else if(0<U.length&&!this.W){this.W=!0;var Ye=this.j;Ye.g==this&&Ye.ba&&!Ye.M&&(Ye.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),po(Ye),Ye.M=!0,Ue(11))}}else V(this.i,this.l,U,null),uo(this,U);He==4&&Cn(this),this.o&&!this.J&&(He==4?Iu(this.j,this):(this.o=!1,Qn(this)))}else Zd(this.g),h==400&&0<U.indexOf("Unknown SID")?(this.s=3,Ue(12)):(this.s=0,Ue(13)),Cn(this),Br(this)}}}catch{}finally{}};function Le(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function qr(o,c){var h=o.C,m=c.indexOf(`
`,h);return m==-1?ze:(h=Number(c.substring(h,m)),isNaN(h)?Ee:(m+=1,m+h>c.length?ze:(c=c.slice(m,m+h),o.C=m+h,c)))}_e.prototype.cancel=function(){this.J=!0,Cn(this)};function Qn(o){o.S=Date.now()+o.I,Ls(o,o.I)}function Ls(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=rn(w(o.ba,o),c)}function ao(o){o.B&&(u.clearTimeout(o.B),o.B=null)}_e.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(F(this.i,this.A),this.L!=2&&(nn(),Ue(17)),Cn(this),this.s=2,Br(this)):Ls(this,this.S-o)};function Br(o){o.j.G==0||o.J||Iu(o.j,o)}function Cn(o){ao(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,Vs(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function uo(o,c){try{var h=o.j;if(h.G!=0&&(h.g==o||lo(h.h,o))){if(!o.K&&lo(h.h,o)&&h.G==3){try{var m=h.Da.g.parse(c)}catch{m=null}if(Array.isArray(m)&&m.length==3){var D=m;if(D[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)Hs(h),zs(h);else break e;mo(h),Ue(18)}}else h.za=D[1],0<h.za-h.T&&37500>D[2]&&h.F&&h.v==0&&!h.C&&(h.C=rn(w(h.Za,h),6e3));if(1>=tu(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Vn(h,11)}else if((o.K||h.g==o)&&Hs(h),!M(c))for(D=h.Da.g.parse(c),c=0;c<D.length;c++){let ae=D[c];if(h.T=ae[0],ae=ae[1],h.G==2)if(ae[0]=="c"){h.K=ae[1],h.ia=ae[2];const Ye=ae[3];Ye!=null&&(h.la=Ye,h.j.info("VER="+h.la));const He=ae[4];He!=null&&(h.Aa=He,h.j.info("SVER="+h.Aa));const Zn=ae[5];Zn!=null&&typeof Zn=="number"&&0<Zn&&(m=1.5*Zn,h.L=m,h.j.info("backChannelRequestTimeoutMs_="+m)),m=h;const dt=o.g;if(dt){const Ks=dt.g?dt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ks){var k=m.h;k.g||Ks.indexOf("spdy")==-1&&Ks.indexOf("quic")==-1&&Ks.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(co(k,k.h),k.h=null))}if(m.D){const go=dt.g?dt.g.getResponseHeader("X-HTTP-Session-Id"):null;go&&(m.ya=go,me(m.I,m.D,go))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),m=h;var U=o;if(m.qa=Du(m,m.J?m.ia:null,m.W),U.K){nu(m.h,U);var de=U,Fe=m.L;Fe&&(de.I=Fe),de.B&&(ao(de),Qn(de)),m.g=U}else Tu(m);0<h.i.length&&Ys(h)}else ae[0]!="stop"&&ae[0]!="close"||Vn(h,7);else h.G==3&&(ae[0]=="stop"||ae[0]=="close"?ae[0]=="stop"?Vn(h,7):fo(h):ae[0]!="noop"&&h.l&&h.l.ta(ae),h.v=0)}}nn(4)}catch{}}var Ud=class{constructor(o,c){this.g=o,this.map=c}};function Za(o){this.l=o||10,u.PerformanceNavigationTiming?(o=u.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function eu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function tu(o){return o.h?1:o.g?o.g.size:0}function lo(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function co(o,c){o.g?o.g.add(c):o.h=c}function nu(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}Za.prototype.cancel=function(){if(this.i=ru(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function ru(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.D);return c}return O(o.i)}function Ld(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var c=[],h=o.length,m=0;m<h;m++)c.push(o[m]);return c}c=[],h=0;for(m in o)c[h++]=o[m];return c}function Fd(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var c=[];o=o.length;for(var h=0;h<o;h++)c.push(h);return c}c=[],h=0;for(const m in o)c[h++]=m;return c}}}function su(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var h=Fd(o),m=Ld(o),D=m.length,k=0;k<D;k++)c.call(void 0,m[k],h&&h[k],o)}var iu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jd(o,c){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var m=o[h].indexOf("="),D=null;if(0<=m){var k=o[h].substring(0,m);D=o[h].substring(m+1)}else k=o[h];c(k,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function xn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof xn){this.h=o.h,Fs(this,o.j),this.o=o.o,this.g=o.g,js(this,o.s),this.l=o.l;var c=o.i,h=new zr;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),ou(this,h),this.m=o.m}else o&&(c=String(o).match(iu))?(this.h=!1,Fs(this,c[1]||"",!0),this.o=$r(c[2]||""),this.g=$r(c[3]||"",!0),js(this,c[4]),this.l=$r(c[5]||"",!0),ou(this,c[6]||"",!0),this.m=$r(c[7]||"")):(this.h=!1,this.i=new zr(null,this.h))}xn.prototype.toString=function(){var o=[],c=this.j;c&&o.push(Wr(c,au,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Wr(c,au,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Wr(h,h.charAt(0)=="/"?$d:Bd,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Wr(h,zd)),o.join("")};function Ot(o){return new xn(o)}function Fs(o,c,h){o.j=h?$r(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function js(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function ou(o,c,h){c instanceof zr?(o.i=c,Yd(o.i,o.h)):(h||(c=Wr(c,Wd)),o.i=new zr(c,o.h))}function me(o,c,h){o.i.set(c,h)}function qs(o){return me(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function $r(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Wr(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,qd),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function qd(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var au=/[#\/\?@]/g,Bd=/[#\?:]/g,$d=/[#\?]/g,Wd=/[#\?@]/g,zd=/#/g;function zr(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function sn(o){o.g||(o.g=new Map,o.h=0,o.i&&jd(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}r=zr.prototype,r.add=function(o,c){sn(this),this.i=null,o=Jn(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function uu(o,c){sn(o),c=Jn(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function lu(o,c){return sn(o),c=Jn(o,c),o.g.has(c)}r.forEach=function(o,c){sn(this),this.g.forEach(function(h,m){h.forEach(function(D){o.call(c,D,m,this)},this)},this)},r.na=function(){sn(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let m=0;m<c.length;m++){const D=o[m];for(let k=0;k<D.length;k++)h.push(c[m])}return h},r.V=function(o){sn(this);let c=[];if(typeof o=="string")lu(this,o)&&(c=c.concat(this.g.get(Jn(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)c=c.concat(o[h])}return c},r.set=function(o,c){return sn(this),this.i=null,o=Jn(this,o),lu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},r.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function cu(o,c,h){uu(o,c),0<h.length&&(o.i=null,o.g.set(Jn(o,c),O(h)),o.h+=h.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var m=c[h];const k=encodeURIComponent(String(m)),U=this.V(m);for(m=0;m<U.length;m++){var D=k;U[m]!==""&&(D+="="+encodeURIComponent(String(U[m]))),o.push(D)}}return this.i=o.join("&")};function Jn(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function Yd(o,c){c&&!o.j&&(sn(o),o.i=null,o.g.forEach(function(h,m){var D=m.toLowerCase();m!=D&&(uu(this,m),cu(this,D,h))},o)),o.j=c}function Hd(o,c){const h=new Pn;if(u.Image){const m=new Image;m.onload=A(on,h,"TestLoadImage: loaded",!0,c,m),m.onerror=A(on,h,"TestLoadImage: error",!1,c,m),m.onabort=A(on,h,"TestLoadImage: abort",!1,c,m),m.ontimeout=A(on,h,"TestLoadImage: timeout",!1,c,m),u.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else c(!1)}function Gd(o,c){const h=new Pn,m=new AbortController,D=setTimeout(()=>{m.abort(),on(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:m.signal}).then(k=>{clearTimeout(D),k.ok?on(h,"TestPingServer: ok",!0,c):on(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(D),on(h,"TestPingServer: error",!1,c)})}function on(o,c,h,m,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),m(h)}catch{}}function Kd(){this.g=new io}function Qd(o,c,h){const m=h||"";try{su(o,function(D,k){let U=D;d(D)&&(U=Ur(D)),c.push(m+k+"="+encodeURIComponent(U))})}catch(D){throw c.push(m+"type="+encodeURIComponent("_badmap")),D}}function Bs(o){this.l=o.Ub||null,this.j=o.eb||!1}x(Bs,Lr),Bs.prototype.g=function(){return new $s(this.l,this.j)},Bs.prototype.i=function(o){return function(){return o}}({});function $s(o,c){ke.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x($s,ke),r=$s.prototype,r.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,Hr(this)},r.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||u).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Yr(this)),this.readyState=0},r.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Hr(this)),this.g&&(this.readyState=3,Hr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;hu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function hu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}r.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?Yr(this):Hr(this),this.readyState==3&&hu(this)}},r.Ra=function(o){this.g&&(this.response=this.responseText=o,Yr(this))},r.Qa=function(o){this.g&&(this.response=o,Yr(this))},r.ga=function(){this.g&&Yr(this)};function Yr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Hr(o)}r.setRequestHeader=function(o,c){this.u.append(o,c)},r.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function Hr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty($s.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function du(o){let c="";return re(o,function(h,m){c+=m,c+=":",c+=h,c+=`\r
`}),c}function ho(o,c,h){e:{for(m in h){var m=!1;break e}m=!0}m||(h=du(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):me(o,c,h))}function Te(o){ke.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(Te,ke);var Jd=/^https?$/i,Xd=["POST","PUT"];r=Te.prototype,r.Ha=function(o){this.J=o},r.ea=function(o,c,h,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():X.g(),this.v=this.o?Kn(this.o):Kn(X),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(k){fu(this,k);return}if(o=h||"",h=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var D in m)h.set(D,m[D]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const k of m.keys())h.set(k,m.get(k));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(h.keys()).find(k=>k.toLowerCase()=="content-type"),D=u.FormData&&o instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Xd,c,void 0))||m||D||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,U]of h)this.g.setRequestHeader(k,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{gu(this),this.u=!0,this.g.send(o),this.u=!1}catch(k){fu(this,k)}};function fu(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,mu(o),Ws(o)}function mu(o){o.A||(o.A=!0,Ie(o,"complete"),Ie(o,"error"))}r.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Ie(this,"complete"),Ie(this,"abort"),Ws(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ws(this,!0)),Te.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?pu(this):this.bb())},r.bb=function(){pu(this)};function pu(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Ut(o)!=4||o.Z()!=2)){if(o.u&&Ut(o)==4)Vr(o.Ea,0,o);else if(Ie(o,"readystatechange"),Ut(o)==4){o.h=!1;try{const U=o.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var m;if(m=U===0){var D=String(o.D).match(iu)[1]||null;!D&&u.self&&u.self.location&&(D=u.self.location.protocol.slice(0,-1)),m=!Jd.test(D?D.toLowerCase():"")}h=m}if(h)Ie(o,"complete"),Ie(o,"success");else{o.m=6;try{var k=2<Ut(o)?o.g.statusText:""}catch{k=""}o.l=k+" ["+o.Z()+"]",mu(o)}}finally{Ws(o)}}}}function Ws(o,c){if(o.g){gu(o);const h=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||Ie(o,"ready");try{h.onreadystatechange=m}catch{}}}function gu(o){o.I&&(u.clearTimeout(o.I),o.I=null)}r.isActive=function(){return!!this.g};function Ut(o){return o.g?o.g.readyState:0}r.Z=function(){try{return 2<Ut(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),so(c)}};function _u(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Zd(o){const c={};o=(o.g&&2<=Ut(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(M(o[m]))continue;var h=I(o[m]);const D=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const k=c[D]||[];c[D]=k,k.push(h)}b(c,function(m){return m.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Gr(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function vu(o){this.Aa=0,this.i=[],this.j=new Pn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Gr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Gr("baseRetryDelayMs",5e3,o),this.cb=Gr("retryDelaySeedMs",1e4,o),this.Wa=Gr("forwardChannelMaxRetries",2,o),this.wa=Gr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Za(o&&o.concurrentRequestLimit),this.Da=new Kd,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=vu.prototype,r.la=8,r.G=1,r.connect=function(o,c,h,m){Ue(0),this.W=o,this.H=c||{},h&&m!==void 0&&(this.H.OSID=h,this.H.OAID=m),this.F=this.X,this.I=Du(this,null,this.W),Ys(this)};function fo(o){if(yu(o),o.G==3){var c=o.U++,h=Ot(o.I);if(me(h,"SID",o.K),me(h,"RID",c),me(h,"TYPE","terminate"),Kr(o,h),c=new _e(o,o.j,c),c.L=2,c.v=qs(Ot(h)),h=!1,u.navigator&&u.navigator.sendBeacon)try{h=u.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&u.Image&&(new Image().src=c.v,h=!0),h||(c.g=Su(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Qn(c)}Nu(o)}function zs(o){o.g&&(po(o),o.g.cancel(),o.g=null)}function yu(o){zs(o),o.u&&(u.clearTimeout(o.u),o.u=null),Hs(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&u.clearTimeout(o.s),o.s=null)}function Ys(o){if(!eu(o.h)&&!o.s){o.s=!0;var c=o.Ga;Ve||gt(),Xe||(Ve(),Xe=!0),tt.add(c,o),o.B=0}}function ef(o,c){return tu(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=rn(w(o.Ga,o,c),Au(o,o.B)),o.B++,!0)}r.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const D=new _e(this,this.j,o);let k=this.o;if(this.S&&(k?(k=g(k),T(k,this.S)):k=this.S),this.m!==null||this.O||(D.H=k,k=null),this.P)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var m=this.i[h];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(c+=m,4096<c){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=wu(this,D,c),h=Ot(this.I),me(h,"RID",o),me(h,"CVER",22),this.D&&me(h,"X-HTTP-Session-Id",this.D),Kr(this,h),k&&(this.O?c="headers="+encodeURIComponent(String(du(k)))+"&"+c:this.m&&ho(h,this.m,k)),co(this.h,D),this.Ua&&me(h,"TYPE","init"),this.P?(me(h,"$req",c),me(h,"SID","null"),D.T=!0,Tt(D,h,null)):Tt(D,h,c),this.G=2}}else this.G==3&&(o?Eu(this,o):this.i.length==0||eu(this.h)||Eu(this))};function Eu(o,c){var h;c?h=c.l:h=o.U++;const m=Ot(o.I);me(m,"SID",o.K),me(m,"RID",h),me(m,"AID",o.T),Kr(o,m),o.m&&o.o&&ho(m,o.m,o.o),h=new _e(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),c&&(o.i=c.D.concat(o.i)),c=wu(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),co(o.h,h),Tt(h,m,c)}function Kr(o,c){o.H&&re(o.H,function(h,m){me(c,m,h)}),o.l&&su({},function(h,m){me(c,m,h)})}function wu(o,c,h){h=Math.min(o.i.length,h);var m=o.l?w(o.l.Na,o.l,o):null;e:{var D=o.i;let k=-1;for(;;){const U=["count="+h];k==-1?0<h?(k=D[0].g,U.push("ofs="+k)):k=0:U.push("ofs="+k);let de=!0;for(let Fe=0;Fe<h;Fe++){let ae=D[Fe].g;const Ye=D[Fe].map;if(ae-=k,0>ae)k=Math.max(0,D[Fe].g-100),de=!1;else try{Qd(Ye,U,"req"+ae+"_")}catch{m&&m(Ye)}}if(de){m=U.join("&");break e}}}return o=o.i.splice(0,h),c.D=o,m}function Tu(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;Ve||gt(),Xe||(Ve(),Xe=!0),tt.add(c,o),o.v=0}}function mo(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=rn(w(o.Fa,o),Au(o,o.v)),o.v++,!0)}r.Fa=function(){if(this.u=null,bu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=rn(w(this.ab,this),o)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ue(10),zs(this),bu(this))};function po(o){o.A!=null&&(u.clearTimeout(o.A),o.A=null)}function bu(o){o.g=new _e(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=Ot(o.qa);me(c,"RID","rpc"),me(c,"SID",o.K),me(c,"AID",o.T),me(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&me(c,"TO",o.ja),me(c,"TYPE","xmlhttp"),Kr(o,c),o.m&&o.o&&ho(c,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=qs(Ot(c)),h.m=null,h.P=!0,bt(h,o)}r.Za=function(){this.C!=null&&(this.C=null,zs(this),mo(this),Ue(19))};function Hs(o){o.C!=null&&(u.clearTimeout(o.C),o.C=null)}function Iu(o,c){var h=null;if(o.g==c){Hs(o),po(o),o.g=null;var m=2}else if(lo(o.h,c))h=c.D,nu(o.h,c),m=1;else return;if(o.G!=0){if(c.o)if(m==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var D=o.B;m=Rn(),Ie(m,new Us(m,h)),Ys(o)}else Tu(o);else if(D=c.s,D==3||D==0&&0<c.X||!(m==1&&ef(o,c)||m==2&&mo(o)))switch(h&&0<h.length&&(c=o.h,c.i=c.i.concat(h)),D){case 1:Vn(o,5);break;case 4:Vn(o,10);break;case 3:Vn(o,6);break;default:Vn(o,2)}}}function Au(o,c){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*c}function Vn(o,c){if(o.j.info("Error code "+c),c==2){var h=w(o.fb,o),m=o.Xa;const D=!m;m=new xn(m||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Fs(m,"https"),qs(m),D?Hd(m.toString(),h):Gd(m.toString(),h)}else Ue(2);o.G=0,o.l&&o.l.sa(c),Nu(o),yu(o)}r.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Ue(2)):(this.j.info("Failed to ping google.com"),Ue(1))};function Nu(o){if(o.G=0,o.ka=[],o.l){const c=ru(o.h);(c.length!=0||o.i.length!=0)&&(S(o.ka,c),S(o.ka,o.i),o.h.i.length=0,O(o.i),o.i.length=0),o.l.ra()}}function Du(o,c,h){var m=h instanceof xn?Ot(h):new xn(h);if(m.g!="")c&&(m.g=c+"."+m.g),js(m,m.s);else{var D=u.location;m=D.protocol,c=c?c+"."+D.hostname:D.hostname,D=+D.port;var k=new xn(null);m&&Fs(k,m),c&&(k.g=c),D&&js(k,D),h&&(k.l=h),m=k}return h=o.D,c=o.ya,h&&c&&me(m,h,c),me(m,"VER",o.la),Kr(o,m),m}function Su(o,c,h){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new Te(new Bs({eb:h})):new Te(o.pa),c.Ha(o.J),c}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function ku(){}r=ku.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Gs(){}Gs.prototype.g=function(o,c){return new it(o,c)};function it(o,c){ke.call(this),this.g=new vu(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!M(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!M(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new Xn(this)}x(it,ke),it.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},it.prototype.close=function(){fo(this.g)},it.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Ur(o),o=h);c.i.push(new Ud(c.Ya++,o)),c.G==3&&Ys(c)},it.prototype.N=function(){this.g.l=null,delete this.j,fo(this.g),delete this.g,it.aa.N.call(this)};function Ru(o){Sn.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const h in c){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}x(Ru,Sn);function Pu(){kn.call(this),this.status=1}x(Pu,kn);function Xn(o){this.g=o}x(Xn,ku),Xn.prototype.ua=function(){Ie(this.g,"a")},Xn.prototype.ta=function(o){Ie(this.g,new Ru(o))},Xn.prototype.sa=function(o){Ie(this.g,new Pu)},Xn.prototype.ra=function(){Ie(this.g,"b")},Gs.prototype.createWebChannel=Gs.prototype.g,it.prototype.send=it.prototype.o,it.prototype.open=it.prototype.m,it.prototype.close=it.prototype.close,mh=function(){return new Gs},fh=function(){return Rn()},dh=wt,Ho={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ee.NO_ERROR=0,ee.TIMEOUT=8,ee.HTTP_ERROR=6,ci=ee,ue.COMPLETE="complete",hh=ue,Fr.EventType=ct,ct.OPEN="a",ct.CLOSE="b",ct.ERROR="c",ct.MESSAGE="d",ke.prototype.listen=ke.prototype.K,Xr=Fr,Te.prototype.listenOnce=Te.prototype.L,Te.prototype.getLastError=Te.prototype.Ka,Te.prototype.getLastErrorCode=Te.prototype.Ba,Te.prototype.getStatus=Te.prototype.Z,Te.prototype.getResponseJson=Te.prototype.Oa,Te.prototype.getResponseText=Te.prototype.oa,Te.prototype.send=Te.prototype.ea,Te.prototype.setWithCredentials=Te.prototype.Ha,ch=Te}).apply(typeof ei<"u"?ei:typeof self<"u"?self:typeof window<"u"?window:{});const gl="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ke.UNAUTHENTICATED=new Ke(null),Ke.GOOGLE_CREDENTIALS=new Ke("google-credentials-uid"),Ke.FIRST_PARTY=new Ke("first-party-uid"),Ke.MOCK_USER=new Ke("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ir="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn=new la("@firebase/firestore");function nr(){return Wn.logLevel}function j(r,...e){if(Wn.logLevel<=te.DEBUG){const t=e.map(wa);Wn.debug(`Firestore (${Ir}): ${r}`,...t)}}function Yt(r,...e){if(Wn.logLevel<=te.ERROR){const t=e.map(wa);Wn.error(`Firestore (${Ir}): ${r}`,...t)}}function fr(r,...e){if(Wn.logLevel<=te.WARN){const t=e.map(wa);Wn.warn(`Firestore (${Ir}): ${r}`,...t)}}function wa(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(r="Unexpected state"){const e=`FIRESTORE (${Ir}) INTERNAL ASSERTION FAILED: `+r;throw Yt(e),new Error(e)}function le(r,e){r||Y()}function G(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Kt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class wy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ke.UNAUTHENTICATED))}shutdown(){}}class Ty{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class by{constructor(e){this.t=e,this.currentUser=Ke.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){le(this.o===void 0);let n=this.i;const s=l=>this.i!==n?(n=this.i,t(l)):Promise.resolve();let i=new $t;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new $t,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},u=l=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>u(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?u(l):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new $t)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(le(typeof n.accessToken=="string"),new ph(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return le(e===null||typeof e=="string"),new Ke(e)}}class Iy{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=Ke.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Ay{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new Iy(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ke.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ny{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Dy{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){le(this.o===void 0);const n=i=>{i.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,j("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>n(i))};const s=i=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(le(typeof t.token=="string"),this.R=t.token,new Ny(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const s=Sy(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<t&&(n+=e.charAt(s[i]%e.length))}return n}}function se(r,e){return r<e?-1:r>e?1:0}function mr(r,e,t){return r.length===e.length&&r.every((n,s)=>t(n,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{static now(){return Ce.fromMillis(Date.now())}static fromDate(e){return Ce.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Ce(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new B(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new B(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new B(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{static fromTimestamp(e){return new H(e)}static min(){return new H(new Ce(0,0))}static max(){return new H(new Ce(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,t,n){t===void 0?t=0:t>e.length&&Y(),n===void 0?n=e.length-t:n>e.length-t&&Y(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return ds.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ds?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const i=e.get(s),a=t.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class pe extends ds{construct(e,t,n){return new pe(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new B(C.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(s=>s.length>0))}return new pe(t)}static emptyPath(){return new pe([])}}const ky=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Be extends ds{construct(e,t,n){return new Be(e,t,n)}static isValidIdentifier(e){return ky.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Be.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Be(["__name__"])}static fromServerFormat(e){const t=[];let n="",s=0;const i=()=>{if(n.length===0)throw new B(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let a=!1;for(;s<e.length;){const u=e[s];if(u==="\\"){if(s+1===e.length)throw new B(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new B(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=l,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(n+=u,s++):(i(),s++)}if(i(),a)throw new B(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Be(t)}static emptyPath(){return new Be([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(pe.fromString(e))}static fromName(e){return new $(pe.fromString(e).popFirst(5))}static empty(){return new $(pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return pe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new pe(e.slice()))}}function Ry(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=H.fromTimestamp(n===1e9?new Ce(t+1,0):new Ce(t,n));return new vn(s,$.empty(),e)}function Py(r){return new vn(r.readTime,r.key,-1)}class vn{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new vn(H.min(),$.empty(),-1)}static max(){return new vn(H.max(),$.empty(),-1)}}function Cy(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=$.comparator(r.documentKey,e.documentKey),t!==0?t:se(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Vy{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ar(r){if(r.code!==C.FAILED_PRECONDITION||r.message!==xy)throw r;j("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new P((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(n,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof P?t:P.resolve(t)}catch(t){return P.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):P.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):P.reject(t)}static resolve(e){return new P((t,n)=>{t(e)})}static reject(e){return new P((t,n)=>{n(e)})}static waitFor(e){return new P((t,n)=>{let s=0,i=0,a=!1;e.forEach(u=>{++s,u.next(()=>{++i,a&&i===s&&t()},l=>n(l))}),a=!0,i===s&&t()})}static or(e){let t=P.resolve(!1);for(const n of e)t=t.next(s=>s?P.resolve(s):n());return t}static forEach(e,t){const n=[];return e.forEach((s,i)=>{n.push(t.call(this,s,i))}),this.waitFor(n)}static mapArray(e,t){return new P((n,s)=>{const i=e.length,a=new Array(i);let u=0;for(let l=0;l<i;l++){const d=l;t(e[d]).next(f=>{a[d]=f,++u,u===i&&n(a)},f=>s(f))}})}static doWhile(e,t){return new P((n,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):n()};i()})}}function My(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Nr(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ie(n),this.se=n=>t.writeSequenceNumber(n))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Bi.oe=-1;function $i(r){return r==null}function Si(r){return r===0&&1/r==-1/0}function Oy(r){return typeof r=="number"&&Number.isInteger(r)&&!Si(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uy(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=_l(e)),e=Ly(r.get(t),e);return _l(e)}function Ly(r,e){let t=e;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function _l(r){return r+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function In(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function _h(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,t){this.comparator=e,this.root=t||qe.EMPTY}insert(e,t){return new we(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,qe.BLACK,null,null))}remove(e){return new we(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ti(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ti(this.root,e,this.comparator,!1)}getReverseIterator(){return new ti(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ti(this.root,e,this.comparator,!0)}}class ti{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class qe{constructor(e,t,n,s,i){this.key=e,this.value=t,this.color=n??qe.RED,this.left=s??qe.EMPTY,this.right=i??qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,i){return new qe(e??this.key,t??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const i=n(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,n),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return qe.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}qe.EMPTY=null,qe.RED=!0,qe.BLACK=!1;qe.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(e,t,n,s,i){return this}insert(e,t,n){return new qe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e){this.comparator=e,this.data=new we(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new yl(this.data.getIterator())}getIteratorFrom(e){return new yl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof xe)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new xe(this.comparator);return t.data=e,t}}class yl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.fields=e,e.sort(Be.comparator)}static empty(){return new at([])}unionWith(e){let t=new xe(Be.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new at(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return mr(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new vh("Invalid base64 string: "+i):i}}(e);return new We(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new We(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}We.EMPTY_BYTE_STRING=new We("");const Fy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function yn(r){if(le(!!r),typeof r=="string"){let e=0;const t=Fy.exec(r);if(le(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:Ae(r.seconds),nanos:Ae(r.nanos)}}function Ae(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function En(r){return typeof r=="string"?We.fromBase64String(r):We.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ta(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Wi(r){const e=r.mapValue.fields.__previous_value__;return Ta(e)?Wi(e):e}function fs(r){const e=yn(r.mapValue.fields.__local_write_time__.timestampValue);return new Ce(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e,t,n,s,i,a,u,l,d){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=l,this.useFetchStreams=d}}class ms{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ms("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ms&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function wn(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Ta(r)?4:By(r)?9007199254740991:qy(r)?10:11:Y()}function xt(r,e){if(r===e)return!0;const t=wn(r);if(t!==wn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return fs(r).isEqual(fs(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=yn(s.timestampValue),u=yn(i.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(s,i){return En(s.bytesValue).isEqual(En(i.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(s,i){return Ae(s.geoPointValue.latitude)===Ae(i.geoPointValue.latitude)&&Ae(s.geoPointValue.longitude)===Ae(i.geoPointValue.longitude)}(r,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ae(s.integerValue)===Ae(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Ae(s.doubleValue),u=Ae(i.doubleValue);return a===u?Si(a)===Si(u):isNaN(a)&&isNaN(u)}return!1}(r,e);case 9:return mr(r.arrayValue.values||[],e.arrayValue.values||[],xt);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},u=i.mapValue.fields||{};if(vl(a)!==vl(u))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(u[l]===void 0||!xt(a[l],u[l])))return!1;return!0}(r,e);default:return Y()}}function ps(r,e){return(r.values||[]).find(t=>xt(t,e))!==void 0}function pr(r,e){if(r===e)return 0;const t=wn(r),n=wn(e);if(t!==n)return se(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return se(r.booleanValue,e.booleanValue);case 2:return function(i,a){const u=Ae(i.integerValue||i.doubleValue),l=Ae(a.integerValue||a.doubleValue);return u<l?-1:u>l?1:u===l?0:isNaN(u)?isNaN(l)?0:-1:1}(r,e);case 3:return El(r.timestampValue,e.timestampValue);case 4:return El(fs(r),fs(e));case 5:return se(r.stringValue,e.stringValue);case 6:return function(i,a){const u=En(i),l=En(a);return u.compareTo(l)}(r.bytesValue,e.bytesValue);case 7:return function(i,a){const u=i.split("/"),l=a.split("/");for(let d=0;d<u.length&&d<l.length;d++){const f=se(u[d],l[d]);if(f!==0)return f}return se(u.length,l.length)}(r.referenceValue,e.referenceValue);case 8:return function(i,a){const u=se(Ae(i.latitude),Ae(a.latitude));return u!==0?u:se(Ae(i.longitude),Ae(a.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return wl(r.arrayValue,e.arrayValue);case 10:return function(i,a){var u,l,d,f;const p=i.fields||{},w=a.fields||{},A=(u=p.value)===null||u===void 0?void 0:u.arrayValue,x=(l=w.value)===null||l===void 0?void 0:l.arrayValue,O=se(((d=A==null?void 0:A.values)===null||d===void 0?void 0:d.length)||0,((f=x==null?void 0:x.values)===null||f===void 0?void 0:f.length)||0);return O!==0?O:wl(A,x)}(r.mapValue,e.mapValue);case 11:return function(i,a){if(i===ni.mapValue&&a===ni.mapValue)return 0;if(i===ni.mapValue)return 1;if(a===ni.mapValue)return-1;const u=i.fields||{},l=Object.keys(u),d=a.fields||{},f=Object.keys(d);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const w=se(l[p],f[p]);if(w!==0)return w;const A=pr(u[l[p]],d[f[p]]);if(A!==0)return A}return se(l.length,f.length)}(r.mapValue,e.mapValue);default:throw Y()}}function El(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return se(r,e);const t=yn(r),n=yn(e),s=se(t.seconds,n.seconds);return s!==0?s:se(t.nanos,n.nanos)}function wl(r,e){const t=r.values||[],n=e.values||[];for(let s=0;s<t.length&&s<n.length;++s){const i=pr(t[s],n[s]);if(i)return i}return se(t.length,n.length)}function gr(r){return Go(r)}function Go(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const n=yn(t);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return En(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return $.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let n="[",s=!0;for(const i of t.values||[])s?s=!1:n+=",",n+=Go(i);return n+"]"}(r.arrayValue):"mapValue"in r?function(t){const n=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of n)i?i=!1:s+=",",s+=`${a}:${Go(t.fields[a])}`;return s+"}"}(r.mapValue):Y()}function hi(r){switch(wn(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Wi(r);return e?16+hi(e):16;case 5:return 2*r.stringValue.length;case 6:return En(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((s,i)=>s+hi(i),0)}(r.arrayValue);case 10:case 11:return function(n){let s=0;return In(n.fields,(i,a)=>{s+=i.length+hi(a)}),s}(r.mapValue);default:throw Y()}}function Tl(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Ko(r){return!!r&&"integerValue"in r}function ba(r){return!!r&&"arrayValue"in r}function bl(r){return!!r&&"nullValue"in r}function Il(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function di(r){return!!r&&"mapValue"in r}function qy(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function ss(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return In(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=ss(n)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ss(r.arrayValue.values[t]);return e}return Object.assign({},r)}function By(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.value=e}static empty(){return new rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!di(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ss(t)}setAll(e){let t=Be.emptyPath(),n={},s=[];e.forEach((a,u)=>{if(!t.isImmediateParentOf(u)){const l=this.getFieldsMap(t);this.applyChanges(l,n,s),n={},s=[],t=u.popLast()}a?n[u.lastSegment()]=ss(a):s.push(u.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,s)}delete(e){const t=this.field(e.popLast());di(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return xt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];di(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){In(t,(s,i)=>e[s]=i);for(const s of n)delete e[s]}clone(){return new rt(ss(this.value))}}function yh(r){const e=[];return In(r.fields,(t,n)=>{const s=new Be([t]);if(di(n)){const i=yh(n.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new at(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,t,n,s,i,a,u){this.key=e,this.documentType=t,this.version=n,this.readTime=s,this.createTime=i,this.data=a,this.documentState=u}static newInvalidDocument(e){return new Qe(e,0,H.min(),H.min(),H.min(),rt.empty(),0)}static newFoundDocument(e,t,n,s){return new Qe(e,1,t,H.min(),n,s,0)}static newNoDocument(e,t){return new Qe(e,2,t,H.min(),H.min(),rt.empty(),0)}static newUnknownDocument(e,t){return new Qe(e,3,t,H.min(),H.min(),rt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Qe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Qe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,t){this.position=e,this.inclusive=t}}function Al(r,e,t){let n=0;for(let s=0;s<r.position.length;s++){const i=e[s],a=r.position[s];if(i.field.isKeyField()?n=$.comparator($.fromName(a.referenceValue),t.key):n=pr(a,t.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function Nl(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!xt(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,t="asc"){this.field=e,this.dir=t}}function $y(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{}class De extends Eh{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new zy(e,t,n):t==="array-contains"?new Gy(e,n):t==="in"?new Ky(e,n):t==="not-in"?new Qy(e,n):t==="array-contains-any"?new Jy(e,n):new De(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new Yy(e,n):new Hy(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(pr(t,this.value)):t!==null&&wn(this.value)===wn(t)&&this.matchesComparison(pr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pt extends Eh{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new pt(e,t)}matches(e){return wh(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function wh(r){return r.op==="and"}function Th(r){return Wy(r)&&wh(r)}function Wy(r){for(const e of r.filters)if(e instanceof pt)return!1;return!0}function Qo(r){if(r instanceof De)return r.field.canonicalString()+r.op.toString()+gr(r.value);if(Th(r))return r.filters.map(e=>Qo(e)).join(",");{const e=r.filters.map(t=>Qo(t)).join(",");return`${r.op}(${e})`}}function bh(r,e){return r instanceof De?function(n,s){return s instanceof De&&n.op===s.op&&n.field.isEqual(s.field)&&xt(n.value,s.value)}(r,e):r instanceof pt?function(n,s){return s instanceof pt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,a,u)=>i&&bh(a,s.filters[u]),!0):!1}(r,e):void Y()}function Ih(r){return r instanceof De?function(t){return`${t.field.canonicalString()} ${t.op} ${gr(t.value)}`}(r):r instanceof pt?function(t){return t.op.toString()+" {"+t.getFilters().map(Ih).join(" ,")+"}"}(r):"Filter"}class zy extends De{constructor(e,t,n){super(e,t,n),this.key=$.fromName(n.referenceValue)}matches(e){const t=$.comparator(e.key,this.key);return this.matchesComparison(t)}}class Yy extends De{constructor(e,t){super(e,"in",t),this.keys=Ah("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Hy extends De{constructor(e,t){super(e,"not-in",t),this.keys=Ah("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Ah(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(n=>$.fromName(n.referenceValue))}class Gy extends De{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ba(t)&&ps(t.arrayValue,this.value)}}class Ky extends De{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ps(this.value.arrayValue,t)}}class Qy extends De{constructor(e,t){super(e,"not-in",t)}matches(e){if(ps(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!ps(this.value.arrayValue,t)}}class Jy extends De{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ba(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>ps(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(e,t=null,n=[],s=[],i=null,a=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=a,this.endAt=u,this.ue=null}}function Dl(r,e=null,t=[],n=[],s=null,i=null,a=null){return new Xy(r,e,t,n,s,i,a)}function Ia(r){const e=G(r);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>Qo(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(i){return i.field.canonicalString()+i.dir}(n)).join(","),$i(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>gr(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>gr(n)).join(",")),e.ue=t}return e.ue}function Aa(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!$y(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!bh(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Nl(r.startAt,e.startAt)&&Nl(r.endAt,e.endAt)}function Jo(r){return $.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,t=null,n=[],s=[],i=null,a="F",u=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=a,this.startAt=u,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Zy(r,e,t,n,s,i,a,u){return new As(r,e,t,n,s,i,a,u)}function Na(r){return new As(r)}function Sl(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Nh(r){return r.collectionGroup!==null}function is(r){const e=G(r);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new xe(Be.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Ri(i,n))}),t.has(Be.keyField().canonicalString())||e.ce.push(new Ri(Be.keyField(),n))}return e.ce}function Rt(r){const e=G(r);return e.le||(e.le=eE(e,is(r))),e.le}function eE(r,e){if(r.limitType==="F")return Dl(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ri(s.field,i)});const t=r.endAt?new ki(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new ki(r.startAt.position,r.startAt.inclusive):null;return Dl(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function Xo(r,e){const t=r.filters.concat([e]);return new As(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function Zo(r,e,t){return new As(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function zi(r,e){return Aa(Rt(r),Rt(e))&&r.limitType===e.limitType}function Dh(r){return`${Ia(Rt(r))}|lt:${r.limitType}`}function rr(r){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>Ih(s)).join(", ")}]`),$i(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>gr(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>gr(s)).join(",")),`Target(${n})`}(Rt(r))}; limitType=${r.limitType})`}function Yi(r,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):$.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(r,e)&&function(n,s){for(const i of is(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(r,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(r,e)&&function(n,s){return!(n.startAt&&!function(a,u,l){const d=Al(a,u,l);return a.inclusive?d<=0:d<0}(n.startAt,is(n),s)||n.endAt&&!function(a,u,l){const d=Al(a,u,l);return a.inclusive?d>=0:d>0}(n.endAt,is(n),s))}(r,e)}function tE(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Sh(r){return(e,t)=>{let n=!1;for(const s of is(r)){const i=nE(s,e,t);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function nE(r,e,t){const n=r.field.isKeyField()?$.comparator(e.key,t.key):function(i,a,u){const l=a.data.field(i),d=u.data.field(i);return l!==null&&d!==null?pr(l,d):Y()}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return Y()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return n.length===1?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){In(this.inner,(t,n)=>{for(const[s,i]of n)e(s,i)})}isEmpty(){return _h(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE=new we($.comparator);function Ht(){return rE}const kh=new we($.comparator);function Zr(...r){let e=kh;for(const t of r)e=e.insert(t.key,t);return e}function Rh(r){let e=kh;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function Fn(){return os()}function Ph(){return os()}function os(){return new zn(r=>r.toString(),(r,e)=>r.isEqual(e))}const sE=new we($.comparator),iE=new xe($.comparator);function ne(...r){let e=iE;for(const t of r)e=e.add(t);return e}const oE=new xe(se);function aE(){return oE}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Si(e)?"-0":e}}function Ch(r){return{integerValue:""+r}}function uE(r,e){return Oy(e)?Ch(e):Da(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(){this._=void 0}}function lE(r,e,t){return r instanceof Pi?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ta(i)&&(i=Wi(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(t,e):r instanceof gs?Vh(r,e):r instanceof _s?Mh(r,e):function(s,i){const a=xh(s,i),u=kl(a)+kl(s.Pe);return Ko(a)&&Ko(s.Pe)?Ch(u):Da(s.serializer,u)}(r,e)}function cE(r,e,t){return r instanceof gs?Vh(r,e):r instanceof _s?Mh(r,e):t}function xh(r,e){return r instanceof Ci?function(n){return Ko(n)||function(i){return!!i&&"doubleValue"in i}(n)}(e)?e:{integerValue:0}:null}class Pi extends Hi{}class gs extends Hi{constructor(e){super(),this.elements=e}}function Vh(r,e){const t=Oh(e);for(const n of r.elements)t.some(s=>xt(s,n))||t.push(n);return{arrayValue:{values:t}}}class _s extends Hi{constructor(e){super(),this.elements=e}}function Mh(r,e){let t=Oh(e);for(const n of r.elements)t=t.filter(s=>!xt(s,n));return{arrayValue:{values:t}}}class Ci extends Hi{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function kl(r){return Ae(r.integerValue||r.doubleValue)}function Oh(r){return ba(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function hE(r,e){return r.field.isEqual(e.field)&&function(n,s){return n instanceof gs&&s instanceof gs||n instanceof _s&&s instanceof _s?mr(n.elements,s.elements,xt):n instanceof Ci&&s instanceof Ci?xt(n.Pe,s.Pe):n instanceof Pi&&s instanceof Pi}(r.transform,e.transform)}class dE{constructor(e,t){this.version=e,this.transformResults=t}}class Pt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Pt}static exists(e){return new Pt(void 0,e)}static updateTime(e){return new Pt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fi(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Gi{}function Uh(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Fh(r.key,Pt.none()):new Ns(r.key,r.data,Pt.none());{const t=r.data,n=rt.empty();let s=new xe(Be.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?n.delete(i):n.set(i,a),s=s.add(i)}return new An(r.key,n,new at(s.toArray()),Pt.none())}}function fE(r,e,t){r instanceof Ns?function(s,i,a){const u=s.value.clone(),l=Pl(s.fieldTransforms,i,a.transformResults);u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(r,e,t):r instanceof An?function(s,i,a){if(!fi(s.precondition,i))return void i.convertToUnknownDocument(a.version);const u=Pl(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(Lh(s)),l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(r,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function as(r,e,t,n){return r instanceof Ns?function(i,a,u,l){if(!fi(i.precondition,a))return u;const d=i.value.clone(),f=Cl(i.fieldTransforms,l,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(r,e,t,n):r instanceof An?function(i,a,u,l){if(!fi(i.precondition,a))return u;const d=Cl(i.fieldTransforms,l,a),f=a.data;return f.setAll(Lh(i)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),u===null?null:u.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(r,e,t,n):function(i,a,u){return fi(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(r,e,t)}function mE(r,e){let t=null;for(const n of r.fieldTransforms){const s=e.data.field(n.field),i=xh(n.transform,s||null);i!=null&&(t===null&&(t=rt.empty()),t.set(n.field,i))}return t||null}function Rl(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&mr(n,s,(i,a)=>hE(i,a))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Ns extends Gi{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class An extends Gi{constructor(e,t,n,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Lh(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}}),e}function Pl(r,e,t){const n=new Map;le(r.length===t.length);for(let s=0;s<t.length;s++){const i=r[s],a=i.transform,u=e.data.field(i.field);n.set(i.field,cE(a,u,t[s]))}return n}function Cl(r,e,t){const n=new Map;for(const s of r){const i=s.transform,a=t.data.field(s.field);n.set(s.field,lE(i,a,e))}return n}class Fh extends Gi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class pE extends Gi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&fE(i,e,n[s])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=as(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=as(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Ph();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let u=this.applyToLocalView(a,i.mutatedFields);u=t.has(s.key)?null:u;const l=Uh(a,u);l!==null&&n.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(H.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ne())}isEqual(e){return this.batchId===e.batchId&&mr(this.mutations,e.mutations,(t,n)=>Rl(t,n))&&mr(this.baseMutations,e.baseMutations,(t,n)=>Rl(t,n))}}class Sa{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){le(e.mutations.length===n.length);let s=function(){return sE}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,n[a].version);return new Sa(e,t,n,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ne,oe;function yE(r){switch(r){default:return Y();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0}}function jh(r){if(r===void 0)return Yt("GRPC error has no .code"),C.UNKNOWN;switch(r){case Ne.OK:return C.OK;case Ne.CANCELLED:return C.CANCELLED;case Ne.UNKNOWN:return C.UNKNOWN;case Ne.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case Ne.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case Ne.INTERNAL:return C.INTERNAL;case Ne.UNAVAILABLE:return C.UNAVAILABLE;case Ne.UNAUTHENTICATED:return C.UNAUTHENTICATED;case Ne.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case Ne.NOT_FOUND:return C.NOT_FOUND;case Ne.ALREADY_EXISTS:return C.ALREADY_EXISTS;case Ne.PERMISSION_DENIED:return C.PERMISSION_DENIED;case Ne.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case Ne.ABORTED:return C.ABORTED;case Ne.OUT_OF_RANGE:return C.OUT_OF_RANGE;case Ne.UNIMPLEMENTED:return C.UNIMPLEMENTED;case Ne.DATA_LOSS:return C.DATA_LOSS;default:return Y()}}(oe=Ne||(Ne={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EE(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wE=new jn([4294967295,4294967295],0);function xl(r){const e=EE().encode(r),t=new lh;return t.update(e),new Uint8Array(t.digest())}function Vl(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new jn([t,n],0),new jn([s,i],0)]}class ka{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new es(`Invalid padding: ${t}`);if(n<0)throw new es(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new es(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new es(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=jn.fromNumber(this.Te)}Ee(e,t,n){let s=e.add(t.multiply(jn.fromNumber(n)));return s.compare(wE)===1&&(s=new jn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=xl(e),[n,s]=Vl(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(n,s,i);if(!this.de(a))return!1}return!0}static create(e,t,n){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new ka(i,s,t);return n.forEach(u=>a.insert(u)),a}insert(e){if(this.Te===0)return;const t=xl(e),[n,s]=Vl(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(n,s,i);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class es extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,t,n,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const s=new Map;return s.set(e,Ds.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Ki(H.min(),s,new we(se),Ht(),ne())}}class Ds{constructor(e,t,n,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Ds(n,t,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,t,n,s){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=s}}class qh{constructor(e,t){this.targetId=e,this.me=t}}class Bh{constructor(e,t,n=We.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}}class Ml{constructor(){this.fe=0,this.ge=Ol(),this.pe=We.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ne(),t=ne(),n=ne();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:Y()}}),new Ds(this.pe,this.ye,e,t,n)}Ce(){this.we=!1,this.ge=Ol()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,le(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class TE{constructor(e){this.Le=e,this.Be=new Map,this.ke=Ht(),this.qe=ri(),this.Qe=ri(),this.Ke=new we(se)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const n=this.ze(t);switch(e.state){case 0:this.je(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.je(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),n.De(e.resumeToken));break;default:Y()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((n,s)=>{this.je(s)&&t(s)})}Je(e){const t=e.targetId,n=e.me.count,s=this.Ye(t);if(s){const i=s.target;if(Jo(i))if(n===0){const a=new $(i.path);this.We(t,a,Qe.newNoDocument(a,H.min()))}else le(n===1);else{const a=this.Ze(t);if(a!==n){const u=this.Xe(e),l=u?this.et(u,e,a):1;if(l!==0){this.He(t);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,d)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=t;let a,u;try{a=En(n).toUint8Array()}catch(l){if(l instanceof vh)return fr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{u=new ka(a,s,i)}catch(l){return fr(l instanceof es?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return u.Te===0?null:u}et(e,t,n){return t.me.count===n-this.rt(e,t.targetId)?0:2}rt(e,t){const n=this.Le.getRemoteKeysForTarget(t);let s=0;return n.forEach(i=>{const a=this.Le.nt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(u)||(this.We(t,i,null),s++)}),s}it(e){const t=new Map;this.Be.forEach((i,a)=>{const u=this.Ye(a);if(u){if(i.current&&Jo(u.target)){const l=new $(u.target.path);this.st(l).has(a)||this.ot(a,l)||this.We(a,l,Qe.newNoDocument(l,e))}i.be&&(t.set(a,i.ve()),i.Ce())}});let n=ne();this.Qe.forEach((i,a)=>{let u=!0;a.forEachWhile(l=>{const d=this.Ye(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(n=n.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new Ki(e,t,this.Ke,this.ke,n);return this.ke=Ht(),this.qe=ri(),this.Qe=ri(),this.Ke=new we(se),s}Ue(e,t){if(!this.je(e))return;const n=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,n){if(!this.je(e))return;const s=this.ze(e);this.ot(e,t)?s.Fe(t,1):s.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Be.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new Ml,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new xe(se),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new xe(se),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||j("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new Ml),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function ri(){return new we($.comparator)}function Ol(){return new we($.comparator)}const bE={asc:"ASCENDING",desc:"DESCENDING"},IE={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},AE={and:"AND",or:"OR"};class NE{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ea(r,e){return r.useProto3Json||$i(e)?e:{value:e}}function xi(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $h(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function DE(r,e){return xi(r,e.toTimestamp())}function Ct(r){return le(!!r),H.fromTimestamp(function(t){const n=yn(t);return new Ce(n.seconds,n.nanos)}(r))}function Ra(r,e){return ta(r,e).canonicalString()}function ta(r,e){const t=function(s){return new pe(["projects",s.projectId,"databases",s.database])}(r).child("documents");return e===void 0?t:t.child(e)}function Wh(r){const e=pe.fromString(r);return le(Kh(e)),e}function na(r,e){return Ra(r.databaseId,e.path)}function Po(r,e){const t=Wh(e);if(t.get(1)!==r.databaseId.projectId)throw new B(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new B(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new $(Yh(t))}function zh(r,e){return Ra(r.databaseId,e)}function SE(r){const e=Wh(r);return e.length===4?pe.emptyPath():Yh(e)}function ra(r){return new pe(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Yh(r){return le(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function Ul(r,e,t){return{name:na(r,e),fields:t.value.mapValue.fields}}function kE(r,e){let t;if("targetChange"in e){e.targetChange;const n=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,f){return d.useProto3Json?(le(f===void 0||typeof f=="string"),We.fromBase64String(f||"")):(le(f===void 0||f instanceof Buffer||f instanceof Uint8Array),We.fromUint8Array(f||new Uint8Array))}(r,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&function(d){const f=d.code===void 0?C.UNKNOWN:jh(d.code);return new B(f,d.message||"")}(a);t=new Bh(n,s,i,u||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const s=Po(r,n.document.name),i=Ct(n.document.updateTime),a=n.document.createTime?Ct(n.document.createTime):H.min(),u=new rt({mapValue:{fields:n.document.fields}}),l=Qe.newFoundDocument(s,i,a,u),d=n.targetIds||[],f=n.removedTargetIds||[];t=new mi(d,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const s=Po(r,n.document),i=n.readTime?Ct(n.readTime):H.min(),a=Qe.newNoDocument(s,i),u=n.removedTargetIds||[];t=new mi([],u,a.key,a)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const s=Po(r,n.document),i=n.removedTargetIds||[];t=new mi([],i,s,null)}else{if(!("filter"in e))return Y();{e.filter;const n=e.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,a=new vE(s,i),u=n.targetId;t=new qh(u,a)}}return t}function RE(r,e){let t;if(e instanceof Ns)t={update:Ul(r,e.key,e.value)};else if(e instanceof Fh)t={delete:na(r,e.key)};else if(e instanceof An)t={update:Ul(r,e.key,e.data),updateMask:FE(e.fieldMask)};else{if(!(e instanceof pE))return Y();t={verify:na(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(i,a){const u=a.transform;if(u instanceof Pi)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof gs)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof _s)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Ci)return{fieldPath:a.field.canonicalString(),increment:u.Pe};throw Y()}(0,n))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:DE(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Y()}(r,e.precondition)),t}function PE(r,e){return r&&r.length>0?(le(e!==void 0),r.map(t=>function(s,i){let a=s.updateTime?Ct(s.updateTime):Ct(i);return a.isEqual(H.min())&&(a=Ct(i)),new dE(a,s.transformResults||[])}(t,e))):[]}function CE(r,e){return{documents:[zh(r,e.path)]}}function xE(r,e){const t={structuredQuery:{}},n=e.path;let s;e.collectionGroup!==null?(s=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=zh(r,s);const i=function(d){if(d.length!==0)return Gh(pt.create(d,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(f=>function(w){return{field:sr(w.field),direction:OE(w.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const u=ea(r,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ct:t,parent:s}}function VE(r){let e=SE(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let s=null;if(n>0){le(n===1);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(p){const w=Hh(p);return w instanceof pt&&Th(w)?w.getFilters():[w]}(t.where));let a=[];t.orderBy&&(a=function(p){return p.map(w=>function(x){return new Ri(ir(x.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(w))}(t.orderBy));let u=null;t.limit&&(u=function(p){let w;return w=typeof p=="object"?p.value:p,$i(w)?null:w}(t.limit));let l=null;t.startAt&&(l=function(p){const w=!!p.before,A=p.values||[];return new ki(A,w)}(t.startAt));let d=null;return t.endAt&&(d=function(p){const w=!p.before,A=p.values||[];return new ki(A,w)}(t.endAt)),Zy(e,s,a,i,u,"F",l,d)}function ME(r,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Hh(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=ir(t.unaryFilter.field);return De.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=ir(t.unaryFilter.field);return De.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ir(t.unaryFilter.field);return De.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=ir(t.unaryFilter.field);return De.create(a,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(r):r.fieldFilter!==void 0?function(t){return De.create(ir(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return pt.create(t.compositeFilter.filters.map(n=>Hh(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Y()}}(t.compositeFilter.op))}(r):Y()}function OE(r){return bE[r]}function UE(r){return IE[r]}function LE(r){return AE[r]}function sr(r){return{fieldPath:r.canonicalString()}}function ir(r){return Be.fromServerFormat(r.fieldPath)}function Gh(r){return r instanceof De?function(t){if(t.op==="=="){if(Il(t.value))return{unaryFilter:{field:sr(t.field),op:"IS_NAN"}};if(bl(t.value))return{unaryFilter:{field:sr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Il(t.value))return{unaryFilter:{field:sr(t.field),op:"IS_NOT_NAN"}};if(bl(t.value))return{unaryFilter:{field:sr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:sr(t.field),op:UE(t.op),value:t.value}}}(r):r instanceof pt?function(t){const n=t.getFilters().map(s=>Gh(s));return n.length===1?n[0]:{compositeFilter:{op:LE(t.op),filters:n}}}(r):Y()}function FE(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Kh(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e,t,n,s,i=H.min(),a=H.min(),u=We.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=l}withSequenceNumber(e){return new fn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new fn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new fn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new fn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(e){this.ht=e}}function qE(r){const e=VE({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Zo(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(){this.ln=new $E}addToCollectionParentIndex(e,t){return this.ln.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(vn.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(vn.min())}updateCollectionGroup(e,t,n){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}}class $E{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new xe(pe.comparator),i=!s.has(n);return this.index[t]=s.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new xe(pe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class nt{static withCacheSize(e){return new nt(e,nt.DEFAULT_COLLECTION_PERCENTILE,nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nt.DEFAULT_COLLECTION_PERCENTILE=10,nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,nt.DEFAULT=new nt(41943040,nt.DEFAULT_COLLECTION_PERCENTILE,nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),nt.DISABLED=new nt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new _r(0)}static Qn(){return new _r(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl([r,e],[t,n]){const s=se(r,t);return s===0?se(e,n):s}class WE{constructor(e){this.Gn=e,this.buffer=new xe(Fl),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();Fl(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class zE{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){j("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Nr(t)?j("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Ar(t)}await this.Yn(3e5)})}}class YE{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return P.resolve(Bi.oe);const n=new WE(t);return this.Zn.forEachTarget(e,s=>n.Hn(s.sequenceNumber)).next(()=>this.Zn.er(e,s=>n.Hn(s))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Zn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(j("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(Ll)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(j("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ll):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let n,s,i,a,u,l,d;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(j("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(n=p,u=Date.now(),this.removeTargets(e,n,t))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,n))).next(p=>(d=Date.now(),nr()<=te.DEBUG&&j("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(u-a)+`ms
	Removed ${i} targets in `+(l-u)+`ms
	Removed ${p} documents in `+(d-l)+`ms
Total Duration: ${d-f}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function HE(r,e){return new YE(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(){this.changes=new zn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Qe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?P.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(n=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(n!==null&&as(n.mutation,s,at.empty(),Ce.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,ne()).next(()=>n))}getLocalViewOfDocuments(e,t,n=ne()){const s=Fn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,n).next(i=>{let a=Zr();return i.forEach((u,l)=>{a=a.insert(u,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const n=Fn();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,ne()))}populateOverlays(e,t,n){const s=[];return n.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,u)=>{t.set(a,u)})})}computeViews(e,t,n,s){let i=Ht();const a=os(),u=function(){return os()}();return t.forEach((l,d)=>{const f=n.get(d.key);s.has(d.key)&&(f===void 0||f.mutation instanceof An)?i=i.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),as(f.mutation,d,f.mutation.getFieldMask(),Ce.now())):a.set(d.key,at.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((d,f)=>a.set(d,f)),t.forEach((d,f)=>{var p;return u.set(d,new KE(f,(p=a.get(d))!==null&&p!==void 0?p:null))}),u))}recalculateAndSaveOverlays(e,t){const n=os();let s=new we((a,u)=>a-u),i=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const u of a)u.keys().forEach(l=>{const d=t.get(l);if(d===null)return;let f=n.get(l)||at.empty();f=u.applyToLocalView(d,f),n.set(l,f);const p=(s.get(u.batchId)||ne()).add(l);s=s.insert(u.batchId,p)})}).next(()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const l=u.getNext(),d=l.key,f=l.value,p=Ph();f.forEach(w=>{if(!i.has(w)){const A=Uh(t.get(w),n.get(w));A!==null&&p.set(w,A),i=i.add(w)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,p))}return P.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,s){return function(a){return $.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Nh(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,s):this.getDocumentsMatchingCollectionQuery(e,t,n,s)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-i.size):P.resolve(Fn());let u=-1,l=i;return a.next(d=>P.forEach(d,(f,p)=>(u<p.largestBatchId&&(u=p.largestBatchId),i.get(f)?P.resolve():this.remoteDocumentCache.getEntry(e,f).next(w=>{l=l.insert(f,w)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,l,d,ne())).next(f=>({batchId:u,changes:Rh(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new $(t)).next(n=>{let s=Zr();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,n,s){const i=t.collectionGroup;let a=Zr();return this.indexManager.getCollectionParents(e,i).next(u=>P.forEach(u,l=>{const d=function(p,w){return new As(w,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,n,s).next(f=>{f.forEach((p,w)=>{a=a.insert(p,w)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,s))).next(a=>{i.forEach((l,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,Qe.newInvalidDocument(f)))});let u=Zr();return a.forEach((l,d)=>{const f=i.get(l);f!==void 0&&as(f.mutation,d,at.empty(),Ce.now()),Yi(t,d)&&(u=u.insert(l,d))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return P.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Ct(s.createTime)}}(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(s){return{name:s.name,query:qE(s.bundledQuery),readTime:Ct(s.readTime)}}(t)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(){this.overlays=new we($.comparator),this.Er=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Fn();return P.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((s,i)=>{this.Tt(e,t,i)}),P.resolve()}removeOverlaysForBatchId(e,t,n){const s=this.Er.get(n);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Er.delete(n)),P.resolve()}getOverlaysForCollection(e,t,n){const s=Fn(),i=t.length+1,a=new $(t.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const l=u.getNext().value,d=l.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&l.largestBatchId>n&&s.set(l.getKey(),l)}return P.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let i=new we((d,f)=>d-f);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>n){let f=i.get(d.largestBatchId);f===null&&(f=Fn(),i=i.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const u=Fn(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,f)=>u.set(d,f)),!(u.size()>=s)););return P.resolve(u)}Tt(e,t,n){const s=this.overlays.get(n.key);if(s!==null){const a=this.Er.get(s.largestBatchId).delete(n.key);this.Er.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new _E(t,n));let i=this.Er.get(t);i===void 0&&(i=ne(),this.Er.set(t,i)),this.Er.set(t,i.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(){this.sessionToken=We.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(){this.dr=new xe(Me.Ar),this.Rr=new xe(Me.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){const n=new Me(e,t);this.dr=this.dr.add(n),this.Rr=this.Rr.add(n)}mr(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.gr(new Me(e,t))}pr(e,t){e.forEach(n=>this.removeReference(n,t))}yr(e){const t=new $(new pe([])),n=new Me(t,e),s=new Me(t,e+1),i=[];return this.Rr.forEachInRange([n,s],a=>{this.gr(a),i.push(a.key)}),i}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new $(new pe([])),n=new Me(t,e),s=new Me(t,e+1);let i=ne();return this.Rr.forEachInRange([n,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new Me(e,0),n=this.dr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class Me{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return $.comparator(e.key,t.key)||se(e.br,t.br)}static Vr(e,t){return se(e.br,t.br)||$.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new xe(Me.Ar)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,s){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new gE(i,t,n,s);this.mutationQueue.push(a);for(const u of s)this.vr=this.vr.add(new Me(u.key,i)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return P.resolve(a)}lookupMutationBatch(e,t){return P.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=this.Fr(n),i=s<0?0:s;return P.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Me(t,0),s=new Me(t,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([n,s],a=>{const u=this.Cr(a.br);i.push(u)}),P.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new xe(se);return t.forEach(s=>{const i=new Me(s,0),a=new Me(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([i,a],u=>{n=n.add(u.br)})}),P.resolve(this.Mr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1;let i=n;$.isDocumentKey(i)||(i=i.child(""));const a=new Me(new $(i),0);let u=new xe(se);return this.vr.forEachWhile(l=>{const d=l.key.path;return!!n.isPrefixOf(d)&&(d.length===s&&(u=u.add(l.br)),!0)},a),P.resolve(this.Mr(u))}Mr(e){const t=[];return e.forEach(n=>{const s=this.Cr(n);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){le(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let n=this.vr;return P.forEach(t.mutations,s=>{const i=new Me(s.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.vr=n})}Ln(e){}containsKey(e,t){const n=new Me(t,0),s=this.vr.firstAfterOrEqual(n);return P.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e){this.Nr=e,this.docs=function(){return new we($.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,s=this.docs.get(n),i=s?s.size:0,a=this.Nr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return P.resolve(n?n.document.mutableCopy():Qe.newInvalidDocument(t))}getEntries(e,t){let n=Ht();return t.forEach(s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():Qe.newInvalidDocument(s))}),P.resolve(n)}getDocumentsMatchingQuery(e,t,n,s){let i=Ht();const a=t.path,u=new $(a.child("")),l=this.docs.getIteratorFrom(u);for(;l.hasNext();){const{key:d,value:{document:f}}=l.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Cy(Py(f),n)<=0||(s.has(f.key)||Yi(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return P.resolve(i)}getAllFromCollectionGroup(e,t,n,s){Y()}Lr(e,t){return P.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new nw(this)}getSize(e){return P.resolve(this.size)}}class nw extends GE{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?t.push(this.hr.addEntry(e,s)):this.hr.removeEntry(n)}),P.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e){this.persistence=e,this.Br=new zn(t=>Ia(t),Aa),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.kr=0,this.qr=new Pa,this.targetCount=0,this.Qr=_r.qn()}forEachTarget(e,t){return this.Br.forEach((n,s)=>t(s)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.kr&&(this.kr=t),P.resolve()}Un(e){this.Br.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new _r(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.Un(t),P.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,n){let s=0;const i=[];return this.Br.forEach((a,u)=>{u.sequenceNumber<=t&&n.get(u.targetId)===null&&(this.Br.delete(a),i.push(this.removeMatchingKeysForTargetId(e,u.targetId)),s++)}),P.waitFor(i).next(()=>s)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){const n=this.Br.get(t)||null;return P.resolve(n)}addMatchingKeys(e,t,n){return this.qr.mr(t,n),P.resolve()}removeMatchingKeys(e,t,n){this.qr.pr(t,n);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),P.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),P.resolve()}getMatchingKeysForTargetId(e,t){const n=this.qr.Sr(t);return P.resolve(n)}containsKey(e,t){return P.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e,t){this.Kr={},this.overlays={},this.$r=new Bi(0),this.Ur=!1,this.Ur=!0,this.Wr=new ZE,this.referenceDelegate=e(this),this.Gr=new rw(this),this.indexManager=new BE,this.remoteDocumentCache=function(s){return new tw(s)}(n=>this.referenceDelegate.zr(n)),this.serializer=new jE(t),this.jr=new JE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new XE,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Kr[e.toKey()];return n||(n=new ew(t,this.referenceDelegate),this.Kr[e.toKey()]=n),n}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,n){j("MemoryPersistence","Starting transaction:",e);const s=new sw(this.$r.next());return this.referenceDelegate.Hr(),n(s).next(i=>this.referenceDelegate.Jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Yr(e,t){return P.or(Object.values(this.Kr).map(n=>()=>n.containsKey(e,t)))}}class sw extends Vy{constructor(e){super(),this.currentSequenceNumber=e}}class Ca{constructor(e){this.persistence=e,this.Zr=new Pa,this.Xr=null}static ei(e){return new Ca(e)}get ti(){if(this.Xr)return this.Xr;throw Y()}addReference(e,t,n){return this.Zr.addReference(n,t),this.ti.delete(n.toString()),P.resolve()}removeReference(e,t,n){return this.Zr.removeReference(n,t),this.ti.add(n.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),P.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(s=>this.ti.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.ti.add(i.toString()))}).next(()=>n.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.ti,n=>{const s=$.fromPath(n);return this.ni(e,s).next(i=>{i||t.removeEntry(s,H.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(n=>{n?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return P.or([()=>P.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class Vi{constructor(e,t){this.persistence=e,this.ri=new zn(n=>Uy(n.path),(n,s)=>n.isEqual(s)),this.garbageCollector=HE(this,t)}static ei(e,t){return new Vi(e,t)}Hr(){}Jr(e){return P.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(n=>t.next(s=>n+s))}nr(e){let t=0;return this.er(e,n=>{t++}).next(()=>t)}er(e,t){return P.forEach(this.ri,(n,s)=>this.ir(e,n,s).next(i=>i?P.resolve():t(s)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Lr(e,a=>this.ir(e,a,t).next(u=>{u||(n++,i.removeEntry(a,H.min()))})).next(()=>i.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),P.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.ri.set(n,e.currentSequenceNumber),P.resolve()}removeReference(e,t,n){return this.ri.set(n,e.currentSequenceNumber),P.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),P.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=hi(e.data.value)),t}ir(e,t,n){return P.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.ri.get(t);return P.resolve(s!==void 0&&s>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.Wi=n,this.Gi=s}static zi(e,t){let n=ne(),s=ne();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new xa(e,t.fromCache,n,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return qp()?8:My(Je())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,n,s){const i={result:null};return this.Xi(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.es(e,t,s,n).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new iw;return this.ts(e,t,a).next(u=>{if(i.result=u,this.Hi)return this.ns(e,t,a,u.size)})}).next(()=>i.result)}ns(e,t,n,s){return n.documentReadCount<this.Ji?(nr()<=te.DEBUG&&j("QueryEngine","SDK will not create cache indexes for query:",rr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),P.resolve()):(nr()<=te.DEBUG&&j("QueryEngine","Query:",rr(t),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.Yi*s?(nr()<=te.DEBUG&&j("QueryEngine","The SDK decides to create cache indexes for query:",rr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Rt(t))):P.resolve())}Xi(e,t){if(Sl(t))return P.resolve(null);let n=Rt(t);return this.indexManager.getIndexType(e,n).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Zo(t,null,"F"),n=Rt(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(i=>{const a=ne(...i);return this.Zi.getDocuments(e,a).next(u=>this.indexManager.getMinOffset(e,n).next(l=>{const d=this.rs(t,u);return this.ss(t,d,a,l.readTime)?this.Xi(e,Zo(t,null,"F")):this.os(e,d,t,l)}))})))}es(e,t,n,s){return Sl(t)||s.isEqual(H.min())?P.resolve(null):this.Zi.getDocuments(e,n).next(i=>{const a=this.rs(t,i);return this.ss(t,a,n,s)?P.resolve(null):(nr()<=te.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),rr(t)),this.os(e,a,t,Ry(s,-1)).next(u=>u))})}rs(e,t){let n=new xe(Sh(e));return t.forEach((s,i)=>{Yi(e,i)&&(n=n.add(i))}),n}ss(e,t,n,s){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ts(e,t,n){return nr()<=te.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",rr(t)),this.Zi.getDocumentsMatchingQuery(e,t,vn.min(),n)}os(e,t,n,s){return this.Zi.getDocumentsMatchingQuery(e,n,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(e,t,n,s){this.persistence=e,this._s=t,this.serializer=s,this.us=new we(se),this.cs=new zn(i=>Ia(i),Aa),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(n)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new QE(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function uw(r,e,t,n){return new aw(r,e,t,n)}async function Jh(r,e){const t=G(r);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let s;return t.mutationQueue.getAllMutationBatches(n).next(i=>(s=i,t.Ps(e),t.mutationQueue.getAllMutationBatches(n))).next(i=>{const a=[],u=[];let l=ne();for(const d of s){a.push(d.batchId);for(const f of d.mutations)l=l.add(f.key)}for(const d of i){u.push(d.batchId);for(const f of d.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(n,l).next(d=>({Ts:d,removedBatchIds:a,addedBatchIds:u}))})})}function lw(r,e){const t=G(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=e.batch.keys(),i=t.hs.newChangeBuffer({trackRemovals:!0});return function(u,l,d,f){const p=d.batch,w=p.keys();let A=P.resolve();return w.forEach(x=>{A=A.next(()=>f.getEntry(l,x)).next(O=>{const S=d.docVersions.get(x);le(S!==null),O.version.compareTo(S)<0&&(p.applyToRemoteDocument(O,d),O.isValidDocument()&&(O.setReadTime(d.commitVersion),f.addEntry(O)))})}),A.next(()=>u.mutationQueue.removeMutationBatch(l,p))}(t,n,e,i).next(()=>i.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(u){let l=ne();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(l=l.add(u.batch.mutations[d].key));return l}(e))).next(()=>t.localDocuments.getDocuments(n,s))})}function Xh(r){const e=G(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function cw(r,e){const t=G(r),n=e.snapshotVersion;let s=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.hs.newChangeBuffer({trackRemovals:!0});s=t.us;const u=[];e.targetChanges.forEach((f,p)=>{const w=s.get(p);if(!w)return;u.push(t.Gr.removeMatchingKeys(i,f.removedDocuments,p).next(()=>t.Gr.addMatchingKeys(i,f.addedDocuments,p)));let A=w.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?A=A.withResumeToken(We.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,n)),s=s.insert(p,A),function(O,S,L){return O.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=3e8?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(w,A,f)&&u.push(t.Gr.updateTargetData(i,A))});let l=Ht(),d=ne();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),u.push(hw(i,a,e.documentUpdates).next(f=>{l=f.Is,d=f.Es})),!n.isEqual(H.min())){const f=t.Gr.getLastRemoteSnapshotVersion(i).next(p=>t.Gr.setTargetsMetadata(i,i.currentSequenceNumber,n));u.push(f)}return P.waitFor(u).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,d)).next(()=>l)}).then(i=>(t.us=s,i))}function hw(r,e,t){let n=ne(),s=ne();return t.forEach(i=>n=n.add(i)),e.getEntries(r,n).next(i=>{let a=Ht();return t.forEach((u,l)=>{const d=i.get(u);l.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(u)),l.isNoDocument()&&l.version.isEqual(H.min())?(e.removeEntry(u,l.readTime),a=a.insert(u,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),a=a.insert(u,l)):j("LocalStore","Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",l.version)}),{Is:a,Es:s}})}function dw(r,e){const t=G(r);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function fw(r,e){const t=G(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return t.Gr.getTargetData(n,e).next(i=>i?(s=i,P.resolve(s)):t.Gr.allocateTargetId(n).next(a=>(s=new fn(e,a,"TargetPurposeListen",n.currentSequenceNumber),t.Gr.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=t.us.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.us=t.us.insert(n.targetId,n),t.cs.set(e,n.targetId)),n})}async function sa(r,e,t){const n=G(r),s=n.us.get(e),i=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",i,a=>n.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Nr(a))throw a;j("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}n.us=n.us.remove(e),n.cs.delete(s.target)}function jl(r,e,t){const n=G(r);let s=H.min(),i=ne();return n.persistence.runTransaction("Execute query","readwrite",a=>function(l,d,f){const p=G(l),w=p.cs.get(f);return w!==void 0?P.resolve(p.us.get(w)):p.Gr.getTargetData(d,f)}(n,a,Rt(e)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,n.Gr.getMatchingKeysForTargetId(a,u.targetId).next(l=>{i=l})}).next(()=>n._s.getDocumentsMatchingQuery(a,e,t?s:H.min(),t?i:ne())).next(u=>(mw(n,tE(e),u),{documents:u,ds:i})))}function mw(r,e,t){let n=r.ls.get(e)||H.min();t.forEach((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)}),r.ls.set(e,n)}class ql{constructor(){this.activeTargetIds=aE()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class pw{constructor(){this._o=new ql,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,n){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new ql,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){j("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){j("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let si=null;function Co(){return si===null?si=function(){return 268435456+Math.round(2147483648*Math.random())}():si++,"0x"+si.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _w={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge="WebChannelConnection";class yw extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Fo=n+"://"+t.host,this.Mo=`projects/${s}/databases/${i}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Oo(t,n,s,i,a){const u=Co(),l=this.No(t,n.toUriEncodedString());j("RestConnection",`Sending RPC '${t}' ${u}:`,l,s);const d={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(d,i,a),this.Bo(t,l,d,s).then(f=>(j("RestConnection",`Received RPC '${t}' ${u}: `,f),f),f=>{throw fr("RestConnection",`RPC '${t}' ${u} failed with error: `,f,"url: ",l,"request:",s),f})}ko(t,n,s,i,a,u){return this.Oo(t,n,s,i,a)}Lo(t,n,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ir}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,a)=>t[a]=i),s&&s.headers.forEach((i,a)=>t[a]=i)}No(t,n){const s=_w[t];return`${this.Fo}/v1/${n}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,n,s){const i=Co();return new Promise((a,u)=>{const l=new ch;l.setWithCredentials(!0),l.listenOnce(hh.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case ci.NO_ERROR:const f=l.getResponseJson();j(Ge,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),a(f);break;case ci.TIMEOUT:j(Ge,`RPC '${e}' ${i} timed out`),u(new B(C.DEADLINE_EXCEEDED,"Request time out"));break;case ci.HTTP_ERROR:const p=l.getStatus();if(j(Ge,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let w=l.getResponseJson();Array.isArray(w)&&(w=w[0]);const A=w==null?void 0:w.error;if(A&&A.status&&A.message){const x=function(S){const L=S.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(L)>=0?L:C.UNKNOWN}(A.status);u(new B(x,A.message))}else u(new B(C.UNKNOWN,"Server responded with status "+l.getStatus()))}else u(new B(C.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{j(Ge,`RPC '${e}' ${i} completed.`)}});const d=JSON.stringify(s);j(Ge,`RPC '${e}' ${i} sending request:`,s),l.send(t,"POST",d,n,15)})}qo(e,t,n){const s=Co(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=mh(),u=fh(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Lo(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;const f=i.join("");j(Ge,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=a.createWebChannel(f,l);let w=!1,A=!1;const x=new vw({Eo:S=>{A?j(Ge,`Not sending because RPC '${e}' stream ${s} is closed:`,S):(w||(j(Ge,`Opening RPC '${e}' stream ${s} transport.`),p.open(),w=!0),j(Ge,`RPC '${e}' stream ${s} sending:`,S),p.send(S))},Ao:()=>p.close()}),O=(S,L,M)=>{S.listen(L,q=>{try{M(q)}catch(K){setTimeout(()=>{throw K},0)}})};return O(p,Xr.EventType.OPEN,()=>{A||(j(Ge,`RPC '${e}' stream ${s} transport opened.`),x.So())}),O(p,Xr.EventType.CLOSE,()=>{A||(A=!0,j(Ge,`RPC '${e}' stream ${s} transport closed`),x.Do())}),O(p,Xr.EventType.ERROR,S=>{A||(A=!0,fr(Ge,`RPC '${e}' stream ${s} transport errored:`,S),x.Do(new B(C.UNAVAILABLE,"The operation could not be completed")))}),O(p,Xr.EventType.MESSAGE,S=>{var L;if(!A){const M=S.data[0];le(!!M);const q=M,K=(q==null?void 0:q.error)||((L=q[0])===null||L===void 0?void 0:L.error);if(K){j(Ge,`RPC '${e}' stream ${s} received error:`,K);const fe=K.status;let re=function(v){const T=Ne[v];if(T!==void 0)return jh(T)}(fe),b=K.message;re===void 0&&(re=C.INTERNAL,b="Unknown error status: "+fe+" with message "+K.message),A=!0,x.Do(new B(re,b)),p.close()}else j(Ge,`RPC '${e}' stream ${s} received:`,M),x.vo(M)}}),O(u,dh.STAT_EVENT,S=>{S.stat===Ho.PROXY?j(Ge,`RPC '${e}' stream ${s} detected buffering proxy`):S.stat===Ho.NOPROXY&&j(Ge,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{x.bo()},0),x}}function xo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(r){return new NE(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e,t,n=1e3,s=1.5,i=6e4){this.li=e,this.timerId=t,this.Qo=n,this.Ko=s,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),n=Math.max(0,Date.now()-this.Go),s=Math.max(0,t-n);s>0&&j("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e,t,n,s,i,a,u,l){this.li=e,this.Yo=n,this.Zo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=l,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Zh(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===C.RESOURCE_EXHAUSTED?(Yt(t.toString()),Yt("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.Xo===t&&this.I_(n,s)},n=>{e(()=>{const s=new B(C.UNKNOWN,"Fetching auth token failed: "+n.message);return this.E_(s)})})}I_(e,t){const n=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{n(()=>this.listener.Ro())}),this.stream.mo(()=>{n(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{n(()=>this.E_(s))}),this.stream.onMessage(s=>{n(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return j("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(j("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ew extends ed{constructor(e,t,n,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,a),this.serializer=i}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=kE(this.serializer,e),n=function(i){if(!("targetChange"in i))return H.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?H.min():a.readTime?Ct(a.readTime):H.min()}(e);return this.listener.R_(t,n)}V_(e){const t={};t.database=ra(this.serializer),t.addTarget=function(i,a){let u;const l=a.target;if(u=Jo(l)?{documents:CE(i,l)}:{query:xE(i,l).ct},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=$h(i,a.resumeToken);const d=ea(i,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(H.min())>0){u.readTime=xi(i,a.snapshotVersion.toTimestamp());const d=ea(i,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,e);const n=ME(this.serializer,e);n&&(t.labels=n),this.c_(t)}m_(e){const t={};t.database=ra(this.serializer),t.removeTarget=e,this.c_(t)}}class ww extends ed{constructor(e,t,n,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,a),this.serializer=i}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,t){return this.connection.qo("Write",e,t)}A_(e){return le(!!e.streamToken),this.lastStreamToken=e.streamToken,le(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){le(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=PE(e.writeResults,e.commitTime),n=Ct(e.commitTime);return this.listener.y_(n,t)}w_(){const e={};e.database=ra(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>RE(this.serializer,n))};this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw extends class{}{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new B(C.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,n,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Oo(e,ta(t,n),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new B(C.UNKNOWN,i.toString())})}ko(e,t,n,s,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.ko(e,ta(t,n),s,a,u,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new B(C.UNKNOWN,a.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class bw{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Yt(t),this.C_=!1):j("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(e,t,n,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo(a=>{n.enqueueAndForget(async()=>{Yn(this)&&(j("RemoteStore","Restarting streams for network reachability change."),await async function(l){const d=G(l);d.k_.add(4),await Ss(d),d.K_.set("Unknown"),d.k_.delete(4),await Ji(d)}(this))})}),this.K_=new bw(n,s)}}async function Ji(r){if(Yn(r))for(const e of r.q_)await e(!0)}async function Ss(r){for(const e of r.q_)await e(!1)}function td(r,e){const t=G(r);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),Ua(t)?Oa(t):Dr(t).s_()&&Ma(t,e))}function Va(r,e){const t=G(r),n=Dr(t);t.B_.delete(e),n.s_()&&nd(t,e),t.B_.size===0&&(n.s_()?n.a_():Yn(t)&&t.K_.set("Unknown"))}function Ma(r,e){if(r.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(H.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Dr(r).V_(e)}function nd(r,e){r.U_.xe(e),Dr(r).m_(e)}function Oa(r){r.U_=new TE({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>r.B_.get(e)||null,nt:()=>r.datastore.serializer.databaseId}),Dr(r).start(),r.K_.F_()}function Ua(r){return Yn(r)&&!Dr(r).i_()&&r.B_.size>0}function Yn(r){return G(r).k_.size===0}function rd(r){r.U_=void 0}async function Aw(r){r.K_.set("Online")}async function Nw(r){r.B_.forEach((e,t)=>{Ma(r,e)})}async function Dw(r,e){rd(r),Ua(r)?(r.K_.O_(e),Oa(r)):r.K_.set("Unknown")}async function Sw(r,e,t){if(r.K_.set("Online"),e instanceof Bh&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const u of i.targetIds)s.B_.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.B_.delete(u),s.U_.removeTarget(u))}(r,e)}catch(n){j("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Mi(r,n)}else if(e instanceof mi?r.U_.$e(e):e instanceof qh?r.U_.Je(e):r.U_.Ge(e),!t.isEqual(H.min()))try{const n=await Xh(r.localStore);t.compareTo(n)>=0&&await function(i,a){const u=i.U_.it(a);return u.targetChanges.forEach((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.B_.get(d);f&&i.B_.set(d,f.withResumeToken(l.resumeToken,a))}}),u.targetMismatches.forEach((l,d)=>{const f=i.B_.get(l);if(!f)return;i.B_.set(l,f.withResumeToken(We.EMPTY_BYTE_STRING,f.snapshotVersion)),nd(i,l);const p=new fn(f.target,l,d,f.sequenceNumber);Ma(i,p)}),i.remoteSyncer.applyRemoteEvent(u)}(r,t)}catch(n){j("RemoteStore","Failed to raise snapshot:",n),await Mi(r,n)}}async function Mi(r,e,t){if(!Nr(e))throw e;r.k_.add(1),await Ss(r),r.K_.set("Offline"),t||(t=()=>Xh(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{j("RemoteStore","Retrying IndexedDB access"),await t(),r.k_.delete(1),await Ji(r)})}function sd(r,e){return e().catch(t=>Mi(r,t,e))}async function Xi(r){const e=G(r),t=Tn(e);let n=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;kw(e);)try{const s=await dw(e.localStore,n);if(s===null){e.L_.length===0&&t.a_();break}n=s.batchId,Rw(e,s)}catch(s){await Mi(e,s)}id(e)&&od(e)}function kw(r){return Yn(r)&&r.L_.length<10}function Rw(r,e){r.L_.push(e);const t=Tn(r);t.s_()&&t.f_&&t.g_(e.mutations)}function id(r){return Yn(r)&&!Tn(r).i_()&&r.L_.length>0}function od(r){Tn(r).start()}async function Pw(r){Tn(r).w_()}async function Cw(r){const e=Tn(r);for(const t of r.L_)e.g_(t.mutations)}async function xw(r,e,t){const n=r.L_.shift(),s=Sa.from(n,e,t);await sd(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await Xi(r)}async function Vw(r,e){e&&Tn(r).f_&&await async function(n,s){if(function(a){return yE(a)&&a!==C.ABORTED}(s.code)){const i=n.L_.shift();Tn(n).__(),await sd(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Xi(n)}}(r,e),id(r)&&od(r)}async function $l(r,e){const t=G(r);t.asyncQueue.verifyOperationInProgress(),j("RemoteStore","RemoteStore received new credentials");const n=Yn(t);t.k_.add(3),await Ss(t),n&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await Ji(t)}async function Mw(r,e){const t=G(r);e?(t.k_.delete(2),await Ji(t)):e||(t.k_.add(2),await Ss(t),t.K_.set("Unknown"))}function Dr(r){return r.W_||(r.W_=function(t,n,s){const i=G(t);return i.b_(),new Ew(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Ro:Aw.bind(null,r),mo:Nw.bind(null,r),po:Dw.bind(null,r),R_:Sw.bind(null,r)}),r.q_.push(async e=>{e?(r.W_.__(),Ua(r)?Oa(r):r.K_.set("Unknown")):(await r.W_.stop(),rd(r))})),r.W_}function Tn(r){return r.G_||(r.G_=function(t,n,s){const i=G(t);return i.b_(),new ww(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Ro:()=>Promise.resolve(),mo:Pw.bind(null,r),po:Vw.bind(null,r),p_:Cw.bind(null,r),y_:xw.bind(null,r)}),r.q_.push(async e=>{e?(r.G_.__(),await Xi(r)):(await r.G_.stop(),r.L_.length>0&&(j("RemoteStore",`Stopping write stream with ${r.L_.length} pending writes`),r.L_=[]))})),r.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,t,n,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new $t,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,s,i){const a=Date.now()+n,u=new La(e,t,a,s,i);return u.start(n),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fa(r,e){if(Yt("AsyncQueue",`${e}: ${r}`),Nr(r))return new B(C.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{static emptySet(e){return new hr(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||$.comparator(t.key,n.key):(t,n)=>$.comparator(t.key,n.key),this.keyedMap=Zr(),this.sortedSet=new we(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof hr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new hr;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(){this.z_=new we($.comparator)}track(e){const t=e.doc.key,n=this.z_.get(t);n?e.type!==0&&n.type===3?this.z_=this.z_.insert(t,e):e.type===3&&n.type!==1?this.z_=this.z_.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.z_=this.z_.remove(t):e.type===1&&n.type===2?this.z_=this.z_.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):Y():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,n)=>{e.push(n)}),e}}class vr{constructor(e,t,n,s,i,a,u,l,d){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,t,n,s,i){const a=[];return t.forEach(u=>{a.push({type:0,doc:u})}),new vr(e,t,hr.emptySet(t),a,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&zi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==n[s].type||!t[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class Uw{constructor(){this.queries=zl(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,n){const s=G(t),i=s.queries;s.queries=zl(),i.forEach((a,u)=>{for(const l of u.J_)l.onError(n)})})(this,new B(C.ABORTED,"Firestore shutting down"))}}function zl(){return new zn(r=>Dh(r),zi)}async function ad(r,e){const t=G(r);let n=3;const s=e.query;let i=t.queries.get(s);i?!i.Y_()&&e.Z_()&&(n=2):(i=new Ow,n=e.Z_()?0:1);try{switch(n){case 0:i.H_=await t.onListen(s,!0);break;case 1:i.H_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const u=Fa(a,`Initialization of query '${rr(e.query)}' failed`);return void e.onError(u)}t.queries.set(s,i),i.J_.push(e),e.ea(t.onlineState),i.H_&&e.ta(i.H_)&&ja(t)}async function ud(r,e){const t=G(r),n=e.query;let s=3;const i=t.queries.get(n);if(i){const a=i.J_.indexOf(e);a>=0&&(i.J_.splice(a,1),i.J_.length===0?s=e.Z_()?0:1:!i.Y_()&&e.Z_()&&(s=2))}switch(s){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function Lw(r,e){const t=G(r);let n=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const u of a.J_)u.ta(s)&&(n=!0);a.H_=s}}n&&ja(t)}function Fw(r,e,t){const n=G(r),s=n.queries.get(e);if(s)for(const i of s.J_)i.onError(t);n.queries.delete(e)}function ja(r){r.X_.forEach(e=>{e.next()})}var ia,Yl;(Yl=ia||(ia={})).na="default",Yl.Cache="cache";class ld{constructor(e,t,n){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=n||{}}ta(e){if(!this.options.includeMetadataChanges){const n=[];for(const s of e.docChanges)s.type!==3&&n.push(s);e=new vr(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const n=t!=="Offline";return(!this.options.ua||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=vr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==ia.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(e){this.key=e}}class hd{constructor(e){this.key=e}}class jw{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=ne(),this.mutatedKeys=ne(),this.Va=Sh(e),this.ma=new hr(this.Va)}get fa(){return this.da}ga(e,t){const n=t?t.pa:new Wl,s=t?t.ma:this.ma;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,u=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const w=s.get(f),A=Yi(this.query,p)?p:null,x=!!w&&this.mutatedKeys.has(w.key),O=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let S=!1;w&&A?w.data.isEqual(A.data)?x!==O&&(n.track({type:3,doc:A}),S=!0):this.ya(w,A)||(n.track({type:2,doc:A}),S=!0,(l&&this.Va(A,l)>0||d&&this.Va(A,d)<0)&&(u=!0)):!w&&A?(n.track({type:0,doc:A}),S=!0):w&&!A&&(n.track({type:1,doc:w}),S=!0,(l||d)&&(u=!0)),S&&(A?(a=a.add(A),i=O?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),n.track({type:1,doc:f})}return{ma:a,pa:n,ss:u,mutatedKeys:i}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,s){const i=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const a=e.pa.j_();a.sort((f,p)=>function(A,x){const O=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return O(A)-O(x)}(f.type,p.type)||this.Va(f.doc,p.doc)),this.wa(n),s=s!=null&&s;const u=t&&!s?this.Sa():[],l=this.Ra.size===0&&this.current&&!s?1:0,d=l!==this.Aa;return this.Aa=l,a.length!==0||d?{snapshot:new vr(this.query,e.ma,i,a,e.mutatedKeys,l===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),ba:u}:{ba:u}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Wl,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=ne(),this.ma.forEach(n=>{this.Da(n.key)&&(this.Ra=this.Ra.add(n.key))});const t=[];return e.forEach(n=>{this.Ra.has(n)||t.push(new hd(n))}),this.Ra.forEach(n=>{e.has(n)||t.push(new cd(n))}),t}va(e){this.da=e.ds,this.Ra=ne();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return vr.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class qw{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Bw{constructor(e){this.key=e,this.Fa=!1}}class $w{constructor(e,t,n,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ma={},this.xa=new zn(u=>Dh(u),zi),this.Oa=new Map,this.Na=new Set,this.La=new we($.comparator),this.Ba=new Map,this.ka=new Pa,this.qa={},this.Qa=new Map,this.Ka=_r.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function Ww(r,e,t=!0){const n=_d(r);let s;const i=n.xa.get(e);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Ca()):s=await dd(n,e,t,!0),s}async function zw(r,e){const t=_d(r);await dd(t,e,!0,!1)}async function dd(r,e,t,n){const s=await fw(r.localStore,Rt(e)),i=s.targetId,a=r.sharedClientState.addLocalQueryTarget(i,t);let u;return n&&(u=await Yw(r,e,i,a==="current",s.resumeToken)),r.isPrimaryClient&&t&&td(r.remoteStore,s),u}async function Yw(r,e,t,n,s){r.Ua=(p,w,A)=>async function(O,S,L,M){let q=S.view.ga(L);q.ss&&(q=await jl(O.localStore,S.query,!1).then(({documents:b})=>S.view.ga(b,q)));const K=M&&M.targetChanges.get(S.targetId),fe=M&&M.targetMismatches.get(S.targetId)!=null,re=S.view.applyChanges(q,O.isPrimaryClient,K,fe);return Gl(O,S.targetId,re.ba),re.snapshot}(r,p,w,A);const i=await jl(r.localStore,e,!0),a=new jw(e,i.ds),u=a.ga(i.documents),l=Ds.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",s),d=a.applyChanges(u,r.isPrimaryClient,l);Gl(r,t,d.ba);const f=new qw(e,t,a);return r.xa.set(e,f),r.Oa.has(t)?r.Oa.get(t).push(e):r.Oa.set(t,[e]),d.snapshot}async function Hw(r,e,t){const n=G(r),s=n.xa.get(e),i=n.Oa.get(s.targetId);if(i.length>1)return n.Oa.set(s.targetId,i.filter(a=>!zi(a,e))),void n.xa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await sa(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),t&&Va(n.remoteStore,s.targetId),oa(n,s.targetId)}).catch(Ar)):(oa(n,s.targetId),await sa(n.localStore,s.targetId,!0))}async function Gw(r,e){const t=G(r),n=t.xa.get(e),s=t.Oa.get(n.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),Va(t.remoteStore,n.targetId))}async function Kw(r,e,t){const n=nT(r);try{const s=await function(a,u){const l=G(a),d=Ce.now(),f=u.reduce((A,x)=>A.add(x.key),ne());let p,w;return l.persistence.runTransaction("Locally write mutations","readwrite",A=>{let x=Ht(),O=ne();return l.hs.getEntries(A,f).next(S=>{x=S,x.forEach((L,M)=>{M.isValidDocument()||(O=O.add(L))})}).next(()=>l.localDocuments.getOverlayedDocuments(A,x)).next(S=>{p=S;const L=[];for(const M of u){const q=mE(M,p.get(M.key).overlayedDocument);q!=null&&L.push(new An(M.key,q,yh(q.value.mapValue),Pt.exists(!0)))}return l.mutationQueue.addMutationBatch(A,d,L,u)}).next(S=>{w=S;const L=S.applyToLocalDocumentSet(p,O);return l.documentOverlayCache.saveOverlays(A,S.batchId,L)})}).then(()=>({batchId:w.batchId,changes:Rh(p)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(s.batchId),function(a,u,l){let d=a.qa[a.currentUser.toKey()];d||(d=new we(se)),d=d.insert(u,l),a.qa[a.currentUser.toKey()]=d}(n,s.batchId,t),await ks(n,s.changes),await Xi(n.remoteStore)}catch(s){const i=Fa(s,"Failed to persist write");t.reject(i)}}async function fd(r,e){const t=G(r);try{const n=await cw(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Ba.get(i);a&&(le(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.Fa=!0:s.modifiedDocuments.size>0?le(a.Fa):s.removedDocuments.size>0&&(le(a.Fa),a.Fa=!1))}),await ks(t,n,e)}catch(n){await Ar(n)}}function Hl(r,e,t){const n=G(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const s=[];n.xa.forEach((i,a)=>{const u=a.view.ea(e);u.snapshot&&s.push(u.snapshot)}),function(a,u){const l=G(a);l.onlineState=u;let d=!1;l.queries.forEach((f,p)=>{for(const w of p.J_)w.ea(u)&&(d=!0)}),d&&ja(l)}(n.eventManager,e),s.length&&n.Ma.R_(s),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function Qw(r,e,t){const n=G(r);n.sharedClientState.updateQueryState(e,"rejected",t);const s=n.Ba.get(e),i=s&&s.key;if(i){let a=new we($.comparator);a=a.insert(i,Qe.newNoDocument(i,H.min()));const u=ne().add(i),l=new Ki(H.min(),new Map,new we(se),a,u);await fd(n,l),n.La=n.La.remove(i),n.Ba.delete(e),qa(n)}else await sa(n.localStore,e,!1).then(()=>oa(n,e,t)).catch(Ar)}async function Jw(r,e){const t=G(r),n=e.batch.batchId;try{const s=await lw(t.localStore,e);pd(t,n,null),md(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await ks(t,s)}catch(s){await Ar(s)}}async function Xw(r,e,t){const n=G(r);try{const s=await function(a,u){const l=G(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return l.mutationQueue.lookupMutationBatch(d,u).next(p=>(le(p!==null),f=p.keys(),l.mutationQueue.removeMutationBatch(d,p))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,f,u)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>l.localDocuments.getDocuments(d,f))})}(n.localStore,e);pd(n,e,t),md(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await ks(n,s)}catch(s){await Ar(s)}}function md(r,e){(r.Qa.get(e)||[]).forEach(t=>{t.resolve()}),r.Qa.delete(e)}function pd(r,e,t){const n=G(r);let s=n.qa[n.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),n.qa[n.currentUser.toKey()]=s}}function oa(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Oa.get(e))r.xa.delete(n),t&&r.Ma.Wa(n,t);r.Oa.delete(e),r.isPrimaryClient&&r.ka.yr(e).forEach(n=>{r.ka.containsKey(n)||gd(r,n)})}function gd(r,e){r.Na.delete(e.path.canonicalString());const t=r.La.get(e);t!==null&&(Va(r.remoteStore,t),r.La=r.La.remove(e),r.Ba.delete(t),qa(r))}function Gl(r,e,t){for(const n of t)n instanceof cd?(r.ka.addReference(n.key,e),Zw(r,n)):n instanceof hd?(j("SyncEngine","Document no longer in limbo: "+n.key),r.ka.removeReference(n.key,e),r.ka.containsKey(n.key)||gd(r,n.key)):Y()}function Zw(r,e){const t=e.key,n=t.path.canonicalString();r.La.get(t)||r.Na.has(n)||(j("SyncEngine","New document in limbo: "+t),r.Na.add(n),qa(r))}function qa(r){for(;r.Na.size>0&&r.La.size<r.maxConcurrentLimboResolutions;){const e=r.Na.values().next().value;r.Na.delete(e);const t=new $(pe.fromString(e)),n=r.Ka.next();r.Ba.set(n,new Bw(t)),r.La=r.La.insert(t,n),td(r.remoteStore,new fn(Rt(Na(t.path)),n,"TargetPurposeLimboResolution",Bi.oe))}}async function ks(r,e,t){const n=G(r),s=[],i=[],a=[];n.xa.isEmpty()||(n.xa.forEach((u,l)=>{a.push(n.Ua(l,e,t).then(d=>{var f;if((d||t)&&n.isPrimaryClient){const p=d?!d.fromCache:(f=t==null?void 0:t.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;n.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(d){s.push(d);const p=xa.zi(l.targetId,d);i.push(p)}}))}),await Promise.all(a),n.Ma.R_(s),await async function(l,d){const f=G(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>P.forEach(d,w=>P.forEach(w.Wi,A=>f.persistence.referenceDelegate.addReference(p,w.targetId,A)).next(()=>P.forEach(w.Gi,A=>f.persistence.referenceDelegate.removeReference(p,w.targetId,A)))))}catch(p){if(!Nr(p))throw p;j("LocalStore","Failed to update sequence numbers: "+p)}for(const p of d){const w=p.targetId;if(!p.fromCache){const A=f.us.get(w),x=A.snapshotVersion,O=A.withLastLimboFreeSnapshotVersion(x);f.us=f.us.insert(w,O)}}}(n.localStore,i))}async function eT(r,e){const t=G(r);if(!t.currentUser.isEqual(e)){j("SyncEngine","User change. New user:",e.toKey());const n=await Jh(t.localStore,e);t.currentUser=e,function(i,a){i.Qa.forEach(u=>{u.forEach(l=>{l.reject(new B(C.CANCELLED,a))})}),i.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await ks(t,n.Ts)}}function tT(r,e){const t=G(r),n=t.Ba.get(e);if(n&&n.Fa)return ne().add(n.key);{let s=ne();const i=t.Oa.get(e);if(!i)return s;for(const a of i){const u=t.xa.get(a);s=s.unionWith(u.view.fa)}return s}}function _d(r){const e=G(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=fd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=tT.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Qw.bind(null,e),e.Ma.R_=Lw.bind(null,e.eventManager),e.Ma.Wa=Fw.bind(null,e.eventManager),e}function nT(r){const e=G(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Jw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Xw.bind(null,e),e}class Oi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Qi(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return uw(this.persistence,new ow,e.initialUser,this.serializer)}ja(e){return new Qh(Ca.ei,this.serializer)}za(e){return new pw}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Oi.provider={build:()=>new Oi};class rT extends Oi{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){le(this.persistence.referenceDelegate instanceof Vi);const n=this.persistence.referenceDelegate.garbageCollector;return new zE(n,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?nt.withCacheSize(this.cacheSizeBytes):nt.DEFAULT;return new Qh(n=>Vi.ei(n,t),this.serializer)}}class aa{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Hl(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=eT.bind(null,this.syncEngine),await Mw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Uw}()}createDatastore(e){const t=Qi(e.databaseInfo.databaseId),n=function(i){return new yw(i)}(e.databaseInfo);return function(i,a,u,l){return new Tw(i,a,u,l)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,s,i,a,u){return new Iw(n,s,i,a,u)}(this.localStore,this.datastore,e.asyncQueue,t=>Hl(this.syncEngine,t,0),function(){return Bl.p()?new Bl:new gw}())}createSyncEngine(e,t){return function(s,i,a,u,l,d,f){const p=new $w(s,i,a,u,l,d);return f&&(p.$a=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=G(s);j("RemoteStore","RemoteStore shutting down."),i.k_.add(5),await Ss(i),i.Q_.shutdown(),i.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}aa.provider={build:()=>new aa};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Yt("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(e,t,n,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=s,this.user=Ke.UNAUTHENTICATED,this.clientId=gh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async a=>{j("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(n,a=>(j("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new $t;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Fa(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function Vo(r,e){r.asyncQueue.verifyOperationInProgress(),j("FirestoreClient","Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await Jh(e.localStore,s),n=s)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function Kl(r,e){r.asyncQueue.verifyOperationInProgress();const t=await iT(r);j("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>$l(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>$l(e.remoteStore,s)),r._onlineComponents=e}async function iT(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){j("FirestoreClient","Using user provided OfflineComponentProvider");try{await Vo(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===C.FAILED_PRECONDITION||s.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;fr("Error using user provided cache. Falling back to memory cache: "+t),await Vo(r,new Oi)}}else j("FirestoreClient","Using default OfflineComponentProvider"),await Vo(r,new rT(void 0));return r._offlineComponents}async function yd(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(j("FirestoreClient","Using user provided OnlineComponentProvider"),await Kl(r,r._uninitializedComponentsProvider._online)):(j("FirestoreClient","Using default OnlineComponentProvider"),await Kl(r,new aa))),r._onlineComponents}function oT(r){return yd(r).then(e=>e.syncEngine)}async function Ed(r){const e=await yd(r),t=e.eventManager;return t.onListen=Ww.bind(null,e.syncEngine),t.onUnlisten=Hw.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=zw.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Gw.bind(null,e.syncEngine),t}function aT(r,e,t={}){const n=new $t;return r.asyncQueue.enqueueAndForget(async()=>function(i,a,u,l,d){const f=new vd({next:w=>{f.eu(),a.enqueueAndForget(()=>ud(i,p));const A=w.docs.has(u);!A&&w.fromCache?d.reject(new B(C.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&w.fromCache&&l&&l.source==="server"?d.reject(new B(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(w)},error:w=>d.reject(w)}),p=new ld(Na(u.path),f,{includeMetadataChanges:!0,ua:!0});return ad(i,p)}(await Ed(r),r.asyncQueue,e,t,n)),n.promise}function uT(r,e,t={}){const n=new $t;return r.asyncQueue.enqueueAndForget(async()=>function(i,a,u,l,d){const f=new vd({next:w=>{f.eu(),a.enqueueAndForget(()=>ud(i,p)),w.fromCache&&l.source==="server"?d.reject(new B(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(w)},error:w=>d.reject(w)}),p=new ld(u,f,{includeMetadataChanges:!0,ua:!0});return ad(i,p)}(await Ed(r),r.asyncQueue,e,t,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(r,e,t){if(!t)throw new B(C.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function lT(r,e,t,n){if(e===!0&&n===!0)throw new B(C.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Jl(r){if(!$.isDocumentKey(r))throw new B(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Xl(r){if($.isDocumentKey(r))throw new B(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Zi(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":Y()}function Gt(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new B(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Zi(r);throw new B(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new B(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}lT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=wd((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new B(C.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new B(C.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new B(C.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class eo{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zl({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new B(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zl(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new wy;switch(n.type){case"firstParty":return new Ay(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new B(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Ql.get(t);n&&(j("ComponentProvider","Removing Datastore"),Ql.delete(t),n.terminate())}(this),Promise.resolve()}}function cT(r,e,t,n={}){var s;const i=(r=Gt(r,eo))._getSettings(),a=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&fr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),n.mockUserToken){let u,l;if(typeof n.mockUserToken=="string")u=n.mockUserToken,l=Ke.MOCK_USER;else{u=Vp(n.mockUserToken,(s=r._app)===null||s===void 0?void 0:s.options.projectId);const d=n.mockUserToken.sub||n.mockUserToken.user_id;if(!d)throw new B(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ke(d)}r._authCredentials=new Ty(new ph(u,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Sr(this.firestore,e,this._query)}}class et{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _n(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new et(this.firestore,e,this._key)}}class _n extends Sr{constructor(e,t,n){super(e,t,Na(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new et(this.firestore,null,new $(e))}withConverter(e){return new _n(this.firestore,e,this._path)}}function bd(r,e,...t){if(r=$e(r),Td("collection","path",e),r instanceof eo){const n=pe.fromString(e,...t);return Xl(n),new _n(r,null,n)}{if(!(r instanceof et||r instanceof _n))throw new B(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(pe.fromString(e,...t));return Xl(n),new _n(r.firestore,null,n)}}function Mo(r,e,...t){if(r=$e(r),arguments.length===1&&(e=gh.newId()),Td("doc","path",e),r instanceof eo){const n=pe.fromString(e,...t);return Jl(n),new et(r,null,new $(n))}{if(!(r instanceof et||r instanceof _n))throw new B(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(pe.fromString(e,...t));return Jl(n),new et(r.firestore,r instanceof _n?r.converter:null,new $(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Zh(this,"async_queue_retry"),this.fu=()=>{const n=xo();n&&j("AsyncQueue","Visibility state changed to "+n.visibilityState),this.r_.Jo()},this.gu=e;const t=xo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const t=xo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const t=new $t;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Nr(e))throw e;j("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(n=>{this.Au=n,this.Ru=!1;const s=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(n);throw Yt("INTERNAL UNHANDLED ERROR: ",s),n}).then(n=>(this.Ru=!1,n))));return this.gu=t,t}enqueueAfterDelay(e,t,n){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const s=La.createAndSchedule(this,e,t,n,i=>this.Su(i));return this.du.push(s),s}pu(){this.Au&&Y()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}class Rs extends eo{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new ec,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ec(e),this._firestoreClient=void 0,await e}}}function hT(r,e){const t=typeof r=="object"?r:Ac(),n=typeof r=="string"?r:"(default)",s=ha(t,"firestore").getImmediate({identifier:n});if(!s._initialized){const i=Cp("firestore");i&&cT(s,...i)}return s}function Ba(r){if(r._terminated)throw new B(C.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||dT(r),r._firestoreClient}function dT(r){var e,t,n;const s=r._freezeSettings(),i=function(u,l,d,f){return new jy(u,l,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,wd(f.experimentalLongPollingOptions),f.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,s);r._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=s.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),r._firestoreClient=new sT(r._authCredentials,r._appCheckCredentials,r._queue,i,r._componentsProvider&&function(u){const l=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(l),_online:l}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new yr(We.fromBase64String(e))}catch(t){throw new B(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new yr(We.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new B(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Be(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new B(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new B(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fT=/^__.*__$/;class mT{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new An(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ns(e,this.data,t,this.fieldTransforms)}}class Id{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new An(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Ad(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class Ya{constructor(e,t,n,s,i,a){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.Fu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new Ya(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.xu({path:n,Nu:!1});return s.Lu(e),s}Bu(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.xu({path:n,Nu:!1});return s.Fu(),s}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Ui(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(Ad(this.Mu)&&fT.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class pT{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Qi(e)}$u(e,t,n,s=!1){return new Ya({Mu:e,methodName:t,Ku:n,path:Be.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ha(r){const e=r._freezeSettings(),t=Qi(r._databaseId);return new pT(r._databaseId,!!e.ignoreUndefinedProperties,t)}function gT(r,e,t,n,s,i={}){const a=r.$u(i.merge||i.mergeFields?2:0,e,t,s);Ga("Data must be an object, but it was:",a,n);const u=Nd(n,a);let l,d;if(i.merge)l=new at(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const w=ua(e,p,t);if(!a.contains(w))throw new B(C.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);Sd(f,w)||f.push(w)}l=new at(f),d=a.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,d=a.fieldTransforms;return new mT(new rt(u),l,d)}class no extends $a{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof no}}function _T(r,e,t,n){const s=r.$u(1,e,t);Ga("Data must be an object, but it was:",s,n);const i=[],a=rt.empty();In(n,(l,d)=>{const f=Ka(e,l,t);d=$e(d);const p=s.Bu(f);if(d instanceof no)i.push(f);else{const w=Ps(d,p);w!=null&&(i.push(f),a.set(f,w))}});const u=new at(i);return new Id(a,u,s.fieldTransforms)}function vT(r,e,t,n,s,i){const a=r.$u(1,e,t),u=[ua(e,n,t)],l=[s];if(i.length%2!=0)throw new B(C.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<i.length;w+=2)u.push(ua(e,i[w])),l.push(i[w+1]);const d=[],f=rt.empty();for(let w=u.length-1;w>=0;--w)if(!Sd(d,u[w])){const A=u[w];let x=l[w];x=$e(x);const O=a.Bu(A);if(x instanceof no)d.push(A);else{const S=Ps(x,O);S!=null&&(d.push(A),f.set(A,S))}}const p=new at(d);return new Id(f,p,a.fieldTransforms)}function yT(r,e,t,n=!1){return Ps(t,r.$u(n?4:3,e))}function Ps(r,e){if(Dd(r=$e(r)))return Ga("Unsupported field value:",e,r),Nd(r,e);if(r instanceof $a)return function(n,s){if(!Ad(s.Mu))throw s.qu(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(n,s){const i=[];let a=0;for(const u of n){let l=Ps(u,s.ku(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}}(r,e)}return function(n,s){if((n=$e(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return uE(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Ce.fromDate(n);return{timestampValue:xi(s.serializer,i)}}if(n instanceof Ce){const i=new Ce(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:xi(s.serializer,i)}}if(n instanceof Wa)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof yr)return{bytesValue:$h(s.serializer,n._byteString)};if(n instanceof et){const i=s.databaseId,a=n.firestore._databaseId;if(!a.isEqual(i))throw s.qu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ra(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof za)return function(a,u){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(l=>{if(typeof l!="number")throw u.qu("VectorValues must only contain numeric values.");return Da(u.serializer,l)})}}}}}}(n,s);throw s.qu(`Unsupported field value: ${Zi(n)}`)}(r,e)}function Nd(r,e){const t={};return _h(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):In(r,(n,s)=>{const i=Ps(s,e.Ou(n));i!=null&&(t[n]=i)}),{mapValue:{fields:t}}}function Dd(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Ce||r instanceof Wa||r instanceof yr||r instanceof et||r instanceof $a||r instanceof za)}function Ga(r,e,t){if(!Dd(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const n=Zi(t);throw n==="an object"?e.qu(r+" a custom object"):e.qu(r+" "+n)}}function ua(r,e,t){if((e=$e(e))instanceof to)return e._internalPath;if(typeof e=="string")return Ka(r,e);throw Ui("Field path arguments must be of type string or ",r,!1,void 0,t)}const ET=new RegExp("[~\\*/\\[\\]]");function Ka(r,e,t){if(e.search(ET)>=0)throw Ui(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new to(...e.split("."))._internalPath}catch{throw Ui(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Ui(r,e,t,n,s){const i=n&&!n.isEmpty(),a=s!==void 0;let u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${n}`),a&&(l+=` in document ${s}`),l+=")"),new B(C.INVALID_ARGUMENT,u+r+l)}function Sd(r,e){return r.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e,t,n,s,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new wT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Qa("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class wT extends kd{data(){return super.data()}}function Qa(r,e){return typeof e=="string"?Ka(r,e):e instanceof to?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TT(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new B(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ja{}class bT extends Ja{}function IT(r,e,...t){let n=[];e instanceof Ja&&n.push(e),n=n.concat(t),function(i){const a=i.filter(l=>l instanceof Xa).length,u=i.filter(l=>l instanceof ro).length;if(a>1||a>0&&u>0)throw new B(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const s of n)r=s._apply(r);return r}class ro extends bT{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new ro(e,t,n)}_apply(e){const t=this._parse(e);return Rd(e._query,t),new Sr(e.firestore,e.converter,Xo(e._query,t))}_parse(e){const t=Ha(e.firestore);return function(i,a,u,l,d,f,p){let w;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new B(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){nc(p,f);const A=[];for(const x of p)A.push(tc(l,i,x));w={arrayValue:{values:A}}}else w=tc(l,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||nc(p,f),w=yT(u,a,p,f==="in"||f==="not-in");return De.create(d,f,w)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function AT(r,e,t){const n=e,s=Qa("where",r);return ro._create(s,n,t)}class Xa extends Ja{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Xa(e,t)}_parse(e){const t=this._queryConstraints.map(n=>n._parse(e)).filter(n=>n.getFilters().length>0);return t.length===1?t[0]:pt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const u=i.getFlattenedFilters();for(const l of u)Rd(a,l),a=Xo(a,l)}(e._query,t),new Sr(e.firestore,e.converter,Xo(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function tc(r,e,t){if(typeof(t=$e(t))=="string"){if(t==="")throw new B(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Nh(e)&&t.indexOf("/")!==-1)throw new B(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(pe.fromString(t));if(!$.isDocumentKey(n))throw new B(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return Tl(r,new $(n))}if(t instanceof et)return Tl(r,t._key);throw new B(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Zi(t)}.`)}function nc(r,e){if(!Array.isArray(r)||r.length===0)throw new B(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Rd(r,e){const t=function(s,i){for(const a of s)for(const u of a.getFlattenedFilters())if(i.indexOf(u.op)>=0)return u.op;return null}(r.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new B(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class NT{convertValue(e,t="none"){switch(wn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(En(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Y()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return In(e,(s,i)=>{n[s]=this.convertValue(i,t)}),n}convertVectorValue(e){var t,n,s;const i=(s=(n=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.map(a=>Ae(a.doubleValue));return new za(i)}convertGeoPoint(e){return new Wa(Ae(e.latitude),Ae(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Wi(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(fs(e));default:return null}}convertTimestamp(e){const t=yn(e);return new Ce(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=pe.fromString(e);le(Kh(n));const s=new ms(n.get(1),n.get(3)),i=new $(n.popFirst(5));return s.isEqual(t)||Yt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DT(r,e,t){let n;return n=r?r.toFirestore(e):e,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Pd extends kd{constructor(e,t,n,s,i,a){super(e,t,n,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new pi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Qa("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class pi extends Pd{data(e={}){return super.data(e)}}class ST{constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new ts(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new pi(this._firestore,this._userDataWriter,n.key,n,new ts(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new B(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(u=>{const l=new pi(s._firestore,s._userDataWriter,u.doc.key,u.doc,new ts(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(u=>i||u.type!==3).map(u=>{const l=new pi(s._firestore,s._userDataWriter,u.doc.key,u.doc,new ts(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,f=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),f=a.indexOf(u.doc.key)),{type:kT(u.type),doc:l,oldIndex:d,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function kT(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RT(r){r=Gt(r,et);const e=Gt(r.firestore,Rs);return aT(Ba(e),r._key).then(t=>xT(e,r,t))}class Cd extends NT{constructor(e){super(),this.firestore=e}convertBytes(e){return new yr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new et(this.firestore,null,t)}}function xd(r){r=Gt(r,Sr);const e=Gt(r.firestore,Rs),t=Ba(e),n=new Cd(e);return TT(r._query),uT(t,r._query).then(s=>new ST(e,n,r,s))}function PT(r,e,t){r=Gt(r,et);const n=Gt(r.firestore,Rs),s=DT(r.converter,e);return Vd(n,[gT(Ha(n),"setDoc",r._key,s,r.converter!==null,t).toMutation(r._key,Pt.none())])}function CT(r,e,t,...n){r=Gt(r,et);const s=Gt(r.firestore,Rs),i=Ha(s);let a;return a=typeof(e=$e(e))=="string"||e instanceof to?vT(i,"updateDoc",r._key,e,t,n):_T(i,"updateDoc",r._key,e),Vd(s,[a.toMutation(r._key,Pt.exists(!0))])}function Vd(r,e){return function(n,s){const i=new $t;return n.asyncQueue.enqueueAndForget(async()=>Kw(await oT(n),s,i)),i.promise}(Ba(r),e)}function xT(r,e,t){const n=t.docs.get(e._key),s=new Cd(r);return new Pd(r,s,e._key,n,new ts(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){Ir=s})(Tr),dr(new qn("firestore",(n,{instanceIdentifier:s,options:i})=>{const a=n.getProvider("app").getImmediate(),u=new Rs(new by(n.getProvider("auth-internal")),new Dy(n.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new B(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ms(d.options.projectId,f)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),u._setSettings(i),u},"PUBLIC").setMultipleInstances(!0)),gn(gl,"4.7.5",e),gn(gl,"4.7.5","esm2017")})();const VT={apiKey:"AIzaSyCOEsDGnHq6i4Tnkf1Qc91FBx_BtTMjZ1U",authDomain:"planning-equipe.firebaseapp.com",projectId:"planning-equipe",storageBucket:"planning-equipe.firebasestorage.app",messagingSenderId:"110288169575",appId:"1:110288169575:web:bcec4c78fd324d679e42c2"},Md=Ic(VT),Mn=_y(Md),ns=hT(Md);class Ln{static async createUser(e){try{return await PT(Mo(ns,this.USERS_COLLECTION,e.username),e),!0}catch(t){return console.error("Erreur lors de la création utilisateur Firestore:",t),!1}}static async getUser(e){try{const t=await RT(Mo(ns,this.USERS_COLLECTION,e));return t.exists()?t.data():null}catch(t){return console.error("Erreur lors de la récupération utilisateur:",t),null}}static async updateUserStatus(e,t){try{return await CT(Mo(ns,this.USERS_COLLECTION,e),{status:t}),!0}catch(n){return console.error("Erreur lors de la mise à jour du statut:",n),!1}}static async getPendingUsers(){try{const e=IT(bd(ns,this.USERS_COLLECTION),AT("status","==","pending"));return(await xd(e)).docs.map(n=>n.data())}catch(e){return console.error("Erreur lors de la récupération des utilisateurs en attente:",e),[]}}}It(Ln,"USERS_COLLECTION","users");const ii=[{username:"admin",password:"240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9",role:"admin",lastPasswordChange:Date.now(),status:"active",createdAt:Date.now()},{username:"lionel",password:"7fdc9f4d7295b790e497abe7cc09f86991e32a634a5a7c67f42c68e8d0c5f2c7",role:"admin",lastPasswordChange:Date.now(),status:"active",createdAt:Date.now()}];class Se{static async initialize(){console.log("Initializing AuthService..."),await this.migrateDefaultUsers();const e=Q.getItem(this.USERS_KEY);console.log("Existing users:",e),!e||!Array.isArray(e)||e.length===0?(console.log("No valid users found, initializing with default users..."),Q.setItem(this.USERS_KEY,JSON.stringify(ii)),console.log("Default users initialized:",ii)):e.some(n=>!n.username||!n.password||!n.role||!n.status)&&(console.log("Found invalid users, reinitializing with default users..."),Q.setItem(this.USERS_KEY,JSON.stringify(ii)),console.log("Default users reinitialized:",ii)),ot.initSession()}static async register(e,t,n){try{if(await Ln.getUser(e))return!1;const i=`${e}@planning-equipe.com`;await Zs(Mn,i,t);const a=await this.hashPassword(t),u={username:e,role:n,status:"pending",lastPasswordChange:Date.now(),createdAt:Date.now()};await Ln.createUser(u);const l=JSON.parse(Q.getItem(this.USERS_KEY)||"[]"),d={username:e,password:a,role:n,status:"pending",lastPasswordChange:Date.now(),createdAt:Date.now()};return l.push(d),Q.setItem(this.USERS_KEY,JSON.stringify(l)),this.addPendingNotification(e),!0}catch(s){return console.error("Erreur lors de la création du compte:",s),!1}}static addPendingNotification(e){const t=this.getPendingNotifications();t.push({type:"new_user",username:e,timestamp:Date.now()}),Q.setItem(this.PENDING_NOTIFICATIONS_KEY,JSON.stringify(t))}static getPendingNotifications(){return JSON.parse(Q.getItem(this.PENDING_NOTIFICATIONS_KEY)||"[]")}static clearNotification(e){const n=this.getPendingNotifications().filter(s=>s.username!==e);Q.setItem(this.PENDING_NOTIFICATIONS_KEY,JSON.stringify(n))}static async login(e,t){try{if(ot.isAccountLocked()){const a=Math.ceil(ot.getRemainingLockTime()/1e3/60),u=new Error(`Compte temporairement verrouillé. Réessayez dans ${a} minutes.`);throw u.code="ACCOUNT_LOCKED",u}const n=`${e}@planning-equipe.com`;await rv(Mn,n,t);const s=await Ln.getUser(e);if(!s){ot.recordLoginAttempt(!1);const a=new Error("Compte non trouvé");throw a.code="INVALID_CREDENTIALS",a}if(s.status==="pending"){const a=new Error("Votre compte est en attente de validation par un administrateur.");throw a.code="ACCOUNT_PENDING",a}if(s.status==="rejected"){const a=new Error("Votre compte a été rejeté par un administrateur.");throw a.code="ACCOUNT_REJECTED",a}if(this.isPasswordExpired(s)){const a=new Error("Votre mot de passe a expiré. Veuillez le changer.");throw a.code="PASSWORD_EXPIRED",a}const i={id:s.username,username:s.username,role:s.role,status:s.status,email:`${s.username}@planning-equipe.com`,lastPasswordChange:new Date(s.lastPasswordChange)};return Q.setItem(this.CURRENT_USER_KEY,JSON.stringify(i)),ot.recordLoginAttempt(!0),ot.updateActivity(),i}catch(n){throw console.error("Erreur lors de la connexion:",n),n}}static getCurrentUser(){const e=Q.getItem(this.CURRENT_USER_KEY);return e?JSON.parse(e):null}static async validateUser(e,t){try{const n=JSON.parse(Q.getItem(this.USERS_KEY)||"[]"),s=n.findIndex(i=>i.username===e);return s===-1?!1:(n[s].status=t?"active":"rejected",Q.setItem(this.USERS_KEY,JSON.stringify(n)),this.clearNotification(e),!0)}catch(n){return console.error("Erreur lors de la validation du compte:",n),!1}}static getPendingUsers(){return JSON.parse(Q.getItem(this.USERS_KEY)||"[]").filter(t=>t.status==="pending").map(({username:t,createdAt:n})=>({username:t,createdAt:n}))}static async logout(){try{await ov(Mn),Q.removeItem(this.CURRENT_USER_KEY),ot.clearSession()}catch(e){console.error("Erreur lors de la déconnexion:",e),Q.removeItem(this.CURRENT_USER_KEY),ot.clearSession()}}static isAuthenticated(){return!!this.getCurrentUser()}static async migrateDefaultUsers(){try{try{await Zs(Mn,"admin@planning-equipe.com","admin123"),await Ln.createUser({username:"admin",role:"admin",status:"active",lastPasswordChange:Date.now(),createdAt:Date.now()})}catch(e){e.code==="auth/email-already-in-use"&&console.error("Erreur migration admin:",e)}try{await Zs(Mn,"lionel@planning-equipe.com","lionel123"),await Ln.createUser({username:"lionel",role:"admin",status:"active",lastPasswordChange:Date.now(),createdAt:Date.now()})}catch(e){e.code!=="auth/email-already-in-use"&&console.error("Erreur migration lionel:",e)}}catch(e){console.error("Erreur lors de la migration des utilisateurs:",e)}}static async migrateUserToFirebase(e,t){try{const n=`${e}@planning-equipe.com`;return(await Zs(Mn,n,t)).user}catch(n){if(n.code==="auth/email-already-in-use")return null;throw n}}static isPasswordExpired(e){return e.lastPasswordChange?(Date.now()-e.lastPasswordChange)/(1e3*60*60*24)>this.PASSWORD_EXPIRY_DAYS:!0}static async hashPassword(e){try{if(window.crypto&&window.crypto.subtle){const t=new TextEncoder().encode(e),n=await window.crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(n)).map(a=>a.toString(16).padStart(2,"0")).join("")}else throw new Error("Crypto API not available")}catch(t){throw console.error("Error hashing password:",t),t}}static async changePassword(e,t,n){try{const s=await this.hashPassword(t),i=await this.hashPassword(n),a=JSON.parse(Q.getItem(this.USERS_KEY)||"[]"),u=a.findIndex(l=>l.username===e&&l.password===s);return u!==-1?(a[u].password=i,a[u].lastPasswordChange=Date.now(),Q.setItem(this.USERS_KEY,JSON.stringify(a)),!0):!1}catch(s){return console.error("Erreur lors du changement de mot de passe:",s),!1}}static async resetPassword(e){try{return await nv(Mn,e),!0}catch(t){return console.error("Erreur lors de la réinitialisation de mot de passe:",t),!1}}static async getAllUsers(){try{const e=bd(ns,"users");return(await xd(e)).docs.map(s=>{const i=s.data();return{id:i.username,username:i.username,role:i.role,status:i.status==="rejected"?"inactive":i.status,email:`${i.username}@planning-equipe.com`,lastPasswordChange:new Date(i.lastPasswordChange)}})}catch(e){return console.error("Erreur lors de la récupération des utilisateurs:",e),[]}}static async deleteUser(e){try{const t=JSON.parse(Q.getItem(this.USERS_KEY)||"[]");if(["admin","lionel"].includes(e))return!1;const n=t.filter(s=>s.username!==e);return Q.setItem(this.USERS_KEY,JSON.stringify(n)),!0}catch(t){return console.error("Erreur lors de la suppression de l'utilisateur:",t),!1}}static async updateUserStatus(e,t){try{if(["admin","lionel"].includes(e)||!await Ln.updateUserStatus(e,t))return!1;const s=JSON.parse(Q.getItem(this.USERS_KEY)||"[]"),i=s.findIndex(a=>a.username===e);return i===-1?!1:(s[i].status=t,Q.setItem(this.USERS_KEY,JSON.stringify(s)),t==="active"&&this.clearNotification(e),!0)}catch(n){return console.error("Erreur lors de la mise à jour du statut:",n),!1}}static resetAuth(){console.log("Réinitialisation de l'authentification..."),Q.removeItem(this.USERS_KEY),Q.removeItem(this.CURRENT_USER_KEY),Q.removeItem(this.PENDING_NOTIFICATIONS_KEY),ot.clearSession(),this.initialize(),console.log("Réinitialisation terminée")}}It(Se,"USERS_KEY","planning_users"),It(Se,"CURRENT_USER_KEY","planning_current_user"),It(Se,"PASSWORD_EXPIRY_DAYS",90),It(Se,"PENDING_NOTIFICATIONS_KEY","planning_pending_notifications");const MT=({onBack:r})=>{const[e,t]=Z.useState(""),[n,s]=Z.useState(""),[i,a]=Z.useState(""),[u,l]=Z.useState(""),[d,f]=Z.useState(!1),p=async w=>{if(w.preventDefault(),l(""),n!==i){l("Les mots de passe ne correspondent pas");return}try{await Se.register(e,n,"user"),f(!0),setTimeout(()=>{r()},2e3)}catch(A){l(A.message||"Erreur lors de l'inscription")}};return y.jsxDEV("div",{className:"cyberpunk-bg flex items-center justify-center min-h-screen p-6",children:y.jsxDEV("div",{className:"neon-card w-full max-w-md p-8 rounded-lg",children:[y.jsxDEV("h2",{className:"neon-text text-3xl font-bold mb-8 text-center",children:"Créer un compte"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Register.tsx",lineNumber:39,columnNumber:9},void 0),d?y.jsxDEV("div",{className:"text-center",children:[y.jsxDEV("p",{className:"neon-text text-lg mb-4",children:"Inscription réussie ! En attente de validation par un administrateur."},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Register.tsx",lineNumber:43,columnNumber:13},void 0),y.jsxDEV("button",{onClick:r,className:"neon-button px-6 py-2 rounded-md",children:"Retour à la connexion"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Register.tsx",lineNumber:46,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Register.tsx",lineNumber:42,columnNumber:11},void 0):y.jsxDEV("form",{onSubmit:p,className:"space-y-6",children:[y.jsxDEV("div",{children:[y.jsxDEV("label",{htmlFor:"username",className:"neon-text block text-sm font-medium mb-2",children:"Nom d'utilisateur"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Register.tsx",lineNumber:56,columnNumber:15},void 0),y.jsxDEV("input",{id:"username",type:"text",value:e,onChange:w=>t(w.target.value),className:"neon-input w-full px-4 py-2 rounded-md",required:!0,autoComplete:"username"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Register.tsx",lineNumber:59,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Register.tsx",lineNumber:55,columnNumber:13},void 0),y.jsxDEV("div",{children:[y.jsxDEV("label",{htmlFor:"password",className:"neon-text block text-sm font-medium mb-2",children:"Mot de passe"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Register.tsx",lineNumber:71,columnNumber:15},void 0),y.jsxDEV("input",{id:"password",type:"password",value:n,onChange:w=>s(w.target.value),className:"neon-input w-full px-4 py-2 rounded-md",required:!0,autoComplete:"new-password"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Register.tsx",lineNumber:74,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Register.tsx",lineNumber:70,columnNumber:13},void 0),y.jsxDEV("div",{children:[y.jsxDEV("label",{htmlFor:"confirm-password",className:"neon-text block text-sm font-medium mb-2",children:"Confirmer le mot de passe"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Register.tsx",lineNumber:86,columnNumber:15},void 0),y.jsxDEV("input",{id:"confirm-password",type:"password",value:i,onChange:w=>a(w.target.value),className:"neon-input w-full px-4 py-2 rounded-md",required:!0,autoComplete:"new-password"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Register.tsx",lineNumber:89,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Register.tsx",lineNumber:85,columnNumber:13},void 0),u&&y.jsxDEV("div",{className:"text-red-500 text-sm text-center animate-pulse",children:u},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Register.tsx",lineNumber:101,columnNumber:15},void 0),y.jsxDEV("div",{className:"flex flex-col space-y-4",children:[y.jsxDEV("button",{type:"submit",className:"neon-button w-full py-2 px-4 rounded-md text-sm font-medium",children:"S'inscrire"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Register.tsx",lineNumber:107,columnNumber:15},void 0),y.jsxDEV("button",{type:"button",onClick:r,className:"neon-button w-full py-2 px-4 rounded-md text-sm font-medium",children:"Retour"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Register.tsx",lineNumber:114,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Register.tsx",lineNumber:106,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Register.tsx",lineNumber:54,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Register.tsx",lineNumber:38,columnNumber:7},void 0)},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Register.tsx",lineNumber:37,columnNumber:5},void 0)},OT=({onLoginSuccess:r})=>{const[e,t]=Z.useState(""),[n,s]=Z.useState(""),[i,a]=Z.useState(""),[u,l]=Z.useState(!1),d=async p=>{p.preventDefault();try{const w=await Se.login(e,n);r(w)}catch(w){a(w.message||"Erreur de connexion")}},f=()=>{Se.resetAuth(),a("Authentification réinitialisée. Utilisez admin/admin123 pour vous connecter.")};return u?y.jsxDEV(MT,{onBack:()=>l(!1)},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Login.tsx",lineNumber:33,columnNumber:12},void 0):y.jsxDEV("div",{className:"cyberpunk-bg flex items-center justify-center min-h-screen p-6",children:y.jsxDEV("div",{className:"neon-card w-full max-w-md p-8 rounded-lg",children:[y.jsxDEV("h2",{className:"neon-text text-3xl font-bold mb-8 text-center",children:"Planning Équipe"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Login.tsx",lineNumber:39,columnNumber:9},void 0),y.jsxDEV("form",{onSubmit:d,className:"space-y-6",children:[i&&y.jsxDEV("div",{className:"bg-red-900/50 border border-red-500 text-red-300 px-4 py-3 rounded relative",role:"alert",children:y.jsxDEV("span",{className:"block sm:inline",children:i},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Login.tsx",lineNumber:44,columnNumber:15},void 0)},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Login.tsx",lineNumber:43,columnNumber:13},void 0),y.jsxDEV("div",{children:[y.jsxDEV("label",{htmlFor:"username",className:"neon-text block text-sm font-medium mb-2",children:"Nom d'utilisateur"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Login.tsx",lineNumber:49,columnNumber:13},void 0),y.jsxDEV("input",{id:"username",type:"text",value:e,onChange:p=>t(p.target.value),className:"neon-input w-full px-4 py-2 rounded-md bg-gray-900 border border-cyan-500 text-cyan-300 placeholder-cyan-700",required:!0,placeholder:"Entrez votre nom d'utilisateur"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Login.tsx",lineNumber:52,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Login.tsx",lineNumber:48,columnNumber:11},void 0),y.jsxDEV("div",{children:[y.jsxDEV("label",{htmlFor:"password",className:"neon-text block text-sm font-medium mb-2",children:"Mot de passe"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Login.tsx",lineNumber:64,columnNumber:13},void 0),y.jsxDEV("input",{id:"password",type:"password",value:n,onChange:p=>s(p.target.value),className:"neon-input w-full px-4 py-2 rounded-md bg-gray-900 border border-cyan-500 text-cyan-300 placeholder-cyan-700",required:!0,placeholder:"Entrez votre mot de passe"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Login.tsx",lineNumber:67,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Login.tsx",lineNumber:63,columnNumber:11},void 0),y.jsxDEV("div",{className:"flex flex-col space-y-4",children:[y.jsxDEV("button",{type:"submit",className:"neon-button w-full py-2 px-4 rounded-md text-sm font-medium bg-cyan-900 hover:bg-cyan-800 border border-cyan-500 text-cyan-300",children:"Se connecter"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Login.tsx",lineNumber:79,columnNumber:13},void 0),y.jsxDEV("div",{className:"flex justify-between",children:[y.jsxDEV("button",{type:"button",onClick:()=>l(!0),className:"neon-text text-sm hover:text-cyan-400 transition-colors",children:"Créer un compte"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Login.tsx",lineNumber:87,columnNumber:15},void 0),y.jsxDEV("button",{type:"button",onClick:f,className:"neon-text text-sm text-red-400 hover:text-red-300 transition-colors",children:"Réinitialiser"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Login.tsx",lineNumber:95,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Login.tsx",lineNumber:86,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Login.tsx",lineNumber:78,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Login.tsx",lineNumber:41,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Login.tsx",lineNumber:38,columnNumber:7},void 0)},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/Login.tsx",lineNumber:37,columnNumber:5},void 0)},UT={1:{Lionel:R.MAT2,Eugène:R.AM2,Stephane:R.AM1,Philippe:R.MAT1,Nassim:R.REMPLACANT},2:{Lionel:R.MAT1,Eugène:R.MAT2,Stephane:R.AM2,Philippe:R.AM1,Nassim:R.REMPLACANT},3:{Lionel:R.AM1,Eugène:R.MAT1,Stephane:R.MAT2,Philippe:R.AM2,Nassim:R.REMPLACANT},4:{Lionel:R.AM2,Eugène:R.AM1,Stephane:R.MAT1,Philippe:R.MAT2,Nassim:R.REMPLACANT},5:{Lionel:R.MAT2,Eugène:R.AM2,Stephane:R.AM1,Philippe:R.REMPLACANT,Nassim:R.MAT1},6:{Lionel:R.MAT1,Eugène:R.MAT2,Stephane:R.AM2,Philippe:R.REMPLACANT,Nassim:R.AM1},7:{Lionel:R.AM1,Eugène:R.MAT1,Stephane:R.MAT2,Philippe:R.REMPLACANT,Nassim:R.AM2},8:{Lionel:R.AM2,Eugène:R.AM1,Stephane:R.MAT1,Philippe:R.REMPLACANT,Nassim:R.MAT2},9:{Lionel:R.MAT2,Eugène:R.AM2,Stephane:R.REMPLACANT,Philippe:R.AM1,Nassim:R.MAT1},10:{Lionel:R.MAT1,Eugène:R.MAT2,Stephane:R.REMPLACANT,Philippe:R.AM2,Nassim:R.AM1},11:{Lionel:R.AM1,Eugène:R.MAT1,Stephane:R.REMPLACANT,Philippe:R.MAT2,Nassim:R.AM2},12:{Lionel:R.AM2,Eugène:R.AM1,Stephane:R.REMPLACANT,Philippe:R.MAT1,Nassim:R.MAT2},13:{Lionel:R.MAT2,Eugène:R.REMPLACANT,Stephane:R.AM2,Philippe:R.AM1,Nassim:R.MAT1},14:{Lionel:R.MAT1,Eugène:R.REMPLACANT,Stephane:R.MAT2,Philippe:R.AM2,Nassim:R.AM1},15:{Lionel:R.AM1,Eugène:R.REMPLACANT,Stephane:R.MAT1,Philippe:R.MAT2,Nassim:R.AM2},16:{Lionel:R.AM2,Eugène:R.REMPLACANT,Stephane:R.AM1,Philippe:R.MAT1,Nassim:R.MAT2},17:{Lionel:R.REMPLACANT,Eugène:R.MAT2,Stephane:R.AM2,Philippe:R.AM1,Nassim:R.MAT1},18:{Lionel:R.REMPLACANT,Eugène:R.MAT1,Stephane:R.MAT2,Philippe:R.AM2,Nassim:R.AM1},19:{Lionel:R.REMPLACANT,Eugène:R.AM1,Stephane:R.MAT1,Philippe:R.MAT2,Nassim:R.AM2},20:{Lionel:R.REMPLACANT,Eugène:R.AM2,Stephane:R.AM1,Philippe:R.MAT1,Nassim:R.MAT2}};class LT{static getWeekSchedule(e,t=[]){const n=new Date(e.getFullYear(),e.getMonth(),e.getDate()),s=new Date(To.getFullYear(),To.getMonth(),To.getDate()),i=Eo(n,{weekStartsOn:1}),a=Eo(s,{weekStartsOn:1}),u=i.getTime()-a.getTime(),l=Math.floor(u/(7*24*60*60*1e3));console.log("Date courante:",n),console.log("Start of week:",i),console.log("Reference date:",a),console.log("Weeks since reference:",l);const d=(l%Js+Js)%Js+1,f=Math.floor(l/Js)+1;console.log("Week in cycle:",d),console.log("Cycle number:",f);const p=UT[d],w=this.getReplacementChef(p),A={},x=new Date(i),O=hp.slice().sort((S,L)=>{const M=p[S],q=p[L],K=[R.MAT1,R.MAT2,R.AM1,R.AM2,R.REMPLACANT];return K.indexOf(M)-K.indexOf(q)});for(let S=0;S<7;S++){const L=this.getDaySchedule(x,p,t,O);A[x.toISOString()]=L,x.setDate(x.getDate()+1)}return{startDate:i,cycleNumber:f,weekInCycle:d,remplacant:w,schedule:A}}static getReplacementChef(e){var t;return(t=Object.entries(e).find(([n,s])=>s===R.REMPLACANT))==null?void 0:t[0]}static getDaySchedule(e,t,n,s){const i=this.getReplacementChef(t),a=Eo(e,{weekStartsOn:1});let u=0,l=new Date(a);for(let A=0;A<7;A++)(!xu(l)||yo(l)&&this.hasAbsentChef(l,n,s))&&u++,l.setDate(l.getDate()+1);if((yo(e)||wo(e))&&this.hasAbsentChef(e,n,s)&&u>5,xu(e)){if(kf(e))return[];const A=s.find(O=>t[O]===R.MAT1),x=this.getVacation(A,e,n);return x?[{chef:A,poste:R.MAT1,vacation:x,isAbsent:!0},{chef:i,poste:R.MAT1,isReplacing:!0,replacedChef:A}]:(A==="Eugène"&&this.handleEugeneWorkedSaturday(e),[{chef:A,poste:R.MAT1}])}const d=this.isEugeneRecoveryDay(e);d&&Q.removeEugeneWorkedSaturday();const f=[],p=s.find(A=>this.getVacation(A,e,n)),w=p?t[p]:null;for(const A of s){const x=this.getVacation(A,e,n),O=new Date(e.getTime()-(wo(e)?2:4)*24*60*60*1e3),S=t[A]===R.MAT1&&!this.getVacation(A,O,n)&&(A==="Eugène"&&d||A!=="Eugène"&&wo(e));A===i?p?f.push({chef:A,poste:w,isReplacing:!0,replacedChef:p}):S&&t[A]===R.MAT1?f.push({chef:A,poste:R.MAT1,isReplacing:!0,replacedChef:A}):f.push({chef:A,poste:R.REMPLACANT}):x?f.push({chef:A,poste:t[A],vacation:x,isAbsent:!0}):S&&!p?f.push({chef:A,poste:t[A],isRecuperation:!0}):A!==p&&f.push({chef:A,poste:t[A]})}return f}static getVacation(e,t,n){return n.find(s=>{const i=new Date(s.startDate),a=new Date(s.endDate);return i.setHours(0,0,0,0),a.setHours(23,59,59,999),s.chef===e&&Mm(t,{start:i,end:a})})}static hasAbsentChef(e,t,n){return n.some(s=>this.getVacation(s,e,t)!==void 0)}static handleEugeneWorkedSaturday(e){this.isEugeneWorkingSaturday(e)&&Q.setEugeneWorkedSaturday(e)}static isEugeneRecoveryDay(e){const t=Q.getEugeneWorkedSaturday();if(!t)return!1;const n=qt(t,"yyyy-MM-dd"),s=qt(e,"yyyy-MM-dd");return n===s?(Q.removeEugeneWorkedSaturday(),!1):!0}static isEugeneWorkingSaturday(e){return yo(e)&&this.hasAbsentChef(e,[],["Eugène"])===!1}}const FT=({onClose:r})=>{const[e,t]=Z.useState(""),[n,s]=Z.useState(""),[i,a]=Z.useState(""),[u,l]=Z.useState(""),[d,f]=Z.useState(!1),[p,w]=Z.useState(!1),[A,x]=Z.useState(!1),[O,S]=Z.useState(!1),L=async M=>{if(M.preventDefault(),l(""),n!==i){l("Les nouveaux mots de passe ne correspondent pas");return}if(n.length<8){l("Le nouveau mot de passe doit contenir au moins 8 caractères");return}const q=Se.getCurrentUser();if(!q){l("Utilisateur non connecté");return}try{await Se.changePassword(q.username,e,n)?(f(!0),setTimeout(()=>{r()},2e3)):l("Ancien mot de passe incorrect")}catch{l("Erreur lors du changement de mot de passe")}};return y.jsxDEV("div",{className:"fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center",children:y.jsxDEV("div",{className:"bg-white p-8 rounded-lg shadow-lg max-w-md w-full",children:[y.jsxDEV("h2",{className:"text-2xl font-bold mb-6",children:"Changer le mot de passe"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/ChangePassword.tsx",lineNumber:61,columnNumber:9},void 0),d?y.jsxDEV("div",{className:"bg-green-50 p-4 rounded mb-4",children:y.jsxDEV("p",{className:"text-green-800",children:"Mot de passe modifié avec succès !"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/ChangePassword.tsx",lineNumber:65,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/ChangePassword.tsx",lineNumber:64,columnNumber:11},void 0):y.jsxDEV("form",{onSubmit:L,className:"space-y-4",children:[u&&y.jsxDEV("div",{className:"bg-red-50 p-4 rounded",children:y.jsxDEV("p",{className:"text-red-800",children:u},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/ChangePassword.tsx",lineNumber:73,columnNumber:17},void 0)},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/ChangePassword.tsx",lineNumber:72,columnNumber:15},void 0),y.jsxDEV("div",{children:[y.jsxDEV("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Ancien mot de passe"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/ChangePassword.tsx",lineNumber:78,columnNumber:15},void 0),y.jsxDEV("div",{className:"relative",children:[y.jsxDEV("input",{type:p?"text":"password",value:e,onChange:M=>t(M.target.value),className:"w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/ChangePassword.tsx",lineNumber:82,columnNumber:17},void 0),y.jsxDEV("button",{type:"button",onClick:()=>w(!p),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700",children:p?"Masquer":"Afficher"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/ChangePassword.tsx",lineNumber:89,columnNumber:17},void 0)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/ChangePassword.tsx",lineNumber:81,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/ChangePassword.tsx",lineNumber:77,columnNumber:13},void 0),y.jsxDEV("div",{children:[y.jsxDEV("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Nouveau mot de passe"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/ChangePassword.tsx",lineNumber:100,columnNumber:15},void 0),y.jsxDEV("div",{className:"relative",children:[y.jsxDEV("input",{type:A?"text":"password",value:n,onChange:M=>s(M.target.value),className:"w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/ChangePassword.tsx",lineNumber:104,columnNumber:17},void 0),y.jsxDEV("button",{type:"button",onClick:()=>x(!A),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700",children:A?"Masquer":"Afficher"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/ChangePassword.tsx",lineNumber:111,columnNumber:17},void 0)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/ChangePassword.tsx",lineNumber:103,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/ChangePassword.tsx",lineNumber:99,columnNumber:13},void 0),y.jsxDEV("div",{children:[y.jsxDEV("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Confirmer le nouveau mot de passe"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/ChangePassword.tsx",lineNumber:122,columnNumber:15},void 0),y.jsxDEV("div",{className:"relative",children:[y.jsxDEV("input",{type:O?"text":"password",value:i,onChange:M=>a(M.target.value),className:"w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/ChangePassword.tsx",lineNumber:126,columnNumber:17},void 0),y.jsxDEV("button",{type:"button",onClick:()=>S(!O),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700",children:O?"Masquer":"Afficher"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/ChangePassword.tsx",lineNumber:133,columnNumber:17},void 0)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/ChangePassword.tsx",lineNumber:125,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/ChangePassword.tsx",lineNumber:121,columnNumber:13},void 0),y.jsxDEV("div",{className:"flex justify-end space-x-4 pt-4",children:[y.jsxDEV("button",{type:"button",onClick:r,className:"px-4 py-2 text-gray-600 hover:text-gray-800",children:"Annuler"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/ChangePassword.tsx",lineNumber:144,columnNumber:15},void 0),y.jsxDEV("button",{type:"submit",className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",children:"Changer le mot de passe"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/ChangePassword.tsx",lineNumber:151,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/ChangePassword.tsx",lineNumber:143,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/ChangePassword.tsx",lineNumber:70,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/ChangePassword.tsx",lineNumber:60,columnNumber:7},void 0)},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/ChangePassword.tsx",lineNumber:59,columnNumber:5},void 0)},jT=()=>{const[r,e]=Z.useState([]),[t,n]=Z.useState([]);Z.useEffect(()=>{s(),i()},[]);const s=()=>{const u=Se.getPendingUsers();e(u)},i=()=>{const u=Se.getPendingNotifications();n(u)},a=async(u,l)=>{await Se.validateUser(u,l)&&(s(),i())};return r.length===0?null:y.jsxDEV("div",{className:"fixed top-4 right-4 neon-card p-6 rounded-lg shadow-lg max-w-md z-50 border border-cyan-500",children:[y.jsxDEV("h3",{className:"text-xl font-bold mb-6 neon-text text-center",children:"Utilisateurs en attente"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/PendingUsers.tsx",lineNumber:42,columnNumber:7},void 0),y.jsxDEV("div",{className:"space-y-6",children:r.map(u=>y.jsxDEV("div",{className:"border border-cyan-500/30 p-4 rounded-lg bg-gray-900/50 backdrop-blur-sm",children:[y.jsxDEV("p",{className:"font-medium text-cyan-300 text-lg",children:u.username},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/PendingUsers.tsx",lineNumber:46,columnNumber:13},void 0),y.jsxDEV("p",{className:"text-sm text-cyan-500/70 mb-4",children:["Demande créée le ",new Date(u.createdAt).toLocaleDateString()]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/PendingUsers.tsx",lineNumber:47,columnNumber:13},void 0),y.jsxDEV("div",{className:"flex justify-end space-x-3",children:[y.jsxDEV("button",{onClick:()=>a(u.username,!0),className:"neon-button px-4 py-2 rounded-md text-sm font-medium bg-emerald-900/50 hover:bg-emerald-800/50 border border-emerald-500 text-emerald-300 hover:text-emerald-200 transition-all duration-300",children:"Approuver"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/PendingUsers.tsx",lineNumber:51,columnNumber:15},void 0),y.jsxDEV("button",{onClick:()=>a(u.username,!1),className:"neon-button-danger px-4 py-2 rounded-md text-sm font-medium bg-red-900/50 hover:bg-red-800/50 border border-red-500 text-red-300 hover:text-red-200 transition-all duration-300",children:"Rejeter"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/PendingUsers.tsx",lineNumber:57,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/PendingUsers.tsx",lineNumber:50,columnNumber:13},void 0)]},u.username,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/PendingUsers.tsx",lineNumber:45,columnNumber:11},void 0))},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/PendingUsers.tsx",lineNumber:43,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/PendingUsers.tsx",lineNumber:41,columnNumber:5},void 0)},qT=()=>{const[r,e]=Z.useState([]);Z.useState(!1),Z.useState(null);const[t,n]=Z.useState("");Z.useEffect(()=>{s()},[]);const s=async()=>{const l=await Se.getAllUsers();e(l)},i=async(l,d)=>{await Se.updateUserStatus(l,d)?s():n(`Impossible de modifier le statut de ${l}`)},a=async l=>{window.confirm(`Êtes-vous sûr de vouloir supprimer l'utilisateur ${l} ?`)&&(await Se.deleteUser(l)?s():n(`Impossible de supprimer l'utilisateur ${l}`))},u=l=>{switch(l){case"active":return"bg-green-100 text-green-800";case"pending":return"bg-yellow-100 text-yellow-800";case"rejected":return"bg-red-100 text-red-800";default:return"bg-gray-100 text-gray-800"}};return y.jsxDEV("div",{className:"bg-white rounded-lg shadow-lg p-6",children:[y.jsxDEV("div",{className:"flex justify-between items-center mb-6",children:y.jsxDEV("h2",{className:"text-xl font-semibold",children:"Gestion des Utilisateurs"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/UserManagement.tsx",lineNumber:56,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/UserManagement.tsx",lineNumber:55,columnNumber:7},void 0),t&&y.jsxDEV("div",{className:"mb-4 p-4 bg-red-50 text-red-800 rounded",children:[t,y.jsxDEV("button",{onClick:()=>n(""),className:"ml-2 text-red-600 hover:text-red-800",children:"×"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/UserManagement.tsx",lineNumber:62,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/UserManagement.tsx",lineNumber:60,columnNumber:9},void 0),y.jsxDEV("div",{className:"overflow-x-auto",children:y.jsxDEV("table",{className:"min-w-full divide-y divide-gray-200",children:[y.jsxDEV("thead",{className:"bg-gray-50",children:y.jsxDEV("tr",{children:[y.jsxDEV("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Utilisateur"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/UserManagement.tsx",lineNumber:75,columnNumber:15},void 0),y.jsxDEV("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Rôle"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/UserManagement.tsx",lineNumber:78,columnNumber:15},void 0),y.jsxDEV("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Statut"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/UserManagement.tsx",lineNumber:81,columnNumber:15},void 0),y.jsxDEV("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Date de création"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/UserManagement.tsx",lineNumber:84,columnNumber:15},void 0),y.jsxDEV("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Actions"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/UserManagement.tsx",lineNumber:87,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/UserManagement.tsx",lineNumber:74,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/UserManagement.tsx",lineNumber:73,columnNumber:11},void 0),y.jsxDEV("tbody",{className:"bg-white divide-y divide-gray-200",children:r==null?void 0:r.map(l=>y.jsxDEV("tr",{children:[y.jsxDEV("td",{className:"px-6 py-4 whitespace-nowrap",children:y.jsxDEV("div",{className:"text-sm font-medium text-gray-900",children:l.username},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/UserManagement.tsx",lineNumber:96,columnNumber:19},void 0)},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/UserManagement.tsx",lineNumber:95,columnNumber:17},void 0),y.jsxDEV("td",{className:"px-6 py-4 whitespace-nowrap",children:y.jsxDEV("div",{className:"text-sm text-gray-900",children:l.role==="admin"?"Administrateur":"Utilisateur"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/UserManagement.tsx",lineNumber:101,columnNumber:19},void 0)},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/UserManagement.tsx",lineNumber:100,columnNumber:17},void 0),y.jsxDEV("td",{className:"px-6 py-4 whitespace-nowrap",children:y.jsxDEV("span",{className:`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${u(l.status)}`,children:l.status==="active"?"Actif":l.status==="pending"?"En attente":"Rejeté"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/UserManagement.tsx",lineNumber:106,columnNumber:19},void 0)},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/UserManagement.tsx",lineNumber:105,columnNumber:17},void 0),y.jsxDEV("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:new Date(l.createdAt??"").toLocaleDateString()},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/UserManagement.tsx",lineNumber:111,columnNumber:17},void 0),y.jsxDEV("td",{className:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2",children:!["admin","lionel"].includes(l.username)&&y.jsxDEV(y.Fragment,{children:[l.status!=="active"&&y.jsxDEV("button",{onClick:()=>i(l.username,"active"),className:"text-green-600 hover:text-green-900",children:"Activer"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/UserManagement.tsx",lineNumber:118,columnNumber:25},void 0),l.status!=="rejected"&&y.jsxDEV("button",{onClick:()=>i(l.username,"rejected"),className:"text-red-600 hover:text-red-900",children:"Rejeter"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/UserManagement.tsx",lineNumber:126,columnNumber:25},void 0),y.jsxDEV("button",{onClick:()=>a(l.username),className:"text-red-600 hover:text-red-900",children:"Supprimer"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/UserManagement.tsx",lineNumber:133,columnNumber:23},void 0)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/UserManagement.tsx",lineNumber:116,columnNumber:21},void 0)},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/UserManagement.tsx",lineNumber:114,columnNumber:17},void 0)]},l.username,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/UserManagement.tsx",lineNumber:94,columnNumber:15},void 0))},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/UserManagement.tsx",lineNumber:92,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/UserManagement.tsx",lineNumber:72,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/UserManagement.tsx",lineNumber:71,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/UserManagement.tsx",lineNumber:54,columnNumber:5},void 0)},BT=()=>{const[r,e]=Z.useState([]);Z.useEffect(()=>{t()},[]);const t=async()=>{const s=await Se.getAllUsers();e(s)},n=async s=>{window.confirm(`Êtes-vous sûr de vouloir supprimer l'utilisateur ${s} ?`)&&await Se.deleteUser(s)&&t()};return y.jsxDEV("div",{className:"p-6",children:[y.jsxDEV("h2",{className:"neon-text text-2xl font-bold mb-6",children:"Gestion des Utilisateurs"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/AdminDashboard.tsx",lineNumber:29,columnNumber:7},void 0),y.jsxDEV("div",{className:"grid gap-4",children:r==null?void 0:r.map(s=>y.jsxDEV("div",{className:"neon-card p-4 rounded-lg flex justify-between items-center",children:[y.jsxDEV("div",{children:[y.jsxDEV("span",{className:"neon-text font-medium",children:s.username},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/AdminDashboard.tsx",lineNumber:34,columnNumber:15},void 0),y.jsxDEV("span",{className:"ml-4 text-sm opacity-70",children:s.role},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/AdminDashboard.tsx",lineNumber:35,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/AdminDashboard.tsx",lineNumber:33,columnNumber:13},void 0),y.jsxDEV("button",{onClick:()=>n(s.username),className:"neon-button-danger px-4 py-2 rounded-md text-sm",children:"Supprimer"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/AdminDashboard.tsx",lineNumber:37,columnNumber:13},void 0)]},s.username,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/AdminDashboard.tsx",lineNumber:32,columnNumber:11},void 0))},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/AdminDashboard.tsx",lineNumber:30,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/components/AdminDashboard.tsx",lineNumber:28,columnNumber:5},void 0)};function $T(){const[r,e]=Z.useState(new Date("2024-10-14")),[t,n]=Z.useState(null),[s,i]=Z.useState([]),[a,u]=Z.useState(!1);Z.useEffect(()=>{Se.initialize();const p=Se.getCurrentUser();p&&n(p)},[]);const l=p=>{n(p)},d=()=>{Se.logout(),n(null)};if(!t)return y.jsxDEV(OT,{onLoginSuccess:l},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/App.tsx",lineNumber:40,columnNumber:12},this);const f=LT.getWeekSchedule(r,s);return y.jsxDEV("div",{className:"cyberpunk-bg min-h-screen",children:[t.role==="admin"&&y.jsxDEV(jT,{},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/App.tsx",lineNumber:47,columnNumber:40},this),y.jsxDEV("div",{className:"container mx-auto py-8 px-4",children:y.jsxDEV("div",{className:"flex flex-col space-y-6",children:[y.jsxDEV("header",{className:"neon-card p-4 rounded-lg",children:y.jsxDEV("div",{className:"flex justify-between items-center",children:[y.jsxDEV("h1",{className:"neon-text text-3xl font-bold",children:"Planning Équipe"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/App.tsx",lineNumber:52,columnNumber:15},this),y.jsxDEV("div",{className:"flex items-center space-x-4",children:[y.jsxDEV("span",{className:"neon-text text-sm",children:[t.username," (",t.role,")"]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/App.tsx",lineNumber:54,columnNumber:17},this),y.jsxDEV("button",{onClick:()=>u(!0),className:"neon-button px-4 py-2 rounded-md text-sm",children:"Changer le mot de passe"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/App.tsx",lineNumber:57,columnNumber:17},this),y.jsxDEV("button",{onClick:d,className:"neon-button px-4 py-2 rounded-md text-sm",children:"Déconnexion"},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/App.tsx",lineNumber:63,columnNumber:17},this)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/App.tsx",lineNumber:53,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/App.tsx",lineNumber:51,columnNumber:13},this)},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/App.tsx",lineNumber:50,columnNumber:11},this),y.jsxDEV("div",{className:"neon-card p-4 rounded-lg",children:y.jsxDEV(wp,{currentDate:r,onDateChange:e},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/App.tsx",lineNumber:74,columnNumber:13},this)},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/App.tsx",lineNumber:73,columnNumber:11},this),t.role==="admin"&&y.jsxDEV(y.Fragment,{children:[y.jsxDEV("div",{className:"mb-6",children:y.jsxDEV(BT,{},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/App.tsx",lineNumber:83,columnNumber:17},this)},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/App.tsx",lineNumber:82,columnNumber:15},this),y.jsxDEV("div",{className:"neon-card p-4 rounded-lg",children:y.jsxDEV(qT,{},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/App.tsx",lineNumber:86,columnNumber:17},this)},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/App.tsx",lineNumber:85,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/App.tsx",lineNumber:81,columnNumber:13},this),y.jsxDEV("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[y.jsxDEV("div",{className:"lg:col-span-2",children:y.jsxDEV("div",{className:"neon-card p-4 rounded-lg",children:y.jsxDEV(dp,{weekSchedule:f},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/App.tsx",lineNumber:94,columnNumber:17},this)},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/App.tsx",lineNumber:93,columnNumber:15},this)},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/App.tsx",lineNumber:92,columnNumber:13},this),y.jsxDEV("div",{className:"space-y-6",children:[y.jsxDEV("div",{className:"neon-card p-4 rounded-lg",children:y.jsxDEV(Ep,{vacations:s,onVacationChange:i},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/App.tsx",lineNumber:99,columnNumber:17},this)},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/App.tsx",lineNumber:98,columnNumber:15},this),y.jsxDEV("div",{className:"neon-card p-4 rounded-lg",children:y.jsxDEV(Ip,{vacations:s,onVacationsImport:i},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/App.tsx",lineNumber:105,columnNumber:17},this)},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/App.tsx",lineNumber:104,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/App.tsx",lineNumber:97,columnNumber:13},this)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/App.tsx",lineNumber:91,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/App.tsx",lineNumber:49,columnNumber:9},this)},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/App.tsx",lineNumber:48,columnNumber:7},this),a&&y.jsxDEV("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",children:y.jsxDEV("div",{className:"neon-card p-6 rounded-lg w-full max-w-md",children:y.jsxDEV(FT,{onClose:()=>u(!1)},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/App.tsx",lineNumber:118,columnNumber:13},this)},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/App.tsx",lineNumber:117,columnNumber:11},this)},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/App.tsx",lineNumber:116,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/App.tsx",lineNumber:46,columnNumber:5},this)}const WT=lf({palette:{primary:{main:"#1976d2"},background:{default:"#f5f5f5"}}},Df),Od=document.getElementById("root");if(!Od)throw new Error("Root element not found");Uo.createRoot(Od).render(y.jsxDEV(sf.StrictMode,{children:y.jsxDEV(cf,{theme:WT,children:y.jsxDEV(hf,{dateAdapter:Nf,adapterLocale:"fr",children:y.jsxDEV($T,{},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/main.tsx",lineNumber:32,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/main.tsx",lineNumber:31,columnNumber:7},void 0)},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/main.tsx",lineNumber:30,columnNumber:5},void 0)},void 0,!1,{fileName:"/Users/kangal93/Desktop/planning-equipe/src/main.tsx",lineNumber:29,columnNumber:3},void 0));

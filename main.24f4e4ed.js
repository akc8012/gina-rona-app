parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"u8ui":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.render=M,exports.hydrate=F,exports.h=exports.createElement=f,exports.Fragment=h,exports.createRef=d,exports.Component=v,exports.cloneElement=R,exports.createContext=V,exports.toChildArray=b,exports.__u=W,exports.options=exports.isValidElement=void 0;var e,t,n,o,l,_,r,u={},i=[],s=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function c(e,t){for(var n in t)e[n]=t[n];return e}function p(e){var t=e.parentNode;t&&t.removeChild(e)}function f(e,t,n){var o,l=arguments,_={};for(o in t)"key"!==o&&"ref"!==o&&(_[o]=t[o]);if(arguments.length>3)for(n=[n],o=3;o<arguments.length;o++)n.push(l[o]);if(null!=n&&(_.children=n),"function"==typeof e&&null!=e.defaultProps)for(o in e.defaultProps)void 0===_[o]&&(_[o]=e.defaultProps[o]);return a(e,_,t&&t.key,t&&t.ref,null)}function a(t,n,o,l,_){var r={type:t,props:n,key:o,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:_};return null==_&&(r.__v=r),e.vnode&&e.vnode(r),r}function d(){return{current:null}}function h(e){return e.children}function v(e,t){this.props=e,this.context=t}function y(e,t){if(null==t)return e.__?y(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?y(e):null}function m(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return m(e)}}function g(t){(!t.__d&&(t.__d=!0)&&n.push(t)&&!k.__r++||l!==e.debounceRendering)&&((l=e.debounceRendering)||o)(k)}function k(){for(var e;k.__r=n.length;)e=n.sort(function(e,t){return e.__v.__b-t.__v.__b}),n=[],e.some(function(e){var t,n,o,l,_,r,u;e.__d&&(r=(_=(t=e).__v).__e,(u=t.__P)&&(n=[],(o=c({},_)).__v=o,l=U(u,_,o,t.__n,void 0!==u.ownerSVGElement,null,n,null==r?y(_):r),A(n,_),l!=r&&m(_)))})}function x(e,t,n,o,l,_,r,s,c,f){var d,v,m,g,k,x,b,w=o&&o.__k||i,S=w.length;for(c==u&&(c=null!=r?r[0]:S?y(o,0):null),n.__k=[],d=0;d<t.length;d++)if(null!=(g=n.__k[d]=null==(g=t[d])||"boolean"==typeof g?null:"string"==typeof g||"number"==typeof g?a(null,g,null,null,g):Array.isArray(g)?a(h,{children:g},null,null,null):null!=g.__e||null!=g.__c?a(g.type,g.props,g.key,null,g.__v):g)){if(g.__=n,g.__b=n.__b+1,null===(m=w[d])||m&&g.key==m.key&&g.type===m.type)w[d]=void 0;else for(v=0;v<S;v++){if((m=w[v])&&g.key==m.key&&g.type===m.type){w[v]=void 0;break}m=null}k=U(e,g,m=m||u,l,_,r,s,c,f),(v=g.ref)&&m.ref!=v&&(b||(b=[]),m.ref&&b.push(m.ref,null,g),b.push(v,g.__c||k,g)),null!=k?(null==x&&(x=k),c=C(e,g,m,w,r,k,c),"option"==n.type?e.value="":"function"==typeof n.type&&(n.__d=c)):c&&m.__e==c&&c.parentNode!=e&&(c=y(m))}if(n.__e=x,null!=r&&"function"!=typeof n.type)for(d=r.length;d--;)null!=r[d]&&p(r[d]);for(d=S;d--;)null!=w[d]&&W(w[d],w[d]);if(b)for(d=0;d<b.length;d++)T(b[d],b[++d],b[++d])}function b(e){return null==e||"boolean"==typeof e?[]:Array.isArray(e)?i.concat.apply([],e.map(b)):[e]}function C(e,t,n,o,l,_,r){var u,i,s;if(void 0!==t.__d)u=t.__d,t.__d=void 0;else if(l==n||_!=r||null==_.parentNode)e:if(null==r||r.parentNode!==e)e.appendChild(_),u=null;else{for(i=r,s=0;(i=i.nextSibling)&&s<o.length;s+=2)if(i==_)break e;e.insertBefore(_,r),u=r}return void 0!==u?u:_.nextSibling}function w(e,t,n,o,l){var _;for(_ in n)"children"===_||"key"===_||_ in t||P(e,_,null,n[_],o);for(_ in t)l&&"function"!=typeof t[_]||"children"===_||"key"===_||"value"===_||"checked"===_||n[_]===t[_]||P(e,_,t[_],n[_],o)}function S(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]="number"==typeof n&&!1===s.test(t)?n+"px":null==n?"":n}function P(e,t,n,o,l){var _,r,u,i,s;if(l?"className"===t&&(t="class"):"class"===t&&(t="className"),"style"===t)if(_=e.style,"string"==typeof n)_.cssText=n;else{if("string"==typeof o&&(_.cssText="",o=null),o)for(i in o)n&&i in n||S(_,i,"");if(n)for(s in n)o&&n[s]===o[s]||S(_,s,n[s])}else"o"===t[0]&&"n"===t[1]?(r=t!==(t=t.replace(/Capture$/,"")),u=t.toLowerCase(),t=(u in e?u:t).slice(2),n?(o||e.addEventListener(t,E,r),(e.l||(e.l={}))[t]=n):e.removeEventListener(t,E,r)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&!l&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function E(t){this.l[t.type](e.event?e.event(t):t)}function N(e,t,n){var o,l;for(o=0;o<e.__k.length;o++)(l=e.__k[o])&&(l.__=e,l.__e&&("function"==typeof l.type&&l.__k.length>1&&N(l,t,n),t=C(n,l,l,e.__k,null,l.__e,t),"function"==typeof e.type&&(e.__d=t)))}function U(t,n,o,l,_,r,u,i,s){var p,f,a,d,y,m,g,k,b,C,w,S=n.type;if(void 0!==n.constructor)return null;(p=e.__b)&&p(n);try{e:if("function"==typeof S){if(k=n.props,b=(p=S.contextType)&&l[p.__c],C=p?b?b.props.value:p.__:l,o.__c?g=(f=n.__c=o.__c).__=f.__E:("prototype"in S&&S.prototype.render?n.__c=f=new S(k,C):(n.__c=f=new v(k,C),f.constructor=S,f.render=L),b&&b.sub(f),f.props=k,f.state||(f.state={}),f.context=C,f.__n=l,a=f.__d=!0,f.__h=[]),null==f.__s&&(f.__s=f.state),null!=S.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=c({},f.__s)),c(f.__s,S.getDerivedStateFromProps(k,f.__s))),d=f.props,y=f.state,a)null==S.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==S.getDerivedStateFromProps&&k!==d&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(k,C),!f.__e&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(k,f.__s,C)||n.__v===o.__v){f.props=k,f.state=f.__s,n.__v!==o.__v&&(f.__d=!1),f.__v=n,n.__e=o.__e,n.__k=o.__k,f.__h.length&&u.push(f),N(n,i,t);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(k,f.__s,C),null!=f.componentDidUpdate&&f.__h.push(function(){f.componentDidUpdate(d,y,m)})}f.context=C,f.props=k,f.state=f.__s,(p=e.__r)&&p(n),f.__d=!1,f.__v=n,f.__P=t,p=f.render(f.props,f.state,f.context),f.state=f.__s,null!=f.getChildContext&&(l=c(c({},l),f.getChildContext())),a||null==f.getSnapshotBeforeUpdate||(m=f.getSnapshotBeforeUpdate(d,y)),w=null!=p&&p.type==h&&null==p.key?p.props.children:p,x(t,Array.isArray(w)?w:[w],n,o,l,_,r,u,i,s),f.base=n.__e,f.__h.length&&u.push(f),g&&(f.__E=f.__=null),f.__e=!1}else null==r&&n.__v===o.__v?(n.__k=o.__k,n.__e=o.__e):n.__e=D(o.__e,n,o,l,_,r,u,s);(p=e.diffed)&&p(n)}catch(t){n.__v=null,e.__e(t,n,o)}return n.__e}function A(t,n){e.__c&&e.__c(n,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(e){e.call(n)})}catch(t){e.__e(t,n.__v)}})}function D(e,t,n,o,l,_,r,s){var c,p,f,a,d,h=n.props,v=t.props;if(l="svg"===t.type||l,null!=_)for(c=0;c<_.length;c++)if(null!=(p=_[c])&&((null===t.type?3===p.nodeType:p.localName===t.type)||e==p)){e=p,_[c]=null;break}if(null==e){if(null===t.type)return document.createTextNode(v);e=l?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,v.is&&{is:v.is}),_=null,s=!1}if(null===t.type)h!==v&&e.data!=v&&(e.data=v);else{if(null!=_&&(_=i.slice.call(e.childNodes)),f=(h=n.props||u).dangerouslySetInnerHTML,a=v.dangerouslySetInnerHTML,!s){if(null!=_)for(h={},d=0;d<e.attributes.length;d++)h[e.attributes[d].name]=e.attributes[d].value;(a||f)&&(a&&f&&a.__html==f.__html||(e.innerHTML=a&&a.__html||""))}w(e,v,h,l,s),a?t.__k=[]:(c=t.props.children,x(e,Array.isArray(c)?c:[c],t,n,o,"foreignObject"!==t.type&&l,_,r,u,s)),s||("value"in v&&void 0!==(c=v.value)&&c!==e.value&&P(e,"value",c,h.value,!1),"checked"in v&&void 0!==(c=v.checked)&&c!==e.checked&&P(e,"checked",c,h.checked,!1))}return e}function T(t,n,o){try{"function"==typeof t?t(n):t.current=n}catch(t){e.__e(t,o)}}function W(t,n,o){var l,_,r;if(e.unmount&&e.unmount(t),(l=t.ref)&&(l.current&&l.current!==t.__e||T(l,null,n)),o||"function"==typeof t.type||(o=null!=(_=t.__e)),t.__e=t.__d=void 0,null!=(l=t.__c)){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(t){e.__e(t,n)}l.base=l.__P=null}if(l=t.__k)for(r=0;r<l.length;r++)l[r]&&W(l[r],n,o);null!=_&&p(_)}function L(e,t,n){return this.constructor(e,n)}function M(t,n,o){var l,r,s;e.__&&e.__(t,n),r=(l=o===_)?null:o&&o.__k||n.__k,t=f(h,null,[t]),s=[],U(n,(l?n:o||n).__k=t,r||u,u,void 0!==n.ownerSVGElement,o&&!l?[o]:r?null:n.childNodes.length?i.slice.call(n.childNodes):null,s,o||u,l),A(s,t)}function F(e,t){M(e,t,_)}function R(e,t){var n,o;for(o in t=c(c({},e.props),t),arguments.length>2&&(t.children=i.slice.call(arguments,2)),n={},t)"key"!==o&&"ref"!==o&&(n[o]=t[o]);return a(e.type,n,t.key||e.key,t.ref||e.ref,null)}function V(e){var t={},n={__c:"__cC"+r++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var o,l=this;return this.getChildContext||(o=[],this.getChildContext=function(){return t[n.__c]=l,t},this.shouldComponentUpdate=function(e){l.props.value!==e.value&&o.some(function(t){t.context=e.value,g(t)})},this.sub=function(e){o.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){o.splice(o.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Consumer.contextType=n,n.Provider.__=n,n}exports.isValidElement=t,exports.options=e,exports.options=e={__e:function(e,t){for(var n,o;t=t.__;)if((n=t.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(o=!0,n.setState(n.constructor.getDerivedStateFromError(e))),null!=n.componentDidCatch&&(o=!0,n.componentDidCatch(e)),o)return g(n.__E=n)}catch(t){e=t}throw e}},exports.isValidElement=t=function(e){return null!=e&&void 0===e.constructor},v.prototype.setState=function(e,t){var n;n=this.__s!==this.state?this.__s:this.__s=c({},this.state),"function"==typeof e&&(e=e(n,this.props)),e&&c(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),g(this))},v.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),g(this))},v.prototype.render=h,n=[],o="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,k.__r=0,_=u,r=0;
},{}],"T0VR":[function(require,module,exports) {

},{}],"AglL":[function(require,module,exports) {
"use strict";var e=require("preact");function r(){return(0,e.h)("h1",null,"Hello friends!")}require("./style.scss"),(0,e.render)((0,e.h)(r,null),document.getElementById("root"));
},{"preact":"u8ui","./style.scss":"T0VR"}]},{},["AglL"], null)
//# sourceMappingURL=main.24f4e4ed.js.map
(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,"* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n}\r\nbody {\r\n  background-color: rgb(19, 92, 6);\r\n}\r\n#content {\r\n  text-align: center;\r\n  color: white;\r\n  margin: 0 20px;\r\n}\r\n#logo {\r\n  margin: 20px;\r\n}\r\n#pizzeria {\r\n  max-width: 100%;\r\n}\r\nh1 {\r\n  font-size: 1.5em;\r\n}\r\np {\r\n  font-size: 1.1em;\r\n}\r\ndiv {\r\n  margin: 10px 0;\r\n}\r\n#assortment img {\r\n  width: 100%;\r\n  height: 200px;\r\n  object-fit: cover;\r\n}\r\n",""]);const a=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},695:e=>{var t={};e.exports=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],p=a[d]||0,l="".concat(d," ").concat(p);a[d]=p+1;var u=n(l),m={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(t[u].references++,t[u].updater(m)):t.push({identifier:l,updater:o(m,r),references:1}),i.push(l)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var p=n(a[d]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}a=s}}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},907:(e,t,n)=>{e.exports=n.p+"60fc95d992c8669ab4df.jpg"},465:(e,t,n)=>{e.exports=n.p+"e445975bbf7b7b8011ee.jpg"},573:(e,t,n)=>{e.exports=n.p+"c2f6f901cc62d9e5bc6d.jpg"},161:(e,t,n)=>{e.exports=n.p+"9ad097df7cda331a3688.jpg"},222:(e,t,n)=>{e.exports=n.p+"588f5e9288efb3fe08cd.jpg"},579:(e,t,n)=>{e.exports=n.p+"b3ed4ae25d1a84bb0e5f.jpg"},178:(e,t,n)=>{e.exports=n.p+"049da06c6e7136c0883c.jpg"},670:(e,t,n)=>{e.exports=n.p+"44fe0d42bc2004845702.jpg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(695),i=n.n(a),c=n(216),s=n.n(c),d=n(426),p={styleTagTransform:function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}},setAttributes:function(e){var t=n.nc;t&&e.setAttribute("nonce",t)},insert:function(e){var t=i()("head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}};p.domAPI=o(),p.insertStyleElement=s(),t()(d.Z,p),d.Z&&d.Z.locals&&d.Z.locals;var l=n(907),u=n(670),m=n(465),f=n(573),h=n(161),g=n(222),v=n(579),b=n(178);(()=>{const e=new Image;e.src=l,e.id="logo",content.appendChild(e);const t=new Image;t.src=u,t.id="pizzeria",content.appendChild(t);const n=document.createElement("h1");n.textContent="THE BEST NEW YORK STYLE PIZZA AROUND!",content.appendChild(n);const r=document.createElement("p");r.textContent="The Russo family has been serving up the best New York Style Pizza and authentic Italian cuisine for years. Our recipes have been passed down from generation to generation all the way from Naples and Sicily. Russo’s mission is to serve New York style pizza and authentic Italian food worldwide so that no matter your location, you’ll be able to enjoy the delicious, traditional Russo family recipes.",content.appendChild(r)})();const C=document.createElement("div");C.id="assortment",content.appendChild(C),(()=>{const e=document.createElement("div");C.appendChild(e);const t=document.createElement("h2");t.textContent="Capricciosa",e.appendChild(t);const n=new Image;n.src=m,e.appendChild(n)})(),(()=>{const e=document.createElement("div");C.appendChild(e);const t=document.createElement("h2");t.textContent="Hawaiian",e.appendChild(t);const n=new Image;n.src=f,e.appendChild(n)})(),(()=>{const e=document.createElement("div");C.appendChild(e);const t=document.createElement("h2");t.textContent="Margherita",e.appendChild(t);const n=new Image;n.src=h,e.appendChild(n)})(),(()=>{const e=document.createElement("div");C.appendChild(e);const t=document.createElement("h2");t.textContent="Neapolitan",e.appendChild(t);const n=new Image;n.src=g,e.appendChild(n)})(),(()=>{const e=document.createElement("div");C.appendChild(e);const t=document.createElement("h2");t.textContent="Pepperoni",e.appendChild(t);const n=new Image;n.src=v,e.appendChild(n)})(),(()=>{const e=document.createElement("div");C.appendChild(e);const t=document.createElement("h2");t.textContent="Quattro Formaggi",e.appendChild(t);const n=new Image;n.src=b,e.appendChild(n)})()})()})();
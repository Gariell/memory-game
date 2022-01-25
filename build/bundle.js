var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function s(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let a,c;function i(t,e){return a||(a=document.createElement("a")),a.href=e,t===a.href}function r(e){let n;return function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(e,(t=>n=t))(),n}function u(t){return null==t?"":t}function d(t,e){t.appendChild(e)}function m(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function p(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function g(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function $(){return h(" ")}function v(){return h("")}function b(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function y(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function k(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function x(t,e,n){t.classList[n?"add":"remove"](e)}function M(t){c=t}function _(){const t=function(){if(!c)throw new Error("Function called outside component initialization");return c}();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const s=function(t,e,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,!1,e),o}(e,n);o.slice().forEach((e=>{e.call(t,s)}))}}}const S=[],w=[],L=[],G=[],z=Promise.resolve();let q=!1;function E(t){L.push(t)}function j(t){G.push(t)}const T=new Set;let A=0;function C(){const t=c;do{for(;A<S.length;){const t=S[A];A++,M(t),N(t.$$)}for(M(null),S.length=0,A=0;w.length;)w.pop()();for(let t=0;t<L.length;t+=1){const e=L[t];T.has(e)||(T.add(e),e())}L.length=0}while(S.length);for(;G.length;)G.pop()();q=!1,T.clear(),M(t)}function N(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const O=new Set;let I;function B(t,e){t&&t.i&&(O.delete(t),t.i(e))}function H(t,e,n,o){if(t&&t.o){if(O.has(t))return;O.add(t),I.c.push((()=>{O.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function J(t,e,n){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}function V(t){t&&t.c()}function F(t,n,l,a){const{fragment:c,on_mount:i,on_destroy:r,after_update:u}=t.$$;c&&c.m(n,l),a||E((()=>{const n=i.map(e).filter(s);r?r.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(E)}function P(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function X(t,e){-1===t.$$.dirty[0]&&(S.push(t),q||(q=!0,z.then(C)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function D(e,s,l,a,i,r,u,d=[-1]){const m=c;M(e);const p=e.$$={fragment:null,ctx:null,props:r,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(m?m.$$.context:[])),callbacks:n(),dirty:d,skip_bound:!1,root:s.target||m.$$.root};u&&u(p.root);let g=!1;if(p.ctx=l?l(e,s.props||{},((t,n,...o)=>{const s=o.length?o[0]:n;return p.ctx&&i(p.ctx[t],p.ctx[t]=s)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](s),g&&X(e,t)),n})):[],p.update(),g=!0,o(p.before_update),p.fragment=!!a&&a(p.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);p.fragment&&p.fragment.l(t),t.forEach(f)}else p.fragment&&p.fragment.c();s.intro&&B(e.$$.fragment),F(e,s.target,s.anchor,s.customElement),C()}M(m)}class K{$destroy(){P(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Q=[];var R={};function U(e,n){const o="undefined"!=typeof localStorage;function s(t,e){o&&localStorage.setItem(t,JSON.stringify(e))}if(!R[e]){const a=function(e,n=t){let o;const s=new Set;function a(t){if(l(e,t)&&(e=t,o)){const t=!Q.length;for(const t of s)t[1](),Q.push(t,e);if(t){for(let t=0;t<Q.length;t+=2)Q[t][0](Q[t+1]);Q.length=0}}}return{set:a,update:function(t){a(t(e))},subscribe:function(l,c=t){const i=[l,c];return s.add(i),1===s.size&&(o=n(a)||t),l(e),()=>{s.delete(i),0===s.size&&(o(),o=null)}}}}(n,(t=>{const n=o?localStorage.getItem(e):null;if(n&&t(JSON.parse(n)),o){const n=n=>{n.key===e&&t(n.newValue?JSON.parse(n.newValue):null)};return window.addEventListener("storage",n),()=>window.removeEventListener("storage",n)}})),{subscribe:c,set:i}=a;R[e]={set(t){s(e,t),i(t)},update(t){const n=t(r(a));s(e,n),i(n)},subscribe:c}}return R[e]}function W(t){let e=0,n=0,o=0;return o=Math.floor(t/60/60),n=Math.floor(t/60)-60*n,e=t%60,function(t,e,n){return[t.toString().padStart(2,"0"),e.toString().padStart(2,"0"),n.toString().padStart(2,"0")].join(":")}(o,n,e)}function Y(t){return t.slice().sort(((t,e)=>Math.random()-.5))}function Z(t,e){if(0!=t)return e.indexOf(t);console.log("findIndex() - error")}function tt(e){let n,o,s;return{c(){n=g("img"),i(n.src,o=e[0])||y(n,"src",o),y(n,"class",s=u(e[2])+" svelte-1m0y4k8"),y(n,"alt",e[1])},m(t,e){m(t,n,e)},p(t,[e]){1&e&&!i(n.src,o=t[0])&&y(n,"src",o),4&e&&s!==(s=u(t[2])+" svelte-1m0y4k8")&&y(n,"class",s),2&e&&y(n,"alt",t[1])},i:t,o:t,d(t){t&&f(n)}}}function et(t,e,n){let{src:o}=e,{alt:s}=e,{status:l}=e;return t.$$set=t=>{"src"in t&&n(0,o=t.src),"alt"in t&&n(1,s=t.alt),"status"in t&&n(2,l=t.status)},[o,s,l]}class nt extends K{constructor(t){super(),D(this,t,et,tt,l,{src:0,alt:1,status:2})}}function ot(t){let e,n,o,s,l,a,c,i,r,u;return a=new nt({props:{src:t[6],alt:t[2],status:t[1]}}),{c(){e=g("div"),n=g("div"),o=g("div"),s=$(),l=g("div"),V(a.$$.fragment),y(o,"class","front svelte-yphqby"),y(l,"class","back svelte-yphqby"),y(n,"class","flipper svelte-yphqby"),y(e,"class",c="card "+t[1]+" svelte-yphqby"),y(e,"data-id",t[3]),x(e,"open",!0===t[5])},m(c,f){m(c,e,f),d(e,n),d(n,o),d(n,s),d(n,l),F(a,l,null),i=!0,r||(u=b(e,"click",t[9]),r=!0)},p(t,[n]){const o={};64&n&&(o.src=t[6]),4&n&&(o.alt=t[2]),2&n&&(o.status=t[1]),a.$set(o),(!i||2&n&&c!==(c="card "+t[1]+" svelte-yphqby"))&&y(e,"class",c),(!i||8&n)&&y(e,"data-id",t[3]),34&n&&x(e,"open",!0===t[5])},i(t){i||(B(a.$$.fragment,t),i=!0)},o(t){H(a.$$.fragment,t),i=!1},d(t){t&&f(e),P(a),r=!1,u()}}}function st(t,e,n){let o;function s(t,e){"start"!==c&&"preStart"!==c||1!=d&&n(7,l=[i,e,t])}let{cardActive:l=[]}=e,{status:a,statusGame:c}=e,{name:i}=e,{id:r}=e,{number:u}=e,{open:d}=e;return t.$$set=t=>{"cardActive"in t&&n(7,l=t.cardActive),"status"in t&&n(1,a=t.status),"statusGame"in t&&n(8,c=t.statusGame),"name"in t&&n(2,i=t.name),"id"in t&&n(3,r=t.id),"number"in t&&n(4,u=t.number),"open"in t&&n(5,d=t.open)},t.$$.update=()=>{4&t.$$.dirty&&n(6,o="./static/img/"+i+".jpg")},[s,a,i,r,u,d,o,l,c,()=>s(u,r)]}class lt extends K{constructor(t){super(),D(this,t,st,ot,l,{openCard:0,cardActive:7,status:1,statusGame:8,name:2,id:3,number:4,open:5})}get openCard(){return this.$$.ctx[0]}}function at(e){let n,o,s,l;return{c(){n=g("div"),o=g("button"),o.innerHTML='<img src="./static/icon/re.svg" alt="Button reload" class="svelte-hajkes"/>',y(o,"class","control__btn-restart svelte-hajkes"),x(o,"active",1==e[0]),y(n,"class","control")},m(t,a){m(t,n,a),d(n,o),s||(l=b(o,"click",e[1]),s=!0)},p(t,[e]){1&e&&x(o,"active",1==t[0])},i:t,o:t,d(t){t&&f(n),s=!1,l()}}}function ct(t,e,n){const o=_();let s=!1;return[s,function(){o("message"),n(0,s=!0),setTimeout((()=>{n(0,s=!1)}),1e3)}]}class it extends K{constructor(t){super(),D(this,t,ct,at,l,{})}}function rt(t,e,n){const o=t.slice();return o[20]=e[n],o[22]=n,o}function ut(t){let e,n,o,s,l,a,c,i,r=t[1],u=[];for(let e=0;e<r.length;e+=1)u[e]=dt(rt(t,r,e));return{c(){e=g("div"),n=g("span"),n.textContent="last games",o=$(),s=g("button"),s.textContent="reset",l=$();for(let t=0;t<u.length;t+=1)u[t].c();a=v(),y(n,"class","time-head__title"),y(s,"class","time-loops__btn-reset svelte-1nio939"),y(e,"class","time-head svelte-1nio939")},m(r,f){m(r,e,f),d(e,n),d(e,o),d(e,s),m(r,l,f);for(let t=0;t<u.length;t+=1)u[t].m(r,f);m(r,a,f),c||(i=b(s,"click",t[4]),c=!0)},p(t,e){if(2&e){let n;for(r=t[1],n=0;n<r.length;n+=1){const o=rt(t,r,n);u[n]?u[n].p(o,e):(u[n]=dt(o),u[n].c(),u[n].m(a.parentNode,a))}for(;n<u.length;n+=1)u[n].d(1);u.length=r.length}},d(t){t&&f(e),t&&f(l),p(u,t),t&&f(a),c=!1,i()}}}function dt(t){let e,n,o,s,l,a,c,i=t[22]+1+"",r=W(t[20])+"";return{c(){e=g("div"),n=g("span"),o=h(i),s=h("."),l=g("span"),a=h(r),c=$(),y(e,"class","time-loop svelte-1nio939")},m(t,i){m(t,e,i),d(e,n),d(n,o),d(n,s),d(e,l),d(l,a),d(e,c)},p(t,e){2&e&&r!==(r=W(t[20])+"")&&k(a,r)},d(t){t&&f(e)}}}function mt(e){let n,o,s,l,a,c,i,r,u,p,v,b,x,M=(0!=e[0]&&null!=e[0]?W(e[2][e[0]]):"00:00:00")+"",_=null!=e[1]&&e[1].length>0&&ut(e);return{c(){n=g("div"),o=g("div"),_&&_.c(),s=$(),l=g("div"),a=g("div"),c=g("span"),c.textContent="time:",i=g("time"),r=h(e[3]),u=$(),p=g("div"),v=g("span"),v.textContent="best time",b=g("time"),x=h(M),y(o,"class","time-loops svelte-1nio939"),y(i,"class","svelte-1nio939"),y(a,"class","time-counter svelte-1nio939"),y(b,"class","svelte-1nio939"),y(p,"class","time-best svelte-1nio939"),y(l,"class","time-counter-wrapper svelte-1nio939"),y(n,"class","time svelte-1nio939")},m(t,e){m(t,n,e),d(n,o),_&&_.m(o,null),d(n,s),d(n,l),d(l,a),d(a,c),d(a,i),d(i,r),d(l,u),d(l,p),d(p,v),d(p,b),d(b,x)},p(t,[e]){null!=t[1]&&t[1].length>0?_?_.p(t,e):(_=ut(t),_.c(),_.m(o,null)):_&&(_.d(1),_=null),8&e&&k(r,t[3]),5&e&&M!==(M=(0!=t[0]&&null!=t[0]?W(t[2][t[0]]):"00:00:00")+"")&&k(x,M)},i:t,o:t,d(t){t&&f(n),_&&_.d()}}}function ft(t,e,n){let o,{statusGame:s,gameMode:l,cardLimit:a}=e,c=[];for(let t=0;t<a.length;t++)c[t]={mode:a[t],loops:[]};let i=U("loopsLS",c);o=null==r(i)||0==r(i).length?c:r(i);let u=[],d={};a.forEach((t=>{n(2,d[t]="",d)}));let m,f=U("bestLoopLS",d),p="00:00:00",g=0;function h(t){"launched"==t?(clearInterval(m),g=0,n(3,p="00:00:00")):"start"==t?"start"===s&&(m=setInterval((()=>{g++,n(3,p=W(g))}),1e3)):"end"==t&&(clearInterval(m),function(){let t=u.length>0?u.length:0;n(1,u[t]=g,u),n(1,u=u.slice(-10)),o[Z(l,a)].loops=u,u.forEach((t=>{var e;n(2,d[l]=(e=t,d[l]<e&&""!=d[l]&&0!=d[l]&&null!=d[l]?d[l]:e),d)})),function(t){if("get"==t){let t=r(i);n(1,u=t.slice(0,10)),n(2,d=r(f))}else i.set(o),f.set(d)}("set")}())}function $(){let t=Z(l,a);-1!=t&&n(1,u=o[t].loops)}return d=r(f),$(),t.$$set=t=>{"statusGame"in t&&n(5,s=t.statusGame),"gameMode"in t&&n(0,l=t.gameMode),"cardLimit"in t&&n(6,a=t.cardLimit)},t.$$.update=()=>{32&t.$$.dirty&&s&&h(s),1&t.$$.dirty&&l&&$()},[l,u,d,p,function(){n(1,u.length=0,u),o[Z(l,a)].loops=u,i.set(o)},s,a]}class pt extends K{constructor(t){super(),D(this,t,ft,mt,l,{statusGame:5,gameMode:0,cardLimit:6})}}function gt(t,e,n){const o=t.slice();return o[12]=e[n],o}function ht(t){let e,n,o,s,l,a,c,i,r,u,p;function h(t,e){return"endGame"==t[0].action?bt:"gameModeSelection"==t[0].action?vt:$t}let v=h(t),k=v(t);function x(t,e){return"endGame"==t[0].action?xt:"gameModeSelection"==t[0].action?kt:yt}let M=x(t),_=M(t),S="endGame"==t[0].action&&St(t);return{c(){e=g("div"),n=g("div"),o=g("div"),s=g("h2"),k.c(),l=$(),a=g("button"),a.textContent="X",c=$(),i=g("div"),_.c(),r=$(),S&&S.c(),y(s,"class","modal-title svelte-1qi6zhb"),y(a,"class","modal-btn-close svelte-1qi6zhb"),y(o,"class","modal-head svelte-1qi6zhb"),y(i,"class","modal-content svelte-1qi6zhb"),y(n,"class","modal svelte-1qi6zhb"),y(e,"class","blur modal-wrapper  svelte-1qi6zhb")},m(f,g){m(f,e,g),d(e,n),d(n,o),d(o,s),k.m(s,null),d(o,l),d(o,a),d(n,c),d(n,i),_.m(i,null),d(n,r),S&&S.m(n,null),u||(p=b(a,"click",t[6]),u=!0)},p(t,e){v===(v=h(t))&&k?k.p(t,e):(k.d(1),k=v(t),k&&(k.c(),k.m(s,null))),M===(M=x(t))&&_?_.p(t,e):(_.d(1),_=M(t),_&&(_.c(),_.m(i,null))),"endGame"==t[0].action?S?S.p(t,e):(S=St(t),S.c(),S.m(n,null)):S&&(S.d(1),S=null)},d(t){t&&f(e),k.d(),_.d(),S&&S.d(),u=!1,p()}}}function $t(e){let n;return{c(){n=h("Ошибка")},m(t,e){m(t,n,e)},p:t,d(t){t&&f(n)}}}function vt(e){let n;return{c(){n=h("Выбор режима игры")},m(t,e){m(t,n,e)},p:t,d(t){t&&f(n)}}}function bt(t){let e,n,o;return{c(){e=h('Поздравляем, вы закончили режим "'),n=h(t[1]),o=h(' cards"')},m(t,s){m(t,e,s),m(t,n,s),m(t,o,s)},p(t,e){2&e&&k(n,t[1])},d(t){t&&f(e),t&&f(n),t&&f(o)}}}function yt(e){let n;return{c(){n=h("не правильные параметры модального окна")},m(t,e){m(t,n,e)},p:t,d(t){t&&f(n)}}}function kt(t){let e,n=t[0].gameMods,o=[];for(let e=0;e<n.length;e+=1)o[e]=Mt(gt(t,n,e));return{c(){e=g("div");for(let t=0;t<o.length;t+=1)o[t].c();y(e,"class","gamemods-items svelte-1qi6zhb")},m(t,n){m(t,e,n);for(let t=0;t<o.length;t+=1)o[t].m(e,null)},p(t,s){if(5&s){let l;for(n=t[0].gameMods,l=0;l<n.length;l+=1){const a=gt(t,n,l);o[l]?o[l].p(a,s):(o[l]=Mt(a),o[l].c(),o[l].m(e,null))}for(;l<o.length;l+=1)o[l].d(1);o.length=n.length}},d(t){t&&f(e),p(o,t)}}}function xt(t){let e,n,o,s,l,a,c,i=W(t[4][t[4].length-1])+"",r=null!=t[3]&&t[1]>0&&_t(t);return{c(){e=g("p"),n=h("ваше время: "),o=g("span"),s=h(i),l=$(),r&&r.c(),a=$(),c=g("p"),c.innerHTML='Создал игру <a href="https://github.com/Gariell">https://github.com/Gariell</a>',y(o,"class","time svelte-1qi6zhb")},m(t,i){m(t,e,i),d(e,n),d(e,o),d(o,s),m(t,l,i),r&&r.m(t,i),m(t,a,i),m(t,c,i)},p(t,e){16&e&&i!==(i=W(t[4][t[4].length-1])+"")&&k(s,i),null!=t[3]&&t[1]>0?r?r.p(t,e):(r=_t(t),r.c(),r.m(a.parentNode,a)):r&&(r.d(1),r=null)},d(t){t&&f(e),t&&f(l),r&&r.d(t),t&&f(a),t&&f(c)}}}function Mt(t){let e,n,o,s,l,a,c=t[12]+"";function i(){return t[7](t[12])}return{c(){e=g("button"),n=g("span"),o=h(c),s=h(" cards"),y(e,"class","gamemods-item svelte-1qi6zhb")},m(t,c){m(t,e,c),d(e,n),d(n,o),d(n,s),l||(a=b(e,"click",i),l=!0)},p(e,n){t=e,1&n&&c!==(c=t[12]+"")&&k(o,c)},d(t){t&&f(e),l=!1,a()}}}function _t(t){let e,n,o,s,l=W(t[3])+"";return{c(){e=g("p"),n=h("лучшее ваше время: "),o=g("span"),s=h(l),y(o,"class","time svelte-1qi6zhb")},m(t,l){m(t,e,l),d(e,n),d(e,o),d(o,s)},p(t,e){8&e&&l!==(l=W(t[3])+"")&&k(s,l)},d(t){t&&f(e)}}}function St(t){let e,n,s,l,a,c,i,r,u;return{c(){e=g("div"),n=g("button"),s=h('повторить игру "'),l=h(t[1]),a=h(' карт"'),c=$(),i=g("button"),i.textContent="выбрать другой режим",y(n,"class","modal-bottom__btn svelte-1qi6zhb"),y(i,"class","modal-bottom__btn svelte-1qi6zhb"),y(e,"class","modal-bottom svelte-1qi6zhb")},m(o,f){m(o,e,f),d(e,n),d(n,s),d(n,l),d(n,a),d(e,c),d(e,i),r||(u=[b(n,"click",t[8]),b(i,"click",t[9])],r=!0)},p(t,e){2&e&&k(l,t[1])},d(t){t&&f(e),r=!1,o(u)}}}function wt(e){let n,o="close"!=e[0].action&&""!=e[0].action&&null!=e[0].action&&ht(e);return{c(){o&&o.c(),n=v()},m(t,e){o&&o.m(t,e),m(t,n,e)},p(t,[e]){"close"!=t[0].action&&""!=t[0].action&&null!=t[0].action?o?o.p(t,e):(o=ht(t),o.c(),o.m(n.parentNode,n)):o&&(o.d(1),o=null)},i:t,o:t,d(t){o&&o.d(t),t&&f(n)}}}function Lt(t,e,n){let{params:o}=e,{gameMode:s=0}=e;function l(t){n(1,s=0),n(1,s=t)}let a=U("bestLoopLS",0),c=r(a)[s],i=[];function u(t){n(0,o.action=t,o)}return t.$$set=t=>{"params"in t&&n(0,o=t.params),"gameMode"in t&&n(1,s=t.gameMode)},t.$$.update=()=>{1&t.$$.dirty&&o&&function(t){if(null!=t.time){let e=Z(s,t.gameMods);n(4,i=t.time[e].loops)}n(3,c=r(a)[s])}(o)},[o,s,l,c,i,u,()=>u("close"),t=>l(t),()=>l(s),()=>u("gameModeSelection")]}class Gt extends K{constructor(t){super(),D(this,t,Lt,wt,l,{params:0,gameMode:1,editGameMode:2})}get editGameMode(){return this.$$.ctx[2]}}function zt(t,e,n){const o=t.slice();return o[25]=e[n],o[27]=n,o}function qt(t){let e,n,o;function s(e){t[11](e)}let l={open:t[25].open,status:t[25].status,name:t[25].name,id:t[25].id,number:t[27]+1,statusGame:t[5]};return void 0!==t[3]&&(l.cardActive=t[3]),e=new lt({props:l}),w.push((()=>J(e,"cardActive",s))),{c(){V(e.$$.fragment)},m(t,n){F(e,t,n),o=!0},p(t,o){const s={};16&o&&(s.open=t[25].open),16&o&&(s.status=t[25].status),16&o&&(s.name=t[25].name),16&o&&(s.id=t[25].id),32&o&&(s.statusGame=t[5]),!n&&8&o&&(n=!0,s.cardActive=t[3],j((()=>n=!1))),e.$set(s)},i(t){o||(B(e.$$.fragment,t),o=!0)},o(t){H(e.$$.fragment,t),o=!1},d(t){P(e,t)}}}function Et(t){let e,n,o;return{c(){e=g("div"),n=h(t[2]),o=h(" carts"),y(e,"class","game-mode svelte-126x5fy")},m(t,s){m(t,e,s),d(e,n),d(e,o)},p(t,e){4&e&&k(n,t[2])},d(t){t&&f(e)}}}function jt(t){let e,n,s,l,a,c,i,r,u,v,x,M,_,S,L,G,z,q,E,T,A=t[4],C=[];for(let e=0;e<A.length;e+=1)C[e]=qt(zt(t,A,e));const N=t=>H(C[t],1,1,(()=>{C[t]=null}));u=new it({}),u.$on("message",t[7]);let O=t[2]>0&&Et(t);function X(e){t[13](e)}M=new pt({props:{statusGame:t[5],gameMode:t[2],cardLimit:t[1]}});let D={params:t[6]};return void 0!==t[2]&&(D.gameMode=t[2]),G=new Gt({props:D}),w.push((()=>J(G,"gameMode",X))),{c(){e=g("main"),n=g("div");for(let t=0;t<C.length;t+=1)C[t].c();s=$(),l=g("div"),a=g("div"),c=g("h1"),i=h(t[0]),r=$(),V(u.$$.fragment),v=$(),O&&O.c(),x=$(),V(M.$$.fragment),_=$(),S=g("button"),S.innerHTML="<span>выбрать режим</span><span>⌘</span>",L=$(),V(G.$$.fragment),y(n,"class","cards svelte-126x5fy"),y(c,"class","svelte-126x5fy"),y(a,"class","controls-head svelte-126x5fy"),y(S,"class","select-mode svelte-126x5fy"),y(l,"class","control svelte-126x5fy"),y(e,"class","svelte-126x5fy")},m(o,f){m(o,e,f),d(e,n);for(let t=0;t<C.length;t+=1)C[t].m(n,null);d(e,s),d(e,l),d(l,a),d(a,c),d(c,i),d(a,r),F(u,a,null),d(l,v),O&&O.m(l,null),d(l,x),F(M,l,null),d(l,_),d(l,S),m(o,L,f),F(G,o,f),q=!0,E||(T=b(S,"click",t[12]),E=!0)},p(t,[e]){if(56&e){let s;for(A=t[4],s=0;s<A.length;s+=1){const o=zt(t,A,s);C[s]?(C[s].p(o,e),B(C[s],1)):(C[s]=qt(o),C[s].c(),B(C[s],1),C[s].m(n,null))}for(I={r:0,c:[],p:I},s=A.length;s<C.length;s+=1)N(s);I.r||o(I.c),I=I.p}(!q||1&e)&&k(i,t[0]),t[2]>0?O?O.p(t,e):(O=Et(t),O.c(),O.m(l,x)):O&&(O.d(1),O=null);const s={};32&e&&(s.statusGame=t[5]),4&e&&(s.gameMode=t[2]),2&e&&(s.cardLimit=t[1]),M.$set(s);const a={};64&e&&(a.params=t[6]),!z&&4&e&&(z=!0,a.gameMode=t[2],j((()=>z=!1))),G.$set(a)},i(t){if(!q){for(let t=0;t<A.length;t+=1)B(C[t]);B(u.$$.fragment,t),B(M.$$.fragment,t),B(G.$$.fragment,t),q=!0}},o(t){C=C.filter(Boolean);for(let t=0;t<C.length;t+=1)H(C[t]);H(u.$$.fragment,t),H(M.$$.fragment,t),H(G.$$.fragment,t),q=!1},d(t){t&&f(e),p(C,t),P(u),O&&O.d(),P(M),t&&f(L),P(G,t),E=!1,T()}}}let Tt=500;function At(t,e,n){let o,s,{name:l,cardLimit:a}=e,c=U("loopsLS",[]),i=["bagz-banni","di-kaprio","fff","gajduljan","gigachad","hirosi","ilon","joker","kit","kit2","kot-sidit","laska","loaded","loki","nelzya","nosorog","pica","privet-piter","problemy","rasseivajushchijsja-kot","redkliff","satana","shak","skeletor","sobaka-ispugannaja","th","tolstyy-tor","u-suka","ugvey","uill-smit","unichtozhu","vazovski","yoda","nu-davay-rasskazhi","babochka","karlik","kit-3","or","sad_fox","edvard-norton","nikolson","yeah-boy","kit-5","aww","tom-2","doge-bear","billi","blya","pablo-eskobar","skwid","momo","papich","kit-4","serious_cat","tom","eskobar","nqjlh1gk5e0"],u=U("gameModeLS"),d=r(u),m=new Array,f=[],p=[],g={};function h(t){let e=t[0],o=t[1];e.id==o.id?($(e.number,"active_open"),$(o.number,"active_open"),n(9,p=[]),setTimeout((()=>{let t=[];m.forEach((e=>{!0===e.open&&t.push(e)})),t.length==m.length&&(y("end"),k("endGame"))}),Tt)):($(e.number,"close"),$(o.number,"close"),n(9,p=[]))}function $(t,e){"active"==e?n(4,m[t-1].status="active",m):"active_open"==e?(n(4,m[t-1].status="active",m),setTimeout((()=>{n(4,m[t-1].open=!0,m)}),Tt)):"close"==e&&setTimeout((()=>{n(4,m[t-1].status="close",m)}),500)}function v(){var t,e;null!=d||""!=d?(t=Y(i),e=d,n(4,m=[]),n(3,f=[]),t.length=Math.floor(e/2),t.forEach(((e,o)=>{n(4,m[2*(o+1)-1]={id:o+"id",name:t[o],status:"close",open:!1},m),n(4,m[2*o]={id:o+"id",name:t[o],status:"close",open:!1},m)})),n(4,m=Y(m)),setTimeout((()=>b()),1500)):k("error")}function b(){y("launched");for(let t=0;t<m.length;t++)$(t+1,"active"),setTimeout((()=>{y("preStart"),$(t+1,"close")}),2e3)}function y(t){n(5,s=t)}function k(t){"endGame"==t?setTimeout((()=>{n(6,g={action:t,time:r(c),gameMods:a})}),Tt):n(6,g="gameModeSelection"==t?{action:t,gameMods:a}:"close"==t?{action:"close"}:{action:"error"})}0===d||null!=d||k("gameModeSelection"),b();return t.$$set=t=>{"name"in t&&n(0,l=t.name),"cardLimit"in t&&n(1,a=t.cardLimit)},t.$$.update=()=>{520&t.$$.dirty&&n(10,o=function(){let t=p;f.length!=[]&&(0==t.length?(y("start"),t[0]={name:f[0],id:f[1],number:f[2]},$(t[0].number,"active")):1==t.length&&f[2]!=t[0].number&&(t[1]={name:f[0],id:f[1],number:f[2]},$(t[1].number,"active"),h(t)))}),4&t.$$.dirty&&d&&(u.set(d),v(),setTimeout((()=>{k("close")}),500)),1024&t.$$.dirty&&o()},[l,a,d,f,m,s,g,v,k,p,o,function(t){f=t,n(3,f)},()=>k("gameModeSelection"),function(t){d=t,n(2,d)}]}return new class extends K{constructor(t){super(),D(this,t,At,jt,l,{name:0,cardLimit:1})}}({target:document.body,props:{name:"Memory game",cardLimit:[12,18,24,30]}})}();
//# sourceMappingURL=bundle.js.map
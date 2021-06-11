(this["webpackJsonphooks-snake-game"]=this["webpackJsonphooks-snake-game"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),i=n(7),o=n.n(i),a=(n(13),n(8)),s=n(5),u=n(2),d=n(0),l=function(){return Object(d.jsx)("p",{children:"navigation"})},f=function(e){var t=e.fields;return Object(d.jsx)("div",{className:"field",children:t.map((function(e,t){return e.map((function(e,n){return Object(d.jsx)("div",{className:"dots ".concat(e)},"row=".concat(t,"col=").concat(n))}))}))})},j=function(e,t){for(var n=function(){var n=Math.floor(Math.random()*(e-1-1))+1,r=Math.floor(Math.random()*(e-1-1))+1;if(!t.some((function(e){return e.x===n&&e.y===r})))return{v:{x:n,y:r}}};;){var r=n();if("object"===typeof r)return r.v}},b=function(e,t){for(var n=[],r=0;r<e;r++){var c=new Array(e).fill("");n.push(c)}n[t.y][t.x]="snake";var i=j(e,[t]);return n[i.y][i.x]="food",n},h=(b(35,{x:17,y:17}),Object.freeze({init:"init",playing:"playing",suspended:"suspended",gameover:"gameover"})),x=Object.freeze({up:"up",right:"right",left:"left",down:"down"}),O=Object.freeze({37:x.left,38:x.up,39:x.right,40:x.down}),v=Object.freeze({up:"down",right:"left",left:"right",down:"up"}),y=Object.freeze({up:{x:0,y:-1},right:{x:1,y:0},left:{x:-1,y:0},down:{x:0,y:1}}),p=function(e){var t=e.status,n=e.onStart,r=e.onRestart;return Object(d.jsx)("div",{className:"button",children:t===h.gameover?Object(d.jsx)("button",{onClick:r,children:"gameover"}):Object(d.jsx)("button",{onClick:n,children:"start"})})},g=function(e){var t=e.onChange;return Object(d.jsxs)("div",{className:"manipulation-panel",children:[Object(d.jsx)("button",{onClick:function(){return t(x.left)},children:"\u2190"}),Object(d.jsx)("button",{onClick:function(){return t(x.up)},children:"\u2191"}),Object(d.jsx)("button",{onClick:function(){return t(x.down)},children:"\u2193"}),Object(d.jsx)("button",{onClick:function(){return t(x.right)},children:"\u2192"})]})},m={x:17,y:17},k=b(35,m),w=void 0,C=function(){w&&(console.log("unsubscribe"),clearInterval(w))},N=function(e,t){var n=e.body,r=e.fields,c=e.status,i=e.direction;switch(t.type){case"move":if(c!==h.playing)return e;var o=n[0],a=o.x,d=o.y,l=y[i],f={x:a+l.x,y:d+l.y};if(function(e,t){return t.y<0||t.x<0||t.y>e-1||t.x>e-1}(r.length,f)||"snake"===r[f.y][f.x])return Object(u.a)(Object(u.a)({},e),{},{status:h.gameover});var O=Object(s.a)(n),p=Object(s.a)(r);if("food"!==p[f.y][f.x]){var g=O.pop();p[g.y][g.x]=""}else{var k=j(r.length,[].concat(Object(s.a)(O),[f]));p[k.y][k.x]="food"}return p[f.y][f.x]="snake",O.unshift(f),Object(u.a)(Object(u.a)({},e),{},{body:O,fields:p});case"changeDirection":return c!==h.playing||v[i]===t.direction?e:Object(u.a)(Object(u.a)({},e),{},{direction:t.direction});case"start":return Object(u.a)(Object(u.a)({},e),{},{status:h.playing});case"reset":return{body:[m],fields:b(35,m),status:h.init,direction:x.up};default:throw new Error}};var E=function(){var e=Object(r.useReducer)(N,{body:[m],fields:k,status:h.init,direction:x.up}),t=Object(a.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)((function(){return w=setInterval((function(){c({type:"move"})}),100),C}),[]),Object(r.useEffect)((function(){var e=function(e){var t=O[e.keyCode];t&&c({type:"changeDirection",direction:t})};return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}}),[]),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("div",{className:"title-container",children:Object(d.jsx)("h1",{className:"title",children:"Snake Game"})}),Object(d.jsx)(l,{})]}),Object(d.jsx)("main",{className:"main",children:Object(d.jsx)(f,{fields:n.fields})}),Object(d.jsxs)("footer",{className:"footer",children:[Object(d.jsx)(p,{status:n.status,onStart:function(){return c({type:"start"})},onRestart:function(){return c({type:"reset"})}}),Object(d.jsx)(g,{onChange:function(e){return c({type:"changeDirection",direction:e})}})]})]})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),i(e),o(e)}))};o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(E,{})}),document.getElementById("root")),z()}},[[15,1,2]]]);
//# sourceMappingURL=main.00ea7889.chunk.js.map
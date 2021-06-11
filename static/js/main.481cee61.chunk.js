(this["webpackJsonphooks-snake-game"]=this["webpackJsonphooks-snake-game"]||[]).push([[0],{18:function(t,e,n){},25:function(t,e,n){"use strict";n.r(e);var i=n(2),c=n.n(i),a=n(12),r=n.n(a),s=(n(18),function(t,e){for(var n=function(){var n=Math.floor(Math.random()*(t-1-1))+1,i=Math.floor(Math.random()*(t-1-1))+1;if(!e.some((function(t){return t.x===n&&t.y===i})))return{v:{x:n,y:i}}};;){var i=n();if("object"===typeof i)return i.v}}),o=function(t,e){for(var n=[],i=0;i<t;i++){var c=new Array(t).fill("");n.push(c)}n[e.y][e.x]="snake";var a=s(t,[e]);return n[a.y][a.x]="food",n},u={x:17,y:17},l=o(35,u),d=[1e3,500,100,50,10],f=Object.freeze({init:"init",playing:"playing",suspended:"suspended",gameover:"gameover"}),b=Object.freeze({up:"up",right:"right",left:"left",down:"down"}),j=Object.freeze({37:b.left,38:b.up,39:b.right,40:b.down}),h=Object.freeze({up:"down",right:"left",left:"right",down:"up"}),y=Object.freeze({up:{x:0,y:-1},right:{x:1,y:0},left:{x:-1,y:0},down:{x:0,y:1}}),O=n(0),m=function(t){var e=t.length,n=t.difficulty,i=t.onChangeDifficulty,c=n<d.length?"":"is-hidden",a=n>1?"":"is-hidden";return Object(O.jsxs)("div",{className:"navigation",children:[Object(O.jsxs)("div",{className:"navigation-item",children:[Object(O.jsx)("span",{className:"navigation-label",children:"Length: "}),Object(O.jsx)("div",{className:"navigation-item-number-container",children:Object(O.jsx)("div",{className:"num-board",children:e})})]}),Object(O.jsxs)("div",{className:"navigation-item",children:[Object(O.jsx)("span",{className:"navigation-label",children:"Difficulty: "}),Object(O.jsxs)("div",{className:"navigation-item-number-container",children:[Object(O.jsx)("span",{className:"num-board",children:n}),Object(O.jsxs)("div",{className:"difficulty-button-container",children:[Object(O.jsx)("div",{className:"difficulty-button difficulty-up ".concat(c),onClick:function(){return i(n+1)}}),Object(O.jsx)("div",{className:"difficulty-button difficulty-down ".concat(a),onClick:function(){return i(n-1)}})]})]})]})]})},p=function(t){var e=t.fields;return Object(O.jsx)("div",{className:"field",children:e.map((function(t,e){return t.map((function(t,n){return Object(O.jsx)("div",{className:"dots ".concat(t)},"row=".concat(e,"col=").concat(n))}))}))})},v=function(t){var e=t.status,n=t.onStart,i=t.onStop,c=t.onRestart;return Object(O.jsxs)("div",{className:"button",children:[e===f.gameover&&Object(O.jsx)("button",{className:"btn btn-gameover",onClick:c,children:"gameover"}),e===f.init&&Object(O.jsx)("button",{className:"btn btn-init",onClick:n,children:"start"}),e===f.suspended&&Object(O.jsx)("button",{className:"btn btn-suspended",onClick:n,children:"start"}),e===f.playing&&Object(O.jsx)("button",{className:"btn btn-playing",onClick:i,children:"stop"})]})},x=n(5),g=n(7),N=function(t){var e=t.onChange;return Object(O.jsxs)("div",{className:"manipulation-panel",children:[Object(O.jsx)("button",{className:"manipulation-btn btn btn-left",onClick:function(){return e(b.left)},children:Object(O.jsx)(x.a,{icon:g.b})}),Object(O.jsxs)("div",{children:[Object(O.jsx)("button",{className:"manipulation-btn btn btn-up",onClick:function(){return e(b.up)},children:Object(O.jsx)(x.a,{icon:g.d})}),Object(O.jsx)("button",{className:"manipulation-btn btn btn-down",onClick:function(){return e(b.down)},children:Object(O.jsx)(x.a,{icon:g.a})})]}),Object(O.jsx)("button",{className:"manipulation-btn btn btn-right",onClick:function(){return e(b.right)},children:Object(O.jsx)(x.a,{icon:g.c})})]})},k=n(13),w=n(9),C=n(3),D=void 0,S=function(){D&&clearInterval(D)},E=function(t,e){var n=t.body,i=t.fields,c=t.status,a=t.direction;switch(e.type){case"move":if(c!==f.playing)return t;var r=n[0],l=r.x,j=r.y,O=y[a],m={x:l+O.x,y:j+O.y};if(function(t,e){return e.y<0||e.x<0||e.y>t-1||e.x>t-1}(i.length,m)||function(t,e){return"snake"===t[e.y][e.x]}(i,m))return Object(C.a)(Object(C.a)({},t),{},{status:f.gameover});var p=Object(w.a)(n),v=Object(w.a)(i);if("food"!==v[m.y][m.x]){var x=p.pop();v[x.y][x.x]=""}else{var g=s(i.length,[].concat(Object(w.a)(p),[m]));v[g.y][g.x]="food"}return v[m.y][m.x]="snake",p.unshift(m),Object(C.a)(Object(C.a)({},t),{},{body:p,fields:v});case"changeDirection":return c!==f.playing||h[a]===e.direction?t:Object(C.a)(Object(C.a)({},t),{},{direction:e.direction});case"start":return Object(C.a)(Object(C.a)({},t),{},{status:f.playing});case"stop":return Object(C.a)(Object(C.a)({},t),{},{status:f.suspended});case"reset":return Object(C.a)(Object(C.a)({},t),{},{body:[u],fields:o(35,u),status:f.init,direction:b.up});case"changeDifficulty":return c!==f.init||(e.difficulty<1||e.difficulty>d.length)?t:Object(C.a)(Object(C.a)({},t),{},{difficulty:e.difficulty});default:throw new Error}},z=function(){var t=Object(i.useReducer)(E,{body:[u],fields:l,status:f.init,direction:b.up,difficulty:3}),e=Object(k.a)(t,2),n=e[0],c=e[1];Object(i.useEffect)((function(){var t=d[n.difficulty-1];return D=setInterval((function(){c({type:"move"})}),t),S}),[n.difficulty]),Object(i.useEffect)((function(){var t=function(t){var e=j[t.keyCode];e&&c({type:"changeDirection",direction:e})};return document.addEventListener("keydown",t),function(){return document.removeEventListener("keydown",t)}}),[]);return{body:n.body,difficulty:n.difficulty,fields:n.fields,status:n.status,start:function(){return c({type:"start"})},stop:function(){return c({type:"stop"})},reload:function(){return c({type:"reset"})},updateDirection:function(t){return c({type:"changeDirection",direction:t})},updateDifficulty:function(t){return c({type:"changeDifficulty",difficulty:t})}}};var L=function(){var t=z(),e=t.body,n=t.difficulty,i=t.fields,c=t.start,a=t.stop,r=t.reload,s=t.status,o=t.updateDirection,u=t.updateDifficulty;return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsxs)("header",{className:"header",children:[Object(O.jsx)("div",{className:"title-container",children:Object(O.jsx)("h1",{className:"title",children:"Snake Game"})}),Object(O.jsx)(m,{length:e.length,difficulty:n,onChangeDifficulty:u})]}),Object(O.jsx)("main",{className:"main",children:Object(O.jsx)(p,{fields:i})}),Object(O.jsxs)("footer",{className:"footer",children:[Object(O.jsx)(v,{status:s,onStart:c,onStop:a,onRestart:r}),Object(O.jsx)(N,{onChange:o})]})]})},M=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(e){var n=e.getCLS,i=e.getFID,c=e.getFCP,a=e.getLCP,r=e.getTTFB;n(t),i(t),c(t),a(t),r(t)}))};r.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(L,{})}),document.getElementById("root")),M()}},[[25,1,2]]]);
//# sourceMappingURL=main.481cee61.chunk.js.map
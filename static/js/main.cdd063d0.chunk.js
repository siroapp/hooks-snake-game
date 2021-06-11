(this["webpackJsonphooks-snake-game"]=this["webpackJsonphooks-snake-game"]||[]).push([[0],{18:function(t,e,n){},25:function(t,e,n){"use strict";n.r(e);var i=n(3),c=n.n(i),a=n(12),r=n.n(a),s=(n(18),n(13)),o=n(9),u=n(2),l=n(0),d=function(t){var e=t.length,n=t.difficulty,i=t.onChangeDifficulty,c=n<5?"":"is-hidden",a=n>1?"":"is-hidden";return Object(l.jsxs)("div",{className:"navigation",children:[Object(l.jsxs)("div",{className:"navigation-item",children:[Object(l.jsx)("span",{className:"navigation-label",children:"Length: "}),Object(l.jsx)("div",{className:"navigation-item-number-container",children:Object(l.jsx)("div",{className:"num-board",children:e})})]}),Object(l.jsxs)("div",{className:"navigation-item",children:[Object(l.jsx)("span",{className:"navigation-label",children:"Difficulty: "}),Object(l.jsxs)("div",{className:"navigation-item-number-container",children:[Object(l.jsx)("span",{className:"num-board",children:n}),Object(l.jsxs)("div",{className:"difficulty-button-container",children:[Object(l.jsx)("div",{className:"difficulty-button difficulty-up ".concat(c),onClick:function(){return i(n+1)}}),Object(l.jsx)("div",{className:"difficulty-button difficulty-down ".concat(a),onClick:function(){return i(n-1)}})]})]})]})]})},f=function(t){var e=t.fields;return Object(l.jsx)("div",{className:"field",children:e.map((function(t,e){return t.map((function(t,n){return Object(l.jsx)("div",{className:"dots ".concat(t)},"row=".concat(e,"col=").concat(n))}))}))})},b=function(t,e){for(var n=function(){var n=Math.floor(Math.random()*(t-1-1))+1,i=Math.floor(Math.random()*(t-1-1))+1;if(!e.some((function(t){return t.x===n&&t.y===i})))return{v:{x:n,y:i}}};;){var i=n();if("object"===typeof i)return i.v}},j=function(t,e){for(var n=[],i=0;i<t;i++){var c=new Array(t).fill("");n.push(c)}n[e.y][e.x]="snake";var a=b(t,[e]);return n[a.y][a.x]="food",n},h={x:17,y:17},O=j(35,h),m=[1e3,500,100,50,10],y=Object.freeze({init:"init",playing:"playing",suspended:"suspended",gameover:"gameover"}),v=Object.freeze({up:"up",right:"right",left:"left",down:"down"}),x=Object.freeze({37:v.left,38:v.up,39:v.right,40:v.down}),p=Object.freeze({up:"down",right:"left",left:"right",down:"up"}),g=Object.freeze({up:{x:0,y:-1},right:{x:1,y:0},left:{x:-1,y:0},down:{x:0,y:1}}),N=function(t){var e=t.status,n=t.onStart,i=t.onStop,c=t.onRestart;return Object(l.jsxs)("div",{className:"button",children:[e===y.gameover&&Object(l.jsx)("button",{className:"btn btn-gameover",onClick:c,children:"gameover"}),e===y.init&&Object(l.jsx)("button",{className:"btn btn-init",onClick:n,children:"start"}),e===y.suspended&&Object(l.jsx)("button",{className:"btn btn-suspended",onClick:n,children:"start"}),e===y.playing&&Object(l.jsx)("button",{className:"btn btn-playing",onClick:i,children:"stop"})]})},k=n(5),w=n(7),C=function(t){var e=t.onChange;return Object(l.jsxs)("div",{className:"manipulation-panel",children:[Object(l.jsx)("button",{className:"manipulation-btn btn btn-left",onClick:function(){return e(v.left)},children:Object(l.jsx)(k.a,{icon:w.b})}),Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{className:"manipulation-btn btn btn-up",onClick:function(){return e(v.up)},children:Object(l.jsx)(k.a,{icon:w.d})}),Object(l.jsx)("button",{className:"manipulation-btn btn btn-down",onClick:function(){return e(v.down)},children:Object(l.jsx)(k.a,{icon:w.a})})]}),Object(l.jsx)("button",{className:"manipulation-btn btn btn-right",onClick:function(){return e(v.right)},children:Object(l.jsx)(k.a,{icon:w.c})})]})},D=void 0,S=function(){D&&(console.log("unsubscribe"),clearInterval(D))},E=function(t,e){var n=t.body,i=t.fields,c=t.status,a=t.direction;switch(e.type){case"move":if(c!==y.playing)return t;var r=n[0],s=r.x,l=r.y,d=g[a],f={x:s+d.x,y:l+d.y};if(function(t,e){return e.y<0||e.x<0||e.y>t-1||e.x>t-1}(i.length,f)||function(t,e){return"snake"===t[e.y][e.x]}(i,f))return Object(u.a)(Object(u.a)({},t),{},{status:y.gameover});var O=Object(o.a)(n),x=Object(o.a)(i);if("food"!==x[f.y][f.x]){var N=O.pop();x[N.y][N.x]=""}else{var k=b(i.length,[].concat(Object(o.a)(O),[f]));x[k.y][k.x]="food"}return x[f.y][f.x]="snake",O.unshift(f),Object(u.a)(Object(u.a)({},t),{},{body:O,fields:x});case"changeDirection":return c!==y.playing||p[a]===e.direction?t:Object(u.a)(Object(u.a)({},t),{},{direction:e.direction});case"start":return Object(u.a)(Object(u.a)({},t),{},{status:y.playing});case"stop":return Object(u.a)(Object(u.a)({},t),{},{status:y.suspended});case"reset":return Object(u.a)(Object(u.a)({},t),{},{body:[h],fields:j(35,h),status:y.init,direction:v.up});case"changeDifficulty":return c!==y.init||(e.difficulty<1||e.difficulty>m.length)?t:Object(u.a)(Object(u.a)({},t),{},{difficulty:e.difficulty});default:throw new Error}};var z=function(){var t=Object(i.useReducer)(E,{body:[h],fields:O,status:y.init,direction:v.up,difficulty:3}),e=Object(s.a)(t,2),n=e[0],c=e[1];return Object(i.useEffect)((function(){var t=m[n.difficulty-1];return D=setInterval((function(){c({type:"move"})}),t),S}),[n.difficulty]),Object(i.useEffect)((function(){var t=function(t){var e=x[t.keyCode];e&&c({type:"changeDirection",direction:e})};return document.addEventListener("keydown",t),function(){return document.removeEventListener("keydown",t)}}),[]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("header",{className:"header",children:[Object(l.jsx)("div",{className:"title-container",children:Object(l.jsx)("h1",{className:"title",children:"Snake Game"})}),Object(l.jsx)(d,{length:n.body.length,difficulty:n.difficulty,onChangeDifficulty:function(t){return c({type:"changeDifficulty",difficulty:t})}})]}),Object(l.jsx)("main",{className:"main",children:Object(l.jsx)(f,{fields:n.fields})}),Object(l.jsxs)("footer",{className:"footer",children:[Object(l.jsx)(N,{status:n.status,onStart:function(){return c({type:"start"})},onStop:function(){return c({type:"stop"})},onRestart:function(){return c({type:"reset"})}}),Object(l.jsx)(C,{onChange:function(t){return c({type:"changeDirection",direction:t})}})]})]})},L=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(e){var n=e.getCLS,i=e.getFID,c=e.getFCP,a=e.getLCP,r=e.getTTFB;n(t),i(t),c(t),a(t),r(t)}))};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(z,{})}),document.getElementById("root")),L()}},[[25,1,2]]]);
//# sourceMappingURL=main.cdd063d0.chunk.js.map
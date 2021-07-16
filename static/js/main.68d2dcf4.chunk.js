(this["webpackJsonpdsos-mining-helper"]=this["webpackJsonpdsos-mining-helper"]||[]).push([[0],{43:function(e,n,t){},49:function(e,n,t){"use strict";t.r(n);var r,c,a,i,o=t(0),u=t.n(o),d=t(11),l=t.n(d),s=(t(43),t(10)),b=t(22),j=t(26),p=t(14),f=t(15),h=function(e){(function(e){return"touches"in e})(e)&&e.touches.length<2&&e.preventDefault&&e.preventDefault()},g=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.shouldPreventDefault,c=void 0===r||r,a=t.delay,i=void 0===a?200:a,u=Object(o.useState)(!1),d=Object(b.a)(u,2),l=d[0],s=d[1],j=Object(o.useRef)(),p=Object(o.useRef)(),f=Object(o.useCallback)((function(n){c&&n.target&&(n.target.addEventListener("touchend",h,{passive:!1}),p.current=n.target),j.current=setTimeout((function(){e(n),s(!0)}),i)}),[e,i,c]),g=Object(o.useCallback)((function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];j.current&&clearTimeout(j.current),t&&!l&&n(),s(!1),c&&p.current&&p.current.removeEventListener("touchend",h)}),[c,n,l]);return{onMouseDown:function(e){return f(e)},onTouchStart:function(e){return f(e)},onMouseUp:function(e){return g(e)},onMouseLeave:function(e){return g(e,!1)},onTouchEnd:function(e){return g(e)}}},O=t(4),v=f.a.div(r||(r=Object(p.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    background-color: #ffeedb;\n    font-weight: bold;\n    font-size: 1.5em;\n\n    &.resource {\n        background-color: #ed9b40;\n    }\n\n    &.gem {\n        background-color: #61c9a8;\n    }\n\n    &.ladder {\n        background-color: #ba3b46;\n        color: white;\n    }\n\n    &.previous {\n        background-color: lightgray;\n    }\n"]))),m=function(e){var n=e.resource,t=e.putResource,r=e.putLadder,c=g(r,t);return Object(O.jsx)(v,Object(j.a)(Object(j.a)({},c),{},{className:n,children:"none"!==n&&n[0].toUpperCase()}))},x=f.a.div(c||(c=Object(p.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    @media (max-width: 400px) {\n        flex-direction: column;\n        & > *:not(:first-child) {\n            margin-top: 8px;\n        }\n    }\n"]))),w=f.a.div(a||(a=Object(p.a)(["\n    display: grid;\n    grid-template-rows: min-content 1fr;\n    grid-gap: 16px;\n    padding: 16px;\n    height: calc(100vh - 32px);\n"]))),k=f.a.div(i||(i=Object(p.a)(["\n    display: grid;\n    grid-template-columns: repeat(7, 1fr);\n    grid-template-rows: repeat(7, 1fr);\n    grid-gap: 16px;\n\n    @media (max-width: 600px) and (orientation:portrait), @media (max-width: 1000px) and (orientation:landscape) {\n        grid-gap: 4px;\n    }\n\n    height: calc(100vw - 32px);\n    @media (orientation:landscape) {\n        height: auto;\n    }\n"]))),y=t(68),C=t(50),L=t(69),R=t(70),S=function(){var e=Array.from({length:49},(function(e,n){return"none"})),n=Object(o.useState)(e),t=Object(b.a)(n,2),r=t[0],c=t[1],a=Object(o.useState)([]),i=Object(b.a)(a,2),u=i[0],d=i[1];return Object(O.jsxs)(w,{children:[Object(O.jsx)(x,{children:Object(O.jsxs)(y.a,{variant:"outlined",color:"primary",children:[Object(O.jsx)(C.a,{onClick:function(){var e=u.slice(-1)[0],n=e.id,t=e.oldValue;c((function(e){return[].concat(Object(s.a)(e.slice(0,n)),[t],Object(s.a)(e.slice(n+1,e.length)))})),d(u.slice(0,-1))},disabled:0===u.length,children:Object(O.jsx)(L.a,{})}),Object(O.jsx)(C.a,{onClick:function(){c(e),d([])},children:Object(O.jsx)("b",{children:"Reset"})}),Object(O.jsx)(C.a,{onClick:function(){c((function(e){return Object(s.a)(e.map((function(e){return"ladder"===e?"previous":"none"})))})),d([])},disabled:!r.find((function(e){return"ladder"===e})),children:Object(O.jsx)(R.a,{})})]})}),Object(O.jsx)(k,{children:r.map((function(e,n){return Object(O.jsx)(m,{resource:e,putResource:function(){return"previous"!==e&&(t=n,void c((function(e){var n="none";return"none"!==e[t]&&"ladder"!==e[t]||(n="resource"),"resource"===e[t]&&(n="gem"),d(u.concat({id:t,oldValue:e[t],newValue:n})),[].concat(Object(s.a)(e.slice(0,t)),[n],Object(s.a)(e.slice(t+1,e.length)))})));var t},putLadder:function(){return e=n,void c((function(n){return d(u.concat({id:e,oldValue:n[e],newValue:"ladder"})),[].concat(Object(s.a)(n.slice(0,e)),["ladder"],Object(s.a)(n.slice(e+1,n.length)))}));var e}},n)}))})]})};l.a.render(Object(O.jsx)(u.a.StrictMode,{children:Object(O.jsx)(S,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.68d2dcf4.chunk.js.map
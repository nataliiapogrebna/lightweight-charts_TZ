(this["webpackJsonptrading-bin"]=this["webpackJsonptrading-bin"]||[]).push([[0],{46:function(e,t,o){},76:function(e,t,o){},84:function(e,t,o){"use strict";o.r(t);var n=o(2),r=o(0),c=o.n(r),a=o(23),i=o.n(a),l=(o(76),o(51)),s=o(9),f=o(123),u=o(58),b=o.n(u),d=o(59),j=o.n(d),h=o(60),p=o.n(h),m=o(125),g=o(124),x=o(61),O=o.n(x),C=o(117),v=o(122),k=o(126),w=o(118),F=o(121),S=o(120),N=o(35),y=(o(46),function(){var e=new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@kline_10m"),t=c.a.useRef(null),o={width:0,height:0,timeScale:{timeVisible:!0,secondsVisible:!1,borderColor:"#262626"},layout:{backgroundColor:"#262626",textColor:" #9ACCFF"},grid:{vertLines:{color:"#262626"},horzLines:{color:"#262626"}},priceScale:{borderColor:"#262626"},rightPriceScale:{borderColor:"rgba(197, 203, 206, 0.8)"},priceFormat:{type:"custom",minMove:.25,formatter:function(e){return parseFloat(e).toFixed(8)}}};return c.a.useEffect((function(){t.current&&function(e,t){var o=e.addCandlestickSeries({upColor:"#74C2E3",downColor:"#FF0000",wickDownColor:"595959",wickUpColor:"#595959"});fetch("https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m&limit=1000").then((function(e){return e.json()})).then((function(e){console.log(e);var t=e.map((function(e){return{time:e[0]/1e3,open:parseFloat(e[1]),high:parseFloat(e[2]),low:parseFloat(e[3]),close:parseFloat(e[4])}}));o.setData(t),console.log("Binance Static Kline REST API called with fetch()")})).catch((function(e){return console.log(e)})),t.onmessage=function(e){var t=JSON.parse(e.data);console.log(t);var n={time:t.k.t,open:t.k.o,high:t.k.h,low:t.k.l,close:t.k.c};o.update(n),console.log("evt.data",e.data)}}(Object(N.b)(t.current,o),e)}),[]),Object(n.jsx)("div",{className:"wrapper",ref:t})}),E=function(){var e=new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@kline_10m"),t=c.a.useRef(null);return c.a.useEffect((function(){t.current&&function(e,t){var o=e.addBarSeries({upColor:"#74C2E3",downColor:"#FF0000",thinBars:!0});fetch("https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m&limit=1000").then((function(e){return e.json()})).then((function(e){console.log(e);var t=e.map((function(e){return{time:e[0]/1e3,open:parseFloat(e[1]),high:parseFloat(e[2]),low:parseFloat(e[3]),close:parseFloat(e[4])}}));o.setData(t),console.log("Binance Static Kline REST API called with fetch()")})).catch((function(e){return console.log(e)})),t.onmessage=function(e){var t=JSON.parse(e.data);console.log(t);var n={time:t.k.t,open:t.k.o,high:t.k.h,low:t.k.l,close:t.k.c};o.update(n)}}(Object(N.b)(t.current,{width:0,height:0,timeScale:{timeVisible:!0,secondsVisible:!1,borderColor:"#262626"},layout:{backgroundColor:"#262626",textColor:" #9ACCFF"},grid:{vertLines:{color:"#262626"},horzLines:{color:"#262626"}},crosshair:{mode:N.a.Normal},rightPriceScale:{borderColor:"#262626"}}),e)}),[]),Object(n.jsx)("div",{className:"wrapper",ref:t})},A=function(e){var t=["M1","M2","M3","M30","H1","H4","D1"],o=r.useState(!1),c=Object(s.a)(o,2),a=c[0],i=c[1],u=r.useRef(null),d=r.useState(1),h=Object(s.a)(d,2),x=h[0],N=h[1],A=function(e){u.current&&u.current.contains(e.target)||i(!1)};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h1",{children:"lightweight-charts"}),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"controll__btns-container",children:[Object(n.jsx)("p",{className:"graph-title",children:"#NQH2@CME"}),Object(n.jsx)(f.a,{"aria-label":"AddLocationIcon",sx:{color:"#ffffff"},children:Object(n.jsx)(b.a,{})}),Object(n.jsx)(f.a,{"aria-label":"AlignVerticalBottomIcon",sx:{color:"#ffffff"},children:Object(n.jsx)(j.a,{})}),Object(n.jsx)(f.a,{"aria-label":"AppRegistrationIcon",sx:{color:"#ffffff"},children:Object(n.jsx)(p.a,{})}),Object(n.jsxs)(g.a,{variant:"outlined",ref:u,"aria-label":"split button",children:[Object(n.jsx)(m.a,{onClick:function(){console.info("You clicked ".concat(t[x]))},sx:{color:"#ffffff",borderColor:"#ffffff"},children:t[x]}),Object(n.jsx)(m.a,{size:"small","aria-controls":a?"split-button-menu":void 0,"aria-expanded":a?"true":void 0,"aria-label":"select merge strategy","aria-haspopup":"menu",onClick:function(){i((function(e){return!e}))},sx:{color:"#ffffff",borderColor:"#ffffff"},children:Object(n.jsx)(O.a,{})})]}),Object(n.jsx)(w.a,{open:a,anchorEl:u.current,role:void 0,transition:!0,disablePortal:!0,className:"toFront",children:function(e){var o=e.TransitionProps,r=e.placement;return Object(n.jsx)(v.a,Object(l.a)(Object(l.a)({},o),{},{style:{transformOrigin:"bottom"===r?"center top":"center bottom"},children:Object(n.jsx)(k.a,{children:Object(n.jsx)(C.a,{onClickAway:A,children:Object(n.jsx)(S.a,{id:"split-button-menu",children:t.map((function(e,t){return Object(n.jsx)(F.a,{selected:t===x,onClick:function(e){return function(e,t){N(t),i(!1)}(0,t)},children:e},e)}))})})})}))}})]}),Object(n.jsx)(y,{}),Object(n.jsx)(E,{})]})]})};var B=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(A,{})})};i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(B,{})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.f36a02d8.chunk.js.map
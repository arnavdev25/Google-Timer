(this["webpackJsonpcountdown-timer"]=this["webpackJsonpcountdown-timer"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports={tickerCell:"TickerCell_tickerCell__sEktr",tickerCellValue:"TickerCell_tickerCellValue__30knr",tickerCellLabel:"TickerCell_tickerCellLabel__tuUdJ"}},,function(e,t,n){e.exports={tickerShell:"Ticker_tickerShell__3aolf",timeIsUp:"Ticker_timeIsUp__3DHAE"}},function(e,t,n){e.exports={pageContainer:"App_pageContainer__3-sow",toggleButton:"App_toggleButton__r3azM"}},,function(e,t,n){e.exports={separator:"TickerSeparator_separator__1euRa"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(4),r=n.n(c),a=n(12),s=n.n(a),i=(n(19),n(7)),l=n(23),o=n(8),u=n.n(o),j=n(2),b=function(e){var t=e.label,n=e.value,c=n<10?"0".concat(n):n.toString();return Object(j.jsxs)("div",{className:u.a.tickerCell,children:[Object(j.jsx)("span",{className:u.a.tickerCellValue,children:c}),Object(j.jsx)("span",{className:u.a.tickerCellLabel,children:t})]})},d=n(13),p=n.n(d),O=function(){return Object(j.jsx)("div",{className:p.a.separator,children:":"})},h=n(22),f=n(24),m=n(10),x=n.n(m),k=function(e){var t=function(e){var t=Object(c.useState)(new Date),n=Object(i.a)(t,2),r=n[0],a=n[1];Object(c.useEffect)((function(){var e=setInterval((function(){a(new Date)}),1e3);return function(){clearInterval(e)}}),[e]);var s=Object(h.a)(e,r);if(s)return{days:0,hours:0,minutes:0,seconds:0,isTimeUp:s};var l=Object(f.a)({start:r,end:e});return{days:l.days,hours:l.hours,minutes:l.minutes,seconds:l.seconds,isTimeUp:s}}(e.futureDate),n=t.days,r=t.hours,a=t.minutes,s=t.seconds,l=t.isTimeUp?Object(j.jsx)("div",{className:x.a.timeIsUp,children:"Time is up!!!"}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(b,{value:n,label:"Days"}),Object(j.jsx)(O,{}),Object(j.jsx)(b,{value:r,label:"Hours"}),Object(j.jsx)(O,{}),Object(j.jsx)(b,{value:a,label:"Minutes"}),Object(j.jsx)(O,{}),Object(j.jsx)(b,{value:s,label:"Seconds"})]});return Object(j.jsx)("div",{className:x.a.tickerShell,children:l})},v=n(11),_=n.n(v),C=Object(l.a)(new Date,{days:6,hours:22,minutes:40});var g=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1],a=n?Object(j.jsx)(k,{futureDate:C}):null,s=n?"Hide Countdown":"Show Countdown";return Object(j.jsxs)("div",{className:_.a.pageContainer,children:[Object(j.jsx)("h1",{children:"Join Our Event"}),Object(j.jsx)("p",{children:"Come check out our great event. It will be lots of fun."}),a,Object(j.jsx)("button",{className:_.a.toggleButton,onClick:function(){return r((function(e){return!e}))},children:s})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),w()}],[[21,1,2]]]);
//# sourceMappingURL=main.95b14425.chunk.js.map
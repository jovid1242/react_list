(this.webpackJsonpreact_list=this.webpackJsonpreact_list||[]).push([[0],{24:function(e,t,c){},47:function(e,t,c){},55:function(e,t,c){},77:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(12),i=c.n(s),r=(c(47),c(39)),j=c(3),l=(c(48),c(6)),d=c(34),o=c.n(d),b=(c(24),c(1));function h(e){var t=e.perPage,c=e.totalItems,a=e.handleActivePage,s=Object(n.useState)({activePage:1}),i=Object(l.a)(s,2),r=i[0],j=i[1];return Object(b.jsx)("div",{className:"paginate",children:Object(b.jsx)(o.a,{activePage:r.activePage,itemsCountPerPage:Number(t),totalItemsCount:c,pageRangeDisplayed:4,onChange:function(e){j({activePage:e}),a(e)}.bind()})})}var O=c(2),u=c(80);function x(e){return Object(b.jsx)("div",{children:Object(b.jsxs)(u.a,Object(O.a)(Object(O.a)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(b.jsx)(u.a.Header,{closeButton:!0,children:Object(b.jsxs)("h4",{children:["post id: ",e.modalInfo.id]})}),Object(b.jsxs)(u.a.Body,{children:[Object(b.jsx)("h4",{className:"text-center",children:e.modalInfo.title}),Object(b.jsx)("p",{className:"text-center",children:e.modalInfo.body})]})]}))})}c(55);function v(e){var t=e.items,c=e.page,a=e.perPage,s=e.search,i=Object(n.useState)(!1),r=Object(l.a)(i,2),j=r[0],d=r[1],o=Object(n.useState)([]),h=Object(l.a)(o,2),O=h[0],u=h[1],v=t.filter((function(e){var t,c;return""===!s||(null===(t=e.title)||void 0===t?void 0:t.toLowerCase().includes(s.toLowerCase()))||(null===(c=e.body)||void 0===c?void 0:c.toLowerCase().includes(s.toLowerCase()))?e:void 0}));return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("table",{children:Object(b.jsxs)("tbody",{children:[Object(b.jsxs)("tr",{className:"head_tbl",children:[Object(b.jsx)("th",{children:"#"}),Object(b.jsx)("th",{children:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"}),Object(b.jsx)("th",{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),Object(b.jsx)("th",{children:"Username"})]}),v.length?null===v||void 0===v?void 0:v.map((function(e,t){return Object(b.jsxs)("tr",{onClick:function(){return function(e){d(!0),u(e)}(e)},children:[Object(b.jsx)("td",{children:(c-1)*a+(t+1)}),Object(b.jsx)("td",{children:e.title}),Object(b.jsx)("td",{children:e.body.substr(0,150)+"..."}),Object(b.jsx)("td",{children:"Jovid ;)"})]},e.id)})):Object(b.jsx)("tr",{children:Object(b.jsx)("div",{className:"not-post",children:Object(b.jsx)("h2",{children:"\u041f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"})})})]})}),Object(b.jsx)(x,{show:j,modalInfo:O,onHide:function(){return d(!1)}})]})}var m=c(38),p=c.n(m);function g(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(5),i=Object(l.a)(s,2),r=i[0],j=i[1],d=Object(n.useState)(1),o=Object(l.a)(d,2),O=o[0],u=o[1],x=Object(n.useState)(""),m=Object(l.a)(x,2),g=m[0],f=m[1];Object(n.useEffect)((function(){p.a.get("https://jsonplaceholder.typicode.com/posts").then((function(e){a(e.data)}))}),[]);var N=O*r,P=N-r,C=c.slice(P,N);return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"home",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"home__wrapper",children:[Object(b.jsx)("div",{className:"header_table",children:Object(b.jsx)("div",{className:"search",children:Object(b.jsx)("input",{type:"text",onChange:function(e){return f(e.target.value)},placeholder:"\u041f\u043e\u0438\u0441\u043a..."})})}),Object(b.jsx)("div",{className:"table_list",children:Object(b.jsx)(v,{items:C,page:O,perPage:r,search:g})}),Object(b.jsxs)("div",{className:"paginate_wrapper",children:[Object(b.jsxs)("div",{className:"select_wrapper",children:[Object(b.jsx)("h4",{children:"\u041a\u043e\u043b-\u0432\u043e \u043f\u043e\u0441\u0442 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435: "}),Object(b.jsxs)("select",{className:"form-select",onChange:function(e){j(e.target.value)},children:[Object(b.jsx)("option",{value:"5",children:"5"}),Object(b.jsx)("option",{value:"10",children:"10"}),Object(b.jsx)("option",{value:"20",children:"20"})]})]}),Object(b.jsx)(h,{perPage:r,totalItems:c.length-1,handleActivePage:function(e){u(e)}})]})]})})})})}var f=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(r.a,{children:Object(b.jsx)(j.c,{children:Object(b.jsx)(j.a,{path:"/",exact:!0,component:g})})})})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,81)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root")),N()}},[[77,1,2]]]);
//# sourceMappingURL=main.c8c20eb0.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{869:function(e,t,a){"use strict";a.r(t);var n=a(272),r=a.n(n),c=a(10),s=a(315),p={table:{page:1,pageSize:10,total:0,data:[]},isPersonalType:null};t.default={namespace:"role",state:p,reducers:{changeTable:function(e,t){return Object(c.a)({},e,{table:Object(c.a)({},e.table,t.payload)})}},effects:{fetch:r.a.mark(function e(t,a){var n,u,i,o,l;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,u=a.call,i=a.put,o=Object(c.a)({page:p.table.page,pageSize:p.table.pageSize},n),e.next=5,u(s.showIdentity,o);case 5:return l=e.sent,e.next=8,i({type:"changeTable",payload:{data:l.data}});case 8:case"end":return e.stop()}},e,this)}),addRole:r.a.mark(function e(t,a){var n,c,p,u,i;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.identity_text,c=a.call,p=a.put,u={identity_text:n},e.next=5,c(s.addIdentity,u);case 5:return i=e.sent,e.next=8,p({type:"fetch"},{});case 8:return e.abrupt("return",Promise.resolve(i));case 9:case"end":return e.stop()}},e,this)})}}}}]);
//# sourceMappingURL=23.c30917c3.chunk.js.map
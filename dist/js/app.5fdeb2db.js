(function(e){function t(t){for(var o,i,s=t[0],c=t[1],u=t[2],l=0,f=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);d&&d(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={app:0},a=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"f6bdc15b"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(e);var u=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",u.name="ChunkLoadError",u.type=o,u.request=a,n[1](u)}r[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("4de4"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("router-view")],1)},a=[],i=(n("5c0b"),n("2877")),s={},c=Object(i["a"])(s,r,a,!1,null,null,null),u=c.exports,l=n("9483");Object(l["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var d=n("8c4f"),f=n("bb51"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v(e._s(e.msg))]),n("h1",[e._v("用户名：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),n("p"),n("h1",[e._v("密码： ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"text"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),n("p"),n("button",{on:{click:e.login}},[e._v("登录")])])},m=[],g=(n("96cf"),n("1da1")),v={name:"login",data:function(){return{username:"13537636693",password:"5*****5",msg:"欢迎使用信用卡管理系统"}},methods:{login:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$post("auth/login",{mobile:e.username,password:e.password});case 2:n=t.sent,console.log(n),n&&"100000"==n.head.code?(console.log(n),e.$router.push({name:"list_bill"}),console.log("this.$router.push({ name: list_bill });")):(console.log(n),e.msg=n.head.msg);case 5:case"end":return t.stop()}}),t)})))()}},mounted:function(){},beforeDestroy:function(){},created:function(){}},h=v,b=Object(i["a"])(h,p,m,!1,null,null,null),y=b.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("总欠款："+e._s(e.msg))]),e._v('""> '),n("tr",[n("td",{attrs:{align:"left"}},[e._v(" "+e._s(e.item.blankName))]),n("td",{attrs:{align:"left"}},[e._v(" "+e._s(e.item.owner))]),e.item.isAlarm?n("td",{staticStyle:{color:"red"},attrs:{align:"left"}},[e._v("还款日 "+e._s(e._f("jftime")(e.item.payBackDate)))]):n("td",{attrs:{align:"left"}},[e._v("还款日 "+e._s(e._f("jftime")(e.item.payBackDate)))])]),n("tr",[n("td"),n("td",{attrs:{align:"left"}},[e._v("后四位 "+e._s(e.item.cardNO))]),n("td",{attrs:{align:"left"}},[e._v("金额 "+e._s(e.item.amount))])])])},$=[],_={name:"list_bill",data:function(){return{msg:"",items:[{id:"",blankName:"",owner:"",payBackDate:"",amount:"",cardNO:""}]}},methods:{},mounted:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$post("card/list",{id:e.orderId});case 2:n=t.sent,n.head&&"100000"==n.head.code&&(e.items=n.body.bills,e.msg=n.body.total),console.log(n),console.log(n.body),console.log(n.body.bills);case 7:case"end":return t.stop()}}),t)})))()},beforeDestroy:function(){},created:function(){},computed:{sortItems:function(){return x(this.items,"id")}}};function x(e,t){return e.sort((function(e,n){var o=e[t],r=n[t];return o<r?-1:o>r?1:0}))}var S=_,k=Object(i["a"])(S,w,$,!1,null,null,null),j=k.exports;o["default"].use(d["a"]);var O=[{path:"/home",name:"Home",component:f["default"]},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/",name:"login",component:y},{path:"/list_bill",name:"ListBill",component:j}],T=new d["a"]({mode:"history",base:"/",routes:O}),E=T,M=n("2f62");o["default"].use(M["a"]);var N=new M["a"].Store({state:{},mutations:{},actions:{},modules:{}}),A=n("5c96"),D=n.n(A),C=(n("0fae"),n("99af"),n("4160"),n("c975"),n("13d5"),n("fb6a"),n("b64b"),n("4d63"),n("ac1f"),n("25f0"),n("5319"),n("1276"),n("159b"),n("3835")),I={padLeftZero:function(e){return("00"+e).substr(e.length)},formatDate:function(e,t){/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length)));var n={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds()};for(var o in n)if(new RegExp("(".concat(o,")")).test(t)){var r=n[o]+"";t=t.replace(RegExp.$1,1===RegExp.$1.length?r:this.padLeftZero(r))}return t}};function R(e,t){var n,o=this,r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return function(){for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];if(n&&clearTimeout(n),r){var c=!n;n=setTimeout((function(){n=null}),t),c&&e.apply(o,i)}else n=setTimeout((function(){e.apply(o,i)}),t)}}n("b680"),n("a9e3");var F=n("bc3a"),P=n.n(F),H=window.location.href,L=H.split("?")[1],B={};L&&L.split("&").forEach((function(e){var t=e.split("=");B[t[0]]=t[1]}));var Y,J={timeout:3e5,baseUrl:"/jf-mall-service-auth",errorMsg:{repeat:"操作過於頻繁，請稍後",link_failure:"連接服務器失敗，請檢查您的網絡狀態"},default:{appId:B["appId"]||"10000188"}},U={auth:{login:"api/open/auth/customer/login"},card:{list:"/api/open/auth/bill/list",edit:"/api/open/auth/bill/edit"}},W=J.timeout,Z=J.baseUrl,q=0;P.a.defaults.baseURL=Z,P.a.defaults.headers["Content-Type"]="application/json",P.a.defaults.timeout=W;var z=function(e){window.sessionStorage.setItem("vbhDiffTime",e)},K=function(e){window.sessionStorage.setItem("vbhIsReloaded",e)},V=function(){return Number(window.sessionStorage.getItem("vbhDiffTime"))||0},G=function(){return window.sessionStorage.getItem("vbhIsReloaded")||0},Q=function(){try{var e=window.sessionStorage.getItem("vbhUserInfo")||"{}";return JSON.parse(e)}catch(t){console.warn(t)}return""},X=function(e){var t=(new Date).getTime()-V(),n=Q(),o=n.token;return JSON.stringify({body:e,head:{timestamp:t,clientType:2,token:o}})},ee=function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a=e.split("/"),i=Object(C["a"])(a,2),s=i[0],c=i[1],u=r?"".concat(r,"/").concat(U[s][c]):U[s][c];console.warn("${hostName}"),console.warn(r),console.warn(u),console.warn(e,t);var l=X(t);return n&&(q++,Y=o["default"].prototype.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"})),P()({url:u,headers:{"Content-Type":"application/json"},method:"POST",data:l})},te=function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a=e.split("/"),i=Object(C["a"])(a,2),s=i[0],c=i[1],u=r?"".concat(r,"/").concat(U[s][c]):U[s][c];return console.warn(u,t),n&&(q++,Y=o["default"].prototype.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"})),P()({url:u,method:"GET",data:JSON.stringify(t)})};P.a.interceptors.request.use((function(e){return e.headers["Content-Type"]="application/json",e}),(function(e){return alert(e)})),P.a.interceptors.response.use((function(e){if(q>0&&q--,0==q&&Y&&Y.close(),!e||200!==e.status)return o["default"].prototype.$vbhAlert("网络错误",!0);if(!e.data.head||!e.data.head.code)return e.data;var t="".concat(e.data.head.code);if("100000"===t)return K(0),e.data;if("100019"!==t){if("100009"===t){var n=Q();return o["default"].prototype.$vbhAlert("您的登录状态已经失效，请重新登录",!0),window.location.hash="/home?workNo=".concat(n.workNo,"&channel=").concat(n.channel,"&time=").concat(n.time,"&sign=").concat(n.sign),e.data}return e.data.head.msg&&o["default"].prototype.$vbhAlert(e.data.head.msg,!0),e.data}var r=e.data.timestamp;if(r){var a=new Date(r.replace(/-/g,"/")).getTime(),i=(new Date).getTime();z(i-a)}"1"!=="".concat(G())?(K(1),window.location.reload()):e.data.head.msg&&o["default"].prototype.$vbhAlert(e.data.head.msg,!0)}),(function(e){var t=e.toString().indexOf("timeout")>-1;return q>0&&q--,0==q&&Y&&Y.close(),t?(o["default"].prototype.$vbhAlert("请求超时",!0),"timeout"):o["default"].prototype.$vbhAlert("服务繁忙，请稍后重试",!0)}));var ne=function(e){return!!e&&(JSON.parse(window.sessionStorage.getItem(e))||{})},oe=function(e,t){if(!e)return!1;var n=t;return"string"!==typeof n&&(n=JSON.stringify(n)),window.sessionStorage.setItem(e,n)},re=function(e){return!!e&&window.sessionStorage.removeItem(e)};function ae(e){e.prototype.$appId=10000188,e.prototype.$reg={phone:/^(0|86|17951)?(13[0-9]|15[0-9]|17[0-9]|18[0-9]|14[57]|19[0-9]|16[0-9])[0-9]{8}$/,email:/^.+@[0-9a-zA-Z]+(\.[A-Za-z0-9]+){1,4}$/},e.prototype.$getSessionCache=ne,e.prototype.$setSessionCache=oe,e.prototype.$removeSessionCache=re,e.prototype.$post=ee,e.prototype.$get=te,e.prototype.$vbhMessage=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e3;return e.prototype.$message({customClass:"vbh-message",center:!0,duration:n,message:t})},e.prototype.$vbhAlert=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=arguments.length>2?arguments[2]:void 0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"提示",a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"確認";return e.prototype.$alert(t,r,{dangerouslyUseHTMLString:!0,showClose:!1,center:n,callback:o,confirmButtonText:a,customClass:"vbh-alert"})},e.prototype.$vbhConfirm=function(t,n){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"提示",a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"讀取",i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"取消";return e.prototype.$confirm(t,r,{dangerouslyUseHTMLString:!0,showClose:!1,center:o,confirmButtonText:a,cancelButtonText:i,customClass:"vbh-confirm"}).then((function(){n&&n()})).catch((function(){console.log("取消")}))},e.prototype.$mobilePrivacy=function(e){return e?(e=e.toString(),e.replace(/(\d{3})\d+(\w{4})/,"$1****$2")):""},e.directive("keyBoard",{inserted:function(e){var t=document.body.clientHeight;window.addEventListener("resize",(function(){t>document.body.clientHeight&&e.scrollIntoView(!1)}),!1)}}),e.directive("debounce",{bind:function(e,t){var n=t.value,o=null;o=n instanceof Array?n[0]:n;var r=R(o,500);e.addEventListener("click",r)}}),e.filter("hk$FeeMoney",(function(e){return e?(e<=0&&(e=Math.abs(e)),"HK$".concat((e/100).toFixed(2))):"0"})),e.filter("rmbBaiFen",(function(e){return e?"".concat((e/100).toFixed(2)):"0.00"})),e.filter("rmbSymbol",(function(e){return e?"￥".concat((e/100).toFixed(2)):"￥0.00"})),e.filter("rmbYuan",(function(e){return e?"".concat((e/100).toFixed(2),"元"):"0.00元"})),e.filter("rmbWanFen",(function(e){return e?"".concat((e/1e4).toFixed(2)):"0.00"})),e.filter("rmbWanFenSymbol",(function(e){return e?"￥".concat((e/1e4).toFixed(2)):"￥0.00"})),e.filter("rmbWanFenYuan",(function(e){return e?"".concat((e/1e4).toFixed(2),"元"):"0.00元"})),e.filter("hideMobileNumber",(function(e){return e?(e=e.toString(),e.replace(/(\d{3})\d+(\d{4})/,"$1****$2")):""})),e.filter("hideHKCertificateCode",(function(e){return e?(e=e.toString(),e.replace(/(\S{2})\S+(\S{5})/,"$1***$2")):""})),e.filter("HKGenderShow",(function(e){if(e)return"2"==e?"先生":"1"==e?"女士":"未知"})),e.filter("showPayTypeName",(function(e){if(e)return"14"==e?"支付寶":"160"==e?"香港支付寶支付":"161"==e?"0元支付":"162"==e?"無需支付":"2982"==e?"八達通":"0"==e?"現金支付":void 0})),e.filter("filterTime",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY/MM/DD hh:mm:ss";if(!e)return"";var n=new Date(e-0),o=t;/(Y+)/.test(o)&&(o=o.replace(RegExp.$1,"".concat(n.getFullYear())).substr(4-RegExp.$1.length));for(var r={"M+":n.getMonth()+1,"D+":n.getDate(),"h+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds()},a=Object.keys(r),i=0,s=a;i<s.length;i++){var c=s[i],u="".concat(r[c]);new RegExp("(".concat(c,")")).test(o)&&(o=o.replace(RegExp.$1,1===RegExp.$1.length?u:"00".concat(u).substr(u.length)))}return o}))}var ie=ae;o["default"].config.productionTip=!1,o["default"].use(ie),o["default"].use(D.a),o["default"].filter("jftime",(function(e){var t=new Date(e);return I.formatDate(t,"yyyy.MM.dd")})),new o["default"]({router:E,store:N,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var o=n("9c0c"),r=n.n(o);r.a},"7ad4":function(e,t,n){"use strict";var o=n("9cae"),r=n.n(o);t["default"]=r.a},"9c0c":function(e,t,n){},"9cae":function(e,t){},bb51:function(e,t,n){"use strict";var o=n("c688"),r=n("7ad4"),a=n("2877"),i=Object(a["a"])(r["default"],o["a"],o["b"],!1,null,null,null);t["default"]=i.exports},c688:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return r}));var o=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home"},[o("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),o("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},r=[]},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.5fdeb2db.js.map
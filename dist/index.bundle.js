"use strict";(self.webpackChunkto_do_list=self.webpackChunkto_do_list||[]).push([[826],{28:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([e.id,"* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n\r\n/** CENTER THE TODO APP */\r\n\r\nbody {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 100vh;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\n/** WRAPPER */\r\n\r\n.wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  box-shadow: 1px 1px 9px 1px #aaa;\r\n  width: 50%;\r\n}\r\n\r\n/** STYLE THE TODO APP */\r\n\r\n/* LIST HEADER */\r\n\r\n.list-header {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  border-bottom: 1px solid #ccc;\r\n  padding: 0.6rem 0.5rem;\r\n}\r\n\r\n.reload {\r\n  cursor: pointer;\r\n  color: #888;\r\n}\r\n\r\n/* TASK INPUT */\r\n\r\n.task-input {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 0.6rem 0.5rem;\r\n  border-bottom: 1px solid #ccc;\r\n  justify-content: space-between;\r\n}\r\n\r\n#task {\r\n  width: 90%;\r\n  height: 2rem;\r\n  border: none;\r\n  outline: none;\r\n  font-size: 1rem;\r\n  font-style: italic;\r\n}\r\n\r\n#task::placeholder {\r\n  font-style: italic;\r\n  font-size: 1rem;\r\n}\r\n\r\n.fa-turn-down {\r\n  transform: rotate(90deg);\r\n  justify-self: flex-end;\r\n  color: #888;\r\n  cursor: pointer;\r\n}\r\n\r\n/* TASKS LIST */\r\n\r\n.task {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 1rem 0.5rem;\r\n  border-bottom: 1px solid #ccc;\r\n  justify-content: space-between;\r\n}\r\n\r\n.new-task-input {\r\n  outline: none;\r\n  border: none;\r\n}\r\n\r\n.task > label {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.task > label > .checked {\r\n  text-decoration: line-through;\r\n  font-style: italic;\r\n  color: #555;\r\n}\r\n\r\n.checkbox-input {\r\n  margin-right: 1rem;\r\n  display: inline-block;\r\n  width: 25px;\r\n  height: 19px;\r\n}\r\n\r\n.settings {\r\n  color: #888;\r\n  cursor: pointer;\r\n  position: relative;\r\n}\r\n\r\n.task-menu {\r\n  position: absolute;\r\n  background: #fff;\r\n  border-radius: 5px;\r\n  z-index: 3;\r\n  transform: scale(0);\r\n  transform-origin: top right;\r\n  right: 0;\r\n  top: -5px;\r\n  transition: transform 0.2s ease;\r\n  box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);\r\n  padding: 5px 0;\r\n}\r\n\r\n.settings:hover .task-menu {\r\n  transform: scale(1);\r\n}\r\n\r\n.task-menu li {\r\n  height: 25px;\r\n  font-size: 16px;\r\n  padding: 17px 15px;\r\n  margin-bottom: 2px;\r\n  justify-content: flex-end;\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: row-reverse;\r\n}\r\n\r\n.task-menu li:last-child {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.task-menu li:hover {\r\n  background: #f5f5f5;\r\n}\r\n\r\n.task-menu li i {\r\n  padding-right: 8px;\r\n}\r\n\r\n/** CLEAR ALL COMPLETED BUTTON */\r\n\r\n.clear-button {\r\n  padding: 1rem;\r\n  border: none;\r\n  border-radius: 0;\r\n  outline: none;\r\n  color: #555;\r\n  cursor: pointer;\r\n}\r\n\r\n.clear-button:hover {\r\n  text-decoration: underline;\r\n  color: #000;\r\n}\r\n",""]);const s=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var u=t(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=o(m,r);r.byIndex=s,n.splice(s,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=t(i[a]);n[s].references--}for(var c=r(e,o),l=0;l<i.length;l++){var d=t(i[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},841:(e,n,t)=>{var r=t(379),o=t.n(r),i=t(795),a=t.n(i),s=t(569),c=t.n(s),l=t(565),d=t.n(l),p=t(216),u=t.n(p),m=t(589),f=t.n(m),g=t(28),h={};h.styleTagTransform=f(),h.setAttributes=d(),h.insert=c().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=u(),o()(g.Z,h),g.Z&&g.Z.locals&&g.Z.locals;const y=document.querySelector(".tasks-list"),v=e=>{const{description:n,index:t}=e,r=document.createElement("li"),o=document.createElement("label"),i=document.createElement("input"),a=document.createElement("input"),s=document.createElement("div"),c=document.createElement("i"),l=document.createElement("ul"),d=document.createElement("li"),p=document.createElement("i");r.classList.add("task"),o.classList.add("label"),i.classList.add("checkbox-input"),s.classList.add("settings"),a.classList.add("new-task-input"),c.classList.add("fa-solid","fa-ellipsis-vertical","settings"),l.classList.add("task-menu","task-menu-visible"),p.classList.add("fa-solid","fa-trash","delete-icon"),d.classList.add("delete"),i.id=`checkbox-${t}`,a.id=`description-${t}`,d.id=`${t}`,l.id=`${t}`,r.id=`${t}`,a.value=n,d.textContent="Delete",i.type="checkbox",o.append(i,a),d.append(p),l.append(d),s.append(c,l),r.append(o,s),y.append(r),(e=>{const n=document.getElementById(`checkbox-${e.index}`),t=n.parentElement.lastElementChild;n.addEventListener("click",(()=>{const r=JSON.parse(localStorage.getItem("todo-list"));!0===n.checked?(t.classList.add("checked"),r[e.index].completed=!0,localStorage.setItem("todo-list",JSON.stringify(r))):(t.classList.remove("checked"),r[e.index].completed=!1,localStorage.setItem("todo-list",JSON.stringify(r))),window.location.reload()}))})(e)},x=document.getElementById("task"),b=JSON.parse(localStorage.getItem("todo-list"))||[];0!==b.length&&b.forEach((e=>{v(e)}));const k=document.querySelectorAll(".task"),E=JSON.parse(localStorage.getItem("todo-list"))||[],S=document.querySelectorAll(".task"),L=JSON.parse(localStorage.getItem("todo-list"))||[],w=document.querySelector(".clear-button"),I=JSON.parse(localStorage.getItem("todo-list"))||[];0!==I.length&&(S.forEach((e=>{e.addEventListener("click",(()=>{const n=document.getElementById(`description-${e.id}`);n.addEventListener("keypress",(t=>{"Enter"===t.key&&(L[e.id].description=n.value,localStorage.setItem("todo-list",JSON.stringify(L)))}))}))})),k.forEach((e=>{e.addEventListener("click",(n=>{(n.target.classList.contains("delete")||n.target.classList.contains("delete-icon"))&&(E.splice(e.id,1),localStorage.setItem("todo-list",JSON.stringify(E)),window.location.reload())}))})),E.map((e=>(e.index=E.indexOf(e),localStorage.setItem("todo-list",JSON.stringify(E)),e)))),window.addEventListener("load",(()=>{I.forEach((e=>{(e=>{const n=document.getElementById(`checkbox-${e.index}`),t=document.getElementById(`description-${e.index}`);!0===e.completed?(n.checked=!0,t.classList.add("checked")):(n.checked=!1,t.classList.remove("checked"))})(e)}))})),w.addEventListener("click",(()=>{let e=JSON.parse(localStorage.getItem("todo-list"));e=e.filter((e=>!1===e.completed)),localStorage.setItem("todo-list",JSON.stringify(e)),window.location.reload()})),x.addEventListener("keyup",(e=>{const n=x.value.trim();if("Enter"===e.key&&n){const e=((e,n)=>{let t={};return t={description:e,completed:!1,index:n},t})(n,b.length);b.push(e),localStorage.setItem("todo-list",JSON.stringify(b)),v(e),x.value="",window.location.reload()}}))}},e=>{e(e.s=841)}]);
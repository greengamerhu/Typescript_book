(()=>{var e={139:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Ebook=void 0,t.Ebook=class{constructor(e,t,n,o){this.title=e,this.price=t,this.isbn=n,this.size=o}}},656:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PaperBook=void 0,t.PaperBook=class{constructor(e,t,n,o){this.title=e,this.price=t,this.isbn=n,this.weight=o}}},630:()=>{}},t={};function n(o){var l=t[o];if(void 0!==l)return l.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}(()=>{"use strict";const e=n(139),t=n(656);n(630);let o=[],l=document.getElementById("cim"),a=document.getElementById("ar"),s=document.getElementById("isbnSzam"),u=document.getElementById("suly"),r=document.getElementById("meret"),d=document.getElementById("hiba");function i(e){return e.length>=1&&""!=e}function c(e){return e>=0}function m(e){return e>0}function v(e){let t=new RegExp("^[+ 0-9]{13}$");return!!t.test(e)||(console.log(t.test(e)),!1)}function p(){document.getElementById("paperBook").checked?(document.getElementById("meret").disabled=!0,document.getElementById("suly").disabled=!1,u.textContent=""):(document.getElementById("meret").disabled=!1,document.getElementById("suly").disabled=!0,r.textContent="")}function g(){document.getElementById("paperBook").checked?(d.textContent="",i(l.value)&&c(parseInt(a.value))&&v(s.value)&&m(parseInt(u.value))?(o.push(new t.PaperBook(l.value,parseInt(a.value),s.value,parseInt(u.value))),console.log(o)):(d.textContent="",console.log("valami nem jó"),i(l.value)?c(parseInt(a.value))?v(s.value)?m(parseInt(u.value))||(d.textContent="a súly nem lehet negatív"):d.textContent="Az isbn 13 karakteres lehet és csak számok":d.textContent="Az ár nem lehet negatív":d.textContent="Hibás a cim")):(d.textContent="",i(l.value)&&c(parseInt(a.value))&&v(s.value)&&function(e){return e>0}(parseInt(u.value))?(o.push(new e.Ebook(l.value,parseInt(a.value),s.value,parseInt(r.value))),console.log(o)):(d.textContent="",console.log("valami nem jó"),i(l.value)?c(parseInt(a.value))?v(s.value)?m(parseInt(r.value))||(d.textContent="a méret nem lehet negatív"):d.textContent="Az isbn 13 karakteres lehet és csak számok":d.textContent="Az ár nem lehet negatív":d.textContent="Hibás a cim"))}document.addEventListener("DOMContentLoaded",(()=>{var e,t,n;null===(e=document.getElementById("paperBook"))||void 0===e||e.addEventListener("click",(()=>{p(),u.value=" "})),null===(t=document.getElementById("ebook"))||void 0===t||t.addEventListener("click",(()=>{p(),r.value=" "})),null===(n=document.getElementById("submit"))||void 0===n||n.addEventListener("click",g)}))})()})();
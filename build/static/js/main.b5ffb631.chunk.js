(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{11:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),r=a(3),l=a.n(r),n=(a(8),a(9),a(0));function o(e){return Object(n.jsx)("nav",{className:`navbar navbar-expand-lg navbar-${e.mode} bg-${e.mode}`,children:Object(n.jsxs)("div",{className:"container-fluid",children:[Object(n.jsx)("a",{className:"navbar-brand",href:"/",children:e.title}),Object(n.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})}),Object(n.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(n.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)("a",{className:"nav-link","aria-current":"page",href:"/",children:"Home"})})}),Object(n.jsxs)("div",{className:"form-check form-switch text-"+("light"===e.mode?"dark":"light"),children:[Object(n.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(n.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable DarkMode"})]})]})]})})}function i(e){const[t,a]=Object(s.useState)("");return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(n.jsx)("h1",{className:"mb-4",children:e.heading}),Object(n.jsx)("div",{className:"mb-3",children:Object(n.jsx)("textarea",{className:"form-control",value:t,onChange:e=>{a(e.target.value)},style:{backgroundColor:"dark"===e.mode?"#13466e":"white",color:"dark"===e.mode?"white":"#042743"},id:"myBox",rows:"8"})}),Object(n.jsx)("button",{disabled:0===t.length,className:"btn btn-primary mx-1 my-1",onClick:()=>{let s=t.toUpperCase();a(s),e.showAlert("Converted to uppercase!","success")},children:"Convert to Uppercase"}),Object(n.jsx)("button",{disabled:0===t.length,className:"btn btn-primary mx-1 my-1",onClick:()=>{let s=t.toLowerCase();a(s),e.showAlert("Converted to lowercase!","success")},children:"Convert to Lowercase"}),Object(n.jsx)("button",{disabled:0===t.length,className:"btn btn-primary mx-1 my-1",onClick:()=>{a(""),e.showAlert("Text Cleared!","success")},children:"Clear Text"}),Object(n.jsx)("button",{disabled:0===t.length,className:"btn btn-primary mx-1 my-1",onClick:()=>{navigator.clipboard.writeText(t),e.showAlert("Copied to Clipboard!","success")},children:"Copy Text"}),Object(n.jsx)("button",{disabled:0===t.length,className:"btn btn-primary mx-1 my-1",onClick:()=>{let s=t.split(/[ ]+/);a(s.join(" ")),e.showAlert("Extra spaces removed!","success")},children:"Remove Extra Spaces"})]}),Object(n.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(n.jsx)("h2",{children:"Your text summary"}),Object(n.jsxs)("p",{children:[t.split(/\s+/).filter((e=>0!==e.length)).length," words and ",t.length," characters"]}),Object(n.jsxs)("p",{children:[.008*t.split(/\s+/).filter((e=>0!==e.length)).length," Minutes read"]}),Object(n.jsx)("h2",{children:"Preview"}),Object(n.jsx)("p",{children:t.length>0?t:"Nothing to preview!"})]})]})}o.defaultProps={title:"Set title here",aboutText:"About"};var d=function(e){return Object(n.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(n.jsxs)("div",{className:`alert alert-${e.alert.type} alert-dismissible fade show`,role:"alert",children:[Object(n.jsx)("strong",{children:(e=>{const t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)})(e.alert.type)}),": ",e.alert.msg]})})};var b=function(){const[e,t]=Object(s.useState)("light"),[a,c]=Object(s.useState)(null),r=(e,t)=>{c({msg:e,type:t}),setTimeout((()=>{c(null)}),1500)};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(o,{title:"TextUtils",mode:e,toggleMode:()=>{"light"===e?(t("dark"),document.body.style.backgroundColor="#042743",r("Dark mode has been enabled","success")):(t("light"),document.body.style.backgroundColor="white",r("Light mode has been enabled","success"))}}),Object(n.jsx)(d,{alert:a}),Object(n.jsx)("div",{className:"container my-3",children:Object(n.jsx)(i,{showAlert:r,heading:"Try TextUtils - word counter, character counter, remove extra spaces",mode:e})})]})};var h=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,12)).then((t=>{let{getCLS:a,getFID:s,getFCP:c,getLCP:r,getTTFB:l}=t;a(e),s(e),c(e),r(e),l(e)}))};l.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(b,{})}),document.getElementById("root")),h()},8:function(e,t,a){},9:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.b5ffb631.chunk.js.map
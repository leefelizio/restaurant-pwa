import{a as v}from"./chunk-MM5QLNJM.js";import{i as c}from"./chunk-H3GX5QFY.js";import{a as l}from"./chunk-D6PWZOWL.js";import{a as y,n as w}from"./chunk-4XQNHCZH.js";import{e as o}from"./chunk-AGYSVWMR.js";var P="ionViewWillEnter",I="ionViewDidEnter",V="ionViewWillLeave",k="ionViewDidLeave",H="ionViewWillUnload",s=n=>{n.tabIndex=-1,n.focus()},d=n=>n.offsetParent!==null,_=()=>({saveViewFocus:i=>{if(l.get("focusManagerPriority",!1)){let a=document.activeElement;a!==null&&i?.contains(a)&&a.setAttribute(b,"true")}},setViewFocus:i=>{let t=l.get("focusManagerPriority",!1);if(Array.isArray(t)&&!i.contains(document.activeElement)){let a=i.querySelector(`[${b}]`);if(a&&d(a)){s(a);return}for(let r of t)switch(r){case"content":let f=i.querySelector('main, [role="main"]');if(f&&d(f)){s(f);return}break;case"heading":let m=i.querySelector('h1, [role="heading"][aria-level="1"]');if(m&&d(m)){s(m);return}break;case"banner":let g=i.querySelector('header, [role="banner"]');if(g&&d(g)){s(g);return}break;default:v(`Unrecognized focus manager priority value ${r}`);break}s(i)}}}),b="ion-last-focus",T=()=>import("./chunk-O3YDXKDH.js"),W=()=>import("./chunk-OA5KPT53.js"),F=_(),$=n=>new Promise((e,i)=>{w(()=>{B(n),D(n).then(t=>{t.animation&&t.animation.destroy(),L(n),e(t)},t=>{L(n),i(t)})})}),B=n=>{let e=n.enteringEl,i=n.leavingEl;F.saveViewFocus(i),O(e,i,n.direction),n.showGoBack?e.classList.add("can-go-back"):e.classList.remove("can-go-back"),C(e,!1),e.style.setProperty("pointer-events","none"),i&&(C(i,!1),i.style.setProperty("pointer-events","none"))},D=n=>o(void 0,null,function*(){let e=yield M(n);return e&&y.isBrowser?S(e,n):R(n)}),L=n=>{let e=n.enteringEl,i=n.leavingEl;e.classList.remove("ion-page-invisible"),e.style.removeProperty("pointer-events"),i!==void 0&&(i.classList.remove("ion-page-invisible"),i.style.removeProperty("pointer-events")),F.setViewFocus(e)},M=n=>o(void 0,null,function*(){return!n.leavingEl||!n.animated||n.duration===0?void 0:n.animationBuilder?n.animationBuilder:n.mode==="ios"?(yield T()).iosTransitionAnimation:(yield W()).mdTransitionAnimation}),S=(n,e)=>o(void 0,null,function*(){yield h(e,!0);let i=n(e.baseEl,e);p(e.enteringEl,e.leavingEl);let t=yield x(i,e);return e.progressCallback&&e.progressCallback(void 0),t&&A(e.enteringEl,e.leavingEl),{hasCompleted:t,animation:i}}),R=n=>o(void 0,null,function*(){let e=n.enteringEl,i=n.leavingEl,t=l.get("focusManagerPriority",!1);return yield h(n,t),p(e,i),A(e,i),{hasCompleted:!0}}),h=(n,e)=>o(void 0,null,function*(){(n.deepWait!==void 0?n.deepWait:e)&&(yield Promise.all([E(n.enteringEl),E(n.leavingEl)])),yield q(n.viewIsReady,n.enteringEl)}),q=(n,e)=>o(void 0,null,function*(){n&&(yield n(e))}),x=(n,e)=>{let i=e.progressCallback,t=new Promise(a=>{n.onFinish(r=>a(r===1))});return i?(n.progressStart(!0),i(n)):n.play(),t},p=(n,e)=>{u(e,V),u(n,P)},A=(n,e)=>{u(n,I),u(e,k)},u=(n,e)=>{if(n){let i=new CustomEvent(e,{bubbles:!1,cancelable:!1});n.dispatchEvent(i)}},G=()=>new Promise(n=>c(()=>c(()=>n()))),E=n=>o(void 0,null,function*(){let e=n;if(e){if(e.componentOnReady!=null){if((yield e.componentOnReady())!=null)return}else if(e.__registerHost!=null){yield new Promise(t=>c(t));return}yield Promise.all(Array.from(e.children).map(E))}}),C=(n,e)=>{e?(n.setAttribute("aria-hidden","true"),n.classList.add("ion-page-hidden")):(n.hidden=!1,n.removeAttribute("aria-hidden"),n.classList.remove("ion-page-hidden"))},O=(n,e,i)=>{n!==void 0&&(n.style.zIndex=i==="back"?"99":"101"),e!==void 0&&(e.style.zIndex="100")},Z=n=>{if(n.classList.contains("ion-page"))return n;let e=n.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs");return e||n};export{V as a,k as b,H as c,$ as d,u as e,G as f,E as g,C as h,Z as i};

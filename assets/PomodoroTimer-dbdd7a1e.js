import{u as b}from"./InputStore-0d7a61cf.js";import{i as R,t as w,j as _,_ as C,r as x,k as V,l as I,a as A,o as d,c as v,b as k,u as l,m as y,d as N,e as $,n as L,f as P}from"./index-ae60078a.js";/*!
  * vue-timer-hook v1.0.56
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */class f{static getTimeFromSeconds(s){const e=_(()=>Math.ceil(s.value)),t=_(()=>Math.floor(e.value/(60*60*24))),i=_(()=>Math.floor(e.value%(60*60*24)/(60*60))),n=_(()=>Math.floor(e.value%(60*60)/60));return{seconds:_(()=>Math.floor(e.value%60)),minutes:n,hours:i,days:t}}static getSecondsFromExpiry(s,e){const t=new Date().getTime(),i=s-t;if(i>0){const n=i/1e3;return e?Math.round(n):n}return 0}static getSecondsFromPrevTime(s,e){const i=new Date().getTime()-s;if(i>0){const n=i/1e3;return e?Math.round(n):n}return 0}static getSecondsFromTimeNow(){const s=new Date,e=s.getTime(),t=s.getTimezoneOffset()*60;return e/1e3-t}static getFormattedTimeFromSeconds(s,e){const{seconds:t,minutes:i,hours:n}=f.getTimeFromSeconds(s),m=_(()=>e==="12-hour"?n.value>=12?"pm":"am":""),o=_(()=>e==="12-hour"?n.value%12:n.value);return{seconds:t,minutes:i,hours:o,ampm:m}}}class B{static expiryTimestamp(s){const e=new Date(s).getTime()>0;return e||console.warn("vue-timer-hook: { useTimer } Invalid expiryTimestamp settings",s),e}}const z=r=>typeof r=="number";function j(r,s){let e;const t=()=>{e&&(clearInterval(e),e=void 0)},i=n=>(t(),!n&&!s?void 0:e=setInterval(r,n||s));return z(s)&&i(),{remove:t,start:i}}const h=1e3;function E(r){if(!B.expiryTimestamp(r))return null;const s=f.getSecondsFromExpiry(r),e=Math.floor((s-Math.floor(s))*1e3);return e>0?e:h}const H=(r=60,s=!0)=>{let e;const t=R({expiryTimestamp:r,seconds:f.getSecondsFromExpiry(r),isRunning:s,isExpired:!1,didStart:s,delay:E(r)});function i(){t.isExpired=!0,t.isRunning=!1,t.delay=null,e&&e.remove()}function n(){t.isRunning=!1,e&&e.remove()}function m(c=r,g=!0){n(),t.delay=E(c),t.didStart=g,t.isExpired=!1,t.expiryTimestamp=c,t.seconds=f.getSecondsFromExpiry(c),t.didStart&&p()}function o(){const c=new Date,g=c.setMilliseconds(c.getMilliseconds()+t.seconds*1e3);m(g)}function p(){t.didStart?(t.seconds=f.getSecondsFromExpiry(t.expiryTimestamp),t.isRunning=!0,e=j(()=>{t.delay!==h&&(t.delay=h);const c=f.getSecondsFromExpiry(t.expiryTimestamp);t.seconds=c,c<=0&&i()},t.isRunning?t.delay:null)):o()}return m(r,s),{...f.getTimeFromSeconds(w(t,"seconds")),start:p,pause:n,resume:o,restart:m,isRunning:w(t,"isRunning"),isExpired:w(t,"isExpired")}};const O={class:"timer__container"},U={class:"timer__box"},W={key:0,class:"timer__title"},Y={key:1,class:"timer__title"},q={key:2,class:"timer__clock"},G={key:3,class:"timer__clock"},J={class:"timer__row"},K={__name:"PomodoroTimer",setup(r){let s=x(!0),e=x(!0);var t=new Audio("audio/megumin.mp3"),i=new Audio("audio/yo.mp3");const n=b(),m=new Date;m.setSeconds(m.getSeconds()+n.workTime*60);const o=H(m);function p(){e.value?(e.value=!e.value,S(n.restTime)):(e.value=!e.value,S(n.workTime))}V(()=>{I(async()=>{o.isExpired.value&&(e.value?t.play():i.play(),p())})});function c(){var u="";return o.minutes.value===0?u="00":o.minutes.value<10?u="0"+o.minutes.value:u=o.minutes.value,u}function g(){var u="";return o.seconds.value===0?u="00":o.seconds.value<10?u="0"+o.seconds.value:u=o.seconds.value,u}function S(u){const a=new Date;a.setSeconds(a.getSeconds()+u*60),s.value=!0,o.restart(a)}function F(){s.value=!s.value,o.resume()}function M(){s.value=!s.value,o.pause()}return(u,a)=>{const D=A("RouterLink");return d(),v("div",{class:L(["timer",{"blue-bg":l(e)},{"green-bg":!l(e)}])},[k("div",O,[k("div",U,[l(e)?(d(),v("div",W,"work")):(d(),v("div",Y,"rest")),l(e)?(d(),v("div",q,y(l(n).workTime>=60?l(o).hours.value+":":"")+y(c())+":"+y(g()),1)):(d(),v("div",G,y(l(n).restTime>=60?l(o).hours.value+":":"")+y(c())+":"+y(g()),1))]),k("ul",J,[k("li",{class:"timer__el",onClick:a[0]||(a[0]=T=>S(l(e)?l(n).workTime:l(n).restTime))},"reset"),l(s)?(d(),v("li",{key:0,onClick:a[1]||(a[1]=T=>M()),class:"timer__el"},"stop")):(d(),v("li",{key:1,onClick:a[2]||(a[2]=T=>F()),class:"timer__el"},"resume")),l(e)?(d(),v("li",{key:2,class:"timer__el",onClick:a[3]||(a[3]=T=>p())},"go rest")):(d(),v("li",{key:3,class:"timer__el",onClick:a[4]||(a[4]=T=>p())},"go work"))]),N(D,{to:{name:"Home"},id:"change-timer",class:"timer__primary-btn"},{default:$(()=>[P("change timer")]),_:1})])],2)}}},Z=C(K,[["__scopeId","data-v-8477be15"]]);export{Z as default};

import{q as z,b as w,d as b,e as _,g as m,f as s,F as U,s as G,k as R,B as D,t as I,x as F,r as h,o as O,w as S,c as H,y as J,h as K,i as P,G as Q,I as W,D as X}from"./index-cd74998a.js";const Y={class:"overflow-auto"},Z={class:"flex flex-row md:flex-column gap-1 md:gap-2 list-none m-0 p-0 overflow-auto"},ee=["onClick"],te={key:0,class:"ml-auto text-sm font-semibold bg-primary-50 text-primary-900 px-2 py-1 hidden md:inline text-center",style:{"border-radius":"2rem",width:"23px",height:"23px"}},le={__name:"MailSidebar",props:{items:{type:Array,default:()=>[]}},setup(k){const c=z(),l=a=>{const p=a.routerLink||"/apps/mail/compose";c.push(p)};return(a,p)=>{const r=w("Button");return b(),_("div",null,[m(r,{onClick:l,label:"Compose New",class:"mb-5 w-full",outlined:""}),s("div",Y,[s("ul",Z,[(b(!0),_(U,null,G(k.items,o=>(b(),_("li",{key:o.id,class:R(["cursor-pointer select-none p-3 transition-duration-150 border-round flex align-items-center justify-content-center md:justify-content-start md:flex-1 flex-auto",{"bg-primary":D(c).currentRoute.value.path===o.routerLink,"hover:surface-hover":D(c).currentRoute.value.path!==o.routerLink}]),onClick:x=>l(o)},[s("i",{class:R(["md:mr-3 text-600 transition-duration-150 text-lg",[o.icon,{"text-primary-50":D(c).currentRoute.value.path===o.routerLink}]])},null,2),s("span",{class:R(["text-900 font-medium hidden md:inline",{"text-primary-50":D(c).currentRoute.value.path===o.routerLink}])},I(o.label),3),o.badge?(b(),_("span",te,I(o.badge),1)):F("",!0)],10,ee))),128))])])])}}},ae={class:"p-0 m-0"},se={class:"surface-section grid grid-nogutter formgrid flex-column md:flex-row gap-6 p-5 border-round"},oe={class:"col"},ne=s("label",{for:"to",class:"block text-900 font-semibold mb-3"},"To",-1),ie={class:"p-input-icon-left w-full",style:{height:"3.5rem"}},re=s("i",{class:"pi pi-user",style:{left:"1.5rem"}},null,-1),ue={class:"col"},de=s("label",{for:"Subject",class:"block text-900 font-semibold mb-3"},"Subject",-1),ce={class:"p-input-icon-left w-full",style:{height:"3.5rem"}},pe=s("i",{class:"pi pi-pencil",style:{left:"1.5rem"}},null,-1),me={key:0,class:"col-12 field"},ve={class:"border-1 surface-border border-round p-4"},fe={class:"col-12 field"},he=s("i",{class:"pi pi-ellipsis-h"},null,-1),be=[he],ge={class:"flex column-gap-3 justify-content-end p-5 border-top-1 surface-border"},_e={__name:"Reply",props:{dialogVisible:{type:Boolean,default:!1},mailDetail:{type:Object,default:null}},emits:["save","update:dialogVisible"],setup(k,{emit:c}){const l=k,a=h({}),p=h({}),r=h(!1),o=h(!1);O(()=>{x()}),S(()=>l.mailDetail,()=>{x()});const x=()=>{a.value={...l.mailDetail}},v=()=>{const u=C();c("save",u)},C=()=>({...a.value,...p.value,id:M(),to:l.mailDetail.to||l.mailDetail.from,sent:!0,archived:!1,trash:!1,spam:!1,starred:!1,important:!1,date:L()}),$=()=>{r.value=!r.value},M=()=>{let u="",n="0123456789";for(let g=0;g<5;g++)u+=n.charAt(Math.floor(Math.random()*n.length));return u},L=()=>new Date().toDateString().split(" ").slice(1,4).join(" ");return S(()=>l.dialogVisible,u=>{o.value=u}),S(()=>o.value,u=>{c("update:dialogVisible",u)}),(u,n)=>{const g=w("InputText"),j=w("Editor"),y=w("Button"),B=w("Dialog"),V=H("tooltip");return b(),J(B,{visible:o.value,"onUpdate:visible":n[5]||(n[5]=d=>o.value=d),header:"New Message",modal:"",class:"mx-3 sm:mx-0 sm:w-full md:w-8 lg:w-6",contentClass:"border-round-bottom border-top-1 surface-border p-0"},{default:K(()=>[s("div",ae,[s("div",se,[s("div",oe,[ne,s("span",ie,[re,m(g,{disabled:"",id:"to",type:"text",class:"w-full pl-7 text-900 font-semibold",style:{height:"3.5rem"},modelValue:a.value.from,"onUpdate:modelValue":n[0]||(n[0]=d=>a.value.from=d)},null,8,["modelValue"])])]),s("div",ue,[de,s("span",ce,[pe,m(g,{disabled:"",id:"subject",type:"text",placeholder:"Subject",class:"w-full pl-7 text-900 font-semibold",style:{height:"3.5rem"},modelValue:a.value.title,"onUpdate:modelValue":n[1]||(n[1]=d=>a.value.title=d)},null,8,["modelValue"])])]),r.value?(b(),_("div",me,[s("div",ve,I(a.value.message),1)])):F("",!0),s("div",fe,[P((b(),_("span",{class:"surface-ground cursor-pointer border-round px-2",onClick:n[2]||(n[2]=d=>$())},be)),[[V,r.value?"Hide content":"Show content"]]),m(j,{editorStyle:{height:"250px"},class:"mt-3",modelValue:p.value.message,"onUpdate:modelValue":n[3]||(n[3]=d=>p.value.message=d)},null,8,["modelValue"])])]),s("div",ge,[m(y,{type:"button",outlined:"",icon:"pi pi-image"}),m(y,{type:"button",outlined:"",icon:"pi pi-paperclip"}),m(y,{type:"button",class:"h-3rem",icon:"pi pi-send",label:"Send",onClick:n[4]||(n[4]=d=>v())})])])]),_:1},8,["visible"])}}},xe={class:"card"},ye={class:"flex flex-column md:flex-row gap-4"},we={class:"w-full md:w-3 xl:w-2 xl:p-3"},ke={class:"md:w-9 xl:w-10 xl:p-3"},Ve={__name:"Index",setup(k){const c=Q(),l=h([]),a=h({}),p=h("inbox"),r=h(!1),o=h(null),x=W();O(async()=>{p.value=x.path.split("/")[3],l.value=await C(),v(l.value)}),S(()=>x.path,e=>{p.value=e.split("/")[3]});const v=async e=>{$(e)},C=async()=>{const e=await fetch("/demo/data/mail.json"),{data:t}=await e.json();return t},$=e=>{for(const t of e)!t.archived&&!t.trash&&!t.spam&&!t.sent&&M("inbox",t),Object.keys(t).forEach(i=>{t[i]===!0&&M(i,t)})},M=(e,t)=>{a.value[e]?a.value[e].push(t):a.value[e]=[]},L=X(()=>{var t,i,f,A,N,T,E;const e=a.value;return[{label:"Inbox",icon:"pi pi-inbox",badge:((t=e.inbox)==null?void 0:t.length)||0,routerLink:"/apps/mail/inbox"},{label:"Starred",icon:"pi pi-star",badge:((i=e.starred)==null?void 0:i.length)||0,routerLink:"/apps/mail/starred"},{label:"Spam",icon:"pi pi-ban",badge:((f=e.spam)==null?void 0:f.length)||0,routerLink:"/apps/mail/spam"},{label:"Important",icon:"pi pi-bookmark",badge:((A=e.important)==null?void 0:A.length)||0,routerLink:"/apps/mail/important"},{label:"Sent",icon:"pi pi-send",badge:((N=e.sent)==null?void 0:N.length)||0,routerLink:"/apps/mail/sent"},{label:"Archived",icon:"pi pi-book",badge:((T=e.archived)==null?void 0:T.length)||0,routerLink:"/apps/mail/archived"},{label:"Trash",icon:"pi pi-trash",badge:((E=e.trash)==null?void 0:E.length)||0,routerLink:"/apps/mail/trash"}]}),u=async e=>{a.value={};const t=e.length>0?"Mails deleted":"Mail deleted";y("trash",e),c.add({severity:"info",summary:"Info",detail:t,life:3e3}),v(l.value)},n=async e=>{a.value={},e.forEach(t=>{l.value.find(i=>i.id===t.id).spam=!0}),v(l.value)},g=async e=>{a.value={},y("archived",e),v(l.value)},j=async(e,t,i)=>{a.value={},l.value.find(f=>f.id===t.id)[e]=i,v(l.value)},y=(e,t)=>{t.length>0?t.forEach(i=>{l.value.find(f=>f.id===i.id)[e]=!0}):l.value.find(i=>i.id===t.id)[e]=!0},B=e=>{r.value=!0,o.value=e},V=e=>{r.value=!1,o.value=null,a.value={},l.value.push(e),v(l.value)},d=e=>{a.value={},l.value.push(e),v(l.value)},q=e=>{r.value=e};return(e,t)=>{const i=w("router-view");return b(),_(U,null,[s("div",xe,[s("div",ye,[s("div",we,[m(le,{items:L.value},null,8,["items"])]),s("div",ke,[m(i,{allMails:l.value,mails:a.value[p.value]||void 0,onTrash:u,onSpam:n,onArchive:g,"onChange:mail:type":j,onReply:B,"onSend:message":V,"onNew:mail":d},null,8,["allMails","mails"])])])]),m(_e,{visible:r.value,"onUpdate:visible":t[0]||(t[0]=f=>r.value=f),"mail-detail":o.value,onSave:V,"onUpdate:dialogVisible":t[1]||(t[1]=f=>q())},null,8,["visible","mail-detail"])],64)}}};export{Ve as default};

import{r as x,I as C,q as I,w as E,b as c,d as _,e as N,f as t,g as o,y as S,x as T,t as l}from"./index-cd74998a.js";const H={class:"flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-5 pt-5 md:pt-0 gap-4 md:border-top-none border-top-1 surface-border"},L={class:"flex align-items-center md:justify-content-start"},R={class:"flex flex-column mx-3"},$={class:"block text-900 font-bold text-lg"},q={class:"block text-900 font-semibold"},z={class:"flex align-items-center justify-content-end column-gap-3 px-4 md:px-0"},U={class:"text-900 font-semibold white-space-nowrap mr-auto"},F={class:"surface-border border-1 border-round p-4"},G={class:"text-900 font-semibold text-lg mb-3"},J=["innerHTML"],K={class:"flex column-gap-3 justify-content-end mt-3"},P={__name:"Detail",props:{allMails:{type:Array,default:()=>[]}},emits:["send:message"],setup(h,{emit:y}){const d=h,e=x({}),i=x({message:""}),k=C(),p=I(),M=async()=>d.allMails.find(n=>parseInt(n.id)===parseInt(k.params.id));E(()=>d.allMails,async()=>{e.value=await M()},{immediate:!0});const w=()=>{const n={...e.value,...i.value,id:B(),sent:!0,archived:!1,trash:!1,spam:!1,starred:!1,important:!1,date:V()};y("send:message",n),p.push("/apps/mail/sent")},B=()=>{let n="",s="0123456789";for(let a=0;a<5;a++)n+=s.charAt(Math.floor(Math.random()*s.length));return n},V=()=>new Date().toDateString().split(" ").slice(1,4).join(" "),j=()=>{p.push({name:"mail-inbox"})};return(n,s)=>{var m,u,f,v,g,b;const a=c("Button"),D=c("Avatar"),A=c("Editor");return _(),N("div",null,[t("div",H,[t("div",L,[o(a,{type:"button",icon:"pi pi-chevron-left",class:"md:mr-3",text:"",plain:"",onClick:s[0]||(s[0]=r=>j())}),e.value&&e.value.image?(_(),S(D,{key:0,image:"/demo/images/avatar/"+e.value.image,size:"large",shape:"circle",class:"border-2 surface-border"},null,8,["image"])):T("",!0),t("div",R,[t("span",$,l((m=e.value)==null?void 0:m.from),1),t("span",q,"To: "+l(((u=e.value)==null?void 0:u.email)||((f=e.value)==null?void 0:f.to)),1)])]),t("div",z,[t("span",U,l((v=e.value)==null?void 0:v.date),1),o(a,{type:"button",icon:"pi pi-reply",class:"flex-shrink-0",text:"",plain:""}),o(a,{type:"button",icon:"pi pi-ellipsis-v",class:"flex-shrink-0",text:"",plain:""})])]),t("div",F,[t("div",G,l((g=e.value)==null?void 0:g.title),1),t("div",{class:"line-height-3 mt-0 mb-3",innerHTML:(b=e.value)==null?void 0:b.message},null,8,J),o(A,{modelValue:i.value.message,"onUpdate:modelValue":s[1]||(s[1]=r=>i.value.message=r),pt:{content:{style:{height:"250px"}}}},null,8,["modelValue"]),t("div",K,[o(a,{type:"button",outlined:"",icon:"pi pi-image"}),o(a,{type:"button",outlined:"",icon:"pi pi-paperclip"}),o(a,{type:"button",icon:"pi pi-send",label:"Send",onClick:s[2]||(s[2]=r=>w())})])])])}}};export{P as default};
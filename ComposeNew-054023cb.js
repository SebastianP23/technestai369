import{q as b,r as h,b as i,d as g,e as x,f as t,g as a,F as v}from"./index-cd74998a.js";const y={class:"flex align-items-center px-4 md:px-0 border-top-1 surface-border md:border-none pt-4 md:pt-0"},w=t("span",{class:"block text-900 font-bold text-xl"},"Compose Message",-1),V={class:"surface-section grid mt-4 grid-nogutter formgrid p-4 gap-3 md:surface-border md:border-1 border-round"},j={class:"col-12 field"},k=t("label",{for:"to",class:"text-900 font-semibold"},"To",-1),B={class:"p-input-icon-left w-full",style:{height:"3.5rem"}},M=t("i",{class:"pi pi-user",style:{left:"1.5rem"}},null,-1),S={class:"col-12 field"},C=t("label",{for:"Subject",class:"text-900 font-semibold"},"Subject",-1),D={class:"p-input-icon-left w-full",style:{height:"3.5rem"}},E=t("i",{class:"pi pi-pencil",style:{left:"1.5rem"}},null,-1),I={class:"col-12 field"},N={class:"col-12 flex column-gap-3 justify-content-end mt-7"},A=Object.assign({inheritAttrs:!1},{__name:"ComposeNew",emits:["new:mail"],setup(T,{emit:c}){const r=b(),s=h({}),u=()=>{r.push({name:"mail-inbox"})},m=()=>{const l={...s.value,id:p(),sent:!0,archived:!1,trash:!1,spam:!1,starred:!1,important:!1,date:f(),image:"amyelsner.png"};c("new:mail",l),r.push({name:"mail-inbox"})},p=()=>{let l="",e="0123456789";for(let n=0;n<5;n++)l+=e.charAt(Math.floor(Math.random()*e.length));return l},f=()=>new Date().toDateString().split(" ").slice(1,4).join(" ");return(l,e)=>{const n=i("Button"),d=i("InputText"),_=i("Editor");return g(),x(v,null,[t("div",y,[a(n,{type:"button",icon:"pi pi-chevron-left",class:"surface-border text-900 w-3rem h-3rem mr-3",outlined:"",severity:"secondary",onClick:e[0]||(e[0]=o=>u())}),w]),t("div",V,[t("div",j,[k,t("span",B,[M,a(d,{id:"to",type:"text",modelValue:s.value.to,"onUpdate:modelValue":e[1]||(e[1]=o=>s.value.to=o),class:"w-full pl-7 text-900 font-semibold",style:{height:"3.5rem"}},null,8,["modelValue"])])]),t("div",S,[C,t("span",D,[E,a(d,{id:"subject",type:"text",modelValue:s.value.title,"onUpdate:modelValue":e[2]||(e[2]=o=>s.value.title=o),placeholder:"Subject",class:"w-full pl-7 text-900 font-semibold",style:{height:"3.5rem"}},null,8,["modelValue"])])]),t("div",I,[a(_,{modelValue:s.value.message,"onUpdate:modelValue":e[3]||(e[3]=o=>s.value.message=o),editorStyle:" height: 250px "},null,8,["modelValue"])]),t("div",N,[a(n,{type:"button",class:"h-3rem w-full sm:w-auto",icon:"pi pi-send",label:"Send Message",onClick:e[4]||(e[4]=o=>m())})])])],64)}}});export{A as default};

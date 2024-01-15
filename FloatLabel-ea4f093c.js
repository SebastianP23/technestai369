import{C as D}from"./CountryService-74a64663.js";import{r as t,o as R,b as n,d as B,e as q,f as l,g as s,l as w}from"./index-cd74998a.js";const F={class:"card"},P=l("h5",null,"Float Label",-1),Y=l("p",null,[w("All input text components support floating labels by adding "),l("mark",null,"(.p-float-label)"),w(" to wrapper class.")],-1),E={class:"grid p-fluid mt-3"},G={class:"field col-12 md:col-4"},O={class:"p-float-label"},j=l("label",{for:"inputtext"},"InputText",-1),z={class:"field col-12 md:col-4"},H={class:"p-float-label"},J=l("label",{for:"autocomplete"},"AutoComplete",-1),K={class:"field col-12 md:col-4"},Q={class:"p-float-label p-input-icon-left"},W=l("i",{class:"pi pi-search"},null,-1),X=l("label",{for:"lefticon"},"Left Icon",-1),Z={class:"field col-12 md:col-4"},$={class:"p-float-label p-input-icon-right"},ll=l("label",{for:"righticon"},"Right Icon",-1),el=l("i",{class:"pi pi-spin pi-spinner"},null,-1),ol={class:"field col-12 md:col-4"},tl={class:"p-float-label"},sl=l("label",{for:"calendar"},"Calendar",-1),nl={class:"field col-12 md:col-4"},al={class:"p-float-label"},dl=l("label",{for:"chips"},"Chips",-1),ul={class:"field col-12 md:col-4"},il={class:"p-float-label"},pl=l("label",{for:"inputmask"},"InputMask",-1),cl={class:"field col-12 md:col-4"},ml={class:"p-float-label"},_l=l("label",{for:"inputnumber"},"InputNumber",-1),rl={class:"field col-12 md:col-4"},vl={class:"p-inputgroup"},fl=l("span",{class:"p-inputgroup-addon"},[l("i",{class:"pi pi-user"})],-1),Vl={class:"p-float-label"},bl=l("label",{for:"inputgroup"},"InputGroup",-1),hl={class:"field col-12 md:col-4"},xl={class:"p-float-label"},gl=l("label",{for:"dropdown"},"Dropdown",-1),Cl={class:"field col-12 md:col-4"},Il={class:"p-float-label"},Ul=l("label",{for:"multiselect"},"MultiSelect",-1),wl={class:"field col-12 md:col-4"},yl={class:"p-float-label"},kl=l("label",{for:"textarea"},"Textarea",-1),Tl={__name:"FloatLabel",setup(Ll){const p=t([]),c=t([{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]),m=t(null),_=t(null),r=t(null),v=t(null),f=t(null),V=t(null),b=t(null),h=t(null),x=t(null),g=t(null),C=t(null),I=t(null),U=t(null),y=new D;R(()=>{y.getCountries().then(u=>p.value=u)});const k=u=>{const e=[],a=u.query;for(let d=0;d<p.value.length;d++){const i=p.value[d];i.name.toLowerCase().indexOf(a.toLowerCase())==0&&e.push(i)}m.value=e};return(u,e)=>{const a=n("InputText"),d=n("AutoComplete"),i=n("Calendar"),L=n("Chips"),N=n("InputMask"),M=n("InputNumber"),T=n("Dropdown"),S=n("MultiSelect"),A=n("Textarea");return B(),q("div",F,[P,Y,l("div",E,[l("div",G,[l("span",O,[s(a,{type:"text",id:"inputtext",modelValue:_.value,"onUpdate:modelValue":e[0]||(e[0]=o=>_.value=o)},null,8,["modelValue"]),j])]),l("div",z,[l("span",H,[s(d,{id:"autocomplete",modelValue:r.value,"onUpdate:modelValue":e[1]||(e[1]=o=>r.value=o),suggestions:m.value,onComplete:e[2]||(e[2]=o=>k(o)),field:"name"},null,8,["modelValue","suggestions"]),J])]),l("div",K,[l("span",Q,[W,s(a,{type:"text",id:"lefticon",modelValue:v.value,"onUpdate:modelValue":e[3]||(e[3]=o=>v.value=o)},null,8,["modelValue"]),X])]),l("div",Z,[l("span",$,[s(a,{type:"text",id:"righticon",modelValue:f.value,"onUpdate:modelValue":e[4]||(e[4]=o=>f.value=o)},null,8,["modelValue"]),ll,el])]),l("div",ol,[l("span",tl,[s(i,{inputId:"calendar",modelValue:V.value,"onUpdate:modelValue":e[5]||(e[5]=o=>V.value=o)},null,8,["modelValue"]),sl])]),l("div",nl,[l("span",al,[s(L,{inputId:"chips",modelValue:b.value,"onUpdate:modelValue":e[6]||(e[6]=o=>b.value=o)},null,8,["modelValue"]),dl])]),l("div",ul,[l("span",il,[s(N,{id:"inputmask",mask:"99/99/9999",modelValue:h.value,"onUpdate:modelValue":e[7]||(e[7]=o=>h.value=o)},null,8,["modelValue"]),pl])]),l("div",cl,[l("span",ml,[s(M,{id:"inputnumber",modelValue:x.value,"onUpdate:modelValue":e[8]||(e[8]=o=>x.value=o)},null,8,["modelValue"]),_l])]),l("div",rl,[l("div",vl,[fl,l("span",Vl,[s(a,{type:"text",id:"inputgroup",modelValue:g.value,"onUpdate:modelValue":e[9]||(e[9]=o=>g.value=o)},null,8,["modelValue"]),bl])])]),l("div",hl,[l("span",xl,[s(T,{id:"dropdown",options:c.value,modelValue:C.value,"onUpdate:modelValue":e[10]||(e[10]=o=>C.value=o),optionLabel:"name"},null,8,["options","modelValue"]),gl])]),l("div",Cl,[l("span",Il,[s(S,{id:"multiselect",options:c.value,modelValue:I.value,"onUpdate:modelValue":e[11]||(e[11]=o=>I.value=o),optionLabel:"name",filter:!1},null,8,["options","modelValue"]),Ul])]),l("div",wl,[l("span",yl,[s(A,{inputId:"textarea",rows:"3",cols:"30",modelValue:U.value,"onUpdate:modelValue":e[12]||(e[12]=o=>U.value=o)},null,8,["modelValue"]),kl])])])])}}};export{Tl as default};

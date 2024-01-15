import{P as k}from"./ProductService-74c45874.js";import{r as o,o as I,b as d,d as U,e as N,f as e,g as l,h as s,t as n,l as u}from"./index-cd74998a.js";const K={class:"grid"},j={class:"col-12"},M={class:"card"},H=e("h5",null,"DataView",-1),$={class:"flex flex-column md:flex-row md:justify-content-between gap-2"},z={class:"p-input-icon-left"},A=e("i",{class:"pi pi-search"},null,-1),E={class:"col-12"},W={class:"flex flex-column md:flex-row align-items-center p-3 w-full"},q=["src","alt"],G={class:"flex-1 flex flex-column align-items-center text-center md:text-left"},J={class:"font-bold text-2xl"},Q={class:"mb-2"},X={class:"flex align-items-center mt-1"},Y=e("i",{class:"pi pi-tag mr-2"},null,-1),Z={class:"font-semibold"},P={class:"flex flex-row md:flex-column justify-content-between w-full md:w-auto align-items-center md:align-items-end mt-5 md:mt-0"},ee={class:"text-2xl font-semibold mb-2 align-self-center md:align-self-end"},te={class:"col-12 md:col-4"},ae={class:"card m-3 border-1 surface-border"},le={class:"flex flex-wrap gap-2 align-items-center justify-content-between mb-2"},ne={class:"flex align-items-center"},oe=e("i",{class:"pi pi-tag mr-2"},null,-1),se={class:"font-semibold"},ie={class:"text-center flex align-items-center flex-column -mb-3"},de=["src","alt"],ce={class:"text-2xl font-bold"},ue={class:"mb-3"},re={class:"flex align-items-center justify-content-between"},me={class:"text-2xl font-semibold"},_e={class:"col-12 xl:col-8"},ve={class:"card"},pe=e("h5",null,"PickList",-1),ge={class:"col-12 xl:col-4"},he={class:"card"},fe=e("h5",null,"OrderList",-1),Ve={__name:"List",setup(xe){const x=o([[{name:"San Francisco",code:"SF"},{name:"London",code:"LDN"},{name:"Paris",code:"PRS"},{name:"Istanbul",code:"IST"},{name:"Berlin",code:"BRL"},{name:"Barcelona",code:"BRC"},{name:"Rome",code:"RM"}],[]]),b=o([{name:"San Francisco",code:"SF"},{name:"London",code:"LDN"},{name:"Paris",code:"PRS"},{name:"Istanbul",code:"IST"},{name:"Berlin",code:"BRL"},{name:"Barcelona",code:"BRC"},{name:"Rome",code:"RM"}]),m=o(null),_=o("grid"),v=o(""),p=o(null),r=o(null),g=o(null),h=o(null),O=o([{label:"Price High to Low",value:"!price"},{label:"Price Low to High",value:"price"}]),L=new k;I(()=>{L.getProductsSmall().then(i=>m.value=i)});const T=i=>{const a=i.value.value,c=i.value;a.indexOf("!")===0?(g.value=-1,h.value=a.substring(1,a.length),r.value=c):(g.value=1,h.value=a,r.value=c)},B=i=>{const a=i.target.value;if(v.value=a,a.length===0)p.value=null;else{const c=m.value.filter(f=>f.name.toLowerCase().includes(a.toLowerCase()));p.value=c}},y=i=>({OUTOFSTOCK:"danger",LOWSTOCK:"warning",INSTOCK:"success"})[i];return(i,a)=>{const c=d("Dropdown"),f=d("InputText"),C=d("DataViewLayoutOptions"),V=d("Rating"),w=d("Button"),S=d("Tag"),F=d("DataView"),R=d("PickList"),D=d("OrderList");return U(),N("div",K,[e("div",j,[e("div",M,[H,l(F,{value:p.value||m.value,layout:_.value,paginator:!0,rows:9,sortOrder:g.value,sortField:h.value},{header:s(()=>[e("div",$,[e("div",null,[l(c,{modelValue:r.value,"onUpdate:modelValue":a[0]||(a[0]=t=>r.value=t),options:O.value,optionLabel:"label",placeholder:"Sort By Price",onChange:a[1]||(a[1]=t=>T(t))},null,8,["modelValue","options"])]),e("span",z,[A,l(f,{modelValue:v.value,"onUpdate:modelValue":a[2]||(a[2]=t=>v.value=t),onInput:B,placeholder:"Search by Name"},null,8,["modelValue"])]),e("div",null,[l(C,{modelValue:_.value,"onUpdate:modelValue":a[3]||(a[3]=t=>_.value=t)},null,8,["modelValue"])])])]),list:s(t=>[e("div",E,[e("div",W,[e("img",{src:"/demo/images/product/"+t.data.image,alt:t.data.name,class:"my-4 md:my-0 w-9 md:w-10rem shadow-2 mr-5"},null,8,q),e("div",G,[e("div",J,n(t.data.name),1),e("div",Q,n(t.data.description),1),l(V,{modelValue:t.data.rating,readonly:!0,cancel:!1,class:"mb-2"},null,8,["modelValue"]),e("div",X,[Y,e("span",Z,n(t.data.category),1)])]),e("div",P,[e("span",ee,"$"+n(t.data.price),1),l(w,{icon:"pi pi-shopping-cart",size:"small",label:"Add to Cart",disabled:t.data.inventoryStatus==="OUTOFSTOCK",class:"mb-2"},null,8,["disabled"]),l(S,{severity:y(t.data.inventoryStatus)},{default:s(()=>[u(n(t.data.inventoryStatus),1)]),_:2},1032,["severity"])])])])]),grid:s(t=>[e("div",te,[e("div",ae,[e("div",le,[e("div",ne,[oe,e("span",se,n(t.data.category),1)]),l(S,{severity:y(t.data.inventoryStatus)},{default:s(()=>[u(n(t.data.inventoryStatus),1)]),_:2},1032,["severity"])]),e("div",ie,[e("img",{src:"/demo/images/product/"+t.data.image,alt:t.data.name,class:"w-9 shadow-2 my-3 mx-0"},null,8,de),e("div",ce,n(t.data.name),1),e("div",ue,n(t.data.description),1),l(V,{modelValue:t.data.rating,readonly:!0,cancel:!1},null,8,["modelValue"])]),e("div",re,[e("span",me,"$"+n(t.data.price),1),l(w,{icon:"pi pi-shopping-cart",disabled:t.data.inventoryStatus==="OUTOFSTOCK"},null,8,["disabled"])])])])]),_:1},8,["value","layout","sortOrder","sortField"])])]),e("div",_e,[e("div",ve,[pe,l(R,{modelValue:x.value,"onUpdate:modelValue":a[4]||(a[4]=t=>x.value=t),listStyle:"height:250px"},{sourceheader:s(()=>[u(" From ")]),targetheader:s(()=>[u(" To ")]),item:s(t=>[e("div",null,n(t.item.name),1)]),_:1},8,["modelValue"])])]),e("div",ge,[e("div",he,[fe,l(D,{modelValue:b.value,"onUpdate:modelValue":a[5]||(a[5]=t=>b.value=t),listStyle:"height:250px"},{header:s(()=>[u(" Cities ")]),item:s(t=>[e("div",null,n(t.item.name),1)]),_:1},8,["modelValue"])])])])}}};export{Ve as default};

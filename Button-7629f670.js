import{r,b as p,d as _,e as v,f as s,g as e,h as u}from"./index-cd74998a.js";const h="/demo/images/logo-white.svg",y="/demo/images/logo.svg",b={class:"grid"},g={class:"col-12 md:col-6"},f={class:"card"},m=s("h5",null,"Default",-1),x={class:"flex flex-wrap gap-2"},k={class:"card"},w=s("h5",null,"Severities",-1),S={class:"flex flex-wrap gap-2"},B={class:"card"},D=s("h5",null,"Text",-1),P={class:"flex flex-wrap gap-2"},C={class:"card"},I=s("h5",null,"Outlined",-1),R={class:"flex flex-wrap gap-2"},W={class:"card"},T=s("h5",null,"Button Group",-1),$={class:"flex flex-wrap gap-2"},H={class:"p-buttonset"},V={class:"card"},L=s("h5",null,"SplitButton",-1),N={class:"flex flex-wrap gap-2"},O={class:"card"},E=s("h5",null,"Templating",-1),G={class:"flex flex-wrap gap-2"},U=s("img",{alt:"logo",src:h,style:{width:"1.5rem"}},null,-1),j=s("img",{alt:"logo",src:y,style:{width:"1.5rem"}},null,-1),q=s("span",{class:"ml-2 text-bold"},"PrimeVue",-1),z={class:"col-12 md:col-6"},A={class:"card"},F=s("h5",null,"Icons",-1),J={class:"flex flex-wrap gap-2"},K={class:"card"},M=s("h5",null,"Raised",-1),Q={class:"flex flex-wrap gap-2"},X={class:"card"},Y=s("h5",null,"Rounded",-1),Z={class:"flex flex-wrap gap-2"},ee={class:"card"},ie=s("h5",null,"Rounded Icons",-1),se={class:"flex flex-wrap gap-2"},le={class:"card"},oe=s("h5",null,"Rounded Text",-1),te={class:"flex flex-wrap gap-2"},ne={class:"card"},ae=s("h5",null,"Rounded Outlined",-1),de={class:"flex flex-wrap gap-2"},ce={class:"card"},re=s("h5",null,"Loading",-1),pe={class:"flex flex-wrap gap-2"},ve={__name:"Button",setup(ue){const t=r([{label:"Update",icon:"pi pi-refresh"},{label:"Delete",icon:"pi pi-times"},{separator:!0},{label:"Home",icon:"pi pi-home"}]),o=r([!1,!1,!1]),a=d=>{o.value[d]=!0,setTimeout(()=>o.value[d]=!1,1e3)};return(d,l)=>{const i=p("Button",!0),n=p("SplitButton");return _(),v("div",b,[s("div",g,[s("div",f,[m,s("div",x,[e(i,{label:"Submit"}),e(i,{label:"Disabled",disabled:!0}),e(i,{label:"Link",link:""})])]),s("div",k,[w,s("div",S,[e(i,{label:"Primary"}),e(i,{label:"Secondary",severity:"secondary"}),e(i,{label:"Success",severity:"success"}),e(i,{label:"Info",severity:"info"}),e(i,{label:"Warning",severity:"warning"}),e(i,{label:"Danger",severity:"danger"})])]),s("div",B,[D,s("div",P,[e(i,{label:"Primary",text:""}),e(i,{label:"Secondary",text:"",severity:"secondary"}),e(i,{label:"Success",text:"",severity:"success"}),e(i,{label:"Info",text:"",severity:"info"}),e(i,{label:"Warning",text:"",severity:"warning"}),e(i,{label:"Help",text:"",severity:"help"}),e(i,{label:"Danger",text:"",severity:"danger"}),e(i,{label:"Plain",text:"",plain:""})])]),s("div",C,[I,s("div",R,[e(i,{label:"Primary",outlined:""}),e(i,{label:"Secondary",outlined:"",severity:"secondary"}),e(i,{label:"Success",outlined:"",severity:"success"}),e(i,{label:"Info",outlined:"",severity:"info"}),e(i,{label:"Warning",outlined:"",severity:"warning"}),e(i,{label:"Help",outlined:"",severity:"help"}),e(i,{label:"Danger",outlined:"",severity:"danger"})])]),s("div",W,[T,s("div",$,[s("span",H,[e(i,{label:"Save",icon:"pi pi-check"}),e(i,{label:"Delete",icon:"pi pi-trash"}),e(i,{label:"Cancel",icon:"pi pi-times"})])])]),s("div",V,[L,s("div",N,[e(n,{label:"Save",icon:"pi pi-check",model:t.value,severity:"secondary"},null,8,["model"]),e(n,{label:"Save",icon:"pi pi-check",model:t.value,severity:"success"},null,8,["model"]),e(n,{label:"Save",icon:"pi pi-check",model:t.value,severity:"info"},null,8,["model"]),e(n,{label:"Save",icon:"pi pi-check",model:t.value,severity:"warning"},null,8,["model"]),e(n,{label:"Save",icon:"pi pi-check",model:t.value,severity:"danger"},null,8,["model"])])]),s("div",O,[E,s("div",G,[e(i,{type:"button"},{default:u(()=>[U]),_:1}),e(i,{type:"button",outlined:"",severity:"success"},{default:u(()=>[j,q]),_:1})])])]),s("div",z,[s("div",A,[F,s("div",J,[e(i,{icon:"pi pi-star-fill"}),e(i,{label:"Bookmark",icon:"pi pi-bookmark"}),e(i,{label:"Bookmark",icon:"pi pi-bookmark",iconPos:"right"})])]),s("div",K,[M,s("div",Q,[e(i,{label:"Primary",raised:""}),e(i,{label:"Secondary",raised:"",severity:"secondary"}),e(i,{label:"Success",raised:"",severity:"success"}),e(i,{label:"Info",raised:"",severity:"info"}),e(i,{label:"Warning",raised:"",severity:"warning"}),e(i,{label:"Danger",raised:"",severity:"danger"})])]),s("div",X,[Y,s("div",Z,[e(i,{label:"Primary",rounded:""}),e(i,{label:"Secondary",rounded:"",severity:"secondary"}),e(i,{label:"Success",rounded:"",severity:"success"}),e(i,{label:"Info",rounded:"",severity:"info"}),e(i,{label:"Warning",rounded:"",severity:"warning"}),e(i,{label:"Danger",rounded:"",severity:"danger"})])]),s("div",ee,[ie,s("div",se,[e(i,{icon:"pi pi-star-fill",rounded:""}),e(i,{icon:"pi pi-bookmark",rounded:"",severity:"secondary"}),e(i,{icon:"pi pi-check",rounded:"",severity:"success"}),e(i,{icon:"pi pi-search",rounded:"",severity:"info"}),e(i,{icon:"pi pi-user",rounded:"",severity:"warning"}),e(i,{icon:"pi pi-sign-out",rounded:"",severity:"danger"})])]),s("div",le,[oe,s("div",te,[e(i,{icon:"pi pi-check",rounded:"",text:""}),e(i,{icon:"pi pi-bookmark",rounded:"",text:"",severity:"secondary"}),e(i,{icon:"pi pi-search",rounded:"",text:"",severity:"success"}),e(i,{icon:"pi pi-user",rounded:"",text:"",severity:"info"}),e(i,{icon:"pi pi-bell",rounded:"",text:"",severity:"warning"}),e(i,{icon:"pi pi-heart",rounded:"",text:"",severity:"help"}),e(i,{icon:"pi pi-times",rounded:"",text:"",severity:"danger"}),e(i,{icon:"pi pi-filter",rounded:"",text:"",severity:"plain"})])]),s("div",ne,[ae,s("div",de,[e(i,{icon:"pi pi-check",rounded:"",outlined:""}),e(i,{icon:"pi pi-bookmark",rounded:"",outlined:"",severity:"secondary"}),e(i,{icon:"pi pi-search",rounded:"",outlined:"",severity:"success"}),e(i,{icon:"pi pi-user",rounded:"",outlined:"",severity:"info"}),e(i,{icon:"pi pi-bell",rounded:"",outlined:"",severity:"warning"}),e(i,{icon:"pi pi-heart",rounded:"",outlined:"",severity:"help"}),e(i,{icon:"pi pi-times",rounded:"",outlined:"",severity:"danger"})])]),s("div",ce,[re,s("div",pe,[e(i,{type:"button",label:"Search",icon:"pi pi-search",loading:o.value[0],onClick:l[0]||(l[0]=c=>a(0))},null,8,["loading"]),e(i,{type:"button",label:"Search",icon:"pi pi-search",iconPos:"right",loading:o.value[1],onClick:l[1]||(l[1]=c=>a(1))},null,8,["loading"]),e(i,{type:"button",icon:"pi pi-search",loading:o.value[2],onClick:l[2]||(l[2]=c=>a(2))},null,8,["loading"]),e(i,{type:"button",label:"Search",loading:o.value[3],onClick:l[3]||(l[3]=c=>a(3))},null,8,["loading"])])])])])}}};export{ve as default};

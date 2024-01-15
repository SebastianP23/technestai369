import{_ as p,a as g}from"./appname-gray-61bd8446.js";import{u,q as h,r as _,b as n,d as x,e as f,f as t,B as e,g as o,h as i,k as b,j as w,l as c}from"./index-cd74998a.js";const y={class:"login-image w-6 h-screen hidden md:block",style:{"max-width":"490px"}},v=["src"],k={class:"w-full",style:{background:"var(--surface-ground)"}},C={class:"p-fluid min-h-screen bg-auto md:bg-contain bg-no-repeat text-center w-full flex align-items-center md:align-items-start justify-content-center flex-column bg-auto md:bg-contain bg-no-repeat",style:{padding:"20% 10% 20% 10%",background:"var(--exception-pages-image)"}},B={class:"flex flex-column"},N={class:"flex align-items-center mb-6 logo-container"},S=["src"],P=["src"],V={class:"form-container text-left",style:{"max-width":"320px","min-width":"270px"}},T=t("h4",{class:"m-0 mb-2"},"New Password",-1),j=t("span",{class:"block text-600 font-medium mb-4"},"Enter your new password",-1),E={class:"p-input-icon-left"},I=t("i",{class:"pi pi-key"},null,-1),q={class:"p-input-icon-left"},z=t("i",{class:"pi pi-key"},null,-1),H={class:"button-container mt-4",style:{"max-width":"320px","min-width":"270px"}},L={class:"buttons flex align-items-center gap-3"},R=w('<div class="login-footer flex align-items-center absolute" style="bottom:75px;"><div class="flex align-items-center login-footer-logo-container pr-4 mr-4 border-right-1 surface-border"><img src="'+p+'" class="login-footer-logo" style="width:22px;"><img src="'+g+'" class="login-footer-appname ml-2" style="width:45px;"></div><span class="text-sm text-color-secondary mr-3">Copyright 2023</span></div>',1),K={__name:"NewPassword",setup(A){const{layoutConfig:s}=u(),r=h(),d=_(!1),m=()=>{r.push("/")};return(D,F)=>{const l=n("InputText"),a=n("Button");return x(),f("div",{class:b("login-body flex min-h-screen  "+(e(s).colorScheme.value==="light"?"layout-light":"layout-dark"))},[t("div",y,[t("img",{src:"/demo/images/pages/newpassword-"+(e(s).colorScheme.value==="dark"?"ondark":"onlight")+".png",alt:"atlantis",class:"h-screen w-full"},null,8,v)]),t("div",k,[t("div",C,[t("div",B,[t("div",N,[t("img",{src:"/layout/images/logo/logo-"+(e(s).colorScheme.value==="light"?"dark":"light")+".png",class:"login-logo",style:{width:"45px"}},null,8,S),t("img",{src:"/layout/images/logo/appname-"+(e(s).colorScheme.value==="light"?"dark":"light")+".png",class:"login-appname ml-3",style:{width:"100px"}},null,8,P)]),t("div",V,[T,j,t("span",E,[I,o(l,{type:"password",autocomplete:"off",placeholder:"Password",class:"block mb-3",style:{"max-width":"320px","min-width":"270px"}})]),t("span",q,[z,o(l,{type:"password",autocomplete:"off",placeholder:"Password",class:"block mb-3",style:{"max-width":"320px","min-width":"270px"}})])]),t("div",H,[t("div",L,[o(a,{type:"button",onClick:m,class:"block",severity:"danger",outlined:"",style:{"max-width":"320px","margin-bottom":"32px"}},{default:i(()=>[c("Cancel")]),_:1}),o(a,{type:"button",onClick:d.value,class:"block",style:{"max-width":"320px","margin-bottom":"32px"}},{default:i(()=>[c("Submit")]),_:1},8,["onClick"])])])]),R])])],2)}}};export{K as default};
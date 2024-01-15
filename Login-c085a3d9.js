import{_ as d,a as p}from"./appname-gray-61bd8446.js";import{u as m,b as n,d as g,e as u,f as t,B as o,g as s,h,k as _,l as i,j as x}from"./index-cd74998a.js";const f={class:"login-image w-6 h-screen hidden md:block",style:{"max-width":"490px"}},y=["src"],b={class:"login-panel w-full",style:{background:"var(--surface-ground)"}},v={class:"p-fluid min-h-screen bg-auto md:bg-contain bg-no-repeat text-center w-full flex align-items-center md:align-items-start justify-content-center flex-column bg-auto md:bg-contain bg-no-repeat",style:{padding:"20% 10% 20% 10%",background:"var(--exception-pages-image)"}},w={class:"flex flex-column"},k={class:"flex align-items-center mb-6 logo-container"},B=["src"],C=["src"],S={class:"form-container"},N={class:"p-input-icon-left"},V=t("i",{class:"pi pi-envelope"},null,-1),L={class:"p-input-icon-left"},T=t("i",{class:"pi pi-key"},null,-1),j=t("a",{href:"#",class:"flex text-color-secondary mb-4 text-sm"},"Forgot your password?",-1),E={class:"button-container"},$=t("span",{class:"flex text-sm text-color-secondary"},[i("Don’t have an account?"),t("a",{class:"cursor-pointer ml-1"},"Sign-up here")],-1),z=x('<div class="login-footer flex align-items-center absolute" style="bottom:75px;"><div class="flex align-items-center login-footer-logo-container pr-4 mr-4 border-right-1 surface-border"><img src="'+d+'" class="login-footer-logo" style="width:22px;"><img src="'+p+'" class="login-footer-appname ml-2" style="width:45px;"></div><span class="text-sm text-color-secondary mr-3">Copyright 2023</span></div>',1),A={__name:"Login",setup(D){const{layoutConfig:e}=m();return(c,l)=>{const a=n("inputText"),r=n("Button");return g(),u("div",{class:_("login-body flex min-h-screen "+(o(e).colorScheme.value==="light"?"layout-light":"layout-dark"))},[t("div",f,[t("img",{src:"/demo/images/pages/login-"+(o(e).colorScheme.value==="dark"?"ondark":"onlight")+".png",alt:"atlantis",class:"h-screen w-full"},null,8,y)]),t("div",b,[t("div",v,[t("div",w,[t("div",k,[t("img",{src:"/layout/images/logo/logo-"+(o(e).colorScheme.value==="light"?"dark":"light")+".png",class:"login-logo",style:{width:"45px"}},null,8,B),t("img",{src:"/layout/images/logo/appname-"+(o(e).colorScheme.value==="light"?"dark":"light")+".png",class:"login-appname ml-3",style:{width:"100px"}},null,8,C)]),t("div",S,[t("span",N,[V,s(a,{type:"text",autocomplete:"off",placeholder:"Email",class:"block mb-3",style:{"max-width":"320px","min-width":"270px"}})]),t("span",L,[T,s(a,{type:"password",autocomplete:"off",placeholder:"Password",class:"block mb-3",style:{"max-width":"320px","min-width":"270px"}})]),j]),t("div",E,[s(r,{type:"button",onClick:l[0]||(l[0]=F=>c.$router.push("/")),class:"block",style:{"max-width":"320px","margin-bottom":"32px"}},{default:h(()=>[i("Login")]),_:1}),$])]),z])])],2)}}};export{A as default};
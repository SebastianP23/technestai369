import{P as g,r,b as c,c as q,d as t,e as o,f as e,F as u,s as d,g as w,h as p,i as I,k as m,t as y,y as k}from"./index-cd74998a.js";const C=e("div",{class:"card"},[e("div",{class:"text-900 font-bold text-xl mb-3"},"Frequently Asked Questions"),e("p",{class:"text-600 line-height-3"},"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.")],-1),A={class:"flex flex-column md:flex-row gap-5"},D={class:"card mb-0 md:w-20rem"},B=e("div",{class:"text-900 block font-bold mb-3"},"Categories",-1),F={class:"list-none m-0 p-0"},H=["onClick"],V={class:"card flex-1"},N=e("p",{class:"line-height-3 m-0 p-0"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1),E={__name:"Faq",setup(P,{expose:v}){const h=g();v({$primevue:h});const s=r(0),n=r([{label:"General",icon:"pi pi-fw pi-info-circle",questions:["Is there a trial period?","Do I need to sign up with credit card?","Is the subscription monthly or annual?","How many tiers are there?"]},{label:"Mailing",icon:"pi pi-fw pi-envelope",questions:["How do I setup my account?","Is there a limit on mails to send?","What is my inbox size?","How can I add attachements?"]},{label:"Support",icon:"pi pi-fw pi-question-circle",questions:["How can I get support?","What is the response time?","Is there a community forum?","Is live chat available?"]},{label:"Billing",icon:"pi pi-fw pi-credit-card",questions:["Will I receive an invoice?","How to provide my billing information?","Is VAT included?","Can I receive PDF invoices?"]}]),_=l=>{s.value=l};return(l,T)=>{const f=c("AccordionTab"),b=c("Accordion"),x=q("ripple");return t(),o("div",null,[C,e("div",A,[e("div",D,[B,e("ul",F,[(t(!0),o(u,null,d(n.value,(a,i)=>(t(),o("li",{key:i,onClick:W=>_(i),class:"mb-2"},[I((t(),o("a",{class:m(["p-ripple flex align-items-center cursor-pointer select-none p-3 transition-colors transition-duration-150 border-round",{"bg-primary":s.value===i,"hover:surface-hover":s.value!==i}])},[e("i",{class:m(["mr-2 text-lg",a.icon])},null,2),e("span",null,y(a.label),1)],2)),[[x]])],8,H))),128))])]),e("div",V,[w(b,null,{default:p(()=>[(t(!0),o(u,null,d(n.value[s.value].questions,(a,i)=>(t(),k(f,{key:i,header:a},{default:p(()=>[N]),_:2},1032,["header"]))),128))]),_:1})])])])}}};export{E as default};

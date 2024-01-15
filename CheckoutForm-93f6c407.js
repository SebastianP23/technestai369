import{C as g}from"./CountryService-74a64663.js";import{r as o,o as y,b as n,d as w,e as k,f as e,g as s,j as c}from"./index-cd74998a.js";const C="/demo/images/ecommerce/shop/shop-1.png",V="/demo/images/ecommerce/shop/flag.png",B={class:"card"},I={class:"grid grid-nogutter"},j=e("div",{class:"col-12 px-4 mt-4 md:mt-6 md:px-6"},[e("span",{class:"text-900 block font-bold text-xl"},"Checkout")],-1),N={class:"col-12 lg:col-6 h-full px-4 py-4 md:px-6"},S=c('<ul class="flex list-none flex-wrap p-0 mb-6"><li class="flex align-items-center text-primary mr-2">Cart <i class="pi pi-chevron-right text-500 text-xs ml-2"></i></li><li class="flex align-items-center text-500 mr-2">Information<i class="pi pi-chevron-right text-500 text-xs ml-2"></i></li><li class="flex align-items-center text-500 mr-2">Shipping<i class="pi pi-chevron-right text-500 text-xs ml-2"></i></li><li class="flex align-items-center text-500 mr-2">Payment</li></ul>',1),U={class:"grid formgrid"},L={class:"col-12 field mb-6"},P=e("span",{class:"text-900 text-2xl block font-medium mb-5"},"Contact Information",-1),A=e("input",{id:"email",placeholder:"Email",type:"text",class:"p-inputtext w-full mb-4"},null,-1),E={class:"field-checkbox"},F=e("label",{for:"checkbox-1"},"Email me with news and offers",-1),T={class:"col-12 field mb-4"},$=e("span",{class:"text-900 text-2xl block font-medium mb-5"},"Shipping",-1),D=c('<div class="col-12 lg:col-6 field mb-4"><input id="name" placeholder="Name" type="text" class="p-inputtext w-full"></div><div class="col-12 lg:col-6 field mb-4"><input id="lastname" placeholder="Last Name" type="text" class="p-inputtext w-full"></div><div class="col-12 field mb-4"><input id="address" placeholder="Address" type="text" class="p-inputtext w-full"></div><div class="col-12 field mb-4"><input id="address2" placeholder="Apartment, suite, etc" type="text" class="p-inputtext w-full"></div><div class="col-12 lg:col-6 field mb-4"><input id="pc" placeholder="Postal Code" type="text" class="p-inputtext w-full"></div><div class="col-12 lg:col-6 field mb-4"><input id="city" placeholder="City" type="text" class="p-inputtext w-full"></div>',6),R={class:"col-12 lg:col-6 field mb-4"},q={class:"field-checkbox"},z=e("label",{for:"checkbox-2"},"Save for next purchase",-1),M={class:"col-12 flex flex-column lg:flex-row justify-content-center align-items-center lg:justify-content-end my-6"},Y={class:"col-12 lg:col-6 px-4 py-4 md:px-6"},G=e("div",{class:"pb-3 surface-border"},[e("span",{class:"text-900 font-medium text-xl"},"Your Cart")],-1),H={class:"flex flex-column lg:flex-row flex-wrap lg:align-items-center py-2 mt-3 surface-border"},J=e("img",{src:C,class:"w-8rem h-8rem flex-shrink-0 mb-3",alt:"product"},null,-1),K={class:"flex-auto lg:ml-3"},O=e("div",{class:"flex align-items-center justify-content-between mb-3"},[e("span",{class:"text-900 font-bold"},"Product Name"),e("span",{class:"text-900 font-bold"},"$123.00")],-1),Q=e("div",{class:"text-600 text-sm mb-3"},"Black | Large",-1),W={class:"flex flex-auto justify-content-between align-items-center"},X={class:"py-2 mt-3 surface-border"},Z={class:"p-inputgroup mb-3"},ee=c('<div class="py-2 mt-3"><div class="flex justify-content-between align-items-center mb-3"><span class="text-900 font-medium">Subtotal</span><span class="text-900">$123.00</span></div><div class="flex justify-content-between align-items-center mb-3"><span class="text-900 font-medium">Shipping</span><span class="text-primary font-bold">Free</span></div><div class="flex justify-content-between align-items-center mb-3"><span class="text-900 font-bold">Total</span><span class="text-900 font-medium text-xl">$123.00</span></div></div><div class="py-2 mt-3 bg-yellow-100 flex align-items-center justify-content-center border-round"><img src="'+V+'" class="mr-2" alt="Country Flag"><span class="text-black-alpha-90 font-medium">No additional duties or taxes.</span></div>',2),oe={__name:"CheckoutForm",setup(te){const a=o(""),d=o([1,1,1]),r=o(!0),p=o(!0),u=o(null),m=o([]),b=new g;return y(()=>{b.getCountries().then(x=>m.value=x)}),(x,t)=>{const f=n("Checkbox"),h=n("Dropdown"),i=n("Button"),_=n("InputNumber"),v=n("InputText");return w(),k("div",B,[e("div",I,[j,e("div",N,[S,e("div",U,[e("div",L,[P,A,e("div",E,[s(f,{name:"checkbox-1",modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=l=>r.value=l),binary:"",inputId:"checkbox-1"},null,8,["modelValue"]),F])]),e("div",T,[$,s(h,{options:m.value,modelValue:u.value,"onUpdate:modelValue":t[1]||(t[1]=l=>u.value=l),placeholder:"Country / Region",optionLabel:"name",showClear:"",class:"w-full"},null,8,["options","modelValue"])]),D,e("div",R,[e("div",q,[s(f,{name:"checkbox-2",modelValue:p.value,"onUpdate:modelValue":t[2]||(t[2]=l=>p.value=l),binary:"",inputId:"checkbox-2"},null,8,["modelValue"]),z])]),e("div",M,[s(i,{class:"mt-3 lg:mt-0 w-full lg:w-auto flex-order-2 lg:flex-order-1 lg:mr-4",severity:"secondary",outlined:"",label:"Return to Cart",icon:"pi pi-fw pi-arrow-left"}),s(i,{class:"w-full lg:w-auto flex-order-1 lg:flex-order-2",label:"Continue to Shipping",icon:"pi pi-fw pi-check"})])])]),e("div",Y,[G,e("div",H,[J,e("div",K,[O,Q,e("div",W,[s(_,{showButtons:"",buttonLayout:"horizontal",min:0,inputClass:"w-2rem text-center py-2 px-1 border-transparent outline-none shadow-none",modelValue:d.value[0],"onUpdate:modelValue":t[3]||(t[3]=l=>d.value[0]=l),class:"border-1 surface-border border-round",decrementButtonClass:"p-button-text text-600 hover:text-primary py-1 px-1",incrementButtonClass:"p-button-text text-600 hover:text-primary py-1 px-1",incrementButtonIcon:"pi pi-plus",decrementButtonIcon:"pi pi-minus"},null,8,["modelValue"]),s(i,{icon:"pi pi-trash",text:"",rounded:""})])])]),e("div",X,[e("div",Z,[s(v,{type:"text",modelValue:a.value,"onUpdate:modelValue":t[4]||(t[4]=l=>a.value=l),placeholder:"Promo code",class:"w-full"},null,8,["modelValue"]),s(i,{type:"button",label:"Apply",disabled:!a.value},null,8,["disabled"])])]),ee])])])}}};export{oe as default};
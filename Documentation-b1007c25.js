import{_ as s,d as c,e as o,j as a,p as i,m as n,f as t}from"./index-cd74998a.js";const l={},r=e=>(i("data-v-4f7c68c4"),e=e(),n(),e),d={class:"card docs"},p=a(`<h2 data-v-4f7c68c4>Getting Started</h2><p data-v-4f7c68c4> Atlantis is an application template for Vue 3 based on <a href="https://github.com/vuejs/create-vue" class="font-medium text-primary hover:underline" data-v-4f7c68c4>create-vue</a>, the recommended way to start a <strong data-v-4f7c68c4>Vite-powered</strong> Vue projects. To get started, extract the contents of the zip file, cd to the directory and install the dependencies with npm or yarn. </p><pre class="app-code" data-v-4f7c68c4><code data-v-4f7c68c4>npm install</code></pre><p data-v-4f7c68c4>Next step is running the application using the serve script and navigate to <i data-v-4f7c68c4>http://localhost:5173/</i> to view the application. That is it, you may now start with the development using the Atlantis template.</p><pre class="app-code" data-v-4f7c68c4><code data-v-4f7c68c4>npm run dev</code></pre><h4 data-v-4f7c68c4>Structure</h4><p data-v-4f7c68c4>Atlantis consists of a couple folders, demos and layout have been separated so that you can easily remove what is not necessary for your application.</p><ul class="line-height-3" data-v-4f7c68c4><li data-v-4f7c68c4><span class="text-primary font-medium" data-v-4f7c68c4>src/layout</span>: Main layout files, need to be present</li><li data-v-4f7c68c4><span class="text-primary font-medium" data-v-4f7c68c4>src/views</span>: Demo pages</li><li data-v-4f7c68c4><span class="text-primary font-medium" data-v-4f7c68c4>public/demo</span>: Assets used in demos</li><li data-v-4f7c68c4><span class="text-primary font-medium" data-v-4f7c68c4>public/layout</span>: Assets used in layout</li><li data-v-4f7c68c4><span class="text-primary font-medium" data-v-4f7c68c4>src/assets/demo</span>: Styles used in demos</li><li data-v-4f7c68c4><span class="text-primary font-medium" data-v-4f7c68c4>src/assets/layout</span>: SCSS files of the main layout</li></ul><h4 data-v-4f7c68c4>Default Configuration</h4><p data-v-4f7c68c4> Initial layout configuration can be defined at the main app component by injecting the composable from <span class="text-primary font-medium" data-v-4f7c68c4>src/layout/composables/layout</span>, this step is optional and only necessary when customizing the defaults. Note that <span class="text-primary font-medium" data-v-4f7c68c4>theme</span> and <span class="text-primary font-medium" data-v-4f7c68c4>scale</span> are not reactive at the moment since theme is configured outside of Vue at <strong class="font-semibold" data-v-4f7c68c4>index.html</strong> by default and initial scale is defined with the <span class="text-primary font-medium" data-v-4f7c68c4>$scale</span> at <strong class="font-semibold" data-v-4f7c68c4>layout.scss</strong>. When default theme or scale is changed at their files initially, it is required to configure the layout service with the matching values to avoid sync issues. </p><pre class="app-code" data-v-4f7c68c4><code data-v-4f7c68c4>&lt;script setup&gt;
import { useLayout } from &#39;@/layout/composables/layout&#39;;

const { layoutConfig } = useLayout();
layoutConfig.menuMode.value = &#39;slim&#39;;
&lt;/script&gt;

&lt;template&gt;
    &lt;router-view /&gt;
&lt;/template&gt;

&lt;style scoped&gt;&lt;/style&gt;
</code></pre><h4 data-v-4f7c68c4>Menu</h4><p data-v-4f7c68c4> Main menu is located at <span class="text-primary font-medium" data-v-4f7c68c4>src/layout/AppMenu.vue</span> file. Update the <span class="text-primary font-medium" data-v-4f7c68c4>model</span> property to define the menu of your application using PrimeVue MenuModel API. </p><pre class="app-code" data-v-4f7c68c4><code data-v-4f7c68c4>&lt;script setup&gt;
import { ref } from &#39;vue&#39;;

import AppSubMenu from &#39;./AppSubMenu.vue&#39;;

const model = ref([
    {
        label: &#39;Dashboards&#39;,
        icon: &#39;pi pi-home&#39;,
        items: [
            {
                label: &#39;E-Commerce&#39;,
                icon: &#39;pi pi-fw pi-home&#39;,
                to: &#39;/&#39;
            }
        ]
    },
    //...
</code></pre><h4 data-v-4f7c68c4>Breadcrumb</h4><p data-v-4f7c68c4>Breadcrumb component at the topbar section is dynamic and retrieves the path information from the router using the <span class="text-primary font-medium" data-v-4f7c68c4>meta.breadcrumb</span> property.</p><pre class="app-code" data-v-4f7c68c4><code data-v-4f7c68c4>{
    path: &#39;/uikit/formlayout&#39;,
    name: &#39;formlayout&#39;,
    meta: {
        breadcrumb: [&#39;UI Kit&#39;, &#39;Form Layout&#39;]
    },
    component: () =&gt; import(&#39;@/views/uikit/FormLayout.vue&#39;)
},</code></pre><h4 data-v-4f7c68c4>Integration with Existing Vite Applications</h4><p data-v-4f7c68c4>Only the folders that are related to the layout needs to move in to your project. We&#39;ve created a short tutorial with details. It is based on Sakai but flow is exactly the same with Atlantis.</p>`,19),m=r(()=>t("div",{class:"video-container"},[t("iframe",{class:"video",width:"560",height:"315",src:"https://www.youtube.com/embed/AHeSjJFR3ZE",frameborder:"0",allowfullscreen:""})],-1)),u=a(`<h4 data-v-4f7c68c4>Component Theme</h4><p data-v-4f7c68c4> Atlantis provides 16 PrimeVue themes out of the box. Setup of a theme is simple by including the css of theme to your bundle that are located inside <span class="text-primary font-medium" data-v-4f7c68c4>public/layout/styles/theme/</span> folder such as <span class="text-primary font-medium" data-v-4f7c68c4>public/layout/styles/theme/theme-light/blue/theme.css</span>. </p><p data-v-4f7c68c4>A custom theme can be developed by the following steps.</p><ul data-v-4f7c68c4><li class="line-height-4" data-v-4f7c68c4>Choose a custom theme name such as &quot;mytheme&quot;.</li><li class="line-height-4" data-v-4f7c68c4>Create a folder named &quot;mytheme&quot; under <span class="font-semibold" data-v-4f7c68c4>public/layout/styles/theme/theme-light/mytheme</span> folder.</li><li class="line-height-4" data-v-4f7c68c4>Create a file such as theme.scss inside your &quot;mytheme&quot; folder.</li><li class="line-height-4" data-v-4f7c68c4>Define the variables listed below in your file and import the dependencies.</li><li class="line-height-4" data-v-4f7c68c4> Include the theme.scss in your application via an import in <i data-v-4f7c68c4>src/assets/styles.scss</i>or simply refer to the compiled css with a link tag. Note that if you choose the former, the theme will be bundled with the rest of your app. </li></ul><p data-v-4f7c68c4>Here are the variables required to create a theme.</p><pre class="app-code" data-v-4f7c68c4><code data-v-4f7c68c4>
$primaryColor: #ec4dbc;
$primaryLightColor: scale-color($primaryColor, $lightness: 60%) !default;
$primaryDarkColor: scale-color($primaryColor, $lightness: -10%) !default;
$primaryDarkerColor: scale-color($primaryColor, $lightness: -20%) !default;
$primaryTextColor: #ffffff;
$primary500: #ec4dbc !default;

@import &#39;../_variables&#39;;
@import &#39;../../theme-base/_components&#39;;
@import &#39;../_extensions&#39;;</code></pre><h4 data-v-4f7c68c4>Theme Switcher</h4><p data-v-4f7c68c4> Dynamic theming is built-in to the template and implemented by including the theme via a link tag instead of bundling the theme along with a configurator component to switch it. In order to switch your theme dynamically as well, it needs to be compiled to css. An example sass command to compile the css would be; </p><pre class="app-code" data-v-4f7c68c4><code data-v-4f7c68c4>sass --update public/layout/styles/theme/theme-light/mytheme.scss:public/layout/styles/theme/theme-light/mytheme.css</code></pre><p class="text-sm" data-v-4f7c68c4>*Note: The sass command above is supported by Dart Sass. Please use Dart Sass instead of Ruby Sass.</p><h4 data-v-4f7c68c4>Theme Designer</h4><p data-v-4f7c68c4> Atlantis includes a simplified version of the <a href="https://www.primefaces.org/designer/primevue" data-v-4f7c68c4>PrimeVue Theme Designer</a> that only includes the main SASS structure. Full list of SASS variables to customize the components further is available at the <a href="https://www.primefaces.org/designer/api/primevue/3.9.0/" class="font-medium text-primary hover:underline" data-v-4f7c68c4>SASS API</a> docs. </p><h4 data-v-4f7c68c4>Migration</h4><p data-v-4f7c68c4> Initial integration with an existing Vite application and the migration process is similar. During an update, only the layout folder and layout assets folder need to be updated, see the &quot;Integration with Existing Vite Applications&quot; section for more information. Important changes are also documented at CHANGELOG.md file. </p>`,14),h=[p,m,u];function f(e,v){return c(),o("div",d,h)}const g=s(l,[["render",f],["__scopeId","data-v-4f7c68c4"]]);export{g as default};

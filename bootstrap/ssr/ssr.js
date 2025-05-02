import { _ as __vite_glob_0_14, a as __vite_glob_0_13, b as __vite_glob_0_12, c as __vite_glob_0_11, d as __vite_glob_0_10, e as __vite_glob_0_9, f as __vite_glob_0_8, g as __vite_glob_0_7, h as __vite_glob_0_6, i as __vite_glob_0_5, j as __vite_glob_0_4, k as __vite_glob_0_3, l as __vite_glob_0_2, m as __vite_glob_0_1, n as __vite_glob_0_0 } from "./assets/Studio-CJia58dh.js";
import { createInertiaApp } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
import { createSSRApp, h } from "vue";
import "vue/server-renderer";
import "@heroicons/vue/24/outline/index.js";
import "gsap";
import "gsap/ScrollToPlugin.js";
import "imask";
import "axios";
import "vue-toast-notification";
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Development.vue": __vite_glob_0_0, "./Pages/Dilesta/Components/About.vue": __vite_glob_0_1, "./Pages/Dilesta/Components/Services.vue": __vite_glob_0_2, "./Pages/Dilesta/Dilesta.vue": __vite_glob_0_3, "./Pages/Errors/Error.vue": __vite_glob_0_4, "./Pages/Index/Components/CompaniesSection.vue": __vite_glob_0_5, "./Pages/Index/Components/GroupSection.vue": __vite_glob_0_6, "./Pages/Index/Components/TitleComponent.vue": __vite_glob_0_7, "./Pages/Index/Index.vue": __vite_glob_0_8, "./Pages/Module/Components/About.vue": __vite_glob_0_9, "./Pages/Module/Components/Example.vue": __vite_glob_0_10, "./Pages/Module/Module.vue": __vite_glob_0_11, "./Pages/Studio/Components/About.vue": __vite_glob_0_12, "./Pages/Studio/Components/Services.vue": __vite_glob_0_13, "./Pages/Studio/Studio.vue": __vite_glob_0_14 });
      return pages[`./Pages/${name}.vue`];
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h(App, props)
      }).use(plugin);
    }
  })
);

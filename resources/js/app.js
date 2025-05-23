import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import {MotionPlugin} from "@vueuse/motion";
import ToastPlugin from 'vue-toast-notification';
import { ZiggyVue } from 'ziggy-js'
import { Ziggy } from './ziggy.js'
import 'vue-toast-notification/dist/theme-bootstrap.css';
import '../css/app.css';

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
        return pages[`./Pages/${name}.vue`]
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(MotionPlugin)
            .use(ToastPlugin)
            .use(Ziggy, ZiggyVue)
            .mount(el)
    },
})

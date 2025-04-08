import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import vuePlugin from "@vitejs/plugin-vue";
import path from 'path'
import Components from 'unplugin-vue-components/vite'
import MotionResolver from 'motion-v/resolver'

export default defineConfig({
    plugins: [
        vuePlugin(),
        tailwindcss(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            ssr: 'resources/js/ssr.js',
            refresh: true,
        }),
        Components({
            dts: true, // генерирует файл с декларациями для автокомплита
            resolvers: [
                MotionResolver()
            ],
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js')
        }
    },
    optimizeDeps: {
        include: ['']
    }
});

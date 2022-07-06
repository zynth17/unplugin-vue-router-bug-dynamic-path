import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueRouter from "unplugin-vue-router/vite";
import Layouts from "vite-plugin-vue-layouts";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        VueRouter({
            dts: true,
            routesFolder: "src/pages",
        }),
        Layouts({
            defaultLayout: "default",
            layoutsDirs: "layouts",
        }),
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
});
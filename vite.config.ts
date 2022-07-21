import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Components from "unplugin-vue-components/vite";
import EnvironmentPlugin from "vite-plugin-environment";
import ssr from "vite-plugin-ssr/plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    ssr(),
    EnvironmentPlugin("all", { prefix: "VITE_" }),
    Components({
      dirs: ["./src"],

      // valid file extensions for pages.
      extensions: ["vue"],
      // search for subdirectories
      deep: true,
      // resolvers for custom pages
      resolvers: [],

      // generate `pages.d.ts` global declrations,
      // also accepts a path for custom filename
      dts: true,

      // Allow subdirectories as namespace prefix for pages.
      directoryAsNamespace: false,
      // Subdirectory paths for ignoring namespace prefixes
      // works when `directoryAsNamespace: true`
      globalNamespaces: [],

      // filters for transforming targets
      include: [/\.vue$/, /\.vue\?vue/],
      exclude: [/node_modules/, /\.git/, /\.nuxt/],
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/scss/global.scss";`,
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});

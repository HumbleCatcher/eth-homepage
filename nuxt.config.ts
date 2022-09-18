import { NuxtConfig } from "@nuxt/types";

const config: NuxtConfig = {
  router: {
    base: process.env.NODE_ENV === "production" ? "/~aellison" : "/",
  },
  head: {
    meta: [
      {
        charset: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        name: "theme-color",
        content: "#000",
      },
    ],
    script: [],
  },
  buildModules: ["@nuxt/typescript-build", "@nuxtjs/vuetify"],
  target: "static",
  vuetify: {
    customVariables: ["~/assets/styles/vuetify.scss"],
    optionsPath: "~/vuetify.options.ts",
    treeShake: true,
  },
  css: ["~/assets/styles/main.sass", "katex/dist/katex.min.css"],
  plugins: ["~/plugins/Katex.ts"],
};

export default config;

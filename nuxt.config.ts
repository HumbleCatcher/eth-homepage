import { NuxtConfig } from "@nuxt/types";

const config: NuxtConfig = {
  components: true,
  router: {
    base: process.env.NODE_ENV === "production" ? "/~aellison" : "/",
    middleware: ["redirects"],
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
    // link: [
    //   {
    //     rel: "stylesheet",
    //     href: "//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/github-dark.min.css",
    //   },
    // ],
    // script: [
    //   {
    //     src: "//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js",
    //   },
    // ],
  },
  buildModules: ["@nuxt/typescript-build", "@nuxtjs/vuetify"],
  modules: [["nuxt-highlightjs", { style: "github-dark" }]],
  target: "static",
  vuetify: {
    customVariables: ["~/assets/styles/vuetify.scss"],
    optionsPath: "~/vuetify.options.ts",
    treeShake: true,
  },
  css: ["~/assets/styles/main.sass", "katex/dist/katex.min.css"],
  plugins: ["~/plugins/Injections.ts"],
};

export default config;

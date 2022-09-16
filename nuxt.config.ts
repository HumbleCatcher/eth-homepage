export default {
  router: {
    base: process.env.NODE_ENV === "production" ? "/~aellison" : "/",
  },
  head: {
    script: [
      {
        src: "https://polyfill.io/v3/polyfill.min.js?features=es6",
      },
      {
        type: "text/javascript",
        id: "MathJax-script",
        async: "",
        src: "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js",
      },
    ],
  },
  buildModules: ["@nuxt/typescript-build", "@nuxtjs/vuetify"],
  target: "static",
  vuetify: {
    customVariables: ["~/assets/styles/vuetify.scss"],
    optionsPath: "~/vuetify.options.ts",
    treeShake: true,
  },
  css: ["~/assets/styles/main.sass"],
};

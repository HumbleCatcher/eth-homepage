import katex from "katex";
import { Plugin } from "@nuxt/types";

declare module "vue/types/vue" {
  interface Vue {
    $katex(tex: string): string;
  }
}

declare module "@nuxt/types" {
  interface Context {
    $katex(tex: string): string;
  }
}

const p: Plugin = (_, inject) => {
  inject("katex", (tex: string) => katex.renderToString(tex));
};

export default p;

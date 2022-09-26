import katex from "katex";
import path from "path";
import { Plugin } from "@nuxt/types";

declare module "vue/types/vue" {
  interface Vue {
    $katex(tex: string): string;
    $static(p: string): string;
  }
}

declare module "@nuxt/types" {
  interface Context {
    $katex(tex: string): string;
    $static(p: string): string;
  }
}

const p: Plugin = ({ app }, inject) => {
  inject("katex", (tex: string) => katex.renderToString(tex));
  inject("static", (p: string) => path.join(app.router?.options.base || "", p));
};

export default p;

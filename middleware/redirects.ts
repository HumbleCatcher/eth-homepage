import { Middleware } from "@nuxt/types";

const redirects: Middleware = (context) => {
  const redirects: Record<string, string> = {
    "/truth-tabler": "/logic-tools",
  };
  const p = context.route.path;
  if (p in redirects) {
    context.redirect(301, redirects[p]);
  }
};

export default redirects;

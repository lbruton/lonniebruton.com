// Serves the static site from ./public and canonicalizes www → apex.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === "www.lonniebruton.com") {
      url.hostname = "lonniebruton.com";
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};

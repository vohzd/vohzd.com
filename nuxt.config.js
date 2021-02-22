module.exports = {
  axios: {
    baseURL: "/",
    proxyHeaders: false,
    credentials: true
  },
  build: {
    optimizeCSS: true
  },
  head: {
    title: "Vohzd | Full Stack JS Developer",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "identifier-url", name: "identifier-url", content: "https://vohzd.com" },
      { hid: "title", name: "title", content: "Vohzd.com" },
      { hid: "language", name: "language", content: "EN" }
    ],
    link: [
      { rel: "canonical", href: "https://vohzd.com" }
    ],
    script: [{ src: "https://stats.vohzd.com/tracker.js", async: true, defer: true, "data-ackee-server": "https://stats.vohzd.com", "data-ackee-domain-id": "dce33bdd-6d52-4b8c-bd66-31225e08408e" }]
  },
  loading: { color: '#2a4b55' },
  markdownit: {
    injected: true,
    breaks: true
  },
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxtjs/markdownit",
    "@nuxtjs/sitemap",
  ],
  plugins: [
    "~/plugins/time-filter.js",
    "~/plugins/fontawesome.js",
    { src:'~/plugins/dragscroll.js', mode: "client" },
  ],
  serverMiddleware: [
    { path: "/api", handler: "~/api/index.js" }
  ],
  sitemap: {
    hostname: "https://vohzd.com",
    gzip: true
  }
}

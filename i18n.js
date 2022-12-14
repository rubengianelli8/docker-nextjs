module.exports = {
  locales: ["en-US", "es"],
  defaultLocale: "es",
  localeDetection: true,
  "pages": {
    "*": ["common", "errors"],
    "/": ["index"]
  },
  loadLocaleFrom: (lang, ns) =>
    // You can use a dynamic import, fetch, whatever. You should
    // return a Promise with the JSON file.
    import(`./src/locales/${lang}/${ns}.json`).then((m) => m.default),
};

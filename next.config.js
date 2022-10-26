const withPlugins = require("next-compose-plugins");
const nextTranslate = require("next-translate");
// https://github.com/vercel/next.js/discussions/15341
const withTM = require("next-transpile-modules")([
  "swagger-ui-react",
  "swagger-client",
  "react-syntax-highlighter",
]);
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["platform-lookaside.fbsbx.com"],
  },
  experimental: {
    outputStandalone: true,
  },
  webpack: (config, { isServer, webpack }) => {
    if (isServer) {
      config.externals.push("_http_common");
    }
    return config;
  },
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
};
module.exports = withPlugins(
  [[withTM, { transpileModules: [] }], nextTranslate],
  nextConfig
);

const { createProxyMiddleware } = require("http-proxy-middleware");
const { env } = require("process");

const target =
  process.env.NODE_ENV === "development"
    ? "https://localhost:7043/api"
    : "https://webapp-230221130957.azurewebsites.net/api";

const context = [
  "/weatherforecast",
  "/_configuration",
  "/.well-known",
  "/Identity",
  "/connect",
  "/ApplyDatabaseMigrations",
  "/_framework",
  "/api",
];

module.exports = function (app) {
  const appProxy = createProxyMiddleware(context, {
    target: target,
    secure: false,
    headers: {
      Connection: "Keep-Alive",
    },
  });

  app.use(appProxy);
};

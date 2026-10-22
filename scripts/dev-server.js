const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");

const webpackConfig = require("../webpack/webpack.config.js")({ env: "dev" });
const compiler = webpack(webpackConfig);
const app = express();
const devMiddleware = webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath || "/",
});

app.use(devMiddleware);

const port = Number(process.env.PORT || 8080);
const server = app.listen(port, () => {
  console.log(`Development server listening at http://localhost:${port}`);
});

server.on("error", (error) => {
  console.error("Development server failed to start:", error);
  process.exitCode = 1;
});

function shutdown() {
  server.close(() => {
    devMiddleware.close(() => process.exit(0));
  });
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

const sass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");

const withPlugins = require('next-compose-plugins');

module.exports = withCSS(
  sass({
    webpack(config, options) {
      config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 100000
          }
        },
      });
      return config;
    }
  })
);
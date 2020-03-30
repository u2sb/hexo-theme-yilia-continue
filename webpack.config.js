const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const minifyHTML = {
  collapseWhitespace: true,
  removeComments: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  useShortDoctype: true,
  collapseInlineTagWhitespace: true,
  minifyJS: true,
  minifyCSS: true
};

module.exports = {
  entry: {
    main: "./source-src/js/main.js",
    slider: "./source-src/js/slider.js",
    mobile: ["@babel/polyfill", "./source-src/js/mobile.js"]
  },
  output: {
    path: __dirname + "/source/assets/",
    publicPath: "./",
    filename: "[name].[chunkhash:6].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader?cacheDirectory",
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: "html"
      },
      {
        test: /\.(scss|sass|css)$/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            "css-loader",
            "postcss-loader",
            {
              loader: "sass-loader",
              options: {
                implementation: require("sass"),
                sassOptions: {
                  outputStyle: "compressed"
                }
              }
            }
          ]
        })
      },
      {
        test: /\.(gif|jpg|png)\??.*$/,
        loader: "url-loader?limit=500&name=img/[name].[ext]"
      },
      {
        test: /\.(woff|svg|eot|ttf)\??.*$/,
        loader: "file-loader?name=fonts/[name].[hash:6].[ext]"
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      verbose: true,
      dry: false
    }),
    new ExtractTextPlugin("[name].[chunkhash:6].css"),
    new HtmlWebpackPlugin({
      inject: false,
      cache: false,
      minify: minifyHTML,
      template: "./source-src/script.ejs",
      filename: "../../layout/_partial/script.ejs"
    }),
    new HtmlWebpackPlugin({
      inject: false,
      cache: false,
      minify: minifyHTML,
      template: "./source-src/main.ejs",
      filename: "../../layout/_partial/main.ejs"
    }),
    new HtmlWebpackPlugin({
      inject: false,
      cache: false,
      minify: minifyHTML,
      template: "./source-src/css.ejs",
      filename: "../../layout/_partial/css.ejs"
    })
  ],
  watch: false
};

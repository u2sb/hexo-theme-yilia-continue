const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const minifyHTML = {
  collapseWhitespace: true,
  removeComments: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  useShortDoctype: true,
  collapseInlineTagWhitespace: true,
  minifyJS: false,
  minifyCSS: false,
};

module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false, //不将注释提取到单独的文件中
      }),
    ],
  },
  entry: {
    main: "./source-src/js/main.js",
    slider: "./source-src/js/slider.js",
    mobile: ["@babel/polyfill", "./source-src/js/mobile.js"],
    assetsLoader: {
      import: "async-assets-loader",
      library: {
        name: "asyncAssetsLoader",
        type: "umd",
      },
    },
  },
  output: {
    path: __dirname + "/source/assets/",
    publicPath: "./",
    filename: "[name].[chunkhash:6].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader?cacheDirectory",
        },
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: {
          loader: "html",
        },
      },
      {
        test: /\.(scss|sass|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
              sassOptions: {
                outputStyle: "compressed",
              },
            },
          },
        ],
      },
      {
        test: /\.(gif|jpg|png)\??.*$/,
        type: "asset/resource",
        generator: {
          filename: "img/[name].[hash:6][ext]",
        },
        // use: {
        //   loader: "url-loader?limit=500&name=img/[name].[ext]",
        // },
      },
      {
        test: /\.(woff|svg|eot|ttf)\??.*$/,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name].[hash:6][ext]",
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      verbose: true,
      dry: false,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash:6].css",
    }),
    new HtmlWebpackPlugin({
      inject: false,
      cache: false,
      minify: minifyHTML,
      template: "./source-src/script.ejs",
      filename: "../../layout/_partial/script.ejs",
    }),
    new HtmlWebpackPlugin({
      inject: false,
      cache: false,
      minify: minifyHTML,
      template: "./source-src/css.ejs",
      filename: "../../layout/_partial/css.ejs",
    }),
    new HtmlWebpackPlugin({
      inject: false,
      cache: false,
      minify: minifyHTML,
      template: "./source-src/load-script.ejs",
      filename: "../../layout/_partial/load-script.ejs",
    }),
  ],
  watch: false,
};

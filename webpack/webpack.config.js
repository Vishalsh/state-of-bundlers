const Webpack = require("webpack");
const HtmlWelpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production",
  devServer: {
    port: 8081,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWelpackPlugin({
      template: "./public/index.html",
    }),
    new Webpack.SourceMapDevToolPlugin({
      filename: '[name].js.map',
      exclude: ['vendor.bundle.js'],
    }),
  ],
  entry: {
    index: "../app/index.js",
  },
  output: {
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
        options: {
          name: "assets/[name].[ext]",
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      terserOptions: {
        compress: true
      }
    })],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};

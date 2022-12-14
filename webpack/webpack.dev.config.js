const HtmlWelpackPlugin = require("html-webpack-plugin");
const dependencies = require('../package.json').dependencies;

module.exports = {
  mode: "development",
  devServer: {
    port: 8081,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWelpackPlugin({
      template: "./public/index.html",
    }),
  ],
  entry: {
    index: { import: '../app/index.js' },
    vendor: Object.keys(dependencies),
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
  resolve: {
    extensions: [".js", ".jsx"],
  },
};

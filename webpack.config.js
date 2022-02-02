const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  //entry: archivo de inicio
  entry: "./src/index.js",
  //ruta y nombre del compilado
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  // extensiones que usa el proyecto
  resolve: {
    extensions: [".js", ".jsx"],
  },
  // reglas del modulo
  module: {
    rules: [
      //identificar arch js/jsx
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      //identificar arch html
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "assets/[name].css",
    }),
    new Dotenv(),
  ],
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    historyApiFallback: true,
    port: 3005,
  },
};

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/js/index.js",
    login: "./src/js/login.js",
    cart: "./src/js/cartPage.js",
    checkout: "./src/js/checkoutPage.js",
    menu: "./src/js/menu.js",
    contact: "./src/js/contact.js",
  },

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "/",
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[name][ext]",
        },
      },
    ],
  },

  plugins: [
    // Copy static images into dist/assets/images
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/assets/images"),
          to: "assets/images",
        },
      ],
    }),

    // Home Page
    new HtmlWebpackPlugin({
      template: "./src/pages/index.html",
      filename: "index.html",
      chunks: ["main"],
    }),

    // Login Page
    new HtmlWebpackPlugin({
      template: "./src/pages/login.html",
      filename: "login.html",
      chunks: ["login"],
    }),

    // Cart Page
    new HtmlWebpackPlugin({
      template: "./src/pages/cart.html",
      filename: "cart.html",
      chunks: ["cart"],
    }),

    // Checkout Page
    new HtmlWebpackPlugin({
      template: "./src/pages/checkout.html",
      filename: "checkout.html",
      chunks: ["checkout"],
    }),

    // Menu Page
    new HtmlWebpackPlugin({
      template: "./src/pages/menu.html",
      filename: "menu.html",
      chunks: ["menu"],
    }),

    // Contact Page
    new HtmlWebpackPlugin({
      template: "./src/pages/contact.html",
      filename: "contact.html",
      chunks: ["contact"],
    }),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 8080,
    open: true,
    hot: true,
  },
};
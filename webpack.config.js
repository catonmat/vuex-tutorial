const path = require("path");

// require("es6-promise").polyfill();

module.exports = {
  entry: "./main.js",

  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },

  module: {
    loaders: [
      { loader: "vue", test: /\.vue$/ },
      { loader: "babel-loader", test: /\.js$/, exclude: /node_modules/ }
    ]
  }
};

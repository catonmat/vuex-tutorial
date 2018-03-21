const path = require("path");
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: "./main.js",

  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },

  module: {
    loaders: [
      { loader: "vue-loader", test: /\.vue$/ },
      { loader: "babel-loader", test: /\.js$/, exclude: /node_modules/ }
    ]
  },

  externals: [nodeExternals()]
};

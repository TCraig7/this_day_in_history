const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    main: "./lib/index.js",
    test: "mocha-loader!./test/index-test.js"
  },
  output: {
    path: __dirname,
    filename: "[name].bundle.js"
  },
  mode: 'development',
  module: {
   rules: [
     { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
     { test: /\.css$/, exclude: /node_modules/, use: 'style-loader!css-loader' },
     { test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader"] },
   ]
  },
  resolve: {
    extensions: ['.js', '.json', '.css', '.scss']
  }
};

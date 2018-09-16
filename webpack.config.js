var path = require('path');

module.exports = {
  devtool: 'inline-source-map',

  entry: {
    bundle: "./src/index.tsx"
  },

  output: {
    filename: "./dist/[name].js",
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },

  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
};


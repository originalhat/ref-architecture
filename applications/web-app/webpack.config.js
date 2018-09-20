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
      },

      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "typings-for-css-modules-loader",
            options: {
              modules: true,
              namedExport: true,
              localIdentName: "[local]___[hash:base64:8]"
            }
          }
        ]
      }
    ]
  },

  optimization: {
    splitChunks: {
      chunks: "all"
    }
  }
};


const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: {
      import: './src/index.js'
    },
    header: {
      import: './src/header.js'
    },
    footer: {
      import: './src/footer.js'
    },
    home: {
      import: './src/main.js'
    }
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    runtimeChunk: "single",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
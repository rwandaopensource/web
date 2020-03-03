const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const mode = process.env.NODE_ENV;
const DIST_DIR = resolve(__dirname, 'dist');
const SRC_DIR = resolve(__dirname, 'src');
const PUBLIC_DIR = resolve(__dirname, 'public');
const isProduction = mode === 'production'

module.exports = {
  entry: {
    main: ['@babel/polyfill', resolve(SRC_DIR, 'index.js')]
  },
  mode,
  output: {
    path: DIST_DIR,
    filename: 'index.js',
    publicPath: '/'
  },
  devServer: {
    hot: !isProduction,
    contentBase: PUBLIC_DIR,
    https: isProduction,
    port: 8000,
    historyApiFallback: {
      disableDotRule: true,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(PUBLIC_DIR, 'index.html'),
      inject: true,
    })
  ],
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name]-[hash:8].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(sc|c|sa)ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
    ]
  }
};

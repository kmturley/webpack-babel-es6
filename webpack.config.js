const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

const OUTPUT_FOLDER = 'dist';

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, OUTPUT_FOLDER),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin([
      { from: './src/index.html' },
    ]),
  ],
  devServer: {
    contentBase: './' + OUTPUT_FOLDER,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-proposal-class-properties'],
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        exclude: /node_modules/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'nunjucks-loader'
      }
    ],
  },
};

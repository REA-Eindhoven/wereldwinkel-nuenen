const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
  },
  module: {
      rules: [
          {
          test: /\.(scss)$/,
          use: [
          {
            // inject CSS to page
            loader: 'style-loader'
          }, {
            // translates CSS into CommonJS modules
            loader: 'css-loader'
          }, {
            // Run postcss actions
            loader: 'postcss-loader',
            options: {
              // `postcssOptions` is needed for postcss 8.x;
              // if you use postcss 7.x skip the key
              postcssOptions: {
                // postcss plugins, can be exported to postcss.config.js
                plugins: function () {
                  return [
                    require('autoprefixer')
                  ];
                }
              }
            }
          }, {
            // compiles Sass to CSS
            loader: 'sass-loader'
          }]
          }
      ]
    },
    plugins: [new HtmlWebpackPlugin({
      template: './src/index.html'
    })],
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      // compress: true,
      // port: 9000,
    }
  }
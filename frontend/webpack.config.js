const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
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
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }),
      new HtmlWebpackPlugin({
        template: './src/pages/producten.html',
        filename: './producten/index.html'
      }),
      new HtmlWebpackPlugin({
        template: './src/pages/producten/food.html',
        filename: './producten/food/index.html'
      }),
      new HtmlWebpackPlugin({
        template: './src/pages/producten/geluk.html',
        filename: './producten/geluk/index.html'
      }),
      new HtmlWebpackPlugin({
        template: './src/pages/producten/interieur.html',
        filename: './producten/interieur/index.html'
      }),
      new HtmlWebpackPlugin({
        template: './src/pages/producten/kind-product.html',
        filename: './producten/kind-product/index.html'
      }),
      new HtmlWebpackPlugin({
        template: './src/pages/producten/kunst.html',
        filename: './producten/kunst/index.html'
      }),
      new HtmlWebpackPlugin({
        template: './src/pages/producten/mand.html',
        filename: './producten/mand/index.html'
      }),
      new HtmlWebpackPlugin({
        template: './src/pages/producten/sieraden-sjaals.html',
        filename: './producten/sieraden-sjaals/index.html'
      }),
      new HtmlWebpackPlugin({
        template: './src/pages/producten/tuin.html',
        filename: './producten/tuin/index.html'
      }),
      new HtmlWebpackPlugin({
        template: './src/pages/producten/wierook.html',
        filename: './producten/wierook/index.html'
      }),
      new HtmlWebpackPlugin({
        template: './src/pages/over-ons.html',
        filename: './over-ons/index.html'
      }),
      new HtmlWebpackPlugin({
        template: './src/pages/projecten.html',
        filename: './projecten/index.html'
      }),
      new HtmlWebpackPlugin({
        template: './src/pages/faq.html',
        filename: './faq/index.html'
      }),
      new HtmlWebpackPlugin({
        template: './src/pages/werken-bij.html',
        filename: './werken-bij/index.html'
      }),
      new HtmlWebpackPlugin({
        template: './src/pages/contact.html',
        filename: './contact/index.html'
      }),
      new HtmlWebpackPlugin({
        template: './src/pages/privacy.html',
        filename: './privacy/index.html'
      }),
      new HtmlWebpackPlugin({
        template: './src/pages/fairtrade.html',
        filename: './fairtrade/index.html'
      }),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      // compress: true,
      // port: 9000,
    }
  }
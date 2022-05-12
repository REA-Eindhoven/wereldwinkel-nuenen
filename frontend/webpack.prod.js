const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    output: {
      publicPath: 'https://rea-eindhoven.github.io/wereldwinkel-nuenen/frontend/dist/'
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
          template: './src/pages/producten.html',
          filename: './producten/index.html',
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
    ]
});
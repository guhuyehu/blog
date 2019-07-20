const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry: {
    report: './client/report/main.js',
  },

  output: {
    path: path.join(__dirname, './app/public'),
    publicPath: '/',
    filename: 'bundle.[name].[contenthash].js',
    chunkFilename: '[id].[chunkhash:8].chunk.js'
  },

  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [path.resolve('client')],
        options: {
          formatter: require('eslint-friendly-formatter'),
          extractCSS: true,
        },
      },

      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
          },
        ],
      },

      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css|\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
              strictMath: true,
              noIeCompat: true
            }
          }
        ]
      },

      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: 'file-loader'
      },

      {
        test: /\.(woff|svg|eot|ttf)\??.*$/,
        loader: 'url-loader',
        options: {
          limit: 1024,
          publicPath: '../../',
          name: 'lib/[name].[ext]',
        },
      },
    ]
  },

  plugins: [
    new VueLoaderPlugin(),

    new HtmlWebpackPlugin({
      chunks: ['report'],
      filename: 'report.html',
      template: './client/public/report.html'
    }),

    new CopyPlugin([
      './client/public/favicon.ico',
      './client/public/favicon.png',
      './client/public/manifest.json',
      './client/public/healthCheck.html',
      './client/public/non-healthCheck.html'
    ]),

    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css',
      chunkFilename: '[id].[contenthash:8].chunk.css'
    })
  ],

  optimization: {
    minimizer: [
      new UglifyJsPlugin(),
      new OptimizeCSSAssetsPlugin(),
    ],
  },

  node: {
    net: 'empty',
  },

  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      joi: 'joi-browser',
      vue$: 'vue/dist/vue.esm.js',
      '@report': path.resolve(__dirname, './client/report')
    }
  }
};

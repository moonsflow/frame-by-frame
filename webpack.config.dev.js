var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  devtool: 'cheap-module-eval-source-map',

  entry: ['webpack-hot-middleware/client',
          './client/index.js'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },

  resolve: {
    extensions: ['', '.js', 'jsx']
  },

  module: {
    loaders: [
      {
        test: /\.scss/,
        loader: 'style!css!sass',
      },
      {
        test: /\.jsx*$/,
        exclude: [/node_modules/, /.+\.config.js/],
        loader: 'babel',
        query: {
          presets: ['react-hmre']
        }
      }
    ]
  },
  
  plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html'
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        'precess.env': {
          CLIENT: JSON.stringify(true)
        }
      })
  ]

};
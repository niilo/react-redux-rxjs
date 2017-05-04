var path = require('path')
var HtmlWebPackPlugin = require('html-webpack-plugin')
var webpack = require('webpack')

var config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  resolve: {
    alias: {
      react: 'preact',
      'react-dom': 'preact'
    }
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader',
        include: [path.resolve('src'), path.resolve('node_modules/preact/src')]
      },
      {
        test: /\.(css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          }
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'public/index.html'
    })
  ]
}

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  )
}

module.exports = config

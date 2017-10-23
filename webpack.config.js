const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: path.resolve('src/torque.css'),
  output: {
    path: path.resolve('dist'),
    filename: 'torque.css'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', {
              'targets': {
                'node': 'current'
              }
            }]
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                sourceMap: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [new ExtractTextPlugin('torque.css')]
}

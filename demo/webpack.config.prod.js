var path = require('path')
var webpack = require('webpack')

module.exports = {
  context: __dirname,
  devtool: 'source-map',
  entry: [
    './src/index.jsx',
  ],
  output: {
    publicPath: '/',
    path: path.join( __dirname, '/dist'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      'animachine': path.join(__dirname, '../browser/animachine.js'),
      'animachine-connect': path.join(__dirname, '../src/animachine-connect'),
      'react': path.join(__dirname, '../node_modules/react'),
    }
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        include: [
          path.join(__dirname, '../src'),
          __dirname
        ],
        loader: 'babel-loader',
      }, {
        test: /\.(html|css)/,
        include: __dirname,
        loader: 'file?name=[name].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      SKIP_AUTO_INIT_ANIMACHINE: true,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ]
}

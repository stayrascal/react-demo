const merge = require('webpack-merge')
const webpack = require('webpack');
const config = require('./webpack.config.base');

const GLOBALS = {
  'process.env': {
    'NODE_ENV': JSON.stringify('development')
  },
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'true'))
};

module.exports = merge(config, {
  debug: true,
  cache: true,
  devtool: 'cheap-module-eval-source-map',
  entry: [
    application: [
      'webpack-hot-middleware/client',
      'react-hot-loader/patch',
      'development'
    ],
    vendor: ['react', 'react-dom', 'react-redux', 'react-router', 'react-router-redux', 'redux']
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin(GLOBALS)
  ],
  module: {
    loaders: [
      {
        test: '/\.scss$/',
        include: [
          /src\/client\/assets\/javascripts/,
          /src\/client\/assets\/style/,
          /src\/client\/scripts/
        ],
        loaders: [
          'style',
          'css',
          'postcss',
          {
            loader: 'sass',
            query: {
              outputStyle: 'expanded'
            }
          }
        ]
      },
      {
        test: '/\.css$/',
        loader: 'style!css!postcss'
      }
    ]
  }
});

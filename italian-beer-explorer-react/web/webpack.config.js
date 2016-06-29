/*
 * Helper: root(), and rootDir() are defined at the bottom
 */
var sliceArgs = Function.prototype.call.bind(Array.prototype.slice);
var toString  = Function.prototype.call.bind(Object.prototype.toString);
var path = require('path');
var webpack = require('webpack');
// Webpack Plugins
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

/*
 * Config
 */
module.exports = {
  // for faster builds use 'eval'
  devtool: 'source-map',
  debug: true,
  entry: {
    'vendor': './src/vendor.js', // our vendors
    'main': './src/main.js' // our application
  },

  // Config for our build files
  output: {
    path: root('/dist/scripts'),
    filename: '[name].js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },

  module: {
    loaders: [
      // Javascript loader
      { 
        test: /\.js$|jsx$/,
        exclude: /node_modules|backup/, 
        loader: 'babel-loader'
      },
      // Support for SCSS as sass
      {
        test: /\.scss$/,
        loaders: ["style", "css?sourceMap", "sass?sourceMap"]
      },
      // support for .html as raw text
      { 
        test: /\.html$/,
        loader: 'raw-loader' 
      },
      // support for fonts
      {
        test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader : 'file-loader'
      },
      // json loader
      { 
        test: /\.json$/,
        loader: 'json'
      }
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
      }
    }),
    new CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js', minChunks: Infinity }),
    new CommonsChunkPlugin({ name: 'common', filename: 'common.js', minChunks: 2, chunks: ['main', 'vendor'] }),
    new webpack.ProvidePlugin({
      'window.$': "jquery",
      "jQuery": "jquery",
      "window.Tether": 'tether',
      'Promise': 'imports?this=>global!exports?global.Promise!es6-promise',
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new BrowserSyncPlugin({
      open: false,
      proxy: '127.0.0.1:8081'
    })
  ]

};

// Helper functions
function root(args) {
  args = sliceArgs(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}

function rootNode(args) {
  args = sliceArgs(arguments, 0);
  return root.apply(path, ['node_modules'].concat(args));
}

var webpack = require('webpack');
// backpack.config.js
// IMPORTANT: This file is not going through babel transformation.
// You can however use the ES2015 features supported by your Node.js version.
module.exports = {
  /* config options here */
  webpack: (config, options) => {
    // Perform customizations to config
    // Important: return the modified config

    // uglify build
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }));

    return config;
  }
}

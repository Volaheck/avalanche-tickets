const webpack = require('webpack');

module.exports = function override(config, env) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    "stream": require.resolve("stream-browserify"),
    "assert": require.resolve("assert"),
    "http": require.resolve("stream-http"),
    "https": require.resolve("https-browserify"),
    "crypto": require.resolve("crypto-browserify"),
    "url": require.resolve("url"),
    "os": require.resolve("os"), 
  };
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  ]);
  return config;
};

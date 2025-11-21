const webpackConfig = require('./webpack.test');

module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'src/**/*.spec.jsx'
    ],
    preprocessors: {
      'src/**/*.spec.jsx': ['webpack']
    },
    webpack: webpackConfig,
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },
    browsers: ['ChromeHeadless'],
    singleRun: true,
    webpackMiddleware: {
      stats: 'errors-only'
    }
  });
};

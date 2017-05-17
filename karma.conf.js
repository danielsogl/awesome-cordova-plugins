"use strict";

module.exports = config => {

  const conf = {
    frameworks: [
      'jasmine',
      'karma-typescript'
    ],

    plugins: [
      'karma-typescript',
      'karma-jasmine',
      'karma-phantomjs-launcher'
    ],

    preprocessors: {
      'src/**/*.ts': ['karma-typescript']
    },

    karmaTypescriptConfig: {
      bundlerOptions: {
        entrypoints: /\.spec\.ts$/,
        transforms: [
          require("karma-typescript-es6-transform")()
        ]
      },
      compilerOptions: {
        lib: ['es2015', 'dom'],
        paths: {
          "@ionic-native/core": ["./src/@ionic-native/core"]
        },
        baseUrl: '.'
      }
    },

    files: [
      { pattern: 'src/**/*.ts', included: true, watched: true }
    ],

    reporters: ['progress'],

    port: 9876,
    colors: true,
    logLevel: config.INFO,
    autoWatch: true,
    browsers: [
      'PhantomJS'
    ],
    singleRun: false
  };

  config.set(conf);

};

"use strict";

const gulp = require('gulp'),
  minimist = require('minimist'),
  rename = require("gulp-rename"),
  tslint = require('gulp-tslint'),
  decamelize = require('decamelize'),
  replace = require('gulp-replace'),
  _ = require('lodash');

const flagConfig = {
    string: ['port', 'version', 'ngVersion', 'animations'],
    boolean: ['dry-run'],
    alias: {'p': 'port', 'v': 'version', 'a': 'ngVersion'},
    default: { port: 8000 }
  },

  flags = minimist(process.argv.slice(2), flagConfig);

/* Docs tasks */
require('./scripts/docs/gulp-tasks')(gulp, flags);

gulp.task('lint', () => {
  return gulp.src('src/**/*.ts')
    .pipe(tslint({
      formatter: "verbose",
      configuration: 'tslint.json'
    }))
    .pipe(tslint.report());
});

gulp.task('plugin:create', () => {
  if (flags.n && flags.n !== ''){

    const src = flags.m ? './scripts/templates/wrap-min.tmpl':'./scripts/templates/wrap.tmpl',
      pluginName = flags.n,
      pluginNameSpaced = pluginName.replace(/(?!^)([A-Z])/g, ' $1');

    return gulp.src(src)
      .pipe(replace('$PluginName', pluginName))
      .pipe(replace('$Plugin_Name', pluginNameSpaced))
      .pipe(replace('$pluginName', _.lowerFirst(pluginName)))
      .pipe(rename('index.ts'))
      .pipe(gulp.dest('./src/@ionic-native/plugins/' + _.kebabCase(pluginName)));

  } else {
    console.log("Usage is: gulp plugin:create -n PluginName");
  }
});

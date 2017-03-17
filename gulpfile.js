var gulp = require('gulp');
var minimist = require('minimist');
var rename = require("gulp-rename");
var tslint = require('gulp-tslint');
var decamelize = require('decamelize');
var replace = require('gulp-replace');

var flagConfig = {
  string: ['port', 'version', 'ngVersion', 'animations'],
  boolean: ['dry-run'],
  alias: {'p': 'port', 'v': 'version', 'a': 'ngVersion'},
  default: { port: 8000 }
};
var flags = minimist(process.argv.slice(2), flagConfig);

/* Docs tasks */
require('./scripts/docs/gulp-tasks')(gulp, flags);

gulp.task('lint', function() {
  gulp.src('src/**/*.ts')
    .pipe(tslint({
      formatter: "verbose",
      configuration: 'tslint.json'
    }))
    .pipe(tslint.report())
});

gulp.task('plugin:create', function(){
  if(flags.n && flags.n !== ''){

    const src = flags.m?'./scripts/templates/wrap-min.tmpl':'./scripts/templates/wrap.tmpl',
      pluginName = flags.n,
      pluginPackageName = decamelize(pluginName, '-'),
      pluginNameSpaced = pluginName.replace(/(?!^)([A-Z])/g, ' $1');

    return gulp.src(src)
      .pipe(replace('PluginName', pluginName))
      .pipe(replace('Plugin Name', pluginNameSpaced))
      .pipe(rename('index.ts'))
      .pipe(gulp.dest('./src/@ionic-native/plugins/' + pluginPackageName));

  } else {

    console.log("Usage is: gulp plugin:create -n PluginName");

  }
});

var gulp = require('gulp');
var minimist = require('minimist');
var uglify = require('gulp-uglify');
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


gulp.task("minify:dist", function(){
  gulp.src('./dist/ionic.native.js')
  .pipe(uglify())
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest('./dist'));
});

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
    var src = flags.m?'./scripts/templates/wrap-min.tmpl':'./scripts/templates/wrap.tmpl';
    return gulp.src(src)
      .pipe(replace('PluginName', flags.n))
      .pipe(rename(decamelize(flags.n, '-') + '.ts'))
      .pipe(gulp.dest('./src/plugins/'));
  } else {
    console.log("Usage is: gulp plugin:create -n PluginName");
  }
});

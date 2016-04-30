var gulp = require('gulp');
var minimist = require('minimist');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var tslint = require('gulp-tslint');

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

gulp.task("tslint", function(){
  gulp.src("src/**/*.ts")
  .pipe(tslint())
  .pipe(tslint.report('verbose'));
});

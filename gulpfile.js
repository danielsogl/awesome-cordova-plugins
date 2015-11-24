var gulp = require("gulp");
sourcemaps = require("gulp-sourcemaps"),
  babel = require("gulp-babel"),
  concat = require("gulp-concat"),
  connect = require('gulp-connect');

gulp.task("default", ['build'], function () {
});

gulp.task('build', function() {
  return gulp.src("src/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat("ionic-native.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist"));
});

gulp.task('test', ['build', 'serve'], function() {

})

gulp.task('serve', function() {
  connect.server({
    root: '.'
  });
});

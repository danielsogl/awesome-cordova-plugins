var gulp = require("gulp"),
  source = require('vinyl-source-stream'),
  buffer = require('vinyl-buffer'),
  sourcemaps = require("gulp-sourcemaps"),
  concat = require("gulp-concat"),
  connect = require('gulp-connect'),
  browserify = require('browserify'),
  watchify = require('watchify'),
  babel = require('babelify');


function compile(watch) {
  var bundler = watchify(browserify()
  .require('./src/index.js', {
    entry: true,
    expose: 'cordova-wrap'
  })
  .transform(babel, {presets: ['es2015']}));

  function rebundle() {
    bundler.bundle()
      .on('error', function(err) { console.error(err); this.emit('end'); })
      .pipe(source('cordova-wrap.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./dist'));
  }

  if (watch) {
    bundler.on('update', function() {
      console.log('-> bundling...');
      rebundle();
    });
  }

  rebundle();
}

function watch() {
  return compile(true);
}

gulp.task("default", ['build'], function () { });

gulp.task('build', function() {
  return compile();
});

gulp.task('watch', function() {
  return watch();
});

gulp.task('serve', function() {
  connect.server({
    root: '.'
  });
});

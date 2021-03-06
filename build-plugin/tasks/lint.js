var gulp = require('gulp');
var paths = require('../paths');
var eslint = require('gulp-eslint');

gulp.task('lint', function() {
  return gulp.src(paths.source)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('lint-test', function() {
  return gulp.src(paths.test)
    .pipe(eslint({
      rules: {
        'max-lines': 1
      }
    }))
    .pipe(eslint.format());
});

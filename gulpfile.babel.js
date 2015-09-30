var gulp = require('gulp');
var babel = require('@exponent/gulp-babel');
var spawnAsync = require('@exponent/spawn-async');

babel.task(gulp);

gulp.task('default', ['babel-watch', 'webpack',]);
gulp.task('build', ['babel']);

gulp.task('webpack', (callback) => {
  var p = spawnAsync('npm', ['run-script', 'webpack']);
  p.then(() => {
    callback(null);
  }, (err) => {
    callback(err);
  });
});

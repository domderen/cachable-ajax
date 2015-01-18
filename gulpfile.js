var gulp = require('gulp'),
  connect = require('gulp-connect');

var filesPattern = ['index.html', 'cachable-ajax.html', 'demo.html', 'test/**/*.*'];

gulp.task('webserver', function() {
  connect.server({
    livereload: true,
    root: ['./../']
  });
});

gulp.task('files', function() {
  gulp.src(filesPattern)
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch(filesPattern, ['files']);
});

gulp.task('default', ['files', 'webserver', 'watch']);

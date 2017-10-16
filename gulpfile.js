// require modules

var gulp   = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// first task
// Scripts task
gulp.task('scripts', function() {
  gulp.src(['app/js/**/*.js', '!app/js/**/*.min.js'] )
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('app/js'));
});

// watch task
gulp.task('watch', function() {
  gulp.watch('app/js/**/*.js', ['scripts']);
});

// default task
gulp.task('default', ['scripts', 'watch']);

// require modules
var gulp   = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');

// first task
// Scripts task
gulp.task('scripts', function() {
  gulp.src(['app/js/**/*.js', '!app/js/**/*.min.js'] )
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('app/js'));
});

// compass / sass task
gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(uglify())
    .pipe(gulp.dest('app/css'));
});

// watch task
gulp.task('watch', function() {
  gulp.watch('app/js/**/*.js', ['scripts', 'sass']);
});

// default task
gulp.task('default', ['scripts', 'watch', 'sass']);

// require modules
var gulp   = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass   = require('gulp-sass');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');

// first task
// Scripts task
gulp.task('scripts', function() {
  gulp.src(['app/js/**/*.js', '!app/js/**/*.min.js'] )
    .pipe(plumber())
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('app/js'));
});

// sass task
gulp.task('sass', function() {
  gulp.src('app/scss/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer({browsers: ['last 3 versions']}))
    .pipe(gulp.dest('app/css'));
});

// HTML task
gulp.task('html', function() {
  gulp.src('app/**/*.html');
});

// watch task
gulp.task('watch', function() {
  gulp.watch('app/js/**/*.js', ['scripts']);
  gulp.watch('app/scss/*.scss', ['sass']);
  gulp.watch('app/**/*.html', ['html']);
});

// default task
gulp.task('default', ['sass', 'scripts', 'watch', 'html']);

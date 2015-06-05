var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
  gulp.src('./styles/*.scss')
    .pipe(sass())
    .pipe(autoprefixer('last 1 version'))
    .pipe(cssmin())
    .pipe(gulp.dest('./styles/'));
});

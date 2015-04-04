var gulp         = require('gulp');
var sass         = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var generator    = require('./assets/generator');

gulp.task('default', function () {
    generator();

    return gulp
        .src('assets/styles.scss')
        .pipe(sass({ style: 'compressed' }))
        .pipe(autoprefixer('last 2 version'))
        .pipe(gulp.dest('assets'));
});
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', () => {
    return gulp.src('./src/main.scss')
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(gulp.dest('./build'))
});

gulp.task('watch', () => {
    gulp.watch('./src/**/*.scss', gulp.series('sass'));
});

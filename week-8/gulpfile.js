var gulp = require('gulp');

var cleanCSS = require('gulp-clean-css');

gulp.task('minify-css', function() {
    return gulp.src('classwork/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist'));
});
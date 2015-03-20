var gulp = require('gulp')
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	minifyCSS = require('gulp-minify-css');

gulp.task('compress', function() {
  gulp.src(['assets/js/jquery.min.js', 'assets/js/jquery.prettysocial.min.js', 'assets/js/rainbow-custom.min.js', 'assets/js/scripts.js'])
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('static/js/'));
  gulp.src(['assets/css/blog.css', 'assets/css/syntax-highlighter.css', 'assets/css/custom.css'])
    .pipe(concat('all.min.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('static/css/'));
});
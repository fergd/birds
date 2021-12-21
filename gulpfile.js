var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var cp = require('child_process');
var minifyCSS = require('gulp-minify-css');
var htmlmin = require('gulp-htmlmin');

gulp.task("deploy", ["jekyll-build"], function () {
    return gulp.src("./_site/**/*")
        .pipe(deploy());
    return gulp.src('_site/css/*.css')
	    .pipe(minifyCSS({compatibility: 'ie8'}))
	    .pipe(gulp.dest("_site/css"));
});

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var runSequence = require('run-sequence');
var uglify = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');
var rev = require('gulp-rev');

var buildDir = "./build"
var jsFilter = "**/*.js"
var cssFilter = "**/*.css"

var buildAll = function(){
    return gulp.src("./sugar-cordova/www/*.html")
	.pipe(minifyHtmlTask())
	.pipe(minifyJSTask())
	.pipe(minifyCssTask())
	.pipe(rev())
}

var minifyHtmlTask = function(){
    return gulp.src("./sugar-cordova/www/*.html")
	.pipe(minifyHtml({ empty: false }))
	.pipe(gulp.dest(buildDir));
}

var minifyCssTask = function(){
    return gulp.src("./sugar-cordova/www/css/*.css")
	.pipe(minifyCss())
	.pipe(concat("sugarizer.min.css"))
	.pipe(gulp.dest(buildDir+"/css"))
}

var minifyJSTask = function (cb) {
    return gulp.src("./sugar-cordova/www/js/*.js")
	.pipe(concat("sugarizer.min.js"))
    	.pipe(uglify())
	.pipe(gulp.dest(buildDir+'/js/'))
}

//Global tasks
gulp.task('build', buildAll);

//Js related tasks
gulp.task('minify-js', minifyJSTask);
gulp.task('minify-html', minifyHtmlTask);

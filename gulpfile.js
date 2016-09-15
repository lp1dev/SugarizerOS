var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var runSequence = require('run-sequence');
var revReplace = require('gulp-rev-replace');
var uglify = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');
var rev = require('gulp-rev');

var buildDir = "./build"
var jsFilter = "js/*.js"
var cssFilter = "css/*.css"

var buildAll = function(){
    return gulp.src("./sugar-cordova/www/index.html")
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

var buildTask = function () {
    runSequence('build-js');
}

//Global tasks
gulp.task('build', buildTask);
gulp.task('usemin', useminTask);

//Js related tasks
gulp.task('minify-js', minifyJSTask);
gulp.task('minify-html', minifyHtmlTask);

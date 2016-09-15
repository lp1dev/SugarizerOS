var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var runSequence = require('run-sequence');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');
var rev = require('gulp-rev');

var useminTask = function() {
    return gulp.src('./sugar-cordova/www/*.html')
        .pipe(usemin({
	    css: [ function(){}],
	    html: [ function(){} ],
	    js: [ compressJS() ],
	    inlinejs: [ function(){} ],
	    inlinecss: [ function(){} ]
	}))
        .pipe(gulp.dest('./tmp/'));
}

var compressJS = function (cb) {
    pump([
	gulp.src('sugar-cordova/www/js/*.js'),
	uglify(),
	gulp.dest('./tmp')
    ],
	 cb
	);
}

var concatJS = function() {
    return gulp.src('./tmp/*.js')
        .pipe(concat('sugarizer.js'))
        .pipe(gulp.dest('./js/'));
}

var cleanJS = function(){
    return gulp.src('./tmp', {read: false})
        .pipe(clean());
}

var build = function () {
    runSequence('build-js');
}

var buildJS = function() {
    runSequence('compress-js',
		'concat-js',
		'clean-js');
}

//Global tasks
gulp.task('build', build);
gulp.task('usemin', useminTask);

//Js related tasks
gulp.task('build-js', buildJS);
gulp.task('clean-js', cleanJS);
gulp.task('concat-js', concatJS);
gulp.task('compress-js', compressJS);

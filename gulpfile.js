// var gulp = require('gulp'),
// 	jshint = require('gulp-jshint'),
// 	browserify = require('browserify'),
// 	transform = require('vinyl-transform'),
// 	concat = require('gulp-concat');

// // JSHint task
// gulp.task('lint', function() {
// 	gulp.src('./app/scripts/*js')
// 	.pipe(jshint())
// 	.pipe(jshint.reporter('default'))
// 	.pipe(jshint.reporter('fail'));
// })

// gulp.task('clean', function() {
// 	gulp.src('./dist/*')
// 		.pipe(clean({force: true}));
// });

// // Browserify task
// gulp.task('browserify', function(){
// 	var browserified = transform(function(filename){
// 		var b = browserify(filename);
// 		return b.bundle();
// 	});

// 	return gulp.src(['./public/javascript/*.js'])
// 		.pipe(browserified)
// 		.pipe(concat('bundle.js'))
// 		.pipe(uglify())
// 		.pipe(gult.dest('./dist'));
// });

// // Watch task
// gulp.task('watch', ['lint'], function() {
// 	gulp.watch(['./public/javascript/*.js', './javascript/**/*.js'], [
// 		'lint',
// 		'browserify'
// 	]);
// });
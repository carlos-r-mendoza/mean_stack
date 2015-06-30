// gulp
var gulp = require('gulp');

// gulp plugins	
var	jshint = require('gulp-jshint'),
	browserify = require('browserify'),
	transform = require('vinyl-transform'),
	concat = require('gulp-concat'),
	livereload = require('gulp-livereload'),
	plumber = require('gulp-plumber'),
	runSeq = require('run-sequence'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename');

gulp.task('reload', function () {
    livereload.reload();
});

gulp.task('reloadCSS', function () {
    return gulp.src('./public/style.css').pipe(livereload());
});


gulp.task('clean', function() {
	return gulp.src('./dist/*')
		.pipe(clean({force: true}));
})

// JSHint task
gulp.task('lint', function() {
	return gulp.src([
		'gulpfile.js',
		'./public/javascript/*.js',
		'./public/javascript/**/*.js',
		'./server/*.js'
	])
	.pipe(jshint())
	.pipe(jshint.reporter('default'))
	.pipe(jshint.reporter('fail'));
});

// Browserify task
gulp.task('browserify', function(){
	var browserified = transform(function(filename){
		var b = browserify(filename);
		return b.bundle();
	});

	return gulp.src(['javascript/app.js'])
		.pipe(browserified)
		.pipe(concat('javascript/bundle.js'))
		.pipe(uglify());
		// .pipe(gulp.dest('./dist'));
});

gulp.task('buildCSS', function () {
    return gulp.src('./public/css/*.css')
        .pipe(plumber())
        .pipe(rename('style.css'))
        .pipe(gulp.dest('./public/css'))
});

gulp.task('build', function() {
	runSeq(['browserify', 'buildCSS']);
})

gulp.task('default', function(){
	livereload.listen();
    gulp.start('build');
    gulp.watch(['./public/javascript/app.js', './public/javascript/**/*.js', 'server/*.js'], [
		'lint',
		'browserify',
		['reload']
	]);

	gulp.watch('.public/css/*.css', function () {
	    runSeq('buildCSS', 'reloadCSS');
	});

})

	

// Watch task
// gulp.task('watch', ['lint'], function() {
// 	gulp.watch(['javascript/app.js', 'javascript/**/*.js'], [
// 		'lint',
// 		'browserify'
// 	]);
// });




// gulp.task('lint', function() {
// 	return gulp.src('./app/scripts/*js')

// })

// gulp.task('clean', function() {
// 	return gulp.src('./dist/*')
// 		.pipe(clean({force: true}));
// });

// gulp.task('browserify'. function(){
// 	return browserify('/public/javascript/app.js')
// 	.bundle({ debug: true })
// 	.pipe(source('app.js'))
// 	.pipe(gulp.dest('./app/dist/'))
// 	.pipe(connect.reload());
// });
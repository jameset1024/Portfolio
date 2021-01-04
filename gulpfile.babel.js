import gulp from 'gulp';
import glob from 'glob';


glob.sync('./gulp/tasks/**/*.js')
	.filter(function(file) {
		return /\.(js)$/i.test(file);
	})
	.map(function(file) {
		require(file);
	});

gulp.task(
	'serve',
	gulp.series([
		'clean',
		gulp.parallel(
			'sass',
			'scripts',
			'fonts',
			'images'
		),
		'inject',
		'browserSync'
	])
);

gulp.task(
	'build',
	gulp.series([
		'clean',
		gulp.parallel(
			'sass',
			'fonts',
			'images',
			'scripts',
		),
		'inject',
		'done'
	])
);

gulp.task(
	'production',
	gulp.series([
		'clean',
		gulp.parallel(
			'sass',
			'fonts',
			'images',
			'scripts',
		),
		'rev',
		'author',
		'size',
		'inject',
		'done'
	])
);

// Default task
// gulp.task('default', gulp.series('clean', 'build'));

// Testing
gulp.task('test', gulp.series('eslint'));
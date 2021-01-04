import gulp from 'gulp';

import { plugins, args, config, taskTarget } from '../utils';

const dirs = config.directories;
const dest = `${taskTarget}/${dirs.images}`;

gulp.task('images', () => {
	return gulp
		.src(
			`${dirs.source}${dirs.images}**/*.{jpg,jpeg,gif,svg,png}`
		)
		.pipe(plugins.if(!args.production, plugins.cached()))
		.pipe(
			plugins.if(
				args.production,
				plugins.imagemin([
					plugins.imagemin.jpegtran({ progressive: true }),
					plugins.imagemin.svgo({
						plugins: [{ removeViewBox: false }]
					})
				])
			)
		)
		.pipe(gulp.dest(dest));
});
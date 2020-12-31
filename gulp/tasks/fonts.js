import gulp from 'gulp';

import { config, taskTarget } from '../utils';

const dirs = config.directories;
const dest = `${taskTarget}${dirs.fonts}`;

gulp.task('fonts', () => {
	return gulp
		.src(config.entries.fonts)
		.pipe(gulp.dest(dest));
});

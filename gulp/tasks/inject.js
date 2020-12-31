import gulp from 'gulp';

import { config, plugins, taskTarget } from '../utils';

const dirs = config.directories;

// Inject Js
gulp.task('inject', () => {
	return gulp.src(config.inject, {allowEmpty: true})
		.pipe(plugins.inject(gulp.src([`${taskTarget}${dirs.css}*.css`, `${taskTarget}${dirs.scripts}*.js`], {read: false}), {ignorePath: 'public/', addRootSlash: false, addPrefix: '.'}))
		.pipe(gulp.dest(`${dirs.public}`));
});

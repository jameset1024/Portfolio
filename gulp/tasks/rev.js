import gulp from 'gulp';
import revdel from 'gulp-rev-delete-original';

import { plugins, taskTarget, config } from '../utils';

const dirs = config.directories;
const destCss = `${taskTarget}${dirs.css}`;
const destJs = `${taskTarget}${dirs.scripts}`;

gulp.task('revCss', () => {
	return gulp
		.src([`${taskTarget}/styles/*.css`,])
		.pipe(plugins.rev())
		.pipe(revdel())
		.pipe(gulp.dest(destCss))
		.pipe(plugins.rev.manifest('manifest.json'))
		.pipe(gulp.dest(destCss));
});

gulp.task('revJs', () => {
	return gulp
		.src([`${taskTarget}/scripts/*.js`])
		.pipe(plugins.rev())
		.pipe(revdel())
		.pipe(gulp.dest(destJs))
		.pipe(plugins.rev.manifest('manifest.json'))
		.pipe(gulp.dest(destJs));
});

gulp.task('rev', gulp.series('revCss', 'revJs'));

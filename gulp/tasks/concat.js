import gulp from 'gulp';
import fs from 'fs';
import stripCssComments from 'gulp-strip-css-comments';

import { plugins, config, taskTarget } from '../utils';

const dirs = config.directories;
const url = JSON.parse(fs.readFileSync('./plugins.json'));

const destCss = `${taskTarget}/${dirs.css}`;

gulp.task('concatCss', () => {
	return gulp
		.src(url.styles, { allowEmpty: true })
		.pipe(stripCssComments())
		.pipe(plugins.concat('core.css'))
		.pipe(plugins.cssnano())
		.pipe(gulp.dest(destCss));
});

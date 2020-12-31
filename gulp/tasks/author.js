import gulp from 'gulp';
import { plugins, config, taskTarget } from '../utils';

const auth = config.author;
const dest = `${taskTarget}`;

let banner = [
	'/*',
	' ////////////////////////////////////////////////////////',
	' // <%= auth.name %>',
	' // @version v<%= auth.version %>',
	' // @link <%= auth.link %>',
	' // @license <%= auth.license %>',
	' // @<%= auth.coding %> ',
	' // @<%= auth.email %>',
	' ////////////////////////////////////////////////////////',
	'*/'
].join('\n');

gulp.task('author', () => {
	return gulp
		.src(`${taskTarget}/**/*.{css,js}`)
		.pipe(
			plugins.header(banner, {
				auth: auth
			})
		)
		.pipe(gulp.dest(dest));
});

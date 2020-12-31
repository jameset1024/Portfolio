import gulp from "gulp";
import webpackstream from "webpack-stream";

import {config, plugins, taskTarget} from "../utils";

import webpackConfig from "../webpack.config";

const dirs = config.directories;
const entries = config.entries;

gulp.task("scripts", () => {
	return gulp
		.src(`${dirs.source}${dirs.scripts}${entries.script}`)
		.pipe(webpackstream(webpackConfig))
		.on("error", function(err) {
			plugins.util.log(err);
		})
		.on("error", plugins.notify.onError(config.defaultNotification))
		.pipe(gulp.dest(`${taskTarget}/${dirs.scripts}`));
});

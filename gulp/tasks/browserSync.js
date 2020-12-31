import gulp from "gulp";
import fs from "fs";
import { execSync } from "child_process";

import { plugins, args, config, taskTarget, browserSync } from "../utils";

const dirs = config.directories;

gulp.task("browserSync", (cb) => {
	browserSync.init({
		open: args.open ? "local" : false,
		proxy: config.url
	});

	if (!args.production) {

		// Sass
		gulp.watch(
			[
				`${dirs.source}${dirs.css}**/*.{sass,scss}`
			],
			gulp.series("sass")
		);

		gulp.watch(
			[
				`${dirs.source}${dirs.scripts}**/*.{ts,tsx,js}`
			],
			gulp.series("scripts")
		).on('change', browserSync.reload);

		// Concat files
		gulp.watch(["./plugins.json"], gulp.parallel("concatCss"));

		// Fonts
		gulp.watch(
			[`${dirs.source}${dirs.fonts}**/*`],
			gulp.parallel("fonts")
		);

		// Images
		gulp.watch(
			[
				`${dirs.source}${dirs.images}**/*.{jpg,jpeg,gif,svg,png}`
			],
			gulp.parallel("images")
		).on("unlink", function(path) {
			let filePathInBuildDir = path
				.replace(
					`${dirs.source}${dirs.images}`,
					`${taskTarget}${dirs.images}`
				)
				.replace(
					".+(jpg|jpeg|gif|svg|png)",
					".+(jpg|jpeg|gif|svg|png)"
				);
			fs.unlink(filePathInBuildDir, err => {
				if (err) throw err;
				console.log(`---------- Delete:  ${filePathInBuildDir}`);
			});
		});

		// Watch .html change
		gulp.watch(`${taskTarget}/`).on("change", browserSync.reload);
	}
	
	//Kills the docker container
	process.on('SIGINT', () => {
		execSync("docker kill erik-nginx");
		cb();
		process.exit();
	});
});

import { args } from "./utils";
import TerserPlugin from "terser-webpack-plugin";
import Dotenv from "dotenv-webpack";

const WebpackConfig = {
	mode: !args.production ? "development" : "production",
	devtool: !args.production ? "cheap-eval-source-map" : false,
	output: {
		filename: "[name].js"
	},
	optimization: {
		splitChunks: {
			name: "vendor",
			chunks: "all"
		},
		minimize: !args.production ? false : true
	},
	resolve: {
		extensions: ['.ts','.tsx','.js']
	},
	module: {
		rules: [
			{
				test: /\.js|.ts|.tsx$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "ts-loader",
				}
			}
		]
	},
	plugins: [
		new Dotenv({
			path: './.env'
		})
	]
};

if (args.production) {
	WebpackConfig.plugins.push(
		new TerserPlugin({
			cache: true,
			parallel: true,
			extractComments: false
		})
	);
}

module.exports = WebpackConfig;

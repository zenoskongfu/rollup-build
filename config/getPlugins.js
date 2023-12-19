import resolve from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import commonjs from "@rollup/plugin-commonjs";
import { babel } from "@rollup/plugin-babel";
import esbuild from "rollup-plugin-esbuild";
import nodeExternals from "rollup-plugin-node-externals";

const basePlugins = [resolve(), commonjs(), postcss(), nodeExternals(), esbuild()];

export const esmPlugins = basePlugins;

export const umdPlugins = [
	...basePlugins,
	babel({
		presets: [
			[
				"@babel/preset-env",
				{
					targets: [">0.2%", "not dead", "not op_mini all", "chrome 40"],
					corejs: 3,
					useBuiltIns: "useage",
				},
			],
		],
		plugins: [
			[
				"@babel/plugin-transform-runtime",
				{
					corejs: 3,
				},
			],
		],
		exclude: /node_modules/,
		babelHelpers: "runtime",
	}),
];

import resolve from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
const { babel } = require("@rollup/plugin-babel");
import esbuild from "rollup-plugin-esbuild";
import rollupExternalModules from "rollup-external-modules";

const basePlugins = [resolve(), commonjs(), postcss(), esbuild()];

export const esmPlugins = basePlugins;

export const umdPlugins = [...basePlugins].push(
	babel({
		presets: [
			[
				"@babel/preset-env",
				{
					targets: [">0.2%", "not dead", "not op_mini all"],
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
		exclude: /nodex_module/,
		babelHelpers: "runtime",
	})
);

import { DEFAULT_EXTENSIONS } from "@babel/core";
import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import image from "@rollup/plugin-image";
import resolve from "@rollup/plugin-node-resolve";
import esbuild from "rollup-plugin-esbuild";
import nodeExternals from "rollup-plugin-node-externals";
import postcss from "rollup-plugin-postcss";
const basePlugins = [resolve(), commonjs(), postcss({ extract: "rollup-build.css" }), image()];

export const esmPlugins = [...basePlugins, nodeExternals(), esbuild()];

// script的依赖过多是不友好的
export const umdPlugins = [
	...basePlugins,
	nodeExternals(),
	esbuild({
		// jsxFactory: "React.createElement",
		// jsx: "transform",
		tsconfigRaw: {
			compilerOptions: {
				jsx: "react",
			},
		},
	}),
];

export const iifePlugins = [
	...basePlugins,
	esbuild({
		// jsxFactory: "React.createElement",
		// jsx: "transform",
		tsconfigRaw: {
			compilerOptions: {
				jsx: "react",
			},
		},
	}),
	// 处理低版本浏览器的polyfill
	babel({
		presets: [
			[
				"@babel/preset-env",
				{
					targets: "> 0.25%, not dead, IE 10",
				},
			],
		],
		exclude: /node_modules/,
		extensions: [...DEFAULT_EXTENSIONS, ".ts", ".tsx"],
		babelHelpers: "inline", //将所有的polyfill代码打包进bundle中
	}),
];

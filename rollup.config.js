// const { define } = require("rollup");
const resolve = require("@rollup/plugin-node-resolve");
const postcss = require("rollup-plugin-postcss");
const typescript = require("@rollup/plugin-typescript");
const commonjs = require("@rollup/plugin-commonjs");
const { babel } = require("@rollup/plugin-babel");
const esbuild = require("rollup-plugin-esbuild");
// const nodeExternals = require("rollup-plugin-node-externals");
const rollupExternalModules = require("rollup-external-modules");
/**@type {import('rollup').RollupOptions} */
module.exports = {
	input: "./src/index.tsx",
	output: {
		dir: "./dist",
		format: "esm",
		sourcemap: true,
		preserveModules: true,
	},
	plugins: [
		resolve(),
		commonjs(),
		postcss(),
		typescript(),
		babel({
			presets: ["@babel/preset-react"],
			exclude: /nodex_module/,
			// babelHelpers: "runtime",
		}),
		// nodeExternals(),
		// esbuild.default({
		// 	target: "es2015",
		// }),
	],
	// external: rollupExternalModules,
	external: ["react", "react-dom", "react/jsx-runtime"],
};

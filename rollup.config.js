// const { define } = require("rollup");
const resolve = require("@rollup/plugin-node-resolve");
const postcss = require("rollup-plugin-postcss");
const typescript = require("@rollup/plugin-typescript");
const commonjs = require("@rollup/plugin-commonjs");
const { babel } = require("@rollup/plugin-babel");
const esbuild = require("rollup-plugin-esbuild");
const rollupExternalModules = require("rollup-external-modules");
const nodeExternals = require("rollup-plugin-node-externals");

/**@type {import('rollup').outOptions} */
const outOptions = [
	{
		dir: "./dist/es",
		format: "esm",
		sourcemap: true,
		preserveModules: true,
	},
	{
		file: "./dist/umd/rollup-build",
		name: "rollup-build",
		format: "cjs",
		sourcemap: true,
	},
];

/**@type {import('rollup').RollupOptions} */
module.exports = {
	input: "./src/index.tsx",
	output: outOptions,
	plugins: [
		resolve(),
		commonjs(),
		postcss(),
		typescript(),
		// babel({
		// 	presets: ["@babel/preset-react"],
		// 	exclude: /nodex_module/,
		// 	babelHelpers: "runtime",
		// }),
		nodeExternals.default(),
		esbuild.default(),
	],
	// external: rollupExternalModules,
};

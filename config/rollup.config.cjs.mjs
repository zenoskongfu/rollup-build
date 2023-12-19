import { umdPlugins } from "./getPlugins.js";

/**@type {import('rollup').RollupOptions} */
export default {
	input: "./src/index.tsx",
	output: {
		file: "./dist/cjs/rollup-build.js",
		format: "cjs",
		sourcemap: true,
	},
	plugins: umdPlugins,
};

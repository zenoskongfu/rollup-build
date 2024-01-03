import { esmPlugins } from "./getPlugins.js";

/**@type {import('rollup').RollupOptions} */
export default {
	input: "./src/index.tsx",
	output: {
		dir: "./dist/es",
		format: "esm",
		sourcemap: true,
		preserveModules: true,
	},
	plugins: esmPlugins,
};

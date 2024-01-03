import { umdPlugins } from "./getPlugins.js";

/**@type {import('rollup').RollupOptions} */
export default {
	input: "./src/index.tsx",
	output: {
		file: "./dist/umd/rollup-build.js",
		format: "umd",
		name: "RB",
		sourcemap: true,
		globals: {
			react: "React",
			"react-dom": "ReactDOM",
		},
	},
	plugins: umdPlugins,
};

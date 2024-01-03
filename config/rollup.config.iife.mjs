import { iifePlugins } from "./getPlugins.js";

/**@type {import('rollup').RollupOptions} */
export default {
	input: "./src/index.tsx",
	output: {
		file: "./dist/iife/rollup-build.js",
		format: "iife",
		name: "RB",
		sourcemap: true,
		globals: {
			react: "React",
			"react-dom": "ReactDOM",
		},
	},
	plugins: iifePlugins,
	external: ["react", "react-dom"],
};

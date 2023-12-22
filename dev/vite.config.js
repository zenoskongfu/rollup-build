import viteReact from "@vitejs/plugin-react";
import path from "path";
/**@type {import('vite').UserConfig} */
export default {
	Plugin: [viteReact()],
	server: {
		open: true,
		port: 8088,
	},
	resolve: {
		alias: {
			"rollup-build": path.resolve(__dirname, "../src"),
		},
	},
};

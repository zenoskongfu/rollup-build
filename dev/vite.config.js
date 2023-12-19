const { default: viteReact } = require("@vitejs/plugin-react");
const path = require("path");
/**@type {import('vite').UserConfig} */
module.exports = {
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

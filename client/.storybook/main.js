const path = require("path");
const cracoConfig = require("../craco.config");

module.exports = {
	stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/preset-create-react-app",
	],
	webpackFinal: async (config, { configType }) => {
		return {
			...config,
			resolve: {
				...config.resolve,
				alias: {
					...config.resolve.alias,
					...cracoConfig.webpack.alias,
				},
			},
		};
	},
};

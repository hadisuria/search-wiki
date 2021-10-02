const { resolve } = require("path");
const path = require("path");
const alias = require(`./src/config/aliases`);

const SRC = `./src`;
const aliases = alias(SRC);

const resolvedAliases = Object.fromEntries(
	Object.entries(aliases).map(([key, value]) => [
		`^${key}(.*)$`,
		path.resolve(__dirname, `${value}$1`),
	])
);

console.log("Jest config> moduleNameMapper: ", resolvedAliases);

module.exports = {
	moduleNameMapper: resolvedAliases,
};

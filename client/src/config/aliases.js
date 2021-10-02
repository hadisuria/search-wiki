const aliases = (prefix = `src`) => ({
	"@components": `${prefix}/components`,
	"@config": `${prefix}/config`,
	"@pages": `${prefix}/pages`,
	"@assets": `${prefix}/assets`,
	"@hooks": `${prefix}/hooks`,
});

module.exports = aliases;

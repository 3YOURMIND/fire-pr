const pkg = require('./package');
const path = require('path');

module.exports = {
	mode: 'universal',
	srcDir: './fire-pr-site',
	generate: {
		dir: 'dist-site',
	},

	/*
  ** Headers of the page
  */
	head: {
		title: pkg.name,
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: pkg.description },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},

	/*
  ** Customize the progress-bar color
  */
	loading: { color: '#3B8070' },

	/*
  ** Global CSS
  */
	css: [],

	/*
  ** Plugins to load before mounting the App
  */
	plugins: [],

	/*
  ** Nuxt.js modules
  */
	modules: [],

	/*
  ** Build configuration
  */
	build: {
		/*
    ** You can extend webpack config here
    */
		extend(config, ctx) {
			if (ctx.isDev) {
				if (config.name === 'client') {
					config.entry.app[0] =
						'webpack-hot-middleware/client?name=client&reload=true&timeout=30000&path=/__webpack_hmr';
					config.entry.app[1] = path.normalize(
						path.resolve(__dirname, './fire-pr-site/.nuxt/client.js'),
					);
					config.output.path = path.normalize(
						path.resolve(__dirname, './fire-pr-site/.nuxt/dist'),
					);
				}
				if (config.name === 'server') {
					config.entry = path.normalize(
						path.resolve(__dirname, './fire-pr-site/.nuxt/server.js'),
					);
					config.output.path = path.normalize(
						path.resolve(__dirname, './fire-pr-site/.nuxt/dist'),
					);
				}

				console.log(config);
				console.log('\n\n\n----------------------\n');
			}
			// Run ESLint on save
			if (ctx.isDev && ctx.isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/,
				});
			}
		},
	},
};

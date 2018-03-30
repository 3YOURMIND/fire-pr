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
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700',
			},
		],
	},

	/*
  ** Customize the progress-bar color
  */
	loading: { color: '#EF629F' },

	/*
  ** Global CSS
  */
	css: [
		'purecss/build/base-min.css',
		'purecss/build/grids-min.css',
		'purecss/build/grids-responsive-min.css',
	],

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
		extend(config, ctx) {},
	},
};
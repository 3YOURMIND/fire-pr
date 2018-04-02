const pkg = require('./package');
const path = require('path');

module.exports = {
	mode: 'universal',
	srcDir: './fire-pr-site',
	generate: {
		dir: 'dist-site',
	},
	head: {
		title: 'Fire PR | Pull Request Tooling',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: 'referrer', content: 'no-referrer' },
			{ name: 'theme-color', content: '#EF629F' },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/icon.png' },
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700',
			},
		],
	},
	loading: { color: '#EF629F' },
	css: [
		'purecss/build/base-min.css',
		'purecss/build/grids-min.css',
		'purecss/build/grids-responsive-min.css',
	],
	plugins: [],
	modules: ['@nuxtjs/pwa'],
	build: {
		extend(config, ctx) {},
	},
	manifest: {
		name: 'Fire PR Website',
		short_name: 'fire-pr-site',
		start_url: '/',
		display: 'standalone',
		background_color: '#fff',
		description:
			'The website of the extension Fire PR which streamlines the Pull Request creation workflow',
	},
};

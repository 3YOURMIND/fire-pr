import pkg from './package.json';
import uglify from 'rollup-plugin-uglify';

export default [
	// browser-friendly UMD build
	{
		input: './fire-pr-core/index.js',
		output: {
			name: 'howLongUntilLunch',
			file: pkg.browser,
			format: 'umd',
		},
		plugins: [uglify()],
	},
	{
		input: './fire-pr-core/index.js',
		output: [
			{ file: pkg.main, format: 'cjs' },
			{ file: pkg.module, format: 'es' },
		],
		plugins: [uglify()],
	},
];

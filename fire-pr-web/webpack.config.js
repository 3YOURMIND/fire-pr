const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackShellPlugin = require('webpack-shell-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
	context: __dirname + '/src',
	entry: {
		background: './background.js',
		'popup/popup': './popup.js',
	},
	output: {
		path: __dirname + '/dist',
		filename: '[name].js',
	},
	resolve: {
		extensions: ['.js', '.vue'],
	},
	module: {
		loaders: [
			{
				test: /\.vue$/,
				loaders: 'vue-loader',
				options: {
					loaders: {
						scss: ExtractTextPlugin.extract({
							use: 'css-loader!sass-loader',
							fallback: 'vue-style-loader',
						}),
						sass: ExtractTextPlugin.extract({
							use: 'css-loader!sass-loader?indentedSyntax',
							fallback: 'vue-style-loader',
						}),
					},
				},
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					use: 'css-loader',
					fallback: 'vue-loader',
				}),
			},
			{
				test: /\.(png|jpg|gif|ico)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]?emitFile=false',
				},
			},
			{
				test: /\.svg$/,
				loader: 'svg-inline-loader?classPrefix',
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]?emitFile=false',
				},
			},
		],
	},
	plugins: [
		new ExtractTextPlugin({
			filename: '[name].css',
		}),
		new CopyWebpackPlugin([
			{ from: 'icons', to: 'icons', ignore: ['icon.xcf'] },
			{ from: 'popup.html', to: 'popup/popup.html' },
			{ from: 'assets/fonts', to: 'popup' },
			{ from: 'manifest.json', to: 'manifest.json' },
		]),
		new WebpackShellPlugin({
			onBuildEnd: ['node ./fire-pr-web/scripts/remove-evals.js'],
		}),
	],
};

if (process.env.NODE_ENV === 'production') {
	config.devtool = '#cheap-module-source-map';

	config.plugins = (config.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"',
			},
		}),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true,
			compress: {
				warnings: false,
			},
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true,
		}),
	]);
}

module.exports = config;

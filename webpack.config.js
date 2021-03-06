'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ENV = process.env.NODE_ENV || 'dev';

console.log('NODE_ENV=', ENV);

const Stylus = {
	dev: {
		test: /\.styl$/,
		loader: 'style-loader!css-loader!postcss-loader!stylus-loader'
	},
	prod: {
		test: /\.styl$/,
		loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!stylus-loader')
	}
};

const config = module.exports = {
	entry: './app/src/app.js',
	// entry: [
	// 	'./app/src/app.js', // main entry
	// 	'webpack-dev-server/client?http://localhost:3000', // no need to do --inline
	// 	'webpack/hot/only-dev-server' // no need to do --hot
	// ],

	output: {
		path: './app/public',
		filename: 'app.js',
		publicPath: '/'
	},

	module: {
		resolve: {
			extensions: ['', '.js', '.styl', 'css']
		},

		loaders: [{
			test: /(\.js$)|(\.jsx$)/,
			exclude: /node_modules/,
			loaders: ENV === 'dev' ? ['react-hot', 'babel?cacheDirectory'] : ['babel']
		}, {
			test: /\/public\//,
			loader: 'url-loader?limit=10000'
		}, {
			test: /\.(otf|eot|svg|ttf|woff)/,
			loader: 'url-loader?limit=10000'
		},	{
			test: /\.(jpe?g|png|gif)/,
			loader: 'url-loader?limit=10000'
		},	{
			test: /\.styl$/,
			loader: 'style-loader!css-loader!stylus-loader'
		},	{
			test: /\.css$/,
			loader: 'style-loader!css-loader'
		}, {
			test: /\.json$/,
			loaders: ['json']
		}, {
			test: /\.hson$/,
			loaders: ['hson']
		}]
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: 'AlgDB',
			template: './app/src/index.html',
			favicon: './app/src/assets/favicon.png'
		}),
		new HtmlWebpackPlugin({
			filename: '404.html',
			title: 'AlgDB',
			template: './app/src/index.html',
			favicon: './app/src/assets/favicon.png'
		}),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.NoErrorsPlugin()
	]
};

if (ENV === 'dev') { // dev specific stuff
	config.devtool = 'eval';
	config.devServer = {
		quiet: false,
		noInfo: true,
		lazy: false,
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true,
		publicPath: '/',
		stats: {colors: false},
		port: 3000
	};
} else { // Produciton stuff
	config.plugins.push(
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
			output: {
				comments: false
			},
			sourceMap: false
		}),
		new ExtractTextPlugin(config.output.cssFilename, {
			allChunks: true
		})
	);
}


const path = require('path');
const webpack = require('webpack');
// const env = require('./env');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/,
				use: ['style-loader','css-loader','sass-loader']
			},
			{
				test: /\.css$/,
				use: ['style-loader','css-loader']
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			}
		]
	},
	plugins: [
		// new webpack.EnvironmentPlugin(env), // export env.js to client-side
	]
}
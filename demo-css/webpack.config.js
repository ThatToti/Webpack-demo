
var path = require('path');

module.exports = {
	entry: './index.js',
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: 'css-loader'
			}
		]
	}
};

var path = require('path');

module.exports = {
	entry: './src/index',
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'bundle.js'
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['', '.webpack.js', '.web.js', '.tsx', '.ts', '.jsx', '.js']
	},
	module: {
		loaders: [
			{test: /\.tsx$/, loader: 'ts-loader'},
			{test: /\.ts$/, loader: 'ts-loader'},
			{test: /\.css$/, loader: 'style-loader!css-loader'}
		]
	}
}

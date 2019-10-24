module.exports = {
	mode: 'production',
	output: {
		filename: 'demo-menu.js',
	},
	module: {
		rules: [
		{ test: /\.css$/, loader: 'style-loader!css-loader' },
		{
			test: /.js?$/,
			exclude: /node_modules/,
			use: {
				loader: "babel-loader"
			}
		}
		]
	}
};
module.exports = {
	mode: 'production',
	output: {
		filename: 'demo-menu.js',
	},
	module: {
		rules: [
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
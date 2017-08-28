module.exports = {
	context: __dirname + "/app",
	entry: "./js/client.js",
	output: {
		filename: "app.js",
		path: __dirname + "/public"
	},

	resolve: {
		extensions: ['.js', '.jsx', '.json']
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: ["babel-loader"]
			}
		]
	}
};
var path = require('path')


module.exports = {
	context: __dirname + '/dist/',
    entry: {
    	entry: "js/entry.js",
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].bundle.js",
        publicPath: 'static/'
    },
    resolve: {
    	root: [path.resolve(__dirname, './dist')]
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};

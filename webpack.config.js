module.exports = {
    entry: {
    	"index": "js/entry.js",
    },
    output: {
        path: __dirname,
        filename: "dist/bundle.js"
    },
    module: {
        loaders: [
            //{ test: /\.css$/, loader: "style!css" }
        ]
    }
};

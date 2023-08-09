const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        index: "./src/index.tsx",
    },
    mode: "development",
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
              test: /\.(js|ts|tsx)$/,
               use: [{
                  loader: "babel-loader",
                }],
               exclude: /node_modules/,
            },
            {
              exclude: /node_modules/,
              test: /\.css$/i,
               use: [
                  "style-loader",
                  "css-loader"
               ]
            },
            {
				test: /\.(png|jpg|jpeg|mp3|ogg|wav|ttf)$/,
				loader: 'url-loader'
			}
        ],
    },
    devServer: {
        hot: true,
		devMiddleware: {
			writeToDisk: true
		},
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "manifest.json", to: "../manifest.json" },
            ],
        }),
        ...getHtmlPlugins([ "index" ]),
    ],
    resolve: {
        extensions: [ ".tsx", ".ts", ".js" ],
    },
    output: {
        path: path.join( __dirname, "dist/js" ),
        filename: "[name].js",
        publicPath: '/'
    },
};

function getHtmlPlugins(chunks) {
    return chunks.map(
        (chunk) =>
            new HTMLPlugin({
                title: `...just for lols`,
                filename: `${chunk}.html`,
                chunks: [chunk],
            })
    );
}
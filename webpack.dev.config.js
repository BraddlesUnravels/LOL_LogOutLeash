const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin")

module.exports = {
    entry: {
        index: "./src/index.tsx",
    },
    mode: "development",
    module: {
        rules: [
            {
              test: /\.(js|ts|tsx)$/,
               use: [{
                  loader: "babel-loader",
                //    options: {
                //      compilerOptions: { noEmit: false },
                //     }
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
        ...getHtmlPlugins(["index"]),
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        path: path.join(__dirname, "dist/js"),
        filename: "[name].js",
    },
};

function getHtmlPlugins(chunks) {
    return chunks.map(
        (chunk) =>
            new HTMLPlugin({
                title: "...just for lols",
                //template: './src/index.html',
                filename: `${chunk}.html`,
                chunks: [chunk],
            })
    );
}
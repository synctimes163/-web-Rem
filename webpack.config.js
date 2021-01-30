var webpack = require("webpack");
var path = require("path");

module.exports = {
    mode: "development",
    entry: [
        "./app.js"
    ],
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/i, use: ["style-loader", "css-loader"]
            },
            {
                test: /\.scss$/i, use: ["style-loader", "css-loader", "sass-loader" ]
            },
            {
                test: /\.(png|jpg)$/i, use: ["url-loader?limit=1928"]
            },
        ]
    }
}
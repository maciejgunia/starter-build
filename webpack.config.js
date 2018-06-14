const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const distFolder = path.resolve(
    `${__dirname}/wp/wp-content/themes/weback`,
    "custom"
);

module.exports = {
    entry: { main: "./src/index.js" },
    output: {
        path: distFolder,
        filename: "[name].[chunkhash].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(distFolder, {}),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css"
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: "./src/index.html",
            filename: "index.html"
        }),
        new ManifestPlugin(),
        new BrowserSyncPlugin(
            {
                host: "localhost",
                port: 3000,
                proxy: "http://webpack.test/"
            },
            {
                injectCss: true,
                reload: false
            }
        )
    ]
};

const commonWebpackConfig = require("./webpack.common.js")
const {merge} = require("webpack-merge");
const ZipPlugin = require("zip-webpack-plugin");

module.exports = merge(commonWebpackConfig, {
    mode: "production",
    plugins: [
        new ZipPlugin({
            filename: "sesc-master-captcha-resolver.zip"
        })
    ]
});
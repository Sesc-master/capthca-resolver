const commonWebpackConfig = require("./webpack.common.js")
const {merge} = require("webpack-merge");

module.exports = merge(commonWebpackConfig, {
    mode: "development",
    devtool: "inline-source-map"
});
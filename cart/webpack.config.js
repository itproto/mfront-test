
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MFP = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
    mode: "development",
    devtool: 'source-map',
    devServer: {
        port: 8082
    },
    plugins: [
        new MFP({
            name: 'cart',
            filename: 'remoteEntry.js',
            exposes: {
                './ShowCart': './src/bootstrap'
            },
            shared: ['faker']
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}
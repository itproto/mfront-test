
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MFP = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
    mode: "development",
    devServer: {
        port: 8082
    },
    plugins: [
        new MFP({
            name: 'cart',
            filename: 'remoteEntry.js',
            exposes: {
                './ShowCart': './src/index'
            },
            shared: ['faker']
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MFP = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
    mode: "development",
    devtool: 'source-map',
    devServer: {
        port: 8081
    },
    plugins: [
        new MFP({
            name: 'products',
            filename: 'remoteEntry.js',
            exposes: {
                './ProductsIndex': './src/bootstrap'
            },
            shared: ['faker']


        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}
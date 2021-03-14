
module.exports = {
    mode: "development",
    devServer: {
        port: 8081
    },
    plugins: [
        new (require('html-webpack-plugin'))({
            template: './public/index.html'
        })
    ]
}
const path = require("path")

module.exports = {
    entry: './js/app.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 8080,
        host: '0.0.0.0',
        hot: true,
        allowedHosts: [
            '.amazonaws.com',
            'localhost'
        ]
    }
}
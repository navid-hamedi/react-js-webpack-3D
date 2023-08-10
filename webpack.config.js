const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
            loader: 'babel-loader',
            },
        },
        {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
            test: /\.html$/,
            use: {
            loader: 'html-loader',
            },
        },
        {
            test: /\.(png|jpg|jpeg|gif|svg)$/i,
            type: 'asset/resource',
        },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: './index.html',
        }),
    ],
    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
        proxy: {
            '/server': {
                target: 'http://localhost:80',
                pathRewrite: { '^/server': '/server' },
            },
        },
    },
};

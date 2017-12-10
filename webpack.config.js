'use strict'


let path = require('path')

let webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue!eslint'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'vue-html'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&minetype=application/font-woff"
            }, {
                test: /\.(ttf|eot|svg#iconfont)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader"
            },
            {
                test:/\.css$/,
                loader: "style!css?sourceMap"
            },
            {
                test: /\.less$/,
                loader: "style!css?sourceMap!less?sourceMap"
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: path.join(__dirname, './src/index.html')
        })
    ]
};

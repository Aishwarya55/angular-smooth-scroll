
const webpack = require("webpack")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')


module.exports = {
    entry : './demo/index.js',
    output : {
        filename:'[name].bundle.js'
    },
    module:{
        rules: [
        {
            test:/\.js$/,
            exclude:[/node_modules/],
            loaders:['ng-annotate-loader', 'babel-loader']
        },
        { 
            test: /\.html$/, 
            loader: 'raw-loader' 
        },
        {
            test: /\.css$/,
            loaders: ['style-loader','css-loader']
        },
        {
            test: /\.(gif|png|jpe?g|svg)$/i,
            loader: 'file-loader',
            query:{
                outputPath: './assets/',
                name: '[name].[ext]'
            }

        }
    ]
},
    plugins:[
        new HTMLWebpackPlugin({
            template: 'index.html',
            inject:'head'
        }),
        new CopyWebpackPlugin([ { from: './src/assets', to: 'assets' } ])
    ]
}

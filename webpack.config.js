/**
 * Created by wangmengfei on 16-12-23.
 */
var webpack = require('webpack');
//css样式从js文件中分离出来
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require("path")
module.exports = {//注意这里是exports不是export
    devtool: 'eval-source-map',
    entry: ['webpack/hot/dev-server', path.join(__dirname, '/wap/bongmi.js')],//唯一入口文件,__dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录
    output: {//输出目录
        path: path.join(__dirname, "/build"),//打包后的js文件存放的地方
        //filename: "[name]-[hash].js"//打包后的js文件名
        filename: "[name].bundle.js"//打包后的js文件名
    },
    module: {
        loaders: [
            {test: /\.(js|jsx)$/,exclude: /node_modules/,loader: 'babel',
                query: {presets: ['es2015', 'react']}},
            //解析.scss文件,对于用 import 或 require 引入的sass文件进行加载，以及<style lang="sass">...</style>声明的内部样式进行加载
            {
                test: /\.(scss|sass)/,
                loader: ExtractTextPlugin.extract("style", 'css!sass') //这里用了样式分离出来的插件，如果不想分离出来，可以直接这样写
                /*loader:'style!css!sass'*/
            },
            {test: /\.css$/,loader: "style-loader!css-loader?modules"},
            {test: /\.less/,loader:'style!css?modules!less'},
            {test: /\.json$/,loader: "json"},
            {test: /\.coffee$/,loader: 'coffee'},
            {test: /\.html$/,loader: 'html'},
            {test: /\.(png|jpg)$/, loader: 'url?limit=8192'},
            {test: /\.woff$/,loader:"url?limit=10000&minetype=application/font-woff"},
            {test: /\.ttf$/,loader: "file"},
            {test: /\.eot$/,loader: "file"},
            {test: /\.svg$/,loader: "file"}
        ]
    },
    plugins: [
        // 下面这一行可以在Bundle.js中第一行看到
        new webpack.BannerPlugin('This file is created by W、MF'),
        new webpack.HotModuleReplacementPlugin(),//热模块替换插件
        new ExtractTextPlugin("style.css") //提取出来的样式放在style.css文件中
    ],
    postcss:[
        require('postcss-modules-values'),
        require('precss'),
        require('autoprefixer')//调用autoprefixer插件
    ],
    resolve: {
        alias: {
            js: path.join(__dirname, "build/scripts"),
            src: path.join(__dirname, "build/scripts"),
            styles: path.join(__dirname, "build/styles"),
            img: path.join(__dirname, "build/img")
        },
        root: [
            path.join(__dirname, "bower_components")
        ]
    },
    //webpack-dev-server配置
    devServer: {
        contentBase: './build',//默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到"build"目录）
        colors: true,//在cmd终端中输出彩色日志
        historyApiFallback: true,//在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        inline: true,//设置为true，当源文件改变时会自动刷新页面
        port: 8080,//设置默认监听端口，如果省略，默认为"8080"
        process: true,//显示合并代码进度
    }
};
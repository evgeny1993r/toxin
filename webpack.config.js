const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/index',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app_[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: 'pug-loader'
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.s[ac]ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']      
                    }      
                }
            },
            {
                test: /\.(png|jpg|svg|eot|otf|woff|ttf)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'assets'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.pug'
        }),
        new MiniCssExtractPlugin({
            filename: 'style_[hash].css'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            '$': 'jquery',
            'jQuery': 'jquery',
            'jquery': 'jquery'
        })
    ]
}
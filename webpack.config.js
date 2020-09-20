const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: {
        'index': './src/index'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './scripts/[name].js'
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
                    name: 'assets/[name].[ext]',
                    publicPath: '../'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.pug',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/colors-type/colors-type.pug',
            filename: './pages/colors-type.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/cards/cards.pug',
            filename: './pages/cards.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/headers-footers/headers-footers.pug',
            filename: './pages/headers-footers.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/form-elements/form-elements.pug',
            filename: './pages/form-elements.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/landing-page/landing-page.pug',
            filename: './pages/landing-page.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/authorization/authorization.pug',
            filename: './pages/authorization.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/registration/registration.pug',
            filename: './pages/registration.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/room-details/room-details.pug',
            filename: './pages/room-details.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/search-room/search-room.pug',
            filename: './pages/search-room.html'
        }),
        new MiniCssExtractPlugin({
            filename: './styles/[name].css'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            '$': 'jquery',
            'jQuery': 'jquery',
            'jquery': 'jquery',
            'window.jQuery' : 'jquery'
        })
    ]
}
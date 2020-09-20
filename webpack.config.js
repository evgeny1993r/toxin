const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: {
        'index': './src/index',
        'colors-type': './src/pages/colors-type/colors-type',
        'cards': './src/pages/cards/cards',
        'headers-footers': './src/pages/headers-footers/headers-footers',
        'form-elements': './src/pages/form-elements/form-elements',
        'landing-page': './src/pages/landing-page/landing-page',
        'authorization': './src/pages/authorization/authorization',
        'registration': './src/pages/registration/registration',
        'room-details': './src/pages/room-details/room-details',
        'search-room': './src/pages/search-room/search-room'
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
            filename: 'index.html',
            chunks: 'index',
            excludeChunks: [
                'colors-type', 
                'cards', 
                'headers-footers', 
                'form-elements', 
                'landing-page',
                'authorization',
                'registration',
                'room-details',
                'search-room'
            ]
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/colors-type/colors-type.pug',
            filename: './pages/colors-type.html',
            chunks: 'colors-type',
            excludeChunks: [
                'cards', 
                'headers-footers', 
                'form-elements', 
                'landing-page',
                'authorization',
                'registration',
                'room-details',
                'search-room'
            ]
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/cards/cards.pug',
            filename: './pages/cards.html',
            chunks: 'cards',
            excludeChunks: [
                'colors-type', 
                'headers-footers', 
                'form-elements', 
                'landing-page',
                'authorization',
                'registration',
                'room-details',
                'search-room'
            ]
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/headers-footers/headers-footers.pug',
            filename: './pages/headers-footers.html',
            chunks: 'headers-footers',
            excludeChunks: [
                'colors-type', 
                'cards', 
                'form-elements', 
                'landing-page',
                'authorization',
                'registration',
                'room-details',
                'search-room'
            ]
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/form-elements/form-elements.pug',
            filename: './pages/form-elements.html',
            chunks: 'form-elements',
            excludeChunks: [
                'colors-type', 
                'cards', 
                'headers-footers', 
                'landing-page',
                'authorization',
                'registration',
                'room-details',
                'search-room'
            ]
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/landing-page/landing-page.pug',
            filename: './pages/landing-page.html',
            chunks: 'landing-page',
            excludeChunks: [
                'colors-type',
                'cards',
                'headers-footers',
                'form-elements',
                'authorization',
                'registration',
                'room-details',
                'search-room'
            ]
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/authorization/authorization.pug',
            filename: './pages/authorization.html',
            chunks: 'authorization',
            excludeChunks: [
                'colors-type',
                'cards',
                'headers-footers',
                'form-elements',
                'landing-page',
                'registration',
                'room-details',
                'search-room'
            ]
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/registration/registration.pug',
            filename: './pages/registration.html',
            chunks: 'registration',
            excludeChunks: [
                'colors-type',
                'cards',
                'headers-footers',
                'form-elements',
                'landing-page',
                'authorization',
                'room-details',
                'search-room'
            ]
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/room-details/room-details.pug',
            filename: './pages/room-details.html',
            chunks: 'room-details',
            excludeChunks: [
                'colors-type',
                'cards',
                'headers-footers',
                'form-elements',
                'landing-page',
                'authorization',
                'registration',
                'search-room'
            ]
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/search-room/search-room.pug',
            filename: './pages/search-room.html',
            chunks: 'search-room',
            excludeChunks: [
                'colors-type',
                'cards',
                'headers-footers',
                'form-elements',
                'landing-page',
                'authorization',
                'registration',
                'room-details'
            ]
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
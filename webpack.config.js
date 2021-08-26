const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
    // devtool: 'eval-source-map',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'js/app.js'
    },
    // resolve: {
    //     fallback: {
    //       util: require.resolve("util/")
    //     }
    // },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/style.css"
        }),
    ],
    module: {
        rules: [
            // {
            //     test: /\.m?js$/,
            //     exclude: /(node_modules|bower_components)/,
            //     use: {
            //         loader: 'babel-loader',
            //         options: {
            //             presets: ['@babel/preset-env']
            //         }
            //     }
            // },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                        options: {
                            url: false,
                        },
                    }
                ]
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: '/img'
                }
            },
        ]
    }
};
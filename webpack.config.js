const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        second: './src/js/second.js',
        bundle: './src/js/index.js',   
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }, {
                test: /\.(sc|sa)ss$/,
                use: [
                {
                    loader: MiniCssExtractPlugin.loader
                },{
                    loader: "css-loader"
                }, {
                    loader: "postcss-loader"
                }, {
                    loader: "sass-loader",
                    options: {
                        implementation: require('sass')
                    }
                }]
            }, {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        outputPath: 'images'
                    }
                }]
            }, {
                test: /\.(woff|woff2|ttf|otf|eot)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        outputPath: 'fonts'
                    }
                }]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "bundle.css"
        }),
        new CopyPlugin({
            patterns: [{
                from: path.resolve(__dirname, 'src/index.html'),
                to: path.resolve(__dirname, 'dist/index.html'),
            }]
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000
    }
}
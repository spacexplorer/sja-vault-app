const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;

module.exports = {
    // Webpack configuration goes here
    mode: 'development', //'production'
    entry: './src/index.js',
    output: {
        filename: 'bundle.[hash].js'
    },
    devtool: 'inline-source-map', //debugging
    module: {
        //we will support ESNext (Babel) and CSS Modules
        rules: [

            // First Rule
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader'] //.babelrc
            },

            // Second Rule
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader' //inline style loader/importer from css
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            camelCase: true,
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            favicon: 'public/favicon.ico'
        })
    ],
    devServer: {
        host: 'localhost',
        port: port, //const port
        historyApiFallback: true,
        open: true
    }
};
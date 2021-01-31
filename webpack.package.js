const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'index.js',
        libraryTarget: 'commonjs2',
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react']
                }
            },
                {
                    loader: 'eslint-loader',
                }]
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract(
              {
                  fallback: 'style-loader',
                  use: ['css-loader']
              }
            )
        },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js'],
    },
};

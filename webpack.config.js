const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path")
const Dotenv = require('dotenv-webpack');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ].map(require.resolve)
                    }
                }
            },
            {
                test: /\.(scss|css|sass|less)$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "scss-loader"},
                    {loader: "css-loader"},
                    {loader: "sass-loader"},
                    {loader: "less-loader"}
                ]
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            },
            {
                test: /\.(html|htm)$/,
                use: [
                    {loader: "html-loader"},
                    {loader: "htm-loader"}
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(gif|png|jpe?g|svg|jpeg)$/i,
                use: [
                    "file-loader",
                    {
                        loader: "image-webpack-loader"
                    }
                ]
            }
        ]
    },
    output: {
        filename: 'index.js',
        publicPath: '/'
    },
    devServer: {
        watchContentBase: true,
        publicPath: "/",
        historyApiFallback: true
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src/")
        }
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/views/index.html",
            filename: "./index.html"
        }),
        new Dotenv()
    ]
}
const {HotModuleReplacementPlugin} = require("webpack");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const {merge} = require ("webpack-merge");
const commom = require ("./webpack.common");

/** @type {import('webpack').Configuration} */

const devConfig = {
    
    mode: "development",

    devServer:{
        port: 3000,
        contentBase: "../dist",
        open: "firefox",
        hot: true
    },
    target: "web",

    plugins:[
        new HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin()
    ],
    devtool: "eval-source-map",

    module:{
        rules:[
            {
                use: ["style-loader", "css-loader", "sass-loader"],
                test: /.(css|sass|scss)$/
            },
        ]
    }
};



module.exports = merge(commom, devConfig);
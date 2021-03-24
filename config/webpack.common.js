
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const  HtmlWebpackPlugin  = require("html-webpack-plugin");
const path = require ("path");

/** @type {import('webpack').Configuration} */
module.exports = {
    
    //ENTRY POINT
    entry: path.join(__dirname,'..','src','index.js'),

    // OUTPUT DIRECTORY
    output:{
        path: path.resolve(__dirname, "../dist"),
        filename: "[name].[contenthash].js",
        publicPath: ""
    },


    // LOADERS CONFIGS ARE HERE 
    module:{
        rules:[
            {
                use: "babel-loader",
                test: /.(js|jsx)$/,
                exclude: /node_modules/
            },

            {
                type: "asset",
                test: /\.(png|svg|jpg|jped|gif)$/i,
            }
        
        ]
    },

    resolve: {
        extensions: [".js", ".jsx", ".json"]
    },

    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:"./public/index.html"
        })
    ]


}
var webpack = require('webpack');
var path = require('path');
module.exports = {
    context:__dirname+'/src',
    entry:[
      'webpack-dev-server/client?http://localhost:8080',
      './js/index.js'
    ],
    module:{
        loaders:[
            {
                test:/\.js?$/,
                exclude:/(node_modules)/,
                loader:'babel-loader',
                query:{
                    presets:['react','es2015']
                }
            }
        ]
    },
    output:{
        path:__dirname+'/src/',
        filename:'bundle.js',
        publicPath: "http://localhost:8080/src/"
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
};

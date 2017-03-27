var path=require('path');

const proconfig={
    
    entry:{
        index:'./index.js',
        library:'./webpackNumber.js'
    },
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist'),
        library:'webpackNumber',
        libraryTarget:'commonjs'
    },
    module:{
        rules:[
            {
                test:/\.tsx?$/,
                loader:'ts-loader',
                exclude:/node_modules/
            }
        ]
    },
    resolve:{
        extensions:['.tsx','.ts','.js']
    },
    devtool:'cheap-eval-source-map',
    devServer:{
        contentBase:path.join(__dirname,'dist'),
        compress:true,
        port:9000
    },
    externals:{
        lodash:'lodash'
    }
}

module.exports=proconfig;
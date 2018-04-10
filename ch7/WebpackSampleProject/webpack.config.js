module.exports = {
    devtool: "eval-source-map",

    //已多次提及的唯一入口文件
    entry: __dirname + "/app/main.js",
    output: {
        //打包后的文件存放的地方
        path: __dirname + "/public",
        //打包后输出文件的文件名
        filename: "bundle.js"
    },

    devServer: {
        //本地服务器所加载的页面所在的目录
        contentBase: "./public",
        //不跳转
        historyApiFallback: true,
        //实时刷新
        inline: true
    }
}
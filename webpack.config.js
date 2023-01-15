const path = require("path");
module.exports = {
    // 建置的模式
    mode : "development",  // 預設值為production，另有development
    // 入口
    entry : "./src/index.js",
    // 輸出
    output : {
        filename : "main.js",
        path : path.resolve(__dirname, "dist")
    },
    devServer : {
        static : "./dist"
    },
    // 模組載入規則
    module : {
        rules : [
            // css 樣式表載入規則
            {
                test : /\.css$/i,
                use : ["style-loader", "css-loader"]
            },
            // babel 載入器規則
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            }
        ]
    }
};
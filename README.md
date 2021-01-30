# -web-Rem

采用rem适配页面实战

项目遇到的问题

路由配置：

module: {
    rules: [
        {
            test: /\.css$/i, use: ["style-loader", "css-loader"]
        },
        {
            test: /\.scss$/i, use: ["style-loader", "css-loader", "sass-loader" ]  // sass-loader  应该写在最后面
        },
        {
            test: /\.(png|jpg)$/i, use: ["url-loader?limit=1928"]  // /\.(png|jpg)$/ 正则表达式中，避免空格，空格会导致scss 引入背景图片路径解析失败 /\.(png | jpg)$/
        },
    ]
}
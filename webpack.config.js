const path = require("path")
const htmlWebPlugin = require("html-webpack-plugin")

module.exports = {
    target: "web",
    mode: "development",
    entry: path.resolve(__dirname, "src", "main.js"),
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },

    // Configurando o Web Server
    devServer: {
        static: {
            directory: path.join(__dirname, "dist")
        },
        port: 3000,
        open: true,
        liveReload: true
    },

    // Configurando plugin para reconhecimento do HTML
    plugins: [
        new htmlWebPlugin(
            {
                template: path.resolve(__dirname, "index.html"),
                favicon: path.resolve("src", "assets", "scissors.svg")
            }
        )
    ],

    // Configurando a conexão com o css
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
}

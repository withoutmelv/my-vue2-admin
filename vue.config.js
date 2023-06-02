// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

const path = require("path")
function resolve(dir) {
  return path.join(__dirname, dir);
}

const port = 8080;
module.exports = {
  // 部署应用包时的基本URL
  publicPath: "./",
  // 项目打包输出目录
  outputDir: "dist",
  // 项目静态文件打包输出目录
  assetsDir: "static",
  productionSourceMap: false,
  devServer: {
    port: port,
    open: false,
    https: false,
    hotOnly: false,
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src")
      }
    }
  }
}

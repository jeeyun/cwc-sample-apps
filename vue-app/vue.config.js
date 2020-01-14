// vue.config.js
module.exports = {
    transpileDependencies: ["@clr"],
    chainWebpack: config => config.resolve.symlinks(false)
}
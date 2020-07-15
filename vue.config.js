// vue.config.js

const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: true,
  // 设置入口Title，输出文件名
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      fileName: '昆明锦业律师事务所.html',
      title: '昆明锦业律师事务所'
    }
  },
  // 设置别名
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
  }
}

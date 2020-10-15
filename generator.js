module.exports = (api, options, rootOptions) => {
  // 修改 `package.json` 里的字段
  api.extendPackage({
    scripts: {
      dev: 'vue-cli-service test'
    }
  })

  // 复制并用 ejs 渲染 `./template` 内所有的文件
  // api.render('./template')
  api.render('./template/store')

  if (options.foo) {
    // 有条件地生成文件
  }
  console.log('options', options)
}
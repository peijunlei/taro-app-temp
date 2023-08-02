


/**
 * @param {import('@tarojs/service').IPluginContext} ctx 
 * @param {*} pluginOpts 
 */
module.exports = (ctx) => {
  // 接下来使用 ctx 的时候就能获得智能提示了
  ctx.onBuildStart(() => {
    console.log('编译开始！')
  })
  ctx.onBuildFinish(() => {
    console.log('编译结束！')
  })
}
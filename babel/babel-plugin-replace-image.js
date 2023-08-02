require('dotenv').config()
const t = require('@babel/types');

// 微信小程序打包
const weappProdFlag = process.env.TARO_ENV === 'weapp' && process.env.NODE_ENV == 'production';

const OSS_HOST = process.env.OSS_HOST;
console.log('OSS_HOST', OSS_HOST) //
/**
 * 替换图片路径插件
 */
module.exports = function () {

  return {
    visitor: {
      // 1.在微信小程序打包情况下，修改图片地址为oss地址
      ImportDeclaration(path) {
        if (!weappProdFlag) return;
        try {
          const { node } = path;
          const { value } = node.source;
          if (value.startsWith('@/assets/image')) {

            const name = node.specifiers[0].local.name;
            const url = value.replace('@/assets/image', `${OSS_HOST}/assets/image`);
            // const bg = 'xxxx'
            path.replaceWith(t.variableDeclaration('const', [t.variableDeclarator(t.identifier(name), t.stringLiteral(url))]));
          }
        } catch (e) {
          console.error('import方式图片url替换失败');
        }
      },
      CallExpression(path) {
        if (!weappProdFlag) return;
        const { node } = path;
        const { callee, arguments: args } = node;
        try {
          if (callee.type === 'Identifier' && callee.name === 'require') {
            const value = args[0].value;
            if (value.startsWith('@/assets/image')) {
              path.replaceWith(t.stringLiteral(value.replace('@/assets/image', `${OSS_HOST}/assets/image`)));
            }
          }
        } catch (e) {
          console.error('require形式图片url替换失败');
        }
      },
    }
  };
}

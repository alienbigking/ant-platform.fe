const {
  override,
  addWebpackAlias,
  addWebpackPlugin,
  addWebpackModuleRule
} = require("customize-cra");
const path = require("path");
console.log("目录", path.resolve(__dirname, 'src'))

function pathResolve(pathUrl) {
  return path.join(__dirname, pathUrl)
}

module.exports = override(
  addWebpackAlias({
    ['@src']: pathResolve('./src'),
  }),
  // addWebpackModuleRule({test: /\.txt$/, use: 'raw-loader'})
)

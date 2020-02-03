const path = require('path')

module.exports = {
  entry: './index.js',
  devtool: 'source-map',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'dynImportBug',
    libraryTarget: 'umd',
    globalObject: 'this'
  }
}

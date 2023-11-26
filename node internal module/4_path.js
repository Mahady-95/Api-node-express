const path = require('path')
let filePath = 'I:\\Express Js\\myapp\\node internal module\\test.js'
let extName = path.extname(filePath)
console.log(extName)
let fileName = path.basename(filePath)
console.log(fileName)

const fs = require('fs')
const path = require('path')

// let fol_path = 'I:\\Express Js\\myapp\\node internal module\\Demo-Folder'
// let fol_contents = fs.readdirSync(fol_path)
// console.log(fol_contents)

//Copy paste
let srcDir = 'I:\\Express Js\\myapp\\node internal module\\Demo-Folder\\f2.txt'
let desDir = 'I:\\Express Js\\myapp\\node internal module\\DestinationDir'

let fileTobeCopied = path.basename(srcDir)
let destPath = path.join(desDir, fileTobeCopied)

fs.copyFileSync(srcDir, destPath)
console.log('File copied')

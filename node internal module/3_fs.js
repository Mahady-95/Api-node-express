const fs = require('fs')

// how to read, write, delete a file
//Read
// let content = fs.readFileSync('f1.txt')
// console.log('Output -> '+ content)
//Write
//fs.writeFileSync('f4.txt','This is the data we want to write f4')
//Update
// fs.appendFileSync('f4.txt', 'This is we want to append')
// console.log('Data written')
//Delete
// fs.unlinkSync('f4.txt')
//creating directory
// fs.mkdirSync('mydirectory')
// console.log('Directory created')
// delete directory
// fs.rmdirSync('mydirectory')
// console.log('directory deleted')
//folder is exist or not
// let fol = fs.existsSync('mydirectory')
// console.log(fol)
// check what a folder contains
let fol_path = 'I:\\Express Js\\myapp\\node internal module\\Demo-Folder'
let fol_contents = fs.readdirSync(fol_path)
console.log(fol_contents)
const cp = require('child_process')// import a module in node js

// console.log('Trying to open calculator')

// cp.execSync('calc')
// console.log('Calculator opened')
//cp.execSync('start chrome https://portal.aiub.edu/')
console.log('Output -> ' + cp.execSync('node test.js'))
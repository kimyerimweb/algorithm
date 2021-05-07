const fs = require('fs')
const input = parseInt(fs.readFileSync('/dev/stdin').toString())

console.log((Math.pow(input,2)*Math.PI).toFixed(6))
console.log((Math.pow(input,2)*2).toFixed(6))


const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split(" ").map(x => Number(x))

const x = input[0]
const y = input[1]
const wx = Math.abs(input[2]-x)
const hy = Math.abs(input[3]-y)

const min = Math.min(x,y,wx,hy)

console.log(min)



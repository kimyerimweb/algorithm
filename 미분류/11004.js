const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split("\n")

let temp = input.shift().split(' ').map(el => parseInt(el))
let N = temp.shift()
let k = temp.shift()

input = input.shift().split(' ').map(el => parseInt(el))

input = input.sort((a,b) => a - b)

console.log(input[k-1])
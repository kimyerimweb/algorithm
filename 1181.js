const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// let input = [13,'but','i','wont','hesitate','no','more','no','more','it','cannot','wait','im','yours']

let num = parseInt(input.shift());

input.sort((a,b) => {
        return a.length-b.length || a.localeCompare(b)
})

let newSet = new Set(input)
input = Array.from(newSet)

console.log(input.join('\n'))
const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let doc = input.shift()
const word = input.shift()

let count = 0

while(true){
    const idx = doc.indexOf(word)
    if(idx === -1){
        break
    }else {
        count++
        doc = doc.slice(idx+word.length,doc.length)
    }
}

console.log(count)

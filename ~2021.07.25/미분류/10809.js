const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString()

let result = []

function searchApb(apb){
    return (input.indexOf(apb))
}

for(let k = 0;k < 26; k++){
    result.push(searchApb(String.fromCharCode(k+97))) 
}

console.log(result.join(' '))
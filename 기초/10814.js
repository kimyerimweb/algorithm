const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

// let input = ['4','21 Junkyu', '21 Dohyun', '21 Dohyuen', '20 Sunyoung']

let num = parseInt(input.shift())

for(let k = 0;k < num;k++){
    input[k] = input[k].split(' ')
    input[k][0] = parseInt(input[k][0])
}

input.sort((a,b) => {
    return a[0]-b[0]
})

for(let k = 0;k < num;k++){
    input[k] = input[k].join(' ')
}

console.log(input.join('\n'))


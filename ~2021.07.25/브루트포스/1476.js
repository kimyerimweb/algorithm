const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split(" ").map(x => parseInt(x))

const [E,S,M] = input

let i = 0

while(true){
    i++

    if(E === i % 15 && S === i % 28 && M === i % 19){
        console.log(i)
        process.exit()
    }
}
const fs = require('fs');
let input = parseInt(fs.readFileSync('/dev/stdin').toString())

let bird = 1
let count = 0

while(true){
    if(bird <= input){
        input -= bird
        bird++
        count++
    }else {
        bird = 1
    }

    if(input === 0){
        break
    }
}

console.log(count)
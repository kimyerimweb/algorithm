const fs = require('fs');
let input = parseInt(fs.readFileSync('/dev/stdin').toString())
let result = new Array(input + 1).fill(0)

result[2] = 1
result[3] = 1

for(let i = 4; i < input + 1; i++){
    const mod3 = i/3
    const mod2 = i/2
    const minus1 = i-1

    let ansMod3 = 1000000
    let ansMod2 = 1000000
    let ansMinus1 = result[minus1] + 1

    if(Math.floor(mod3) === mod3){
        ansMod3 = result[mod3] + 1
    }

    if(Math.floor(mod2) === mod2){
        ansMod2 = result[mod2] + 1
    }

    result[i] = Math.min(ansMod3,ansMod2,ansMinus1)
}

console.log(result[input])
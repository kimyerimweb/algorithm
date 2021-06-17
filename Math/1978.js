const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

const num = parseInt(input.shift())
let count = 0

input = input[0].split(' ').map(x => parseInt(x))

function isSosu(value){
    if(value === 1){
        return
    }else {
        if(value === 2){
            count++
            return
        }else {
            for(let i = 2;i < value;i++){
                if(value % i === 0){
                    return
                }
            }
            count++
        }
    }
}

for(let i = 0;i < num;i++){
    isSosu(input[i])
}

console.log(count)
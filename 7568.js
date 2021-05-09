const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const count = parseInt(input.shift())

let result = ''

for(let k = 0;k < count; k++){
    input[k] = input[k].split(' ').map(x => parseInt(x))
}


function getBigNum(input){
    for(let k = 0;k < count;k++){
        const weight = input[k][0];
        const height = input[k][1];

        let BigNum = 1;

        for(let j = 0;j <count;j++){
            if(weight<input[j][0]&&height<input[j][1]){
                BigNum++
            }
        }
        result += `${BigNum} `
    }
    console.log(result.substr(0,result.length-1))
}

getBigNum(input)
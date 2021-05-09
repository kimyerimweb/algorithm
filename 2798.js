const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let CARD = input[0].split(' ').map(x => parseInt(x))

const IDEALSUM = CARD[1]
let min = 3000000;
let result = 0;

CARD = input[1].split(' ').map(x => parseInt(x))

for(let k = 0;k < CARD.length-2;k++){
    for(let j = k+1;j < CARD.length - 1;j++){
        for(let i = j+1;i < CARD.length;i++){
            let realSum = CARD[k]+CARD[j]+CARD[i]   
            let sumSub = IDEALSUM - realSum
            if(IDEALSUM >= realSum &&  Math.abs(min) >= Math.abs(sumSub)){
                min = sumSub
                sum = realSum;
            }
        }
    }
}

console.log(sum)
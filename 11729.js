const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString());

let count = 0;
let arr = ''

function hanoi(n,from,mid,to){
    count++
    if(n===1){
        return arr += `${from} ${to}\n`
    }
    hanoi(n-1,from,to,mid);
    arr += `${from} ${to}\n`
    hanoi(n-1,mid,from,to)
}

hanoi(input,1,2,3)
console.log(count)
console.log(arr.substr(0,arr.length-1))




//가장 큰 고리 전에 있는 고리는 경유지에 놓고
//가장 큰 고리는 목적지에 놓고
//경유지에 있는 고리는 다시 목적지에 놓는다
const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let input = ['5','3 4','1 1','1 -1','2 2','3 3']

let num = parseInt(input.shift());

let arr = []

for(let i = 0; i < num; i++){
    arr.push(input[i].split(' ').map(x => parseInt(x)))
}

arr.sort((a,b) => {
    if(a[1]!==b[1]){
        return a[1]-b[1]
    }
    return a[0]-b[0]
})

let result = []

for(let i = 0; i < num;i++){
    result.push(`${arr[i][0]} ${arr[i][1]}`) 
}

console.log(result.join('\n'))
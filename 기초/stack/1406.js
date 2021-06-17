const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let result = input.shift(); //'abcd'
let num = parseInt(input.shift()); //3

let cursor = result.length; //4

for(let i = 0;i < input.length; i++){
    input[i] = input[i].split(" ")
}

function editStr(input){
    switch(input[0]){
        case 'L' : cursor = cursor === 0 ? cursor : cursor - 1
            break;
        case 'D' : cursor = cursor === result.length? cursor : cursor + 1
            break;
        case 'B' : if(cursor !== 0){ 
                    result = result.slice(0,cursor-1)+result.slice(cursor,result.length)
                    cursor--
                    }
            break;
        default : {
            result = result.slice(0,cursor) + input[1] + result.slice(cursor,result.length)
            cursor++
        }
    }
}


for(let i = 0; i < num; i++){
    editStr(input[i])
}

console.log(result)

//Node.js는 0.3초 불가..
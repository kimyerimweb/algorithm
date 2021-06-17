const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n");

const count = Number(input[0]);

for(let k = 1;k <= count;k++){
    let result = 0;
    let num = 0;
    for(let i = 0;i < input[k].length;i++){
        if("O" === input[k][i]){
            num++;
        }
        else{
            
            num = 0;
        }
        result += num;
    }
    console.log(result);
}
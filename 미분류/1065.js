const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString());

let result = 0;

function getInterval(num1,num2){
    return (Number(num1) - Number(num2));
}

function isHansu(num){
    if(num < 100){
        return true;
    } else{
        const numStr =  num.toString();
        const interval = getInterval(numStr[1],numStr[0]);
        
        for(let i = 2; i < numStr.length ; i++){
            if(getInterval(numStr[i],numStr[i-1]) !== interval){
                return false;
            }
        }
        return true;
    }  
}

for(let i = 1; i <= input; i++){
    if(isHansu(i)===true){
        result++;
    }
}

console.log(result);
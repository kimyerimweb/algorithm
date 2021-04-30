const fs = require('fs');
let input = Number(fs.readFileSync('/dev/stdin').toString()); //26

let sum = input;
let k = 0;

while(true){
    k++;

    let num1 = sum%10; //일의 자리 6
    let num2 = Math.floor(sum/10); //십의 자리 2
    let num3 = (num1 + num2)%10; //8

    sum = num1*10 + num3; //68

    if(input===sum)break;
}

console.log(k);


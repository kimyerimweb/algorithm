const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString());

if(input%4!==0){
    console.log(0);
}else {
    if(input%400===0){
        console.log(1)
    }else if(input%100!==0){
        console.log(1)
    }else {
        console.log(0);
    }
}
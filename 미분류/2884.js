const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(" ");

let hour = Number(input[0]);
let min = Number(input[1]);

min -= 45;

if(min < 0){
    min += 60;
    hour--;

    if(hour === -1){
        hour =23;
    }
}
console.log(hour,min);
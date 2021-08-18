const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n");

const count = Number(input[0]);

for(var k=0; k <count; k++){
    var num = input[k+1].split(" ");
    console.log(Number(num[0])+(Number(num[1])));
}

//시간초과
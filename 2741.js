const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

const RANGE = Number(input)

for(let k = 1;k<=RANGE;k++){
    console.log(k);
}

//시간초과
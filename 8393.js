const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

const count = Number(input);
let result = 0;

for(var k = 1 ; k <= count ; k++){
    result += k
}

console.log(result);

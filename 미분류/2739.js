const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString());

for(var k = 1;k <= 9;k++){
    console.log(`${input} * ${k} = ${input*k}`);
}
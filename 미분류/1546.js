const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n");

const COUNT = Number(input[0]);
const POINT = input[1].split(" ").map(x => Number(x));
let mean = 0;
let max = POINT[0];

for(let k = 1;k < COUNT; k++){
    max = max < POINT[k]? POINT[k]: max;
}

const NEWPOINT = POINT.map(x => (x/max)*100);

for(let k = 0;k < COUNT; k++){
    mean += NEWPOINT[k]/COUNT;
}

console.log(mean);
const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString());

switch(true){
    case (90 <= input): 
    console.log("A");
    break;
    case (80 <= input): 
    console.log("B");
    break;
    
    case (70 <= input): 
    console.log("C");
    break;

    case (60 <= input): 
    console.log("D");
    break;
    
    default: console.log("F");
}
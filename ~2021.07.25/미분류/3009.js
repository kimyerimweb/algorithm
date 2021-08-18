const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split("\n")

const pixel1 = input[0].split(" ").map(x => parseInt(x))
const pixel2 = input[1].split(" ").map(x => parseInt(x))
const pixel3 = input[2].split(" ").map(x => parseInt(x))
const pixel4 = []

function setPixel4(index){
    if(pixel1[index]===pixel2[index]){
        pixel4.push(pixel3[index])
    }else if(pixel1[index]===pixel3[index]){
        pixel4.push(pixel2[index])
    }else {
        pixel4.push(pixel1[index])
    }
}

setPixel4(0)
setPixel4(1)

console.log(pixel4.join(" "))
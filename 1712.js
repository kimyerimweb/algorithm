const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split(" ")

const STATIC = Number(input[0])
const DYNAMIC = Number(input[1])
const PRICE = Number(input[2])

const PROFIT = PRICE-DYNAMIC

function calculBreakEvenPoint(){
    if(PROFIT <= 0){
        console.log(-1)
    }
    else{
        console.log(Math.floor(STATIC/PROFIT)+1)
    }
}

calculBreakEvenPoint()
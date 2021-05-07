const fs = require('fs')
const input = parseInt(fs.readFileSync('/dev/stdin').toString())

let num = input
let prime = 2

function calPrime(num){
    while(num > prime)
        if((num % prime)===0){
            num /= prime
            console.log(prime)
        }else {
            prime++
        }
    if(num!==1){
        console.log(num)
    }
}

calPrime(num)

const fs = require('fs')
let input = parseInt(fs.readFileSync('/dev/stdin').toString())

let num = 1

while(input > num){ 
    input -= num     
    num++       
}

if(num % 2 !== 0){
    const nown = (num + 1) - input
    const numerator = (num + 1) - nown

    console.log(`${nown}/${numerator}`)
}else {
    const numerator = (num + 1) - input
    const nown = (num + 1) - numerator
   
    console.log(`${nown}/${numerator}`)
}

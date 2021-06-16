const fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let num = parseInt(input.shift())

let obj = {}

while(num > 0){
    const bookName = input.shift()

    if(!obj[bookName]){
        obj[bookName] = 1
    }else {
        obj[bookName]++
    }

    num--
}

let maxKey = ''
let maxValue = 0

for(let key in obj){
    if(obj[key]>maxValue){
        maxKey = key
        maxValue = obj[key]
    }

    if(obj[key]===maxValue){
        if(key.localeCompare(maxKey)===-1){
            maxKey = key
        }
    }
}

console.log(maxKey)

const fs = require('fs')
const input = parseInt(fs.readFileSync('/dev/stdin').toString())

function calRoom(input){
    let num = input - 1
    let room = 1
    
    
    while(num > 0){
        num -= 6*room
        room++
    }
    console.log(room)
}

calRoom(input)

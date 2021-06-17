const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split(' ').map(el => parseInt(el))

const N = Math.pow(2,input.shift())
const X = input.shift()
const Y = input.shift()

let result = 0

const solve = (n,x,y) => {
    if(n === 2){
        if(x===X && y===Y){
            return result
        }
        
        result++

        if(x===X && y + 1===Y){
            return result
        }

        result++

        if(x + 1 ===X && y === Y){
            return result
        }

        result++

        if(x + 1 ===X && y + 1===Y){
            return result
        }

        result++
    }

    solve(n / 2,x,y)
    solve(n / 2,x,(y + n) / 2)
    solve(n / 2,(x + n) / 2,y)
    solve(n / 2,(x + n) / 2,(y + n) / 2)
}


console.log(solve(N,X,Y))
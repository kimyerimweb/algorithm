const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n").map(x => parseInt(x))

let arr = []

for(let i = 0;i < 8;i++){
    let answer = 0
    for(let j = i + 1; j < 9;j++){
        arr = []
        arr.push(input[i])
        arr.push(input[j])

        let test = input.filter(el => !arr.includes(el))
        answer = test.reduce((acc,el) => acc + el ,0)

        if(answer === 100){
            test = test.sort((a,b) => a - b)
            test = test.join('\n')

            console.log(test)
            break
        }
    }

    if(answer === 100){
        break
    }
}


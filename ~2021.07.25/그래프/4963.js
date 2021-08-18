const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let input = []
const dx = [1,-1,0,0,1,-1,1,-1]
const dy = [0,0,1,-1,1,-1,-1,1]
let w = 0
let h = 0

rl.on('line',(line) => {
    input.push(line.toString())

    if(Number(input[0].split(' ')[0]) === 0 && Number(input[0].split(' ')[1]) === 0 ){
        process.exit()
    }else if(input.length === Number(input[0].split(' ')[1]) + 1){
        solution(input)
        input = []
    }
})

const solution = () => {
    [w,h] = input[0].split(' ').map(x => Number(x))
    input = input.slice(1)

    for(let i = 0;i < h;i++){
        input[i] = input[i].split(' ').map(el => Number(el))
    }

    let island = 0

    for(let i = 0; i < w ;i++){
        for(let j = 0; j < h ;j++){
            if(input[j][i] === 1){
                DFS(j,i)
                island++
            }
        }
    }

    console.log(island)
}

const DFS = (j,i) => {
    if(RangeCheck(j,i) && input[j][i] === 1){
        input[j][i] = 0

        for(let k = 0; k < dx.length ;k++){
            DFS(j+dx[k],i+dy[k])
        }
    }
}

function RangeCheck(j,i){
    if(j >= 0 && j < h && i >= 0 && i < w){
        return true
    }else return false
}
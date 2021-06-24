const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let queue = []
let input = []
let tomato = []
let dx = [0,0,1,-1]
let dy = [1,-1,0,0]
let N = 0
let M = 0
let answer = 0

rl.on('line',(line) => {
    input.push(line.toString())
}).on('close', () => {
    
    [N,M] = input[0].split(' ').map(el => Number(el))
    input = input.slice(1)
    tomato = Array.from(Array(M),() => Array(N).fill(N*M))
    
    let TF = false

    for(let i = 0; i < M; i++){
        input[i] = input[i].split(' ').map(el => Number(el))

        if(input[i].includes(0)){
            TF = true
        }
    }

    if(TF === false){
        console.log(0)
        process.exit()
    }

    for(let i = 0; i < M;i++){
        for(let j = 0;j < N;j++){
            if(input[i][j] === 1){
                queue.push({posY:i, posX:j})
                tomato[i][j] = 0
            }
        }
    }

    BFS()

    console.log(answer)
})

let idx = 0

const BFS = () => {
    while(idx < queue.length - 1){
        let {posY,posX} = queue[idx]

        for(let i = 0; i < dx.length; i++){
            const nextY = posY + dy[i]
            const nextX = posX + dx[i]

            if(nextY >= 0 && nextY < M && nextX >= 0 && nextX < N){
                if(input[nextY][nextX] === 0 && tomato[nextY][nextX] >= tomato[posY][posX]){
                    tomato[nextY][nextX] = tomato[posY][posX] + 1
                    queue.push({posY:nextY,posX:nextX})
                    idx++         
                    input[nextY][nextX] = 1

                    if(answer < tomato[nextY][nextX]){
                        answer = tomato[nextY][nextX]
                    }
                }
            }
        }
    }
}

//토맛 토마토..
// const readline = require('readline')

// rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })

// let N = 0
// let M = 0
// let input = []
// let cnt = 0
// let dx = [1,0,-1,0]
// let dy = [0,1,0,-1]

// rl.on('line', (line) => {
//     input.push(line.toString())
// }).on('close', () => {
//     [N,M] = input.shift().split(' ').map(el => parseInt(el))

//     for(let i = 0; i < N; i++){
//         input[i] = input[i].split('').map(el => parseInt(el))
//     }
    
//     DFS(0,0)
    
//     process.exit()
// })

// const DFS = (i,j) => {
//     if(i === N-1 && j === M-1){
//         ++cnt
//         console.log(cnt)
//         process.exit()
//     }

//     if(RangeCheck(i,j) && input[i][j] === 1){
//         input[i][j] = 0
        
        
//         for(let k = 0; k < dx.length; k++)
//         {
//             cnt++
//             DFS(i+dy[k],j+dx[k])
//             cnt--
//         }
//     }

//     return
// }

// const RangeCheck = (i,j) => {
//     if(i >= 0 && i < N && j >= 0 && j < M){
//         return true
//     }else return false
// }

//dfs로는 최단 경로를 알 수 없다.
//bfs로 풀이한다.

const readline = require('readline')

rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let N = 0
let M = 0
let input = []
let visited = []
let dx = [1,0,-1,0]
let dy = [0,1,0,-1]

rl.on('line', (line) => {
    input.push(line.toString())
}).on('close', () => {
    [N,M] = input.shift().split(' ').map(el => parseInt(el))

    for(let i = 0; i < N; i++){
        input[i] = input[i].split('').map(el => parseInt(el))
    }

    visited = Array.from(Array(N),()=> Array(M).fill(0))
    
    BFS(0,0)
    console.log(visited[N-1][M-1])
    
    process.exit()
})

const BFS = (posY,posX) => {
    let queue = []

    queue.push({posY:posY,posX:posX})
    input[posY][posX] = 0
    visited[posY][posX] = 1
    
    while(queue.length) {
        const {posY,posX} = queue.shift()
        for(let i = 0;i < dx.length;i++){
            const nextX = posX + dx[i]
            const nextY = posY + dy[i]

            if(nextY >= 0 && nextY < N && nextX >= 0 && nextX < M){
                if(input[nextY][nextX] === 1){
                    input[nextY][nextX] = 0
                    visited[nextY][nextX] = visited[posY][posX] + 1
                    queue.push({posY:nextY,posX:nextX})
                }
            }
        }

    }
}

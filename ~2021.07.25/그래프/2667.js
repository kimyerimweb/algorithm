const solution = () => {
    let count = [] //단지별 아파트 개수

    //이중 그래프 전체 탐색
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(graph[i][j] === 1){
                DFS(i,j)
                count.push(home)
                home = 0
            }
        }
    }

    console.log(count.length)
    count.sort((a,b)=> a - b)
    count.map(el => console.log(el))
}

const DFS = (i,j) => {
    if(RangeCheck(i,j) && graph[i][j] === 1){
        graph[i][j] = 0
        home++
        for(let k = 0;k < dx.length; k++){
            DFS(i + dx[k], j+dy[k])
        }
    }
}

function RangeCheck(i,j) {
    if(i >= 0 && i < n && j >= 0 && j < n){
        return true
    }else return false
}

const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let input = []
let n = 0
let graph = []
let home = 0
let dx = [1,-1,0,0]
let dy = [0,0,1,-1]

rl.on('line',function(line){
    input.push(line)
}).on('close',function(){
    n = input.shift()
    graph = Array.from(Array(n), () => new Array(n))

    for(let i = 0; i < n; i++){
        graph[i] = input[i].split('').map(el => Number(el))
    }

    solution()
    process.exit()
})
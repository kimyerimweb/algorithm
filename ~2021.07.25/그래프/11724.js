const dfs = (num) => {
    visitedDfs[num] = 1
    
    for(let i = 0; i < graph[num].length;i++){
        if(visitedDfs[graph[num][i]] === false){
            dfs(graph[num][i])
        }
    }
}


const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let input = []
let graph = []
let visitedDfs = []
let count = 0

rl.on('line',function(line){
    input.push(line.toString())
}).on('close',function(){
    const [N,M] = input[0].split(' ').map(el => parseInt(el))

    graph = Array.from(Array(N+1),()=>[])

    for(let i = 1; i < M+1;i++){
        const [x,y] = input[i].split(' ').map(el => parseInt(el))
        graph[x].push(y)
        graph[y].push(x)
    }

    visitedDfs = new Array(N+1).fill(false)

    for(let i = 1;i < N+1; i++){
        if(visitedDfs[i] === false){
            dfs(i)
            count++
        }
    }

    console.log(count)
    process.exit()
})
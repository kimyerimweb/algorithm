const dfs = (num) => {
    visitedDfs[num] = 1
    count++
    
    if(count === 5) {
        console.log(1)
        process.exit()
    }

    for(let i = 0;i < graph[num].length;i++){
        if(visitedDfs[graph[num][i]] === false){
            dfs(graph[num][i])
            visitedDfs[graph[num][i]] = false //깊이가 5에 도달하지 못하고 빠져나왔기에 방문하지 않았음 처리를 해야
            //다른 쪽에서 시작해서 이 쪽 노드를 방문할 수 있다(1-7-2-3가 실패했다고 해서 1,4,7,2,3도 못하면 안되니까)
            count--
        }
    }
    return
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

rl.on("line",function(line){
    input.push(line.toString())
}).on('close',function(){
    const [N,M] = input
        .shift()
        .split(' ')
        .map(el => parseInt(el))

    graph = Array.from(Array(N),()=>[])

    for(let i of input){
        const [x,y] = i.split(' ').map(el => parseInt(el))
        graph[x].push(y)
        graph[y].push(x)
    }
    
    visitedDfs = new Array(N).fill(false)

    for(let i = 0; i < graph.length; i++){
        visitedDfs = visitedDfs.fill(false)
        count = 0
        dfs(i)
    }

    console.log(0)
    process.exit()
    
})
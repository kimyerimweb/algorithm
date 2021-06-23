//이분 그래프란 인접한 노드끼리는 다른 색으로 칠할 수 있는 그래프이다.
//시작 노드는 빨간 색으로 시작하고 다음 노드는 파란색으로 칠해서 다음 노드를 꺼내올 떄는 칠해진 색을 가져온다.
//연결 그래프와 비연결 그래프 모두 고려해야한다.
//(비연결이라 함은 아예 그래프가 2개로 이미 나뉜 상태이다. 이분 그래프는 두개 중 한 개에서 나올 수 있다.)
//bfs로 구현해보기 + 다각도에서 출발하기
//한번 bfs로 돌리면 모든 노드의 색을 알 수 있기 때문에 다각도로 돌릴 때 혼선을 막기 위해
//색을 저장하는 배열은 초기화 시켜준다.

const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let count = 0
let input = []

rl.on('line',(line) => {
    if(!count){
        count = parseInt(line)
    } else {
        input.push(line)
        if(input.length === parseInt(input[0].split(' ')[1]) + 1){
            main()
            input = []
        }
    }
})

const main = () => {
    let graph = []
    let n,m

    input.forEach((el,idx) => {
        const edge = el.split(' ').map(x => parseInt(x))
        if(idx === 0){
            [n,m] = edge
            for(let i = 1; i <= n;i++){
                graph[i] = []
            }
        }else {
            const [from,to] = edge
            graph[from].push(to)
            graph[to].push(from)
        }
    })

    let bfsResult = Array(n + 1).fill(null)
    let visited = Array(n + 1).fill(0)
    let answer = 'YES'

    const BFS = (start) => {
        let queue = [start]
        bfsResult[start] = 'r' //빨간점
        visited[start] = true

        while(queue.length !== 0){
            let current = queue.shift()
            color = bfsResult[current]

            for(let i = 0; i < graph[current].length; i++){
                const next = graph[current][i]

                if(visited[next] === 0){
                    visited[next] = 1
                    queue.push(next)
                    
                    if(color === 'r'){
                        bfsResult[next] = 'b'
                    }else {
                        bfsResult[next] = 'r'
                    }
                }else if(visited[next] === 1 && color === bfsResult[next]){
                    answer = 'NO'
                    return
                }
            }
        }
    }
    
    for(let i = 1; i < n + 1; i++){
        bfsResult = bfsResult.fill(null)
        BFS(i)

        if(answer ==='NO'){
            break
        }
    }
    console.log(answer)
}
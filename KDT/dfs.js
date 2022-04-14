function dfs(graph, v, visited) {
  visited[v] = true;
  console.log(v);

  for (i of graph[v]) {
    if (!visited[i]) {
      dfs(graph, i, visited);
    }
  }
}

//사용 예시
graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7],
];

visited = Array(9).fill(false);

dfs(graph, 1, visited);

//dfs안에서 depth를 저장하는 방법은 모르겠어서 아래 같이 했다.
//이 문제는 모두 이어져 있는 전력망의 중간에 연결을 끊어서 두 전력망으로 나눌 수 있는 문제라서 가능한 방법
function solution(n, wires) {
  let answer = 0;

  let graph = Array.from(Array(n + 1), () => Array(0));
  let visited = Array(n + 1).fill(false); //방문을 한 곳은 true로 나올 것이다.
  let result = []; //true가 나온 수만큼을 세서 길이를 구하면 한 지점에서 들어갈 수 있는 뎁스를 저장한다.

  for (let j = 0; j < n; j++) {
    for (let i = 0; i < wires.length; i++) {
      if (i !== j) {
        graph[wires[i][0]].push(wires[i][1]);
        graph[wires[i][1]].push(wires[i][0]);
      }
    }
    dfs(graph, 1, visited);
    result.push(
      Math.abs(visited.filter((el) => el === true).length - n / 2) * 2
    ); //한 지점에서 들어갈 수 있는 뎁스를 구하고 이상적인 전력망 반개와 차이를 구한다 -> 그리고 페어가 되는 전력망과 차이는 딱 차이의 두배가 된다.
    graph = Array.from(Array(n + 1), () => Array(0));
    visited = Array(n + 1).fill(false);
    count = 0;
  }

  answer = Math.min(...result);

  return answer;
}

function dfs(graph, v, visited) {
  visited[v] = true;

  for (i of graph[v]) {
    if (!visited[i]) {
      dfs(graph, i, visited);
    }
  }
}

//음의 간선이 있는 경우에 사용함
//다익스트라보다는 오래 걸림
function bf(start) {
  // 시작 노드에 대해서 초기화
  dist[start] = 0;
  // 전체 n번의 라운드(round)를 반복
  for (let i = 0; i < n; i++) {
    // 매 반복마다 "모든 간선"을 확인하며
    for (let j = 0; j < m; j++) {
      let [cur, nextNode, cost] = edges[j];
      // 현재 간선을 거쳐서 다른 노드로 이동하는 거리가 더 짧은 경우
      if (dist[cur] != INF && dist[nextNode] > dist[cur] + cost) {
        dist[nextNode] = dist[cur] + cost;
        // n번째 라운드에서도 값이 갱신된다면 음수 순환이 존재
        if (i == n - 1) return true;
      }
    }
  }
  return false;
}

let INF = 1e9; // 무한을 의미하는 값으로 10억을 설정
let n = 3; // 노드의 개수
let m = 4; // 간선의 개수
// 모든 간선에 대한 정보를 담는 리스트 만들기
let edges = [
  // [a, b, c]: a에서 b로 가는 비용이 c라는 의미
  [1, 2, 4],
  [1, 3, 3],
  [2, 3, -1],
  [3, 1, -2],
];
// 최단 거리를 모두 무한으로 초기화
let dist = new Array(n + 1).fill(INF); // 벨만 포드 알고리즘 수행
let negativeCycle = bf(1); // 1번 노드가 시작 노드
if (negativeCycle) console.log(-1);
else {
  // 1번 노드를 제외한 다른 노드들로 가기 위한 최단 거리 출력
  for (let i = 2; i <= n; i++) {
    // 도달할 수 없는 경우 -1을 출력
    if (dist[i] == INF) console.log(-1); // 도달할 수 있는 경우 거리를 출력 else console.log(dist[i]);
  }
}

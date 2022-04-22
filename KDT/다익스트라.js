// const N = 정점 개수
// const road = 도로의 정보(마을1,마을2,거리)
// const K = 이동할 수 있는 거리의 제한선
function solution(N, road, K) {
  // 1.
  const dist = Array(N + 1).fill(Infinity);
  const adj = Array.from({ length: N + 1 }, () => []); //adj는 정점->정점과 시간을 다시 나타냄

  // 1-1.
  road.forEach(([a, b, c]) => {
    adj[a].push({ to: b, time: c });
    adj[b].push({ to: a, time: c });
  });

  // 2. 시작점은 0을 할당
  const pq = [{ to: 1, time: 0 }];
  dist[1] = 0;

  // 3.
  while (pq.length) {
    let { to, time } = pq.pop();

    // 4.연결된 노드에서의 값이 현재의 값 + 해당 노드의 시간(가중치) 보다 클 경우, 값을 대체하고 우선순위 큐에 데이터 추가
    adj[to].forEach((next) => {
      if (dist[next.to] > dist[to] + next.time) {
        dist[next.to] = dist[to] + next.time;
        pq.push(next);
      }
    });
  }

  // 5.K이하의 시간에 배달되는 값 filter
  return dist.filter((item) => item <= K).length;
}

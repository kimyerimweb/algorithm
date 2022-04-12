//피보나치 (발전된 버전)
function solution(n) {
  const Fibo = new Array(n + 1);

  Fibo[0] = BigInt(0);
  Fibo[1] = BigInt(1);

  for (let i = 2; i <= n; i++) {
    Fibo[i] = Fibo[i - 1] + Fibo[i - 2];
  }

  return Fibo[n];
}

function solution(land) {
  //마지막에 도착한 곳과 같은 열인 곳을 방문하면 안되는 문제
  return Math.max(
    ...land.reduce(
      (acc, cur) => {
        return [
          cur[0] + Math.max(acc[1], acc[2], acc[3]), //지금 0번 인덱스에 방문했고 그 전에 1,2,3번까지 최종적으로 방문했던 루트중에 제일 큰 놈이랑 더한다.
          cur[1] + Math.max(acc[0], acc[2], acc[3]),
          cur[2] + Math.max(acc[0], acc[1], acc[3]),
          cur[3] + Math.max(acc[0], acc[1], acc[2]),
        ];
      },
      [0, 0, 0, 0]
    )
  );
}
//찐 DP그자체..무섭다

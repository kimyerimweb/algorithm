function gcd(a, b) {
  if (a % b === 0) return b;
  else return gcd(b, a % b);
}

let lcm = (a, b) => {
  let lcm = 1;

  while (true) {
    if (lcm % a == 0 && lcm % b == 0) {
      break;
    }
    lcm++;
  }
  return lcm;
};

function solution(arr) {
  //n개의 수에 대해 최소공배수 구하기
  let answer = arr[0];

  for (let i = 1; i < arr.length; i++) {
    answer = lcm(answer, arr[i]);
  }
  return answer;
}

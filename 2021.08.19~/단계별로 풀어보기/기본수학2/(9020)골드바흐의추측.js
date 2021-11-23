let fs = require('fs')
let input = fs
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((el) => Number(el))

input.shift()

input.forEach((el) => {
  Gold(el / 2, 0)
})

//짝수니까 무조건 2로 나눠지는 것을 보고
//반으로 나눈 수부터 소수인지 파악한다.
//소수가 맞으면 출력하고
//소수가 아니면 재귀로 1씩 차이를 벌려가면서 둘다 소수인 지점을 찾는다.
function Gold(num, i) {
  if (isPrime(num - i) && isPrime(num + i)) {
    console.log(`${num - i} ${num + i}`)
    return
  } else {
    Gold(num, i + 1)
  }
}

//소수인지 확인하는 함수
function isPrime(num) {
  if (num === 1) {
    return false
  }
  if (num <= 3) {
    return true
  } else {
    const sqrtNum = Math.ceil(Math.sqrt(num))
    for (let i = 2; i <= sqrtNum; i++) {
      const isPrime = num % i
      if (!isPrime) {
        return false
      }
    }
    return true
  }
}

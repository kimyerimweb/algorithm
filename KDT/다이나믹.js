//피보나치
const d = new Array(100).fill(0)

d[1] = 1
d[2] = 1
const n = 99
//부분의 합은 다음 값이 된다.
for(let i = 3; i <= n; i++){
    d[i] = d[i-1] + d[i-2]
}

console.log(d[n])
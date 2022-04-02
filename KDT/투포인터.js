//투포인터는 1차원 배열에서 부분합이 조건이랑 일치하는 개수를 빠르게 구할 때 쓴다.
const n = 5
const m = 5 //찾고자 하는 부분합
const data = [1, 2, 3, 2, 5]

let cnt = 0
let intervalSum = 0
let end = 0

for(let start = 0; start < n; start++){
    while(intervalSum < m && end < n){
        intervalSum += data[end]
        end += 1
    }
    if(intervalSum === m) cnt += 1
    intervalSum -= data[start]
}

console.log(cnt)
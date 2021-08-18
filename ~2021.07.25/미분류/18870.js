const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

// let input = ['5','2 4 -10 4 -9']

const num = parseInt(input.shift());

input = input[0].split(' ').map(x => parseInt(x))

let newSet = new Set(input)
let arr = Array.from(newSet)

arr.sort((a,b) => a - b)

//중복되는 요소를 제거하고
//그걸 다시 정렬해서 수가 몇번째인지 그런건 만들었는데....
//원래 배열에서 탐색해서 일대일 대응시켜주는건
//탐색 알고리즘 배우고 해야할듯

// for(let k = 0;k < arr.length;k++){
//     for(let i = 0;i < num;i++){
//         if(input[i]===arr[k])
//         input[i] = k
//     }
// }



console.log(input.join(' '))
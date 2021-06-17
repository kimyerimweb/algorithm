// const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(x => parseInt(x));

// const N = input.shift()

// //sort()사용
// input.sort((a,b)=>a-b)

// for(let k = 0;k<N;k++){
//          console.log(input[k])
//  }

///////////////////////////////////////////////////////

// //선택정렬
// let min = 1001
// let temp = 0
// let index= 0

// function selection(arr){
//     for(let i=0;i<N;i++){
//         min = 1001
//         for(let j=i;j<N;j++){
//             if(min>arr[j]){
//                 min=arr[j]
//                 index = j
//             }
//         }
//         temp = arr[i]
//         arr[i] = arr[index]
//         arr[index] = temp
//     }
// }

// selection(input)

// for(let k = 0;k<N;k++){
//     console.log(input[k])
// }

///////////////////////////////////////////////////////

// // //버블 정렬
// function bubbleSort(arr){
//     for(let i=1;i<arr.length;i++){
//         for(let j=0;j<arr.length-i;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp = arr[j+1]
//                 arr[j+1] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }
// }

// bubbleSort(input)

// for(let k = 0;k<N;k++){
//      console.log(input[k])
// }

///////////////////////////////////////////////////////

//삽입 정렬  let input = [54,3,4,12,6] 
// function insertSort(arr){
//     for(let i = 0;i<N-1;i++){
//         let j=i
//         while(j>=0&&arr[j]>arr[j+1]){
//             let temp=arr[j]
//             arr[j]=arr[j+1]
//             arr[j+1]=temp
//             --j
//         }
//     }
// }

// insertSort(input)

// for(let k = 0;k<N;k++){
//      console.log(input[k])
// }

//반복문을 설정할 때 N을 안쓰면 틀림

const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(x => parseInt(x));

let input = [5,4,3,6,7,2]

const N = input.shift()

//출력을 어떻게 해야할지 모르겠음

// let sorted = []

// function merge(arr,m,middle,n){
//     let i = m, j = middle+1, k = m

//     while(i <= middle && j >= n){
//         if(arr[i] < arr[j]){
//             sorted[k] = arr[i]
//             i++
//         }else {
//             sorted[k] = arr[j]
//             j++
//         }
//         k++
//     }

//     if(i > middle){
//         sorted[k] = arr[j]
//         k++
//         j++
//     }else if(j > n){
//         sorted[k] = arr[i]
//         k++
//         i++
//     }

//     for(let k = m; k <= n;k++){
//         arr[k] = sorted[k]
//     }
// }

// function mergeSort(arr,m,n){
//     let middle = Math.floor((m + n) / 2)
    
//     if(m < n){
//         mergeSort(arr,m,middle)
//         mergeSort(arr,middle + 1,n)
//         merge(arr,m,middle,n)
//     }
// }

// mergeSort(input,0,N-1)

// console.log(input.join('\n'))

// input.sort((a,b) => a-b) 그냥 sort 함수도 최악은 n^2인듯

// for(let k = 0;k < N;k++){
//          console.log(input[k])
//  }

// //퀵

function quickSort(arr,start,end){
    if(start >= end){
        return
    }

    let pivot = start, i = start + 1, j = end, temp

    while(i <= j){
        while(i <= end && arr[i] <= arr[pivot]){
            i++
        }
        while(j > pivot && arr[j] >= arr[pivot]){
            j--
        }
        if(i > j){
            temp = arr[j]
            arr[j] = arr[pivot]
            arr[pivot] = temp
        }else {
            temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
    quickSort(arr,start,j - 1)
    quickSort(arr,j + 1,end)
}

quickSort(input,0,N-1)

console.log(input.join('\n'))

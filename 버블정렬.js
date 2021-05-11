//바로 옆에 있는 값이랑 비교해서 더 큰걸 뒤로 보내면 뒤쪽에 차곡차곡 큰 값들이 쌓인다.
let arr = [1,10,5,8,7,6,4,3,2,9]

function bubbleSort(arr){
    for(let k = 0;k < arr.length-1;k++){ //10개로 만든 집단~2개까지라서 9번
        for(let i = 0; i < (arr.length-1)-k; i++){ //i+1때문에도 그렇고 순서쌍이라 9-1번
            if(arr[i] > arr[i+1]){
                let temp = arr[i+1]
                arr[i+1] = arr[i]
                arr[i] =temp
            }
        }
    }
} 

bubbleSort(arr)

console.log(arr)
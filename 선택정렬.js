//가장 작은 것을 선택해서 맨 앞으로 보낸다.

let arr = [1,10,5,8,7,6,4,3,2,9]

let min = 999
let index = 0
let temp = 0

function selectoinSort(arr){
    for(let k=0;k<arr.length;k++){
        min = 999
        for(let i=k;i<arr.length;i++){
            if(arr[i]<min){
                min = arr[i]
                index = i
            }
        }
        temp = arr[k]
        arr[k] = arr[index]
        arr[index] = temp
    }
}

selectoinSort(arr)

for(let k=0;k<arr.length;k++){
    console.log(arr[k])
}
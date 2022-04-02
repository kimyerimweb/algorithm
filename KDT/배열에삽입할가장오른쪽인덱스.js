function upperBound(arr,target,start,end){
    while(start < end){
        const mid = parseInt((start + end) / 2)
        if(arr[mid] > target) end = mid
        else start = mid + 1
    }
    return end
}

//예시
const arr = [1,2,4,4,8,9,10,11,30]
const x = 4

console.log(upperBound(arr, x, 0, arr.length))
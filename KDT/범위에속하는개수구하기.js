function upperBound(arr,target,start,end){
    while(start < end){
        const mid = parseInt((start + end) / 2)
        if(arr[mid] > target) end = mid
        else start = mid + 1
    }
    return end
}

function lowerBound(arr,target,start,end){
    while(start < end){
        const mid = parseInt((start + end) / 2)
        if(arr[mid] >= target) end = mid
        else start = mid + 1
    }
    return end
}

function countByRange(arr, leftValue, rightValue) {
    const rightIndex = upperBound(arr,rightValue,0,arr.length)
    const leftIndex = lowerBound(arr,leftValue,0,arr.length)
    return rightIndex - leftIndex
}

//예시
const arr = [1, 2, 3, 3, 3, 3, 4, 4, 8, 9];
// 값이 4인 데이터 개수 출력
console.log(countByRange(arr, 4, 4));
// 값이 [-1, 3] 범위에 있는 데이터 개수 출력 
console.log(countByRange(arr, -1, 3));
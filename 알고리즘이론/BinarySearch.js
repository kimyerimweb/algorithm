function binarySearch(target,dataArray){
    let low = 0
    let high = dataArray.length - 1
    let mid = Math.floor((high + row) / 2)
    while(target !== dataArray[mid]){
        if(target < dataArray[mid]){
            high = mid - 1
            mid = Math.floor((high + row) / 2)
        }else {
            low = mid + 1
            mid = Math.floor((high + low) / 2)
        }
    }

    return dataArray[mid]
}
let arr = [1,10,5,8,7,6,4,3,2,9]

function countingSort(arr){
    let count = Array(10 + 1).fill(0) //모든 값의 범위를 담을 수 있는 크기
    
    for(let i = 0;i < 10;i++){
        count[arr[i]]++
    }

    arr.length = 0;

    for(let i = 0;i <=10;i++){
        for(let j = 0;j < count[i];j++){
            arr.push(i)
        }
    }

}

countingSort(arr)
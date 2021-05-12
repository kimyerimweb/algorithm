let arr = [5,10,7,8,1,6,4,3,2,9]

function quickSort(arr,startindex,endIndex){
    if(startindex >= endIndex){
        return
    }

    let key = startindex
    let i = startindex + 1
    let j = endIndex
    let temp

    while(i<=j){//엇갈릴 때까지 한다.
        while(i<=endIndex&&arr[i] <= arr[key]){ //기준 값이랑 어레이 값이 같으면 굳이 바꾸진 않음
            i++
        }

        while(j>startindex&&arr[j] >= arr[key]){
            j--
        }

        if(i > j){ //이 조건이 실행될 수 있는 이유는 
            //일단 while을 돌면서 i > j인 상황이 발생하고 여기서 걸린다. 그리고 아래는 그대로 통과해서
            //다시 while을 돌려고 조건을 봤더니 안맞아서 탈출하고 퀵소트가 갈라지는 것이다
            temp = arr[key];
            arr[key] = arr[j]
            arr[j] = temp
        }else {
            temp = arr[i]
            arr[i] = arr[j]
            arr[j] =temp
        }
    }
    
    quickSort(arr,startindex,j-1)
    quickSort(arr,j+1,endIndex)
}

quickSort(arr,0,9)

console.log(arr)
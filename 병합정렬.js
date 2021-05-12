let arr = [5,10,7,8,1,6,4,3,2,9]
let sorted = []

function merge(arr,m,middle,n){
    let i = m, j = middle + 1, k = m

    while(i <= middle && j <= n){
        if(arr[i] < arr[j]){
            sorted[k] = arr[i]
            i++
        } else {
            sorted[k] = arr[j]
            j++
        }
        k++
    }

    if(i>middle){
        while(j<=n){
            sorted[k] = arr[j]
            j++
            k++
        }
    } else if(j > n){
        while(i <= middle){
            sorted[k] = arr[i]
            i++
            k++
        }
    }

    for(let k = m;k <=n;k++){
        arr[k] = sorted[k]
    }
}


function mergeSort(arr,m,n){
    let middle = Math.floor((m + n) / 2)

    if(m < n){
        mergeSort(arr,m,middle)
        mergeSort(arr,middle+1,n)
        merge(arr,m,middle,n)
    }
}


mergeSort(arr,0,arr.length-1)

console.log(arr)
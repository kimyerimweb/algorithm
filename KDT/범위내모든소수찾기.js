//에라토스테네스의 체
const n = 1000
const arr = new Array(n+1).fill(true)

for(let i = 2; i <= parseInt(Math.sqrt(n)); i++){
    if(arr[i] === true){
        let j = 2
        while (i * j <= n){
            arr[i * j] = false
            j += 1
        }
    }
}

for(let i = 2; i <= n; i++){
    if(arr[i]) console.log(i)
}
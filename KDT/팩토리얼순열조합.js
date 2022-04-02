function factorial(n) {
    let result  = 1
    for(let i = 1;i <= n;i++){
        result *= i
    }
    return result
}

//순열
function permutation(n,r) {
    return factorial(n)/factorial(r)
}

//조합
function combination(n,r) {
    return permutation(n,r)/factorial(r)
}
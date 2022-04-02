function isPrimeNumber(x) {
    if(x === 1) return false
    if(x === 2) return true

    for(let i = 2; i <= parseInt(Math.sqrt(x)); i++){
        if(x % i === 0){
            return false
        }
        return true
    }
}

console.log(isPrimeNumber(1))
console.log(isPrimeNumber(2))
console.log(isPrimeNumber(4))
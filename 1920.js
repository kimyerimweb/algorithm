const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

const Nnum = input.shift()
const N = input.shift().split(' ').map(el => parseInt(el))
const Mnum = input.shift()
const M = input.shift().split(' ').map(el => parseInt(el))

N.sort((a,b) => a - b)
let answer = ''

const biSearch = (elem, start, end) => {
    let s = start
    let e = end
    let mid = -1

    while(s <= e){
        mid = Math.floor((s + e)/2)
        if(elem === N[mid]){
            return mid
        }else if (elem > N[mid]) {
            s = mid + 1
        }else {
            e = mid - 1
        }
    }

    return -1
}

M.forEach(el => {
    answer += biSearch(el,0,Nnum - 1) === -1 ? '0\n' : '1\n'
})

console.log(answer.slice(0,answer.length-1))
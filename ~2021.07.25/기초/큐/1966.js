const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let count = parseInt(input.shift())

function removeBig() {
    [qLen,selectedIdx] = input.shift().split(' ').map(el => parseInt(el))
    let temp = input.shift().split(' ').map(el => parseInt(el))
    let sortedq = [...temp].sort((a,b) => a - b)
    let q = [...temp].reduce((acc,el,idx) => {
        return [...acc,
                {idx:idx,
                 el:el}]
    },[])

    let answer = 1
    while(true){
        if(q[0].el === sortedq[sortedq.length - 1]){
            if(q[0].idx === selectedIdx){
                return answer
            }
            sortedq.pop()
            q.shift()
            answer++
        }else if(q[0].el < sortedq[sortedq.length - 1]){
            q.push(q.shift())
        }
    }
}

for(let i = 0;i < count;i++){
    console.log(removeBig())
}


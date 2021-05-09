const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString())

function getNum(input){
    if(input===1){
        return console.log(0)
    }

    for(let k = 1; k < input ;k++){
        let result = k
        const temp = k.toString();
        
        for(let j = 0;j < temp.length; j++){
            result += parseInt(temp[j])
        }

        if(result === input){
            return console.log(k)
        }

        if((k===(input-1))&&result!==input){
            return console.log(0)
        }
    }

}

getNum(input)
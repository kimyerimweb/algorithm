const fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()

let stack = ''
let reverseArr = ''
 
while(input.length > 0){
    const word = input.slice(0,1)
    input = input.slice(1)
 
    if(word === '<'){
        stack += reverseArr.split('').reverse().join('')
        reverseArr = ''
        stack += word

        const pair = input.indexOf('>')
        stack += input.slice(0,pair + 1)
        input = input.slice(pair+1)
    }else if(word === ' '){
        stack += reverseArr.split('').reverse().join('')
        reverseArr = ''
        stack += word
    }else {
        reverseArr += word
    }
}
 
stack += reverseArr.split('').reverse().join('')
stack = stack.trim()

console.log(stack)
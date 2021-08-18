const fs = require('fs');
let input = parseInt(fs.readFileSync('/dev/stdin').toString());

//입력 받은 숫자에 몇을 곱하고 해서 딱 맞추지 말고 666이 포함된 숫자를 만나면 받은 값을 1씩 줄이도록 한다.
//0이 되면 그 숫자를 반환한다.

let hellNum = 665

while(input > 0){
    if((++hellNum).toString().includes('666')){
        input--
    }
}

console.log(hellNum);
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n");

const count = Number(input[0]);

//평균 구하는 계산
function mean(arr){
    let meanValue = 0;

    for(let i = 1;i <= arr[0]; i++){
        meanValue += arr[i];
    }

    meanValue /= arr[0];
    return meanValue;
}

//평균보다 높은 학생 수 구하는 계산
function upperValue(arr,meanValue){

    let num = 0;
    for(let i = 1;i <= arr[0]; i++)
    {
        if(arr[i]-meanValue > 0){
            num++;
        }
    }
    
    return ((num / (arr.length - 1))*100);
}

for(let k = 1; k <= count ;k++){
    let value = input[k].split(" ").map(x => Number(x));

    let meanValue = mean(value);

    console.log(upperValue(value,meanValue).toFixed(3)+"%"); //넷째 자리에서 반올림
}
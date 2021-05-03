let arr = Array(10001);
arr.fill(false);

function getNonSelfNumber(num){
    const strNum = String(num);
    let result = num;

    for(let i = 0;i < strNum.length;i++){
        result += Number(strNum[i]) 
    }
    
    if(result<=10000){
        arr[result] = true;
    }
}
    


for(let i = 1;i < arr.length; i++)
{
    getNonSelfNumber(i);
}

for(let i = 1;i < arr.length; i++)
{
    if(arr[i]!==true){
        console.log(i);
    }
}
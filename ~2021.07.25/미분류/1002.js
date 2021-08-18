const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split("\n")

let count = parseInt(input[0])
let contactPoint = 0
let point =[]

function setPoint(i){
    const temp = i.split(" ").map(x => parseInt(x))
    return temp
}

function getContactPoint(point){
    const x1 = point[0]
    const x2 = point[3]
    const y1 = point[1]
    const y2 = point[4]
    let r1 = Math.abs(point[2])
    let r2 = Math.abs(point[5])

    if(r1 >= r2){
        const temp = r1
        r1 = r2
        r2 = temp
    }

    if((x1===x2)&&(y1===y2)){
        contactPoint = (r1===r2) ? -1 : 0
    } else{
        const distance = Math.sqrt(Math.pow(x1-x2,2)+Math.pow(y1-y2,2))
        const sumRadius = r1+r2
        const subRadius = r2-r1
        
        switch(true){
            case (subRadius>distance) : contactPoint = 0
            break 
            case (subRadius===distance) : contactPoint = 1
            break
            case (subRadius<distance && distance<sumRadius) : contactPoint = 2
            break
            case (distance===sumRadius) : contactPoint = 1
            break
            default: contactPoint = 0
        }
    }
}

for(let k = 1; k <= count; k++){
    point = setPoint(input[k])
    getContactPoint(point)
    console.log(contactPoint)
}

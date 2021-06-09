//해시테이블 충돌을 처리 안한 버전
class HashTable {
    constructor() {
        this.storageLimit = 10 //해시 테이블의 크기는 10
        this.table = new Array(this.storageLimit) //해시 테이블 크기만한 어레이를 테이블로
    }

    //data -> index
    getHash(data) {
        let hash = 0
        for(let i = 0; i < data.length; i++){
            hash += data.charCodeAt(i) //아스키 코드 값을 전부 더해서 
        }

        console.log("hash", hash)
        return hash % this.storageLimit //더한 값을 테이블 크기로 나눈다
    }

    //data와 value를 넣으면, 해당 data에 대한 key를 찾아
    //해당 key에 대응하는 해쉬 주소에 value를 저장
    add(data, value) {
        const index = this.getHash(data)
        this.table[index] = value
    }

    get(data) {
        const index = this.getHash(data)
        return this.table[index]
    }

    remove(data) {
        const index = this.getHash(data)
        delete this.table[index]
    }
}

const hashTable = new HashTable()
hashTable.add("join","111222333")
hashTable.add("dave","222333444")
hashTable.add("stella","333444555")
hashTable.add("mike","444555666")

console.log(hashTable.table)

//해시테이블 충돌 처리 구현
class HashTableChaining {  //open hashing
    constructor() {
        this.storageLimit = 10
        this.table = new Array(this.storageLimit)
    }

    getHash(data) {
        let hash = 0
        for (let i = 0; i < data.length; i++){
            hash += data.charCodeAt(i) 
        }

        return hash % this.storageLimit
    }

    add(data, value) {
        const index = this.getHash(data)

        if(this.table[index]) { //만약 충돌한다면
            for(let i = 0; i < this.table[index].length; i++){ //테이블에 달린 것들을 순회하면서
                if(this.table[index][i][0] === data) { //이미 설정된 데이터가 있으면
                    this.table[index][i][1] = value //거기에 값을 새로 넣음
                    return
                }
            }
            this.table[index].push([data, value]) //설정된 데이터가 없으면 뒤에 넣는다
        }else {
            this.table[index] = [[data, value]] //정말 아무것도 없으면 그냥 넣는다
        }
    }

    get(data) {
        const index = this.getHash(data) //해시 값을 일단 구해놓고 

        if(this.table[index]) {
            for(let i = 0; i < this.table[index].length; i++){
                if(this.table[index][i][0] === data) { //해시 값에 해당하는 곳에서 데이터를 또 찾아본다.
                    return this.table[index][i][1] //있으면 value를 반환하고
                }
            }
            return null //없으면 null
        } else {
            return null //애초에 index에 아무것도 없었으면 null
        }
    }

    remove(data) {
        const index = this.getHash(data)

        if(this.table[index].length === 1 && this.table[index][0][0] === data){
            delete this.table[index] //딱 elem가 한개고 데이터가 동일하면 그냥 삭제
        } else {
            for (let i = 0; i < this.table[index].length; i++) {
                if(this.table[index][i][0] === data){
                    this.table[index].splice(i,1) //그게 아니면 데이터가 있는 곳에서 딱 하나만 잘라낸다
                }
            }
        }
    }
}

const hash = new HashTableChaining()

hash.add("evad","111222333")

console.log(hash.table)

hash.add("dave", "222333444")

console.log(hash.table)

hash.add("stella", "333444555")

console.log(hash.table)

hash.add("mike", "444555666")

console.log(hash.table)

console.log(hash.get("dave"))

hash.remove("evad")

console.log(hash.table)

//Close Hashing
class HashTableLinear {
    constructor() {
        this.storageLimit = 10;
        this.table = new Array(this.storageLimit)
    }

    getHash(data) {
        let hash = 0
        
        for(let i = 0; i < data.length ; i++) {
            hash += data.charCodeAt(i)
        }

        return hash % this.storageLimit
    }

    add(data, value) {
        const index = this.getHash(data)

        if(this.table[index][0] === data){
            this.table[index][1] = value
        }

        if(this.table[index]) { //만약 충돌한다면
            let count = 0
            for(let i = index + 1; i !== index ; i++){ //순회하면서 넣을 곳을 탐색
                if(count > 9) {
                    console.log('저장 공간 부족')
                    return
                }

                count++
                if(i === this.storageLimit) i = 0 //인덱스 범위를 넘어서면 다시 0으로
                if(!this.table[i]){
                    this.table[i] = [data, value]
                    break
                }
            }
        } else {
            this.table[index] = [data,value]
        }
    }

    get(data) {
        const index = this.getHash(data)

        if(this.table[index][0] === data){
            return this.table[index][1]
        }else {
            let count = 0
            for(let i = index + 1; i !== index ; i++){ //순회하면서 넣을 곳을 탐색
                if(count > 9) {
                    console.log('없음')
                    return
                }

                count++
                if(i === this.storageLimit) i = 0 //인덱스 범위를 넘어서면 다시 0으로
                if(this.table[i][0] === data){
                    return this.table[i][1]
                    break
                }
            }
        }
    }

    remove(data) {
        const index = this.getHash(data)

        if(this.table[index][0] === data){
            delete this.table[index]
        }else {
            let count = 0
            for(let i = index + 1; i !== index ; i++){ //순회하면서 넣을 곳을 탐색
                if(count > 9) {
                    console.log('없어서 삭제 불가')
                    return
                }

                count++
                if(i === this.storageLimit) i = 0 //인덱스 범위를 넘어서면 다시 0으로
                if(this.table[i][0] === data){
                    delete this.table[index]
                    break
                }
            }
        }
    }
}

const hash = new HashTableLinear()

hash.add("evad","111222333")
hash.add("dave", "222333444")
hash.add("stella", "333444555")
hash.add("mike", "444555666")

console.log(hash.table)

console.log(hash.get("dave"))

hash.remove("evad")

console.log(hash.table)
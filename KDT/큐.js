class Queue {
    constructor(){
        this.items = {}
        this.headIndex = 0
        this.tailIndex = 0
    }
    enqueue(item) {
        this.items[this.tailIndex] = item
        this.tailIndex++
    }
    dequeue() {
        const item = this.items[this.headIndex]
        delete this.items[this.headIndex]
        this.headIndex++
        return item
    }
    peek() {
        return this.items[this.headIndex]
    }
    getLength(){
        return this.tailIndex - this.headIndex
    }
}

//구현된 큐 사용법
const queue = new Queue()

queue.enqueue(5)
queue.enqueue(2)
queue.enqueue(3)

console.log(queue)

queue.dequeue()

console.log(queue)
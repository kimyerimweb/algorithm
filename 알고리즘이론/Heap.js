class Heap { //최소 힙
    constructor() {
        this.heap = []
    }

    getLeftChildIndex = (parentIndex) => parentIndex * 2 + 1
    getRightChildIndex = (parentIndex) => parentIndex * 2 + 2
    getParentIndex = (childIndex) => Math.floor((childIndex -1) / 2)

    peek = () => this.heap[0]

    insert = (key,value) => {
        const node = {key,value}
        this.heap.push(node)
        this.heapifyUp()
    }

    heapifyUp = () => {
        let index = this.heap.length - 1
        const lastInsertedNode = this.heap[index]

        //마지막 값은 일단 가지고 있고 계속 올려본다
        //루트 노드가 되기 전까지
        while(index > 0){
            const parentIndex = this.getParentIndex(index)
            //부모 노드의 key값이 마지막에 삽입된 노드의 키 값보다 크다면
            //부모의 자리를 계속 아래로 내린다
            if(this.heap[parentIndex].key > lastInsertedNode.key){
                this.heap[index] = this.heap[parentIndex]
                index = parentIndex
            } else break
        }

        //자리를 찾았으니까 이제 진짜 넣음
        this.heap[index] = lastInsertedNode
    }

    remove = () => { //루트 노드를 밖으로 뺀다
        const count = this.heap.length
        const rootNode = this.heap[0]

        if (count <= 0) return undefined
        if (count === 1) this.heap = []
        else {
            this.heap[0] = this.heap.pop() //끝에 있는 노드를 부모로 만들고
            this.heapifyUp()//다시 min heap으로 만든다
        }

        return rootNode
    }

    heapifyDown = () => { //변경된 루트노드가 제 자리를 찾아가도록 하는 메소드
        let index = 0
        const count = this.heap.length
        const rootNode = this.heap[index]

        //계속해서 left child가 있을 때까지 검사한다. //어차피 왼쪽부터 차니까 맞음
        while(this.getLeftChildIndex(index) < count){
            const leftChildIndex = this.getLeftChildIndex(index)
            const rightChildIndex = this.getRightChildIndex(index)

            //왼쪽, 오른쪽 중에 더 작은 노드를 찾는다
            //rightChild가 있다면 key의 값을 비교해서 더 작은 값을 찾는다
            //없다면 leftChild가 더 작은 값을 가지는 인덱스가 된다.
            const smallerChildIndex = 
                rightChildIndex < count && this.heap[rightChildIndex].key < this.heap[leftChildIndex].key
                ? rightChildIndex
                : leftChildIndex

                //자식 노드의 키 값이 루트노드보다 작다면 위로 끌어올린다.
                if (this.heap[smallerChildIndex].key <= rootNode.key){
                    this.heap[index] = this.heap[smallerChildIndex]
                    index = smallerChildIndex
                }else break
        }
        //마지막으로 바꾼 위치에 처음 루트값을 다시 넣음
        this.heap[index] = rootNode
    }
} 

const heap = new Heap()
heap.insert(90,"90")
heap.insert(80,"라라라")
heap.insert(70,"이잉")
heap.insert(25,"킄킄")

console.log(heap)
heap.remove()
console.log(heap)
heap.heapifyDown()
console.log(heap)

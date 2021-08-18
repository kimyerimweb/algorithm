let Node = function(value) {
    let node = {}
    node.value = value
    node.next = null
}

let LinkedList = function() {
    let list = {}
    list.head = null
    list.tail = null
    
    list.addToTail = function(value) {
        let node = new Node(value)

        if(!list.head){
            list.head = node
            list.tail = node
        }else {
            list.tail.next = node
            list.tail = node
        }
    }

    list.removeHead = function() {
        let removeNode = list.head

        if(removeNode.head !== null){
            this.head = removeHead.next
            return removeNode.value
        }
    }

    list.contains = function(target){
        let accNode = list.head

        while(accNode){
            if(accNode.value === target){
                return true;
            }

            accNode = accNode.next
        }
        return false;
    }

    return list;
}
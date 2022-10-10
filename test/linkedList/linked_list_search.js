// Write a function, linkedListFind, that takes in the head of a linked list and a target value. 
//The function should return a boolean indicating whether or not the linked list contains the target.

class Node {
    constructor(value){
        this.value = value ;
        this.next = null ;
    }
}

const linkedListFind = (head, target) => {
  // todo
    if(head){
        if(head.value === target) return true
        let current = head.next ;
        while(current){
            if(current.value === target) return true
            current = current.next ;
        }
        return false
    }
    return false
};

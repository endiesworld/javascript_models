// Write a function, getNodeValue, that takes in the head of a linked list and an index.
//  The function should return the value of the linked list at the specified index.
// If there is no node at the given index, then return null.

class Node {
    constructor(value){
        this.value = value ;
        this.next = null ;
    }
}


const getNodeValue = (head, index) => {
  // todo
    if(head){
        let node_counter = 0 ;
        let current = head
        while(current){
            if(node_counter === index){
            return current.val
            }
            current = current.next ;
            node_counter++ ;
        }

    }
    return null
};
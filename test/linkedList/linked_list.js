// Write a function, sumList, that takes in the head of a linked list containing numbers as an argument. The function should return the total sum of all values in the linked list.


const Node = require('./node')


const a = new Node('A')
const b = new Node('B')
const c = new Node('C')
const d = new Node('D')

a.next = b
b.next = c
c.next = d

function sumLinkedList (head){
    if (head){
        let sum = head.value ;
        let current = head.next
        while(current != null){
            sum += current.value ;
            current = current.next
        }
        return sum
    }
    return 0
}
console.log(sumLinkedList(a))
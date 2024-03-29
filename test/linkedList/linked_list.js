// Write a function, sumList, that takes in the head of a linked list containing numbers as an argument. The function should return the total sum of all values in the linked list.


const Node = require('./node')
const LinkedList = require('./linkedList')

// const a = new Node('A')
// const b = new Node('B')
// const c = new Node('C')
// const d = new Node('D')

// linked_list.insertHead(d)
// linked_list.insertHead(c)
// linked_list.insertHead(b)
// linked_list.insertHead(a)

// a.next = b
// b.next = c
// c.next = d

let linked_list = new LinkedList()

let head = null
let sum = 0
for (let i = 0; i < 10; i++) {
    let node = new Node(i)
    head = linked_list.insertHead(node);
    sum += i

}

console.log('Sum : ', sum)


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


//Access HeadNode => this.head
//Check if list is empty => this.isEmpty() 
//Node class  { data ; Node nextElement;}

//Inserts a value at the end of the list  
// LinkedList.prototype.insertAtTail = function(newData) {

//   //Creating a new Node with value data
//   let node = new Node(newData);

//   //Write code here
//   if(!this.isEmpty()){
//     let current = this.head ;
//     while(current.nextElement){
//       current = current.nextElement
//     }
//     current.nextElement = node
//   }
//   else{
//     this.insertAtHead(newData)
//   }

//   return this.head;
// }

console.log(sumLinkedList(head))
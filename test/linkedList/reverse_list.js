// Write a function, reverseList, that takes in the head of a linked list as an argument. 
// The function should reverse the order of the nodes in the linked list in-place and 
// return the new head of the reversed linked list.

// Iterative reverser

class Node {
    constructor(value){
        this.value = value ;
        this.next = null ;
    }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;


// const reverseList = (head) => {
//   // todo
//     let my_buffer = [] ;
//     let current = head ;
//     let counter = -1
//     while(current){
//         my_buffer.push(current)
//         current = current.next ;
//         counter++
//     }
//     let last_index = counter 
//     for( ; counter > 1 ; counter--){
//         current = my_buffer[counter]
//         current.next = my_buffer[counter -1 ]
//     }
//     return my_buffer[last_index]
// };



const reverseList = (head) => {
  // todo
    var prev = null;
    var current = head;
    var next = null;
        while (current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        node = prev;
        return node;
};



console.log(reverseList(a).next.value)
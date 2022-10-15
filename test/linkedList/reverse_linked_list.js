"use strict";
const LinkedList = require('./LinkedList.js');
const Node = require('./Node.js');

//Access HeadNode => list.getHead()
//Set the value of HeadNode => list.getHead()
//Check if list is empty => list.isEmpty()
//Insert at head => list.insertAtHead(value)
//Delete at head => list.deleteAtHead()
//Insert at tail => list.insertAtTail(value)
//Search for element => list.search(value)
//Delete by value => list.deleteVal(value)
//Node class { data ; Node nextElement;}

function reverse(list) {
  let previousNode = null;
  let currentNode = list.getHead(); // The current node
  let nextNode = null; // The next node in the list

  //Reversal
  while (currentNode != null) {
    nextNode = currentNode.nextElement;
    currentNode.nextElement = previousNode;
    previousNode = currentNode;
    currentNode = nextNode;
  }

  //Set the last element as the new head node
  //  list.setHead(previousNode);

  return previousNode

}

let list = new LinkedList();
list.insertAtHead(4);
list.insertAtHead(9);
list.insertAtHead(6);
list.insertAtHead(1);
list.insertAtHead(0);
list.printList();
let newHead = reverse(list);
// list.printList();

for(let i = 0 ; i < 6 ; i++){
  console.log(newHead.data, '->')
  newHead = newHead.nextElement
}


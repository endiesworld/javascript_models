// Solution Review: Detect a Loop in a Linked List

"use strict";
const LinkedList = require('./LinkedList.js');
const Node = require('./Node.js');

//Access HeadNode => list.getHead()
//Check if list is empty => list.isEmpty()
//Insert at head => list.insertAtHead(value)
//Delete at head => list.deleteAtHead()
//Insert at tail => list.insertAtTail(value)
//Search for element => list.search(value)
//Delete by value => list.deleteVal(value)
//Node class { data ; Node nextElement;}
function detectLoop(list){
  let onestep = list.getHead();
  let twostep = list.getHead();
  while(onestep!=null && twostep!=null && twostep.nextElement!=null){ 
    onestep = onestep.nextElement // Moves one node at a time
    twostep = twostep.nextElement.nextElement // Moves two nodes at a time
    if (onestep == twostep){ // Loop exists
      return true;
    }
  }
  return false;
}
//----------------------

let list = new LinkedList();

list.insertAtHead(21);
list.insertAtHead(14);
list.insertAtHead(7);

let head = list.getHead();
let node = list.getHead();

// Adding a loop
for(var i=0; i<4; i++){
    if(node.nextElement == null){
        node.nextElement = head.nextElement;
        break;
    }
    node = node.nextElement
}
console.log(detectLoop(list))
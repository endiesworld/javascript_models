// Challenge: Remove Duplicates from Linked List

"use strict";
const LinkedList = require('./LinkedList.js');
const Node = require('./Node.js');

//Access HeadNode => list.getHead()
//Acess Length => list.length;
//Check if list is empty => list.isEmpty()
//Insert at head => list.insertAtHead(value)
//Delete at head => list.deleteAtHead()
//Insert at tail => list.insertAtTail(value)
//Search for element => list.search(value)
//Delete by value => list.deleteVal(value)
//Node class { data ; Node nextElement;}
function removeDuplicates(list) {
  //Write your code here
    if(list.isEmpty()){
        return null
    }
    // let head = list.getHead()
    let ref = {}
    let store = []
    let newList = new LinkedList()

    let current = list.getHead()
    
    while(current){
        if(!ref[current.data]){
        ref[current.data] = current.data
        store.push(current.data)
        }
        current = current.nextElement
    }
    
    for (let data of store){
        newList.insertAtTail(data)
    }

  return newList ; //return the updated list here
}
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
//Create List => list = LinkedList()
//Remove duplicates => list.removeDuplicates()
//Node class { data ; Node nextElement;}

//Returns a list containing the union of list1 and list2  
function union(list1, list2) {
  // Write your code here
  let store1 = {}
  let store2 = {}
  let current1 = list1.getHead()
  while (current1){
    store1[current1.data] = current1.data
    current1 = current1.nextElement
  }
  let current = list2.getHead()
  while(current){
    if(!store1[current.data] && (!store2[current.data])){
      list1.insertAtTail(current.data)
      store2[current.data] = current.data
    }
    current = current.nextElement
  }

  return list1;
}

//Returns a list containing the intersection of list1 and list2  
function intersection(list1, list2) {
  let store1 = {}
  let store2 = {}
  let current1 = list1.getHead()
  let current2 = list2.getHead()
  let commonstore = []
  while(current1 || current2){
    if(current1){
      if(!store1[current1.data]){
      store1[current1.data] = current1.data
      }
      if(store2[current1.data]){
        commonstore.push(current1.data)
      }
      current1 = current1.nextElement
    }
    if(current2){
      if(!store2[current2.data]){
      store2[current2.data] = current2.data
      }
      if(store1[current2.data]){
        commonstore.push(current2.data)
      }
      current2 = current2.nextElement
    }
  }
  let result = new LinkedList();
  for(let i of commonstore){
    result.insertAtTail(i)
  }
  // Write your code here

  return result;
}
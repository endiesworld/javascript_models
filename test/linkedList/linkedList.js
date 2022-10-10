"use strict";
module.exports = class LinkedList{
    constructor(){
        this.head = null 
    }

    insertHead(node){
        let newNode = node
        newNode.next = this.head
        this.head = newNode
        return this.head
    }

    isEmpty(){
        return this.head == null
    }
}

// class Node {
//     constructor(value) {
//         this.val = value; //value of the Node
//         this.leftChild = null; //leftChild (will also be of the Node class)
//         this.rightChild = null; //rightChild (will also be of the Node class)
//     }

// }

// //instantiating a Node with value 6 
// var myNode= new Node(6);
// console.log("Value of myNode : ", myNode.val);
// //the left and the right children are null so far 
// //let's also instantiate them
// myNode.leftChild=new Node(5); 
// myNode.rightChild=new Node(7);
// console.log("Value of myNode.leftChild : ", myNode.leftChild.val);
// console.log("Value of myNode.rightChild : ", myNode.rightChild.val);


class Node {
    constructor(value) {
        this.val = value; //value of the Node
        this.leftChild = null; //leftChild (will also be of the Node class)
        this.rightChild = null; //rightChild (will also be of the Node class)
    }

}

class BinarySearchTree {
    constructor(rootValue) {
        this.root = new Node(rootValue); //the rootNode
    }

    insert(newValue) {
    if(this.root==null){
        this.root=new Node(newValue);
        return;
    }
    //starting from the root

    var currentNode = this.root;
    var parent;
    //while we get to the null node  
    while (currentNode) {
        parent = currentNode; //update the parent
        if (newValue < currentNode.val) {
            //if newValue < currentNode.val, 
            //iterate to the left subtree
            currentNode = currentNode.leftChild
        } else {
            //if newValue >= currentNode.val, 
            //iterate to the right subtree
            currentNode = currentNode.rightChild;
        }
    }
    //by now, we will have the parent of the null
    //node where we have to insert the newValue 
    if (newValue < parent.val) {
        //if newValue < parent.val
        //insert into the leftChild
        parent.leftChild = new Node(newValue)
    } else {
        //if newValue >= parent.val
        //insert into the rightChild
        parent.rightChild = new Node(newValue)
    }
}
}

var BST= new BinarySearchTree(8);
console.log("The root val for BST : ", BST.root.val)
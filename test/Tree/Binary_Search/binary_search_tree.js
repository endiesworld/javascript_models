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

    preOrderPrint(currentNode) {
        if (currentNode!==null) {
            console.log(currentNode.val);
            this.preOrderPrint(currentNode.leftChild);
            this.preOrderPrint(currentNode.rightChild);
        }

    }

    inOrderPrint(currentNode) {
        if (currentNode!==null) {
            this.inOrderPrint(currentNode.leftChild);
            console.log(currentNode.val);
            this.inOrderPrint(currentNode.rightChild);
        }

    }

    postOrderPrint(currentNode) {
  //if the currentNode IS NOT EQUAL to null
    if (currentNode!==null) {
        //make recursive call to the left subtree
        this.postOrderPrint(currentNode.leftChild);
         //make recursive call to the right subtree
        this.postOrderPrint(currentNode.rightChild);
        //print its value
        console.log(currentNode.val);
    }
  //if the currentNode IS EQUAL to null, then 
  //we simply return from the function
}

    search(value) { 
        var currentNode = this.root;
        while (currentNode && (currentNode.val != value)) { 
            if (value < currentNode.val) {
                currentNode = currentNode.leftChild;
            } else { 
                currentNode = currentNode.rightChild;

            }
        }
        return currentNode;
    }

      delete(currentNode, value) {
        //case 1: checking for the empty tree
        // if rootNode equals Null
        if (currentNode == null) {
            return false;
        }
        //start traversing the tree
        //until we find the value to be deleted
        //or end up with a null node
        var parentNode;
        while (currentNode && (currentNode.val != value)) {

            parentNode = currentNode;
            //saving the previous node as parentNode before the currentNode is updated
            if (value < currentNode.val) {

                currentNode = currentNode.leftChild;
            } else {
                currentNode = currentNode.rightChild;

            }

        }
        //case 2 : currentNode IS EQUAL to null. Value not found!
        if (currentNode === null) {
            return false;
        } else if (currentNode.leftChild == null && currentNode.rightChild == null) {
            //case 3: currentNode is a leaf node
            //i.e. right and left EQUAL to null
            //now checking if the node to be deleted 
            //is a left or a right child of its parent
            if(currentNode.val==this.root.val){
                this.root=null;
                return true;
            }
            else if (currentNode.val < parentNode.val) {
                parentNode.leftChild = null;
                return true;
            } else {
                parentNode.rightChild = null;
                return true;
            }
        } else if (currentNode.rightChild == null) {
            //if the node to be deleted has a left child only 
            //we'll link the left child to the parent of 
            //the node to be deleted  
            if(currentNode.val==this.root.val){
                this.root=currentNode.leftChild;
                return true;
            }else if (currentNode.leftChild.val < parentNode.val) {
                parentNode.leftChild = currentNode.leftChild;
                return true;
            } else {
                parentNode.rightChild = currentNode.leftChild;
                return true;
            }

        } else if (currentNode.leftChild == null) {
            //if the node to be deleted has a right child only 
            //we'll link the right child to the parent of 
            //the node to be deleted  
            if(currentNode.val==this.root.val){
                this.root = currentNode.rightChild;
                return true;
            }else if (currentNode.rightChild.val < parentNode.val) {
                parentNode.leftChild = currentNode.rightChild;
                return true;
            } else {
                parentNode.rightChild = currentNode.rightChild;
                return true;
            }
        } else { //case where the node to be deleted has 2 children
            //starting point for the right sub tree
            var minRight = currentNode.rightChild;
            //traverse to find the left most node in the right subtree
            while (minRight.leftChild !== null) {
                minRight = minRight.leftChild;
            }
            var temp=minRight.val;
            //delete the left most node in the right subtree
            //by calling in the same delete function
            //to cater for whether it has children or not
            this.delete(this.root, minRight.val);
             //replace the currentNode with left most node in the right subtree
            currentNode.val = temp;
            return true;
        }
    }

}

var BST= new BinarySearchTree(8);
console.log("The root val for BST : ", BST.root.val)
BST.insert(4)
BST.insert(9)
BST.insert(5)
BST.insert(2)
BST.insert(8)
BST.insert(12)
BST.insert(10)
BST.insert(14)

inOrderPrint(BST.root)
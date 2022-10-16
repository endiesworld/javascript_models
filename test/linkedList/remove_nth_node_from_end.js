// Given the head of a linked list, remove the nth node from the end of the list and return its head.
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:

// Input: head = [1], n = 1
// Output: []
// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
        
    let current = head.next
    let counter = 1
    while(current){
        current = current.next
        counter++
    }
    
    current = null
    let n_ = counter - n 
    let new_head = null
    let store = null
    
    for(let i = 0 ; i<counter; i++){
        if(i != n_){
            if(!store){
                new_head = new ListNode(head.val)
                store = new_head
                head = head.next
            }
            else{
                store.next = new ListNode(head.val)
                head = head.next
                store = store.next
            }
        }
        else{
            head = head.next
            
        }
    }
        
    
    return new_head
};
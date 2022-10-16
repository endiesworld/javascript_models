// You are given two non-empty linked lists representing two non-negative integers. The digits are 
// stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and 
// return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
 

// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let addition = 0
    let remainder = 0
    let current_1 = l1
    let current_2 = l2
    let data_1 = 0
    let data_2 = 0
    let store = null
    let exact_val = 0
    let head = null
    while(current_1 || current_2){
        if(current_1){
            data_1 = current_1.val
            current_1 = current_1.next
        }
        if(current_2){
            data_2 = current_2.val
            current_2 = current_2.next
        }
        let value = data_1 + data_2 + remainder
        if (value > 9){
            remainder = 1
            value = value - 10
        }
        else{
            remainder = 0
        }
        if(store){
                store.next = new ListNode(value)
                store = store.next
            }
        else {
                head = new ListNode(value)
                store = head
            }
        data_1 = 0
        data_2 = 0
        
    }
        if(remainder)(
        store.next = new ListNode(remainder)
    )

    return head 
    
};
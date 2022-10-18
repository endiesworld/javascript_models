/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let store = []
    
    let list1 = lists[0]
    for(let i = 1 ; i<lists.length; i++){
        let nextList = lists[i]
        let current1 = list1
        let current2 = nextList
        while(current1 && current2){
            
            if(current1.val > current2.val){
                store.push[current1.val]
                current1 = current1.next
            }
            else{
                store.push[current2.val]
                current1 = current2.next
            }     
        }
        while(current1){
            store.push[current1.val]
                current1 = current1.next
        }
        while(current2){
            store.push[current2.val]
                current2 = current2.next
        }
    }
    
};
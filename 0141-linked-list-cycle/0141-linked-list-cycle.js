/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let current = head;
    if(!head) return false
    while(current && !current?.isPassed){
        if(current?.next === null) return false;
        current.isPassed = true
        current = current.next
    }
    return true
};
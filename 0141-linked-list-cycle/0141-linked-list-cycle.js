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
    if(!head) return false
    while(head && !head?.isPassed){
        if(head?.next === null) return false;
        head.isPassed = true
        head = head.next
    }
    return true
};
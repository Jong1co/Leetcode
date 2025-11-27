/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    if(!head.next) return head.next
    let prev = null;
    let slow = head;
    let fast = head;

    while(fast && fast.next){
        fast = fast.next.next;
        prev = slow;
        slow = slow.next;
    }

    if(prev?.next){
        prev.next = prev.next.next;
    }

    return head    
};
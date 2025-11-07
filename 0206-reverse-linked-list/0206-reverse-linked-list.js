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
var reverseList = function(head) {
    let front;
    
    while(head?.val !== undefined){
        front = new ListNode(head.val, front);
        head = head.next;
    }

    return front ?? head;
};
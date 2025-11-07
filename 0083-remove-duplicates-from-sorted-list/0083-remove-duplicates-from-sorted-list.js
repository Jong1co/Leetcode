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
var deleteDuplicates = function(head) {
    const dummy = new ListNode(null);
    let tail = dummy
    
    while(head?.val !== undefined){
        if(tail?.val === head.val){
            head = head.next
        } else {
            tail.next = new ListNode(head.val);
            head = head.next;
            tail = tail.next;
        }
    }

    return dummy.next;
};
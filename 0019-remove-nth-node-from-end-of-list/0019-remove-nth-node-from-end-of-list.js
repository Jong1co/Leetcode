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
    let length = 0;
    let current = head;
    let cur = head;
    while(current){
        current = current.next;
        length++;
    }

    if(length == n){
        return cur.next
    }

    // 5 - 2 = 3;
    for(let i = 0; i < length - n - 1; i++){
        cur = cur.next;
    }

    if(cur.next?.next){
        cur.next = cur.next?.next;
    } else {
        cur.next = null
    }

    return head;
};
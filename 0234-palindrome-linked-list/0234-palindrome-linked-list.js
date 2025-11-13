/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let s = '', p = '';
    let cur = head;
    while(cur){
        s += cur.val;
        p = cur.val + p;
        cur = cur.next;
    }
    return s == p;
}
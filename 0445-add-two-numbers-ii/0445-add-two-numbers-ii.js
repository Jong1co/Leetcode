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
    let dummy = new ListNode(0)
    let head = dummy;
    l1 = reverse(l1)
    l2 = reverse(l2)

    let isOverTen = false;
    while(l1 || l2){
        let v1 = l1?.val || 0;
        let v2 = l2?.val || 0;

        let sum = v1 + v2 + (isOverTen ? 1 : 0)
        isOverTen = (sum >= 10)

        head.next = new ListNode(isOverTen ? sum - 10 : sum);
        head = head.next;

        if(l1){
            l1 = l1.next;
        }
        if(l2){
            l2 = l2.next;
        }
    }

    if(isOverTen) {
        head.next = new ListNode(1)
    }

    return reverse(dummy.next)
};

function reverse(head){
    let prev = null;
    let cur = head;

    while(cur){
        let next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }

    return prev;
}
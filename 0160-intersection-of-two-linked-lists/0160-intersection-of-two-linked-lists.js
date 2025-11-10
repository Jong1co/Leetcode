/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let listA = headA
    let listB = headB

    while(listA != listB){
        if(listA){
            listA = listA.next
        } else {
            listA = headB
        }

        if(listB){
            listB = listB.next
        } else {
            listB = headA
        }
    }
    return listA
};
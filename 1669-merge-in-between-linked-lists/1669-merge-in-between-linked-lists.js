/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    let head1 = list1;
    let head2 = list2;
    
    for(let i = 0; i < a - 1; i++){
        head1 = head1.next;
    }

    let next = head1.next;

    head1.next = head2;

    while(head2?.next){
        head2 = head2.next;
    }

    for(let i = 0; i < b - a; i++){
        next = next?.next
    }

    head2.next = next.next

    return list1
};
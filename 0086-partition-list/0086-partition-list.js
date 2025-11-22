/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let lessHead = new ListNode(0);
    let greaterHead = new ListNode(0);

    let less = lessHead;
    let greater = greaterHead;

    while (head) {
        if (head.val < x) {
            less.next = head;
            less = less.next;
        } else {
            greater.next = head;
            greater = greater.next;
        }
        head = head.next;
    }

    greater.next = null;      // 중요한 포인트: tail 정리
    less.next = greaterHead.next;

    return lessHead.next;
};

/**
let dummy = new ListNode(0)
  let partial = dummy
  let cur = new ListNode(0, head)

  while (cur?.next) {
    let prev = cur
    partial.next = cur.next
    while (partial.next?.val >= x) {
        partial = partial.next
    }
    prev.next = partial.next
    partial.next = null
    cur = cur.next
  }
  cur.next = dummy.next

  return head
 */


// var partition = function(head, x) {
//     let dummy = new ListNode(0, head)
//     let cur = dummy;
//     let partial = new ListNode(0)
//     let temp = partial;

//     while(cur?.next){
//         if(cur.next.val >= x){
//             temp.next = cur.next;
//             temp = temp.next;
//             cur = cur.next;
//         } else {
//             cur = cur.next;
//         }
//     }

//     // cur.next = temp.next

//     return dummy.next;
// };
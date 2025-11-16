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
var swapPairs = function (head) {
  let dummy = new ListNode(0, head)
  let cur = dummy

  while (cur?.next && cur.next.next) {
    let first = cur.next
    let second = cur.next.next

    first.next = second.next
    second.next = first
    cur.next = second

    cur = first
  }

  return dummy.next
}
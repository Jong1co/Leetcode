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
  let front = new ListNode(head.val)
  let current = head.next
  if (current === null || (front.val === current.val && current.next === null)) return true

  while (current) {
    front = new ListNode(current.val, front)
    if (front?.val === current.next?.val) {
      let front_head = front
      let current_head = current.next

      while (front_head?.val === current_head?.val) {
        if (front_head === null && current_head === null) {
          return true
        } else {
          current_head = current_head.next
          front_head = front_head.next
        }
      }
    }

    if (front?.val === current?.val) {
      let front_head = front
      let current_head = current

      while (front_head?.val === current_head?.val) {
        if (front_head === null && current_head === null) {
          return true
        } else {
          current_head = current_head.next
          front_head = front_head.next
        }
      }
    }

    current = current.next
  }

  return false
}
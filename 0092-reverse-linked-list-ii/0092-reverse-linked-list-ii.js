/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (!head || left === right) return head

  const dummy = new ListNode(0, head)
  let prev = dummy

  // 1. left-1 위치까지 이동
  for (let i = 1; i < left; i++) {
    prev = prev.next
  }

  // prev.next가 뒤집기의 시작점
  let curr = prev.next

  // 2. standard reverse process
  for (let i = 0; i < right - left; i++) {
    const next = curr.next
    curr.next = next.next
    next.next = prev.next
    prev.next = next
  }

  return dummy.next
}

// 1. front, tail, middle을 나눈다
// 2. middle을 뒤집는다.
// 3. front, reversedMiddle, tail로 잇는다.
// 4. reutrn한다.
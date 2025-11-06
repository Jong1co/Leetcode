/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  const dummy = new ListNode();  // 임시 시작 노드
  let tail = dummy;

  let l1 = list1;
  let l2 = list2;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      tail.next = l1;
      l1 = l1.next;
    } else {
      tail.next = l2;
      l2 = l2.next;
    }
    tail = tail.next;
  }

  // 한쪽이 남아 있으면 그대로 연결
  tail.next = l1 || l2;

  return dummy.next; // 진짜 시작 노드
};
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// class ListNode {
//      val: number
//      next: ListNode | null
//      constructor(val?: number, next?: ListNode | null) {
//          this.val = (val===undefined ? 0 : val)
//          this.next = (next===undefined ? null : next)
//      }
//  }

function modifiedList(nums: number[], head: ListNode | null): ListNode | null {
     const map = nums.reduce((acc, cur) => {
    acc[cur] = true
    return acc
  }, {})

  let result = head
  let pointer = result

  while (pointer.next) {
    if (map[pointer.next.val]) {
      pointer.next = pointer.next.next
    } else {
      pointer = pointer.next
    }
  }

  return map[head.val] ? result.next : result
};

    // let pointer = head;

    // if(map[pointer.val]){
    //     // next를 current로 만들어야 된다.
    //     head = head.next
    // } else {
    //     pointer = pointer.next
    // }

    // return head
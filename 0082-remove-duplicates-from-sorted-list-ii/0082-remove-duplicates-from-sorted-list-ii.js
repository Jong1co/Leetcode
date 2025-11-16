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
var deleteDuplicates = function(head) {
    // dummy를 생성해.
    // 만약에 다음이랑 다다음이랑 같으면 같을 때까지 반복해서 없애버려
    // 그리고 만약에 다르면 포인터 다음으로 넘겨

    let dummy = new ListNode(0, head)
    let cur = dummy

    while(cur?.next && cur.next?.next){
        let otherValuePointer = cur.next;
        if(cur.next?.val === otherValuePointer.next?.val){
            while(cur.next?.val === otherValuePointer.next?.val){
                otherValuePointer = otherValuePointer.next;
            }
            cur.next = otherValuePointer.next;
        } else {
            cur = cur.next;
        }
    }

    return dummy.next
};
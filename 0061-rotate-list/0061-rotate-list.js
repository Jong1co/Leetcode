/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    let length = 1;
    let cur = head;
    if(!head || !k) return head;

    while(cur?.next){
        cur = cur.next;
        length++
    }

    let rest = k % length;
    
    if(rest === 0) return head;

    let newCur = head;
    let steps = length - rest - 1
    while (steps > 0) {
        newCur = newCur.next
        steps--
    }

    let dummy = new ListNode(0, newCur.next)
    let temp = dummy.next;
    newCur.next = null;

    while(temp?.next){
        temp = temp.next;
    }

    temp.next = head
    
    return dummy.next;


    // 전체 갯수를 센다.
    // k를 갯수로 나눠서 나머지(r)만큼 앞에 붙이면 됨
    // i가 0부터 전체갯수 - r개만큼 뒤에는 null하고 temp에 저장해 두었다가
    // temp 의 끝에서 next = 원래꺼 하면 됨
};
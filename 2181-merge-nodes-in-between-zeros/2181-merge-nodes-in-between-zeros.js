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
var mergeNodes = function(head) {
    let cur = head;
    let dummy = new ListNode(0)
    let dummyCur = dummy

    while(cur){
        // 무조건 0임
        let tempCur = cur.next;
        if(tempCur === null) break;
        let sum = 0;
        
        while(tempCur.val !== 0){
            sum += tempCur.val
            tempCur = tempCur.next;
        }

        if(sum > 0){
            dummyCur.next = new ListNode(sum)
            dummyCur = dummyCur.next
            cur = tempCur
        } else {
            cur = cur.next;
        }
    }

    return dummy.next;  
};
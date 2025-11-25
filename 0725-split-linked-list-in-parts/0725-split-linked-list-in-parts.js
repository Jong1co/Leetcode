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
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
    let length = 0;
    let result = Array.from({length: k}, () => null)
    let count_cur = head;

    while(count_cur){
        length++;
        count_cur = count_cur?.next;
    }

    // 기본적으로 Math.floor(length / k)개이고
    // 앞에서부터 length % k 개만큼은 한개씩 더 있는 구조임
    let rest = length % k

    let cur = head;
    let prev = null;
    for(let i = 0; i < k; i++){
        if(!cur){
            break;
        }
        prev = cur;
        const loop_time = Math.floor(length / k) + (rest > 0 ? 1 : 0)
        rest--
        for(let j = 1; j < loop_time; j++ ){
            cur = cur.next;
        }

        let next = cur?.next;
        cur.next = null;
        result[i] = prev;
        cur = next;
    }

    return result

    // 1. 총길이 파악
    // 2. 각 셀당 몇개씩 들어가면 될지 파악
    // 3. for문돌고, pointer 옮기면서 끊고 넣고 반복
};
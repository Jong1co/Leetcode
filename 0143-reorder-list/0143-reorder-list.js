/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let slow = head;
    let fast = head;

    while(fast && fast?.next){
        slow = slow.next
        fast = fast.next.next
    }

    let second = slow.next;
    slow.next = null;

    // head, second가 남게도니다.
    // 그럼 이제 second를 reverse한 후에, 하나씩 돌면서 합치면 되네

    let secondHead = second;
    let prev = null;
    while(secondHead){
        let next = secondHead.next
        secondHead.next = prev;
        prev = secondHead
        secondHead = next;
    }
    second = prev; //

    let first = head;
    while(second){
        let temp1 = first.next;
        let temp2 = second.next;

        first.next = second;
        second.next = temp1;

        first = temp1;
        second = temp2;
    }

    return head
};

// 1, 2, 3
// 5, 4

// 1 -> 5 -> 2 // cur = 
// 

/**
        // let next = secondHead.next
        // secondHead.next = secondHead.next.next // 1, 3
        // next.next = secondHead.next // 2, 1, 3
        // prev = secondHead
 */
// slow = 3;

// n - (n)
// n
// n - (n - 1)
// n - 1

// ...
// n - k
// k
// n log n 이지.. 왜냐하면 계속 줄어들거니까 ?
// 50000 -> 2씩 줄어든다.
// 그리고 한번에 끝이랑 바꾸니까 중간까지만 가면 된다.
// 50000 * 12500 -> 한 오억번 탐색해야 되긴 하네


    /**
    let prev = null;
    let cur = head;

    while (cur) {
        let next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
     */

     /**
         let dummy = new ListNode(0);
    let dummyHead = dummy;
    let cur = new ListNode(0, head);
    let secondCur = new ListNode(0, second);

    while(cur?.next){
        dummyHead.next = cur.next;
        dummyHead = dummyHead.next;
        cur = cur.next;
        dummyHead.next = secondCur.next;
        dummyHead = dummyHead.next;
        secondCur = secondCur.next;
        break;
    }

    return dummy.next;
      */
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
var reverseList = function(head) {
    let front = null;
    let current = head;
    
    while(current){
        let temp = current.next;
        current.next = front;
        front = current;
        current = temp;
    }

    return front
};

/**
    let prev = null;
    let curr = head;
    // Below given is similar to while(curr != null)
    while(curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }



    head = prev; 
    return head;

    prev가 존재함
    prev = null;
    current = head;

    while(current){
        let temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
    }

 */
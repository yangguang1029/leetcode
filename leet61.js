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
    if(!head) {
        return head;
    }
    let c = 0;
    let p = head;
    while(p) {
        p = p.next;
        c+= 1
    }
    if(k%c === 0) {
        return head;
    }
    p = head;
    let i = 1;
    while(i < c - k % c) {
        i += 1
        p = p.next;
    }
    const newhead = new ListNode()
    newhead.next = p.next;
    p.next = null
    p = newhead.next;
    while(p.next) {
        p=p.next
    }
    p.next = head
    return newhead.next
};
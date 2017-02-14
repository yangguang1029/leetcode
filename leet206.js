/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(!head) {
    	return head;
    }
    if(!head.next) {
    	return head;
    }
    var p = head;
    var q = p.next;
    while(q) {
    	var r = q.next;
    	q.next = p;
    	p = q;
    	q = r;
    }
    head.next = null;
    return p;
};
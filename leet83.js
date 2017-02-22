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
var deleteDuplicates = function(head) {
    if(!head) {
    	return head;
    }
    var p = head;
    while(p) {
    	var q = p.next;
    	if(!q) {
    		break;
    	}
    	var v = p.val;
    	while(q && q.val === v) {
    		q = q.next;
    	}
    	if(q !== p.next) {
    		p.next = q;
    	}
    	p = q;
    }
    return head;
};
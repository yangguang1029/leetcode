/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    var p = head;
    var q = head;
    while(p && q) {
    	p = p.next;
    	q = q.next;
    	if(q) {
    		q = q.next;
    	}
    	if(p === q) {
    		return true;
    	}

    }
    return false;
};
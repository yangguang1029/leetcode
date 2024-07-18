/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
	if(!head || !head.next) {
        return false;
    }
    var p = head;
    var q = head.next;
    while(p && q) {
    	p = p.next;
    	q = q.next;
    	if(q) {
    		q = q.next;
    	}
    	if(p && q && p === q) {
    		return true;
    	}

    }
    return false;
};

const head = createList([1,2])

console.log(hasCycle(head));
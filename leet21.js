/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists1 = function(l1, l2) {
    if(!l1) {
    	return l2;
    }
    if(!l2) {
    	return l1;
    }
    var head = l1.val < l2.val ? l1 : l2;
    var p = head;
    var q = l1.val < l2.val ? l2 : l1;
    while(p && q) {
    	while(p && p.next && p.next.val < q.val) {
    		p = p.next;
    	}
    	var p1 = p.next;
    	p.next = q;
    	if(p1) {
    	    while(q && q.next && q.next.val < p1.val) {
    		    q = q.next;
    	    }
    	}
    	
    	var q1 = q.next;
    	if(p1) {
    		q.next = p1;
    	}
    	
    	p = p1;
    	q = q1;
    }

    return head;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
	let p1 = list1;
	let p2 = list2;
	let newlist = new ListNode()
	let p = newlist;
	while(p1 && p2) {
		if(p1.val < p2.val) {
			p.next = p1;
			p1 = p1.next;
		} else {	
			p.next = p2;
			p2 = p2.next;
		}
		p = p.next
	}
	if(p1) {
		p.next = p1;
	}
	if(p2) {
		p.next = p2;
	}
	return newlist.next;
};



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
var mergeTwoLists = function(l1, l2) {
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

var l1 = createList([1,3,4]);
printList(l1);
console.log("-------------");
var l2 = createList([0]);
printList(l2);
console.log("-------------");
var fuck = mergeTwoLists(l1, l2);
printList(fuck);



/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
	if(!head) {
		return false;
	}
    var arr = [];
    var p = head;
    while(p) {
    	arr.push(p);
    	p = p.next;
    }
    p = head;
    var re = true;
    while(p) {
    	var q = arr.pop;
    	if(p.val !== q.val) {
    		re = false;
    		break;
    	}
    	p = p.next;
    }
    return re;
};

var fuck = createList([1])
console.log(isPalindrome(fuck))
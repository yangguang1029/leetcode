/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next) 
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    if(!head) {
        return head;
    }

    // 用两条链表分别存储大的和小的
    const largehead = new ListNode()
    const smallhead = new ListNode();
    let large = largehead;
    let small = smallhead;

    let p = head;
    while(p) {
        if(p.val >= x) {
            large.next = p;
            large = p;
        } else {
            small.next = p;
            small = p
        }
        p = p.next;
    }
    large.next = null
    small.next = largehead.next;
    return smallhead.next;

    

    
};
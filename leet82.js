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
var deleteDuplicates = function(head) {
    if(!head) {
        return head;
    }
    const newhead = new ListNode()
    newhead.next = head;

    let p = newhead;
    while(p && p.next) {
        let q = p.next;
        while(q && q.next && q.val === q.next.val) {
            q = q.next
        }
        if(q === p.next) {
            // q 没有移动
            p = q
        }else {
             p.next = q.next
        }
        
    }
    return newhead.next

};
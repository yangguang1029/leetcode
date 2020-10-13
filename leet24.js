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

var swapPairs = function(head) {
    if(!head || !head.next) {
        return head
    }
    let p = head
    let newhead = head.next
    let q = null
    let prev = null
    let next = null
    while(p) {
        q = p.next
        if(!q) {
            prev && (prev.next = p)
            break
        }
        prev && (prev.next = q)
        next = q.next
        q.next = p
        prev = p
        p.next= null
        p = next
    }
    return newhead
    
};

swapPairs(createList([1,2,3,4]))
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
 var deleteNode = function(node) {
    let p = node
    let prev, next
    while(p) {
        next = p.next
        if(next) {
            p.val = next.val
            prev = p
            p = next
        } else {
            prev.next = null
            break
        }
    }
};

let n = createList([4,1,5,9])
deleteNode(n.next.next)
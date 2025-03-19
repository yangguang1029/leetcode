/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    // 首先改造成双向链表
    let p = head
    p.prev = null
    while(p.next) {
        p.next.prev = p
        p = p.next
    }
    // 现在p在链表尾部了，再分别从两端开始
    let q = head
    while(q !== p && q.next !== p) {
        let qnext = q.next
        let pprev = p.prev
        q.next = p
        p.next = qnext
        q = qnext
        p = pprev
    }
    p.next = null
   
};

const list =createList([1,2,3,4])
reorderList(list)
printList(list)
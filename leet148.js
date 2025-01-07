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

function merge(list1, list2) {
    const newhead = new ListNode()
    let p = list1;
    let q = list2;
    let m = newhead;
    while(p&&q) {
        if(p.val <= q.val) {
            m.next = p;
            p = p.next
        }else {
            m.next = q;
            q = q.next
        }
        m = m.next
    }
    m.next = p ? p : q
    return newhead.next;
}

var sortList = function(head) {
    if(!head || !head.next) {
        return head;
    }
    // 官方题解是使用归并排序，将时间复杂度降低，但要空间复杂度为 o(1)的话，比较麻烦，先不去实现了，先写个归并排序吧
    let first = head;
    let second = head.next;
    while(second && second.next) {
        first = first.next;
        second = second.next;
        if(second) {
            second = second.next
        }
    }
    second = first.next
    first.next = null;
    first = sortList(head)
    second = sortList(second)
    const re = merge(first, second)
    return re;

}


var sortList1 = function(head) {

    // 这个时间复杂度是 n^2，所以超出时间限制了，如何做到 o(nlogn)呢？
    // 这里一个细节就是insert 里修改了 node.next，会影响到原链表

    if(!head) {
        return null
    }
    const newhead = new ListNode()

    function insert(node) {
        let p = newhead;
        while(p && p.next && p.next.val <= node.val) {
            p = p.next
        }
        const q = p.next;
        p.next = node;
        const tmp = node.next;
        node.next = q;
        return tmp;
    }

    let originp = head;
    while(originp) {
        originp = insert(originp)
    }
    return newhead.next;

};
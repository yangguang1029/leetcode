/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if (!head) {
        return head;
    }
    let re = head;
    while (re && re.val === val) {
        re = re.next;
    }
    let p = re;
    while (p) {
        while (p.next && p.next.val !== val) {
            p = p.next;
        }
        let q = p.next;
        if (q) {
            p.next = q.next;
        } else {
            break;
        }
    }
    return re;
};

let a = createList([2]);
printList(removeElements(a, 2));
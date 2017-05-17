/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) {
        return null;
    }
    let pa = headA;
    let pb = headB;

    let ba = false;
    let bb = false;
    while (true) {
        if (pa && pb && pa === pb) {
            return pa;
        }
        pa = pa.next;
        pb = pb.next;
        if (!pa && !ba) {
            pa = headB;
            ba = true;
        }
        if (!pb && !bb) {
            pb = headA;
            bb = true;
        }
        if (ba && !pa) {
            break;
        }
    }
    return null;
};
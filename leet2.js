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
var addTwoNumbers = function(l1, l2) {
    let head = null;
    let hp;
    let p = l1;
    let q = l2;
    let node;
    let tmp = 0;
    while(p && q) {
        let num = p.val + q.val + tmp;
        node = new ListNode(num % 10);
        tmp = Math.floor(num / 10);
        if(!head) {
            head = node;
            hp = head;
        }else{
            hp.next = node;
            hp = node;
        }
        p=p.next;
        q=q.next;
    }
    let r = p ? p : q;
    while(r) {
        let num = r.val + tmp;
        node = new ListNode(num % 10);
        tmp = Math.floor(num / 10);
        hp.next = node;
        hp = node;
        r = r.next;
    }
    if(tmp) {
        hp.next = new ListNode(tmp);
    }
    return head;
};
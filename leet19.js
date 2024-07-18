/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // 删除倒数第 n 个节点，就用双指针即可
    // 注意，需要新建一个头节点，免得玩意删掉了第一个元素

    let newhead = new ListNode()
    newhead.next = head;

    let first = newhead
    let i = 0;
    while(i < n) {
        first = first.next;
        i += 1
    }
    let second = newhead;
    while(first.next) {
        first = first.next;
        second = second.next;
    }
    second.next = second.next ? second.next.next : null
    return newhead.next
};
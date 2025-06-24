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
var insertionSortList = function(head) {

    function insert(listhead, node) {
        if(!listhead) {
            return node
        }
        const newhead = new ListNode(Number.MIN_SAFE_INTEGER, listhead)
        newhead.next = listhead
        let p = newhead
        while(p.next && p.next.val < node.val) {
            p = p.next
        }
        node.next = p.next
        p.next = node
        return newhead.next
    }

    let currentNode = head
    let newhead = null;
    while(currentNode) {
        let nextnode = currentNode.next;
        currentNode.next = null
        newhead = insert(newhead, currentNode)
        currentNode = nextnode
    }
    return newhead
};

const head = createList([4,2,1,3])
const newhead = insertionSortList(head)
printList(newhead)
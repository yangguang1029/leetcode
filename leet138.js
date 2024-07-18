/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */

// 用 2 个数组来缓存，然后用 index 来查询，太笨重了
// 官方解法是用原始 node 作为 key，新 node 作为 value 进行存储

function _Node(val, next, random) {
       this.val = val;
       this.next = next;
       this.random = random;
};

var copyRandomList = function(head) {
    if(!head) {
        return null
    }

    function createNode(origin) {
        if(!origin) {
            return null;
        }
        debugger
        let node = map.get(origin)
        if(!node) {
            node = new _Node(origin.val)
            map.set(origin, node)
            node.next = createNode(origin.next)
            node.random = createNode(origin.random)
            
        }
        return node
    }

    const map = new Map;
    let p = head;
    let newhead = new _Node()
    let q = newhead;
    while(p) {
       q.next = createNode(p)
        p = p.next;
        q = q.next;
    }
    return newhead.next;
}


var copyRandomList1 = function(head) {
    // 用数组辅助暂存
    if(!head) {
        return null
    }
    const parr = []
    const qarr = []
    let p = head;
    const newhead = new _Node()
    let q = newhead;
    while(p) {
        parr.push(p)
        const node = new _Node(p.val,null, null)
        qarr.push(node)
        q.next = node
        q = node
        p = p.next
    }
    p = head;
    q = newhead.next
    while(p) {
        const random = p.random;
        if(random) {
            const index = parr.findIndex(item => item === random)
            if(index >= 0) {
                q.random = qarr[index]
            }
        }
        q = q.next
        p = p.next;
    }
    return newhead.next
};

const head = createList([1,2,3,4,5,6])
const arr = []
let p = head;
while(p) {
    arr.push(p)
    p = p.next
}
p = head
while(p) {
    p.random = arr[Math.floor(Math.random() * arr.length)]
    p = p.next
}
copyRandomList(head)
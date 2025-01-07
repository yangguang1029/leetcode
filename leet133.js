/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */

// 既然每个节点的值是唯一的，那就以这个值为 key，将节点存在 map 里
// 这里最需要注意的就是m.set(val, item)的位置，如果放在 neighbors 后面，就会直接死循环
var cloneGraph = function(node) {

    const m = new Map()

    function traverse(n) {
        if(!n) {
            return null;
        }
        const val = n.val
        let item = m.get(val);
        if(!item) {
            item = new _Node(val)
            m.set(val, item)
            item.neighbors = n.neighbors.map(item => {
                return traverse(item)
            })
           
        }
        
        return item;
    }

    return traverse(node)
    
};

const node = createGraph([[2,4],[1,3],[2,4],[1,3]])
cloneGraph(node)
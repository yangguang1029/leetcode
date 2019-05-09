/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
    let depth = 0
    if(!root) {
      return depth
    }
    let arr = [root]
    while(arr.length > 0) {
      depth += 1
      let newarr = []
      arr.forEach(item => {
        if(item.children) {
          newarr = newarr.concat(item.children)
        }
      })
      arr = newarr
    }
    return depth
};
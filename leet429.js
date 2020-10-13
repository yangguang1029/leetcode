/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    if(!root) {
      return []
    }
    let arr = [root]
    let re = []
    while(arr.length > 0) {
      let newarr = []
      re.push(arr.map(item => {
        if(item.children) {
          newarr = newarr.concat(item.children)
        }
        return item.val
      }))
      arr = newarr
    }
    return re
};
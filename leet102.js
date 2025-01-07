/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const re = []
    if(!root) {
        return re
    }
    let arr = [root]
    while(arr.length > 0) {
        let tmp = []
        let values = []
        arr.forEach(node => {
            values.push(node.val)
            if(node.left) {
                tmp.push(node.left)
            }
            if(node.right) {
                tmp.push(node.right)
            }
        })
        arr = tmp;
        re.push(values)
    }
    return re
};
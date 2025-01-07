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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    let nodes = [root]
    const re = []
    while(nodes.length > 0) {
        let total = 0;
        let tmp = []
        nodes.forEach(item => {
            total += item.val;
            if(item.left) {
                tmp.push(item.left)
            }
            if(item.right) {
                tmp.push(item.right)
            }
        })
        re.push(total/nodes.length)
        nodes = tmp;
    }
    return re;

};
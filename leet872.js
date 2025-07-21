/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    // 本质是获取一个树的所有叶子节点，只需要遍历就可以了

    const getleafs = function(node) {
        const leafs = []

        const traverse = function(n) {
            if(!n) {
                return
            }
            const {val,left,right} = n
            if(!left && !right) {
                leafs.push(val)
            }
            traverse(left)
            traverse(right)
        }
        traverse(node)
        return leafs
    }
    const leafs1 = getleafs(root1)
    const leafs2 = getleafs(root2)
    const len = leafs1.length
    if(len !== leafs2.length) {
        return false
    }
    for(let i = 0; i < len; i++) {
        if(leafs1[i] !== leafs2[i]) {
            return false
        }
    }
    return true
};
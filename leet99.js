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
 * @return {void} Do not return anything, modify root in-place instead.
 */

// 先中序遍历，然后查找数组里顺序不符合的2个元素，但这样的话，空间复杂度是o(n)，怎么实现o(1)呢？

var recoverTree = function(root) {
    const errors = []    
    const traverse = function(node) {
        if(!node) {
            return
        }
        if(node.left && node.left.val > node.val) {
            errors.push(node)
        }
        if(node.right && node.right.val < node.val) {
            errors.push(node)
        }
        traverse(node.left)
        traverse(node.right)

    }
    const [n1, n2] = errors
    [n1.val, n2.val] = [n2.val, n1.val]
    
};
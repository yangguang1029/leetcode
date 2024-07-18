/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    const len = inorder.length;
    if(len === 0) {
        return null;
    }
    const rootvalue = postorder[len-1]
    const rootindex = inorder.indexOf(rootvalue)
    const leftinorder = inorder.slice(0, rootindex)
    const rightinorder = inorder.slice(rootindex+1)
    const leftpostorder = postorder.slice(0, rootindex)
    const rightpostorder = postorder.slice(rootindex, len-1)
    return new TreeNode(rootvalue, buildTree(leftinorder, leftpostorder), buildTree(rightinorder, rightpostorder))

};
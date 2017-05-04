/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function(root) {
    function getNodeSum(node) {
        if (!node) {
            return 0;
        }
        let sum = node._gysum = node.val + getNodeSum(node.left) + getNodeSum(node.right);
        return sum;
    }
    getNodeSum(root);
    let re = 0;

    function getTilt(node) {
        if (!node) {
            return;
        }
        let lv = 0;
        if (node.left) {
            lv = node.left._gysum;
        }
        let rv = 0;
        if (node.right) {
            rv = node.right._gysum;
        }
        re += Math.abs(lv - rv);
        getTilt(node.left);
        getTilt(node.right);
    }
    getTilt(root);
    return re;
};
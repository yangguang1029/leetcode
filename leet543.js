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
var diameterOfBinaryTree = function(root) {
    if(!root) {
        return 0;
    }
    let max = 0;
    function tmp(node) {
        if(!node) {
            return 0;
        }
        let lv = tmp(node.left);
        let rv = tmp(node.right);

        let value = 1 + lv + rv;
        if(value > max) {
            max = value;
        }

        return 1 + Math.max(lv, rv);
    }

    tmp(root);

    return max - 1 ;
};

var root = createTree([1,2,3,4,5, null, null, 6,7,8,9,null, null, null, null, 12, null, 10,11]);
console.log(diameterOfBinaryTree(root));
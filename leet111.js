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
var minDepth = function(root) {
    if (!root) {
        return 0;
    }
    let depth = 0;
    let arr = [root];
    let bEnd = false;
    while (!bEnd) {
        let tmp = [];
        arr.forEach((item) => {
            let left = item.left;
            let right = item.right;
            if (left) {
                tmp.push(left);
            }
            if (right) {
                tmp.push(right);
            }
            if (!left && !right) {
                bEnd = true;
                break;
            }
        });
        arr = tmp;
        depth += 1;
    }
    return depth;
};
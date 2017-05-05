/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    //开始使用中序遍历，发现对于1 2 3  3 null 2 null 不行，只能深度遍历了
    if (!root) {
        return true;
    }

    function isSymArray(tmp) {
        let len = tmp.length;
        let i = 0;
        while (i < len / 2) {
            let left = tmp[i];
            let right = tmp[len - 1 - i];
            if ((!left && !right) || (left && right && left.val === right.val)) {
                i += 1;
                continue;
            }
            return false;
        }
        return true;
    }

    let arr = [root];
    let bEnd = false;
    while (!bEnd) {
        let newarr = [];
        bEnd = true;
        arr.forEach((item) => {
            if (item) {
                newarr.push(item.left);
                newarr.push(item.right);
                if (bEnd && (item.left || item.right)) {
                    bEnd = false;
                }
            }
        });
        if (!isSymArray(newarr)) {
            return false;
        }
        arr = newarr;
    }
    return true;
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if (!root) {
        return [];
    }
    let arrs = [
        [root]
    ];

    let last;
    do {
        last = arrs[arrs.length - 1];
        let newarr = [];
        last.forEach((item) => {
            if (item.left) {
                newarr.push(item.left);
            }
            if (item.right) {
                newarr.push(item.right);
            }
        });
        if (newarr.length > 0) {
            arrs.push(newarr);
        }
        last = newarr;
    } while (last.length > 0)


    let re = [];
    arrs.forEach((item) => {
        local tmp = [];
        item.forEach((subitem) => {
            tmp.push(subitem.val);
        });
        re.unshift(tmp);
    });
    return re;
};
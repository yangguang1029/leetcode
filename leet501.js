/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {

    //中序遍历即可
    let current;
    let max = 0;
    let cc = 0;
    let re = [];

    function test(node) {
        if (!node) {
            return;
        }
        test(node.left);
        let v = node.val;
        if (typeof current === "undefined") {
            current = v;
            cc = 1;
        } else {
            if (v === current) {
                cc += 1;
            } else {
                if (cc > max) {
                    re = [v];
                    max = cc;
                } else if (cc === max) {
                    re.push(v);
                }
                cc = 1;
            }
        }
    }

    test(root);
    return re;
};

var root = createTree([10, 5, 15, 5, 7, 15, 20, null, null, 7, 7]);
printTree(root);
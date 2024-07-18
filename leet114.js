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

// 递归算法：
// 有几个注意事项
// 1.需要用数组来存储右子树节点
// 2.只要有左子树，就需要将左子树存到 right 里，然后将 left设为 null，否则可能遗漏
// 3.到叶子节点时，取出暂存节点后，需要继续递归

var flatten = function(root) {

    function modify(node, rightarr) {
        if(!node) {
            return;
        }
        if(node.left) {
            if(node.right) {
                rightarr.push(node.right)
            } 
            node.right = node.left;
            node.left = null;
            modify(node.right, rightarr)
        } else {
            if(node.right) {
                modify(node.right, rightarr)
            } else {
                const lastright = rightarr.pop();
                if(lastright) {
                    node.right = lastright
                    modify(node.right, rightarr)
                }
            }
        }
    }
    modify(root, [])
};

// 回溯算法
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

// 先：1245367
// 中：4251637
// 先序遍历第一个节点为根节点，在中序遍历中找到根节点，其左边的为左子树，右边的为右子树。中序遍历中根节点左边的节点为左子树最后一个节点，因此在先序中找到它，它之后的就是右子树

// 上面的思路里有个大错误，那就是认为中序遍历中，根节点左边的节点是左子树最后一个节点。实际上不一定，例如非完全树 1 2 3 4 null 5 6，他的先序是 124356 中序是 421536
// 实际上中序中根节点的位置，已经反应了左子树的节点数量了

var buildTree = function(preorder, inorder) {
    
    if(preorder.length === 0) {
        return null;
    }
    const rootvalue = preorder[0]
    
    const index = inorder.indexOf(rootvalue)
    const leftinorder = inorder.slice(0, index)
    const rightinorder = inorder.slice(index+1)
    const leftpreorder = preorder.slice(1, index)
    const rightpreorder = preorder.slice(index+1)


    const root = new TreeNode(rootvalue, buildTree(leftpreorder, leftinorder), buildTree(rightpreorder, rightinorder))
    return root;

};

const leftSize = inorder.indexOf(preorder[0]); // 左子树的大小
    const pre1 = preorder.slice(1, 1 + leftSize);
    const pre2 = preorder.slice(1 + leftSize);
    const in1 = inorder.slice(0, leftSize);
    const in2 = inorder.slice(1 + leftSize);
    const left = buildTree(pre1, in1);
    const right = buildTree(pre2, in2);
    return new TreeNode(preorder[0], left, right);
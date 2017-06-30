/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 
 * 
        1
       / \
      2   3
     /   / \
    4   5   6
       /
      7

 * 
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
//深度从右往左遍历，深度遍历就是利用队列
var findBottomLeftValue = function(root) {
    let arr = [root];
    let node;
    while (arr.length > 0) {
        node = arr.splice(0, 1)[0];
        if (node.right) {
            arr.push(node.right);
        }
        if (node.left) {
            arr.push(node.left);
        }
    }
    return node.val
};

//先序遍历，遍历时记录当前深度，第一次到达深度时，记录下节点
var findBottomLeftValue = function(root) {
    let depth = 1;
    let node = root;

    function order(n, d) {
        if (d > depth) {
            depth = d;
            node = n;
        }
        if (n.left) {
            order(n.left, d + 1);
        }
        if (n.right) {
            order(n.right, d + 1);
        }
    }
    order(root, 1);
    return node.val;
};

let root = createTree([2, 1, 3])
console.log(findBottomLeftValue(root))
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

var invertTree = function(root) {
    if(!root) {
    	return root;
    }
    var left = root.left;
    var right = root.right;
    root.left = invertTree(right);
    root.right = invertTree(left);
    return root;
};

var invertTree = function(root) {
    if(root) {
        [root.left, root.right] = [root.right, root.left]
        invertTree(root.left)
        invertTree(root.right)
    }
    return root
};

var invertTree = function(root) {
   function traverse(node) {
    if(!node){
        return;
    }
    [node.left, node.right] = [node.right, node.left]
    traverse(node.left)
    traverse(node.right)
   }
   traverse(root)
   return root
};
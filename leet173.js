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
 */
var BSTIterator = function(root) {

    const arr = []
    this.index = -1;
    function traverse(node){
        if(!node) {
            return
        }
        traverse(node.left)
        arr.push(node.val)
        traverse(node.right)
    }
    traverse(root)
    this.values = arr
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    this.index += 1
    return this.values[this.index]
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.index !== this.values.length - 1
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
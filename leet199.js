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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if(!root) {
        return []
    }

    let arr = [root]
    const re = [root.val]
    while(arr.length > 0) {
        let right = null;
        let tmp = []
        arr.forEach(item => {
            if(item.left) {
                tmp.push(item.left)
                right = item.left
            }
            if(item.right) {
                tmp.push(item.right)
                right = item.right
            }
        })
        arr = tmp;
        if(right) {
            re.push(right.val)
        }
        
    }
    return re;
};
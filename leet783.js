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
 * @return {number}
 */
var minDiffInBST = function(root) {

    // 最简单的方法就是中序遍历成为一个有序数组，然后遍历一次数组。
    // 但其实在遍历树的过程中，就可以得到数据，对任何一个节点，其差值就是自己和左子树最右叶子，或者右子树最左叶子的差值

    let ans = Number.MAX_SAFE_INTEGER

    const getleftleaf = function(node) {
        let n = node
        while(n.right) {
            n = n.right
        }
        return n
    }
    const getrightleaf = function(node) {
        let n = node
        while(n.left) {
            n = n.left
        }
        return n
    }

    const getdiff = function(node) {
        const {val,left,right} = node
        if(left) {
            const leftdiff = val - getleftleaf(left).val
            if(leftdiff < ans) {
                ans = leftdiff
            }
            getdiff(left)
        }
        if(right) {
            const rightdiff = getrightleaf(right).val - val
            if(rightdiff < ans) {
                ans = rightdiff
            }
            getdiff(right)
        }
    }

    getdiff(root)
    return ans
};

const root = createTree([27,null,34,null,58,50,null,44])
console.log(minDiffInBST(root));
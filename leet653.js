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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    // 第一反应是，首先将数使用中序遍历变成有序数组，然后使用左右指针方法查找。
    // 但是再仔细想想，其实根本没必要，对任何一个节点，用k-val后，得到的值和val比较，如果大于就去右子树找，小于就去左子树找。递归就可以了
    // 实际发现这个方案不行，因为可能是两个字数的节点，就不能递归了。所以必须还是最开始想的方案
    
    function traverse(node) {
        if(!node) {
            return []
        }
        const left = traverse(node.left)
        const right = traverse(node.right)
        return [...left, node.val, ...right]
    }
    const arr = traverse(root)
    let left = 0
    let right = arr.length-1
    while(left < right) {
        const sum = arr[left] + arr[right]
        if(sum === k) {
            break
        }
        if(sum < k) {
            left += 1
        }else {
            right -= 1
        }
    }
    return left !== right





    // const findvalue = function(node, v) {
    //     if(!node) {
    //         return false
    //     }
    //     const val = node.val
    //     if(val === v) {
    //         return true
    //     }
    //     return findvalue(node.left, v) || findvalue(node.right, v)

    // }
    
    // if(!root) {
    //     return false
    // }
    // const sub = k - root.val
    // let findsub = false
    // if(sub > k) {
    //     findsub = findvalue(root.right, sub)
    // }
    // if(sub < k) {
    //     findsub = findvalue(root.left, sub)
    // }
    // if(findsub) {
    //     return true
    // }
    // return findTarget(root.left, k) || findTarget(root.right, k)
};
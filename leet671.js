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
var findSecondMinimumValue = function(root) {

    // 似乎没什么规律，只能先遍历，存到set里，然后再排序获取
    // 看了答案，可以在遍历的过程中直接获取到。那个方法的时间复杂度和空间复杂度更低，实现方案如下

    let ans = -1
    function traverse(node) {
        if(!node) {
            return
        }
        const val = node.val
        if(ans !== -1 && val > ans) {
            return
        }
        if(val > root.val) {
            ans = val
        }
        traverse(node.left)
        traverse(node.right)
    }

    traverse(root)
    return ans

    // const s = new Set()
    // const traverse = function(node) {
    //     if(!node) {
    //         return
    //     }
    //     s.add(node.val)
    //     traverse(node.left)
    //     traverse(node.right)
    // }
    // traverse(root)
    // const arr = [...s]
    // if(arr.length < 2) {
    //     return -1
    // }
    // arr.sort((l,r)=>l-r)
    // return arr[1]
};
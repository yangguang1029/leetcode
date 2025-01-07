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
var findFrequentTreeSum = function(root) {
    let arr = []

    function traverse(node) {
        if(!node) {
            return 0
        }
        let tmp = node.val;
        if(node.left) {
            tmp += traverse(node.left)
        }
        if(node.right) {
            tmp += traverse(node.right)
        }
        arr.push(tmp)
    }

    traverse(root)
    const dic = {}
    arr.forEach(item => {
        if(dic[item]) {
            dic[item] = dic[item] + 1
        } else {
            dic[item] = 1
        }
    })
    const countarr = Object.values(dic)
    countarr.sort((left,right)=>right-left)
    const max = countarr[0]

    return Object.keys(dic).filter(item => dic[item] === max)

};
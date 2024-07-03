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
var countNodes1 = function(root) {
    let count = 0;
    function traverse(node) {
        if(!node) {
            return
        }
        count += 1;
        traverse(node.left)
        traverse(node.right)
    }
    traverse(root)
    return count;
};

var countNodes = function(root) {
    if(!root) {
        return 0;
    }
    // 首先，找到深度
    let depth = -1;
    let p = root;
    while(p) {
        depth += 1;
        p = p.left;
    }
    if(depth === 0) {
        return 1;
    }
    // 用位运算
    function exists(num) {
        let n = num;
        let p = root;
        let d = depth-1;
        while(d >= 0) {
            if(n & 1<<d ) {
                p = p.right
            }else {
                p = p.left
            }
            d-=1
        }
        return !!p;
    }

    // 最后一层是从[0, 2^depth-1]，以此检验，如果不存在则除以 2
    let max = Math.pow(2, depth)
    let min = 0
    let number = (max+min)/2
    while(number !== min) {
        if(exists(number)) {
            min = number;
        } else {
            max = number
        }
        number = Math.floor((max+min)/2)
    }
    return Math.pow(2, depth) - 1 + Math.floor(number)+1
    
};

var node = createTree([1,2,3,4,5,6])
console.log(countNodes(node))
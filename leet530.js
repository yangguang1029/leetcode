/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    let arr = [];
    function middleOrder(node, re) {
        if(!node) {
            return;
        }
        middleOrder(node.left, re);
        re.push(node.val);
        middleOrder(node.right, re);
    }

    middleOrder(root, arr);

    let min = Number.MAX_SAFE_INTEGER;
    let len = arr.length;
    arr.forEach((item, index, array)=>{
        if(index < len-1) {
            let v = array[index+1]-array[index];
            if(v < min) {
                min = v;
            }
        }
    })
    return min;
};

var getMinimumDifference = function(root) {
    let left = root.left
    let right = root.right
    if(!left && !right) {
        return Number.MAX_SAFE_INTEGER
    }
    if(!left) {
        return Math.min(right.val - root.val, getMinimumDifference(right))
    }
    if(!right) {
        return Math.min(root.val - left.val,  getMinimumDifference(left))
    }
    return Math.min(root.val - left.val, right.val - root.val, getMinimumDifference(left), getMinimumDifference(right))
};


var root = createTree([236,104,701,null,227,null,911])
console.log(getMinimumDifference(root));
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


var root = createTree([5,3,99,null,4.8,5.1])
console.log(getMinimumDifference(root));
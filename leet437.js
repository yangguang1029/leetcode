/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
    
    if(!root) {
    	return 0;
    }
    var arr = [root];
    root.nums = [root.val];
    var len = arr.length;
    var count = root.val === sum ? 1 : 0;
    while(len > 0) {
    	var tmp = [];
    	for(var i = 0; i < len; i++) {
    		var node = arr[i];
    		var nums = node.nums;
    		var nlen = nums.length;
    		var left = node.left;
    		var right = node.right;
    		if(left) {
    			var value = left.val;
    			var lnums = left.nums = [];
    			for(var j = 0; j < nlen; j++) {
    				var lnum = nums[j] + value;
    				if(lnum === sum) {
    					count += 1;
    				}
    				lnums.push(lnum);
    			}
    			if(value === sum) {
    				count += 1;
    			}
    			lnums.push(value);
    			tmp.push(left);
    		}
    		if(right) {
    			var value = right.val;
    			var rnums = right.nums = [];
    			for(var j = 0; j < nlen; j++) {
    				var rnum = nums[j] + value;
    				if(rnum === sum) {
    					count += 1;
    				}
    				rnums.push(rnum);
    			}
    			if(value === sum) {
    				count += 1;
    			}
    			rnums.push(value);
    			tmp.push(right);
    		}

    	}
    	arr = tmp;
    	len = arr.length;
    }

    return count;
};

var root = createTree([10,5,-3,3,2,null,11,3,-2,null,1]);
printTree(root)
console.log(pathSum(root, 8))

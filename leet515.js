/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
	if(!root) {
		return [];
	}
    var re = [];
    var arr = [root];
    var len = arr.length;
    while(len > 0) {
    	var max = Number.MIN_SAFE_INTEGER;
    	var tmp = [];
    	for(var i = 0; i < len; i++) {
    		var node = arr[i];
    		if(node.val > max) {
    			max = node.val;
    		}
    		if(node.left) {
    			tmp.push(node.left);
    		}
    		if(node.right) {
    			tmp.push(node.right);
    		}
    	}
    	arr = tmp;
    	len = arr.length;
    	re.push(max);
    }

    return re;
};

var root = createTree([0,-1]);
var fuck = largestValues(root);
printArr(fuck);
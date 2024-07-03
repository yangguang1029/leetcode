

 
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth1 = function(root) {
    var depth = 0;
    if(!root) {
    	return depth;
    }
    var arr = [root];
    var len = arr.length;
    while(len > 0) {
    	depth += 1;
    	var newarr = [];
    	for(var i = 0;  i < len; i++) {
    		var node = arr[i];
    		if(node.left) {
    			newarr.push(node.left);
    		}
    		if(node.right) {
    			newarr.push(node.right);
    		}
    	}
    	arr = newarr;
    	len = arr.length;
    }
    
    return depth;
};

var maxDepth = function(root) {
	function getDepth(node) {
		if(!node) {
			return 0;
		}
		return Math.max(getDepth(node.left), getDepth(node.right)) + 1
	}
	return getDepth(root)
};


var maxDepth = function(root) {
	let depth = 0;
	let max = 0;
	function traverse(node) {
		if(!node) {
			return;
		}
		depth += 1
		if(depth > max) {
			max = depth
		}
		traverse(node.left)
		traverse(node.right)
		depth -= 1
	}

	traverse(root)
	return max;
};
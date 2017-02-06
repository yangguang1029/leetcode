

 
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
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
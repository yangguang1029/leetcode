/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    function isSame(t1, t2) {
       if(!t1 && !t2) {
           return true;
       }
       if(t1 && t2) {
           return t1.val === t2.val && isSame(t1.left, t2.left) && isSame(t1.right, t2.right);
       }
       return false;
    }

    function isSubTreeInternel(r1, r2) {
        if(isSame(r1, r2)) {
            return true;
        }
        if(r1) {
             return  (isSubTreeInternel(r1.left, r2) || isSubTreeInternel(r1.right, r2));
        }
        return false;
    }

    return isSubTreeInternel(s, t);

};

var fuck = createTree([3,4,5,1,2,null, null, 0]);
var me = createTree([4,1,2]);

console.log(isSubtree(fuck, me));
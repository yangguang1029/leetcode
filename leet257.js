/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if(!root) {
        return [];
    }
    let arr = [[root]];
    let bEnd = false;
    while(!bEnd) {
        bEnd = true;
        let tmp = [];
        arr.forEach((item)=>{
            let last = item[item.length - 1];
            let left = last.left;
            let right = last.right;
            if(left) {
                bEnd = false;
                tmp.push(item.concat([left]));
            }
            if(right) {
                bEnd = false;
                tmp.push(item.concat([right]));
            }
            if(!left && !right) {
                tmp.push(item);
            }
        });
       if(!bEnd) {
           arr = tmp;
       }
    }
    return arr.map((item)=>{
        return item.map((subitem)=>{
            return subitem.val;
        }).join("->");
    });
};

var fuck = createTree([1,2,3,null, 5]);
var re = binaryTreePaths(fuck);
re.forEach((item)=>{
    console.log(item);
})
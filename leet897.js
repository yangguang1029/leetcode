var increasingBST = function(root) {
    if(!root || !root.left) {
        return root
    }
    function iter(node, array) {
        if(node.left) {
            iter(node.left, array)
        }
        array.push(node.val)
        if(node.right) {
            iter(node.right, array)
        }
    }
    let arr = []
    iter(root, arr)
    let re = new TreeNode(arr[0])
    let tmp = re
    arr.slice(1).forEach((item, index) => { 
        tmp.right = new TreeNode(item)
        tmp = tmp.right
         
    })
    return re
    
};

printTree(increasingBST(createTree([5,3,6,2,4,null, 8, 1, null, null, null, 7, 9])))
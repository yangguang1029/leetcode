/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */


// var isSymmetric = function(root) {
//     // 中序遍历，然后判断是否回文即可
//     const arr = []
//     function traverse(node) {
//         if(!node) {
//             return;
//         }
//         traverse(node.left)
//         arr.push(node.val)
//         traverse(node.right)
//     }
//     traverse(root)

//     function isSymArray(arr) {
//         let i = 0;
//         while(i < arr.length / 2) {
//             if(arr[i] !== arr[arr.length-1-i]) {
//                 break;
//             }
//             i+=1
//         }
//         return i >= arr.length / 2
//     }

//     return isSymArray(arr)

// }



var isSymmetric = function(root) {
    //开始使用中序遍历，发现对于1 2 3  3 null 2 null 不行，只能深度遍历了
    if (!root) {
        return true;
    }

    function isSymArray(tmp) {
        let len = tmp.length;
        let i = 0;
        while (i < len / 2) {
            let left = tmp[i];
            let right = tmp[len - 1 - i];
            if ((!left && !right) || (left && right && left.val === right.val)) {
                i += 1;
                continue;
            }
            return false;
        }
        return true;
    }

    let arr = [root];
    let bEnd = false;
    while (!bEnd) {
        let newarr = [];
        bEnd = true;
        arr.forEach((item) => {
            if (item) {
                newarr.push(item.left);
                newarr.push(item.right);
                if (bEnd && (item.left || item.right)) {
                    bEnd = false;
                }
            }
        });
        if (!isSymArray(newarr)) {
            return false;
        }
        arr = newarr;
    }
    return true;
};

var isSymmetric = function(root) {
    // 用一个数组暂存每一层的节点，然后检测是否对称

    function isArraySy(arr) {
        const len = arr.length;
        let i = 0
        while(i < arr.length / 2) {
            const left = arr[i]
            const right = arr[len-1-i]
            if(left && !right) {
                break;
            }
            if(right && !left) {
                break;
            }
            if(left && right && left.val !== right.val) {
                break;
            }
            i += 1;
        }
        return i === arr.length/2
    }

    let nodes = [root]
    while(nodes.length > 0) {
        let newnodes = [];
        let isend = true;
        nodes.forEach(node=>{
            if(node) {
                isend = false;
                newnodes.push(node.left)
                newnodes.push(node.right)
            }else {
                newnodes.push(null)
                newnodes.push(null)
            }
        })
        if(isend) {
            nodes = []
        }else {
            if(!isArraySy(newnodes)) {
                return false;
            }
            nodes = newnodes

        }
        
        
    }
    return true
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {

    // 先序遍历，生成数组
    const prev = function(node) {
        if(!node) {
            return []
        }
        return [node.val].concat(prev(node.left)).concat(prev(node.right))
    }
    const mid = function(node) {
        if(!node) {
            return []
        }
        return mid(node.left).concat([node.val]).concat(mid(node.right))
    }

    const prevarr = prev(root)
    const midarr = mid(root)
    
    return `${prevarr.join(',')}|${midarr.join(',')}`
    
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {

    const deser = function(prevarr, midarr) {
        if(prevarr.length === 0) {
            return null
        }
        const root = new TreeNode(parseInt(prevarr[0]))
        const rootindex = midarr.indexOf(prevarr[0])
        root.left = deser(prevarr.slice(1, rootindex+1), midarr.slice(0, rootindex))
        root.right = deser(prevarr.slice( rootindex+1), midarr.slice(rootindex+1))
        return root
    }
   
    const [prevstr,midstr] = data.split('|')
    if(prevstr === '') {
        return null
    }
    return deser(prevstr.split(','), midstr.split(','))
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
let data = [41,37,44,24,39,42,48,1,35,38,40,null,43,46,49,0,2,30,36,null,null,null,null,null,null,45,47,null,null,null,null,null,4,29,32,null,null,null,null,null,null,3,9,26,null,31,34,null,null,7,11,25,27,null,null,33,null,6,8,10,16,null,null,null,28,null,null,5,null,null,null,null,null,15,19,null,null,null,null,12,null,18,20,null,13,17,null,null,22,null,14,null,null,21,23]

data = [2,1,3]


const t = createTree(data)
printTree(t)

const haha = serialize(t)
console.log(haha);
const n = deserialize(haha);
printTree(n)
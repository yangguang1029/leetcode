/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder1 = function(root) {
    let arr = []
    if(!root) {
      return arr
    }
    arr.push(root.val)
    let children = root.children
    children && children.forEach(child => {
      arr = arr.concat(preorder(child))
    })
    return arr
};

var preorder = function(root) {
  if(!root) {
    return []
  }
  let arr = [root]
  let re = []
  while(arr.length > 0) {
    let node = arr.splice(0,1)[0]
    re.push(node.val)
    let children = node.children
    if(children) {
      arr = children.concat(arr)
    }
  }
  return re
};

 function Node(val,children) {
      this.val = val;
      this.children = children;
};

function test() {
  let node1 = new Node(1, null)
  let node2 = new Node(2, null)
  let node3 = new Node(3, null)
  let node4 = new Node(4, null)
  let node5 = new Node(5, null)
  let node6 = new Node(6, null)
  node3.children = [node5, node6]
  node1.children = [node3, node2, node4]
  
  console.log(preorder(node1))
}

test()
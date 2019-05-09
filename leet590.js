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
var postorder = function(root) {
  if(!root) {
    return []
  }
  let nodes = [root]
  let arr = []
  while(nodes.length > 0) {
    let node = nodes[0]
    if(node.ordered || !node.children) {
      arr.push(node.val)
      nodes.splice(0,1)
    } else {
      node.ordered = true
      nodes = node.children.concat(nodes)
    }
  }
  return arr
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
  
  console.log(postorder(node1))
}

test()
/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */
/**
 * @param {number[][]} grid
 * @return {Node}
 */
 var construct = function(grid) {

    function getGrid(rowstart, rowend, colstart, colend) {
      let re = []
      for(let i = rowstart; i < rowend; i++) {
        re.push(grid[i].slice(colstart, colend))
      }
      return re
    }

    let node = new Node()
    let len = grid.length
    let val = grid[0][0]
    let isleaf = true
    for(let i = 0; i < grid.length; i++) {
      let row = grid[i]
      for(let j = 0; j < row.length; j++) {
        if(row[j] !== val) {
          isleaf = false
          break
        }
      }
      if(!isleaf) {
        break
      }
    }
    if(isleaf) {
      node.val = val === 1 ? true : false
    } else {
      node.topLeft = new construct(getGrid(0, len/2, 0, len/2))
      node.topRight = new construct(getGrid(0, len/2, len/2, len))
      node.bottomLeft = new construct(getGrid(len/2, len, 0, len/2))
      node.bottomRight = new construct(getGrid(len/2, len, len/2, len))
    }
    node.isLeaf = isleaf
    return node
};
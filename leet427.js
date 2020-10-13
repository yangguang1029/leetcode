/*
 * @lc app=leetcode.cn id=427 lang=javascript
 *
 * [427] 建立四叉树
 */

  // Definition for a QuadTree node.
  function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
     this.val = val;
     this.isLeaf = isLeaf;
     this.topLeft = topLeft;
     this.topRight = topRight;
     this.bottomLeft = bottomLeft;
     this.bottomRight = bottomRight;
  };
 
/**
 * @param {number[][]} grid
 * @return {Node}
 */
 var construct = function(grid) {
  let isLeaf = true;
  let length = grid.length
  let v = grid[0][0]
  if(length > 1) {
      isLeaf = grid.every(row => row.every(item => item === v))
  }
  if(isLeaf) {
      return new Node(v, true, null, null, null, null)
  } 
  return new Node(false, false, 
      construct(grid.slice(0, length/2).map(item => item.slice(0, length / 2))),
      construct(grid.slice(0, length/2).map(item => item.slice(length / 2))),
      construct(grid.slice(length/2).map(item => item.slice(0, length / 2))),
      construct(grid.slice(length/2).map(item => item.slice(length / 2))))
};

construct([[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0]])
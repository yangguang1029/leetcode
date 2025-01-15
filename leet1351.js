/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives1 = function(grid) {
    let c = 0
    grid.forEach(row=>{
        let index = 0;
        while(index < row.length && row[index] >= 0) {
            index += 1
        }
        c += (row.length - index)
    })
    return c
};

var countNegatives = function(grid) {
    let rowcount = grid.length
    let colcount = grid[0].length
    let rowindex = 0
    let colindex = colcount - 1
    
    let c = 0
    while(rowindex < rowcount && colindex >= 0 ) {
        if(colindex < colcount - 1) {
            c += (colcount - colindex - 1)
        }
        let item = grid[rowindex][colindex]
        while(item < 0) {
            colindex -= 1
            c+= 1
            if(colindex >=0) {
                item = grid[rowindex][colindex]
            }else {
                break
            }
        }
        rowindex += 1
    }
    if(colindex < 0) {
        // 剩余的行全部是负数
        c += (rowcount - rowindex) * colcount
    }
    return c
};

let grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
grid = [[3,2],[-3,-3],[-3,-3],[-3,-3]]
console.log(countNegatives(grid));
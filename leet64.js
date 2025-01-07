/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {

    let result = []
    for(let i = 0; i < grid.length; i++) {
        result[i] = []
    }
    let col = grid[0].length

    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < col; j++) {
            const item = grid[i][j]
            if(i === 0) {
                if(j === 0) {
                    result[i][j] = item
                }else {
                    result[i][j] = result[i][j-1]+item
                }
            }else {
                if(j === 0) {
                    result[i][j] = result[i-1][j] + item
                }else {
                    result[i][j] = Math.min(result[i-1][j], result[i][j-1]) + item
                }
            }
        }
    }
    return result[grid.length-1][col-1]
};
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {

    const result = []
    const rc = obstacleGrid.length
    const cc = obstacleGrid[0].length
    for(let i = 0; i < rc; i++) {
        result[i] = []
    }

    for(let i = 0; i < rc; i++) {
        for(let j = 0; j < cc; j++) {
            const item = obstacleGrid[i][j]
            if(item === 1) { // 障碍物
                result[i][j] = 0
            }else {
                if(i === 0) {
                    if(j === 0) {
                        result[i][j] = item === 1 ? 0 : 1
                    }else {
                        result[i][j] = result[i][j-1]
                    }
                }else {
                    if(j === 0) {
                        result[i][j] = result[i-1][j]
                    }else {
                        result[i][j] = result[i-1][j] + result[i][j-1]
                    }
                }
            }
        }
    }
    return result[rc-1][cc-1]
    
};
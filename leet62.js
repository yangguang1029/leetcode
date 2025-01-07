/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {

    let arr = [[1]]

    for(let i = 0; i < m; i++) {
        const tmp = []
        for(let j = 0; j < n; j++) {
            if(i === 0) {
                tmp[j] = 1
            }else {
                if(j > 0) {
                    tmp[j] = arr[i-1][j] + tmp[j-1]
                } else {
                    tmp[j] = 1
                }
                
            }
        }
        arr[i] = tmp
    }

    return arr[m-1][n-1]
};
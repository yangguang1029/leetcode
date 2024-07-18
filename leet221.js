/**
 * @param {character[][]} matrix
 * @return {number}
 */

// 想到了动态规划，但是没想到二维动态规划，而是一直想一维动态规划，导致没有思路

var maximalSquare = function(matrix) {

    const dp = []
    let max = 0
    for(let i = 0; i < matrix.length; i++) {
        const row = []
        const rowvalue = matrix[i]
        for(let j = 0; j< rowvalue.length; j++) {
            let value = 0;
            const item = parseInt(rowvalue[j])
            if(i === 0 || j === 0 ||  item === 0) {
                value = item
            }else {
                value = Math.min(row[j-1], dp[i-1][j], dp[i-1][j-1]) + 1
            }
            if(value > max) {
                max = value
            }
            row[j] = value
        }
        dp[i] = row
    }
    return max*max;
}

const matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
console.log(maximalSquare(matrix));
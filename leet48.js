/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    // 如果每一行都存起来，然后转换，需要使用 n^2 的空间，和新建一个没区别了
    // 按照  leet54 的思路，每次转换一圈，每圈转换 4 次，则需要 n 的空间
    const len = matrix.length;

    function rotateCircle(n) {
        // 第 n 圈
        // 左上角 [n,n]，右上角[len-1-n, n]，左下角[n, len-1-n]，右下角[len-1-n, len-1-n]
        let tmp;
        for(let index = n; index < len-1-n; index++) {
            tmp = matrix[n][index] // 暂存
            matrix[n][index] = matrix[len-1-index][n]
            matrix[len-1-index][n] = matrix[len-1-n][len-1-index]
            matrix[len-1-n][len-1-index] = matrix[index][len-1-n]
            matrix[index][len-1-n] = tmp
        }
    }
    for(let c = 0; c < Math.floor(len/2) ; c++) {
        rotateCircle(c)
    }

};

const matrix = [[1,2,3],[4,5,6],[7,8,9]]
rotate(matrix)
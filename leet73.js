/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {

    // 按行遍历是不可缺少的，用 set 记录下需要修改的列，边遍历边修改
    const zcols = new Set()
    matrix.forEach((row, rowindex) => {
        let haszero = false;
        row.forEach((num, colindex)=>{
            if(num === 0) {
                haszero = true;
            }
            if(zcols.has(colindex)) {
                // 如果 colindex 已经在 set里，就需要设置成 0
                row[colindex] = 0
                return;
            }
            if(num === 0) {
                zcols.add(colindex)
                // 把之前行的设为 0
                for(let r = 0; r < rowindex; r++) {
                    matrix[r][colindex] = 0
                }
            }
        })
        if(haszero) {// 整行替换成 0
            row.forEach((num, index) => row[index] = 0)
        }
    })

};

const matrix = [[0,0,0,5],[4,3,1,4],[0,1,1,4],[1,2,1,3],[0,0,1,1]]
setZeroes(matrix)
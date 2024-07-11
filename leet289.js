/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    // 想要改变，又不能影响之后的，就只能记录下需要改变的 index，然后再整体做一次变化
    // 用这个算法，重复取了很多次 board 数据，所以肯定有更简单的方法，这是最笨的

    // 看了题解，我自己想太复杂了，想要原地修改又不占用额外空间，用额外状态即可，取一个位置周围的 8 个状态这个是无法避免的
    const mindexs = []
    const rowcount = board.length;
    const colcount = board[0].length;

    function getCount(row, col) {
        // 计算活细胞数量
        const n = board[row][col]
        let count = 0;
        for(let i = row-1; i <= row+1; i++) {
            for(let j = col-1; j <= col+1; j++) {
                if(i >=0 && i < rowcount && j >=0 && j < colcount && !(i===row && j===col) && board[i][j] === 1) {
                    count += 1
                }
            }
        }
        return count;
    }

    board.forEach((row, rowindex) => {
        row.forEach((num, colindex)=>{
            const c = getCount(rowindex, colindex);
            if((num === 0 && c === 3) || (num === 1 && (c<2 || c > 3) )) {
                mindexs.push(rowindex * colcount + colindex)
            }
        })

    })
    // 修改
    board.forEach((row, rowindex) => {
        row.forEach((num, colindex)=>{
            const index = rowindex * colcount + colindex
            if(mindexs.indexOf(index) >= 0) {
                row[colindex] = 1-num
            }
        })
    })

};

var gameOfLife = function(board) {


}
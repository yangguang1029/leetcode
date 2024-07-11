/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {

    function isValid(nums) {
        // 传入 9 个数字，判断是否合法，将这 9 个数字排序，然后对比即可
        const arr = nums.filter(item => item !== '.')
        return new Set(arr).size === arr.length
    }
    // 检测每行
    let re = board.every((row) => isValid(row))
    if(!re) {
        return re
    }
    // 生成每列，检测每列
    const cols = []
    for(let i = 0; i < 9; i++) {
        cols.push(board.map((row, index) => board[index][i]))
    }
    re = re && cols.every((col) => isValid(col))
    if(!re) {
        return re
    }

    // 生成每个单元格，检查单元格
    const grids = []
    for(let row = 0; row < 9; row += 3) {
        for(let col = 0; col < 9; col +=3) {
            grids.push([board[row][col], board[row+1][col],board[row+2][col],board[row][col+1],board[row+1][col+1],board[row+2][col+1],board[row][col+2],board[row+1][col+2],board[row+2][col+2]])
        }
    }
    return re && grids.every((grid) => isValid(grid))

};

const board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
console.log(isValidSudoku(board));
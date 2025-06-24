/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */



// 虽然知道肯定是用回溯，但开始写的时候，校验数独是否合法写的效率非常低，导致回溯效率非常慢。
// 因此主要是需要用一个更高效的办法判断当前格子可以输入的数字可能性
// 首先遍历整个数独，当某个位置没有数字时，记录下来用于回溯
// 当某个位置有数字时，则填充规则数组。规则数组有3个，行，列，格。(r,c)位置有数字n，意味着第r行都不能再有数字n了  row[r][n-1]=false 列同理
// 主要是格子，也可以是一个9*9的数组，其中index是int(r/3)*3+int(c/3)

var solveSudoku = function(board) {
    const len = board.length

    function makeArray(){
        const re = []
        for(let i = 0; i < len; i++) {
            const row = new Array(len).fill(true)
            re.push(row)
        }
        return re
    }

    
    const rlegal = makeArray()
    const clegal = makeArray()
    const glegal = makeArray()
    const blanks = []
    let valid = false
    board.forEach((row, ri) => {
        row.forEach((item, ci) => {
            if(item === '.') {
                blanks.push({
                    ri, ci
                })
            }else {
                const n = parseInt(item)
                rlegal[ri][n-1] = false
                clegal[ci][n-1] = false
                glegal[Math.floor(ri/3)*3+Math.floor(ci/3)][n-1] = false
            }
        })
    })

    const backtracking = function(paths){
        const index = paths.length
        if(index === blanks.length) {
            valid = true
            return
        }
        const blank = blanks[index]
        const {ri,ci} = blank
        for(let n = 0; n < 9; n++) {
            if(!valid && rlegal[ri][n] && clegal[ci][n] && glegal[Math.floor(ri/3)*3+Math.floor(ci/3)][n]) {
                paths.push(blank)
                rlegal[ri][n] = false
                clegal[ci][n] = false
                glegal[Math.floor(ri/3)*3+Math.floor(ci/3)][n] = false
                board[ri][ci] = `${n+1}`
                backtracking(paths)
                rlegal[ri][n] = true
                clegal[ci][n] = true
                glegal[Math.floor(ri/3)*3+Math.floor(ci/3)][n] = true
                paths.pop()
                
            }
        }
       
    }
    backtracking([])
};

// let board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]

let board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
solveSudoku(board)
console.log(board);
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {

    // 回溯法，找到word[0]所在的row, col，然后开始回溯
    let isexist = false
    const rowc = board.length
    const colc = board[0].length

    function inner(row, col, paths) { // paths存储已经找过的路径，每个path为row*10+col（因为题目中row,col都是个位数）
        if(paths.length === word.length) {
            isexist = true
            return
        }
        const s = word.charAt(paths.length) // 将要找的字母
        if(row > 0 && board[row-1][col] === s) {
            const p = 10*(row-1)+col
            if(paths.indexOf(p) < 0) {
                inner(row-1, col, [...paths, p])
            }
        }
        if(col > 0 && board[row][col-1] === s) {
            const p = 10*(row)+col-1
            if(paths.indexOf(p) < 0) {
                inner(row, col-1, [...paths, p])
            }
        }
        if(row < rowc-1 && board[row+1][col] === s) {
            const p = 10*(row+1)+col
            if(paths.indexOf(p) < 0) {
                inner(row+1, col, [...paths, p])
            }
        }
        if(col < colc-1 && board[row][col+1] === s) {
            const p = 10*(row)+col+1
            if(paths.indexOf(p) < 0) {
                inner(row, col+1, [...paths, p])
            }
        }
    }
    const firsts = word.charAt(0)
    for(let r = 0; r < rowc; r++) {
        for(let c = 0; c < colc; c++) {
            if(board[r][c] === firsts) {
                inner(r,c,[10*r+c])
            }
        }
    }
    return isexist
};

let board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
// board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
let word = "ABCCED"
// word = "ABCB"

console.log(exist(board, word));
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */


// 从边缘开始，将所有从边缘联通的 O 变成Y，然后再遍历一次，把所有 O 变成 X，所有Y变回 O
var solve = function(board) {

    const rowlen = board.length;
    const collen = board[0].length;

    for(let i = 0; i < rowlen; i++) {
        for(let j = 0; j < collen; j++) {
            if(i === 0 || i === rowlen-1 || j === 0 || j === collen-1) {
                traverse(i, j)
            }
        }
    }

    function traverse(row, col) {
        if(row < 0 || row >= rowlen || col < 0 || col >= collen) {
            return;
        }
        const n = board[row][col]
        if(n === 'Y' || n === 'X') {
            return;
        }
        board[row][col] = 'Y'
        traverse(row+1, col)
        traverse(row-1, col)
        traverse(row, col+1)
        traverse(row, col-1)
    }

    for(let i = 0; i < rowlen; i++) {
        for(let j = 0; j < collen; j++) {
            const n = board[i][j]
            if(n === 'Y') {
                board[i][j] = 'O'
            }
            if(n === 'O') {
                board[i][j] = 'X'
            }
        }
    }

};
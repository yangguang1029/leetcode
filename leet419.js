/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    let re = 0;
    let row = board.length;
    let col = board[0].length;
    for (let r = 0; r < row; r++) {
        let sub = board[r];
        for (let c = 0; c < col; c++) {
            let item = sub[c];
            if (item === ".") {
                continue;
            }
            if (r > 0 && board[r - 1][c] === "X") {
                continue;
            }
            if (c > 0 && sub[c - 1] === "X") {
                continue;
            }
            re += 1;
        }
    }
    return re;
};
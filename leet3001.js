/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {number} d
 * @param {number} e
 * @param {number} f
 * @return {number}
 */
var minMovesToCaptureTheQueen = function(a, b, c, d, e, f) {
    const cells = []
    let count = 1
    for(let i = 0; i < 8; i++) {
        cells[i] = new Array(8).fill(0)
    }
    while(count === 64 || cells[a-1][b-1] || cells[c-1][d-1]) {
        
    }

    
};
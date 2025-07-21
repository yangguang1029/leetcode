/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function(A, m, B, n) {

    // 从后往前就可以了
    let aindex = m-1
    let bindex = n-1
    let index = n+m-1
    while(bindex >= 0 && aindex >= 0) {
        if(A[aindex] > B[bindex]) {
            A[index] = A[aindex]
            aindex -= 1
        } else {
            A[index] = B[bindex]
            bindex -= 1
        }
        index -= 1
    }
    while(bindex >= 0) {
        A[bindex] = B[bindex]
        bindex -= 1
    }
};
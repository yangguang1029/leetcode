/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const re = []
    function backtracking(arr, leftcount, rightcount) {
        if(arr.length === 2*n){
            re.push(arr.join(''))
            return
        }
        if(leftcount < n){
            arr.push('(')
            backtracking(arr, leftcount+1, rightcount)
            arr.pop()
        }
        if(rightcount < leftcount){
            arr.push(')')
            backtracking(arr, leftcount, rightcount+1)
            arr.pop()
        }
    }
    backtracking([],0,0)
    return re
};
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {


    function findInArray(arr, num, isExact) {
        let left = 0;
        let right = arr.length - 1;
        while(left < right) {
            const mid = Math.floor((left+right)/2)
            const n = arr[mid]
            if(n === num) {
                return mid
            }else if(n < num) {
                left = mid+1
            }else {
                right = mid
            }
        }
        const n = arr[left]
        if(n === num) {
            return left
        }
        return isExact ? -1 : num >= n ? left : left-1
    }

    const firstcol = matrix.map(item => item[0])
    const rowindex = findInArray(firstcol, target, false)
    const colindex = findInArray(matrix[rowindex], target, true)
    return colindex !== -1

};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3));
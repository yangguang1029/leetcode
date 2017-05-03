/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    let originRow = nums.length;
    let originCol = nums[0].length;
    if(originRow * originCol !== r * c) {
        return nums;
    }
    let row = 0;
    let newcol = 0;
    let newarr = [];
    let re = [];
    while(row < originRow) {
        let col = 0;
        let arr = nums[row];
        while(col < originCol) {
            let num = arr[col];
            newarr.push(num);
             newcol += 1;
            if(newcol === c) {
                re.push(newarr);
               newarr = [];
               newcol = 0;
            }
            col += 1;
        }
        row += 1;
    }
    
    return re;
};

matrixReshape([[1,2], [3,4]], 1, 4)
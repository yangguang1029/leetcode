/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let nums = []
    operations.forEach(item => {
        let len = nums.length
        if(item === '+') {
            nums.push(nums[len-1]+nums[len-2])
        }else if (item === 'D') {
            nums.push(nums[len-1]*2)
        }else if (item === 'C') {
            nums.pop()
        }else {
            // 数字
            nums.push(parseInt(item))
        }
    })
    return nums.reduce((prev, cur)=>prev+cur, 0)
    
};
let operations = ["5","2","C","D","+"]
console.log(calPoints(operations));
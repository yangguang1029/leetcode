/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    return nums.reduce((prev, current)=>{
       
        if((10<=current && current<100) || (1000<=current && current <10000) || (100000===current)) {
            return prev+1
        }
        return prev
    }, 0)
};

console.log(findNumbers([12,345,2,6,7896]));
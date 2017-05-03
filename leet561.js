/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort((left, right)=>{
        return left-right;
    });
    let re = 0;
    nums.forEach((item,index, array)=>{
        if(index % 2 === 0){
            re += item;
        }
    })
    return re;
};

console.log(arrayPairSum([1,4,2,3]));
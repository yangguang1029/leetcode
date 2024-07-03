/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */



var twoSum = function(nums, target) {
    // 先转成字典，然后遍历
    const dic = {}
    nums.forEach((item, index)=>{
        if(dic[item] !== undefined) {
            dic[`${item}_1`] = index
        }else {
            dic[item] = index
        } 
    })
    for(let i = 0; i < nums.length; i++) {
        const sub = target-nums[i]
        const n = nums[i]
        let v = dic[sub]
        if(sub === n) {
            v = dic[`${n}_1`]
        }
        if(v !== undefined && v !== i) {
            return [dic[nums[i]], v]
        }
    }
    return []
};

console.log(twoSum([3,3], 6))
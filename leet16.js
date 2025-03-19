/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 如果直接遍历所有结果，时间复杂度肯定过高。所以先排序
// 之后的逻辑需要经过思考。取中间值和target对比，如果还比较小，就尝试往右移动。否则往左移动
var threeSumClosest = function(nums, target) {
    nums.sort((a,b)=>a-b)
    let left = 0
    let right = nums.length-1
    let returnval = Number.MAX_SAFE_INTEGER
    while(left+1<right){
        let index = left+1
        while(index < right){
            let total = nums[left]+nums[index]+nums[right]
            if(total === target) {
                return total
            }
            if(Math.abs(total-target)<Math.abs(returnval-target)){
                returnval = total
            }
            index +=1
        }
        let midindex = Math.floor((left+right)/2)
        if(nums[left]+nums[midindex]+nums[right]<target){
            left++
            
        }else{
            right--
        }
        
    }
    return returnval
    
};

console.log(threeSumClosest([2,3,8,9,10],16))
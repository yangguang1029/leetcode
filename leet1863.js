/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {

    // 回溯，本质就想象成一棵树，穷尽它的所有分支。
    let ans = 0
    const len = nums.length

    function track( currentindex, prev) {
        if(currentindex >= len) {
            return
        }
        let index = currentindex+1
        while(index <= len-1) {
            const newprev = prev ^ nums[index]
            ans += newprev
            track(index, newprev)
            index += 1
        }
    }
    for(let i = 0; i < len; i++) {
        ans += nums[i]
        track(i, nums[i])
    }
    return ans
};

console.log(subsetXORSum([1,3]));
console.log(subsetXORSum([5,1,6]));
console.log(subsetXORSum([3,4,5,6,7,8]));

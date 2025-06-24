/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    // 首先用回溯法遍历，得到所有符合条件的子数组，然后用set存储起来,key用字符串
    const len = nums.length
    const s = new Set()
    const backtracking = function(paths, startIndex){
        if(paths.length>1) {
            s.add(paths.join(","))
        }
        for(let i = startIndex; i<len; i++) {
            const c = nums[i]
            if(paths.length===0 || c>=paths[paths.length-1]) {
                paths.push(c)
                backtracking(paths, i+1)
                paths.pop()
            }
        }
    }
    backtracking([], 0)
    return Array.from(s).map(item=>item.split(",").map(item=>parseInt(item)))
};
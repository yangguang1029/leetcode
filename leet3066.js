/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 超出时间限制
var minOperations = function(nums, k) {
    const insert = function(arr, n) {
        let start = 0
        let end = arr.length-1
        while(start < end) {
            const mid = Math.floor((start+end)/2)
            const v = arr[mid]
            if(v === n) {
                start = mid
                break
            }else if(v > n) {
                end = mid
            }else {
                start = mid+1
            }
        }
        const index = arr[start] > n ? start : start+1
        arr.splice(index,0,n)
    }
    

    nums.sort((left,right)=>left-right)
    let c = 0
    while(nums[0] < k) {
        const newarr = nums.slice(2)
        insert(newarr, nums[0]*2+nums[1])
        nums = newarr
        c+=1
    }
    return c
    
};

let nums = [2,11,10,1,3]
nums = [1,1,2,4,9]
console.log(minOperations(nums, 20));



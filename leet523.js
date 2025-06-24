/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */


//前缀和加哈希表
//记录每个位置的前缀和为sum[i]， 对于i和j，如果sum[j]-sum[i]是k的倍数，那么说明这个子数组是k的倍数
//而如果sum[j]-sum[i]是k的倍数，那么sum[j]和sum[i]对k的余数一定是相同的
//因此遍历数组并记录sum[i]%k，一旦发现出现了，那么就说明存在。主要是得明白这个原理

var checkSubarraySum = function(nums, k) {
    const len = nums.length
    if(len < 2) {
        return false
    }
    const s = {}
    s['0'] = -1
    let sum = 0
    for(let i = 0; i < len; i++) {
        sum = (sum+ nums[i])%k
        const p = `${sum}`
        const prev = s[p]
        if(prev) {
            if(i - prev >= 2) {
                return true
            }
        }else{
            s[p] = i
        }
        
    }
    return false
};


checkSubarraySum([1,2,3],5)

var checkSubarraySum1 = function(nums, k) {
    // 先试一下用暴力的方法，看看复杂度会不会超标
    // 果然时间超过了，只能想想其它办法
    const len = nums.length
    let has = false
    for(let i = 0; i < len-1; i++) {
        let sum = nums[i]
        let j = i+1
        while(j < len) {
            sum += nums[j]
            if(sum % k === 0) {
                has = true
                break
            }
            j+=1
        }
        if(has) {
            break
        }

    }
    return has
};



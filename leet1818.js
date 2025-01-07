/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// 抽象问题后，先用简单的方法解答，直接双重循环。但这个肯定超出时间限制了

var minAbsoluteSumDiff1 = function(nums1, nums2) {

    let sum = 0
    nums1.forEach((n1, index)=> {
        sum += (Math.abs(n1 - nums2[index]))
    })
    if(sum === 0) {
        return 0
    }
    sum = sum % (Math.pow(10,9)+7)
    const len = nums1.length
    let max = 0
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < len; j++) {
            const ni = Math.abs(nums1[i] - nums2[i])
            const nj = Math.abs(nums1[j] - nums2[i])
            if(i !== j && nj < ni) {
                const tmp = ni - nj
                if(tmp > max) {
                    max = tmp
                }
            }
        }
    }
    return sum - max
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minAbsoluteSumDiff = function(nums1, nums2) {
    const findIndex = function(arr, start, end, num) {
        if(start === end) {
            return start
        }
        const mid = Math.floor((start+end)/2)
        const n = arr[mid]
        if(n === num) {
            return mid
        }
        if(n > num) {
            return findIndex(arr, start, mid, num)
        }
        return findIndex(arr, mid+1, end, num)
    }
    const MOD = Math.pow(10,9)+7
    
    const len = nums1.length
    const newnums = [...nums1]
    newnums.sort((left,right)=>left-right)
    let sum = 0, maxn = 0;
    for (let i = 0; i < len; i++) {
        const n2 = nums2[i]
        const diff = Math.abs(nums1[i] - n2);
        sum = (sum + diff) % MOD;
        const j = findIndex(newnums,0,len, n2);
        let delta
        if(j === 0) {
            delta = newnums[j] - n2
        }else if(j === len) {
            delta = n2 - newnums[j-1]
        }else {
            delta = Math.min(n2 - newnums[j-1], newnums[j] - n2)
        }
        const tmp = Math.abs(delta - diff)
        if(tmp > maxn) {
            maxn = tmp
        }
    }
    return (sum - maxn + MOD) % MOD;


};

const nums1 = [5,4,7]
const nums2 = [10,8,10]
console.log(minAbsoluteSumDiff(nums1, nums2));
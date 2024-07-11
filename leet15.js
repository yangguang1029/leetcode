/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const newnums = nums.sort((left,right)=>left-right)
    const len = newnums.length
    const re = []
    for(let i = 0; i < len; i++) {
        const n = newnums[i]
        if(n > 0) {
            break;
        }
        if(i > 0 && newnums[i-1] === n) {
            continue
        }
        let p = i+1;
        let q = len -1;
        while(p < q) {
            let left = nums[p]
            let right = nums[q]
            let tmp = n + left + right

            if(tmp < 0) {
                // p 一直往后加，加到一个新的值为止
                while(p < q && nums[p] === left) {
                    p+=1
                }
            } else if(tmp > 0) {
                while(q > p && nums[q] === right) {
                    q -=1
                }
            }else {
                re.push([n, left, right])
                while(p < q && nums[p] === left) {
                    p+=1
                }
                while(q > p && nums[q] === right) {
                    q -=1
                }
            }
        }
    }
    return re;
};

const nums = [34,55,79,28,46,33,2,48,31,-3,84,71,52,-3,93,15,21,-43,57,-6,86,56,94,74,83,-14,28,-66,46,-49,62,-11,43,65,77,12,47,61,26,1,13,29,55,-82,76,26,15,-29,36,-29,10,-70,69,17,49]
console.log(threeSum(nums))
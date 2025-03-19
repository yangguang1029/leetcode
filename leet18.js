/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {

    function sub(arr, t, count) {
        let re = new Set()
        if(count === 2){
            let left = 0
            let right = arr.length-1
            while(left<right){
                let total = arr[left]+arr[right]
                if(total === t){
                    re.add(`${arr[left]},${arr[right]}`)
                    left++
                    right--
                }else if(total<t){
                    left++
                }else{
                    right--
                }
            }
            return re
        }
        for(let i = 0; i <= arr.length - count; i++) {
            let subre = sub(arr.slice(i+1), t-arr[i], count-1)
            for(const item of subre){
                re.add(`${arr[i]},${item}`)
            }
            
        }
        return re
    }
    const  re = sub(nums.sort((a,b)=>a-b), target, 4)
    return Array.from(re).map(item => item.split(',').map(item => parseInt(item)))
};

const nums = [1,0,-1,0,-2,2]
const target = 0
console.log(fourSum(nums, target))

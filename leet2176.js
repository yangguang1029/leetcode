/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function(nums, k) {

    function getCountFromArray(arr) {
        const len = arr.length
        if(len < 2) {
            return 0
        }
        let c = 0
        arr.forEach((item, index) => {
            for(let i = index+1; i < len; i++) {
                if((item * arr[i]) % k === 0) {
                    c+=1
                }
            }
        })
        return c
    }

    const dic = {}
    nums.forEach((num, index) => {
        const arr = dic[num]
        if(arr === undefined) {
            dic[num] = [index]
        }else {
            arr.push(index)
        }
    })

    
    return Object.keys(dic).reduce((prev, current)=>{
        return prev + getCountFromArray(dic[current])
    }, 0)
    
};

console.log(countPairs([3,1,2,2,2,1,3], 2));
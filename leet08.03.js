/**
 * @param {number[]} nums
 * @return {number}
 */
var findMagicIndex = function(nums) {
    // 如果mid是魔术索引，那记录下来，然后继续往左找
    // 如果mid不是魔术索引，且比index大，那往右找。否则往左找 --- 这个规律是错误的
    // 需要用到递归，但递归是有技巧的，不要用数组slice去递归，这样效率低，而是新建一个方法，传入leftindex和rightindex去递归
   

    function find(leftindex, rightindex) {
        if(leftindex === rightindex) {
            return nums[leftindex] === leftindex ? leftindex : -1
        }
        let magicindex = -1
            const mid = Math.floor((leftindex+rightindex)/2)
            const n = nums[mid]
            if(n === mid) {
                magicindex = n
                const newindex = find(leftindex, mid)
                if(newindex !== -1) {
                    magicindex = newindex
                }
            }else {
                const leftnewindex = find(leftindex, mid)
                if(leftnewindex !== -1) {
                    magicindex = leftnewindex
                }else {
                    const rightnewindex = find(mid+1, rightindex)
                    if(rightnewindex !== -1) {
                        magicindex = rightnewindex
                    }
                }
                
            }
        
        return magicindex

    }

   return find(0, nums.length -1)
    
};

console.log(findMagicIndex([0, 0, 2]));
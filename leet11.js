/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // 双指针，
    let left = 0;
    let right = height.length - 1;
    let max = Math.min(height[left], height[right])*(right-left)
    while(left < right-1) {
        // 先让左边，直到开始下坡
        const leftv = height[left]
        while(left < right && height[left]<=leftv) {
            left += 1
        }
        if(left < right) {
            let tmp = Math.min(height[left], height[right])*(right-left)
            if(tmp>max) {
                max = tmp
            }
        }
        const rightv = height[right]
        while(left < right && height[right]<=rightv) {
            right -= 1
        }
        if(left < right) {
            let tmp = Math.min(height[left], height[right])*(right-left)
            if(tmp>max) {
                max = tmp
            }
        }
    }
    return max;

};

// let height = [2,3,10]
// let height = [1,8,6,2,5,4,8,3,7]
let height = [2,3,10,5,7,8,9]

console.log(maxArea(height));

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    // 二分查找的变种，要求查找的是第一个比target大的
    // letters是非递减排序

    let left = 0
    let right = letters.length -1 
    while(left < right) {
        const mid = Math.floor((left+right)/2)
        const n = letters[mid]
        if(n <= target) {
            left = mid+1
        }else {
            right = mid
        }
    }
    return letters[right] <= target ? letters[0] : letters[right]
};
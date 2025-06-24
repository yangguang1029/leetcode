// 二分查找法

// 最简单的，如果没找到返回-1.找到的话返回数字

function find(arr, num) {
    if(arr.length === 0) {
        return -1
    }
    const len = arr.length
    let left = 0
    let right = len-1
    let mid;
    while(left < right) {
        mid = Math.floor((left+right)/2)
        const n = arr[mid]
        if(n === num) {
            return mid
        }
        if(n < num) {
            left = mid+1
        }else {
            right = mid
        }
    }
    return arr[left] === num ? left : -1
}
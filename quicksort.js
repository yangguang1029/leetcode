// 冒泡排序
// 每次拿相邻的2个数字比较，如果前者较小就交换位置

function bubblesort(arr) {
    
    const len = arr.length
    let start = 0
    while(start < len-1) {
        let index = 0
        while(index < len-1-start) {
            if(arr[index] > arr[index+1]) {
                [arr[index], arr[index+1]] = [arr[index+1], arr[index]]
            }
            index += 1
        }
        start += 1
    }
}

// 快速排序
// 原理是随机取一个数字，将比它小和比他大的分别
// 这个算法的空间复杂度较大，一般会要求原地更换位置
function quicksort(arr) {
    const len = arr.length
    if(len < 2) {
        return arr
    }
    const first = arr[0]
    let small = []
    let big = []
    for(let i = 1; i < len; i++) {
        const n = arr[i]
        if(n <= first) {
            small.push(n)
        }else {
            big.push(n)
        }
    }
    small = quicksort(small)
    big = quicksort(big)
    return [...small, first, ...big]
}

function quicksort1(arr) {
    function sort(start, end) {
        if(start >= end) {
            return
        }
        let n = arr[end]
        let changeIndex = start
        let i = start
        while(i < end) {
            if(arr[i] < n) {
                [arr[changeIndex], arr[i]] = [arr[i], arr[changeIndex]]
                changeIndex += 1
            }
            i += 1
        }
        [arr[changeIndex], arr[end]] = [arr[end], arr[changeIndex]]
        
        sort(start, changeIndex-1)
        sort(changeIndex+1, end)
    }
    sort(0, arr.length-1)
}

let nums = [5,7,6, 8,9,10, 2,3,1,4]
quicksort1(nums)
console.log(nums);
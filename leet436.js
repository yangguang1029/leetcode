/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) {
    // 每个区间的起始都不相同，那就肯定是用map来存储
    const m = {}
    intervals.forEach((item, index)=> {
        m[`${item[0]}`] = index
    })
    const keys = Object.keys(m).map(key=>parseInt(key))
    const len = keys.length
    keys.sort((left,right)=>left-right)
    return intervals.map(item => {
        const n = item[1]
        // 找到第一个比它大的
        let index = 0;
        while(index < len && keys[index] < n) {
            index += 1
        }
        return index === len ? -1 : m[`${keys[index]}`]
    })
    
};

const intervals = [[3,4],[2,3],[1,2]]
console.log(findRightInterval(intervals));
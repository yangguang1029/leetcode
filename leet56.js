/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // 进行排序，然后遍历即可
    intervals.sort((left,right) => left[0]-right[0])
    const re = []
    let current = null
    intervals.forEach((item) => {
        if(!current) {
            current = item
        }else {
            if(item[0] > current[1]) {
                re.push(current)
                current = item
            } else {
                current[1] = Math.max(item[1], current[1])
            }
        }

    })
    re.push(current)
    return re;

};
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    // 画图想清楚，对于任何一个区间，首先看 newinterval 的起点，有三种情况
    // new起点在自己区间左边，那么 current 起点是 new 的起点
    // new 起点在自己区间内，那么 current 起点是 自己起点
    // new起点在自己区间后，那不用管，会被下一个区间处理（如果没有下一个区间了，那把 new 加到最后即可）

    // 然后看 new 的终点
    // 如果终点在自己区间左边，那么current 终点就是 new 终点
    // 如果终点在自己区间内，那么 current终点是自己终点
    // 如果终点在自己区间外，那么比较下一个，直到最后一个

    const re = []
    let current = []
    const start = newInterval[0]
    const end = newInterval[1]
    let done = false
    intervals.forEach((item) => {
        if(done) {
            re.push(item)
            return;
        }
        if(current[0] === undefined) {
            if(start <= item[0]) {
                current[0] = start
               }else {
                if(start <= item[1]) {
                    current[0] = item[0]
                }
               }
        }
      
       if(end < item[0]) {
        current[1] = end
        re.push(current)
        done = true;
        re.push(item)
       } else { 
        if(end <= item[1]) {
            current[1] = item[1]
            re.push(current)
            done = true;
        }
       }
       if(current.length === 0) {
        re.push(item)
       }
    })
    if(current.length === 0) {
        re.push(newInterval)
    }
    if(current.length === 1) {
        // 只设定了起点，没设定终点
        current[1] = newInterval[1]
        re.push(current)
    }
    return re;

};

const intervals = [[1,3],[6,9]]
const newInterval = [2,5]

// const intervals = [[1,5]]
// const newInterval = [2,7]

console.log(insert(intervals, newInterval));
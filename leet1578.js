/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
    
    const gettime = function(start, end) {
        // 闭开区间
        let max = 0
        let total = 0
        let index = start
        while(index < end) {
            const t = neededTime[index]
            total += t;
            if(t>max){
                max = t
            }
            index += 1
        }
        return total - max
    }

    let time = 0
    let start = 0
    let len = colors.length
    while(start < len) {
        let end = start + 1
        let c = colors[start]
        while(end < len && colors[end] === c) {
            end += 1
        }
        //留下最大的
        time += gettime(start, end)
        start = end
    }
    return time
    
};

const colors = "abaac"
const neededTime = [1,2,3,4,5]
console.log(minCost(colors, neededTime));

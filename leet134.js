/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    // 一个一个测试，会超时
    let start = 0;
    let len = gas.length;

    while(start < len) {
        let gcount = gas[start]
        let ccount = cost[start]
        if(gcount >= ccount) {
            // 开始尝试计算
            let left = gcount - ccount;
            let p = (start + 1) % len;
            while(p !== start && left >= 0) {
                left += (gas[p] - cost[p])
                p = (p+1)%len;
            }
            if(left >= 0) {
                return start;
            }else {
                if(p !== start && p > start) {
                    start = p
                }else {
                    break;
                }
            }
        } else{
            start += 1
        }
        
    }
    return -1;

};

const gas = [1,2,3,4,3,2,4,1,5,3,2,4]
const cost = [1,1,1,3,2,4,3,6,7,4,3,1]

console.log(canCompleteCircuit(gas, cost))
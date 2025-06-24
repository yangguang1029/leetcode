/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const arr = [0, cost[0], cost[1]]
    for(let i = 3; i < cost.length; i++) {
        const tmp = Math.min(arr[i-3]+cost[i-1], arr[i-2] + cost[i])
        console.log('i', i, 'tmp', tmp);
        arr.push(tmp)
    }
    return arr[cost.length]
};

let cost =[1,100,1,1,1,100,1,1,100,1]
console.log(minCostClimbingStairs(cost));
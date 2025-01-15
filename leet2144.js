/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(cost) {
    cost.sort((left,right)=>left-right)
    const len = cost.length
    let index = len-1
    let total = 0
    while(index >= 2) {
        total += cost[index]
        total += cost[index-1]
        index -= 3
    }
    while(index >= 0) {
        total += cost[index]
        index -= 1
    }
    return total
};

let cost = [6,5,7,9,2,2]

console.log(minimumCost(cost));
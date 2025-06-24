/**
 * @param {number} n
 * @param {number[][]} relation
 * @param {number} k
 * @return {number}
 */

// 传递到第p个节点时,传递次数为arr[p]
//arr[p]又是一个数组，包含了分别经过1,2...k次传递的次数
// 那么当传递到p+1个节点时，传递次数就是对arr[p]的操作


var numWays = function(n, relation, k) {
    // arr是长度为k的数组，每个单元都是一个长度为n的数组 arr[i][j]表示经历了i步，到达第j个小朋友的方案数
    // 那么arr[i+1][j]就是经历了i+1步才到j，所以是对arr[i]遍历，如果有目标为第j个小朋友的，那么就对其值+1
    
    let arr = []
    let first = new Array(n).fill(0)
    relation.forEach(item => {
        const [from, to] = item
        if(from === 0) {
            first[to] += 1
        }
    })
    arr.push(first)

    for(let step = 1; step <k; step++) {
        const last = arr[step-1]
        let tmp = new Array(n).fill(0)
        relation.forEach(item => {
            const [from, to] = item
            tmp[to] += last[from]
        })
        arr.push(tmp)
    }
    return arr[k-1][n-1]
};

let n = 5
let k = 3
let relation = [[0,2],[2,1],[3,4],[2,3],[1,4],[2,0],[0,4]]

console.log(numWays(n, relation, k));
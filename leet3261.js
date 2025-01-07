/**
 * @param {string} s
 * @param {number} k
 * @param {number[][]} queries
 * @return {number[]}
 */



// 思路并不复杂，先用二维把数据存起来，然后计算

var countKConstraintSubstrings = function(s, k, queries) {
    const len = s.length;
    
    const counts = []
    for(let i = 0; i < len; i++) {
        const sub = []
        for(let j = i; j < len; j++) {
            const v = s[j]
            if(j === i) {
                sub[j] = v == '0' ? [1,0] : [0,1]
            } else {
                sub[j] = v == '0' ? [sub[j-1][0]+1,sub[j-1][1]] : [sub[j-1][0],sub[j-1][1]+1]
            }
        }
        counts[i] = sub
    }
    
    return queries.map(item => {
        [start, end] = item;
        let count = 0
        // start end是闭区间，当相等时长度为1
        for(let len = 0; len <= end-start; len++) {
            for(let i = start; i + len <= end; i++) {
                const c = counts[i][i+len]
                if(Math.min(c[0],c[1]) <= k) {
                    count += 1
                }
            }
        }

        return count
    })

};

let s = "0001111"
let k = 2
let queries = [[0,6]]
// s='010101'
// k=1
// queries=[[2,3]]

console.log(countKConstraintSubstrings(s,k,queries));
/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */


// 首先，遍历肯定是最笨的方法。题目要求是2*n位，那么就必须是2,4位，因为hign<10000
// 对于2位的，就只有11-99这么9个
//对于4位的，则需要分别计算出从10（和为1）到99（和为18）这18个数分别有多少种组合方案
// 1: 10 01   2: 11 02 20
// 3 03 30 12 21 // 4 04 40 13 31 22
//5 05 50 14 41 32 23 // 6 06 60 15 51 24 42 33
// 7 07 70 16 61 25 52 34 43
// 总结规律就是 n+1
var countSymmetricIntegers = function(low, high) {
    if(high < 1000) {
        if(high > 100) {
            high = 100
        }
        return Math.floor(high/11) - Math.floor(low/11) + (low % 11 === 0 ? 1: 0)
    }
    
    const data = [
        [0,10],
        [2,11,20],
        [3,12,21,30],
        [4,13,22,31,40],
        [5,14,23,32,41,50],
        [6,15,24,33,42,51,60],
        [7,16,25,34,43,52,61,70],
        [8,17,26,35,44,53,62,71,80],
        [9,18,27,36,45,54,63,72,81,90],
        [19,28,37,46,55,64,73,82,91],
        [29,38,47,56,65,74,83,92],
        [39,48,57,66,75,84,93],
        [49,58,67,76,85,94],
        [59,68,77,86,95],
        [69,78,87,96],
        [79,88,97],
        [89,98],
        [99]
    ]

    let re = low < 100 ? Math.ceil((100-low)/11) : 0
    if(low < 1000) {
        low = 1000
    }
    let lowth = Math.floor(low/100)
    let highth = Math.floor(high/100)
    for(let i = lowth+1; i < highth; i++) {
        const sum = i%10+Math.floor(i/10)
        re += (data[sum-1].length)
    }
    // 再分别计算low和high的
    let lowsum  = lowth%10+Math.floor(lowth/10)
    let highsum  = highth%10+Math.floor(highth/10)
    
    const lowdata = data[lowsum-1]
    re += (lowdata.filter(item => item >= (low%100) && item <=(lowsum === highsum ? high%100 : 99)).length)
    if(lowsum !== highsum) {
        const highdata = data[highsum-1]
        re += (highdata.filter(item => item <= (high%100)).length)
    }
   
    return re
};

console.log(countSymmetricIntegers(100,1782));

// console.log(countSymmetricIntegers(1,1));
// console.log(countSymmetricIntegers(1,100));
// console.log(countSymmetricIntegers(1200,1230));
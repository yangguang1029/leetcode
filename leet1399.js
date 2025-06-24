/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
    let ge = 1
    let shi = 0
    let bai = 0
    let qian = 0
    let sum = 1;
    const dic = {}
    let max = 0
    for(let i = 1; i <=n; i++) {
        const c = (dic[sum] || 0)+1
        if(c > max) {
            max = c
        }
        dic[sum] = c
        sum += 1
        if(i % 10 === 9) {
            ge = 0
            shi += 1
            if(shi === 10) {
                shi = 0
                bai += 1
                if(bai === 10) {
                    bai = 0
                    qian += 1
                }
            }
            sum = ge+shi+bai+qian
        }
    }
    return Object.keys(dic).filter(item => dic[item] === max).length
    
};
console.log(countLargestGroup(126));
console.log(countLargestGroup(174));
console.log(countLargestGroup(15));
console.log(countLargestGroup(24));
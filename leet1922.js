/**
 * @param {number} n
 * @return {number}
 */
var countGoodNumbers = function(n) {
    const yu = Math.pow(10,9)+7
    // 快速幂
    const quickmi = function(x,m) {
        let re = 1
        let mul = x
        while(m > 0) {
            if(m % 2 === 1) {
                re = (re * mul)%yu
            }
            mul = (mul * mul)%yu
            m = Math.floor(m/2)
        }
        return re
    }    
    const a = quickmi(5, Math.ceil(n/2)) 
    const b = quickmi(4, Math.floor(n/2))
    return (a * b)%yu



    // 5
    // 5*4
    // 5*4*5
    // 5*4*5*4
    // 5*4*5*4*5
    // 5*4*5*4*5*4

    // // 这个方法是对的，但是超时了，所以不能遍历n。本质上就是5*4*5*4而已
    // let c = 1
    // // i表示位数
    // let i = 0
    // while(i < n) {
    //     // 偶数位有5种选择，奇数位有4种选择
    //     c *= (i % 2 === 0 ? 5 : 4)
    //     c = c % (Math.pow(10,9)+7)
    //     i += 1
    // }
    // return c
};

console.log(countGoodNumbers(50));
console.log(countGoodNumbers(1));
console.log(countGoodNumbers(2));
console.log(countGoodNumbers(3));
console.log(countGoodNumbers(4));
console.log(countGoodNumbers(5));
console.log(countGoodNumbers(6));
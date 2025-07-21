/**
 * @param {number} n
 * @return {boolean}
 */
var divisorGame = function(n) {
    // 动态规划
    // 对数n，相当于f(n-1),f(n-2),f(n-i)其中i是可以被n整除的，然后取反
    const arr = [undefined, false]
    for(let index = 2; index <= n; index++) {
        let isok = false
        let i = 1
        while(i <= Math.sqrt(n) ) {
            if(index % i === 0 && arr[index-i] === false) {
                isok = true
                break
            }
            i += 1
        }
        arr[index] = isok
    }
    return arr[n]
};

// console.log(divisorGame(2));
console.log(divisorGame(3));
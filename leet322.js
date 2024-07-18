/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {

    let arr = [0]
    for(let i = 1; i <= amount; i++) {
        // 组成 i 金额，需要用 coins 里的每一种，加上之前的
        let min = Number.MAX_SAFE_INTEGER;
        coins.forEach(coin => {
            if(i - coin >= 0) {
                const v = arr[i-coin]
                if(v >= 0 && (v+1)<min) {
                    min = v+1
                }
            }
        })
        if(min === Number.MAX_SAFE_INTEGER) {
            min = -1
        }
        arr[i] = min;
    }

    return arr[amount]


};
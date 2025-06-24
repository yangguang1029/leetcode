/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    const arr = [1,1]
    let index = 2
    while(index <= n) {
        let num = 0
        let i = 0
        while(i < index) {
            num += arr[i] * arr[index-1-i]
            i+=1
        }
        arr[index] = num
        index+=1
    }

    return arr[n]
    
};

console.log(numTrees(3));
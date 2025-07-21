/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    // 这个解法超出时间限制了，必须想办法优化一下
    const max = Math.pow(2, n)
    let ans;

    const islegal = function(a,b) {
        const c = a ^ b
        return (c & (c-1)) === 0
    }

    function inner(arr) { // arr是已经弄好的数组，每个单元都是一个数组，当某个单元符合条件时，就可以结束了
        let newarr = []
        for(let index = 0; index < arr.length; index++) {
            const subarr = arr[index]
            const last = subarr[subarr.length-1]
            if(subarr.length === max) {
                if(islegal(last, subarr[0])) {
                    ans = subarr
                    return
                }
            }else {
                for(let num = 0; num < max; num++) {
                    if(subarr.indexOf(num) < 0 && islegal(last, num)) {
                        newarr.push([...subarr, num])
                    }
                }
            }
        }
        inner(newarr)
    }
    
    inner([[0]])
     return ans
};

console.log(grayCode(2));
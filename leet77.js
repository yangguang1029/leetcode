/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const re = []
    const pages = []

    function inner(count) {
        if(count === k){
            re.push([...pages])
            return
        }
        for(let i = 1; i <= n; i++) {
            const len = pages.length;
            if(len > 0 && i <= pages[len-1]) {
                continue
            }else {
                pages.push(i)
                inner(count + 1)
                pages.pop()
            }
        }
    }
    inner(0)
    return re;

};

console.log(combine(3,3));
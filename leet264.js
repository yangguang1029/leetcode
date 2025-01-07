/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let min = 1
    let s = new Set([1])
    let c = 1
    const items = [2,3,5]
    while(c < n) {
        s.delete(min)
        items.forEach(item => {
            const v = item * min
            s.add(v)
        })
        const arr = [...s]
        arr.sort((left,right)=>left-right)
        min = arr[0]
        c+=1
    }
    return min
    
};

console.log(nthUglyNumber(7));
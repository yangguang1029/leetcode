/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    const m = new Map()
    dominoes.forEach(item => {
        const [num1, num2] = item;
        const min = Math.min(num1, num2)
        const max = min === num1 ? num2: num1
        const key = `${min}-${max}`
        m[key] = (m[key] || 0) + 1
    })
    let total = 0
    Object.keys(m).forEach(key => {
        const c = m[key]
        if(c >= 2) {
            total += (c*(c-1)/2)
        }
    })
    return total
    
};
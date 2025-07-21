/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function(astr) {
    let a = 0
    const first = 'a'.charCodeAt(0)
    for(let i = 0; i < astr.length; i++) {
        const delta = astr.charCodeAt(i) - first
        const p = 1 << delta
        if((a & p) === 0) {
            a = (a | p)
        }else {
            return true
        }
    }
    return false
};

console.log(isUnique('abc'));
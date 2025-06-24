/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
    let lcount = 0
    for(let i = 0; i < s.length; i++) {
        const c = s.charAt(i)
        if(c === letter) {
            lcount += 1
        }
    }
    return parseInt(lcount*100/s.length)
};
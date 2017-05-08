/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    if (k === 1) {
        return s;
    }
    let len = s.length;
    let i = 0;
    let breverse = true;
    let re = "";
    while (i < len) {
        let origin = s.slice(i, i + k);
        if (breverse) {
            let news = origin.split("").reverse().join("");
            re += news;
        } else {
            re += origin;
        }
        breverse = !breverse;
        i += k;
    }
    return re;
};

console.log(reverseStr("abcdefghijk", 2))
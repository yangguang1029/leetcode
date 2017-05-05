/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let ac = 0;
    let lc = 0;
    let i = 0;
    let len = s.length;
    while (i < len) {
        let c = s[i];
        if (c === "A") {
            ac += 1;
        }
        if (c === "L") {
            lc += 1;
        } else {
            lc = 0;
        }
        if (ac > 1 || lc > 2) {
            return false;
        }
        i += 1;
    }
    return true;
};
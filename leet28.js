/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    //kmp
    var nlen = needle.length;
    var hlen = haystack.length;
    if (nlen === 0) {
        return 0;
    }
    if (hlen === 0) {
        return -1;
    }


    //算出needle的部分匹配表
    var nexts = [0];
    var j = 0;
    for (var i = 1; i < nlen; i++) {
        while (j > 0 && needle[j] !== needle[i]) {
            j = nexts[j];
        }
        if (needle[j] === needle[i]) {
            j += 1;
        }
        nexts[i] = j;
    }

    var index = 0;

    while (index <= hlen - nlen) {
        if (haystack[index] !== needle[0]) {
            index += 1;
            continue;
        }
        var step = 1;
        while (step < nlen && haystack[index + step] === needle[step]) {
            step += 1;
        }
        if (step === nlen) {
            return index;
        }
        index += (step - nexts[step - 1]);
    }

    return -1;
};
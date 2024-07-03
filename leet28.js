/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr1 = function(haystack, needle) {
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


/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const nlen = needle.length;
    // 找 needle 最长重复子串
    const arr = [-1]
    let nindex = 1;
    while(nindex < nlen) {
        if(needle.charAt(nindex) === needle.charAt(arr[nindex-1]+1)) {
            arr[nindex] = arr[nindex-1]+1
        } else {
            arr[nindex] = arr[nindex-1]
        }
        nindex += 1
    }
    let nrepeatindex = Math.max(1, arr[nlen-1]+1) 

    function check(hstr, nstr, start) {
        for(let i = 0; i < nstr.length; i++) {
            if(hstr.charAt(start+i) !== nstr.charAt(i) ) {
                return false
            }
        }
        return true;
    }

    const hlen = haystack.length;
    let hindex = 0;
    while(hindex < hlen) {
        if(check(haystack, needle, hindex)) {
            break;
        } else {
            hindex += nrepeatindex
        }
    }
    return hindex >= hlen ? -1 : hindex
};



console.log(strStr('babbbbbabb', 'bbab'))

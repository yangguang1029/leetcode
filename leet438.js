/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let slen = s.length;
    let plen = p.length;
    if(slen === 0 || slen < plen) {
        return [];
    }

    function compareDic(dic1, dic2) {
        for(var key in dic2) {
            if(dic1[key] !== dic2[key]) {
                return false;
            }
        }
        return true;
    }

    let pdic = Object.create(null);
    p.split("").forEach((item)=>{
        pdic[item] = pdic[item] ? (pdic[item] + 1) : 1;
    });

    let sdic = Object.create(null);
    let tmp = s.slice(0, plen);
    tmp.split("").forEach((item)=>{
        sdic[item] = sdic[item] ? (sdic[item] + 1) : 1;
    });

    let index = 0;
    let re = [];
    while(index <= slen - plen) {
        if(compareDic(sdic, pdic)) {
            re.push(index);
        }
        let first = s[index];
        sdic[first] = sdic[first] - 1;
        let newfirst = s[index + plen];
        sdic[newfirst] =  sdic[newfirst] ? (sdic[newfirst] + 1) : 1
        index += 1;
    }
    return re;
};

var fuck = findAnagrams("cbaebabacd", "abc");
printArr(fuck);
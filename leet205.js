/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic1 = function(s, t) {
    //用两个字典记录每个字母第一次出现的位置，遍历字符串，必须符合
    let dics = {};
    let dict = {};
    let len = s.length;
    let index = 0;
    while (index < len) {
        let cs = s[index];
        let ct = t[index];
        let vs = dics[cs];
        let vt = dict[ct];
        if (typeof vs !== "undefined" && typeof vt !== "undefined" && vs === vt) {
            index += 1;
            continue;
        } else if (typeof vs === "undefined" && typeof vt === "undefined") {
            dics[cs] = index;
            dict[ct] = index;
            index += 1;
            continue;
        } else {
            return false;
        }
    }

    return true;
};


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length !== t.length) {
        return false;
    }
    const sdic = {}
    const tdic = {}
    let isis = true;
    for(let i = 0; i < s.length; i++) {
        const sc = s.charAt(i)
        const tc = t.charAt(i)
        const sindex = sdic[sc]
        const tindex = tdic[tc]
        if(sindex !== tindex) {
            isis = false;
            break;
        }
        if(sindex === undefined) {
            sdic[sc] = i;
        }
        if(tindex === undefined) {
            tdic[tc] = i;
        }
        
    }
    return isis
};

console.log(isIsomorphic("badc", "baba"))
    // console.log(isIsomorphic("app", "bbq"))
    // console.log(isIsomorphic("appaabb", "bqqbbcc"))
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const dic = {}
    for(let i = 0; i<s.length; i++) {
        const c = s[i]
        dic[c] = dic[c]? dic[c]+1 : 1
    }
    const keys = Object.keys(dic)
    keys.sort((left,right)=>dic[right]-dic[left])
    let re = ""
    keys.forEach(key=>{
        re += key.repeat(dic[key])
    })
    return re
};
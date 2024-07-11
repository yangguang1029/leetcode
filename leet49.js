/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    // 先用最笨的方法，对每个字符串先排序，然后再归并，存下来 index，然后再输出
    // 可以优化一下，遍历一遍完成输入和输出

    const map = new Map()
    strs.forEach((str,index) => {
        const newstr = str.split('').sort().join('')
        const v = map.get(newstr)
        if(v) {
            v.push(index)
        }else {
            map.set(newstr, [index])
        }
    })
    const re = []
    map.forEach((indexs) => {
        re.push(indexs.map(index => strs[index]))
    })
    
    return re

};

let strs = ["eat","tea","tan","ate","nat","bat"]

console.log(groupAnagrams(strs));
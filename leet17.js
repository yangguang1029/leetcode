/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const arr = digits.replace('1','').split('')
    if(arr.length === 0) {
        return []
    }
    const dic = {
        "2": ['a','b','c'],
        '3':['d','e','f'],
        '4':['g','h','i'],
        '5':['j','k','l'],
        '6':['m','n','o'],
        '7':['p','q','r','s'],
        '8':['t','u','v'],
        '9':['w','x','y','z']
    }
    const first = arr[0]
    let re = dic[first]
    for(let i = 1; i < arr.length; i++) {
        const als = dic[arr[i]]
        let tmp = []
        re.forEach(item => {
            tmp = tmp.concat(als.map(subitem => item + subitem))
        })
        re = tmp
    }
    return re;
};
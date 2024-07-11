/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let re = ''
    let index = 0;
    let len = s.length;
    do {
        // 找到非空的位置
        while(index < len && s.charAt(index) === ' ') {
            index += 1
        }
        if(index >= len) {
            break;
        }
        // 找到第一个空字符串
        let end = index+1
        while(end < len && s.charAt(end) !== ' ') {
            end += 1
        }
        re = s.slice(index, end) + (re !== '' ? ' ' : '') + re;
        index = end+1

    }while(index < len)


    return re

};

console.log(reverseWords('the sky is blue '));


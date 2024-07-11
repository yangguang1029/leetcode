/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    // 观察结果，可以组成一个二维数组，其中奇数项的起点和终点都是空字符串，然后拼一下

    const arr = []
    const len = s.length;
    let index = 0;
    let col = 0
    while(index < len) {
        let sub = []
        let count = 0
        if(col % 2 === 0) {
            // 偶数项，加 rows 个数据
            while(count < numRows) {
                sub.push(index < len ? s.charAt(index) : '')
                count += 1
                index += 1
            }
        } else {
            // 奇数项，加 rows-2 个数据，前后补充空字符串，且从后往前加
            sub = ['']
            count = 1
            while(count < numRows-1) {
                sub.unshift(index < len ? s.charAt(index) : '')
                count += 1
                index += 1
            }
            sub.unshift('')
        }
        arr.push(sub)
        col += 1
    }
    let re = ''
    for(let i = 0; i < numRows; i++) {
        re += arr.map(item => item[i]).join('')
    }
    return re
};

console.log(convert('PAYPALISHIRING', 3)); // PAHNAPLSIIGYIR 
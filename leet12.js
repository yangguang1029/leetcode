/**
 * @param {number} num
 * @return {string}
 */

/*
符号	值
I	1
V	5
X	10
L	50
C	100
D	500
M	1000
罗马数字是通过添加从最高到最低的小数位值的转换而形成的。将小数位值转换为罗马数字有以下规则：

如果该值不是以 4 或 9 开头，请选择可以从输入中减去的最大值的符号，将该符号附加到结果，减去其值，然后将其余部分转换为罗马数字。
如果该值以 4 或 9 开头，使用 减法形式，表示从以下符号中减去一个符号，例如 4 是 5 (V) 减 1 (I): IV ，9 是 10 (X) 减 1 (I)：IX。仅使用以下减法形式：4 (IV)，9 (IX)，40 (XL)，90 (XC)，400 (CD) 和 900 (CM)。
只有 10 的次方（I, X, C, M）最多可以连续附加 3 次以代表 10 的倍数。你不能多次附加 5 (V)，50 (L) 或 500 (D)。如果需要将符号附加4次，请使用 减法形式。

*/

var intToRoman = function(num) {

    function getOne(number, index) {    // number 表示该位上的数字， index 表示多少次方
        let str = ''
        const arr = ['I', 'X', 'C', 'M']
        const arr1 = ['V', 'L', 'D']
        if(number === 0) {
            return str;
        }
        if(number < 4) {
            for(let i = 0; i < number; i++) {
                str += arr[index]
            }
        } else if(number === 4) {
            str = arr[index] + arr1[index]
        } else if(number === 5) {
            str = arr1[index]
        } else if(number < 9) {
            str = arr1[index]
            for(let i = 5; i < number; i++) {
                str += arr[index]
            }
        }else if(number === 9) {
            return arr[index] + arr[index+1]
        }
        return str
    }

    let re = ''
    let n = num;
    let i = 0;
    while(n) {
        re = getOne(n%10, i)+re
        i+=1
        n = Math.floor(n/10)
    }
    return re;
};

console.log(intToRoman(10))
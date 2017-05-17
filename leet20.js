/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr = [];
    let index = 0;
    let len = s.length;
    while (index < len) {
        let c = s[index];
        if (c === '(' || c === "[" || c === "{") {
            arr.push(c);
        } else {
            let tmp = arr.pop();
            if ((tmp === "(" && c === ")") || (tmp === "[" && c === "]") || (tmp === "{" && c === "}")) {

            } else {
                return false;
            }
        }
        index += 1;
    }
    return arr.length === 0;
};

console.log(isValid("()"));
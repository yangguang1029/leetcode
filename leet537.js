/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function(a, b) {
    function getNum(str) {
        let arr = str.split(/[\+i]/);
        return [arr[0], arr[1]];
    }
    let [a1, a2] = getNum(a);
    let [b1, b2] = getNum(b);
    return (a1 * b1 - a2 * b2) + "+" + (a1 * b2 + a2 * b1) + "i";
};

console.log(complexNumberMultiply("1+1i", "1+1i"))
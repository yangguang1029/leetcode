/**
 * @param {string} s
 * @return {boolean}
 */
// var isPalindrome = function(s) {
//     let len = s.length;
//     if (len === 0) {
//         return true;
//     }
//     s = s.toLowerCase();

//     function isValid(c) {
//         return (c >= "a" && c <= "z") || (c >= "0" && c <= "9");
//     }
//     let p = 0;
//     let q = len - 1;
//     while (p <= q) {
//         while (p <= q && !isValid(s[p])) {
//             p += 1;
//         }
//         while (p <= q && !isValid(s[q])) {
//             q -= 1;
//         }
//         if (p > q) {
//             break;
//         }
//         if (s[p] !== s[q]) {
//             return false;
//         } else {
//             p += 1;
//             q -= 1;
//         }
//     }
//     return true;
// };

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let news = s.replace(/[^0-9a-zA-Z]/g, '').toLocaleLowerCase()
    const len = news.length;
    let index = 0;
    while(index < len / 2) {
        if(news[index] === news[len - 1 - index]) {
            index += 1
        } else {
            break
        }
    }
    return index >= len/2 
};
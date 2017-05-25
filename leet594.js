/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    let dic = Object.create(null);
    nums.forEach((item) => {
        let key = "" + item;
        let value = dic[key];
        if (value) {
            dic[key] = value + 1;
        } else {
            dic[key] = 1;
        }
    });
    let max = 0
    for (var key in dic) {
        let n = dic[key];
        let n1 = dic["" + (parseInt(key) - 1)];
        if (n1) {
            if (n + n1 > max) {
                max = n + n1;
            }
        }
        let n2 = dic["" + (parseInt(key) + 1)];
        if (n2) {
            n += n2;
            if (n > max) {
                max = n;
            }
        }
    }
    return max;
};

console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]))
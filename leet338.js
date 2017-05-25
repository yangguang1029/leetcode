/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    let arr = [0, 1, 1, 2];
    let tmp = [1, 2, 2, 3];
    while (arr.length <= num) {
        arr = arr.concat(tmp);
        let newtmp = tmp.map((item) => {
            return item + 1;
        });
        tmp = tmp.concat(newtmp);


    }

    return arr.slice(0, num + 1);
};

console.log(countBits(8).join("->"))
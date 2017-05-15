/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let arr = [1];
    let i = 1;
    while (i <= rowIndex) {
        let tmp = [1];
        let alen = arr.length;
        arr.forEach((item, index, array) => {
            if (index < alen - 1) {
                tmp.push(item + array[index + 1]);
            }
        });
        tmp.push(1);
        arr = tmp;
        i += 1;
    }
    return arr;
};

var fuck = getRow(3);
printArr(fuck);
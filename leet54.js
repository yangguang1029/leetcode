/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {

    const rown = matrix.length; //行数
    const coln = matrix[0].length;// 列数


    // 将问题拆解，每次得到一个小圈的数据，最后连起来

    function getCircle(n) {
        // 获取第 n 圈的数据
        let startcol = n;
        let endcol = coln - 1 - n;
        let startrow = n;
        let endrow = rown - 1 - n;
        let arr = matrix[startrow].slice(startcol, endcol + 1) // 顶部
        if(startrow === endrow) {
            return arr;// 只有一行
        }
        for(let row = startrow + 1; row <= endrow; row++) {
            arr.push(matrix[row][endcol]);// 右侧
        }
        if(startcol === endcol) {
            return arr;//只有一列
        }
        for(let col = endcol - 1; col >= startcol; col--) {
            arr.push(matrix[endrow][col])   //底部
        }
        for(let row = endrow - 1; row > startrow; row--) {
            arr.push(matrix[row][startcol])
        }
        return arr;
    }
    let arr = []
    for(let c = 0; c < Math.ceil(Math.min(rown, coln)/2) ; c++) {
        arr = arr.concat(getCircle(c))
    }
    return arr;
};

// const matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
const matrix = [[6,9,7]]

console.log(spiralOrder(matrix));
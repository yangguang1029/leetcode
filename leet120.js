/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {

    let result = triangle[0]

    for(let i = 1; i < triangle.length; i++) {
        let num = triangle[i]
        let tmp = [...result]
        result = num.map((item, index) => {
            if(index === 0) {
                return tmp[index] + item
            }
            if(index === num.length-1) {
                return tmp[index-1] + item
            }
            return Math.min(tmp[index-1], tmp[index]) + item
        })
    }

    result.sort((left,right)=>left-right)
    return result[0]
    
};

const triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]

console.log(minimumTotal(triangle));
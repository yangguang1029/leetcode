/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {

    // 首先进行排序，然后依次遍历，找到没有交集的数量
    points.sort((left, right) => {
        if(left[0] < right[0]) {
            return -1
        }
        if(left[0]>right[0]) {
            return 1
        }
        return left[1]-right[1]
    })

    let end = points[0][1]
    let count = 1
    for(let i = 1; i < points.length; i++) {
        const item = points[i]
        
        if(item[0] > end) {
            count += 1;
            end = item[1]
        }else {
            if(item[1] < end) {
                end = item[1]
            }
        }
    }
    return count

};

const points = [[10,16],[2,8],[1,6],[7,12]]
// const points = [[3,9],[7,12],[3,8],[6,8],[9,10],[2,9],[0,9],[3,9],[0,6],[2,8]]
// const points = [[9,12],[1,10],[4,11],[8,12],[3,9],[6,9],[6,7]]
console.log(findMinArrowShots(points));
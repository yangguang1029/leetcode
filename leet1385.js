/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    arr2.sort((left,right)=>left-right)
    let c = 0
    const first = arr2[0]
    const last = arr2[arr2.length-1]
    const len = arr2.length
    arr1.forEach(item => {
        if(item < first && first-item > d) {
            c += 1
        }else if(item > last && item - last > d) {
            c+= 1
        }else {
            let index = 0;
            while(index < len && Math.abs(item - arr2[index]) > d) {
                index += 1
            }
            if(index === len) {
                c+= 1
            }
        }
    })
    return c
};
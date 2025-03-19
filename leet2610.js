/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    // 先把数组转成字典，记录每个数字的数量，然后转成数组即可
    const num_map = {}
    nums.forEach((item)=>{
        num_map[item] = num_map[item] ? num_map[item] + 1 : 1
    })
    const keys = Object.keys(num_map)
    const newarr = []
    let hasmore = true
    while(hasmore) {
        const subarr = []
        keys.forEach(key =>{
            const c = num_map[key]
            if(c>0) {
                subarr.push(parseInt(key))
                num_map[key] = c-1
            }
        })
        if(subarr.length>0) {
            newarr.push(subarr)
        } else {
            hasmore = false
        }
    }
    return newarr
};
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    // 首先，排列组合问题肯定是用回溯，其次是，数组里有相同的元素，那么回溯时就可能带来重复，所以用set做过滤

    function arr2dic(arr) {
        const dic = {}
        arr.forEach(item => {
            if(dic[item] === undefined) {
                dic[item] = 0
            } else {
                dic[item] = dic[item]+1
            }
        })
        return dic
    }
    const alldic = arr2dic(nums)

    const len = nums.length
    const s = []
    function backtrace(paths){
        if(paths.length === len) {
            s.push([...paths])
            return
        }
        const pdic = arr2dic(paths)
        const keys = Object.keys(alldic)
        keys.forEach(key=>{
            const pc = pdic[key]
            if(pc === undefined || pc < alldic[key]) {
                paths.push(parseInt(key))
                backtrace(paths)
                paths.pop()
            }
        })
        
    }
    backtrace([])
    return s
};

console.log(permuteUnique([1,2,3]));
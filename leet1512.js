/**
 * @param {number[]} nums
 * @return {number}
 */
 var numIdenticalPairs = function(nums) {
    let map = {}
    nums.forEach(item=>{
        let key = ''+item
        map[key] = (map[key] || 0) + 1
    })
    let c = 0
    function cal(n) {
        if(n === 1) {
            return 0
        }
        let c = 0
        for(let i = n-1; i > 0; i--) {
            c += i
        }
        return c
    }
    for(let key in map) {
        let tmp = map[key]
        if(tmp > 1) {
            c += cal(tmp)
        }
        
    }
    return c
};

numIdenticalPairs([1,2,3,1,1,3])
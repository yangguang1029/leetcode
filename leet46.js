/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function(nums) {
    // 回溯写法

    const re = []
    const pages = []
    
    function inner(count){
        if(count === nums.length) {
            re.push([...pages])
            return
        }
        nums.forEach(num => {
            if(pages.includes(num)) {
                return
            }
            pages.push(num)
            inner(count + 1)
            pages.pop()
        })
    }

    inner(0)
    return re;


}

console.log(permute([1,2,3]));



var permute1 = function(nums) {

    function addOne(originArr, one) {
        let re = []
        originArr.forEach(arr => {
            let tmp = []
            for(let i = 0; i <= arr.length; i++) {
                const newarr = [...arr]
                newarr.splice(i, 0, one)
                tmp.push(newarr)
            }
            re = re.concat(tmp)
        })
        return re
    }

    let rearr = [[nums[0]]]
    for(let i = 1; i < nums.length; i++) {
        rearr = addOne(rearr, nums[i])
    }
    return rearr
};
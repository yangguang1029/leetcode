/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {

    const arr2dic = function(nums){
        const dic = {}
        nums.forEach(item=>{
            const c = dic[`${item}`]
            if(!c) {
                dic[`${item}`] = 1
            }else {
                dic[`${item}`] = c+1
            }
        })
        return dic
    }
    const dic1 = arr2dic(target)
    const dic2 = arr2dic(arr)

    let issame = true
    for(let key in dic1) {
        if(dic1[key] !== dic2[key]) {
            issame = false
            break
        }
    }
    for(let key in dic2) {
        if(dic1[key] !== dic2[key]) {
            issame = false
            break
        }
    }
    return issame
    
};
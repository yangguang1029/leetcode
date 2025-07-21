/**
 * @param {number[]} materials
 * @param {number[][]} cookbooks
 * @param {number[][]} attribute
 * @param {number} limit
 * @return {number}
 */
var perfectMenu = function(materials, cookbooks, attribute, limit) {
    // 要求饱腹度 attribute[1]的和大于limit，美味度attribute[0]最大值
    // 每种料理只能做一次，就是穷尽所有的组合
    let maxDel = -1

    function track(index, prevMaterial, prevAttribute) {
        // 第index个料理还没有开始做，先判断食材够不够
        const cb = cookbooks[index]
        let isMaterialEnlungh = true
        let newMaterial = []
        for(let i = 0; i < materials.length; i++) {
            const newi = prevMaterial[i] + cb[i]
            newMaterial[i] = newi
            if(newi > materials[i]) {
                isMaterialEnlungh = false
                break
            }
        }
        if(!isMaterialEnlungh) {
            return
        }
        const at = attribute[index]
        // 判断饱腹度如果大于等于limit
        const newAttribute = [at[0]+ prevAttribute[0], at[1]+ prevAttribute[1]]
        const [currentDel, currentFull] = newAttribute
        if(currentFull >= limit && currentDel > maxDel) {
            maxDel = currentDel
        }
        for(let newindex = index+1; newindex < cookbooks.length; newindex++) {
            track(newindex, newMaterial, newAttribute)
        }
    }

    for(let i = 0; i < cookbooks.length; i++) {
        track(i, [0,0,0,0,0], [0,0])
    }
    return maxDel

};

const materials = [3,2,4,1,2]
let cookbooks = [[1,1,0,1,2],[2,1,4,0,0],[3,2,4,1,0]]
let attribute = [[3,2],[2,4],[7,6]]
let limit = 5

console.log(perfectMenu(materials, cookbooks, attribute, limit));
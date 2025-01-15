/**
 * @param {number[]} balls
 * @return {number}
 */
var getProbability = function(balls) {
    let count = balls.reduce((prev, curr) => prev+curr, 0)
    // 先用笨方法，把所有的可能性都列举出来
    const colors = Object.keys(balls)
    let result = colors
    let index = 1
    const getColorDic = function(str) {
        let dic = {}
        colors.forEach(color => dic[color] = 0)
        for(let i = 0; i < str.length; i++) {
            let color = str[i]
            dic[color] += 1
        }
        return dic
    }
    const getCount = function(str, startIndex, endIndex) {
        let count = 0
        let index = startIndex
        while(index < endIndex) {
            count += 1
            let tmp = index+1
            let c = str[index]
            while(tmp < endIndex && str[tmp] === c) {
                tmp += 1
            }
            index = tmp
        }
        return count
    }
    while(index < count) {
        let newarr = []
        result.forEach(item => {
            let dic = getColorDic(item)
            colors.forEach(color => {
                let leftcount = balls[color] - dic[color]
                if(leftcount > 0) {
                    newarr.push(item + color)
                }
            })
        })
        index += 1
        result = newarr
    }
    let re = 0
    result.forEach(item => {
        if(getCount(item, 0, count/2) === getCount(item, count/2, count)) {
            re += 1
        }
    })
    return re/result.length
    
};

let balls = [2,1,1]
balls = [1,2,1,2]

console.log(getProbability(balls));
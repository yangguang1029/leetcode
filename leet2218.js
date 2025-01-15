/**
 * @param {number[][]} piles
 * @param {number} k
 * @return {number}
 */

// 题解确实使用动态规划做，就是状态方程不好列

var maxValueOfCoins1 = function(piles, k){

}

// 用动态规划列出取k次的所有取法出来
// 超出了时间限制
var maxValueOfCoins1 = function(piles, k) {
    const len = piles.length
    let paths = new Set()
    paths.add(new Array(len).fill(0).join(','))
    let index = 0
    while(index < k) {
        let news = new Set()
        paths.forEach(path => {
            const patharr = path.split(',')
            patharr.forEach((item, i) => {
                const c = parseInt(item)
                if(c < piles[i].length) {
                    const tmp = [...patharr]
                    tmp[i] = c+1
                    news.add(tmp.join(','))
                }
            })
        })
        paths = news
        index += 1
    }
    let max = 0
    paths.forEach(path => {
        let tmp = 0
        const patharr = path.split(',')
        patharr.forEach((item, i)=>{
            let c = parseInt(item)
            for(let j = 0; j < c; j++) {
                tmp += piles[i][j]
            }
        })
        if(tmp> max) {
            max = tmp
        }
    })
    
    return max
    
};
let piles = [[100],[100],[100],[100],[100],[100],[1,1,1,1,1,1,700]]
piles = [[48,14,23,38,33,79,3,52,73,58,49,23,74,44,69,76,83,41,46,32,28]]
piles = [[1,100,3],[7,8,9]]
let k = 7
k=10
k=2

console.log(maxValueOfCoins(piles, k));
/**
 * @param {number[][]} grid
 * @return {number[][]}
 */

// 我理解这个题目主要是考将问题转换为代码的能力
//首先抽象出一个方法，求其左上角数组，求其右下角数组，然后一个方法求数组中不同值的数量
var differenceOfDistinctValues = function(grid) {
    const rcount = grid.length
    const ccount = grid[0].length

    const diffcount = function(arr) {
        return new Set(arr).size
    }

    const getTopleft = function(row, col) {
        let arr = []
        let r = row-1
        let c = col - 1
        while(r>=0 && c>=0) {
            arr.push(grid[r][c])
            r-=1
            c-=1
        }
        return arr
    }
    const getBottomright = function(row, col) {
        let arr = []
        let r = row+1
        let c = col+1
        while(r<rcount && c<ccount) {
            arr.push(grid[r][c])
            r+=1
            c+=1
        }
        return arr
    }

    return grid.map((row, rowindex) => {
        return row.map((item, colindex) => {
            const tl = getTopleft(rowindex, colindex)
            const br = getBottomright(rowindex, colindex)
            return Math.abs(diffcount(tl) - diffcount(br))
        })
    })
    
};
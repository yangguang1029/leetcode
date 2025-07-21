/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function(img) {
    const rowc = img.length
    const colc = img[0].length
    return img.map((row, rowindex)=> {
        const rowmax = Math.min(rowc, rowindex+2)
        const rowmin = Math.max(rowindex-1, 0)
        return row.map((item, colindex)=>{
            const colmax = Math.min(colc, colindex+2)
            const colmin = Math.max(colindex-1, 0)
            let sum = 0
            let count = 0
            for(let i = rowmin; i < rowmax; i++) {
                for(let j = colmin; j < colmax; j++) {
                    sum += img[i][j]
                    count += 1
                }
            }
            return Math.floor(sum/count)
        })
    })
    
};

let img =[[1,1,1],[1,0,1],[1,1,1]]
console.log(imageSmoother(img));
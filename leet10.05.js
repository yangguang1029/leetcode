/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var findString = function(words, s) {
    let newarr = []
    words.forEach((item, index) => {
        if(item !== '') {
            newarr.push(`${item}-${index}`)
        }
    })
    let left = 0
    let right = newarr.length -1
    while(left < right) {
        const mid = Math.floor((left+right)/2)
        const [item, index] =  newarr[mid].split('-')
        if(item === s) {
            return parseInt(index)
        }
        if(item < s) {
            left = mid+1
        }else {
            right = mid
        }
    }
    const [lastitem, lastindex] =  newarr[right].split('-')
    return lastitem === s ? parseInt(lastindex) : -1
};
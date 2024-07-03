/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    const len = citations.length
    citations.sort((left,right)=>right-left)
    let i = 0;
    while(i < len && citations[i] > i+1 ) {
        i += 1;
    }
    if(i === len) {
        return len
    }
    
    return  Math.max(citations[i], i)
};

console.log(hIndex([3,0,6,1,5]))
console.log(hIndex([4,4,0,0]))
// console.log(hIndex([1,3,1]))

// console.log(hIndex([3,3,0,0]))
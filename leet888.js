/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(aliceSizes, bobSizes) {

    const alicesum = aliceSizes.reduce((prev, current)=>prev+current, 0)
    const bobsum = bobSizes.reduce((prev, current)=>prev+current, 0)
    const bobset = new Set(bobSizes)
    for(let i = 0; i < aliceSizes.length; i++) {
        const item = aliceSizes[i]
         const bobitem = item + (bobsum - alicesum)/2
        if(bobset.has(bobitem)) {
            return [item, bobitem]
        }
    }
    return []
    
};

console.log(fairCandySwap([1,1], [2,2]));
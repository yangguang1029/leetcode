/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    if(numerator === 0) {
        return '0'
    }
    
    const isNeg = (numerator<0 && denominator>0) || (numerator>0 && denominator<0)
    let newnume = Math.abs(numerator)
    let newdeno = Math.abs(denominator)
    let restr = (isNeg ? '-' : '') + Math.floor(newnume/newdeno)
    if(newnume % newdeno !== 0) {
        restr += '.'
    }
    newnume = newnume % newdeno
    const numes = []
    let result = []
    while(newnume != 0 && result.length < 10000) {
         // 发现
         let loopindex = numes.indexOf(newnume)
         if(loopindex >= 0) {
             result.splice(loopindex, 0, '(')
             result.push(')')
             break
         }
        numes.push(newnume)
        result.push(Math.floor(newnume*10 / newdeno))
        
        newnume = (newnume*10) % newdeno
    }
    
    return restr + result.join('')
    
};

// console.log(fractionToDecimal(1,-1));
// console.log(fractionToDecimal(1,2));
// console.log(fractionToDecimal(1,3));
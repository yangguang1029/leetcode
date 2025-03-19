/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function(s) {
    let stack = []
    for(let i = 0; i < s.length; i++) {
        const c = s.charAt(i)
        if(c === '['){
            stack.push(c)
        }else{
            if(stack.length > 0){
                stack.pop()
            }
        }
    }
    return Math.ceil(stack.length/2)
    
};
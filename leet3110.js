/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    return s.split('').reduce((prevalue, current, currentindex)=>{
        if(currentindex < s.length - 1) {
            return prevalue + Math.abs(s.charCodeAt(currentindex) - s.charCodeAt(currentindex+1))
        }
        return prevalue
    },0)
    
};

console.log(scoreOfString('hello'))
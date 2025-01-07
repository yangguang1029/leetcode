/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */

var isInterleave = function(s1, s2, s3) {
    const len1 = s1.length
    const len2 = s2.length
    const len3 = s3.length
    if(len3 !== len1+len2) {
        return false
    }
    const result = []
    for(let i = 0; i <= len1; i++) {
        let row = [true]
        for(let j = 0; j < len2; j++) {
            let p = i+j-1
            let tmp = true
            if(i>0){    
                tmp = tmp || (result[i-1][j] && s3[p] === s1[i])
            }
            if(j>0) {
                tmp = tmp || (result[i][j-1] && s3[p] === s1[j])
            }
            row[j] = tmp

        }
        result[i] = row
        
    }
    return result[len1][len2]
   
    

}

var isInterleave1 = function(s1, s2, s3) {
    if(s3 === '') {
        return s1 === '' && s2 === ''
    }
    if(s3.length !== s1.length + s2.length) {
        return false
    }

    // s1出i个字符，s2出j个字符，那么s3总共就是i+j个字符
    
    const result = []
    for(let i = 0; i <= s1.length; i++) {
        result[i] = []
    }
    for(let i = 0; i <= s1.length; i++) {
        for(let j = 0; j <= s2.length; j++) {
            const s = s3.slice(0,i+j)
            if(i === 0) {
                result[i][j] = s === s2.slice(0,j)
            }else {
                if(j === 0) {
                    result[i][j] = s === s1.slice(0,i)
                }else {
                    const c = s[s.length-1]
                    result[i][j] = false
                    if(result[i-1][j] && c === s1[i-1]) {
                        result[i][j] = true
                    }
                    if(result[i][j-1] && c === s2[j-1]){
                        result[i][j] = true
                    }
                    // if( i >0 && j > 0 && result[i-1][j-1] &&( (c === s1[i] && s[s.length-2] === s2[j]) || (c === s2[j] && s[s.length-2] === s1[i]))) {
                    //     result[i][j] = true
                    // }
                    
                }

            }
        }
    }
    return result[s1.length][s2.length]
    
    
};

const s1 = "aabcc"
const s2 = "dbbca"
const s3 = "aadbbcbcac"
console.log(isInterleave1(s1,s2,s3));
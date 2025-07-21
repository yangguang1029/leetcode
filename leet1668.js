/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
    // 忘了要求是连续重复了
    const slen = sequence.length
    const wlen = word.length
    //先转成01数组
    let arr = []
    for(let index =0; index < slen; index++) {
         if(index < wlen-1) {
            arr.push(false)
        }
        let start = index-wlen+1
        arr.push(sequence.slice(start, index+1) === word)
    }
    
    let ans = []
    for(let i = 0; i < slen; i++) {
        if(i < wlen - 1) {
            ans[i] = {
                max: 0,
                count: 0
            }
            continue
        }
        if(i === wlen - 1) {
            ans[i] = {
                    count: arr[i] ? 1 : 0,
                    max: arr[i] ? 1 : 0,
                }
                continue
        }
        if(arr[i]) {
            if(i >= wlen) {
                const {count, max} = ans[i-wlen]
                ans[i] = {
                    count: count+1,
                    max: Math.max(count+1, max)
                }
            }
        }else {
            ans[i] = ans[i-1]
        }
    }
    return ans[slen-1].max
};

let sequence = "ababc"
let word = "ab"
sequence = "ababc"
word = "ba"
word='ac'
sequence = "aaabaaaabaaabaaaabaaaabaaaabaaaaba"
word ="aaaba"
sequence='a'
word ='a'
sequence='baba'
word ='b'

console.log(maxRepeating(sequence, word));
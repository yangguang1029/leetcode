/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getLongestSubsequence = function(words, groups) {
    const len = groups.length
    let arr = [0] // arr存的是index
    let index = 1
    while(index < len) {
        const lastindex = arr[arr.length-1]
        if(groups[index] !== groups[lastindex]) {
            arr.push(index)
        }
        index += 1
    }
    let ans = arr.map(item => words[item])
    return ans
};

let words = ["e","a","b"]
let groups = [0,0,1]

words = ["a","b","c","d"]
groups = [1,0,1,1]

console.log(getLongestSubsequence(words, groups));
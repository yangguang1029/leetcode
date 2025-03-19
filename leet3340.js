/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(num) {
    const arr = num.split('').map(item => parseInt(item))
    let jishu = 0
    let oushu = 0
    for(let i = 0;i<arr.length;i++){
        if(i%2===0){
            oushu+=arr[i]
        }else{
            jishu+=arr[i]
        }
    }
    return jishu === oushu
};
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getStrongest1 = function(arr, k) {
    const len = arr.length
    arr.sort((left,right)=>left-right)
    const mid = arr[Math.floor((len-1)/2)]
    
    arr.sort((left,right)=>{
        if(left === right) {
            return 0
        }
        let result =  (Math.abs(left-mid) > Math.abs(right-mid)) || ((Math.abs(left-mid) === Math.abs(right-mid)) && (left>right))
        return result ? 1 : -1
    })
    return arr.slice(len-k,len)    
};

// 双指针
var getStrongest = function(arr, k) {
    const len = arr.length
    arr.sort((left,right)=>left-right)
    const mid = arr[Math.floor((len-1)/2)]
    
    let leftindex = 0
    let rightindex = len-1
    let re = []
    let c = 0
    while(leftindex <= rightindex && c < k) {
        let left = arr[leftindex]
        let right = arr[rightindex]
        if((Math.abs(left-mid) > Math.abs(right-mid)) || ((Math.abs(left-mid) === Math.abs(right-mid)) && (left>right))){
            re.push(left)
            leftindex+=1
        }else {
            re.push(right)
            rightindex-=1
        }
        c+=1
        
    }  
    
    return re
};


let arr = [1,2,3,4,5]
arr = [-7,22,17,3]
arr=[6,7,11,7,6,8]
let k=2
k=5

console.log(getStrongest(arr,k));
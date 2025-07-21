/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    nums.sort((l,r)=>r-l)
    this.knums = nums.slice(0,k)
    if(k > nums.length) {
        // 题目要求，k最多为nums.length+1
        this.knums.push(Number.MIN_SAFE_INTEGER)
    }
    this.k = k
    
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    let lastindex = this.k-1
    const knums = this.knums
    if(val > knums[lastindex]) {
        let i = lastindex
        while(i >= 1 && val > knums[i-1]) {
            knums[i] = knums[i-1]
            i -=1
        }
        knums[i] = val
    }
    return knums[lastindex]
};


let haha = new KthLargest(3, [4,5,8,2])
console.log(haha.add(3));
console.log(haha.add(5));
console.log(haha.add(10));
console.log(haha.add(9));
console.log(haha.add(4));


/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
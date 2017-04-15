/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this._nums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this._nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    var re = this._nums.slice(0);
    for(var i = 0,len = re.length; i < len; i++) {
        var rand = Math.floor(Math.random() * len);
        var tmp = re[i];
        re[i] = re[rand];
        re[rand] = tmp;
    }
    return re;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
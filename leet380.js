// hash 加变长数组
// 每当加入一个元素时，以其值为 key，当前数组长度为 v 存起来，这个元素放到数组最后一位
//删除时，获取到位置后，删除。但为了保证数组不会出现越来越多的空位，需要将数组最后一个元素挪过去，并重新设定其 hash 值


var RandomizedSet = function() {
    this.arr = []
    this.dic = {}

};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.dic[val] !== undefined) {
        return false;
    }
    this.dic[val] = this.arr.length;
    this.arr.push(val)
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(this.dic[val] === undefined) {
        return false;
    }
    const index = this.dic[val]
    this.dic[val] = undefined
    const len = this.arr.length
    if(len > 1) {
        const lastv = this.arr[len -1]
        this.arr[index] = lastv
        this.dic[lastv] = index
    }
    this.arr.length = len-1
    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return this.arr[Math.floor(Math.random() * this.arr.length)]
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
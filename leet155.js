/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this._nums = [];
    this._mins = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this._nums.push(x);
    let mins = this._mins;
    let minlen = mins.length;
    if (minlen === 0 || mins[minlen - 1] >= x) {
        mins.push(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let num = this._nums.pop();
    let mins = this._mins;
    if (mins[mins.length - 1] === num) {
        mins.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this._nums[this._nums.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this._mins[this._mins.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var obj = Object.create(MinStack).createNew()
obj.push(0)
obj.push(1)
console.log(obj.getMin());
obj.push(0)
console.log(obj.getMin());
obj.pop();
console.log(obj.getMin());
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this._nums = [];
    this._min = null;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this._nums.push(x);
    if(x < this._min) {
    	this._min = x;
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this._nums.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this._nums[this._nums.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
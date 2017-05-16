/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.spush = [];
    this.spop = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    let spop = this.spop;
    let spush = this.spush;
    if (spop.length > 0) {
        while (spop.length > 0) {
            spush.push(spop.pop());
        }
    }
    spush.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    let spop = this.spop;
    let spush = this.spush;
    if (spush.length > 0) {
        while (spush.length > 0) {
            spop.push(spush.pop());
        }
    }
    return spop.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    let spop = this.spop;
    let spush = this.spush;
    if (spush.length > 0) {
        while (spush.length > 0) {
            spop.push(spush.pop());
        }
    }
    return spop[spop.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.spush.length === 0 && this.spop.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = Object.create(MyQueue).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
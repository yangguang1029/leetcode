/**
 * Initialize your data structure here.
 */
 var MyStack = function() {
  this.list = []
  this.list2 = []
  this.topnum = null
};

/**
* Push element x onto stack. 
* @param {number} x
* @return {void}
*/
MyStack.prototype.push = function(x) {
  this.list.push(x)
  this.topnum = x
};

/**
* Removes the element on top of the stack and returns that element.
* @return {number}
*/
MyStack.prototype.pop = function() {
  let tmp = this.list2
  while(this.list.length > 1) {
    let num = this.list.splice(0,1)[0]
    this.topnum = num
    tmp.push(num)
  }
  let top = this.list.splice(0,1)[0]
  this.list2 = this.list
  this.list = tmp
  return top
};

/**
* Get the top element.
* @return {number}
*/
MyStack.prototype.top = function() {
  return this.topnum
};

/**
* Returns whether the stack is empty.
* @return {boolean}
*/
MyStack.prototype.empty = function() {
  return this.list.length === 0
};

// * Your MyStack object will be instantiated and called as such:
var obj = new MyStack()
obj.push(1)
obj.push(2)
var param_2 = obj.pop()//2
obj.push(3)
var param_3 = obj.pop()//3
var param_4 = obj.top()//1
var param_5 = obj.empty()
console.log(param_2)
console.log(param_3)
console.log(param_4)

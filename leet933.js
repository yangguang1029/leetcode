
var RecentCounter = function() {
  this.arr = []  

};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    let len = this.arr.length
    let i = len - 1
    while(i >= 0 && (t - this.arr[i] <= 3000)) {
      i--
    }
    
    if(i >= 0) {
      this.arr = this.arr.slice(i+1)
    }
    this.arr.push(t)
    return this.arr.length
};


var obj = new RecentCounter()
console.log(obj.ping(0))
console.log(obj.ping(1))
console.log(obj.ping(3000))
console.log(obj.ping(3002))
console.log(obj.ping(8000))
console.log(obj.ping(9000))


/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
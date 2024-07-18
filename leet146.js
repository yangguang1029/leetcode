/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    // 用一个栈存储 key，
    this.map = new Map()
    this.keys = new Array()
    this.capacity = capacity

};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    return this.map.get(key) || -1

};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    const keys = this.keys
    // 检查是否超长
    if(keys.length === this.capacity) {
        const key = keys.shift()
        this.map.delete(key)
    }
    if(this.map.has(key)) {

    }
    keys.push(key)
    this.map.set(key, value)
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
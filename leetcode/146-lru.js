/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.cache = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const saved = this.cache.get(key);
  if (saved != null) {
    this.cache.delete(key);
    this.cache.set(key, saved);
    return saved;
  }

  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (!this.cache.has(key) && this.cache.size >= this.capacity) {
    this.cache.delete(this.cache.keys().next().value);
  } else {
    this.cache.delete(key);
  }

  this.cache.set(key, value);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

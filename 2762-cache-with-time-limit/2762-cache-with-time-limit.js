class CacheMap {
    cacheArray = []

    constructor(){}

    get = (key) => {
        const date = new Date()
        const currentTime = date.getTime();
        const value = this.cacheArray[key]
        if(!value) return undefined
        const [cachedValue, expiredTime] = value
        if(expiredTime <= currentTime) return undefined

        return cachedValue
    }

    set = (key, value, duration) => {
        const date = new Date()
        const expiredTime = date.getTime() + duration

        const alreadyHasValue = this.get(key) !== undefined
        
        this.cacheArray[key] = [value, expiredTime]
        return alreadyHasValue
    }

    size = () => {
        const date = new Date()
        const currentTime = date.getTime();
        
        return this.cacheArray.filter(([cachedValue, expiredTime]) => {
            return expiredTime > currentTime
        }).length
    }
}

var TimeLimitedCache = function() {
    this.map = new CacheMap();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
   const cachedValue = this.map.get(key);
   this.map.set(key, value, duration);

   return Boolean(cachedValue);
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    const cachedValue = this.map.get(key);
    return cachedValue ?? -1
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return this.map.size();
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
type Fn = (...params: number[]) => number

function memoize(fn: Fn): Fn {
    const cacheMap = new Map();
    return function(...args) {
        const key = args.join(',');
        if(cacheMap.has(key)) return cacheMap.get(key)

        const value = fn(...args)
        cacheMap.set(key, value)
        return value;
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 0;
    let right = Math.ceil(x / 2);
    let mid = Math.floor((right + left) / 2);

    while(true){
        if(compare(mid, x)) return mid

        if(mid ** 2 >= x){
            right = mid - 1;
        } else {
            left = mid + 1;
        }
        mid = Math.floor((right + left) / 2)
    }

    function compare(value, x){
        return value ** 2 <= x && (value + 1) ** 2 > x
    }
};
type MultiDimensionalArray = (number | MultiDimensionalArray)[];

// 어떻게 펼치지 ? 
var flat = function (arr:  MultiDimensionalArray, n: number):  MultiDimensionalArray {
    if(n === 0) return arr
    const result = [];
    const flatArray = (arr, n) => {
        arr.forEach((items) => {
            if(typeof items === 'number' || n === 0){
                result.push(items)
                return;
            }
            flatArray(items, n - 1)
        })    
    }

    flatArray(arr, n)

    return result
};

function reverse(x: number): number {
    if(x === 0) return x
    let isPositiveNumber = x > 0
    let result = 0;
    let i = 0;

    x = Math.abs(x)
    let newNum = x;
    while(newNum > 0){
        newNum = Math.floor(newNum / 10)
        if(newNum > 0){
            i++
        }
    }

    while(x > 0){
        result = result + (x % 10) * (10 ** i)
        x = Math.floor(x / 10)
        i--
    }

    if(result >= 2 ** 31) return 0

    return isPositiveNumber ? result : result * (-1)
};
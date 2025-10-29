function smallestNumber(n: number): number {
    let i = 0;
    while((n / 2 ** i) >= 1){
        i++
    }

    return parseInt("1".repeat(i), 2)
};
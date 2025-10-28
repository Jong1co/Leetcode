function convert(s: string, numRows: number): string {
    const t = numRows - 1;
    if(t === 0) return s;

    const len = s.length;
    let result = '';

    (() => {
        let n = 1;
        while(s[(2 * n - 2) * t]){
            result += s[(2 * n - 2) * t]
            n++;
        }
    })()


    for(let i = 1; i < t; i++){
        (() => {
            let n = 1;
            while(s[(2 * n - 2) * t + i]){
                result += s[(2 * n - 2) * t + i]
                if(s[(2 * (n + 1) - 2) * t - i]){
                    result += s[(2 * (n + 1) - 2) * t - i]
                }
                n++
            }
        })()
    }

    (() => {
        let n = 1;
        while(s[(2 * n - 1) * t]){
            result += s[(2 * n - 1) * t]
            n++
        }
    })()

    return result
};
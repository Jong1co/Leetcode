function convert(s: string, numRows: number): string {
    if(numRows === 1) return s;
    const t = numRows - 1;

    const calcIndex = (n: number) => (2 * n - 2) * t

    const getEdgeRow = (i: number) => {
        let n = 1;
        let row = '';
        while(s[calcIndex(n) + i]){
            row += s[calcIndex(n) + i]
            n++;
        }
        return row
    }

    let result = '';
    result += getEdgeRow(0)
    
    for(let i = 1; i < t; i++){
        (() => {
            let n = 1;
            while(s[calcIndex(n) + i]){
                result += s[calcIndex(n) + i]
                if(s[calcIndex(n + 1) - i]){
                    result += s[calcIndex(n + 1) - i]
                }
                n++
            }
        })()
    }

    result += getEdgeRow(t)

    return result
};
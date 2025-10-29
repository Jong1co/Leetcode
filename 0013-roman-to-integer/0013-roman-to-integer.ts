function romanToInt(s: string): number {
    const tree = {
        C: ['M', 'D'],
        X: ['L', 'C'],
        I: ['V', 'X'],
    }

    const score = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let i = 0;
    let result = 0;
    while(i < s.length){
        if(tree[s[i]]){
            if(tree[s[i]].includes(s[i + 1])){
                const v = score[s[i + 1]] - score[s[i]]
                result += v
                i += 2
            } else {
                result += score[s[i]]
                i++    
            }
        } else {
            result += score[s[i]]
            i++
        }
    }

    return result ?? 0
};




    /**

    let 순서 = 0;
    let 결과 = 0;
    while(순서 < s){
        if: tree[s[순서]]{
            if(tree[s[순서]].include(s[순서 + 1])){
                const value = score[s[순서 + 1]] - score[순서]
                result += value
                순서 += 2
            } else {
                result += score[s[순서]]
                순서++
            }
        } else {
            result += score[s[순서]]
            순서++
        }
    }
     */
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let unit = 10;
    const result = []

    const romanMap2 = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    }

    const list2 = [['I', 'V', 'X'], ['X', 'L', 'C'], ['C', 'D', 'M']]

    while(num !== 0){
        const r = num % unit;
        result.push(r)
        num -= r;
        unit *= 10;
    }

    return result.map((item, index) => {
        const keyList = list2[index]
        if(!keyList) {
            return 'M'.repeat(item / 1000)    
        }

        const [a, b, c] = keyList
        if(romanMap2[c] - romanMap2[a] === item) return `${a}${c}`
        if(romanMap2[b] - romanMap2[a] === item) return `${a}${b}`
        
        const q = Math.floor(item / romanMap2[b])
        const r = (item % romanMap2[b]) / 10 ** index

        return b.repeat(q) + a.repeat(r)
    }).reverse().join('')

    // 9, 5, 4, 1로 해서 아니면?
    // 9 > x > 5일 경우는 5 * 몫 + 나머지 * 1

};
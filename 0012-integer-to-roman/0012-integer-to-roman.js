/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let unit = 1000
  const result = []

  const romanMap2 = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  const list2 = [
    ['M', 'M', 'M'],
    ['C', 'D', 'M'],
    ['X', 'L', 'C'],
    ['I', 'V', 'X'],
  ]

  while (unit >= 1) {
    const q = Math.floor(num / unit) * unit
    result.push(q)
    num %= unit
    unit /= 10
  }

  return result
    .map((item, index) => {
      if(!item) return ''
      const keyList = list2[index]

      const [a, b, c] = keyList
      if (romanMap2[c] - romanMap2[a] === item) return `${a}${c}`
      if (romanMap2[b] - romanMap2[a] === item) return `${a}${b}`

      const q = Math.floor(item / romanMap2[b])
      const r = (item % romanMap2[b]) / 10 ** (3 - index)

      return b.repeat(q) + a.repeat(r)
    })
    .join('')
}
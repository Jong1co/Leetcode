/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let minY = 0;
    let minX = 0;
    let maxY = n - 1;
    let maxX = n - 1;
    let num = 1;

    const result = Array.from({length: n}, () => Array.from({length: n}, () => 0));

    while(num < n ** 2){
        let currentY = minY;
        let currentX = minX;

        while(currentX < maxX && num <= n ** 2){
            result[currentY][currentX] = num;
            num++
            currentX++
        }

        if(num >= n ** 2) return result

        maxX -= 1;

        while(currentY < maxY && num <= n ** 2){
            result[currentY][currentX] = num;
            num++
            currentY++
        }

        maxY -= 1;

        while(currentX > minX && num <= n ** 2){
            result[currentY][currentX] = num;
            num++
            currentX--
        }

        minX += 1;

        while(currentY > minY && num <= n ** 2){
            result[currentY][currentX] = num;
            num++
            currentY--
        }

        minY += 1;
    }

    if(n % 2 === 1) {
        let index = Math.floor(n / 2)
        result[index][index] = num
    }

    return result
};
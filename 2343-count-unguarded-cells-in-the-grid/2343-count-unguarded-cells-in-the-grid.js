/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} guards
 * @param {number[][]} walls
 * @return {number}
 */
var countUnguarded = function(m, n, guards, walls) {
       let result = m * n - guards.length - walls.length;
    const WALL = -1;
    const GUARDED = 2;
    const GUARD = 1;  

    const metrix = Array.from({length: m}, () => Array.from({length: n}, () => 0));

    walls.forEach(([y, x]) => metrix[y][x] = WALL);
    guards.forEach(([y, x]) => metrix[y][x] = GUARD);

    guards.forEach(([y, x]) => {
        // Top
        for (let newY = y - 1; newY >= 0; newY--) {
            if (metrix[newY][x] === WALL || metrix[newY][x] === GUARD) break;
            if (metrix[newY][x] === 0) {
                metrix[newY][x] = GUARDED;
                result--;
            }
        }

        // Bottom
        for (let newY = y + 1; newY < m; newY++) {
            if (metrix[newY][x] === WALL || metrix[newY][x] === GUARD) break;
            if (metrix[newY][x] === 0) {
                metrix[newY][x] = GUARDED;
                result--;
            }
        }

        // Left
        for (let newX = x - 1; newX >= 0; newX--) {
            if (metrix[y][newX] === WALL || metrix[y][newX] === GUARD) break;
            if (metrix[y][newX] === 0) {
                metrix[y][newX] = GUARDED;
                result--;
            }
        }

        // Right
        for (let newX = x + 1; newX < n; newX++) {
            if (metrix[y][newX] === WALL || metrix[y][newX] === GUARD) break;
            if (metrix[y][newX] === 0) {
                metrix[y][newX] = GUARDED;
                result--;
            }
        }
    });

    return result;

    // const stack = guards.reduce((acc, coords) => {
    //     metrix[coords[0]][coords[1]] = false
    //     acc.push({coords, command: 'T'})
    //     acc.push({coords, command: 'B'})
    //     acc.push({coords, command: 'L'})
    //     acc.push({coords, command: 'R'})
    //     return acc
    // }, [])

    // while(stack.length){
    //     const {coords, command} = stack.pop();
    //     const [commandY, commandX] = direction[command];
    //     const x = coords[1] + commandX;
    //     const y = coords[0] + commandY;
    //     const targetCell = metrix?.[y]?.[x]
    //     if(targetCell === undefined || targetCell === 'W') continue;
    //     // true
    //     if(metrix[y][x]){
    //         metrix[y][x] = false;
    //         result -= 1;
    //     }
    //     const nextX = x + commandX;
    //     const nextY = y + commandY;
    //     const nextCell = metrix?.[y]?.[x]
    //     if(nextCell !== undefined && nextCell !== 'W'){
    //         stack.push({coords: [y, x], command})
    //     }
    // }
};
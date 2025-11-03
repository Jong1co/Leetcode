/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
  // while문을 돈다 i = 0부터
  // 연속된 색상이 나오면 해당 인덱스부터 다른 색상이 나오기 전까지 루프를 돈다
  // neededTime으로 값을 가져오고, 가장 작은것 하나만 제외하면 모두 result에 더한다.
  //

    let result = 0;

    for(let i = 0; i < colors.length - 1; i++){
        if(colors[i] !== colors[i + 1]){
            continue;
        }
        let j = i + 1;
        let max = neededTime[i]
        let sum = max
        while(colors[i] === colors[j]){
            const time = neededTime[j];
            max = Math.max(max, time);
            sum += time;
            j++;
        }
        result = result + sum - max;
        i = j - 1
    }
    return result
};
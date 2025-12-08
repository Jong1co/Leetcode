var countTriples = function(n) {
    let ans = 0;
    for (let u = 3; u * u < n * 2; u += 2) {
        for (let v = 1; v < u && u * u + v * v <= n * 2; v += 2) {
            if (gcd(u, v) === 1) {
                ans += Math.floor(n * 2 / (u * u + v * v));
            }
        }
    }
    return ans * 2;
};

function gcd(a, b) {
    while (a !== 0) {
        [a, b] = [b % a, a];
    }
    return b;
}
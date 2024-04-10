const fs = require('fs');

function countLuckyTickets(N) {
    if (N % 2 !== 0) return 0;
    
    const dp = new Array(N / 2 + 1).fill(null).map(() => new Array(N * 9 / 2 + 1).fill(0));
    dp[0][0] = 1;

    for (let i = 1; i <= N / 2; i++) {
        for (let j = 0; j <= i * 9; j++) {
            for (let k = 0; k <= 9; k++) {
                if (j - k >= 0) {
                    dp[i][j] += dp[i - 1][j - k];
                }
            }
        }
    }

    let total = 0;
    for (let j = 0; j <= N * 9 / 2; j++) {
        total += dp[N / 2][j] * dp[N / 2][j];
    }

    return total;
}

fs.readFile('INPUT.TXT', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const N = parseInt(data.trim());
    const result = countLuckyTickets(N);

    fs.writeFile('OUTPUT.TXT', result.toString(), (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Output has been saved to OUTPUT.txt');
    });
});
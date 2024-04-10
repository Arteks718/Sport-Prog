function countNumbers(N, K) {
    if (!(N >= 2 && K >= 2 && K <= 10 && (N + K) >= 4 && (N + K) <= 18)) {
        return 0;
    }

    let count = 0;

    function helper(digitsLeft, prevDigit) {
        if (digitsLeft === 0) {
            return 1;
        }

        let total = 0;
        for (let digit = 0; digit < K; digit++) {
            if (digit !== 0 || prevDigit !== 0) {
                total += helper(digitsLeft - 1, digit);
            }
        }
        return total;
    }

    for (let startDigit = 1; startDigit < K; startDigit++) {
        count += helper(N - 1, startDigit);
    }

    return count;
}


const fs = require('fs');

fs.readFile('INPUT.txt', 'utf8', function(err, data) {
  if (err) {
      return console.log(err);
  }
  const [N, K] = data.trim().split(' ').map(Number);
  const result = countNumbers(N, K);
  fs.writeFile('OUTPUT.txt', result.toString(), function(err) {
      if (err) {
          return console.log(err);
      }
      console.log('Output has been saved to OUTPUT.txt');
  });
});

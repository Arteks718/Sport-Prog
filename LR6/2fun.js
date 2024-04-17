const isMultipleOf3Or5 = num => num % 3 === 0 || num % 5 === 0;

const generateNumbers = n => Array.from({ length: n }, (_, i) => i + 1);

const sumMultiplesOf3Or5 = limit =>
  generateNumbers(limit - 1)
    .filter(isMultipleOf3Or5)
    .reduce((acc, curr) => acc + curr, 0);

const result = sumMultiplesOf3Or5(1000);
console.log(result);

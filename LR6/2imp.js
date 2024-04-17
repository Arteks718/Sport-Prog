function isMultipleOf3Or5(num) {
  return num % 3 === 0 || num % 5 === 0;
}

function sumMultiplesOf3Or5(limit) {
  let sum = 0;
  for (let i = 1; i < limit; i++) {
    if (isMultipleOf3Or5(i)) {
      sum += i;
    }
  }
  return sum;
}

const result = sumMultiplesOf3Or5(1000);
console.log(result);

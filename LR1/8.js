//Звести число a в натуральну ступінь n за якомога меншу кількість множень.

function power(a, n) {
  if (n === 0) {
    return 1;
  }

  if (n % 2 === 0) {
    // n - парне число
    const temp = power(a, n / 2);
    return temp * temp;
  } else {
    // n - непарне число
    const temp = power(a, (n - 1) / 2);
    return a * temp * temp;
  }
}

let a = 2;
let n = 10;
console.log(`${a} в ступені ${n} = ${power(a, n)}`);
a = 2;
n = 9;
console.log(`${a} в ступені ${n} = ${power(a, n)}`);

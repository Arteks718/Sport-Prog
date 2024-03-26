// Задані z та y – дві послідовності. Чи можна отримати послідовність z викреслюванням елементів з y.
function isSubsequence(z, y) {
  let zPointer = 0;
  let yPointer = 0;

  while (zPointer < z.length && yPointer < y.length) {
    if (z[zPointer] === y[yPointer]) {
      zPointer++;
    }

    yPointer++;
  }

  return zPointer === z.length;
}

const z = [1, 3, 5];
const y = [1, 2, 3, 4, 5, 6];

if (isSubsequence(z, y)) {
  console.log(
    'Послідовність z можна отримати з послідовності y викреслюючи елементи.'
  );
} else {
  console.log(
    'Послідовність z НЕ можна отримати з послідовності y викреслюючи елементи.'
  );
}

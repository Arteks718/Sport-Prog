// 3.2.3 Задано масив M[1:N] натуральних чисел, упорядкований за не спаданням, тобто: M[1] ← M[2] ← ⋯ ← M[N].
// Написати алгоритм виплати заданої суми S мінімальною кількістю купюр гідністю M(1), ... , M(N).

function findMinimumNotes(M, S) {
  let notesCount = [];
  let remainingSum = S;

  for (let i = 0; i < M.length; i++) {
      const currentNote = M[i];
      const count = Math.floor(remainingSum / currentNote);
      if (count > 0) {
          notesCount.push({ note: currentNote, count });
          remainingSum -= count * currentNote;
      }
  }

  return (!remainingSum) ? notesCount : "Неможливо виплатити задану суму мінімальною кількістю купюр";
}

const M = [200, 100, 50, 20, 10, 5, 2, 1];
const S = 257;

const result = findMinimumNotes(M, S).reverse();
console.log(result);

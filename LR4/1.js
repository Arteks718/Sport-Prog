//3.2.10
function maximizeProfit(tasks, intervals) {
  // Сортуємо задачі за прибутком у спадному порядку
  tasks.sort((a, b) => b['прибуток'] - a['прибуток']);

  // Створюємо масив з інтервалами, які доступні для виконання
  let intervalAvailable = Array(intervals).fill(true);

  let totalProfit = 0;

  tasks.forEach((task) => {
    const deadline = task['дедлайн'];
    const profit = task['прибуток'];

    // Шукаємо доступний інтервал для виконання завдання
    for (let i = Math.min(deadline, intervals) - 1; i >= 0; i--) {
      if (intervalAvailable[i]) {
        intervalAvailable[i] = false;
        totalProfit += profit;
        break;
      }
    }
  });

  return totalProfit;
}

const tasks = [
  { дедлайн: 2, прибуток: 100 },
  { дедлайн: 1, прибуток: 50 },
  { дедлайн: 2, прибуток: 10 },
  { дедлайн: 1, прибуток: 20 },
];

const intervals = 2;

const maxProfit = maximizeProfit(tasks, intervals);
console.log('Максимальний прибуток:', maxProfit);

//3.2.9

function greedyActivitySelection(activities) {
  // Сортуємо дії за часом закінчення
  const sortedActivities = activities.sort((a, b) => a[1] - b[1]);

  const selectedActivities = [];
  let lastEndTime = null;

  // Вибираємо дії, які не перекриваються
  sortedActivities.forEach((activity) => {
    const [start, end] = activity;
    if (lastEndTime === null || start >= lastEndTime) {
      selectedActivities.push(activity);
      lastEndTime = end;
    }
  });

  return selectedActivities;
}

// Приклад використання
const activities = [
  [1, 2],
  [3, 4],
  [0, 6],
  [5, 7],
  [8, 9],
  [5, 9],
];
const selected = greedyActivitySelection(activities);
console.log('Вихідні дані:', selected);

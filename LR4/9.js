//3.2.9

function greedyActivitySelection(activities) {
  const sortedActivities = activities.sort((a, b) => a[1] - b[1]);

  const selectedActivities = [];
  let lastEndTime = null;

  sortedActivities.forEach((activity) => {
    const [start, end] = activity;
    if (lastEndTime === null || start >= lastEndTime) {
      selectedActivities.push(activity);
      lastEndTime = end;
    }
  });

  return selectedActivities;
}

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

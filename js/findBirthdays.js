function getWeekNumber(date) {
  const start = new Date(date.getFullYear(), 0, 1);
  const diff =
    (date - start) / (1000 * 60 * 60 * 24) +
    start.getDay();

  return Math.ceil(diff / 7);
}

function birthdayWeeks(dates) {
  const weekMap = {};

  dates.forEach(d => {
    const week = getWeekNumber(d);
    weekMap[week] = (weekMap[week] || 0) + 1;
  });

  return Object.entries(weekMap).map(([week, count]) => ({
    weekNumber: Number(week),
    birthdays: count
  }));
}

console.log(
  birthdayWeeks([
    new Date(2025, 0, 4),   // Week 1
    new Date(2025, 2, 8),   // Week 10
    new Date(2025, 5, 23),  // Week 26
    new Date(2025, 5, 21)   // Week 26
  ])
);

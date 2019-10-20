export default (days) => {
  let weeks = [];
  let week = [];

  days.forEach((day, index) => {
    if (index % 7 === 0) {
      weeks.push(week);
      week = [];
    }

    week.push(day);

    if (index === days.length - 1) {
      weeks.push(week);
    }
  });
  return weeks;
}
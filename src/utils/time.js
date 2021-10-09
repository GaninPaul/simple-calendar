import { ROWS_COUNT, DAYS_PER_WEEK_COUNT } from "../constants/common";

export const calcCalendarData = (currentMonth) => {
  const list = [];
  const daysInMonth = currentMonth.daysInMonth();
  const monthStartDay = currentMonth.startOf("month").isoWeekday();

  let currentDayNumber = -monthStartDay + 2;
  for (let x = 0; x < ROWS_COUNT; x++) {
    for (let y = 0; y < DAYS_PER_WEEK_COUNT; y++) {
      if (currentDayNumber > 0 && currentDayNumber <= daysInMonth) {
        list.push(currentDayNumber);
      } else {
        list.push("_");
      }
      currentDayNumber++;
    }
  }
  return list;
};

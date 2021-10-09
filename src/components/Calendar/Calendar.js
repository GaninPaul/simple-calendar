import { useEffect, useState } from "react";
import moment from "moment";

import { calcCalendarData } from "../../utils/time";

import { ROWS_COUNT, DAYS_PER_WEEK_COUNT } from "../../constants/common";

import "./Calendar.css";

const ROWS = Array.apply(null, Array(ROWS_COUNT));
const DAYS_PER_WEEK = Array.apply(null, Array(DAYS_PER_WEEK_COUNT));

export const Calendar = ({ onMonthChange }) => {
  const [currentMonth, setCurrentMonth] = useState(
    moment().format("YYYY-MM-DD")
  );
  const [listOfDays, setListOfDays] = useState(moment());

  const onLeftClick = () => {
    const date = moment(currentMonth).subtract(1, "months");
    setCurrentMonth(date.format("YYYY-MM-DD"));
    onMonthChange?.(date);
  };

  const onRightClick = () => {
    const date = moment(currentMonth).add(1, "months");
    setCurrentMonth(date.format("YYYY-MM-DD"));
    onMonthChange?.(date);
  };

  useEffect(() => {
    setListOfDays(calcCalendarData(moment(currentMonth)));
  }, [currentMonth]);

  const renderDay = (rowIndex) => (_, dayIndex) => {
    return (
      <div className="item" key={ROWS_COUNT * rowIndex + 100 * dayIndex}>
        {listOfDays[DAYS_PER_WEEK_COUNT * rowIndex + dayIndex]}
      </div>
    );
  };

  const renderRow = (_, rowIndex) => {
    return (
      <div className="row" key={rowIndex}>
        {DAYS_PER_WEEK.map(renderDay(rowIndex))}
      </div>
    );
  };

  return (
    <div className="calendar">
      <div className="row">
        <button onClick={onLeftClick}>{"<"}</button>
        {moment(currentMonth).format("MMMM")}
        <button onClick={onRightClick}>{">"}</button>
      </div>
      <div className="row">
        <div className="item">Mo</div>
        <div className="item">Tu</div>
        <div className="item">We</div>
        <div className="item">Th</div>
        <div className="item">Fr</div>
        <div className="item">St</div>
        <div className="item">Sa</div>
      </div>
      <div className="table">{ROWS.map(renderRow)}</div>
    </div>
  );
};

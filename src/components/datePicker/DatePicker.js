import React, { useEffect, useState } from "react";
import "./styles.css";
import Calendar from "./Calendar";

const DatePicker = () => {
  const [showYears, setShowYears] = useState(true);
  const [showMonths, setShowMonths] = useState(false);
  const [showDays, setShowDays] = useState(false);
  const [years, setYears] = useState([]);
  const [months, setMonths] = useState([]);
  const [currentDate, setCurrentDate] = useState(null);
  const [weekDays, setWeekDays] = useState([]);
  const [days, setDays] = useState([]);

  const [selectYear, setSelectYear] = useState(null);
  const [counterYear, setCounterYear] = useState(0);
  const [selectWeekDay, setSelectWeekDay] = useState(null);
  const [selectMonth, setSelectMonth] = useState(null);

  const back = () => {
    if (showYears) {
      setCounterYear(counterYear - 6);
      return;
    }

    if (showMonths) {
      console.log(counterYear);
      setCounterYear(counterYear - 1);
      return;
    }
  };

  const next = () => {
    if (showYears) {
      setCounterYear(counterYear + 6);
      return;
    }

    if (showMonths) {
      console.log(counterYear);
      setCounterYear(counterYear + 1);
      return;
    }
  };

  const selectingYear = (year) => {
    setSelectYear(year);
    setCounterYear(year);
    setShowYears(false);
    setShowMonths(true);
  };

  const selectingMonth = (month) => {
    setSelectMonth(month);
    setShowMonths(false);
    setShowDays(true);
  };

  useEffect(() => {
    setYears(Calendar.generateYears(counterYear));
  }, [counterYear]);

  useEffect(() => {
    setCurrentDate({
      monthDay: Calendar.currentMonthDay,
      dayWeek: Calendar.currentWeekDay,
      month: Calendar.currentMonth,
      year: Calendar.currentYear,
      date: Calendar.currentDate,
    });
    setYears(Calendar.generateYears());
    setMonths(Calendar.months);
    setWeekDays(Calendar.weekDays);
    setDays(Calendar.generateMonthDays());
    setCounterYear(Calendar.currentYear);
  }, []);

  return (
    <article className="calendar">
      <header className="calendar__header">
        <button onClick={back} className="calendar__btn_back"></button>
        <button className="calendar__info_date">Months</button>
        <button onClick={next} className="calendar__btn_next"></button>
      </header>
      <section className="calendar__body">
        <ul className="calendar__days">
          {weekDays.map((day) => (
            <li key={day.id} className="calendar__nameWeek">
              {day.name}
            </li>
          ))}
        </ul>
        {showDays && (
          <div className="calendar__month_days">
            {days.map(({ number }) => (
              <button className="calendar__day" key={number}>
                {number}
              </button>
            ))}
          </div>
        )}
        {showMonths && (
          <div className="calendar__months">
            {months.map(({ id, name }) => (
              <button
                onClick={() => selectingMonth(id)}
                className="calendar__month"
                key={id}
              >
                {name}
              </button>
            ))}
          </div>
        )}
        {showYears && (
          <div className="calendar__years">
            {years.map((year) => (
              <button
                onClick={() => selectingYear(year)}
                className="calendar__year"
                key={year}
              >
                {year}
              </button>
            ))}
          </div>
        )}
      </section>
    </article>
  );
};

export default DatePicker;

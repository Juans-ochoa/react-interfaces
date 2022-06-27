import React, { useState } from "react";
import "./styles.css";
import Calendar from "./Calendar";

const DatePicker = () => {
  const [showYears, setShowYears] = useState(false);
  const [showMonths, setShowMonths] = useState(false);
  const [showDays, setShowDays] = useState(true);

  return (
    <article className="calendar">
      <header className="calendar__header">
        <button>&#60;</button>
        <button>Months</button>
        <button>&#62;</button>
      </header>
      <section className="calendar__body">
        <ul className="calendar__days">
          {Calendar.weekDays.map((day) => (
            <li key={day.id} className="calendar__nameWeek">
              {day.name}
            </li>
          ))}
        </ul>
        {showDays && (
          <div className="calendar__month_days">
            {Calendar.mothDays.map(({ number }) => (
              <button key={number}>{number}</button>
            ))}
          </div>
        )}
        {showMonths && (
          <div className="calendar__months">
            {Calendar.months.map(({ id, name }) => (
              <button key={id}>{name}</button>
            ))}
          </div>
        )}
        {showYears && (
          <div className="calendar__years">
            {Calendar.years.map((year) => (
              <button key={year}>{year}</button>
            ))}
          </div>
        )}
      </section>
    </article>
  );
};

export default DatePicker;

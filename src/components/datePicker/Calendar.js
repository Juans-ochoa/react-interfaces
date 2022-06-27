class Calendar {
  constructor() {
    this.currentDate = new Date();
    this.currentYear = this.currentDate.getFullYear();
    this.currentMonth = this.currentDate.getMonth();
    this.currentWeekDay = this.currentDate.getUTCDay();
    this.currentMonthDay = this.currentDate.getDay();

    this.years = [];
    this.months = [
      { id: 0, name: "enero" },
      { id: 1, name: "febrero" },
      { id: 2, name: "marzo" },
      { id: 3, name: "abril" },
      { id: 4, name: "mayo" },
      { id: 5, name: "junio" },
      { id: 6, name: "julio" },
      { id: 7, name: "agosto" },
      { id: 8, name: "septiembre" },
      { id: 9, name: "octubre" },
      { id: 10, name: "noviembre" },
      { id: 11, name: "diciembre" },
    ];
    this.weekDays = [
      { id: 0, name: "Do" },
      { id: 1, name: "Lu" },
      { id: 2, name: "Ma" },
      { id: 3, name: "Mi" },
      { id: 4, name: "Ju" },
      { id: 5, name: "Vi" },
      { id: 6, name: "Sa" },
    ];
    this.mothDays = [];

    this.selectYear = null;
    this.selectWeekDay = null;
    this.selectMonthDay = null;

    this.generateYears();
    this.generateMonthDays();
  }

  generateYears(year = null) {
    this.years = Array.from({ length: 13 }).map(
      (_, i) => (year || this.currentYear) - 6 + i
    );
  }

  generateMonthDays(year, month) {
    year = year || this.currentYear;
    month = month >= 0 ? month : this.currentMonth;
    if (month === 11) {
      month = 0;
      year++;
    } else {
      month++;
    }

    const numberDays = new Date(year, month, 0).getDate();
    this.mothDays = Array.from({ length: numberDays }).map((_, i) => ({
      id: i + 1,
      number: i + 1,
      weekDay: new Date(year, month - 1, i + 1).getDay(),
      month: month - 1,
    }));
  }
}

export default new Calendar();

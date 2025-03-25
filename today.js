// Add 'today' class to the current day in the full calendar
const todayDayDiv = document.querySelector(`#${monthNames[currentMonth].toLowerCase()}-list .calendar-day:nth-child(${currentDay})`);
if (todayDayDiv) {
    todayDayDiv.classList.add('today');
}
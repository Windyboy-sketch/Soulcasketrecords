window.onload = function() {
    const currentMonthSection = document.getElementById(`${monthNames[currentMonth].toLowerCase()}-list`).parentElement;
    currentMonthSection.scrollIntoView({ behavior: 'smooth' });
};
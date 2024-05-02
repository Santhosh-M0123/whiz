export function getDayFromDate(dateString) {
    const date = new Date(dateString);
    const options = { weekday: 'long' };
    const day = new Intl.DateTimeFormat('en-US', options).format(date);
    return day.slice(0,3)
}

export function getCurrentDateAndDay() {
    const currentDate = new Date();
  
    // Get day name
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayName = days[currentDate.getDay()];
  
    // Get month name
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthName = months[currentDate.getMonth()];
  
    // Get day of the month
    const dayOfMonth = currentDate.getDate();
  
    // Format the date and day string
    const formattedDateAndDay = `${dayName}, ${monthName} ${dayOfMonth}`;
  
    return formattedDateAndDay;
  }
  
  
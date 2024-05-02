export function displayCurrentTime() {
    const interval = setInterval(() => {
      const currentTime = new Date();
      const formattedTime = currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
      console.log(formattedTime);
    }, 10000); // Execute every 10 seconds
  
    // Stop the interval after 10 seconds
    setTimeout(() => {
      clearInterval(interval);
    }, 10000); // Stop after 10 seconds
  }
  
export function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
  }

export function getCurrentDate() {
    const now = new Date();
    return now.toLocaleDateString('en-US', { weekday: 'long', day: '2-digit', month: 'short', year: 'numeric' });
  }


export function getGreeting() {
    const now = new Date();
    const hour = now.getHours();

    if (hour < 12) {
      return "Good Morning!! Have a nice day.";
    } else if (hour >= 12 && hour < 18) {
      return "Good Afternoon!! How's it going?";
    } else {
      return "Good Evening!! How was your day?";
    }
  }

export function getTimeFromFormat(timeString) {
    // Parse the time string to create a Date object
    const date = new Date(timeString);
  
    // Extract hour and minute components
    const hour = date.getHours();
    const minute = date.getMinutes();
  
    // Format the time with leading zeros if necessary
    const formattedHour = hour < 10 ? `0${hour}` : hour;
    const formattedMinute = minute < 10 ? `0${minute}` : minute;
  
    // Concatenate hour and minute with a dot separator
    const formattedTime = `${formattedHour}.${formattedMinute}`;
  
    return formattedTime;
  }
  
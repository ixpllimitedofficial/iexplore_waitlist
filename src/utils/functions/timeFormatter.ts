export const formatTo12Hour = (time: string): string => {
    // Make sure time is in valid format, e.g. "14:39:00"
    if (!/^([01]?[0-9]|2[0-3]):([0-5]?[0-9]):([0-5]?[0-9])$/.test(time)) {
      throw new Error("Invalid time format");
    }
  
    // Create a date using a fixed date to avoid timezone issues
    const date = new Date(`1970-01-01T${time}Z`); // Using Z for UTC time
  
    // Return formatted time in 12-hour format
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
  };
  